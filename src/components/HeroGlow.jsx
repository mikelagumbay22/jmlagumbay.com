import { useEffect } from "react";
import { m, useMotionValue, useSpring } from "motion/react";
import { useMediaQuery } from "@/lib/hooks";
import { useReducedMotion } from "motion/react";

/** Static lime glow (always) plus a cursor-following glow on (pointer: fine) only, never under reduced motion. */
export default function HeroGlow({ containerRef }) {
  const fine = useMediaQuery("(pointer: fine)");
  const reduce = useReducedMotion();
  const enabled = fine && !reduce;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 90, damping: 18, mass: 0.7 });
  const sy = useSpring(y, { stiffness: 90, damping: 18, mass: 0.7 });

  useEffect(() => {
    const el = containerRef.current;
    if (!enabled || !el) return;
    const r0 = el.getBoundingClientRect();
    x.jump(r0.width * 0.7); y.jump(r0.height * 0.4);
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      x.set(e.clientX - r.left);
      y.set(e.clientY - r.top);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [enabled, containerRef, x, y]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(204,255,0,0.14),transparent)]" />
      {enabled && (
        <m.div
          className="absolute left-0 top-0 h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(204,255,0,0.16),transparent)]"
          style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
      )}
    </div>
  );
}
