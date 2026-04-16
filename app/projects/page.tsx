import { Metadata } from 'next';
import { ProjectsClient } from './ProjectsClient';

export const metadata: Metadata = {
  title: '项目展示',
  description: '个人项目和开源作品展示。包括 AI Chat Application、个人博客等项目，使用 React、Next.js、TypeScript 等技术栈。',
  openGraph: {
    title: '项目展示 | Niuniu',
    description: '个人项目和开源作品展示',
    type: 'website',
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}