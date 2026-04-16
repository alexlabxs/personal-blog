'use client';

import { Article } from '@/types/article';
import Link from 'next/link';

interface RelatedArticlesProps {
  currentArticle: Article;
  allArticles: Article[];
}

export function RelatedArticles({ currentArticle, allArticles }: RelatedArticlesProps) {
  const relatedArticles = getRelatedArticles(currentArticle, allArticles);

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 p-6 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">相关文章</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {relatedArticles.map((article) => (
          <article key={article.slug} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h4 className="text-base font-semibold mb-2 text-gray-900">
              <Link href={`/blog/${article.slug}`} className="hover:text-blue-600 transition-colors">
                {article.title}
              </Link>
            </h4>
            <p className="text-sm text-gray-600 mb-2">{article.description}</p>
            <div className="flex items-center text-xs text-gray-500">
              <time dateTime={article.date}>{article.date}</time>
              <span className="mx-2">•</span>
              <span>{article.readingTime} 分钟阅读</span>
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              {article.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
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