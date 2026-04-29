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
    <header className="bg-background/80 fixed left-0 right-0 top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${lang}`}
            className="font-display text-xl font-semibold text-text-primary transition-opacity hover:opacity-70"
          >
            Alex
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {[
              { href: `/${lang}`, label: dict.nav.home },
              { href: `/${lang}/blog`, label: dict.nav.blog },
              { href: `/${lang}/projects`, label: dict.nav.projects },
              { href: `/${lang}/about`, label: dict.nav.about },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-text-secondary transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href={`/${switchLang}`}
              className="px-3 py-1.5 font-mono text-xs text-text-muted transition-colors hover:text-accent"
            >
              {localeLabels[switchLang].short}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-text-secondary transition-colors hover:text-accent md:hidden"
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <nav className="flex flex-col space-y-1">
              {[
                { href: `/${lang}`, label: dict.nav.home },
                { href: `/${lang}/blog`, label: dict.nav.blog },
                { href: `/${lang}/projects`, label: dict.nav.projects },
                { href: `/${lang}/about`, label: dict.nav.about },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-3 py-2 text-sm text-text-secondary transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
