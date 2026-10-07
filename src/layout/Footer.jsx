import { Link } from "react-router-dom";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, LOCATION, PHONE_DISPLAY, PHONE_HREF, RESUME_URL, FULL_NAME } from "@/data/site";

const ext = { target: "_blank", rel: "noopener noreferrer" };

export default function Footer() {
  // Year is set at build time and refreshed in the browser (copy.md: no static ©).
  const year = new Date().getFullYear();
  const linkCls = "inline-flex min-h-[44px] items-center text-on-surface-variant transition-colors hover:text-electric-lime";
  return (
    <footer className="border-t border-border-subtle bg-onyx-black">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          <p className="max-w-md text-on-surface">
            <strong className="font-display font-extrabold text-primary">JM Lagumbay Website Design</strong>: simple, good-looking websites for Mississauga small businesses.
          </p>
          <p className="text-on-surface-variant">
            Call or text <a href={PHONE_HREF} className="link">{PHONE_DISPLAY}</a> · <a href={`mailto:${EMAIL}`} className="link break-all">{EMAIL}</a> · {LOCATION}
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-3">
            <li><Link to="/services" className={linkCls}>Services</Link></li>
            <li><Link to="/work" className={linkCls}>Work</Link></li>
            <li><Link to="/about" className={linkCls}>About</Link></li>
            <li><Link to="/contact" className={linkCls}>Contact</Link></li>
            <li><a href={LINKEDIN_URL} {...ext} className={linkCls}>LinkedIn<span className="sr-only"> (opens in a new tab)</span></a></li>
            <li><a href={GITHUB_URL} {...ext} className={linkCls}>GitHub<span className="sr-only"> (opens in a new tab)</span></a></li>
            <li><a href={RESUME_URL} {...ext} className={linkCls}>Resume<span className="sr-only"> (PDF, opens in a new tab)</span></a></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-border-subtle">
        <p className="wrap py-6 text-sm text-on-surface-variant" suppressHydrationWarning>
          © {year} {FULL_NAME}. Prices in Canadian dollars. No HST charged.
        </p>
      </div>
    </footer>
  );
}
