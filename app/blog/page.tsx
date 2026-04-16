import { getSortedPostsData } from '@/lib/posts';
import { BlogClient } from './BlogClient';

export const metadata = {
  title: '博客 | Alex Xiao',
  description: '技术博客，分享开发经验和思考',
};

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return <BlogClient posts={allPostsData} />;
}
