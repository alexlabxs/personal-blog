import zhDict from './dictionaries/zh.json';
import enDict from './dictionaries/en.json';
import { Locale } from './config';

const dictionaries = {
  zh: zhDict,
  en: enDict,
};

export function useTranslation(locale: Locale) {
  return dictionaries[locale] || dictionaries.zh;
}

export { dictionaries };
