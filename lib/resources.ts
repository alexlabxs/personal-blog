import { Resource } from './types';

export interface ResourceCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const categories: ResourceCategory[] = [
  { id: 'dev', name: '开发工具', icon: '🔧', description: '提升开发效率的工具和平台' },
  { id: 'ai', name: 'AI 资源', icon: '🤖', description: 'AI 工具、API 和学习资源' },
  { id: 'learning', name: '学习资源', icon: '📚', description: '教程、课程和文档' },
  { id: 'design', name: '设计资源', icon: '🎨', description: 'UI/UX 设计工具和素材' },
  { id: 'community', name: '社区平台', icon: '👥', description: '开发者社区和问答平台' },
];

function getDefaultResources(): Resource[] {
  return [
    // 开发工具
    {
      id: '1',
      name: 'GitHub',
      description: '全球最大的代码托管平台，开源项目聚集地',
      url: 'https://github.com',
      category: 'dev',
      tags: ['代码托管', '开源', '协作'],
      featured: true,
    },
    {
      id: '2',
      name: 'Vercel',
      description: 'Next.js 官方托管平台，零配置部署，极致性能',
      url: 'https://vercel.com',
      category: 'dev',
      tags: ['部署', 'Next.js', '前端'],
      featured: true,
    },
    {
      id: '3',
      name: 'Docker Hub',
      description: '容器镜像仓库，官方镜像和社区镜像资源',
      url: 'https://hub.docker.com',
      category: 'dev',
      tags: ['容器', '镜像', 'DevOps'],
    },
    {
      id: '4',
      name: 'npm',
      description: 'JavaScript 包管理器，最大的开源库生态系统',
      url: 'https://www.npmjs.com',
      category: 'dev',
      tags: ['JavaScript', '包管理', 'Node.js'],
    },
    {
      id: '5',
      name: 'JetBrains',
      description: '专业 IDE 工具，IntelliJ IDEA、WebStorm 等',
      url: 'https://www.jetbrains.com',
      category: 'dev',
      tags: ['IDE', '开发工具', 'Java'],
      featured: true,
    },
    {
      id: '6',
      name: 'VS Code',
      description: '微软开源编辑器，插件丰富，轻量强大',
      url: 'https://code.visualstudio.com',
      category: 'dev',
      tags: ['编辑器', '开源', '插件'],
    },

    // AI 资源
    {
      id: '7',
      name: 'OpenAI API',
      description: 'GPT 系列 API，强大的自然语言处理能力',
      url: 'https://platform.openai.com',
      category: 'ai',
      tags: ['GPT', 'LLM', 'API'],
      featured: true,
    },
    {
      id: '8',
      name: 'Anthropic Claude',
      description: 'Claude API，安全可靠的 AI 助手，擅长深度分析',
      url: 'https://www.anthropic.com',
      category: 'ai',
      tags: ['Claude', 'LLM', 'API'],
      featured: true,
    },
    {
      id: '9',
      name: 'Hugging Face',
      description: 'AI 模型社区，开源模型和 Transformers 库',
      url: 'https://huggingface.co',
      category: 'ai',
      tags: ['模型', '开源', 'Transformers'],
    },
    {
      id: '10',
      name: 'LangChain',
      description: 'LLM 应用开发框架，快速构建 AI Agent',
      url: 'https://www.langchain.com',
      category: 'ai',
      tags: ['Agent', '框架', 'LLM'],
    },
    {
      id: '11',
      name: 'OpenRouter',
      description: '多模型 API 统一入口，一次接入多个 LLM',
      url: 'https://openrouter.ai',
      category: 'ai',
      tags: ['API', '多模型', '聚合'],
    },
    {
      id: '12',
      name: 'Replicate',
      description: 'AI 模型托管平台，一键运行开源模型',
      url: 'https://replicate.com',
      category: 'ai',
      tags: ['模型托管', 'API', '开源'],
    },

    // 学习资源
    {
      id: '13',
      name: 'MDN Web Docs',
      description: 'Mozilla 官方 Web 开发文档，权威全面',
      url: 'https://developer.mozilla.org',
      category: 'learning',
      tags: ['Web', '文档', '前端'],
      featured: true,
    },
    {
      id: '14',
      name: 'freeCodeCamp',
      description: '免费编程学习平台，项目驱动教学',
      url: 'https://www.freecodecamp.org',
      category: 'learning',
      tags: ['免费', '编程', '项目'],
      featured: true,
    },
    {
      id: '15',
      name: 'LeetCode',
      description: '算法练习平台，面试刷题首选',
      url: 'https://leetcode.com',
      category: 'learning',
      tags: ['算法', '面试', '练习'],
    },
    {
      id: '16',
      name: 'Coursera',
      description: '名校在线课程，计算机科学、AI 等专业课程',
      url: 'https://www.coursera.org',
      category: 'learning',
      tags: ['课程', '名校', '认证'],
    },
    {
      id: '17',
      name: 'GitHub Skills',
      description: 'GitHub 官方学习课程，Git、Actions 等',
      url: 'https://skills.github.com',
      category: 'learning',
      tags: ['Git', 'GitHub', '免费'],
    },
    {
      id: '18',
      name: 'Roadmap.sh',
      description: '技术学习路线图，前端、后端、DevOps 等',
      url: 'https://roadmap.sh',
      category: 'learning',
      tags: ['路线图', '规划', '学习'],
    },

    // 设计资源
    {
      id: '19',
      name: 'Figma',
      description: '在线协作设计工具，UI 设计首选',
      url: 'https://www.figma.com',
      category: 'design',
      tags: ['UI', '协作', '在线'],
      featured: true,
    },
    {
      id: '20',
      name: 'Tailwind UI',
      description: 'Tailwind CSS 官方组件库，高质量设计',
      url: 'https://tailwindui.com',
      category: 'design',
      tags: ['组件', 'Tailwind', '模板'],
    },
    {
      id: '21',
      name: 'shadcn/ui',
      description: '高质量 React 组件，可复制粘贴使用',
      url: 'https://ui.shadcn.com',
      category: 'design',
      tags: ['组件', 'React', '开源'],
      featured: true,
    },
    {
      id: '22',
      name: 'Unsplash',
      description: '高质量免费图片库，无版权限制',
      url: 'https://unsplash.com',
      category: 'design',
      tags: ['图片', '免费', '高清'],
    },
    {
      id: '23',
      name: 'Coolors',
      description: '配色方案生成器，快速找到完美配色',
      url: 'https://coolors.co',
      category: 'design',
      tags: ['配色', '设计', '生成'],
    },
    {
      id: '24',
      name: 'Fontsource',
      description: '自托管 Web 字体，替代 Google Fonts',
      url: 'https://fontsource.org',
      category: 'design',
      tags: ['字体', '自托管', '开源'],
    },

    // 社区平台
    {
      id: '25',
      name: 'Stack Overflow',
      description: '全球最大编程问答社区，问题解答圣地',
      url: 'https://stackoverflow.com',
      category: 'community',
      tags: ['问答', '社区', '编程'],
      featured: true,
    },
    {
      id: '26',
      name: '掘金',
      description: '中文技术社区，高质量技术文章',
      url: 'https://juejin.cn',
      category: 'community',
      tags: ['中文', '文章', '社区'],
      featured: true,
    },
    {
      id: '27',
      name: 'Indie Hackers',
      description: '独立开发者社区，分享创业经验',
      url: 'https://www.indiehackers.com',
      category: 'community',
      tags: ['创业', '独立开发', '分享'],
    },
    {
      id: '28',
      name: 'Dev.to',
      description: '开发者博客社区，开放分享平台',
      url: 'https://dev.to',
      category: 'community',
      tags: ['博客', '社区', '分享'],
    },
    {
      id: '29',
      name: 'V2EX',
      description: '创意工作者社区，技术讨论和生活分享',
      url: 'https://www.v2ex.com',
      category: 'community',
      tags: ['中文', '讨论', '创意'],
    },
    {
      id: '30',
      name: 'Reddit r/programming',
      description: '编程子版块，全球开发者讨论热点',
      url: 'https://www.reddit.com/r/programming',
      category: 'community',
      tags: ['讨论', '新闻', '英文'],
    },
  ];
}

export const resources = getDefaultResources();
