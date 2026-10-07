import { Link } from "react-router-dom";
import { IconArrowRight, IconDownload, IconBrandLinkedin, IconBrandGithub, IconSchool } from "@tabler/icons-react";
import Seo from "@/components/Seo";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";
import CtaBand from "@/components/CtaBand";
import { EXPERIENCE, EDUCATION, TECH } from "@/data/about";
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/data/site";

const ext = { target: "_blank", rel: "noopener noreferrer" };

export function Component() {
  return (
    <>
      <Seo page="about" />
      <PageHeader eyebrow="About" title="From the factory floor to full stack">
        <p>I&apos;m John Michael Lagumbay, a full-stack web developer based in Mississauga, Ontario, with 18 years of process and quality work behind me.</p>
      </PageHeader>

      <section className="section" aria-labelledby="story-title">
        <div className="wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal className="mx-auto w-full max-w-md lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-3xl border border-border-subtle bg-graphite-grey">
              <img
                src="/img/profile-720.webp"
                srcSet="/img/profile-480.webp 480w, /img/profile-720.webp 720w, /img/profile-960.webp 960w"
                sizes="(min-width: 1024px) 448px, (min-width: 640px) 448px, calc(100vw - 40px)"
                width="720"
                height="900"
                alt="John Michael Lagumbay sitting on a railing by the beach, wearing a navy jacket and cap"
                decoding="async"
                // eslint-disable-next-line react/no-unknown-property -- React 18 passes the lowercase HTML attribute through
                fetchpriority="high"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal><h2 id="story-title" className="h-section">My story</h2></Reveal>
            <Reveal className="mt-6 space-y-5 text-[17px] leading-relaxed text-on-surface">
              <p>I didn&apos;t start out writing code. For 15 years at SYKES in the Philippines, I worked as a process engineer, finding where things went wrong and fixing them for good. Then I moved to California, first as a quality analyst at DigitalStorm and then as a process engineering supervisor at Tesla, where I coached a team of technicians on safety, quality and targets.</p>
              <p>All those years taught me one thing: people get frustrated when something is harder than it needs to be. Now I fix that on the web. I retrained as a full-stack developer, with a certificate from Uplift Code Camp and a Computer Programming diploma from Sheridan College, and I build websites and web apps.</p>
              <p>Today I build websites and custom web apps for small businesses and founders, working remotely with clients across Canada and beyond. I also build my own products, like NestWillow. I bring the same habits I learned on the production line to every project: a clear plan, checks at every step, and no loose ends.</p>
            </Reveal>
            <Reveal className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/work" className="btn-primary">See my work <IconArrowRight size={18} stroke={2.2} aria-hidden="true" /></Link>
              <a href={RESUME_URL} {...ext} className="btn-ghost">
                <IconDownload size={18} stroke={2} aria-hidden="true" /> Download my resume<span className="sr-only"> (PDF, opens in a new tab)</span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section border-y border-border-subtle bg-graphite-grey/60" aria-labelledby="career-title">
        <div className="wrap max-w-4xl">
          <Reveal><h2 id="career-title" className="h-section">Career journey</h2></Reveal>
          <div className="mt-12"><Timeline items={EXPERIENCE} /></div>
        </div>
      </section>

      <section className="section" aria-labelledby="edu-title">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Reveal><h2 id="edu-title" className="h-section">Education</h2></Reveal>
            <ul className="mt-8 space-y-4">
              {EDUCATION.map((e, i) => (
                <Reveal as="li" key={e} delay={i * 0.06} className="card flex gap-4 p-5">
                  <IconSchool size={24} stroke={1.8} aria-hidden="true" className="mt-0.5 shrink-0 text-electric-lime" />
                  <span className="text-on-surface">{e}</span>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <Reveal><h2 className="h-section">Tools I work with</h2></Reveal>
            <dl className="mt-8 grid gap-5 sm:grid-cols-2">
              {TECH.map((t, i) => (
                <Reveal key={t.group} delay={(i % 2) * 0.06} className="card p-5">
                  <dt className="font-mono text-[13px] font-medium uppercase tracking-[0.12em] text-electric-lime">{t.group}</dt>
                  <dd className="mt-3 flex flex-wrap gap-2">
                    {t.items.map((x) => <span key={x} className="chip">{x}</span>)}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section pt-0 sm:pt-0" aria-labelledby="hiring-title">
        <div className="wrap">
          <Reveal className="card grid gap-6 p-7 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <h2 id="hiring-title" className="h-section">Hiring?</h2>
              <p className="lead mt-4">I&apos;m open to full-stack developer roles where my process and quality background is a plus. My resume has the full details.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
              <a href={RESUME_URL} {...ext} className="btn-primary"><IconDownload size={18} stroke={2} aria-hidden="true" />Download resume<span className="sr-only"> (PDF, opens in a new tab)</span></a>
              <a href={LINKEDIN_URL} {...ext} className="btn-ghost"><IconBrandLinkedin size={18} stroke={2} aria-hidden="true" />LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
              <a href={GITHUB_URL} {...ext} className="btn-ghost"><IconBrandGithub size={18} stroke={2} aria-hidden="true" />GitHub<span className="sr-only"> (opens in a new tab)</span></a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Need a website or web app?" primary={{ to: "/services", label: "See services and prices" }} phone={false} />
    </>
  );
}
