import Layout from "./layout/Layout";

// Page modules are code-split; vite-react-ssg resolves the matched one before hydrating.
export const routes = [
  {
    path: "/",
    element: <Layout />,
    entry: "src/layout/Layout.jsx",
    children: [
      { index: true, lazy: () => import("./pages/Home") },
      { path: "work", lazy: () => import("./pages/Work") },
      { path: "about", lazy: () => import("./pages/About") },
      { path: "contact", lazy: () => import("./pages/Contact") },
      // Prerendered to 404.html, which GitHub Pages serves (status 404) for any unknown path.
      { path: "404", lazy: () => import("./pages/NotFound") },
      { path: "*", lazy: () => import("./pages/NotFound") },
    ],
  },
];
