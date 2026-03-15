import homeEs from "../data/home.es.json";
import homeEn from "../data/home.en.json";

export const defaultLocale = "es" as const;

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const homeByLocale: Record<Locale, typeof homeEs> = {
  es: homeEs,
  en: homeEn
};