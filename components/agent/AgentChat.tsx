'use client';

import { useState, useRef, useEffect } from 'react';
import { FiMessageSquare, FiX, FiTerminal } from 'react-icons/fi';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

/**
 * Agent Chat 主组件
 * 右下角浮动按钮 + 展开聊天窗口
 */
export function AgentChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rateLimited, setRateLimited] = useState(false);
  const [remaining, setRemaining] = useState(20);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 自动滚动到底部
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // 发送消息
  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage.content,
          history: messages.slice(-6), // 最近 6 条历史
        }),
      });

      // 检查限速
      const limit = response.headers.get('X-RateLimit-Remaining');
      if (limit) setRemaining(parseInt(limit));

      if (response.status === 429) {
        setRateLimited(true);
        const data = await response.json();
        setMessages(prev => [
          ...prev,
          {
            id: Date.now().toString(),
            role: 'assistant',
            content: data.message || '今天的对话次数已达上限，明天再来聊吧！',
          },
        ]);
        return;
      }

      if (!response.ok) {
        throw new Error('API error');
      }

      // 流式读取响应
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: '',
      };

      setMessages(prev => [...prev, assistantMessage]);

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split('\n').filter(line => line.trim());

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);
              if (data === '[DONE]') continue;

              try {
                const parsed = JSON.parse(data);
                if (parsed.content) {
                  setMessages(prev =>
                    prev.map(m =>
                      m.id === assistantMessage.id
                        ? { ...m, content: m.content + parsed.content }
                        : m
                    )
                  );
                }
              } catch {
                // 忽略解析错误
              }
            }
          }
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'assistant',
          content: '抱歉，网络出现了问题。请稍后再试。',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // 处理键盘输入
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* 浮动按钮 */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-terminal-dim border-2 border-terminal-green text-terminal-green transition-all hover:bg-terminal-green/20 ${
          isOpen ? 'hidden' : 'animate-pulse'
        }`}
        aria-label="打开聊天"
      >
        <FiTerminal className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-terminal-green" />
      </button>

      {/* 聊天窗口 */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col w-[380px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-100px)] bg-terminal-bg border-2 border-terminal-green rounded-lg shadow-2xl">
          {/* 头部 */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-terminal-border bg-terminal-dim/50">
            <div className="flex items-center gap-2">
              <FiTerminal className="h-5 w-5 text-terminal-green" />
              <span className="font-mono text-terminal-green text-sm">~/chat</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500">
                剩余 {remaining} 次
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-terminal-green transition-colors"
                aria-label="关闭聊天"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* 消息区域 */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin">
            {/* 欢迎消息 */}
            {messages.length === 0 && (
              <div className="text-center py-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-terminal-dim rounded font-mono text-terminal-green text-sm mb-4">
                  <span className="h-2 w-2 rounded-full bg-terminal-green animate-pulse" />
                  Agent Online
                </div>
                <p className="text-gray-400 text-sm">
                  我是 Niuniu 的 AI 分身，有什么想问的？
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {['你的技术栈是什么？', '有什么项目？', '为什么喜欢 Next.js？'].map(q => (
                    <button
                      key={q}
                      onClick={() => setInput(q)}
                      className="px-3 py-1 text-xs bg-code-bg text-gray-300 rounded hover:text-terminal-green transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 消息列表 */}
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2 rounded-lg font-mono text-sm ${
                    msg.role === 'user'
                      ? 'bg-brand-primary text-white'
                      : 'bg-code-bg text-gray-200 border border-terminal-border'
                  }`}
                >
                  {msg.role === 'assistant' && (
                    <span className="text-terminal-green text-xs mb-1 block">
                      &gt; {isLoading && msg.content === '' ? 'thinking...' : 'response'}
                    </span>
                  )}
                  <span className="whitespace-pre-wrap">{msg.content}</span>
                </div>
              </div>
            ))}

            {/* 加载指示器 */}
            {isLoading && messages[messages.length - 1]?.role === 'user' && (
              <div className="flex justify-start">
                <div className="px-4 py-2 bg-code-bg rounded-lg border border-terminal-border">
                  <span className="font-mono text-terminal-green text-sm">
                    <span className="animate-pulse">thinking...</span>
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* 输入区域 */}
          <div className="px-4 py-3 border-t border-terminal-border bg-terminal-dim/30">
            {rateLimited && (
              <p className="text-xs text-orange-400 mb-2 text-center">
                今日对话次数已用完
              </p>
            )}
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="输入问题..."
                disabled={isLoading || rateLimited}
                className="flex-1 px-4 py-2 bg-code-bg border border-terminal-border rounded text-sm text-gray-200 placeholder-gray-500 focus:border-terminal-green focus:outline-none disabled:opacity-50"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading || rateLimited}
                className="px-4 py-2 bg-terminal-dim border border-terminal-green rounded text-terminal-green text-sm hover:bg-terminal-green/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                发送
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}