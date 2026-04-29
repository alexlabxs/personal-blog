import { WorkExperience, Skill } from './types';
import { Locale } from './i18n';

const baseProfile = {
  name: 'Alex Xiao',
  role: 'AI 时代的系统设计工程师',
};

const profileTranslations = {
  zh: {
    role: 'AI 时代的系统设计工程师',
    tagline: '让 AI 从实验室走向生产环境',
    bio: '全栈思维 × AI 工程化。我在思考：怎样才能让 AI 真正为组织创造价值？为什么系统设计在 AI 时代变得更重要？欢迎一起探索这些问题。',
  },
  en: {
    role: 'Systems Design Engineer in AI Era',
    tagline: 'Making AI Production-Ready',
    bio: 'Full-stack thinking × AI engineering. I explore: How to make AI truly create value for organizations? Why does systems design matter more in the AI era? Let\'s explore these questions together.',
  },
};

const experiencesTranslations = {
  zh: [
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
      role: '高级 Java 工程师（财务）',
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
      role: 'Java 开发工程师',
      period: '2017 - 2019',
      description: [
        '参与金融行业系统功能模块设计与开发',
        '负责核心业务逻辑实现与性能优化',
      ],
    },
    {
      id: '4',
      company: 'YiJiaoYi Tech',
      role: 'Java 开发工程师',
      period: '2015 - 2017',
      description: [
        '负责金融行情系统后台开发',
        '确保行情数据的实时高可用性',
      ],
    },
  ] as WorkExperience[],
  en: [
    {
      id: '1',
      company: 'AI Agent Development',
      role: 'Independent Developer & Consultant',
      period: '2024 - Present',
      description: [
        'Focused on AI Agent application design and development, helping traditional enterprises adopt AI',
        'Providing AI application feasibility assessment, technology selection, and cost evaluation services',
        'Building blog + AI Agent + mini-program full-stack project',
      ],
    },
    {
      id: '2',
      company: 'Insurance Company',
      role: 'Senior Java Engineer (Finance)',
      period: '2019 - 2024',
      description: [
        'Developed core financial system modules including expense management, payment processing, and accounting engines',
        'Led IFRS17 compliance restructuring project, implementing accounting engine and allocation modules',
        'Integrated LLM and OCR technologies for AI-powered document review automation',
      ],
    },
    {
      id: '3',
      company: 'Lingzhi Software',
      role: 'Java Developer',
      period: '2017 - 2019',
      description: [
        'Participated in financial industry system module design and development',
        'Implemented core business logic and performance optimization',
      ],
    },
    {
      id: '4',
      company: 'YiJiaoYi Tech',
      role: 'Java Developer',
      period: '2015 - 2017',
      description: [
        'Developed backend for financial market data systems',
        'Ensured real-time high availability of market data',
      ],
    },
  ] as WorkExperience[],
};

const skills: Skill[] = [
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
  { name: 'Prompt Engineering', level: 'advanced', category: 'AI' },
  { name: 'RAG', level: 'intermediate', category: 'AI' },
  // Frontend
  { name: 'Vue.js', level: 'intermediate', category: 'Frontend' },
  { name: 'Next.js', level: 'intermediate', category: 'Frontend' },
  { name: 'TypeScript', level: 'intermediate', category: 'Frontend' },
  // Project Management
  { name: 'PMP', level: 'expert', category: 'Management' },
  { name: 'Agile/Scrum', level: 'advanced', category: 'Management' },
];

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/xiaokaihan', icon: 'github' },
  { name: 'X', url: 'https://x.com/DreamkeyKey', icon: 'twitter' },
];

export function getLocalizedConfig(locale: Locale) {
  const translations = profileTranslations[locale] || profileTranslations.zh;
  const experiences = experiencesTranslations[locale] || experiencesTranslations.zh;

  return {
    profile: {
      ...baseProfile,
      ...translations,
    },
    experiences,
    skills,
    socialLinks,
  };
}
