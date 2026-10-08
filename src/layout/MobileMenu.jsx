import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AnimatePresence, m } from "motion/react";
import { IconMenu2, IconX, IconPhone, IconMail } from "@tabler/icons-react";
import Logo from "@/components/Logo";
import { NAV, EMAIL, PHONE, PHONE_DISPLAY, PHONE_HREF } from "@/data/site";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** Full-screen mobile menu: focus trap, Esc to close, focus returns to the Menu button, 44px+ targets. */
export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const panelRef = useRef(null);
  const wasOpen = useRef(false);
  const { pathname } = useLocation();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const close = useCallback(() => setOpen(false), []);

  // Close on navigation and when the viewport grows to the desktop nav.
  useEffect(() => close(), [pathname, close]);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && close();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [close]);

  // Scroll lock + initial focus + focus restore.
  useEffect(() => {
    const root = document.documentElement;
    if (open) {
      wasOpen.current = true;
      root.style.overflow = "hidden";
      requestAnimationFrame(() => panelRef.current?.querySelector("[data-autofocus]")?.focus());
    } else {
      root.style.overflow = "";
      if (wasOpen.current) {
        wasOpen.current = false;
        buttonRef.current?.focus();
      }
    }
    return () => { root.style.overflow = ""; };
  }, [open]);

  const onKeyDown = (e) => {
    if (e.key === "Escape") { e.preventDefault(); close(); return; }
    if (e.key !== "Tab" || !panelRef.current) return;
    const items = [...panelRef.current.querySelectorAll(FOCUSABLE)];
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="btn-ghost btn-sm gap-2 px-4 lg:hidden"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
      >
        <IconMenu2 size={20} stroke={2} aria-hidden="true" />
        Menu
      </button>

      {/* Portalled to <body>: the header's backdrop-filter would otherwise trap this fixed overlay inside the 72px bar. */}
      {mounted && createPortal(
      <AnimatePresence>
        {open && (
          <m.div
            key="mobile-menu"
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            onKeyDown={onKeyDown}
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-onyx-black lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="wrap flex h-[72px] shrink-0 items-center justify-between border-b border-border-subtle">
              <Logo onClick={close} />
              <button type="button" data-autofocus className="btn-ghost btn-sm gap-2 px-4" aria-label="Close menu" onClick={close}>
                <IconX size={20} stroke={2} aria-hidden="true" />
                Close
              </button>
            </div>
            <nav aria-label="Mobile" className="wrap flex flex-1 flex-col justify-center py-10">
              <m.ul
                className="space-y-1"
                initial="hidden"
                animate="shown"
                variants={{ shown: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
              >
                {NAV.map((item) => (
                  <m.li key={item.to} variants={{ hidden: { opacity: 0, y: 18 }, shown: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } } }}>
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      onClick={close}
                      className={({ isActive }) =>
                        `flex min-h-[60px] items-center gap-4 rounded-xl px-3 font-display text-[2rem] font-extrabold tracking-tight transition-colors ${
                          isActive ? "text-electric-lime" : "text-primary hover:text-electric-lime"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${isActive ? "bg-electric-lime" : "bg-white/20"}`} />
                          {item.label}
                        </>
                      )}
                    </NavLink>
                  </m.li>
                ))}
              </m.ul>
              <div className="mt-10 flex flex-col gap-3">
                <Link to="/contact" onClick={close} className="btn-primary">Start your project</Link>
                {PHONE ? (
                  <a href={PHONE_HREF} className="btn-ghost">
                    <IconPhone size={18} stroke={2} aria-hidden="true" />
                    Call or text {PHONE_DISPLAY}
                  </a>
                ) : (
                  <a href={`mailto:${EMAIL}`} className="btn-ghost">
                    <IconMail size={18} stroke={2} aria-hidden="true" />
                    Email me
                  </a>
                )}
              </div>
            </nav>
          </m.div>
        )}
      </AnimatePresence>,
      document.body
      )}
    </>
  );
}
