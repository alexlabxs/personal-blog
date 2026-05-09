'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

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
  const isZh = lang === 'zh';
  const proofItems = isZh
    ? ['Build in public', 'AI 践行思考者', '独立产品开发']
    : ['Build in public', 'AI practitioner thinker', 'Indie product building'];

  return (
    <section className="relative flex min-h-[86vh] items-center pb-14 pt-20">
      <div className="absolute left-8 top-1/2 hidden h-px w-16 -translate-y-1/2 bg-accent-dim lg:block" />

      <div className="container relative z-10 mx-auto max-w-5xl px-4">
        <div className="max-w-4xl space-y-7 md:space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
              {profile.name}
            </span>
            <span className="hidden h-px w-8 bg-border sm:block" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {isZh ? 'Build in public / AI 践行思考者' : 'Build in public / AI practitioner thinker'}
            </span>
          </motion.div>

          <h1 className="font-display text-4xl font-medium leading-[1.08] text-text-primary md:text-6xl lg:text-7xl">
            {isZh ? (
              <>
                Build in public
                <br />
                记录 AI 践行与
                <br />
                独立产品开发
              </>
            ) : (
              <>
                Building in public,
                <br />
                practicing AI,
                <br />
                shipping indie products
              </>
            )}
          </h1>

          <div className="max-w-2xl space-y-5">
            <motion.p
              className="text-lg font-medium text-accent md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              {isZh
                ? '我把 AI 应用实践、产品化思考和独立开发过程，整理成可复盘的经验与判断。'
                : 'I turn AI practice, product thinking, and indie building into reusable lessons and judgment.'}
            </motion.p>

            <motion.p
              className="text-base leading-relaxed text-text-secondary md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              {isZh
                ? '我有 10+ 年企业级财务系统开发经验，正在把系统设计能力迁移到 AI Agent、个人知识库、内容产品和独立应用中。这里记录我的思考、实验和能力边界。'
                : 'I bring 10+ years of enterprise finance-system engineering and now apply that systems thinking to AI agents, personal knowledge products, content systems, and indie apps. This site records my thinking, experiments, and evolving boundaries.'}
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <Link href={`/${lang}/blog/welcome-to-my-blog`} className="btn-accent">
              {isZh ? '阅读欢迎文章' : 'Read the welcome post'}
              <span className="font-mono">→</span>
            </Link>
            <Link href={`/${lang}/about`} className="btn-ghost">
              {isZh ? '了解我的背景' : 'About me'}
            </Link>
          </motion.div>

          <motion.div
            className="grid gap-px bg-border text-sm md:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
          >
            {proofItems.map((item) => (
              <div key={item} className="bg-background px-5 py-3 text-text-secondary">
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
