import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        sans: ["var(--font-noto_sans)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: false,
      themes: {
        light: {
          colors: {
            background: "#ffffff",
            foreground: "#19191a",
            primary: {
              DEFAULT: "#19191a",
              foreground: "#19191a",
            },
            secondary: {
              DEFAULT: "#f672ca",
              foreground: "#f672ca",
            },
            danger: {
              DEFAULT: "#e60000",
              foreground: "#ffcccd",
            },
          },
        },
        dark: {
          colors: {
            background: "#1c1c22",
            foreground: "#ffffff",
            primary: {
              DEFAULT: "#ffffff",
              foreground: "#ffffff",
            },
            secondary: {
              DEFAULT: "#6eccee",
              foreground: "#6eccee",
            },
            danger: {
              DEFAULT: "#e60000",
              foreground: "#ffcccd",
            },
          },
        },
      },
    }),
  ],
};
export default config;
