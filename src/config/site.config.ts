const defaultSiteUrl =
  import.meta.env.SITE ??
  (import.meta.env.VERCEL_URL ? `https://${import.meta.env.VERCEL_URL}` : "https://www.stephaniehoyle.com");

export const siteConfig = {
  siteUrl: defaultSiteUrl,
  siteName: "Stephanie Hoyle",
  author: "Stephanie Hoyle",
  role: "Growth strategy",
  locale: "es-PE",
  contact: {
    email: "shoylec88@gmail.com",
    whatsappPhone: "51951716163",
    whatsappMessage:
      "Hola Stephanie, me gustaría agendar una reunión para conversar sobre estrategia de crecimiento para mi negocio."
  },
  externalLinks: {
    newsletter: "https://sustainablecareergrowth.substack.com/",
    linkedin: "https://www.linkedin.com/in/stephaniehoyleca/"
  }
};

export type SiteConfig = typeof siteConfig;
