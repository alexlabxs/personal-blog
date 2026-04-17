import { Metadata } from 'next';
import { ProjectsClient } from './ProjectsClient';
import { getDictionary, Locale } from '@/lib/i18n';

type Props = {
  params: { lang: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dict = await getDictionary(params.lang);
  return {
    title: dict.projects.title,
    description: dict.projects.description,
    openGraph: {
      title: `${dict.projects.title} | Alex`,
      description: dict.projects.description,
      type: 'website',
    },
  };
}

export default function ProjectsPage({ params }: Props) {
  return <ProjectsClient lang={params.lang} />;
}
