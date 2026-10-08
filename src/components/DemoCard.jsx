import { IconArrowUpRight } from "@tabler/icons-react";
import TiltCard from "./TiltCard";
import DeviceFrame from "./DeviceFrame";
import { DEMO_LABEL } from "@/data/work";

/** Demo-site card: the whole card is ONE link (opens the live demo in a new tab). Details always visible. */
export default function DemoCard({ demo, headingLevel = 3 }) {
  const H = `h${headingLevel}`;
  return (
    <TiltCard
      as="a"
      href={demo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card flex h-full min-w-0 flex-col gap-5 p-4 transition-colors duration-300 hover:border-electric-lime/50 focus-visible:border-electric-lime sm:p-5"
    >
      <DeviceFrame shot={demo.shot} url={demo.url} label={demo.title} alt={`Screenshot of the ${demo.title} demo website home page`} />
      <div className="flex flex-1 flex-col gap-3 px-1">
        <p className="w-fit rounded-full border border-electric-lime/40 px-3 py-1 font-mono text-[12px] font-medium text-electric-lime">{DEMO_LABEL}</p>
        <H className="font-display text-xl font-extrabold leading-tight text-primary">{demo.title}</H>
        <p className="font-mono text-[13px] text-on-surface-variant">{demo.meta}</p>
        <p className="text-[15px] leading-relaxed text-on-surface">{demo.text}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 font-display text-[15px] font-bold text-electric-lime">
          View demo
          <IconArrowUpRight size={18} stroke={2.2} aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          <span className="sr-only">(opens in a new tab)</span>
        </span>
      </div>
    </TiltCard>
  );
}
