import { useRef } from "react";
import { m, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRevealState } from "@/lib/hooks";

function Dot() {
  const ref = useRef(null);
  const hidden = useRevealState(ref, 0.9);
  return (
    <span ref={ref} aria-hidden="true" className="absolute left-0 top-1.5 flex h-[18px] w-[18px] -translate-x-1/2 items-center justify-center rounded-full border-2 border-electric-lime bg-onyx-black">
      <m.span
        className="h-2 w-2 rounded-full bg-electric-lime"
        initial={false}
        animate={hidden ? { scale: 0 } : { scale: 1 }}
        transition={hidden ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 20 }}
      />
    </span>
  );
}

/**
 * Career timeline. A faint static rail is always visible (no JS needed); the lime line on top
 * "draws" with scroll progress. Under reduced motion the lime line is simply shown in full.
 */
export default function Timeline({ items }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <div ref={ref} className="relative ml-2 sm:ml-3">
      <span aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-[2px] -translate-x-1/2 bg-white/10" />
      <m.span
        aria-hidden="true"
        className="absolute bottom-0 left-0 top-0 w-[2px] origin-top -translate-x-1/2 bg-electric-lime"
        style={reduce ? undefined : { scaleY }}
      />
      <ol className="space-y-12">
        {items.map((job) => (
          <li key={job.company} className="relative pl-8 sm:pl-12">
            <Dot />
            <h3 className="text-2xl font-extrabold">
              {job.company} <span className="font-body text-base font-normal text-on-surface-variant">· {job.place}</span>
            </h3>
            <p className="mt-1 font-mono text-[13.5px] text-electric-lime">{job.role} ({job.dates})</p>
            <ul className="mt-4 space-y-2.5">
              {job.bullets.map((b) => (
                <li key={b} className="relative pl-5 leading-relaxed text-on-surface before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-white/40">{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
