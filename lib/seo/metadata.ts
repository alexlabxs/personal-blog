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
  keywords?: string[];
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
      title: 'Alex — AI 时代的系统设计工程师',
      description: '思考 AI 工程化、系统设计和产品。让 AI 从实验室走向生产环境。',
    },
    en: {
      title: 'Alex — Systems Design Engineer in AI Era',
      description: 'Thinking about AI engineering, systems design, and products. Making AI production-ready.',
    },
  };

  const { title, description } = dict[locale];

  return generatePageMetadata({
    title,
    description,
    locale,
    pathname: '/',
    image: '/images/og/home.png',
    keywords: locale === 'zh'
      ? ['AI工程化', '系统设计', 'LLM应用', 'AI Agent', '全栈开发', '产品思维']
      : ['AI Engineering', 'Systems Design', 'LLM Applications', 'AI Agent', 'Full-stack Development', 'Product Thinking'],
  });
}

/**
 * 生成博客列表页元数据
 */
export function generateBlogListMetadata(locale: Locale): Metadata {
  const dict = {
    zh: {
      title: '思考与洞察',
      description: '深度思考 AI 时代的系统设计。分享工程实践、架构决策和产品思维。',
    },
    en: {
      title: 'Thinking & Insights',
      description: 'Deep thinking on systems design in the AI era. Sharing engineering practices, architecture decisions, and product thinking.',
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
