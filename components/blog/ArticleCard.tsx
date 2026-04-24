'use client';

import Link from 'next/link';
import { Article } from '@/types/article';
import { Locale } from '@/lib/i18n';

interface ArticleCardProps {
  article: Article;
  lang: Locale;
}

export function ArticleCard({ article, lang }: ArticleCardProps) {
  const readingTimeLabel = lang === 'zh' ? '分钟阅读' : 'min read';

  return (
    <article className="light-article-card">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-primary mb-2">
          <Link href={`/${lang}/blog/${article.slug}`} className="hover:text-brand-primary transition-colors">
            {article.title}
          </Link>
        </h2>
        <div className="flex items-center text-sm text-muted mb-3">
          <time dateTime={article.date}>{article.date}</time>
          <span className="mx-2">•</span>
          <span>{article.readingTime} {readingTimeLabel}</span>
        </div>
        <p className="text-secondary mb-4">{article.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs rounded-full hover:bg-brand-primary/20 transition-colors cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
