'use client';

import { useState } from 'react';
// import { useMDXComponent } from 'next-contentlayer/hooks';
import { CodeBlock as CodeBlockType } from 'react-code-blocks';

interface CodeBlockProps {
  children?: React.ReactNode;
  className?: string;
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  const language = className?.split(' ')
    .find((c) => c.startsWith('language-'))
    ?.replace('language-', '') || 'text';
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const code = typeof children === 'string' ? children : '';
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="flex items-center justify-between bg-gray-900 rounded-t-lg px-4 py-2">
        <span className="text-sm text-gray-400">{language}</span>
        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-gray-200 transition-colors"
          title="Copy code"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <CodeBlockType
        text={typeof children === 'string' ? children : ''}
        language={language}
        showLineNumbers
        theme="github"
      />
    </div>
  );
}
