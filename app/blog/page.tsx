import { getSortedPostsData } from '@/lib/posts';
import { BlogClient } from './BlogClient';

export const metadata = {
  title: '博客',
  description: '技术博客，分享 Java 开发经验、微服务架构设计与 AI 落地实践。Spring Boot、分布式事务、财务系统等技术文章。',
  openGraph: {
    title: '博客 | Alex',
    description: '技术博客，分享 Java 开发经验、微服务架构设计与 AI 落地实践',
    type: 'website',
  },
};

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return <BlogClient posts={allPostsData} />;
}
