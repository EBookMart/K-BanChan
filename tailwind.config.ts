import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        obangsaek: {
          east:   '#007A33',
          south:  '#CE1126',
          center: '#FFD700',
          west:   '#F5F5F5',
          north:  '#1C1C1C',
        },
      },
    },
  },
  plugins: [],
};
export default config;
