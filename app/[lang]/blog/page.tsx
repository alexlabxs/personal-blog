import { Metadata } from 'next';
import { getDictionary, Locale } from '@/lib/i18n';
import { BlogClient } from './BlogClient';
import { getSortedPostsData } from '@/lib/posts';

type Props = {
  params: { lang: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dict = await getDictionary(params.lang);
  return {
    title: dict.blog.title,
    description: dict.blog.description,
    openGraph: {
      title: `${dict.blog.title} | Alex`,
      description: dict.blog.description,
      type: 'website',
    },
  };
}

export default function BlogPage({ params }: Props) {
  const allPostsData = getSortedPostsData();
  return <BlogClient posts={allPostsData} lang={params.lang} />;
}
