import type { Locale } from './i18n';

const dictionaries = {
  sv: () => import('../dictionaries/sv.json').then((module) => module.default),
  en: () => import('../dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.sv();
