import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
export default {
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
        "grid-dots": `
          radial-gradient(circle, rgba(0,0,0,0.5) 2px, transparent 1px),
          linear-gradient(90deg, transparent 1px, transparent 1px),
          linear-gradient(0deg, transparent 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        "grid-lg": "125px 125px",
      },
      backgroundPosition: {
        centered: "center",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
