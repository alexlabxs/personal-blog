import { Project } from './types';

export const projects: Project[] = [
  // === 新方向：AI Agent 应用 ===
  {
    id: '1',
    name: 'AI Agent 应用案例集合',
    description: '为传统企业提供 AI 应用落地方案，包括智能客服、文档处理、数据分析等场景的 AI Agent 设计与开发',
    techStack: ['LLM', 'RAG', 'Agent', 'Prompt Engineering', 'Python'],
    status: 'active',
    featured: true,
  },
  {
    id: '2',
    name: '博客 + AI Agent + 小程序',
    description: '全栈项目：个人博客集成 AI Agent 对话能力，配套小程序提供移动端体验，展示 AI 应用开发全流程',
    techStack: ['Next.js', 'TypeScript', 'AI Agent', '微信小程序', 'Vercel'],
    status: 'active',
    featured: true,
  },
  // === 历史项目：展示深度能力 ===
  {
    id: '3',
    name: '费控及智能报销管理系统',
    description: '企业费用报销与预算管理平台，集成 OCR 智能识别、移动端报销、预算自动核销',
    techStack: ['Spring Boot', 'Oracle', 'BPM', 'OCR', '企业微信'],
    status: 'completed',
    featured: false,
  },
  {
    id: '4',
    name: '收付费微服务',
    description: '高并发收付费系统，处理实时扣费与批量扣款任务，确保资金流水绝对准确',
    techStack: ['Java', 'Spring Cloud', 'RocketMQ', 'MySQL', '分布式事务'],
    status: 'completed',
    featured: false,
  },
  {
    id: '5',
    name: '记账微服务系统',
    description: '财务数据总入口，将各业务系统原始数据转化为标准化财务凭证',
    techStack: ['Spring Cloud', 'Nacos', 'Sentinel', '接口限流补偿'],
    status: 'completed',
  },
  {
    id: '6',
    name: 'IFRS17 财务准则重构',
    description: '应对保险行业 IFRS17 准则，开发会计引擎与分摊模块',
    techStack: ['Java', 'Spring Boot', 'Postgres', '大数据量批处理'],
    status: 'completed',
  },
];
