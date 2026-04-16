import Script from 'next/script';
import { generatePersonSchema, generateWebSiteSchema } from './schema';

/**
 * 全局结构化数据组件
 * 添加到 layout.tsx 中
 */
export function GlobalSchema() {
  const personSchema = generatePersonSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}