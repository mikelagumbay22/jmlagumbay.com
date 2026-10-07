import { Link } from "react-router-dom";

export default function Logo({ onClick }) {
  return (
    <Link to="/" onClick={onClick} className="group flex min-h-[44px] items-center gap-3 rounded-lg">
      <img
        src="/img/logo-80.webp"
        alt="JM Lagumbay, home"
        width="40"
        height="40"
        decoding="async"
        className="h-10 w-10 rounded-md border border-border-subtle bg-onyx-black transition-colors group-hover:border-electric-lime"
      />
      <span aria-hidden="true" className="font-display text-lg font-extrabold tracking-tight text-electric-lime sm:text-xl">
        JM LAGUMBAY
      </span>
    </Link>
  );
}
