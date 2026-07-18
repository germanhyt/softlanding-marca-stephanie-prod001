import { siteConfig } from "@/config/site.config";
import { getSiteContent, type Locale } from "@/i18n";

export function getSeoConfig(locale: Locale) {
  const content = getSiteContent(locale);
  const path = locale === "es" ? "/" : `/${locale}/`;
  const canonical = new URL(path, siteConfig.siteUrl).toString();

  return {
    title: content.seo.title,
    description: content.seo.description,
    keywords: content.seo.keywords,
    canonical,
    ogImage: `${siteConfig.siteUrl}/images/hero-banner.webp`,
    htmlLang: content.htmlLang,
    ogLocale: content.ogLocale
  };
}
