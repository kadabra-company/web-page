import homeEs from "../data/home.es.json";
import homeEn from "../data/home.en.json";
import type { THome, Locale } from "./types";

export const defaultLocale: Locale = "es";
export const locales: Locale[] = ["es", "en"];

export const homeByLocale: Record<Locale, THome> = {
  es: homeEs as THome,
  en: homeEn as THome
};