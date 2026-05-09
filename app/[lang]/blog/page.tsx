import { Metadata } from 'next';
import { getDictionary, Locale } from '@/lib/i18n';
import { BlogClient } from './BlogClient';
import { getPublicPostsData } from '@/lib/posts';
import { generateBlogListMetadata } from '@/lib/seo/metadata';

type Props = {
  params: { lang: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return generateBlogListMetadata(params.lang);
}

export default function BlogPage({ params }: Props) {
  const allPostsData = getPublicPostsData();
  return <BlogClient posts={allPostsData} lang={params.lang} />;
}
