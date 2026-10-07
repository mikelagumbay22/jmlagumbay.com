import { useRef } from "react";
import { m, useMotionValue, useSpring } from "motion/react";
import { useFinePointerMotion } from "@/lib/hooks";

const MAX_TILT = 6; // degrees (review.md caps at ~8)

/**
 * Card shell with a 3D tilt + cursor spotlight on fine pointers only (hover-capable mouse/trackpad,
 * motion allowed). On touch, keyboard-only or reduced motion it is a plain, static card.
 * `as="a"` makes the whole card a single link.
 */
export default function TiltCard({ as = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const enabled = useFinePointerMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 220, damping: 22 });
  const rotateY = useSpring(ry, { stiffness: 220, damping: 22 });
  const Comp = m[as];

  const onPointerMove = (e) => {
    if (!enabled || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 2 * MAX_TILT);
    rx.set((0.5 - py) * 2 * MAX_TILT);
    ref.current.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
    ref.current.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
  };
  const reset = () => { rx.set(0); ry.set(0); };

  return (
    <Comp
      ref={ref}
      className={`work-card group relative ${className}`}
      style={enabled ? { rotateX, rotateY, transformPerspective: 900 } : undefined}
      onPointerMove={enabled ? onPointerMove : undefined}
      onPointerLeave={enabled ? reset : undefined}
      {...rest}
    >
      {enabled && <span aria-hidden="true" className="spotlight pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />}
      {children}
    </Comp>
  );
}
