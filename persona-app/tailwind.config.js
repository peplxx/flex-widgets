import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 2px), linear-gradient(0deg, rgba(0,0,0,0.1) 1px, transparent 2px)",
      },
      backgroundSize: {
        "grid-lg": "125px 125px",
      },
      backgroundPosition: {
        centered: "center", // Centers the grid in the middle
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
