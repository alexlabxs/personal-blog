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
    <section className="relative flex min-h-[90vh] items-center pb-16 pt-24">
      {/* Subtle decorative line */}
      <div className="absolute left-8 top-1/2 hidden h-px w-16 -translate-y-1/2 bg-accent-dim lg:block" />

      <div className="container relative z-10 mx-auto max-w-5xl px-4">
        <div className="space-y-10">
          {/* Name — small, understated */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
              {profile.name}
            </span>
          </motion.div>

          {/* Role — dramatic display typography */}
          <h1 className="font-display text-5xl font-medium leading-[1.08] text-text-primary md:text-7xl lg:text-8xl">
            {profile.role}
          </h1>

          {/* Tagline + bio */}
          <div className="max-w-2xl space-y-5">
            <motion.p
              className="text-lg font-medium text-accent md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              {profile.tagline}
            </motion.p>

            <motion.p
              className="text-base leading-relaxed text-text-secondary md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              {profile.bio}
            </motion.p>
          </div>

          {/* CTA */}
          <motion.div
            className="flex gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <a href={`/${lang}/blog`} className="btn-accent">
              {lang === 'zh' ? '阅读我的思考' : 'Read My Thinking'}
              <span className="font-mono">→</span>
            </a>
            <a href={`/${lang}/about`} className="btn-ghost">
              {lang === 'zh' ? '关于我' : 'About'}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
