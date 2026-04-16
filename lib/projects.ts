import { Project } from './types';

export const projects: Project[] = [
  {
    id: '1',
    name: '费控及智能报销管理系统',
    description: '企业费用报销与预算管理平台，集成 OCR 智能识别、移动端报销、预算自动核销',
    techStack: ['Spring Boot', 'Oracle', 'BPM', 'OCR', '企业微信'],
    status: 'active',
    featured: true,
  },
  {
    id: '2',
    name: '收付费微服务',
    description: '高并发收付费系统，处理实时扣费与批量扣款任务，确保资金流水绝对准确',
    techStack: ['Java', 'Spring Cloud', 'RocketMQ', 'MySQL', '分布式事务'],
    status: 'active',
    featured: true,
  },
  {
    id: '3',
    name: '记账微服务系统',
    description: '财务数据总入口，将各业务系统原始数据转化为标准化财务凭证',
    techStack: ['Spring Cloud', 'Nacos', 'Sentinel', '接口限流补偿'],
    status: 'active',
  },
  {
    id: '4',
    name: 'IFRS17 财务准则重构',
    description: '应对保险行业 IFRS17 准则，开发会计引擎与分摊模块',
    techStack: ['Java', 'Spring Boot', 'Postgres', '大数据量批处理'],
    status: 'active',
  },
];
