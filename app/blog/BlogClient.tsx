'use client';

import { useState, useMemo } from 'react';
import { Article } from '@/types/article';
import { ArticleCard } from '@/components/blog/ArticleCard';

interface BlogClientProps {
  posts: Article[];
}

export function BlogClient({ posts }: BlogClientProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // 获取所有唯一标签并排序
  const allTags = useMemo(() => {
    return Array.from(new Set(posts.flatMap(post => post.tags))).sort();
  }, [posts]);

  // 根据选中的标签过滤文章
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
        <h1 className="mb-8 text-4xl font-bold">博客文章</h1>
        <p className="text-gray-400 mb-12">分享技术思考、实战经验和产品见解</p>

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
              全部 ({posts.length})
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
              正在筛选: <span className="text-brand-primary">{selectedTag}</span>
              <button
                onClick={() => setSelectedTag(null)}
                className="ml-2 text-gray-500 hover:text-white underline"
              >
                清除筛选
              </button>
            </p>
          )}
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredPosts.map((post) => (
              <ArticleCard key={post.slug} article={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-400">
            <p>没有找到相关文章</p>
          </div>
        )}
      </div>
    </main>
  );
}
