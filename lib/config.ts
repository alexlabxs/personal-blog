import { WorkExperience, Skill } from './types';

/**
 * 个人信息配置
 */
export const profile = {
  name: 'Alex',
  role: 'Senior Java Engineer',
  tagline: 'Building reliable systems with precision.',
  bio: '拥有10年软件开发经验，专注于保险财务系统建设。负责过费控管理、收付费、记账引擎等核心系统开发，具备分布式架构设计与 AI 落地实操经验。持有 PMP 认证，致力于将复杂业务规则转化为稳健的技术方案。',
};

/**
 * 工作经历
 */
export const experiences: WorkExperience[] = [
  {
    id: '1',
    company: 'Insurance Company',
    role: 'Senior Java Engineer (Finance)',
    period: '2019 - 至今',
    description: [
      '负责财务系统核心模块开发，包括费控管理、收付费、记账引擎',
      '主导 IFRS17 准则重构项目，落地会计引擎与分摊模块',
      '集成 LLM 与 OCR 技术，实现智能审单等 AI 提效功能',
    ],
  },
  {
    id: '2',
    company: 'Lingzhi Software',
    role: 'Java Developer',
    period: '2017 - 2019',
    description: [
      '参与金融行业系统功能模块设计与开发',
      '负责核心业务逻辑实现与性能优化',
    ],
  },
  {
    id: '3',
    company: 'YiJiaoYi Tech',
    role: 'Java Developer',
    period: '2015 - 2017',
    description: [
      '负责金融行情系统后台开发',
      '确保行情数据的实时高可用性',
    ],
  },
];

/**
 * 技能列表
 */
export const skills: Skill[] = [
  // Backend
  { name: 'Java', level: 'expert', category: 'Backend' },
  { name: 'Spring Boot', level: 'expert', category: 'Backend' },
  { name: 'Spring Cloud', level: 'expert', category: 'Backend' },
  { name: 'Microservices', level: 'expert', category: 'Backend' },
  // Database
  { name: 'MySQL', level: 'expert', category: 'Database' },
  { name: 'Oracle', level: 'expert', category: 'Database' },
  { name: 'Redis', level: 'advanced', category: 'Database' },
  // Messaging
  { name: 'RocketMQ', level: 'advanced', category: 'Backend' },
  // DevOps
  { name: 'Docker', level: 'advanced', category: 'DevOps' },
  { name: 'Kubernetes', level: 'intermediate', category: 'DevOps' },
  { name: 'Jenkins', level: 'advanced', category: 'DevOps' },
  { name: 'Git', level: 'expert', category: 'DevOps' },
  // AI
  { name: 'LLM Integration', level: 'advanced', category: 'AI' },
  { name: 'OCR', level: 'advanced', category: 'AI' },
  // Frontend
  { name: 'Vue.js', level: 'intermediate', category: 'Frontend' },
  // Project Management
  { name: 'PMP', level: 'expert', category: 'Management' },
  { name: 'Agile/Scrum', level: 'advanced', category: 'Management' },
];

/**
 * 社交链接
 */
export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/xiaokaihan', icon: 'github' },
  { name: 'X', url: 'https://x.com/DreamkeyKey', icon: 'twitter' },
];
