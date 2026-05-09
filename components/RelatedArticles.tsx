'use client';

import { Article } from '@/types/article';
import Link from 'next/link';
import { Locale } from '@/lib/i18n';

interface RelatedArticlesProps {
  currentArticle: Article;
  allArticles: Article[];
  lang: Locale;
}

export function RelatedArticles({ currentArticle, allArticles, lang }: RelatedArticlesProps) {
  const relatedArticles = getRelatedArticles(currentArticle, allArticles);
  const title = lang === 'zh' ? '相关文章' : 'Related';
  const readingTimeLabel = lang === 'zh' ? '分钟阅读' : 'min read';

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 border border-border bg-surface p-6">
      <h3 className="mb-4 font-display text-lg font-medium text-text-primary">{title}</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {relatedArticles.map((article) => (
          <article
            key={article.slug}
            className="editorial-card p-4 transition-colors hover:border-accent-dim"
          >
            <h4 className="mb-2 font-semibold text-text-primary">
              <Link
                href={`/${lang}/blog/${article.slug}`}
                className="accent-link"
              >
                {article.title}
              </Link>
            </h4>
            <p className="mb-2 text-sm text-text-secondary">{article.description}</p>
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <time dateTime={article.date}>{article.date}</time>
              <span>•</span>
              <span>
                {article.readingTime} {readingTimeLabel}
              </span>
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              {article.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="tag-pill"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function getRelatedArticles(currentArticle: Article, allArticles: Article[]): Article[] {
  // 按标签相似度排序
  const relatedByTags = allArticles
    .filter(article => article.slug !== currentArticle.slug)
    .map(article => ({
      ...article,
      similarity: calculateTagSimilarity(currentArticle.tags, article.tags)
    }))
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, 4);

  // 按日期排序（最近的文章）
  const recentArticles = allArticles
    .filter(article => article.slug !== currentArticle.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  // 合并并去重
  const combined = [...relatedByTags, ...recentArticles];
  const unique = combined.filter((article, index, self) =>
    index === self.findIndex(t => t.slug === article.slug)
  );

  return unique.slice(0, 4);
}

function calculateTagSimilarity(tags1: string[], tags2: string[]): number {
  const commonTags = tags1.filter(tag => tags2.includes(tag));
  const totalTags = new Set([...tags1, ...tags2]).size;

  return commonTags.length / totalTags;
}
