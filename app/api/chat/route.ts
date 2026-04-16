import { NextRequest } from 'next/server';
import { buildSystemPrompt } from '@/lib/agent/system-prompt';
import { searchKnowledge, needsContext } from '@/lib/agent/search';

/**
 * Agent Chat API Route
 * 使用 OpenRouter API 实现流式对话
 */

// IP 限速配置
const RATE_LIMIT = {
  maxRequests: 20, // 每 IP 每天最多 20 条
  windowMs: 24 * 60 * 60 * 1000, // 24 小时
};

// 简单的内存限速存储（生产环境可用 Vercel KV）
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// 检查限速
function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    // 新窗口
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT.windowMs,
    });
    return { allowed: true, remaining: RATE_LIMIT.maxRequests - 1, resetTime: now + RATE_LIMIT.windowMs };
  }

  if (record.count >= RATE_LIMIT.maxRequests) {
    // 超出限制
    return { allowed: false, remaining: 0, resetTime: record.resetTime };
  }

  // 增加计数
  record.count++;
  rateLimitStore.set(ip, record);
  return { allowed: true, remaining: RATE_LIMIT.maxRequests - record.count, resetTime: record.resetTime };
}

export async function POST(request: NextRequest) {
  try {
    // 获取 IP
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
               request.headers.get('x-real-ip') ||
               'unknown';

    // 检查限速
    const rateLimitResult = checkRateLimit(ip);
    if (!rateLimitResult.allowed) {
      return new Response(
        JSON.stringify({
          error: 'Rate limit exceeded',
          message: '今天的对话次数已达上限，明天再来聊吧！',
          resetTime: rateLimitResult.resetTime,
        }),
        {
          status: 429,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // 解析请求
    const { message, history = [] } = await request.json();

    if (!message || typeof message !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Message is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 搜索知识库上下文
    let context = '';
    if (needsContext(message)) {
      context = searchKnowledge(message);
    }

    // 构建 System Prompt
    const systemPrompt = buildSystemPrompt(context);

    // 构建消息历史
    const messages = [
      { role: 'system', content: systemPrompt },
      ...history.map((h: { role: string; content: string }) => ({
        role: h.role,
        content: h.content,
      })),
      { role: 'user', content: message },
    ];

    // 模型配置：优先使用环境变量，否则使用默认模型
const DEFAULT_MODEL = 'google/gemini-2.5-flash-lite';
const model = process.env.OPENROUTER_MODEL || DEFAULT_MODEL;
    const openRouterResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        'X-Title': 'Alex Xiao AI Agent',
      },
      body: JSON.stringify({
        model,
        messages,
        stream: true,
        max_tokens: 1024,
      }),
    });

    if (!openRouterResponse.ok) {
      const errorData = await openRouterResponse.json().catch(() => ({ error: 'Unknown error' }));
      console.error('OpenRouter API Error:', errorData);
      return new Response(
        JSON.stringify({ error: 'API call failed', details: errorData }),
        { status: openRouterResponse.status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 流式响应
    const stream = new ReadableStream({
      async start(controller) {
        const reader = openRouterResponse.body?.getReader();
        if (!reader) {
          controller.close();
          return;
        }

        const decoder = new TextDecoder();
        const encoder = new TextEncoder();

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n').filter(line => line.trim() !== '');

            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const data = line.slice(6);
                if (data === '[DONE]') {
                  controller.enqueue(encoder.encode('data: [DONE]\n\n'));
                  continue;
                }

                try {
                  const parsed = JSON.parse(data);
                  const content = parsed.choices?.[0]?.delta?.content;
                  if (content) {
                    controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
                  }
                } catch {
                  // 忽略解析错误
                }
              }
            }
          }
        } finally {
          reader.releaseLock();
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'X-RateLimit-Limit': String(RATE_LIMIT.maxRequests),
        'X-RateLimit-Remaining': String(rateLimitResult.remaining),
        'X-RateLimit-Reset': String(rateLimitResult.resetTime),
      },
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}