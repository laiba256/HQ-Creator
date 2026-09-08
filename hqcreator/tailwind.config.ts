import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F4F2EC",
        ink: "#16213A",
        charcoal: "#22221F",
        stamp: "#B23A2E",
        approved: "#5C7A5E",
        amber: "#E0A24B",
        line: "#D8D3C4",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        sm: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
