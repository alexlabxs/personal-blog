import { WorkExperience, Skill } from './types';

/**
 * 个人信息配置
 */
export const profile = {
  name: 'Alex Xiao',
  role: '全栈程序员 | AI Agent 应用开发者',
  tagline: '10+ 年编程经验 | 最近 2 年专注 AI 应用 | 现在帮传统企业快速落地 AI',
  bio: '10+ 年软件开发经验，最近 2 年专注于 AI 应用落地。曾在保险财务系统做过复杂的分布式架构，现在用这些技术经验来帮助传统企业快速实现 AI 应用。提供 AI Agent 应用设计咨询、可行性评估、成本评估和技术选型服务。',
};

/**
 * 工作经历
 */
export const experiences: WorkExperience[] = [
  {
    id: '1',
    company: 'AI Agent 应用开发',
    role: '独立开发者 & 咨询顾问',
    period: '2024 - 至今',
    description: [
      '专注于 AI Agent 应用设计和开发，帮助传统企业快速落地 AI',
      '提供 AI 应用可行性评估、技术选型、成本评估服务',
      '开发博客 + AI Agent + 小程序全栈项目',
    ],
  },
  {
    id: '2',
    company: 'Insurance Company',
    role: 'Senior Java Engineer (Finance)',
    period: '2019 - 2024',
    description: [
      '负责财务系统核心模块开发，包括费控管理、收付费、记账引擎',
      '主导 IFRS17 准则重构项目，落地会计引擎与分摊模块',
      '集成 LLM 与 OCR 技术，实现智能审单等 AI 提效功能',
    ],
  },
  {
    id: '3',
    company: 'Lingzhi Software',
    role: 'Java Developer',
    period: '2017 - 2019',
    description: [
      '参与金融行业系统功能模块设计与开发',
      '负责核心业务逻辑实现与性能优化',
    ],
  },
  {
    id: '4',
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
