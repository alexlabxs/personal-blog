import { Metadata } from 'next';
import { ResourcesClient } from './ResourcesClient';

export const metadata: Metadata = {
  title: '资源分享',
  description: '开发者优质资源分享，包括开发工具、AI 资源、学习资源、设计资源和社区平台。',
  openGraph: {
    title: '资源分享 | Alex',
    description: '开发者优质资源分享，持续更新',
    type: 'website',
  },
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}