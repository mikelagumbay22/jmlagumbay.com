import { IconArrowUpRight, IconChevronDown } from "@tabler/icons-react";
import TiltCard from "./TiltCard";

/**
 * Project card. Cards with links use a "stretched link": the whole card is the primary link, and the
 * few extra controls (a second link, the full-description disclosure) sit above it. Case studies with
 * no live link are plain, non-interactive cards. Details are always visible (no hover-only content).
 */
export default function ProjectCard({ project }) {
  const [primary, ...secondary] = project.links;
  const titleId = `p-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  const body = (
    <>
      <div className="overflow-hidden rounded-xl border border-white/10 bg-surface-container-low">
        <img
          src={project.image}
          width={project.w}
          height={project.h}
          alt={`${project.title} project preview`}
          loading="lazy"
          decoding="async"
          className="aspect-[16/9] w-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-1">
        {project.label && (
          <p className="w-fit rounded-full border border-white/25 px-3 py-1 font-mono text-[12px] font-medium text-on-surface-variant">{project.label}</p>
        )}
        <h3 id={titleId} className="font-display text-xl font-extrabold leading-tight text-primary">
          {primary ? (
            <a href={primary.href} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0 after:z-[1] after:rounded-2xl after:content-[''] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-[3px] focus-visible:after:outline-offset-2 focus-visible:after:outline-electric-lime">
              {project.title}
              <span className="sr-only">: {primary.label} (opens in a new tab)</span>
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p className="text-[15px] leading-relaxed text-on-surface">{project.blurb}</p>
        <ul className="flex flex-wrap gap-2" aria-label="Built with">
          {project.tags.map((t) => <li key={t} className="chip">{t}</li>)}
        </ul>
        {project.note && <p className="font-mono text-[12.5px] text-on-surface-variant">{project.note}</p>}
        <details className="relative z-[2] rounded-lg text-[14.5px]">
          <summary className="inline-flex min-h-[44px] items-center gap-1 font-semibold text-on-surface hover:text-electric-lime">
            Full description
            <IconChevronDown size={16} stroke={2} aria-hidden="true" className="transition-transform [details[open]_&]:rotate-180" />
          </summary>
          <p className="pb-1 leading-relaxed text-on-surface-variant">{project.full}</p>
        </details>
        {primary && (
          <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
            <span aria-hidden="true" className="inline-flex items-center gap-1.5 font-display text-[15px] font-bold text-electric-lime">
              {primary.label}
              <IconArrowUpRight size={18} stroke={2.2} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
            {secondary.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="relative z-[2] inline-flex min-h-[44px] items-center gap-1.5 font-display text-[15px] font-bold text-on-surface hover:text-electric-lime">
                {l.label}
                <IconArrowUpRight size={18} stroke={2.2} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
  const cls = "card flex h-full flex-col gap-5 p-4 sm:p-5";
  return primary ? (
    <TiltCard className={`${cls} transition-colors duration-300 hover:border-electric-lime/50 focus-within:border-electric-lime/60`}>{body}</TiltCard>
  ) : (
    <div className={`work-card group relative ${cls}`}>{body}</div>
  );
}
