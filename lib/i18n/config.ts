export const locales = ['zh', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'zh';

export const localeNames: Record<Locale, string> = {
  zh: '中文',
  en: 'English',
};

export const localeLabels: Record<Locale, { native: string; short: string }> = {
  zh: { native: '中文', short: '中' },
  en: { native: 'English', short: 'EN' },
};
