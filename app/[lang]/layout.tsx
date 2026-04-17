import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AgentChat } from '@/components/agent/AgentChat';
import { GlobalSchema } from '@/lib/seo/GlobalSchema';
import { locales, defaultLocale, Locale } from '@/lib/i18n';
import '@/app/globals.css';

const inter = { variable: '--font-inter' };
const jetbrainsMono = { variable: '--font-mono' };

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : new URL('http://localhost:3000'),
  title: {
    default: 'Alex | Senior Java Engineer',
    template: '%s | Alex',
  },
  description: 'Building reliable systems with precision. 高级 Java 工程师，10年开发经验，专注于保险财务系统建设，具备分布式架构设计与 AI 落地实操经验。',
  keywords: ['Java', 'Spring Boot', 'Microservices', 'Engineer', 'AI', 'Developer', 'Backend', 'Finance', 'PMP', 'Alex'],
  authors: [{ name: 'Alex', url: 'https://alexlabx.com' }],
  creator: 'Alex',
  publisher: 'Alex',
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: '/',
    siteName: 'Alex',
    title: 'Alex | Senior Java Engineer',
    description: 'Building reliable systems with precision - 构建稳健的财务系统',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Alex - Senior Java Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex | Senior Java Engineer',
    description: 'Building reliable systems with precision - 构建稳健的财务系统',
    creator: '@alexlabx',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const lang = params.lang || defaultLocale;

  return (
    <html lang={lang} className="dark">
      <head>
        <GlobalSchema />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Header lang={lang} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer lang={lang} />
        <AgentChat />
      </body>
    </html>
  );
}
