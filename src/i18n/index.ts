import { contentEn } from "@/i18n/content/en";
import { contentEs } from "@/i18n/content/es";
import type { Locale, SiteContent } from "@/i18n/types";

export type { Locale, SiteContent } from "@/i18n/types";

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

const contentByLocale: Record<Locale, SiteContent> = {
  es: contentEs,
  en: contentEn
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getSiteContent(locale: Locale = defaultLocale): SiteContent {
  return contentByLocale[locale] ?? contentByLocale[defaultLocale];
}

export function getLocalePath(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}/`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}
