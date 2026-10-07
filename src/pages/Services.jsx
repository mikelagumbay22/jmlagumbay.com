import { Link } from "react-router-dom";
import { IconCheck, IconArrowRight, IconChevronDown, IconAppWindow } from "@tabler/icons-react";
import Seo from "@/components/Seo";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { PACKAGES, CARE, STEPS, HANDOVER, WEB_APPS } from "@/data/services";

// Reads exactly: "Launch pricing ends December 31, 2026. From January 1, 2027: $699 / $1,199 / $1,799 (handover $150)."
// The spans only control where it wraps (each sentence, and the price list, stays in one piece).
function LaunchEndLine() {
  return (
    <p className="mt-5 inline-block max-w-full rounded-2xl border border-electric-lime/40 px-4 py-1.5 font-mono text-[13px] font-medium text-electric-lime lg:rounded-full">
      <span className="block sm:inline sm:whitespace-nowrap">Launch pricing ends <span className="whitespace-nowrap">December 31, 2026.</span></span>{" "}
      <span className="sm:whitespace-nowrap">
        From January 1, 2027:{" "}<span className="whitespace-nowrap">$699 / $1,199 / $1,799</span>{" "}<span className="whitespace-nowrap">(handover $150).</span>
      </span>
    </p>
  );
}

/** "Launch price $499" with the January 1, 2027 price in a real <s>, read as "Price from January 1, 2027: $699". */
function Regular({ value, className = "" }) {
  return (
    <s className={`text-on-surface-variant decoration-[1.5px] ${className}`}>
      <span className="sr-only">Price from January 1, 2027: </span>{value}
    </s>
  );
}

const FAQ = [
  { q: "Do I own my website?", a: <>Yes. The web address is in your name, and the site is yours once it&apos;s paid in full.</> },
  { q: "What if I already have a web address?", a: <>No problem. We can use the one you already have.</> },
  { q: "How long does a website take?", a: <>3–14 business days, depending on the package: Starter 3–5, Business 7–10, Premium 10–14. The clock starts when I have your deposit, photos and info.</> },
  { q: "What do you need from me?", a: <>For a website: a quick 20-minute chat, your photos, your business info (hours, services, address) and the 50% deposit. I write the words for you.</> },
  { q: "Do you work with clients outside your area?", a: <>Yes. I work remotely with small businesses and founders across Canada and beyond, mostly by phone and email. The one exception is the Premium photo visit, which is in person and only in Mississauga, Ontario, where I&apos;m based.</> },
  { q: "What if I need changes later?", a: <>With a Care Plan, small changes are included: 1 a month on Starter, up to 3 a month on Business, up to 2 hours a month on Premium. Without one, later changes are $50&nbsp;an hour (1-hour minimum).</> },
  { q: "What happens after the first year?", a: <>Your first year of web address is included. After that, either the Care Plan keeps everything running and renewed, or you pay one yearly fee ($49 / $99 / $149 per year for Starter / Business / Premium). If you&apos;d rather run it yourself, choose the full handover.</> },
  { q: "How much does a custom web app cost?", a: <>Every app is different. Tell me what you need and I&apos;ll send a fixed quote.</> },
  { q: "What do you build web apps with?", a: <>React, Node, Java/Spring and Python. You can see the tools I use on my <Link to="/about" className="link">About page</Link>.</> },
  { q: "How do I pay? Is there HST?", a: <>For website packages: 50% to start and 50% when your site is ready, before it goes live, by Interac e-Transfer. Prices are in Canadian dollars, and no HST is charged.</> },
  { q: "Can I see an example?", a: <>Yes! Try NestWillow, my own live web app, or my demo websites. <Link to="/work" className="link">See my work</Link></> },
];

function PackageCard({ p }) {
  return (
    <article
      aria-labelledby={`pkg-${p.id}`}
      className={`relative flex h-full flex-col rounded-3xl border p-7 sm:p-8 ${p.recommended ? "border-2 border-electric-lime bg-graphite-grey shadow-[0_0_60px_-20px_rgba(204,255,0,0.35)]" : "border-border-subtle bg-graphite-grey"}`}
    >
      {p.recommended && (
        <p className="absolute -top-3.5 left-7 rounded-full bg-electric-lime px-3 py-1 font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-onyx-black">Recommended</p>
      )}
      <h3 id={`pkg-${p.id}`} className="text-2xl font-extrabold">{p.name}</h3>
      <p className="mt-4 font-mono text-[12.5px] font-medium uppercase tracking-[0.12em] text-electric-lime">Launch price</p>
      <p className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="font-display text-5xl font-extrabold tracking-tight text-primary">{p.price}</span>
        <Regular value={p.regular} className="font-display text-2xl font-bold" />
        <span className="basis-full text-on-surface-variant">one-time</span>
      </p>
      <p className="mt-3 italic text-on-surface-variant">{p.tagline}</p>
      {p.intro && <p className="mt-6 font-semibold text-primary">{p.intro}</p>}
      <ul className={`${p.intro ? "mt-3" : "mt-6"} space-y-3`}>
        {p.items.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-on-surface">
            <IconCheck size={20} stroke={2.4} aria-hidden="true" className="mt-0.5 shrink-0 text-electric-lime" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-7 font-display font-bold text-primary">{p.turnaround}</p>
      <Link to={`/contact?need=${p.id}`} className={`${p.recommended ? "btn-primary" : "btn-ghost"} mt-5 w-full`}>
        {p.cta} <IconArrowRight size={18} stroke={2.2} aria-hidden="true" />
      </Link>
    </article>
  );
}

export function Component() {
  return (
    <>
      <Seo page="services" />
      <PageHeader eyebrow="Services" title="Websites and web apps for small businesses and founders">
        <p>Website packages at one price, paid once, ready in days. Custom web apps by fixed quote. I work remotely with clients across Canada and beyond.</p>
      </PageHeader>

      <section className="section" aria-labelledby="packages-title">
        <div className="wrap">
          <Reveal className="max-w-4xl">
            <h2 id="packages-title" className="h-section">Pick your website package</h2>
            <p className="lead mt-4">All prices are one-time, in Canadian dollars. No HST charged.</p>
            <LaunchEndLine />
          </Reveal>
          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {PACKAGES.map((p, i) => (
              <Reveal as="li" key={p.id} delay={i * 0.08}><PackageCard p={p} /></Reveal>
            ))}
          </ul>
          <Reveal className="mt-8 space-y-3 text-on-surface-variant">
            <p>*Counted from when I have your deposit, photos and info.</p>
            <p><strong className="text-on-surface">Easy payment:</strong> 50% to start, 50% when your site is ready, before it goes live. Pay by Interac e-Transfer.</p>
          </Reveal>
        </div>
      </section>

      <section id="web-apps" className="section border-t border-border-subtle" aria-labelledby="web-apps-title">
        <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-start lg:gap-14">
          <div className="min-w-0">
            <Reveal className="max-w-3xl">
              <h2 id="web-apps-title" className="h-section">Custom web apps</h2>
              <p className="lead mt-4">Need more than a website? I build web apps that run part of your business, or the first version of your product.</p>
            </Reveal>
            <Reveal as="ul" className="mt-8 grid gap-4 sm:grid-cols-2">
              {WEB_APPS.map((w) => (
                <li key={w.title} className="card p-5">
                  <h3 className="text-lg font-extrabold leading-snug">{w.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-on-surface-variant">{w.text}</p>
                </li>
              ))}
            </Reveal>
            <Reveal className="mt-8 space-y-3 text-on-surface">
              <p><strong className="text-primary">Built with:</strong> React, Node, Java/Spring and Python, the same tools I use for my own projects.</p>
              <p>
                <strong className="text-primary">See one live:</strong>{" "}
                <Link to="/work#nestwillow" className="link">NestWillow, my own property-management app</Link>
              </p>
            </Reveal>
          </div>
          <Reveal className="min-w-0 rounded-3xl border-2 border-electric-lime/60 bg-graphite-grey p-7 sm:p-8 lg:sticky lg:top-28" delay={0.08}>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-lime text-onyx-black">
              <IconAppWindow size={26} stroke={1.8} aria-hidden="true" />
            </span>
            <p className="mt-5 font-mono text-[12.5px] font-medium uppercase tracking-[0.12em] text-electric-lime">Price</p>
            <p className="mt-1 font-display text-4xl font-extrabold tracking-tight text-primary">Custom quote</p>
            <p className="mt-3 leading-relaxed text-on-surface-variant">Every app is different. Tell me what you need and I&apos;ll send a fixed quote.</p>
            <Link to="/contact?need=webapp" className="btn-primary mt-7 w-full">
              Tell me about your app <IconArrowRight size={18} stroke={2.2} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section border-y border-border-subtle bg-graphite-grey/60" aria-labelledby="care-title">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-3">For website packages</p>
            <h2 id="care-title" className="h-section">Care Plan: optional, month to month, cancel anytime</h2>
            <p className="lead mt-4">I keep your site running, safe and up to date, renew your web address, and make small changes for you (new hours, prices, photos).</p>
          </Reveal>

          {/* Desktop/tablet: comparison table */}
          <Reveal className="mt-10 hidden overflow-hidden rounded-2xl border border-border-subtle md:block">
            <table className="w-full table-fixed text-left">
              <caption className="sr-only">Care Plan prices and what each plan includes</caption>
              <thead className="bg-white/[0.04]">
                <tr>
                  <td className="px-6 py-4" />
                  {CARE.plans.map((c) => <th key={c.name} scope="col" className="px-6 py-4 font-display text-lg font-extrabold text-primary">{c.name}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                <tr>
                  <th scope="row" className="px-6 py-4 font-semibold text-on-surface">Per month</th>
                  {CARE.plans.map((c) => <td key={c.name} className="px-6 py-4 font-display text-2xl font-extrabold text-electric-lime">{c.price}</td>)}
                </tr>
                <tr>
                  <th scope="row" className="px-6 py-4 font-semibold text-on-surface">Small changes</th>
                  {CARE.plans.map((c) => <td key={c.name} className="px-6 py-4 text-on-surface">{c.changes}</td>)}
                </tr>
                <tr>
                  <th scope="row" className="px-6 py-4 font-semibold text-on-surface">Google listing</th>
                  {CARE.plans.map((c) => (
                    <td key={c.name} className="px-6 py-4 text-on-surface">
                      {c.googleSr ? <><span aria-hidden="true">{c.google}</span><span className="sr-only">{c.googleSr}</span></> : c.google}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </Reveal>

          {/* Phones: one card per plan */}
          <ul className="mt-10 grid gap-4 md:hidden">
            {CARE.plans.map((c) => (
              <li key={c.name} className="card p-6">
                <h3 className="text-xl font-extrabold">{c.name}</h3>
                <p className="mt-1"><span className="font-display text-3xl font-extrabold text-electric-lime">{c.price}</span> <span className="text-on-surface-variant">a month</span></p>
                <dl className="mt-4 space-y-2 text-[15px]">
                  <div><dt className="font-semibold text-on-surface">Small changes</dt><dd className="text-on-surface-variant">{c.changes}</dd></div>
                  <div><dt className="font-semibold text-on-surface">Google listing</dt><dd className="text-on-surface-variant">{c.googleSr ? <><span aria-hidden="true">{c.google}</span><span className="sr-only">{c.googleSr}</span></> : c.google}</dd></div>
                </dl>
              </li>
            ))}
          </ul>

          <Reveal className="mt-6 text-on-surface">
            <p>Pay for a year up front and get 2 months free ($290 / $590 / $990).</p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal className="card p-7">
              <h3 className="text-xl font-extrabold">No Care Plan?</h3>
              <p className="mt-3 leading-relaxed text-on-surface-variant">
                Just one yearly fee to keep your site online and your web address renewed: <strong className="text-primary">$49 / $99 / $149 per year</strong> (Starter / Business / Premium).
              </p>
            </Reveal>
            <Reveal className="card p-7" delay={0.08}>
              <h3 className="text-xl font-extrabold">Want to run it yourself? Full handover</h3>
              <p className="mt-3 leading-relaxed text-on-surface-variant">
                <span className="mb-2 block font-mono text-[12.5px] font-medium uppercase tracking-[0.12em] text-electric-lime">Launch price</span>
                <strong className="text-primary">{HANDOVER.price} one-time</strong> <Regular value={HANDOVER.regular} />. Everything goes in your own accounts, with all logins, files and a short walkthrough. There&apos;s no yearly fee from me; you renew your web address yourself (about $15–$25/year). Later changes are $50&nbsp;an hour (1-hour minimum).
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="steps-title">
        <div className="wrap">
          <Reveal><h2 id="steps-title" className="h-section">How it works, in 4 steps</h2></Reveal>
          <ol className="relative mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.08} className="card relative p-7">
                <span aria-hidden="true" className="font-mono text-sm font-medium text-electric-lime">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-extrabold leading-snug"><span className="sr-only">Step {i + 1}: </span>{s.title}</h3>
                <p className="mt-2 leading-relaxed text-on-surface-variant">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section border-t border-border-subtle" aria-labelledby="faq-title">
        <div className="wrap max-w-4xl">
          <Reveal><h2 id="faq-title" className="h-section">Questions clients ask</h2></Reveal>
          <div className="mt-10 divide-y divide-border-subtle rounded-2xl border border-border-subtle">
            {FAQ.map(({ q, a }) => (
              <details key={q} className="group px-6">
                <summary className="flex min-h-[64px] items-center justify-between gap-4 py-4 font-display text-lg font-bold text-primary hover:text-electric-lime">
                  {q}
                  <IconChevronDown size={22} stroke={2} aria-hidden="true" className="shrink-0 text-electric-lime transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="pb-6 leading-relaxed text-on-surface-variant">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Not sure what you need?" text="Tell me what your business does or what you want to build, and I'll recommend a package or send a fixed quote." />
    </>
  );
}
