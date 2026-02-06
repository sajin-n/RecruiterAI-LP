import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Accent Colors
        accent: {
          1: "#A5D8FF",
          2: "#D0BCFF",
          3: "#B197FC",
        },
        // Light Mode
        light: {
          primary: "#3B82F6",
          "primary-bg": "#EFF6FF",
          "secondary-bg": "#FFFFFF",
          secondary: "#F3F4F6",
        },
        // Dark Mode
        dark: {
          primary: "#3B82F6",
          "primary-bg": "#000000",
          "secondary-bg": "#404040",
          secondary: "#737373",
        },
      },
      animation: {
        "scroll-left": "scroll-left 30s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
