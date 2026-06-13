import { siteConfig } from "@/config/site.config";

export const heroHighlights = [
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
];

export const navLinks = [
  { label: "Consultoría", href: "#consultoria" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Newsletter", href: siteConfig.externalLinks.newsletter, external: true }
];

export const consultoriaIdealPara = [
  "Tienen muchas iniciativas pero poco foco estratégico",
  "Necesitan claridad sobre qué priorizar y por qué",
  "Buscan mejorar adquisición, retención o engagement",
  "Quieren una estrategia accionable, no una presentación"
];

export const consultoriaTrabajamosEn = [
  { label: "Diagnóstico", description: "Auditoría profunda del estado actual" },
  { label: "Prioridades", description: "Definición de qué mueve la aguja" },
  { label: "Growth Strategy", description: "Hoja de ruta clara y ejecutable" },
  { label: "Tactical planning", description: "Frameworks de ejecución por área" }
];

export const services = [
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
      "Actúo como tu Growth Lead fraccionado. Lidero la función de crecimiento de manera continua, embebida en tu equipo, sin el costo de una contratación full-time."
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
];

export const processSteps = [
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
      "Presencia activa durante la ejecución. No entrego un deck y me voy — me quedo mientras haga falta."
  },
  {
    title: "Medir",
    description:
      "Definición de métricas de éxito, seguimiento de resultados y ajuste continuo de la estrategia."
  }
];

export const sobreMiParagraphs = [
  "Con más de 10 años trabajando en la intersección de marketing, datos y estrategia, he acompañado a startups en sus primeras etapas, a scaleups en momentos críticos de crecimiento y a organizaciones de impacto en la construcción de sistemas sostenibles.",
  "Mi trabajo no empieza con tácticas. Empieza entendiendo el negocio, el equipo y los objetivos reales — y desde ahí, construimos juntos la estrategia que tiene más posibilidades de funcionar.",
  "Me interesa el crecimiento que dura: el que está alineado con la identidad de la organización, soportado por datos y ejecutado con criterio."
];
