import type { SiteContent } from "@/i18n/types";

export const contentEs: SiteContent = {
  locale: "es",
  htmlLang: "es",
  ogLocale: "es_PE",
  seo: {
    title: "Stephanie Hoyle | Growth strategy para negocios reales",
    description:
      "Consultoría de growth strategy para startups y negocios en crecimiento. Estrategias basadas en datos, investigación y creatividad.",
    keywords: [
      "growth strategy",
      "consultoría de crecimiento",
      "marketing basado en datos",
      "estrategia de negocio",
      "Stephanie Hoyle"
    ]
  },
  whatsappMessage:
    "Hola Stephanie, me gustaría agendar una reunión para conversar sobre estrategia de crecimiento para mi negocio.",
  ui: {
    letsTalk: "Hablemos",
    bookMeeting: "Agenda una reunión",
    chooseStrategy: "Elige tu estrategia",
    viewNewsletter: "Ver newsletter",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    menu: "Menú",
    email: "Correo",
    homeAria: "Stephanie Hoyle — inicio",
    logoAlt: "Stephanie Hoyle — Growth strategy",
    footerNavAria: "Enlaces del pie de página",
    brandsAria: "Marcas con las que he trabajado",
    languageSwitchAria: "Cambiar idioma",
    languageEs: "ES",
    languageEn: "EN"
  },
  nav: [
    { label: "Consultoría", href: "#consultoria" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Newsletter", href: "#newsletter" }
  ],
  hero: {
    titleSans: "Estrategias que impulsan",
    titleSerif: "negocios reales",
    subtitle:
      "Ayudo a startups y negocios a crecer con estrategias de marketing basadas en datos, investigación y creatividad.",
    imageAlt: "Ilustración de estrategia: tablero de ajedrez con camino hacia la meta.",
    highlights: [
      {
        label: "Estrategia basada en datos",
        icon: "/images/hero-icon-datos.webp",
        alt: "Ícono de gráfico circular."
      },
      {
        label: "Experiencia en startups",
        icon: "/images/hero-icon-cohete.webp",
        alt: "Ícono de cohete."
      },
      {
        label: "Mentalidad de crecimiento",
        icon: "/images/hero-icon-montana.webp",
        alt: "Ícono de montaña con bandera."
      },
      {
        label: "Enfoque humano y creativo",
        icon: "/images/hero-icon-personas.webp",
        alt: "Ícono de grupo de personas."
      }
    ]
  },
  consultoria: {
    eyebrow: "Consultoría",
    titleSans: "Acompañamiento estratégico",
    idealTitle: "Ideal para equipos que",
    idealItems: [
      "Tienen muchas iniciativas pero poco foco estratégico",
      "Necesitan claridad sobre qué priorizar y por qué",
      "Buscan mejorar adquisición, retención o engagement",
      "Quieren una estrategia accionable, no una presentación"
    ],
    workTitle: "Trabajamos juntas/os en",
    workItems: [
      { label: "Diagnóstico", description: "Auditoría profunda del estado actual" },
      { label: "Prioridades", description: "Definición de qué mueve la aguja" },
      { label: "Growth Strategy", description: "Hoja de ruta clara y ejecutable" },
      { label: "Tactical planning", description: "Frameworks de ejecución por área" }
    ],
    quoteBefore:
      "No soy una freelancer que ejecuta tareas. Soy una socia estratégica que trabaja de cerca con tu equipo y se involucra en el proceso para ",
    quoteHighlight: "generar avances reales.",
    lighthouseAlt: "Ilustración de un faro sobre rocas.",
    chessAlt: "Ilustración de una pieza de ajedrez sobre libros."
  },
  servicios: {
    eyebrow: "Servicios",
    titleSans: "Formas de ",
    titleSerif: "trabajar juntos.",
    items: [
      {
        number: "01",
        tag: "Estrategia",
        title: "Growth Strategy",
        description:
          "Diseño de estrategia de crecimiento integral: auditoría, diagnóstico, definición de objetivos y construcción de un roadmap accionable alineado a tus metas de negocio."
      },
      {
        number: "02",
        tag: "Liderazgo",
        title: "Fractional Head of Growth",
        description:
          "Actúo como tu Head of Growth. Me integro a tu equipo para definir la estrategia, priorizar iniciativas y liderar la ejecución. Obtienes liderazgo senior sin el costo de una contratación full-time."
      },
      {
        number: "03",
        tag: "Comunicación",
        title: "Engagement & Storytelling",
        description:
          "Mejora de posicionamiento, messaging y narrativa de marca. Traducimos estrategia en historias que resuenan con tu audiencia y convierten mejor."
      },
      {
        number: "04",
        tag: "On-demand",
        title: "Strategic Advisory",
        description:
          "Sesiones de trabajo enfocadas para desbloquear decisiones específicas. Diagnóstico express, revisión de estrategia o respuesta a un desafío concreto."
      }
    ]
  },
  proceso: {
    eyebrow: "Proceso",
    titleBefore: "Cómo ",
    titleAfter: "trabajo.",
    circularNote: "Un proceso circular, no lineal.",
    steps: [
      {
        title: "Entender",
        description:
          "Inmersión profunda en tu negocio, mercado, equipo y objetivos. Sin asumir, sin saltarse pasos."
      },
      {
        title: "Diseñar",
        description:
          "Construcción de la estrategia y el roadmap con prioridades claras y criterios de decisión explícitos."
      },
      {
        title: "Acompañar",
        description:
          "Presencia activa durante la ejecución. No entrego un deck y me voy, me quedo mientras haga falta."
      },
      {
        title: "Medir",
        description:
          "Definición de métricas de éxito, seguimiento de resultados y ajuste continuo de la estrategia."
      }
    ]
  },
  marcas: {
    eyebrow: "Clientes",
    titleSans: "Marcas que impulsaron",
    titleSerif: "su crecimiento conmigo",
    brands: [
      { name: "UTEC", logo: "/images/marcas/utec.webp" },
      { name: "Laboratoria", logo: "/images/marcas/laboratoria.webp" },
      { name: "Pacasmayo", logo: "/images/marcas/pacasmayo.webp" },
      { name: "Interbank", logo: "/images/marcas/interbank.webp" },
      { name: "Propel", logo: "/images/marcas/propel.webp" },
      { name: "La Victoria Lab", logo: "/images/marcas/la-victoria-lab.webp" },
      { name: "Oxxo", logo: "/images/marcas/oxxo.png" },
      { name: "Tul", logo: "/images/marcas/tul.png" }
    ]
  },
  sobreMi: {
    eyebrow: "Sobre mí",
    titleSans: "Estrategia para construir ",
    titleSerif: "crecimiento sostenible.",
    paragraphs: [
      "Las empresas no crecen por hacer más marketing. Crecen cuando saben dónde enfocar sus esfuerzos.",
      "Durante más de 10 años he ayudado a startups, empresas en crecimiento y organizaciones de impacto a identificar oportunidades, definir estrategias de crecimiento y convertirlas en resultados.",
      "Mi trabajo es aportar claridad, foco y dirección para que el crecimiento deje de depender de acciones aisladas y se convierta en una capacidad del negocio."
    ],
    role: "Growth strategy",
    portraitAlt: "Retrato ilustrado de Stephanie Hoyle"
  },
  newsletter: {
    titleSans: "Contenido para ",
    titleSerif: "crecer y trascender",
    posts: [
      {
        title: "Marketing, growth e IA: cómo usar IA donde realmente mueve el crecimiento",
        excerpt:
          "La mayoría de empresas está entrando a la conversación sobre inteligencia artificial por el lugar equivocado.",
        href: "https://sustainablecareergrowth.substack.com/p/marketing-growth-e-ia-como-usar-ia",
        image: "/images/newsletter-marketing.webp",
        alt: "Ilustración sobre marketing, growth e inteligencia artificial."
      },
      {
        title: "Antes de diseñar crecimiento, entiende a quién quieres servir",
        excerpt:
          "En el primer artículo hablamos de algo fundamental: definir qué significa crecer. Este segundo paso es igual de importante y, muchas veces, incluso más…",
        href: "https://sustainablecareergrowth.substack.com/p/antes-de-disenar-crecimiento-entiende",
        image: "/images/newsletter-options.webp",
        alt: "Meme sobre demasiadas opciones al diseñar crecimiento."
      },
      {
        title: "Cómo elegir las palancas correctas y diseñar crecimiento que realmente avanza",
        excerpt: "La parte más importante del proceso: convertir diagnóstico en decisiones",
        href: "https://sustainablecareergrowth.substack.com/p/como-elegir-las-palancas-correctas",
        image: "/images/newsletter-conocer.webp",
        alt: "Meme sobre elegir las palancas correctas de crecimiento."
      }
    ]
  },
  footer: {
    titleSans: "¿Tu equipo necesita más",
    titleSerif: "claridad y dirección",
    titleSansAfter: "?",
    subtitle:
      "Conversemos sobre tus objetivos y veamos cómo puedo ayudarte a construir una estrategia de crecimiento que realmente funcione."
  }
};
