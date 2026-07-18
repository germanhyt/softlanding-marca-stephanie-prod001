import { siteConfig } from "@/config/site.config";

export const sectionIds = {
  consultoria: "consultoria",
  servicios: "servicios",
  proceso: "proceso",
  sobreMi: "sobre-mi",
  newsletter: "newsletter",
  contacto: "contacto"
} as const;

export const smoothScrollTo = (id: string) => {
  if (typeof window === "undefined") {
    return;
  }

  const target = document.getElementById(id);
  if (!target) {
    return;
  }

  target.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const buildWhatsAppUrl = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.contact.whatsappPhone}?text=${encodedMessage}`;
};

export const handleHashNavigation = (
  event: { preventDefault: () => void },
  href: string
) => {
  if (!href.startsWith("#") || href.length <= 1) {
    return false;
  }

  event.preventDefault();
  smoothScrollTo(href.slice(1));
  return true;
};
