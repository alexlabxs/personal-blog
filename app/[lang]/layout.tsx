import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AgentChat } from '@/components/agent/AgentChat';
import { GlobalSchema } from '@/lib/seo/GlobalSchema';
import { locales, defaultLocale, Locale } from '@/lib/i18n';
import { generateHomeMetadata } from '@/lib/seo/metadata';
import '@/app/globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  return generateHomeMetadata(params.lang);
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const lang = params.lang || defaultLocale;

  return (
    <html
      lang={lang}
      className="font-body"
    >
      <head>
        <GlobalSchema />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              var theme = localStorage.getItem('theme');
              if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              }
            })();
          `,
          }}
        />
      </head>
      <body className="font-body antialiased">
        <Header lang={lang} />
        <main className="min-h-screen">{children}</main>
        <Footer lang={lang} />
        <AgentChat />
      </body>
    </html>
  );
}
