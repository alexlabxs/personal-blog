import { Metadata } from 'next';
import { ResourcesClient } from './ResourcesClient';
import { getDictionary, Locale } from '@/lib/i18n';
import { generateResourcesMetadata } from '@/lib/seo/metadata';

type Props = {
  params: { lang: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return generateResourcesMetadata(params.lang);
}

export default function ResourcesPage({ params }: Props) {
  return <ResourcesClient lang={params.lang} />;
}
