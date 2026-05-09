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
    <article className="editorial-card group flex flex-col p-6">
      {/* Meta row */}
      <div className="mb-4 flex items-center gap-3">
        <time dateTime={article.date} className="font-mono text-xs text-text-muted">
          {article.date}
        </time>
        <span className="h-px flex-1 bg-border" />
        <span className="font-mono text-xs text-text-muted">
          {article.readingTime} {readingTimeLabel}
        </span>
      </div>

      {/* Series */}
      {article.series && (
        <div className="mb-3">
          <span className="tag-pill">{article.series}</span>
        </div>
      )}

      {/* Title */}
      <h2 className="mb-3 font-display text-2xl font-medium leading-tight">
        <Link href={`/${lang}/blog/${article.slug}`} className="accent-link text-text-primary">
          {article.title}
        </Link>
      </h2>

      {/* Description */}
      <p className="mb-5 flex-1 text-sm leading-relaxed text-text-secondary">
        {article.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
