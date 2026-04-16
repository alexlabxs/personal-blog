import { WorkExperience, Skill } from './types';

/**
 * 个人信息配置
 */
export const profile = {
  name: 'Niuniu',
  role: 'Full-Stack Engineer',
  tagline: 'Build in public. Think out loud.',
  bio: '我是一名全栈工程师，热爱从 0 到 1 构建产品。目前正在探索 AI × Product 的结合，致力于创造有思想、有温度的数字产品。',
};

/**
 * 工作经历
 */
export const experiences: WorkExperience[] = [
  {
    id: '1',
    company: 'Tech Company',
    role: 'Senior Frontend Engineer',
    period: '2023 - 至今',
    description: [
      '负责核心产品的前端架构设计与开发',
      '推动技术栈升级，将构建时间减少 40%',
      '带领团队落地 CI/CD 流程，提升交付效率',
    ],
  },
  {
    id: '2',
    company: 'Startup Inc.',
    role: 'Full-Stack Developer',
    period: '2021 - 2023',
    description: [
      '从零开始搭建 SaaS 产品，服务 10万+ 用户',
      '独立负责全栈开发，包括后端 API 和数据库设计',
      '优化系统性能，API 响应时间降低 60%',
    ],
  },
  {
    id: '3',
    company: 'Tech Studio',
    role: 'Frontend Developer',
    period: '2019 - 2021',
    description: [
      '参与多个企业级项目的前端开发',
      '负责组件库建设，提升团队开发效率',
      '推动自动化测试落地',
    ],
  },
];

/**
 * 技能列表
 */
export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 'expert', category: 'Frontend' },
  { name: 'Next.js', level: 'expert', category: 'Frontend' },
  { name: 'TypeScript', level: 'expert', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 'advanced', category: 'Frontend' },
  { name: 'Framer Motion', level: 'advanced', category: 'Frontend' },
  // Backend
  { name: 'Node.js', level: 'advanced', category: 'Backend' },
  { name: 'Python', level: 'advanced', category: 'Backend' },
  { name: 'Go', level: 'intermediate', category: 'Backend' },
  // Database
  { name: 'PostgreSQL', level: 'advanced', category: 'Database' },
  { name: 'MongoDB', level: 'advanced', category: 'Database' },
  { name: 'Redis', level: 'intermediate', category: 'Database' },
  // DevOps
  { name: 'Docker', level: 'advanced', category: 'DevOps' },
  { name: 'Kubernetes', level: 'intermediate', category: 'DevOps' },
  { name: 'AWS', level: 'advanced', category: 'DevOps' },
  { name: 'Vercel', level: 'expert', category: 'DevOps' },
  // AI/ML
  { name: 'LangChain', level: 'advanced', category: 'AI' },
  { name: 'OpenAI API', level: 'advanced', category: 'AI' },
  { name: 'Claude API', level: 'advanced', category: 'AI' },
];

/**
 * 社交链接
 */
export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/niuniu', icon: 'github' },
  { name: 'Twitter', url: 'https://twitter.com/niuniu', icon: 'twitter' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/niuniu', icon: 'linkedin' },
];
