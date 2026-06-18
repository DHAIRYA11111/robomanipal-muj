import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // RoboManipal MUJ brand palette
        cotton: "#EDE9DD", // Cotton White
        cherry: "#821010", // Cherry Red
        maroon: "#5B0300", // Maroon
        noir: "#1F1717", // Noir Black
        // tonal extensions for depth
        "noir-900": "#140E0E",
        "noir-800": "#1F1717",
        "noir-700": "#2A201F",
        "noir-600": "#392B29",
        "cherry-glow": "#B81818",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // fluid display sizes
        "fluid-sm": "clamp(1.5rem, 4vw, 2.5rem)",
        "fluid-md": "clamp(2.5rem, 7vw, 5rem)",
        "fluid-lg": "clamp(3rem, 11vw, 9rem)",
        "fluid-xl": "clamp(4rem, 16vw, 16rem)",
      },
      letterSpacing: {
        ultra: "0.4em",
      },
      maxWidth: {
        wide: "1600px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
        power: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      keyframes: {
        "grid-pan": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 60px" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.8" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        scan: {
          "0%,100%": { transform: "translateY(-100%)" },
          "50%": { transform: "translateY(100%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "grid-pan": "grid-pan 6s linear infinite",
        marquee: "marquee 32s linear infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.22,1,0.36,1) infinite",
        scan: "scan 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        // robotics-core rotations (reference Tailwind's built-in `spin`/`pulse` keyframes)
        "spin-slow": "spin 48s linear infinite",
        "spin-mid-rev": "spin 32s linear infinite reverse",
        "spin-fast": "spin 6s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
