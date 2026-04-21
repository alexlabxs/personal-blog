import { WorkExperience, Skill } from './types';
import { Locale } from './i18n';

const baseProfile = {
  name: 'Alex',
  role: 'Senior Java Engineer',
};

const profileTranslations = {
  zh: {
    role: '高级 Java 工程师',
    tagline: '构建稳健的系统',
    bio: '拥有10年软件开发经验，专注于保险财务系统建设。负责过费控管理、收付费、记账引擎等核心系统开发，具备分布式架构设计与 AI 落地实操经验。持有 PMP 认证，致力于将复杂业务规则转化为稳健的技术方案。',
  },
  en: {
    role: 'Senior Java Engineer',
    tagline: 'Building reliable systems with precision.',
    bio: '10 years of software development experience, specializing in insurance and financial systems. Led core modules including expense management, payment processing, and accounting engines. Experienced in distributed architecture design and AI implementation. PMP certified, dedicated to transforming complex business rules into robust technical solutions.',
  },
};

const experiencesTranslations = {
  zh: [
    {
      id: '1',
      company: 'Insurance Company',
      role: '高级 Java 工程师（财务）',
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
      role: 'Java 开发工程师',
      period: '2017 - 2019',
      description: [
        '参与金融行业系统功能模块设计与开发',
        '负责核心业务逻辑实现与性能优化',
      ],
    },
    {
      id: '3',
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
      company: 'Insurance Company',
      role: 'Senior Java Engineer (Finance)',
      period: '2019 - Present',
      description: [
        'Developed core financial system modules including expense management, payment processing, and accounting engines',
        'Led IFRS17 compliance restructuring project, implementing accounting engine and allocation modules',
        'Integrated LLM and OCR technologies for AI-powered document review automation',
      ],
    },
    {
      id: '2',
      company: 'Lingzhi Software',
      role: 'Java Developer',
      period: '2017 - 2019',
      description: [
        'Participated in financial industry system module design and development',
        'Implemented core business logic and performance optimization',
      ],
    },
    {
      id: '3',
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
  { name: 'Java', level: 'expert', category: 'Backend' },
  { name: 'Spring Boot', level: 'expert', category: 'Backend' },
  { name: 'Spring Cloud', level: 'expert', category: 'Backend' },
  { name: 'Microservices', level: 'expert', category: 'Backend' },
  { name: 'MySQL', level: 'expert', category: 'Database' },
  { name: 'Oracle', level: 'expert', category: 'Database' },
  { name: 'Redis', level: 'advanced', category: 'Database' },
  { name: 'RocketMQ', level: 'advanced', category: 'Backend' },
  { name: 'Docker', level: 'advanced', category: 'DevOps' },
  { name: 'Kubernetes', level: 'intermediate', category: 'DevOps' },
  { name: 'Jenkins', level: 'advanced', category: 'DevOps' },
  { name: 'Git', level: 'expert', category: 'DevOps' },
  { name: 'LLM Integration', level: 'advanced', category: 'AI' },
  { name: 'OCR', level: 'advanced', category: 'AI' },
  { name: 'Vue.js', level: 'intermediate', category: 'Frontend' },
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

