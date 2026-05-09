export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  series?: string;
  content: string;
  readingTime: number;
  published: boolean;
  featured?: boolean;
}

export interface ArticleMetadata {
  title: string;
  description: string;
  date: string;
  tags: string[];
  series?: string;
  readingTime: number;
  published: boolean;
  featured?: boolean;
}
