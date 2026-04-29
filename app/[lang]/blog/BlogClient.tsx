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

export function BlogClient({ posts, lang }: BlogClientProps) {
  const dict = useTranslation(lang);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    return Array.from(new Set(posts.flatMap((post) => post.tags))).sort();
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts;
    return posts.filter((post) => post.tags.includes(selectedTag));
  }, [posts, selectedTag]);

  const handleTagClick = (tag: string | null) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };

  return (
    <main className="min-h-screen bg-background px-4 py-20 text-foreground md:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
          ~/blog
        </div>
        <h1 className="mb-4 font-display text-4xl font-medium">{dict.blog.title}</h1>
        <p className="mb-12 text-text-secondary">{dict.blog.description}</p>

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
              {lang === 'zh' ? '全部' : 'All'} ({posts.length})
            </button>
            {allTags.map((tag) => {
              const count = posts.filter((post) => post.tags.includes(tag)).length;
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
