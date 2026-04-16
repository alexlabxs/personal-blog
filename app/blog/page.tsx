import { getSortedPostsData } from '@/lib/posts';
import { BlogClient } from './BlogClient';

export const metadata = {
  title: '博客',
  description: '技术博客，分享全栈开发经验、AI 探索和产品思考。React、Next.js、TypeScript、Node.js 等技术文章。',
  openGraph: {
    title: '博客 | Niuniu',
    description: '技术博客，分享全栈开发经验、AI 探索和产品思考',
    type: 'website',
  },
};

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return <BlogClient posts={allPostsData} />;
}
