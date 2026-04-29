'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  showCursor?: boolean;
}

export function Typewriter({
  text,
  speed = 50,
  className,
  showCursor = true,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={cn('font-mono', className)}>
      {displayText}
      {showCursor && (
        <motion.span
          className="ml-1 inline-block h-5 w-2.5 bg-accent"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
    </span>
  );
}

interface CodeSnippetProps {
  code: string;
  className?: string;
}

export function CodeSnippet({ code, className }: CodeSnippetProps) {
  return (
    <motion.pre
      className={cn(
        'overflow-hidden rounded-lg bg-code p-4 text-sm text-secondary',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <code className="font-mono">{code}</code>
    </motion.pre>
  );
}
