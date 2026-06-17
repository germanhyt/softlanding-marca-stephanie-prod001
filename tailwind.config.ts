import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "4xl": "2560px"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.2rem",
          md: "1.5rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "6rem"
        }
      },
      fontFamily: {
        sans: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "ui-serif", "Georgia", "serif"]
      },
      colors: {
        primary: {
          light: "#E3FF87",
          dark: "#1C3727"
        },
        text: {
          main: "#3B4941",
          dark: "#1C3727",
          muted: "#5F6B65"
        },
        background: {
          base: "#F5EFEC",
          soft: "#FFF9F4",
          contrast: "#EDE4DF"
        }
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #E3FF87 0%, #B9EC4B 100%)"
      },
      boxShadow: {
        card: "0 10px 30px rgba(28, 55, 39, 0.08)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};

export default config;
