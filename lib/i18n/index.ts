import { Locale, locales, defaultLocale, localeLabels } from './config';
import zhDict from './dictionaries/zh.json';
import enDict from './dictionaries/en.json';

const dictionaries = {
  zh: zhDict,
  en: enDict,
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale] || dictionaries[defaultLocale];
};

export const isValidLocale = (locale: string): locale is Locale => {
  return locales.includes(locale as Locale);
};

export { locales, defaultLocale, localeLabels };
export type { Locale };
