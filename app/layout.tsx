import type { Metadata } from 'next';
// import { Inter, JetBrains_Mono } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
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
  title: 'Alex Xiao | Full-Stack Engineer',
  description: 'Code. Create. Connect. - 构建有思想的数字产品',
  keywords: ['Full-Stack', 'Engineer', 'AI', 'Web3', 'Developer', 'Frontend', 'Backend'],
  authors: [{ name: 'Alex Xiao' }],
  openGraph: {
    title: 'Alex Xiao | Full-Stack Engineer',
    description: 'Code. Create. Connect. - 构建有思想的数字产品',
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Xiao | Full-Stack Engineer',
    description: 'Code. Create. Connect. - 构建有思想的数字产品',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
