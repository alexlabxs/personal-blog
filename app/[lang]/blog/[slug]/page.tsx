import { notFound } from 'next/navigation';
import { getPostData, getPublicPostsData, isPublicPost } from '@/lib/posts';
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
  const posts = getPublicPostsData();
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
  if (!isPublicPost(params.slug)) {
    return {};
  }

  const postData = getPostData(params.slug);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://alexlabx.com';

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
  if (!isPublicPost(params.slug)) {
    notFound();
  }

  const postData = getPostData(params.slug);
  const allPostsData = getPublicPostsData();
  const readingTimeLabel = params.lang === 'zh' ? '分钟阅读' : 'min read';

  if (!postData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-16 md:px-8">
      <BlogSchema post={postData} />
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 font-mono text-accent text-sm">~/blog/{params.slug}</div>
        <h1 className="mb-6 font-display text-4xl font-medium text-text-primary">{postData.title}</h1>

        <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-text-muted">
          <time dateTime={postData.date}>{postData.date}</time>
          <span>•</span>
          <span>
            {postData.readingTime} {readingTimeLabel}
          </span>
          {postData.series && (
            <>
              <span>•</span>
              <span className="text-accent">{postData.series}</span>
            </>
          )}
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {postData.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <MdxContent source={postData.content} article={postData} />
          </div>
          <div className="lg:col-span-1">
            <ArticleToc content={postData.content} article={postData} lang={params.lang} />
            <RelatedArticles currentArticle={postData} allArticles={allPostsData} lang={params.lang} />
          </div>
        </div>
      </div>
    </main>
  );
}
