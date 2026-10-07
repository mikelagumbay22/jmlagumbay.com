import { useRef } from "react";
import { m } from "motion/react";
import { useRevealState } from "@/lib/hooks";

const EASE = [0.22, 1, 0.36, 1];

/** Scroll reveal (fade + 20px lift, once). Content is visible in the prerendered HTML and without JS. */
export default function Reveal({ as = "div", delay = 0, y = 20, children, ...rest }) {
  const ref = useRef(null);
  const hidden = useRevealState(ref);
  const Comp = m[as];
  return (
    <Comp
      ref={ref}
      initial={false}
      animate={hidden ? { opacity: 0, y } : { opacity: 1, y: 0 }}
      transition={hidden ? { duration: 0 } : { duration: 0.5, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
