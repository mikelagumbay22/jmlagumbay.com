import { useState } from "react";
import JmLogo from "../assets/jmlnewlogo.png";
import { RESUME_URL } from "../constants";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-onyx-black/80 backdrop-blur-md border-b border-border-subtle">
      <nav className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
        <a
          className="flex items-center gap-3 active:scale-95 transition-transform group"
          href="#"
        >
          <img
            alt="JM Lagumbay Logo"
            className="h-10 w-10 object-contain  border border-border-subtle group-hover:border-electric-lime transition-colors bg-onyx-black"
            src={JmLogo}
          />
          <span className="font-headline-md text-headline-md font-bold text-electric-lime tracking-tighter">
            JM LAGUMBAY
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-label-caps text-label-caps">
          {links.map((link) => (
            <li key={link.href}>
              <a
                className="text-on-surface-variant hover:text-electric-lime transition-all duration-300"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          className="hidden md:inline-flex items-center justify-center font-label-caps text-label-caps bg-transparent border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-onyx-black transition-all duration-300 active:scale-95"
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-primary p-2"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="material-symbols-outlined">
            {open ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-onyx-black border-t border-border-subtle px-gutter py-stack-md flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              className="text-on-surface-variant hover:text-electric-lime transition-colors font-label-caps text-label-caps"
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="inline-flex items-center justify-center font-label-caps text-label-caps bg-electric-lime text-onyx-black px-6 py-3 rounded-full font-bold"
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}


