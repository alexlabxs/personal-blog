'use client';

import { motion } from 'framer-motion';

interface HeroV2Props {
  lang: string;
  dict: any;
  profile: {
    name: string;
    role: string;
    tagline: string;
    bio: string;
  };
}

export function HeroV2({ lang, dict, profile }: HeroV2Props) {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* 背景层 */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95">
        {/* 微妙的网格背景 */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(to right, #4ade80 1px, transparent 1px),
              linear-gradient(to bottom, #4ade80 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* 内容层 */}
      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 名字 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="block text-secondary/60 text-2xl md:text-3xl mb-2">
              {profile.name}
            </span>
          </motion.div>

          {/* 主要标题 */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {profile.role}
          </h1>

          {/* 标语 */}
          <motion.p
            className="text-xl md:text-2xl text-secondary/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {profile.tagline}
          </motion.p>

          {/* 简介 */}
          <motion.p
            className="text-lg text-secondary/70 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {profile.bio}
          </motion.p>

          {/* CTA 按钮 */}
          <motion.div
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <a
              href={`/${lang}/blog`}
              className="inline-flex items-center px-6 py-3 bg-terminal-green text-background font-medium rounded-lg hover:bg-terminal-green/90 transition-colors"
            >
              {lang === 'zh' ? '阅读我的思考' : 'Read My Thinking'} →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
