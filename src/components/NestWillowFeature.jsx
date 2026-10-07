import { Link } from "react-router-dom";
import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import DeviceFrame from "./DeviceFrame";
import { NESTWILLOW as N } from "@/data/work";

/** Work: Section 1, the NestWillow feature block (copy.md Page 3). The landing page is one short screen,
 *  so the browser frame shows the whole capture, still (no auto-scroll). */
export default function NestWillowFeature() {
  return (
    <div className="card grid min-w-0 gap-8 p-5 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-12 lg:p-10">
      <div className="flex min-w-0 flex-col gap-5">
        <p className="w-fit rounded-full border border-electric-lime/40 px-3 py-1 font-mono text-[12px] font-medium text-electric-lime">{N.label}</p>
        <div>
          <h2 id="nestwillow-title" className="h-section">{N.title}</h2>
          <p className="mt-2 font-display text-xl font-bold leading-snug text-on-surface">{N.tagline}</p>
        </div>
        <p className="leading-relaxed text-on-surface">{N.intro}</p>
        <dl className="grid gap-4 sm:grid-cols-2">
          {N.features.map((f) => (
            <div key={f.title} className="rounded-xl border border-border-subtle bg-white/[0.03] p-4">
              <dt className="font-display font-bold text-primary">{f.title}</dt>
              <dd className="mt-1 text-[15px] leading-relaxed text-on-surface-variant">{f.text}</dd>
            </div>
          ))}
        </dl>
        <div>
          <p id="nestwillow-stack" className="font-mono text-[12.5px] font-medium uppercase tracking-[0.12em] text-on-surface-variant">Built with</p>
          <ul className="mt-2 flex flex-wrap gap-2" aria-labelledby="nestwillow-stack">
            {N.builtWith.map((t) => <li key={t} className="chip">{t}</li>)}
          </ul>
        </div>
        <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {/* eslint-disable-next-line react/jsx-no-target-blank -- noopener without noreferrer: keep the referrer for John's own app */}
          <a href={N.url} target="_blank" rel="noopener" className="btn-primary">
            Visit NestWillow <IconArrowUpRight size={18} stroke={2.2} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <Link to="/services#web-apps" className="btn-ghost">
            Want an app like this? <IconArrowRight size={18} stroke={2.2} aria-hidden="true" />
          </Link>
        </div>
      </div>
      {/* Phones: the preview comes first (visual order only; the image isn't focusable) */}
      <div className="order-first min-w-0 lg:order-none">
        <DeviceFrame still priority shot={N.shot} url={N.url} alt={N.alt} />
      </div>
    </div>
  );
}
