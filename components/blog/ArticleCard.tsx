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
    <article className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          <Link href={`/${lang}/blog/${article.slug}`} className="hover:text-blue-600 transition-colors">
            {article.title}
          </Link>
        </h2>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <time dateTime={article.date}>{article.date}</time>
          <span className="mx-2">•</span>
          <span>{article.readingTime} {readingTimeLabel}</span>
        </div>
        <p className="text-gray-600 mb-4">{article.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full hover:bg-blue-200 transition-colors cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
