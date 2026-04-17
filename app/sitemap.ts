import { MetadataRoute } from 'next';
import { getSortedPostsData } from '@/lib/posts';
import { locales } from '@/lib/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://alexlabx.com';
  const posts = getSortedPostsData();

  const staticPages: MetadataRoute.Sitemap = [];

  // 为每种语言生成静态页面
  locales.forEach(lang => {
    staticPages.push(
      {
        url: `${baseUrl}/${lang}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: `${baseUrl}/${lang}/blog`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/${lang}/projects`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/${lang}/resources`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/${lang}/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      }
    );
  });

  // 博客文章页面
  const blogPages: MetadataRoute.Sitemap = [];
  posts.forEach(post => {
    locales.forEach(lang => {
      blogPages.push({
        url: `${baseUrl}/${lang}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });
  });

  return [...staticPages, ...blogPages];
}
