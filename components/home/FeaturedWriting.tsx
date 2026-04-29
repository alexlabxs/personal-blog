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
    <section className="border-t border-border py-20">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section header */}
        <div className="mb-14 flex items-center gap-6">
          <motion.h2
            className="whitespace-nowrap font-display text-3xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {lang === 'zh' ? '最新思考' : 'Latest Thinking'}
          </motion.h2>
          <div className="section-rule" />
        </div>

        {/* Editorial grid — asymmetric layout */}
        {articles.length > 0 ? (
          <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <motion.div
                key={article.slug}
                className="bg-background"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ArticleCard article={article} lang={lang} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            className="py-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display text-xl text-text-muted">
              {lang === 'zh' ? '内容准备中...' : 'Content coming soon...'}
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm text-text-muted">
              {lang === 'zh'
                ? '深度文章正在撰写中。探索 AI 工程化与系统设计的思考与实践。'
                : 'Deep articles in progress. Exploring thinking and practices on AI engineering and systems design.'}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
