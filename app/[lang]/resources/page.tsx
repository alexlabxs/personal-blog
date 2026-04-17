import { Metadata } from 'next';
import { ResourcesClient } from './ResourcesClient';
import { getDictionary, Locale } from '@/lib/i18n';

type Props = {
  params: { lang: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dict = await getDictionary(params.lang);
  return {
    title: dict.resources.title,
    description: dict.resources.description,
    openGraph: {
      title: `${dict.resources.title} | Alex`,
      description: dict.resources.description,
      type: 'website',
    },
  };
}

export default function ResourcesPage({ params }: Props) {
  return <ResourcesClient lang={params.lang} />;
}
