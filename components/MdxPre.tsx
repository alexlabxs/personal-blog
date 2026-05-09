import React from 'react';
import { CodeBlock } from '@/components/CodeBlock';

type Props = React.HTMLAttributes<HTMLPreElement> & {
  children?: React.ReactNode;
};

export function MdxPre({ children, ...props }: Props) {
  if (React.isValidElement(children)) {
    const childProps: any = (children as any).props;
    const className: string | undefined = childProps?.className;
    const raw = childProps?.children;
    const code = typeof raw === 'string' ? raw.trimEnd() : '';

    // fenced code blocks: <pre><code className="language-xxx">...</code></pre>
    if (code) {
      const preClassName = (props as any).className as string | undefined;
      return (
        <div className={preClassName}>
          <CodeBlock className={className}>
            {code}
          </CodeBlock>
        </div>
      );
    }
  }

  return (
    <pre {...props}>
      {children}
    </pre>
  );
}
