import { Link } from "react-router-dom";
import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import { NESTWILLOW as N } from "@/data/work";

/** Home: the larger featured card for NestWillow (copy.md Page 1, Card 1), shown before the 3 demo cards. */
export default function NestWillowCard() {
  return (
    <article
      aria-labelledby="nestwillow-card-title"
      className="card grid min-w-0 gap-6 p-4 sm:p-6 lg:grid-cols-[minmax(0,512px)_minmax(0,1fr)] lg:items-center lg:gap-10 lg:p-8"
    >
      <div className="overflow-hidden rounded-xl border border-white/10 bg-white">
        <img
          src={N.image.src}
          width={N.image.w}
          height={N.image.h}
          alt={N.alt}
          loading="lazy"
          decoding="async"
          className="aspect-[16/9] w-full object-cover object-top"
        />
      </div>
      <div className="flex min-w-0 flex-col gap-4 px-1">
        <p className="w-fit rounded-full border border-electric-lime/40 px-3 py-1 font-mono text-[12px] font-medium text-electric-lime">{N.label}</p>
        <h3 id="nestwillow-card-title" className="font-display text-2xl font-extrabold leading-tight text-primary sm:text-3xl">{N.title}</h3>
        <p className="font-display text-lg font-bold leading-snug text-on-surface">{N.tagline}</p>
        <p className="text-[15px] leading-relaxed text-on-surface">{N.homeBlurb}</p>
        <ul className="flex flex-wrap gap-2" aria-label="Built with">
          {N.homeTags.map((t) => <li key={t} className="chip">{t}</li>)}
        </ul>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          {/* eslint-disable-next-line react/jsx-no-target-blank -- noopener without noreferrer: keep the referrer for John's own app */}
          <a href={N.url} target="_blank" rel="noopener" className="btn-primary w-full sm:w-auto">
            Visit NestWillow <IconArrowUpRight size={18} stroke={2.2} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <Link to="/work#nestwillow" className="link inline-flex min-h-[44px] items-center gap-1.5">
            Read more<span className="sr-only"> about NestWillow</span> <IconArrowRight size={18} stroke={2.2} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
