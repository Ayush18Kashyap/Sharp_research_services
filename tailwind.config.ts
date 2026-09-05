import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0E2A47",
          light: "#163C61",
          deep: "#081A2C",
        },
        gold: {
          DEFAULT: "#C69A3C",
          light: "#E9CC85",
        },
        bgalt: "#F5F5F1",
        line: "#E4E3DC",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        wrap: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
