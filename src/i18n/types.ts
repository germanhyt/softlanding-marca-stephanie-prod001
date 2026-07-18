export type Locale = "es" | "en";

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type HighlightItem = {
  label: string;
  icon: string;
  alt: string;
};

export type LabeledItem = {
  label: string;
  description: string;
};

export type ServiceItem = {
  number: string;
  tag: string;
  title: string;
  description: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type BrandItem = {
  name: string;
  logo: string;
};

export type NewsletterPost = {
  title: string;
  excerpt: string;
  href: string;
  image: string;
  alt: string;
};

export type HeadingParts = {
  eyebrow?: string;
  titleSans?: string;
  titleSerif?: string;
  titleSansAfter?: string;
  subtitle?: string;
};

export type SiteContent = {
  locale: Locale;
  htmlLang: string;
  ogLocale: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  whatsappMessage: string;
  ui: {
    letsTalk: string;
    bookMeeting: string;
    chooseStrategy: string;
    viewNewsletter: string;
    openMenu: string;
    closeMenu: string;
    menu: string;
    email: string;
    homeAria: string;
    logoAlt: string;
    footerNavAria: string;
    brandsAria: string;
    languageSwitchAria: string;
    languageEs: string;
    languageEn: string;
  };
  nav: NavLink[];
  hero: {
    titleSans: string;
    titleSerif: string;
    subtitle: string;
    imageAlt: string;
    highlights: HighlightItem[];
  };
  consultoria: HeadingParts & {
    idealTitle: string;
    idealItems: string[];
    workTitle: string;
    workItems: LabeledItem[];
    quoteBefore: string;
    quoteHighlight: string;
    lighthouseAlt: string;
    chessAlt: string;
  };
  servicios: HeadingParts & {
    items: ServiceItem[];
  };
  proceso: {
    eyebrow: string;
    titleBefore: string;
    titleAfter: string;
    circularNote: string;
    steps: ProcessStep[];
  };
  marcas: HeadingParts & {
    brands: BrandItem[];
  };
  sobreMi: {
    eyebrow: string;
    titleSans: string;
    titleSerif: string;
    paragraphs: string[];
    role: string;
    portraitAlt: string;
  };
  newsletter: {
    titleSans: string;
    titleSerif: string;
    posts: NewsletterPost[];
  };
  footer: HeadingParts;
};
