import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxOptions } from '@/lib/mdx/config';
import { components } from '@/lib/mdx/components';
import { Article } from '@/types/article';

interface MdxContentProps {
  source: string;
  article?: Article;
}

export function MdxContent({ source, article }: MdxContentProps) {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <MDXRemote
        source={source}
        options={mdxOptions as any}
        components={{
          ...components,
          h2: ({ children, ...props }) => (
            <h2 {...props} id={typeof children === 'string' ? children.toLowerCase().replace(/[^a-z0-9]+/g, '-') : ''}>
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3 {...props} id={typeof children === 'string' ? children.toLowerCase().replace(/[^a-z0-9]+/g, '-') : ''}>
              {children}
            </h3>
          ),
          h4: ({ children, ...props }) => (
            <h4 {...props} id={typeof children === 'string' ? children.toLowerCase().replace(/[^a-z0-9]+/g, '-') : ''}>
              {children}
            </h4>
          ),
          h5: ({ children, ...props }) => (
            <h5 {...props} id={typeof children === 'string' ? children.toLowerCase().replace(/[^a-z0-9]+/g, '-') : ''}>
              {children}
            </h5>
          ),
          h6: ({ children, ...props }) => (
            <h6 {...props} id={typeof children === 'string' ? children.toLowerCase().replace(/[^a-z0-9]+/g, '-') : ''}>
              {children}
            </h6>
          ),
        }}
      />
    </div>
  );
}