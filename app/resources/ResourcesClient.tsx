'use client';

import { useState, useMemo } from 'react';
import { resources, categories } from '@/lib/resources';
import { FaExternalLinkAlt } from 'react-icons/fa';

export function ResourcesClient() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // 根据分类和搜索过滤资源
  const filteredResources = useMemo(() => {
    let result = resources;

    if (selectedCategory) {
      result = result.filter(r => r.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(r =>
        r.name.toLowerCase().includes(query) ||
        r.description.toLowerCase().includes(query) ||
        r.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  const featuredResources = filteredResources.filter(r => r.featured);
  const otherResources = filteredResources.filter(r => !r.featured);

  // 统计每个分类的资源数量
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    resources.forEach(r => {
      counts[r.category] = (counts[r.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-16 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <div className="font-mono text-terminal-green text-sm mb-4">~/resources</div>
          <h1 className="text-4xl font-bold mb-2">资源分享</h1>
          <p className="text-gray-400">收集整理的开发者优质资源，持续更新</p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="搜索资源..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 bg-code-bg border border-terminal-border rounded-lg text-foreground focus:border-terminal-green focus:outline-none transition-colors"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                selectedCategory === null
                  ? 'bg-terminal-green text-black'
                  : 'bg-code-bg text-gray-300 hover:bg-gray-700'
              }`}
            >
              全部 ({resources.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-terminal-green text-black'
                    : 'bg-code-bg text-gray-300 hover:bg-gray-700'
                }`}
              >
                {cat.icon} {cat.name} ({categoryCounts[cat.id] || 0})
              </button>
            ))}
          </div>
          {selectedCategory && (
            <p className="mt-4 text-sm text-gray-400">
              {categories.find(c => c.id === selectedCategory)?.description}
              <button
                onClick={() => setSelectedCategory(null)}
                className="ml-2 text-terminal-green hover:underline"
              >
                清除筛选
              </button>
            </p>
          )}
        </div>

        {/* Featured Resources */}
        {featuredResources.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-6 font-mono text-terminal-green text-sm">
              <span className="mr-2">★</span>RECOMMENDED
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {featuredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} featured />
              ))}
            </div>
          </section>
        )}

        {/* Other Resources */}
        {otherResources.length > 0 && (
          <section>
            <h2 className="mb-6 font-mono text-gray-400 text-sm">ALL RESOURCES</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {otherResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </section>
        )}

        {filteredResources.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <p>没有找到匹配的资源</p>
          </div>
        )}
      </div>
    </main>
  );
}

function ResourceCard({ resource, featured = false }: { resource: typeof resources[0]; featured?: boolean }) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block p-4 rounded-lg transition-all ${
        featured
          ? 'bg-terminal-dim/20 border border-terminal-green/30 hover:border-terminal-green hover:bg-terminal-dim/30'
          : 'bg-code-bg border border-terminal-border hover:border-terminal-green/50'
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className={`font-semibold ${featured ? 'text-terminal-green' : 'text-foreground group-hover:text-terminal-green'}`}>
          {resource.name}
        </h3>
        <FaExternalLinkAlt className="w-3 h-3 text-gray-400 group-hover:text-terminal-green transition-colors" />
      </div>
      <p className="text-sm text-gray-400 mb-3 line-clamp-2">{resource.description}</p>
      {resource.tags && (
        <div className="flex flex-wrap gap-1">
          {resource.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-gray-700 text-gray-300 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}