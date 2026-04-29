import { Article } from '@/types/article';

interface TagFilterProps {
  articles: Article[];
}

export function TagFilter({ articles }: TagFilterProps) {
  const allTags = Array.from(
    new Set(articles.flatMap(article => article.tags))
  ).sort();

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2 mb-4">
        <button className="px-3 py-1 rounded-full text-sm bg-accent text-white">
          全部
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className="px-3 py-1 rounded-full text-sm bg-gray-700 text-gray-300 hover:bg-gray-600"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}