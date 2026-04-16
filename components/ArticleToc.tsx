'use client';

import { useEffect, useState, useRef } from 'react';
import { Article } from '@/types/article';

interface ArticleTocProps {
  content: string;
  article: Article;
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function ArticleToc({ content, article }: ArticleTocProps) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const tocRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 解析 Markdown 内容，提取标题
    const headings = parseHeadings(content);
    setToc(headings);
  }, [content]);

  useEffect(() => {
    // 监听滚动事件，更新活跃的目录项
    const handleScroll = () => {
      const headings = document.querySelectorAll('h2, h3, h4, h5, h6');
      const scrollPosition = window.scrollY + 100;

      for (const heading of headings) {
        const element = heading as HTMLElement;
        const id = element.id;
        const offsetTop = element.offsetTop;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + element.offsetHeight) {
          setActiveId(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parseHeadings = (markdown: string): TocItem[] => {
    const headings: TocItem[] = [];
    const lines = markdown.split('\n');

    lines.forEach((line) => {
      const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
      if (headingMatch && headingMatch[1] && headingMatch[2]) {
        const level = headingMatch[1].length;
        const text = headingMatch[2].trim();
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

        headings.push({
          id,
          text,
          level,
        });
      }
    });

    return headings;
  };

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={tocRef} className="hidden lg:block w-64 p-6 bg-gray-50 rounded-lg sticky top-4 h-fit">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">文章目录</h3>
      {toc.length > 0 ? (
        <ul className="space-y-2">
          {toc.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToHeading(item.id)}
                className={`text-sm text-left hover:text-blue-600 transition-colors ${
                  activeId === item.id ? 'text-blue-600 font-semibold' : 'text-gray-600'
                }`}
                style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">暂无目录</p>
      )}
    </div>
  );
}