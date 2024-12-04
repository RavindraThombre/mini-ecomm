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
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        accent:"#FF8F9C",
        blackish:"#1b1b1b"
      },
      container:{
        center:true,
        padding:"15px"
      }
    },
  },
  plugins: [],
} satisfies Config;
