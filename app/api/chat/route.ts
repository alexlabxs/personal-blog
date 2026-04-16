import { NextRequest, NextResponse } from 'next/server';

/**
 * Agent Chat API Route
 * Phase 2 将实现完整的 RAG + LLM 功能
 *
 * 当前版本返回占位响应
 */
export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    // TODO: Phase 2 实现
    // 1. IP 限速检查
    // 2. 向量检索 (RAG)
    // 3. 注入 System Prompt + 上下文
    // 4. 调用 LLM API
    // 5. 流式返回响应

    return NextResponse.json(
      {
        role: 'assistant',
        content: 'Agent 功能将在 Phase 2 实现。敬请期待！',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
