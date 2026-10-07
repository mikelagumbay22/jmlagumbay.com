import { useState } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, LazyMotion, MotionConfig, m } from "motion/react";
import Header from "./Header";
import Footer from "./Footer";
import RouteFocus from "./RouteFocus";

const loadFeatures = () => import("@/lib/motion-features").then((mod) => mod.default);
const EASE = [0.22, 1, 0.36, 1];

// Keeps the outgoing page's element alive while it animates out.
function Frozen({ children }) {
  const [frozen] = useState(children);
  return frozen;
}

export default function Layout() {
  const { pathname } = useLocation();
  const outlet = useOutlet();
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">
        <a href="#main" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main" tabIndex={-1} className="min-h-[70vh] pt-[72px] outline-none">
          {/* Fade-lift page transition: 0.18s out + 0.28s in (< 500 ms). Reduced motion: opacity only. */}
          <AnimatePresence mode="wait" initial={false}>
            <m.div
              key={pathname}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.28, ease: EASE } }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.18, ease: "easeIn" } }}
            >
              <RouteFocus />
              <Frozen>{outlet}</Frozen>
            </m.div>
          </AnimatePresence>
        </main>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  );
}
