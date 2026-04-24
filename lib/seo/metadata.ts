import { Metadata } from 'next';
import { Locale } from '@/lib/i18n';

interface SEOProps {
  title: string;
  description: string;
  locale: Locale;
  pathname: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  noIndex?: boolean;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://alexlabx.com';
const DEFAULT_IMAGE = '/images/og/default.png';

/**
 * 生成页面元数据
 */
export function generatePageMetadata({
  title,
  description,
  locale,
  pathname,
  image = DEFAULT_IMAGE,
  type = 'website',
  publishedTime,
  modifiedTime,
  tags,
  noIndex = false,
}: SEOProps): Metadata {
  const url = `${SITE_URL}/${locale}${pathname}`;
  const fullImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return {
    title: `${title} | Alex`,
    description,
    keywords: tags,
    authors: [{ name: 'Alex', url: SITE_URL }],
    creator: 'Alex',
    publisher: 'Alex',
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        'zh-CN': `${SITE_URL}/zh${pathname}`,
        'en': `${SITE_URL}/en${pathname}`,
      },
    },
    openGraph: {
      type,
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      url,
      siteName: 'Alex Lab',
      title: `${title} | Alex`,
      description,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Alex`,
      description,
      images: [fullImageUrl],
      creator: '@alexlabx',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * 生成首页元数据
 */
export function generateHomeMetadata(locale: Locale): Metadata {
  const dict = {
    zh: {
      title: 'AI Agent 开发者 | 全栈工程师',
      description: '10+ 年软件开发经验，最近 2 年专注于 AI 应用落地。提供 AI Agent 应用设计咨询、可行性评估、成本评估和技术选型服务。',
    },
    en: {
      title: 'AI Agent Developer | Full-Stack Engineer',
      description: '10+ years of software development experience, focused on AI applications in the last 2 years. Providing AI Agent design consulting, feasibility assessment, and technology selection services.',
    },
  };

  const { title, description } = dict[locale];

  return generatePageMetadata({
    title,
    description,
    locale,
    pathname: '/',
    image: '/images/og/home.png',
  });
}

/**
 * 生成博客列表页元数据
 */
export function generateBlogListMetadata(locale: Locale): Metadata {
  const dict = {
    zh: {
      title: '博客',
      description: '分享技术文章、项目经验与 AI 实践。探索 Java、Spring Boot、微服务、人工智能等领域。',
    },
    en: {
      title: 'Blog',
      description: 'Technical articles, project experiences, and AI practices. Exploring Java, Spring Boot, Microservices, and Artificial Intelligence.',
    },
  };

  const { title, description } = dict[locale];

  return generatePageMetadata({
    title,
    description,
    locale,
    pathname: '/blog',
  });
}

/**
 * 生成项目展示页元数据
 */
export function generateProjectsMetadata(locale: Locale): Metadata {
  const dict = {
    zh: {
      title: '项目',
      description: '精选项目作品集，展示全栈开发能力与 AI 应用实践。',
    },
    en: {
      title: 'Projects',
      description: 'Selected project portfolio showcasing full-stack development capabilities and AI application practices.',
    },
  };

  const { title, description } = dict[locale];

  return generatePageMetadata({
    title,
    description,
    locale,
    pathname: '/projects',
  });
}

/**
 * 生成关于页面元数据
 */
export function generateAboutMetadata(locale: Locale): Metadata {
  const dict = {
    zh: {
      title: '关于',
      description: '了解更多关于 Alex 的背景、技能与职业经历。',
    },
    en: {
      title: 'About',
      description: 'Learn more about Alex\'s background, skills, and professional experience.',
    },
  };

  const { title, description } = dict[locale];

  return generatePageMetadata({
    title,
    description,
    locale,
    pathname: '/about',
  });
}

/**
 * 生成资源页面元数据
 */
export function generateResourcesMetadata(locale: Locale): Metadata {
  const dict = {
    zh: {
      title: '资源',
      description: '精选开发工具、AI 资源、学习资料与设计资源。',
    },
    en: {
      title: 'Resources',
      description: 'Curated development tools, AI resources, learning materials, and design assets.',
    },
  };

  const { title, description } = dict[locale];

  return generatePageMetadata({
    title,
    description,
    locale,
    pathname: '/resources',
  });
}
