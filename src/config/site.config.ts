const defaultSiteUrl =
  import.meta.env.SITE ??
  (import.meta.env.VERCEL_URL ? `https://${import.meta.env.VERCEL_URL}` : "https://www.stephaniehoyle.com");

export const siteConfig = {
  siteUrl: defaultSiteUrl,
  siteName: "Stephanie Hoyle",
  author: "Stephanie Hoyle",
  role: "Growth strategy",
  locale: "es-PE",
  externalLinks: {
    newsletter: "https://sustainablecareergrowth.substack.com/",
    linkedin: "https://www.linkedin.com/in/stephaniehoyleca/"
  }
};

export type SiteConfig = typeof siteConfig;
