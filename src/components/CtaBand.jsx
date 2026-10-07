import { Link } from "react-router-dom";
import { IconPhone, IconArrowRight } from "@tabler/icons-react";
import Reveal from "./Reveal";
import { PHONE_DISPLAY, PHONE_HREF } from "@/data/site";

export default function CtaBand({ title, text, primary = { to: "/contact", label: "Tell me about your business" }, phone = true }) {
  return (
    <section className="section" aria-labelledby="cta-title">
      <div className="wrap">
        <Reveal className="relative overflow-hidden rounded-3xl border border-electric-lime/30 bg-graphite-grey px-6 py-12 text-center sm:px-12 sm:py-16">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -bottom-40 mx-auto h-72 w-[80%] rounded-full bg-[radial-gradient(closest-side,rgba(204,255,0,0.16),transparent)]" />
          <h2 id="cta-title" className="h-section relative mx-auto max-w-3xl">{title}</h2>
          {text && <p className="lead relative mx-auto mt-4 max-w-2xl">{text}</p>}
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to={primary.to} className="btn-primary w-full sm:w-auto">
              {primary.label}
              <IconArrowRight size={18} stroke={2.2} aria-hidden="true" />
            </Link>
            {phone && (
              <a href={PHONE_HREF} className="btn-ghost w-full sm:w-auto">
                <IconPhone size={18} stroke={2} aria-hidden="true" />
                Call or text {PHONE_DISPLAY}
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
