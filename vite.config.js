import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/  ·  SSG: https://github.com/Daydreamer-riri/vite-react-ssg
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  build: {
    target: "es2020",
    chunkSizeWarningLimit: 300,
  },
  ssgOptions: {
    entry: "src/main.jsx",
    // flat: /work -> work.html. GitHub Pages serves /work from work.html with no redirect,
    // so the canonical URLs (https://www.jmlagumbay.com/work) are the real, 200-status URLs.
    dirStyle: "flat",
    formatting: "none",
    // Inline the critical CSS of each prerendered page and load the rest without blocking render.
    beastiesOptions: { preload: "swap", pruneSource: false, reduceInlineStyles: false, preloadFonts: false },
  },
});
