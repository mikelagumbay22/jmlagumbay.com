import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import "./styles/index.css";

// Every route is prerendered to real HTML at build time (vite-react-ssg), then hydrated.
export const createRoot = ViteReactSSG({
  routes,
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_skipActionErrorRevalidation: true,
  },
});
