'use client';

import Link from 'next/link';
import { Locale } from '@/lib/i18n';
import { useTranslation } from '@/lib/i18n/client';

interface FooterProps {
  lang: Locale;
}

export function Footer({ lang }: FooterProps) {
  const dict = useTranslation(lang);

  return (
    <footer className="bg-terminal-bg border-t border-terminal-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-terminal-green mb-4">{dict.footer.about}</h3>
            <p className="text-secondary text-sm">
              {dict.footer.aboutDescription}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-terminal-green mb-4">{dict.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}`} className="text-secondary hover:text-terminal-green transition-colors text-sm">
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/blog`} className="text-secondary hover:text-terminal-green transition-colors text-sm">
                  {dict.nav.blog}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/projects`} className="text-secondary hover:text-terminal-green transition-colors text-sm">
                  {dict.nav.projects}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/resources`} className="text-secondary hover:text-terminal-green transition-colors text-sm">
                  {dict.nav.resources}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/about`} className="text-secondary hover:text-terminal-green transition-colors text-sm">
                  {dict.nav.about}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-terminal-green mb-4">{dict.footer.socialMedia}</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com/xiaokaihan" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-terminal-green transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </Link>
              <Link href="https://x.com/DreamkeyKey" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-terminal-green transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-terminal-border mt-8 pt-8 text-center">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Alex. {dict.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
