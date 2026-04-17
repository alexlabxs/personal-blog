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
    return Array.from(new Set(posts.flatMap(post => post.tags))).sort();
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts;
    return posts.filter(post => post.tags.includes(selectedTag));
  }, [posts, selectedTag]);

  const handleTagClick = (tag: string | null) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };

  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-16 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 font-mono text-terminal-green text-sm">~/blog</div>
        <h1 className="mb-8 text-4xl font-bold">{dict.blog.title}</h1>
        <p className="text-gray-400 mb-12">{dict.blog.description}</p>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => handleTagClick(null)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedTag === null
                  ? 'bg-brand-primary text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {lang === 'zh' ? '全部' : 'All'} ({posts.length})
            </button>
            {allTags.map((tag) => {
              const count = posts.filter(post => post.tags.includes(tag)).length;
              return (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedTag === tag
                      ? 'bg-brand-primary text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {tag} ({count})
                </button>
              );
            })}
          </div>
          {selectedTag && (
            <p className="text-sm text-gray-400">
              {lang === 'zh' ? '正在筛选' : 'Filtering'}: <span className="text-brand-primary">{selectedTag}</span>
              <button
                onClick={() => setSelectedTag(null)}
                className="ml-2 text-gray-500 hover:text-white underline"
              >
                {lang === 'zh' ? '清除筛选' : 'Clear'}
              </button>
            </p>
          )}
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredPosts.map((post) => (
              <ArticleCard key={post.slug} article={post} lang={lang} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-400">
            <p>{dict.blog.noPosts}</p>
          </div>
        )}
      </div>
    </main>
  );
}
