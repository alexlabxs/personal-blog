/**
 * 博客文章 Frontmatter 类型
 */
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: number;
  published: boolean;
  draft?: boolean;
  series?: string;
  order?: number;
  content: string;
}

/**
 * 项目信息类型
 */
export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  cover?: string;
  liveUrl?: string;
  githubUrl?: string;
  status: 'active' | 'developing' | 'completed' | 'archived';
  featured?: boolean;
}

/**
 * 工作经历类型
 */
export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

/**
 * 技能类型
 */
export interface Skill {
  name: string;
  level: 'expert' | 'advanced' | 'intermediate' | 'beginner';
  category: string;
}

/**
 * 社交链接类型
 */
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

/**
 * Agent 消息类型
 */
export interface AgentMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

/**
 * 资源类型
 */
export interface Resource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  tags?: string[];
  featured?: boolean;
}
