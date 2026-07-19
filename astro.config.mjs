// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://stephaniehoyle.com");

// GitHub Pages usa subpath; Vercel sirve desde la raíz.
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site,
  base,
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false
    }),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es",
          en: "en"
        }
      }
    })
  ],
  output: "static"
});
