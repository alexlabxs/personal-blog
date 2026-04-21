import { notFound } from 'next/navigation';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import { MdxContent } from '@/components/MdxContent';
import { ArticleToc } from '@/components/ArticleToc';
import { RelatedArticles } from '@/components/RelatedArticles';
import { BlogSchema } from '@/lib/seo/BlogSchema';
import { Metadata } from 'next';
import { Locale } from '@/lib/i18n';

type Props = {
  params: {
    slug: string;
    lang: Locale;
  };
};

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  const locales = ['zh', 'en'];

  const params: { lang: string; slug: string }[] = [];
  locales.forEach(lang => {
    posts.forEach(post => {
      params.push({ lang, slug: post.slug });
    });
  });

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postData = getPostData(params.slug);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://xiaokaihan.github.io';

  return {
    title: postData.title,
    description: postData.description,
    keywords: postData.tags,
    authors: [{ name: 'Alex', url: baseUrl }],
    openGraph: {
      title: postData.title,
      description: postData.description,
      type: 'article',
      publishedTime: postData.date,
      authors: ['Alex'],
      tags: postData.tags,
      url: `${baseUrl}/${params.lang}/blog/${params.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: postData.title,
      description: postData.description,
    },
    alternates: {
      canonical: `/${params.lang}/blog/${params.slug}`,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const postData = getPostData(params.slug);
  const allPostsData = getSortedPostsData();
  const readingTimeLabel = params.lang === 'zh' ? '分钟阅读' : 'min read';

  if (!postData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-16 md:px-8">
      <BlogSchema post={postData} />
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 font-mono text-terminal-green text-sm">~/blog/{params.slug}</div>
        <h1 className="mb-8 text-4xl font-bold">{postData.title}</h1>

        <div className="flex items-center text-sm text-gray-500 mb-8">
          <time dateTime={postData.date}>{postData.date}</time>
          <span className="mx-2">•</span>
          <span>{postData.readingTime} {readingTimeLabel}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {postData.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <MdxContent source={postData.content} article={postData} />
          </div>
          <div className="lg:col-span-1">
            <ArticleToc content={postData.content} article={postData} />
            <RelatedArticles currentArticle={postData} allArticles={allPostsData} />
          </div>
        </div>
      </div>
    </main>
  );
}
