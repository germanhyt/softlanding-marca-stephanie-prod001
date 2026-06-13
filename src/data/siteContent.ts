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

export const services = [
  {
    title: "Growth",
    description:
      "Estrategias de adquisición, activación y retención para convertir objetivos en crecimiento medible.",
    result: "Roadmap accionable con prioridades claras.",
    image: "/images/service-growth.webp",
    alt: "Ilustración del servicio Growth."
  },
  {
    title: "Brand",
    description:
      "Definición de posicionamiento y mensajes para alinear marca, propuesta de valor y audiencia.",
    result: "Narrativa coherente para comunicar y diferenciar.",
    image: "/images/service-brand.webp",
    alt: "Ilustración del servicio Brand."
  },
  {
    title: "On-demand",
    description:
      "Acompañamiento estratégico flexible para destrabar decisiones clave durante la ejecución.",
    result: "Soporte experto en momentos de mayor impacto.",
    image: "/images/service-ondemand.webp",
    alt: "Ilustración del servicio On-demand."
  }
];

export const processSteps = [
  {
    title: "Entender",
    description:
      "Inmersión profunda en tu negocio, mercado, equipo y objetivos. Sin asumir, sin saltarse pasos.",
    icon: "/images/process-entender.webp"
  },
  {
    title: "Diseñar",
    description:
      "Construcción de la estrategia y el roadmap con prioridades claras y criterios de decisión explícitos.",
    icon: "/images/process-disenar.webp"
  },
  {
    title: "Acompañar",
    description:
      "Presencia activa durante la ejecución. No entrego un deck y me voy, me quedo mientras haga falta.",
    icon: "/images/process-acompanar.webp"
  },
  {
    title: "Medir",
    description:
      "Definición de métricas de éxito, seguimiento de resultados y ajuste continuo de la estrategia.",
    icon: "/images/process-medir.webp"
  }
];
