'use client';

import { motion } from 'framer-motion';
import { ArticleCard } from '@/components/blog/ArticleCard';
import { Article } from '@/types/article';
import { Locale } from '@/lib/i18n';

interface FeaturedWritingProps {
  lang: Locale;
  articles: Article[];
}

export function FeaturedWriting({ lang, articles }: FeaturedWritingProps) {
  return (
    <section className="border-t border-terminal-border py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.h2
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {lang === 'zh' ? '最新思考' : 'Latest Thinking'}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ArticleCard article={article} lang={lang} />
              </motion.div>
            ))
          ) : (
            // 占位符
            <motion.div
              className="col-span-full text-center py-12 text-secondary/60"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg">
                {lang === 'zh' ? '内容准备中...' : 'Content coming soon...'}
              </p>
              <p className="text-sm mt-2 max-w-md mx-auto">
                {lang === 'zh'
                  ? '第一篇深度文章正在撰写中，敬请期待。探索 AI 工程化与系统设计的思考与实践。'
                  : 'First deep article is in progress. Stay tuned. Exploring thinking and practices on AI engineering and systems design.'}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
