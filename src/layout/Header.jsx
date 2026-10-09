import { NavLink } from "react-router-dom";
import { m } from "motion/react";
import Logo from "@/components/Logo";
import MobileMenu from "./MobileMenu";
import { NAV, RESUME_URL } from "@/data/site";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-subtle bg-onyx-black/85 backdrop-blur-md">
      <div className="wrap flex h-[72px] items-center justify-between gap-4">
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className="relative inline-flex min-h-[44px] items-center rounded-full px-4 font-display text-[14px] font-bold"
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <m.span
                          layoutId="nav-pill"
                          aria-hidden="true"
                          className="absolute inset-x-0 inset-y-1 rounded-full bg-electric-lime"
                          transition={{ type: "spring", stiffness: 520, damping: 42 }}
                        />
                      )}
                      <span className={`relative transition-colors ${isActive ? "text-onyx-black" : "text-on-surface-variant hover:text-electric-lime"}`}>
                        {item.label}
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm hidden lg:inline-flex">
          Resume<span className="sr-only"> (PDF, opens in a new tab)</span>
        </a>
        <MobileMenu />
      </div>
    </header>
  );
}
