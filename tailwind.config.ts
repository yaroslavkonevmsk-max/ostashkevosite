import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#EEF2EE",
        paper: "#F7F8F4",
        line: "#C7D0C8",
        ink: "#141A17",
        muted: "#56655D",
        panel: "#E6ECE6",
        accent: {
          DEFAULT: "#21473C",
          foreground: "#F3F6F1"
        },
        bronze: "#9C7A46",
        charcoal: "#08110E"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"]
      },
      boxShadow: {
        soft: "0 28px 60px -34px rgba(8, 17, 14, 0.42)",
        panel: "0 18px 40px -28px rgba(8, 17, 14, 0.22)"
      },
      borderRadius: {
        xl2: "1.5rem"
      },
      maxWidth: {
        shell: "88rem",
        copy: "50rem"
      },
      letterSpacing: {
        heading: "-0.03em"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(20,26,23,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,26,23,0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
