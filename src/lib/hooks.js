import { useEffect, useLayoutEffect, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

export const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** True only in the browser, after mount, while the media query matches. Always false on the server and
 *  during hydration, so prerendered HTML and the first client render are identical. */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);
  return matches;
}

/** Fine pointer + hover capable + motion allowed: the only case where tilt/spotlight/cursor effects run. */
export function useFinePointerMotion() {
  const fine = useMediaQuery("(hover: hover) and (pointer: fine)");
  const reduce = useReducedMotion();
  return fine && !reduce;
}

/**
 * Scroll-reveal state that never hides content in the prerendered HTML.
 * Server + hydration render: visible. After mount, only elements that start below the fold are "armed"
 * (hidden off-screen) and revealed once (once: true) when they scroll into view. Reduced motion: never armed.
 */
export function useRevealState(ref, amount = 0.15) {
  const reduce = useReducedMotion();
  const [armed, setArmed] = useState(false);
  const inView = useInView(ref, { once: true, amount });
  useIsoLayoutEffect(() => {
    if (reduce || !ref.current) return;
    if (ref.current.getBoundingClientRect().top > window.innerHeight * 0.92) setArmed(true);
  }, []);
  return armed && !inView;
}
