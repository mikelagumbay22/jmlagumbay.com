import { IconPhone, IconMail, IconMapPin, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import Seo from "@/components/Seo";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, LOCATION, REMOTE, PHONE_DISPLAY, PHONE_HREF } from "@/data/site";

const ext = { target: "_blank", rel: "noopener noreferrer" };

function Row({ icon: Icon, label, children }) {
  return (
    <li className="flex gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-electric-lime/30 bg-electric-lime/10 text-electric-lime">
        <Icon size={22} stroke={1.8} aria-hidden="true" />
      </span>
      <div>
        <p className="font-mono text-[12.5px] font-medium uppercase tracking-[0.12em] text-on-surface-variant">{label}</p>
        <div className="mt-1 text-lg text-primary">{children}</div>
      </div>
    </li>
  );
}

export function Component() {
  const linkCls = "inline-flex min-h-[44px] items-center font-semibold text-primary underline decoration-white/30 underline-offset-4 hover:text-electric-lime hover:decoration-electric-lime";
  return (
    <>
      <Seo page="contact" />
      <PageHeader eyebrow="Contact" title="Let's talk about your project">
        <p>Tell me a bit about your business or idea and what you need, a website or a custom web app. I&apos;ll get back to you with the next steps.</p>
      </PageHeader>
      <section className="section" aria-label="Contact details and form">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <ul className="space-y-7">
              <Row icon={IconPhone} label="Call or text"><a href={PHONE_HREF} className={linkCls}>{PHONE_DISPLAY}</a></Row>
              <Row icon={IconMail} label="Email"><a href={`mailto:${EMAIL}`} className={`${linkCls} [overflow-wrap:anywhere]`}>{EMAIL}</a></Row>
              <Row icon={IconMapPin} label="Based in"><span>{LOCATION} · {REMOTE}</span></Row>
              <Row icon={IconBrandLinkedin} label="Online">
                <span className="flex flex-wrap gap-x-5">
                  <a href={LINKEDIN_URL} {...ext} className={linkCls}>LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
                  <a href={GITHUB_URL} {...ext} className={linkCls}><IconBrandGithub size={18} stroke={1.8} aria-hidden="true" className="mr-1.5" />GitHub<span className="sr-only"> (opens in a new tab)</span></a>
                </span>
              </Row>
            </ul>
            <p className="mt-8 rounded-2xl border border-border-subtle bg-graphite-grey p-5 text-on-surface">
              Prefer to talk? Call or text me. It&apos;s the quickest way.
            </p>
          </Reveal>
          <Reveal delay={0.08}><ContactForm /></Reveal>
        </div>
      </section>
    </>
  );
}
