import { Metadata } from 'next';
import { ProjectsClient } from './ProjectsClient';

export const metadata: Metadata = {
  title: '项目展示 | Alex Xiao',
  description: '个人项目和开源作品',
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}