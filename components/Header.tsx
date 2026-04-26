'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Locale, locales, localeLabels } from '@/lib/i18n';
import { useTranslation } from '@/lib/i18n/client';
import { ThemeToggle } from '@/components/ThemeToggle';

interface HeaderProps {
  lang: Locale;
}

export function Header({ lang }: HeaderProps) {
  const dict = useTranslation(lang);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const switchLang = lang === 'zh' ? 'en' : 'zh';

  return (
    <header className="fixed top-0 left-0 right-0 bg-background border-b border-terminal-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href={`/${lang}`} className="text-xl font-bold brand-gradient hover:brand-bg-hover transition-colors">
              Alex
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href={`/${lang}`} className="text-secondary hover:text-brand-primary transition-colors">
              {dict.nav.home}
            </Link>
            <Link href={`/${lang}/blog`} className="text-secondary hover:text-brand-primary transition-colors">
              {dict.nav.blog}
            </Link>
            <Link href={`/${lang}/projects`} className="text-secondary hover:text-brand-primary transition-colors">
              {dict.nav.projects}
            </Link>
            <Link href={`/${lang}/about`} className="text-secondary hover:text-brand-primary transition-colors">
              {dict.nav.about}
            </Link>

            <ThemeToggle />

            <Link
              href={`/${switchLang}`}
              className="px-3 py-1 rounded border border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black dark:hover:text-black transition-colors text-sm"
            >
              {localeLabels[switchLang].short}
            </Link>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Link
              href={`/${switchLang}`}
              className="px-2 py-1 rounded border border-terminal-green text-terminal-green text-sm"
            >
              {localeLabels[switchLang].short}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary hover:text-brand-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-terminal-border">
            <nav className="flex flex-col space-y-4">
              <Link href={`/${lang}`} className="text-secondary hover:text-brand-primary transition-colors">
                {dict.nav.home}
              </Link>
              <Link href={`/${lang}/blog`} className="text-secondary hover:text-brand-primary transition-colors">
                {dict.nav.blog}
              </Link>
              <Link href={`/${lang}/projects`} className="text-secondary hover:text-brand-primary transition-colors">
                {dict.nav.projects}
              </Link>
              <Link href={`/${lang}/about`} className="text-secondary hover:text-brand-primary transition-colors">
                {dict.nav.about}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
