/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Brand tokens kept from the original site
        "electric-lime": "#CCFF00",
        "onyx-black": "#000000",
        "graphite-grey": "#121212",
        "surface-container-low": "#1a1c1c",
        "surface-container-high": "#282a2b",
        "surface-variant": "#333535",
        "on-surface": "#e2e2e2",
        "on-surface-variant": "#c4c9ac",
        "border-subtle": "rgba(255, 255, 255, 0.1)",
        "glass-overlay": "rgba(255, 255, 255, 0.03)",
        primary: "#ffffff",
      },
      fontFamily: {
        display: ["Montserrat", "Montserrat Fallback", "Arial", "sans-serif"],
        body: ["Inter", "Inter Fallback", "Arial", "sans-serif"],
        mono: ["JetBrains Mono", "JetBrains Mono Fallback", "Courier New", "monospace"],
      },
      maxWidth: { wrap: "1200px" },
      transitionTimingFunction: { "out-expo": "cubic-bezier(0.22, 1, 0.36, 1)" },
    },
  },
  plugins: [],
};
