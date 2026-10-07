import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, m } from "motion/react";
import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import Seo from "@/components/Seo";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import DemoCard from "@/components/DemoCard";
import PreviewPauseButton from "@/components/PreviewPauseButton";
import ProjectCard from "@/components/ProjectCard";
import CtaBand from "@/components/CtaBand";
import { DEMOS, PROJECTS, FILTERS } from "@/data/work";
import { GITHUB_URL } from "@/data/site";

const EASE = [0.22, 1, 0.36, 1];
const item = {
  layout: true,
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
  transition: { duration: 0.3, ease: EASE },
};

export function Component() {
  const [filter, setFilter] = useState("all");
  const [paused, setPaused] = useState(false);
  const showDemos = filter === "all" || filter === "demo";
  const projects = PROJECTS.filter((p) => filter === "all" || p.category === filter);
  const count = (showDemos ? DEMOS.length : 0) + (filter === "demo" ? 0 : projects.length);

  return (
    <>
      <Seo page="work" />
      <PageHeader eyebrow="Work" title="My work">
        <p>Demo websites for local businesses first, then the web and machine-learning projects I&apos;ve built along the way.</p>
      </PageHeader>

      <div className="wrap pt-10">
        <div role="group" aria-label="Filter work" className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`relative min-h-[44px] rounded-full border px-5 font-display text-[14px] font-bold transition-colors ${
                filter === f.id ? "border-electric-lime text-onyx-black" : "border-border-subtle text-on-surface hover:border-electric-lime hover:text-electric-lime"
              }`}
            >
              {filter === f.id && <m.span layoutId="filter-pill" aria-hidden="true" className="absolute inset-0 rounded-full bg-electric-lime" transition={{ type: "spring", stiffness: 520, damping: 42 }} />}
              <span className="relative">{f.label}</span>
            </button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">{`Showing ${count} ${count === 1 ? "item" : "items"}`}</p>
      </div>

      <AnimatePresence initial={false} mode="popLayout">
        {showDemos && (
          <m.section key="demos" {...item} className="section pb-8 sm:pb-12" aria-labelledby="demo-sites-title" data-motion-paused={paused}>
            <div className="wrap">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <Reveal className="max-w-3xl">
                  <h2 id="demo-sites-title" className="h-section">Demo sites</h2>
                  <p className="lead mt-4">
                    I built these demo concepts to show local owners what their site could look like. The businesses are real Mississauga shops, but <strong className="text-primary">they didn&apos;t hire me</strong> and these aren&apos;t their official websites.
                  </p>
                </Reveal>
                <PreviewPauseButton paused={paused} onToggle={() => setPaused((v) => !v)} />
              </div>
              <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {DEMOS.map((d, i) => (
                  <Reveal as="li" key={d.slug} delay={(i % 3) * 0.08}><DemoCard demo={d} /></Reveal>
                ))}
              </ul>
              <Reveal className="mt-8">
                <p className="text-on-surface">
                  Want one like these for your business?{" "}
                  <Link to="/services" className="link inline-flex min-h-[44px] items-center gap-1.5">See packages <IconArrowRight size={18} stroke={2.2} aria-hidden="true" /></Link>
                </p>
              </Reveal>
            </div>
          </m.section>
        )}

        {filter !== "demo" && (
          <m.section key="projects" {...item} className="section pt-8 sm:pt-12" aria-labelledby="projects-title">
            <div className="wrap">
              <Reveal className="max-w-3xl">
                <h2 id="projects-title" className="h-section">Projects</h2>
                <p className="lead mt-4">Apps, APIs and machine-learning experiments from my training and my own time.</p>
              </Reveal>
              <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence initial={false} mode="popLayout">
                  {projects.map((p) => (
                    <m.li key={p.title} {...item}><ProjectCard project={p} /></m.li>
                  ))}
                </AnimatePresence>
              </ul>
              <p className="mt-8 text-on-surface">
                More on GitHub:{" "}
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="link inline-flex min-h-[44px] items-center gap-1.5">
                  See all my code <IconArrowUpRight size={18} stroke={2.2} aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span>
                </a>
              </p>
            </div>
          </m.section>
        )}
      </AnimatePresence>

      <CtaBand title="Like what you see?" text="Your business could be next. Let's talk about what your website needs." phone={false} />
    </>
  );
}
