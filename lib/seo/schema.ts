// JSON-LD 结构化数据生成器
// 用于 SEO 优化，帮助搜索引擎更好理解网站内容

export interface PersonSchema {
  '@context': 'https://schema.org';
  '@type': 'Person';
  name: string;
  url: string;
  image?: string;
  sameAs?: string[];
  jobTitle?: string;
  description?: string;
  knowsAbout?: string[];
}

export interface WebSiteSchema {
  '@context': 'https://schema.org';
  '@type': 'WebSite';
  name: string;
  url: string;
  description?: string;
  author?: {
    '@type': 'Person';
    name: string;
    url: string;
  };
  potentialAction?: {
    '@type': 'SearchAction';
    target: string;
    'query-input': string;
  };
}

export interface BlogPostingSchema {
  '@context': 'https://schema.org';
  '@type': 'BlogPosting';
  headline: string;
  description?: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: {
    '@type': 'Person';
    name: string;
    url: string;
  };
  publisher: {
    '@type': 'Organization';
    name: string;
    url: string;
    logo?: {
      '@type': 'ImageObject';
      url: string;
    };
  };
  mainEntityOfPage: {
    '@type': 'WebPage';
    '@id': string;
  };
  keywords?: string;
  wordCount?: number;
}

export interface ProjectSchema {
  '@context': 'https://schema.org';
  '@type': 'SoftwareApplication';
  name: string;
  description?: string;
  url?: string;
  author?: {
    '@type': 'Person';
    name: string;
    url: string;
  };
  applicationCategory?: string;
  operatingSystem?: string;
  offers?: {
    '@type': 'Offer';
    price: string;
    priceCurrency: string;
  };
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://alexlabx.com';

/**
 * 生成 Person 结构化数据
 */
export function generatePersonSchema(): PersonSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Alex',
    url: BASE_URL,
    sameAs: [
      'https://github.com/xiaokaihan',
      'https://x.com/DreamkeyKey',
    ],
    jobTitle: 'Senior Java Engineer',
    description: '高级 Java 工程师，10年软件开发经验，专注于保险财务系统建设，具备分布式架构设计与 AI 落地实操经验',
    knowsAbout: [
      'Java',
      'Spring Boot',
      'Spring Cloud',
      'Microservices',
      'MySQL',
      'Oracle',
      'Redis',
      'RocketMQ',
      'Docker',
      'Kubernetes',
      'AI',
      'LLM',
      'OCR',
      'PMP',
    ],
  };
}

/**
 * 生成 WebSite 结构化数据
 */
export function generateWebSiteSchema(): WebSiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Alex Lab',
    url: BASE_URL,
    description: 'Code. Create. Connect. - 构建有思想的数字产品',
    author: {
      '@type': 'Person',
      name: 'Alex',
      url: BASE_URL,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * 生成 BlogPosting 结构化数据
 */
export function generateBlogPostingSchema(post: {
  title: string;
  description?: string;
  date: string;
  slug: string;
  tags?: string[];
  content?: string;
}): BlogPostingSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description || post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Alex',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Alex Lab',
      url: BASE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${post.slug}`,
    },
    keywords: post.tags?.join(', '),
    wordCount: post.content?.split(/\s+/).length,
  };
}

/**
 * 生成 Project 结构化数据
 */
export function generateProjectSchema(project: {
  name: string;
  description?: string;
  url?: string;
  techStack?: string[];
}): ProjectSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.name,
    description: project.description,
    url: project.url,
    author: {
      '@type': 'Person',
      name: 'Alex',
      url: BASE_URL,
    },
    applicationCategory: 'DeveloperApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
}

/**
 * 合并多个结构化数据
 */
export function mergeSchemas(...schemas: object[]): object {
  if (schemas.length === 1) {
    return schemas[0] as object;
  }
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
}