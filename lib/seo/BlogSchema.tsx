import Script from 'next/script';
import { generateBlogPostingSchema } from './schema';

interface BlogSchemaProps {
  post: {
    title: string;
    description?: string;
    date: string;
    slug: string;
    tags?: string[];
    content?: string;
  };
}

/**
 * 博客文章结构化数据组件
 */
export function BlogSchema({ post }: BlogSchemaProps) {
  const schema = generateBlogPostingSchema(post);

  return (
    <Script
      id="blog-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}