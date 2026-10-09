import { IconPhone, IconMail, IconMapPin, IconBrandLinkedin, IconBrandGithub, IconDownload } from "@tabler/icons-react";
import Seo from "@/components/Seo";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, LOCATION, PHONE, PHONE_DISPLAY, PHONE_HREF, RESUME_URL } from "@/data/site";

const ext = { target: "_blank", rel: "noopener noreferrer" };

function Row({ icon: Icon, label, children }) {
  return (
    <li className="flex gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-electric-lime/30 bg-electric-lime/10 text-electric-lime">
        <Icon size={22} stroke={1.8} aria-hidden="true" />
      </span>
      <div className="min-w-0">
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
      <PageHeader eyebrow="Contact" title="Get in touch">
        <p>Want to talk about a developer role, ask about one of my projects, or just say hello? Email me and I&apos;ll get back to you.</p>
      </PageHeader>
      <section className="section" aria-label="Contact details">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <ul className="space-y-7">
              {PHONE && <Row icon={IconPhone} label="Call or text"><a href={PHONE_HREF} className={linkCls}>{PHONE_DISPLAY}</a></Row>}
              <Row icon={IconMail} label="Email"><a href={`mailto:${EMAIL}`} className={`${linkCls} [overflow-wrap:anywhere]`}>{EMAIL}</a></Row>
              <Row icon={IconMapPin} label="Based in"><span>{LOCATION}</span></Row>
              <Row icon={IconBrandLinkedin} label="Online">
                <span className="flex flex-wrap gap-x-5">
                  <a href={LINKEDIN_URL} {...ext} className={linkCls}>LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
                  <a href={GITHUB_URL} {...ext} className={linkCls}><IconBrandGithub size={18} stroke={1.8} aria-hidden="true" className="mr-1.5" />GitHub<span className="sr-only"> (opens in a new tab)</span></a>
                </span>
              </Row>
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="card p-7 sm:p-9">
            <h2 className="text-2xl font-extrabold">Say hello</h2>
            <p className="mt-3 leading-relaxed text-on-surface">The quickest way to reach me is email. My resume has my full experience, education and skills.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={`mailto:${EMAIL}`} className="btn-primary"><IconMail size={18} stroke={2} aria-hidden="true" />Email me</a>
              <a href={RESUME_URL} {...ext} className="btn-ghost"><IconDownload size={18} stroke={2} aria-hidden="true" />Download resume<span className="sr-only"> (PDF, opens in a new tab)</span></a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
