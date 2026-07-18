import type { SiteContent } from "@/i18n/types";
import { contentEs } from "@/i18n/content/es";

export const contentEn: SiteContent = {
  locale: "en",
  htmlLang: "en",
  ogLocale: "en_US",
  seo: {
    title: "Stephanie Hoyle | Growth strategy for real businesses",
    description:
      "Growth strategy consulting for startups and growing businesses. Strategies driven by data, research, and creativity.",
    keywords: [
      "growth strategy",
      "growth consulting",
      "data-driven marketing",
      "business strategy",
      "Stephanie Hoyle"
    ]
  },
  whatsappMessage:
    "Hi Stephanie, I'd like to book a meeting to discuss a growth strategy for my business.",
  ui: {
    letsTalk: "Let's talk",
    bookMeeting: "Book a meeting",
    chooseStrategy: "Choose your strategy",
    viewNewsletter: "View newsletter",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menu: "Menu",
    email: "Email",
    homeAria: "Stephanie Hoyle — home",
    logoAlt: "Stephanie Hoyle — Growth strategy",
    footerNavAria: "Footer links",
    brandsAria: "Brands I've worked with",
    languageSwitchAria: "Switch language",
    languageEs: "ES",
    languageEn: "EN"
  },
  nav: [
    { label: "Consulting", href: "#consultoria" },
    { label: "Services", href: "#servicios" },
    { label: "Process", href: "#proceso" },
    { label: "About me", href: "#sobre-mi" },
    { label: "Newsletter", href: "#newsletter" }
  ],
  hero: {
    titleSans: "Strategies that drive",
    titleSerif: "real businesses",
    subtitle:
      "I help startups and businesses grow through marketing strategies driven by data, research, and creativity.",
    imageAlt: "Strategy illustration: chessboard with a path toward the goal.",
    highlights: [
      {
        label: "Data-Driven Strategy",
        icon: "/images/hero-icon-datos.webp",
        alt: "Circular chart icon."
      },
      {
        label: "Startup Experience",
        icon: "/images/hero-icon-cohete.webp",
        alt: "Rocket icon."
      },
      {
        label: "Growth Mindset",
        icon: "/images/hero-icon-montana.webp",
        alt: "Mountain with flag icon."
      },
      {
        label: "Human-Centered & Creative Approach",
        icon: "/images/hero-icon-personas.webp",
        alt: "Group of people icon."
      }
    ]
  },
  consultoria: {
    eyebrow: "Consulting",
    titleSans: "Strategic Advisory",
    idealTitle: "Ideal for teams that",
    idealItems: [
      "Have many initiatives but lack strategic focus",
      "Need clarity on what to prioritize and why",
      "Want to improve acquisition, retention, or engagement",
      "Need an actionable strategy, not just a presentation"
    ],
    workTitle: "We work together on",
    workItems: [
      { label: "Assessment", description: "In-depth audit of the current state" },
      { label: "Priorities", description: "Defining what drives the greatest impact" },
      { label: "Growth Strategy", description: "A clear and actionable roadmap" },
      { label: "Tactical Planning", description: "Execution frameworks for each business area" }
    ],
    quoteBefore:
      "I'm not a freelancer who simply executes tasks. I'm a strategic partner who works closely with your team and actively participates in the process to ",
    quoteHighlight: "drive meaningful progress.",
    lighthouseAlt: "Illustration of a lighthouse on rocks.",
    chessAlt: "Illustration of a chess piece on books."
  },
  servicios: {
    eyebrow: "Services",
    titleSans: "Ways we can ",
    titleSerif: "work together.",
    items: [
      {
        number: "01",
        tag: "Strategy",
        title: "Growth Strategy",
        description:
          "Comprehensive growth strategy design, including audits, diagnostics, goal definition, and the development of an actionable roadmap aligned with your business objectives."
      },
      {
        number: "02",
        tag: "Leadership",
        title: "Fractional Head of Growth",
        description:
          "I join your team as your Head of Growth to define strategy, prioritize initiatives, and lead execution. You gain senior leadership without the cost of a full-time hire."
      },
      {
        number: "03",
        tag: "Communication",
        title: "Engagement & Storytelling",
        description:
          "Improve your positioning, messaging, and brand narrative. We translate strategy into stories that resonate with your audience and drive better conversions."
      },
      {
        number: "04",
        tag: "On-demand",
        title: "Strategic Advisory",
        description:
          "Focused working sessions designed to help you unlock specific decisions. Express diagnostics, strategy reviews, or guidance for a particular business challenge."
      }
    ]
  },
  proceso: {
    eyebrow: "Process",
    titleBefore: "How I ",
    titleAfter: "work.",
    circularNote: "A circular process, not a linear one.",
    steps: [
      {
        title: "Understand",
        description:
          "A deep dive into your business, market, team, and goals. No assumptions, no skipping steps."
      },
      {
        title: "Design",
        description:
          "Building the strategy and roadmap with clear priorities and well-defined decision criteria."
      },
      {
        title: "Support",
        description:
          "Active involvement throughout execution. I don't just deliver a presentation and leave—I stay involved for as long as needed."
      },
      {
        title: "Measure",
        description:
          "Defining success metrics, tracking results, and continuously refining the strategy."
      }
    ]
  },
  marcas: {
    eyebrow: "Clients",
    titleSans: "Brands that accelerated",
    titleSerif: "their growth with me",
    brands: contentEs.marcas.brands
  },
  sobreMi: {
    eyebrow: "About me",
    titleSans: "Strategy to build ",
    titleSerif: "sustainable growth.",
    paragraphs: [
      "Businesses don't grow by doing more marketing. They grow when they know where to focus their efforts.",
      "For more than 10 years, I've helped startups, growing companies, and impact-driven organizations identify opportunities, define growth strategies, and turn them into results.",
      "My role is to provide clarity, focus, and direction so growth becomes a business capability rather than a collection of isolated actions."
    ],
    role: "Growth strategy",
    portraitAlt: "Illustrated portrait of Stephanie Hoyle"
  },
  newsletter: {
    titleSans: "Content to grow and ",
    titleSerif: "make a lasting impact",
    // Newsletter articles remain in Spanish (Substack source language).
    posts: contentEs.newsletter.posts
  },
  footer: {
    titleSans: "Does your team need more",
    titleSerif: "clarity and direction",
    titleSansAfter: "?",
    subtitle:
      "Let's talk about your goals and explore how I can help you build a growth strategy that truly works."
  }
};
