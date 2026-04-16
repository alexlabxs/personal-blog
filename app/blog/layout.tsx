import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '博客 | Alex Xiao',
  description: '技术博客，分享开发经验和思考',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
