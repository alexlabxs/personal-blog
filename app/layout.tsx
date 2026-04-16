import type { Metadata } from 'next';
// import { Inter, JetBrains_Mono } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AgentChat } from '@/components/agent/AgentChat';
import { GlobalSchema } from '@/lib/seo/GlobalSchema';
import './globals.css';

// 暂时禁用 Google Fonts，使用系统字体
// const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
// const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

// 使用系统字体作为临时解决方案
const inter = { variable: '--font-inter' };
const jetbrainsMono = { variable: '--font-mono' };

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : new URL('http://localhost:3000'),
  title: {
    default: 'Niuniu | Full-Stack Engineer',
    template: '%s | Niuniu',
  },
  description: 'Code. Create. Connect. - 构建有思想的数字产品。全栈工程师，热爱从 0 到 1 构建产品，正在探索 AI × Product 的结合。',
  keywords: ['Full-Stack', 'Engineer', 'AI', 'Developer', 'Frontend', 'Backend', 'React', 'Next.js', 'TypeScript', 'Niuniu'],
  authors: [{ name: 'Niuniu', url: 'https://alexlabx.com' }],
  creator: 'Niuniu',
  publisher: 'Niuniu',
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: '/',
    siteName: 'Niuniu',
    title: 'Niuniu | Full-Stack Engineer',
    description: 'Code. Create. Connect. - 构建有思想的数字产品',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Niuniu - Full-Stack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Niuniu | Full-Stack Engineer',
    description: 'Code. Create. Connect. - 构建有思想的数字产品',
    creator: '@niuniu',
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
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="dark">
      <head>
        <GlobalSchema />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <AgentChat />
      </body>
    </html>
  );
}
