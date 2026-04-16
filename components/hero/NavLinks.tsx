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

export function NavLinks() {
  const links = [
    { href: '/blog', label: '博客文章' },
    { href: '/projects', label: '项目展示' },
    { href: '/about', label: '关于我' },
    { href: 'mailto:contact@niuniu.dev', label: '联系我' },
  ];

  return (
    <nav className="flex flex-col gap-3">
      {links.map((link, index) => (
        <NavLink key={link.href} href={link.href} label={link.label} index={index} />
      ))}
    </nav>
  );
}
