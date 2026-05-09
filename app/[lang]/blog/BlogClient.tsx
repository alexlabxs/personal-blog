'use client';

import { useState, useMemo } from 'react';
import { Article } from '@/types/article';
import { ArticleCard } from '@/components/blog/ArticleCard';
import { Locale } from '@/lib/i18n';
import { useTranslation } from '@/lib/i18n/client';

interface BlogClientProps {
  posts: Article[];
  lang: Locale;
}

const SERIES_ORDER = ['AI 工程化', '系统设计', '独立开发落地'] as const;

export function BlogClient({ posts, lang }: BlogClientProps) {
  const dict = useTranslation(lang);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedSeries, setSelectedSeries] = useState<string | null>(null);
  const [showAllTags, setShowAllTags] = useState(false);

  const tagScopePosts = useMemo(() => {
    if (!selectedSeries) return posts;
    return posts.filter((p) => p.series === selectedSeries);
  }, [posts, selectedSeries]);

  const tagCounts = useMemo(() => {
    const counts = new Map<string, number>();
    tagScopePosts.forEach((post) => {
      post.tags.forEach((tag) => {
        counts.set(tag, (counts.get(tag) ?? 0) + 1);
      });
    });
    return counts;
  }, [tagScopePosts]);

  const allTags = useMemo(() => {
    return Array.from(tagCounts.entries())
      .sort((a, b) => {
        if (b[1] !== a[1]) return b[1] - a[1];
        return a[0].localeCompare(b[0]);
      })
      .map(([tag]) => tag);
  }, [tagCounts]);

  const TAGS_TOP_N = 10;
  const visibleTags = showAllTags ? allTags : allTags.slice(0, TAGS_TOP_N);

  const allSeries = useMemo(() => {
    const seriesInPosts = Array.from(
      new Set(posts.map((post) => post.series).filter(Boolean) as string[])
    );
    const ordered = SERIES_ORDER.filter((s) => seriesInPosts.includes(s));
    const others = seriesInPosts.filter((s) => !SERIES_ORDER.includes(s as any)).sort();
    return [...ordered, ...others];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    let result = posts;
    if (selectedSeries) {
      result = result.filter((post) => post.series === selectedSeries);
    }
    if (selectedTag) {
      result = result.filter((post) => post.tags.includes(selectedTag));
    }
    return result;
  }, [posts, selectedSeries, selectedTag]);

  const handleTagClick = (tag: string | null) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };

  const handleSeriesClick = (series: string | null) => {
    setSelectedSeries(series === selectedSeries ? null : series);
    setSelectedTag(null);
    setShowAllTags(false);
  };

  return (
    <main className="min-h-screen bg-background px-4 py-20 text-foreground md:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
          ~/blog
        </div>
        <h1 className="mb-4 font-display text-4xl font-medium">{dict.blog.title}</h1>
        <p className="mb-12 text-text-secondary">{dict.blog.description}</p>

        {/* Series filters */}
        {allSeries.length > 0 && (
          <div className="mb-8">
            <div className="mb-3 flex flex-wrap gap-2">
              <button
                onClick={() => handleSeriesClick(null)}
                className={`px-3 py-1 text-xs transition-colors ${
                  selectedSeries === null
                    ? 'bg-accent text-white'
                    : 'border border-border bg-surface text-text-secondary hover:text-accent'
                }`}
              >
                {lang === 'zh' ? '全部系列' : 'All series'}
              </button>
              {allSeries.map((series) => (
                <button
                  key={series}
                  onClick={() => handleSeriesClick(series)}
                  className={`px-3 py-1 text-xs transition-colors ${
                    selectedSeries === series
                      ? 'bg-accent text-white'
                      : 'border border-border bg-surface text-text-secondary hover:text-accent'
                  }`}
                >
                  {series}
                </button>
              ))}
            </div>
            {selectedSeries && (
              <p className="text-sm text-text-muted">
                {lang === 'zh' ? '当前系列' : 'Series'}:{' '}
                <span className="text-accent">{selectedSeries}</span>
                <button
                  onClick={() => setSelectedSeries(null)}
                  className="ml-2 underline hover:text-accent"
                >
                  {lang === 'zh' ? '清除' : 'Clear'}
                </button>
              </p>
            )}
          </div>
        )}

        {/* Tag filters */}
        <div className="mb-10">
          <div className="mb-3 flex flex-wrap gap-2">
            <button
              onClick={() => handleTagClick(null)}
              className={`px-3 py-1 text-xs transition-colors ${
                selectedTag === null
                  ? 'bg-accent text-white'
                  : 'border border-border bg-surface text-text-secondary hover:text-accent'
              }`}
            >
              {lang === 'zh' ? '全部标签' : 'All tags'} ({tagScopePosts.length})
            </button>
            {visibleTags.map((tag) => {
              const count = tagCounts.get(tag) ?? 0;
              return (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-3 py-1 text-xs transition-colors ${
                    selectedTag === tag
                      ? 'bg-accent text-white'
                      : 'border border-border bg-surface text-text-secondary hover:text-accent'
                  }`}
                >
                  {tag} ({count})
                </button>
              );
            })}
            {allTags.length > TAGS_TOP_N && (
              <button
                onClick={() => setShowAllTags((v) => !v)}
                className="px-3 py-1 text-xs text-text-muted underline hover:text-accent"
              >
                {lang === 'zh'
                  ? showAllTags
                    ? '收起'
                    : '更多'
                  : showAllTags
                    ? 'Less'
                    : 'More'}
              </button>
            )}
          </div>
          {selectedTag && (
            <p className="text-sm text-text-muted">
              {lang === 'zh' ? '正在筛选' : 'Filtering'}:{' '}
              <span className="text-accent">{selectedTag}</span>
              <button
                onClick={() => setSelectedTag(null)}
                className="ml-2 underline hover:text-accent"
              >
                {lang === 'zh' ? '清除筛选' : 'Clear'}
              </button>
            </p>
          )}
        </div>

        {/* Articles grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredPosts.map((post) => (
              <ArticleCard key={post.slug} article={post} lang={lang} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-text-muted">{dict.blog.noPosts}</p>
          </div>
        )}
      </div>
    </main>
  );
}
