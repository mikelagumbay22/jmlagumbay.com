import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IconArrowRight, IconDeviceMobile, IconAppWindow, IconWorld, IconPhone, IconMail } from "@tabler/icons-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import HeroGlow from "@/components/HeroGlow";
import DemoCard from "@/components/DemoCard";
import NestWillowCard from "@/components/NestWillowCard";
import PreviewPauseButton from "@/components/PreviewPauseButton";
import CtaBand from "@/components/CtaBand";
import { DEMOS, FEATURED_DEMOS } from "@/data/work";
import { EMAIL, PHONE, PHONE_DISPLAY, PHONE_HREF } from "@/data/site";

const HEADLINE = ["I", "build", "fast,", "modern", "websites", "and", "web", "apps", "for", "small", "businesses", "and", "founders."];
const LIME_FROM = 9; // "small businesses and founders." in lime

const HIGHLIGHTS = [
  { icon: IconDeviceMobile, title: "Websites that bring in customers", text: "A site that works on every phone, with tap-to-call, your hours and a map, and that shows up on Google. Packages from $499 (launch price), ready in 3–14 business days." },
  { icon: IconAppWindow, title: "Custom web apps", text: "Dashboards, client portals, booking or management tools, and SaaS MVPs for founders. Built with React, Node, Java/Spring and Python, with a fixed quote before I start." },
  { icon: IconWorld, title: "Clear prices, wherever you are", text: "Website packages are one price, paid once. Apps get a fixed quote. I work remotely with clients across Canada and beyond, so where you\u2019re based doesn\u2019t matter." },
];

export function Component() {
  const heroRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const featured = FEATURED_DEMOS.map((slug) => DEMOS.find((d) => d.slug === slug));
  return (
    <>
      <Seo page="home" />
      <section ref={heroRef} className="relative overflow-hidden border-b border-border-subtle">
        <HeroGlow containerRef={heroRef} />
        <div className="wrap relative flex min-h-[calc(100svh-72px)] flex-col justify-center py-16 sm:py-24">
          <p className="eyebrow mb-6">Websites and web apps for small businesses and founders</p>
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
            Need a site your customers can find, or an app that runs part of your business? I build both, explain everything in plain words, and work remotely with clients across Canada and beyond.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/services" className="btn-primary">
              See services and prices <IconArrowRight size={18} stroke={2.2} aria-hidden="true" />
            </Link>
            <Link to="/work" className="btn-ghost">See my work</Link>
          </div>
          <p className="mt-6 text-on-surface-variant">
            {PHONE ? (
              <a href={PHONE_HREF} className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-on-surface hover:text-electric-lime">
                <IconPhone size={18} stroke={2} aria-hidden="true" className="text-electric-lime" />
                Call or text {PHONE_DISPLAY}
              </a>
            ) : (
              <a href={`mailto:${EMAIL}`} className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-on-surface hover:text-electric-lime">
                <IconMail size={18} stroke={2} aria-hidden="true" className="shrink-0 text-electric-lime" />
                <span className="min-w-0 [overflow-wrap:anywhere]">Or email {EMAIL}</span>
              </a>
            )}
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
          <Reveal className="mt-8 flex flex-col gap-x-8 sm:flex-row sm:flex-wrap">
            <Link to="/services" className="link inline-flex min-h-[44px] items-center gap-1.5">
              Compare website packages <IconArrowRight size={18} stroke={2.2} aria-hidden="true" />
            </Link>
            <Link to="/services#web-apps" className="link inline-flex min-h-[44px] items-center gap-1.5">
              About custom web apps <IconArrowRight size={18} stroke={2.2} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section border-y border-border-subtle bg-graphite-grey/60" aria-labelledby="featured-title">
        <div className="wrap">
          <Reveal><h2 id="featured-title" className="h-section">Featured work</h2></Reveal>
          <Reveal className="mt-10"><NestWillowCard /></Reveal>
          <div className="mt-16" data-motion-paused={paused}>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <Reveal className="max-w-3xl">
                <h3 id="demos-title" className="font-display text-2xl font-extrabold leading-tight text-primary sm:text-3xl">Demo sites for local businesses</h3>
                <p className="lead mt-4">Demo concepts I built to show what a site could look like for a local shop. They&apos;re not real clients. Tap any one to try it on your phone.</p>
              </Reveal>
              <PreviewPauseButton paused={paused} onToggle={() => setPaused((v) => !v)} />
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" aria-labelledby="demos-title">
              {featured.map((d, i) => (
                <Reveal as="li" key={d.slug} delay={i * 0.08}>
                  <DemoCard demo={d} headingLevel={4} />
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal className="mt-8">
            <Link to="/work" className="link inline-flex min-h-[44px] items-center gap-1.5">
              See all my work <IconArrowRight size={18} stroke={2.2} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Ready to get your website or app built?"
        text="Tell me about your business or your idea. I'll show you examples and suggest the right package, or send a fixed quote for an app. No pressure."
      />
    </>
  );
}
