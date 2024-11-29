import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        iconColor:"#21241D",
        footer:"#FAF5F5",
        recentBackground:"#F4E2E2",
        backgroundButton:"#F98596",
        buttonHover: "#F98570",
        heroText:"#21243D",
        backgroundEllipse:"#AA9F9F4F",
        background: "rgba(207, 166, 166, 0.11)",
         foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
