import { Metadata } from 'next';
import { ProjectsClient } from './ProjectsClient';
import { getDictionary, Locale } from '@/lib/i18n';
import { generateProjectsMetadata } from '@/lib/seo/metadata';

type Props = {
  params: { lang: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return generateProjectsMetadata(params.lang);
}

export default function ProjectsPage({ params }: Props) {
  return <ProjectsClient lang={params.lang} />;
}
