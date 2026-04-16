import { Metadata } from 'next';
import { ProjectsClient } from './ProjectsClient';

export const metadata: Metadata = {
  title: '项目展示',
  description: '个人项目和开源作品展示。包括费控管理系统、收付费微服务等核心系统项目，使用 Java、Spring Boot、Spring Cloud 等技术栈。',
  openGraph: {
    title: '项目展示 | Alex',
    description: '个人项目和核心系统作品展示',
    type: 'website',
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}