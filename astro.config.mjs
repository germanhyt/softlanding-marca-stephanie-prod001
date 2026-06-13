// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

const site = process.env.SITE_URL ?? "https://germanhyt.github.io";
const base = process.env.BASE_PATH ?? "/softlanding-marca-stephanie-prod001";

export default defineConfig({
  site,
  base,
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false
    }),
    sitemap({
      changefreq: "weekly",
      priority: 0.7
    })
  ],
  output: "static"
});
