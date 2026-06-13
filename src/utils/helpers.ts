export const sectionIds = {
  consultoria: "consultoria",
  servicios: "servicios",
  proceso: "proceso",
  sobreMi: "sobre-mi",
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
