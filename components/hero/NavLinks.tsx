'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  label: string;
  index: number;
}

function NavLink({ href, label, index }: NavLinkProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
    >
      <Link
        href={href}
        className="group flex items-center gap-2 text-gray-400 transition-colors hover:text-terminal-green"
      >
        <span className="font-mono text-terminal-green">0{index + 1}.</span>
        <span className="group-hover:underline">{label}</span>
        <span className="font-mono opacity-0 transition-opacity group-hover:opacity-100">→</span>
      </Link>
    </motion.div>
  );
}

interface NavLinksProps {
  lang?: string;
}

export function NavLinks({ lang = 'zh' }: NavLinksProps) {
  const links = lang === 'zh'
    ? [
        { href: `/${lang}/blog`, label: '博客文章' },
        { href: `/${lang}/projects`, label: '项目展示' },
        { href: `/${lang}/resources`, label: '资源分享' },
        { href: `/${lang}/about`, label: '关于我' },
      { href: 'mailto:dreamkey.xiao@gmail.com', label: '联系我' },
      ]
    : [
        { href: `/${lang}/blog`, label: 'Blog Posts' },
        { href: `/${lang}/projects`, label: 'Projects' },
        { href: `/${lang}/resources`, label: 'Resources' },
        { href: `/${lang}/about`, label: 'About Me' },
        { href: 'mailto:dreamkey.xiao@gmail.com', label: 'Contact' },
      ];

  return (
    <nav className="flex flex-col gap-3">
      {links.map((link, index) => (
        <NavLink key={link.href} href={link.href} label={link.label} index={index} />
      ))}
    </nav>
  );
}
