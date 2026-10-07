import { useRef } from "react";
import { Link } from "react-router-dom";
import { IconArrowRight, IconDeviceMobile, IconMapPin, IconClockDollar, IconPhone } from "@tabler/icons-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import HeroGlow from "@/components/HeroGlow";
import DemoCard from "@/components/DemoCard";
import CtaBand from "@/components/CtaBand";
import { DEMOS, FEATURED_DEMOS } from "@/data/work";
import { PHONE_DISPLAY, PHONE_HREF } from "@/data/site";

const HEADLINE = ["I", "build", "fast,", "modern", "websites", "for", "Mississauga", "small", "businesses."];
const LIME_FROM = 6; // "Mississauga small businesses." in lime

const HIGHLIGHTS = [
  { icon: IconDeviceMobile, title: "A website that works on every phone", text: "Your hours, a tap-to-call button and a Google Map, so customers can reach you in one tap. It looks right on phones, tablets and computers." },
  { icon: IconMapPin, title: "Found on Google, close to home", text: "I write your pages with the words locals search for, like \u201chair salon Mississauga\u201d, and help set up your Google Maps listing." },
  { icon: IconClockDollar, title: "One price, ready in days", text: "Packages from $499, paid once. Your site is ready in 3–14 business days, depending on the package. I write the words for you after a quick 20-minute chat." },
];

export function Component() {
  const heroRef = useRef(null);
  const featured = FEATURED_DEMOS.map((slug) => DEMOS.find((d) => d.slug === slug));
  return (
    <>
      <Seo page="home" />
      <section ref={heroRef} className="relative overflow-hidden border-b border-border-subtle">
        <HeroGlow containerRef={heroRef} />
        <div className="wrap relative flex min-h-[calc(100svh-72px)] flex-col justify-center py-16 sm:py-24">
          <p className="eyebrow mb-6">Websites for Mississauga small businesses</p>
          <h1 tabIndex={-1} className="h-display max-w-5xl" style={{ fontSize: "clamp(2.5rem, 7vw, 5.4rem)" }}>
            {HEADLINE.map((w, i) => (
              <span key={i}>
                <span className="kin-mask">
                  <span className={`kin-word ${i >= LIME_FROM ? "text-electric-lime" : ""}`} style={{ "--i": i }}>{w}</span>
                </span>
                {i < HEADLINE.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>
          <p className="lead mt-7 max-w-2xl">
            Salons, auto shops, bakeries, cleaners: I&apos;ll give you a simple, good-looking site that works on every phone, shows up on Google and gets customers calling. One price, paid once.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/services" className="btn-primary">
              See packages and prices <IconArrowRight size={18} stroke={2.2} aria-hidden="true" />
            </Link>
            <Link to="/work" className="btn-ghost">See my work</Link>
          </div>
          <p className="mt-6 text-on-surface-variant">
            <a href={PHONE_HREF} className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-on-surface hover:text-electric-lime">
              <IconPhone size={18} stroke={2} aria-hidden="true" className="text-electric-lime" />
              Call or text {PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="get-title">
        <div className="wrap">
          <Reveal><h2 id="get-title" className="h-section">What you get</h2></Reveal>
          <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {HIGHLIGHTS.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 0.08} className="card p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-lime text-onyx-black">
                  <Icon size={26} stroke={1.8} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold leading-snug">{title}</h3>
                <p className="mt-3 leading-relaxed text-on-surface-variant">{text}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-8">
            <Link to="/services" className="link inline-flex min-h-[44px] items-center gap-1.5">
              Compare the packages <IconArrowRight size={18} stroke={2.2} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section border-y border-border-subtle bg-graphite-grey/60" aria-labelledby="demos-title">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <h2 id="demos-title" className="h-section">Demo sites for local businesses</h2>
            <p className="lead mt-4">These are demo concepts I built to show what a site could look like for local shops. They&apos;re not real clients. Tap any one to try it on your phone.</p>
          </Reveal>
          <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((d, i) => (
              <Reveal as="li" key={d.slug} delay={i * 0.08}>
                <DemoCard demo={d} />
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-8">
            <Link to="/work" className="link inline-flex min-h-[44px] items-center gap-1.5">
              See all 5 demos <IconArrowRight size={18} stroke={2.2} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="trust-title">
        <div className="wrap grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <h2 id="trust-title" className="h-section">I run your website like a production line</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lead">
              Before I built websites, I spent 18 years in process and quality work at Tesla, SYKES and DigitalStorm. Your project gets the same care: a clear plan, checks at every step, and a site that&apos;s ready when I say it will be.
            </p>
            <Link to="/about" className="link mt-6 inline-flex min-h-[44px] items-center gap-1.5">
              Read my story <IconArrowRight size={18} stroke={2.2} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Ready for a website that brings in customers?"
        text="Tell me about your business. I'll show you sample sites and suggest the right package. No pressure."
      />
    </>
  );
}
