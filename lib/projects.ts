import { Project } from './types';

export const projects: Project[] = [
  {
    id: '1',
    name: 'AI-Powered Code Assistant',
    description: '基于 Claude API 的智能代码助手，支持多语言代码生成和优化',
    techStack: ['Next.js', 'Claude API', 'LangChain', 'shadcn/ui'],
    cover: '/images/projects/ai-assistant.png',
    liveUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/niuniu/ai-assistant',
    status: 'active',
    featured: true,
  },
  {
    id: '2',
    name: 'Decentralized Task Manager',
    description: '基于区块链的去中心化任务管理系统，支持智能合约自动执行',
    techStack: ['React', 'Solidity', 'Hardhat', 'IPFS'],
    liveUrl: 'https://dapp.example.com',
    githubUrl: 'https://github.com/niuniu/task-dapp',
    status: 'developing',
    featured: true,
  },
  {
    id: '3',
    name: 'Real-time Analytics Dashboard',
    description: '高性能实时数据分析仪表板，支持百万级数据点可视化',
    techStack: ['Vue.js', 'D3.js', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://analytics.example.com',
    status: 'active',
  },
  {
    id: '4',
    name: 'Open Source UI Kit',
    description: '轻量级 React UI 组件库，专注开发体验和性能',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/niuniu/ui-kit',
    status: 'archived',
  },
];
