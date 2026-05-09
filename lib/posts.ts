import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Article, ArticleMetadata } from '@/types/article';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');
const PUBLIC_POST_SLUGS = new Set(['welcome-to-my-blog']);

export function getSortedPostsData(): Article[] {
  // 获取 posts 目录下的所有文件
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map(fileName => {
    // 移除 .md 或 .mdx 扩展名以获取 slug
    const slug = fileName.replace(/\.mdx?$/, '');

    // 读取文件内容
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // 使用 gray-matter 解析 frontmatter
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as ArticleMetadata),
      content: matterResult.content,
    } as Article;
  });

  // 按日期排序
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPublicPostsData(): Article[] {
  return getSortedPostsData().filter((post) => post.published && PUBLIC_POST_SLUGS.has(post.slug));
}

export function isPublicPost(slug: string): boolean {
  return PUBLIC_POST_SLUGS.has(slug);
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.mdx?$/, ''),
      },
    };
  });
}

export function getPostData(slug: string): Article {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  return {
    slug,
    ...(matterResult.data as ArticleMetadata),
    content: matterResult.content,
  } as Article;
}
