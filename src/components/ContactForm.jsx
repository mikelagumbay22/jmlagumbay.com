import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IconSend, IconCircleCheck, IconAlertTriangle } from "@tabler/icons-react";
import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from "@/data/site";

// The Web3Forms access key comes ONLY from the build environment (VITE_WEB3FORMS_KEY).
// Locally: .env.local (git-ignored). Production: GitHub repository secret, passed in by the deploy workflow.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const NEEDS = [
  { value: "starter", label: "A new website: Starter" },
  { value: "business", label: "A new website: Business" },
  { value: "premium", label: "A new website: Premium" },
  { value: "webapp", label: "A custom web app" },
  { value: "existing", label: "Help with an existing website" },
  { value: "care", label: "Care Plan only" },
  { value: "unsure", label: "Not sure yet, please recommend one" },
];
const PRESELECT = new Set(["starter", "business", "premium", "webapp"]); // ?need= values (anything else is ignored)
const EMPTY = { name: "", business: "", phone: "", email: "", need: "", message: "" };

function validate(f) {
  const e = {};
  if (!f.name.trim()) e.name = "Please enter your name.";
  const phone = f.phone.trim(), email = f.email.trim();
  if (!phone && !email) e.contact = "Please add a phone number or an email so I can reply.";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) e.email = "Please check your email address (for example, you@example.com).";
  if (phone) {
    // North American numbers need all 10 digits (optionally with a leading 1); international numbers
    // (clients outside Canada) may have up to 15 digits (E.164), or 8+ when written with a leading "+".
    const d = phone.replace(/\D/g, "");
    const ok = /^\+/.test(phone) ? d.length >= 8 && d.length <= 15 : d.length >= 10 && d.length <= 15;
    if (!ok || /[^\d\s()+.-]/.test(phone)) e.phone = "Please enter a valid phone number, including the area code.";
  }
  if (!f.need) e.need = "Please choose what you need. \u201cNot sure yet\u201d is fine.";
  return e;
}

const inputCls = (bad) =>
  `mt-2 block w-full rounded-xl border bg-onyx-black px-4 py-3 text-[16px] text-primary placeholder:text-[#8d917c] transition-colors focus:border-electric-lime focus:outline-none focus:ring-2 focus:ring-electric-lime/60 ${bad ? "border-[#ff8a80]" : "border-white/20"}`;

function Field({ id, label, optional, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="font-semibold text-on-surface">
        {label} {optional && <span className="font-normal text-on-surface-variant">(optional)</span>}
      </label>
      {children}
      {hint && <p id={`${id}-hint`} className="mt-1.5 text-sm text-on-surface-variant">{hint}</p>}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm font-semibold text-[#ff8a80]">{error}</p>}
    </div>
  );
}

export default function ContactForm() {
  const [params] = useSearchParams();
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error | offline
  const formRef = useRef(null);
  const statusRef = useRef(null);
  const refocusName = useRef(false);

  // Preselect "What you need" from ?need= after hydration (the prerendered page has no query string).
  useEffect(() => {
    const need = params.get("need");
    if (need && PRESELECT.has(need)) setForm((f) => (f.need ? f : { ...f, need }));
  }, [params]);

  useEffect(() => {
    if (status === "success" || status === "error" || status === "offline") statusRef.current?.focus();
    // "Try again" / "Send another message" unmount themselves, so move focus to the first field of the form.
    if (status === "idle" && refocusName.current) {
      refocusName.current = false;
      document.getElementById("name")?.focus();
    }
  }, [status]);

  const backToForm = () => { refocusName.current = true; setStatus("idle"); };

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const firstId = errs.name ? "name" : errs.contact || errs.phone ? "phone" : errs.email ? "email" : "need";
      document.getElementById(firstId)?.focus();
      return;
    }
    if (typeof navigator !== "undefined" && navigator.onLine === false) { setStatus("offline"); return; }
    if (!WEB3FORMS_KEY) {
      console.error("[contact] VITE_WEB3FORMS_KEY is not set at build time, so the form cannot send.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const botcheck = formRef.current?.querySelector('input[name="botcheck"]')?.checked || false;
      const needLabel = NEEDS.find((n) => n.value === form.need)?.label || form.need;
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Website enquiry from ${form.name.trim()}${form.business.trim() ? ` (${form.business.trim()})` : ""}`,
          from_name: "jmlagumbay.com contact form",
          name: form.name.trim(),
          business: form.business.trim(),
          phone: form.phone.trim(),
          ...(form.email.trim() ? { email: form.email.trim() } : {}),
          need: needLabel,
          message: form.message.trim(),
          botcheck,
        }),
      });
      const result = await res.json().catch(() => ({}));
      if (res.ok && result.success) { setStatus("success"); setForm(EMPTY); }
      else { console.error("[contact] Web3Forms error", res.status, result); setStatus("error"); }
    } catch (err) {
      console.error("[contact] network error", err);
      setStatus(navigator.onLine === false ? "offline" : "error");
    }
  };

  if (status === "success") {
    return (
      <div className="card p-7 sm:p-9" role="status">
        <IconCircleCheck size={44} stroke={1.8} aria-hidden="true" className="text-electric-lime" />
        <h2 ref={statusRef} tabIndex={-1} className="mt-4 text-2xl font-extrabold">Thanks, your message is on its way!</h2>
        <p className="mt-3 text-on-surface">I&apos;ll get back to you soon. If it&apos;s urgent, call or text me at <a href={PHONE_HREF} className="link">{PHONE_DISPLAY}</a>.</p>
        <button type="button" className="btn-primary mt-7" onClick={backToForm}>Send another message</button>
      </div>
    );
  }
  if (status === "error" || status === "offline") {
    return (
      <div className="card p-7 sm:p-9" role="alert">
        <IconAlertTriangle size={44} stroke={1.8} aria-hidden="true" className="text-[#ff8a80]" />
        <h2 ref={statusRef} tabIndex={-1} className="mt-4 text-2xl font-extrabold">Sorry, your message didn&apos;t send.</h2>
        <p className="mt-3 text-on-surface">
          {status === "offline" ? (
            <>Looks like you&apos;re offline. Check your connection and try again.</>
          ) : (
            <>Please try again in a moment, or call or text me at <a href={PHONE_HREF} className="link">{PHONE_DISPLAY}</a> or email <a href={`mailto:${EMAIL}`} className="link [overflow-wrap:anywhere]">{EMAIL}</a>.</>
          )}
        </p>
        <button type="button" className="btn-primary mt-7" onClick={backToForm}>Try again</button>
      </div>
    );
  }

  const sending = status === "sending";
  const errCount = Object.keys(errors).length;
  const desc = (id, extra) => [errors[id] && `${id}-error`, extra].filter(Boolean).join(" ") || undefined;
  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} className="card space-y-6 p-7 sm:p-9" aria-labelledby="form-title">
      <h2 id="form-title" className="text-2xl font-extrabold">Send me a message</h2>
      {/* Honeypot: hidden from people and assistive tech, bots tick it */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Your name" error={errors.name}>
          <input id="name" name="name" type="text" autoComplete="name" placeholder="e.g. Maria Santos" required aria-required="true"
            aria-invalid={!!errors.name} aria-describedby={desc("name")} value={form.name} onChange={set("name")} disabled={sending} className={inputCls(errors.name)} />
        </Field>
        <Field id="business" label="Business or project name" optional>
          <input id="business" name="business" type="text" autoComplete="organization" placeholder="e.g. Maria's Bakery"
            value={form.business} onChange={set("business")} disabled={sending} className={inputCls(false)} />
        </Field>
      </div>
      <fieldset className="space-y-3">
        <legend className="sr-only">How can I reach you? Phone or email</legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field id="phone" label="Phone" error={errors.phone}>
            <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(905) 555-0123"
              aria-invalid={!!(errors.phone || errors.contact)} aria-describedby={desc("phone", errors.contact ? "contact-error contact-hint" : "contact-hint")}
              value={form.phone} onChange={set("phone")} disabled={sending} className={inputCls(errors.phone || errors.contact)} />
          </Field>
          <Field id="email" label="Email" error={errors.email}>
            <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com"
              aria-invalid={!!(errors.email || errors.contact)} aria-describedby={desc("email", errors.contact ? "contact-error contact-hint" : "contact-hint")}
              value={form.email} onChange={set("email")} disabled={sending} className={inputCls(errors.email || errors.contact)} />
          </Field>
        </div>
        <p id="contact-hint" className="text-sm text-on-surface-variant">I just need one way to reach you.</p>
        {errors.contact && <p id="contact-error" className="text-sm font-semibold text-[#ff8a80]">{errors.contact}</p>}
      </fieldset>
      <Field id="need" label="What you need" error={errors.need}>
        <select id="need" name="need" required aria-required="true" aria-invalid={!!errors.need} aria-describedby={desc("need")}
          value={form.need} onChange={set("need")} disabled={sending} className={`${inputCls(errors.need)} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23CCFF00%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[right_1rem_center] bg-no-repeat pr-12`}>
          <option value="" disabled>Choose one</option>
          {NEEDS.map((n) => <option key={n.value} value={n.value}>{n.label}</option>)}
        </select>
      </Field>
      <Field id="message" label="Message" optional>
        <textarea id="message" name="message" rows={5} placeholder="Tell me about your business or idea, and what you'd like your website or app to do."
          value={form.message} onChange={set("message")} disabled={sending} className={`${inputCls(false)} resize-y`} />
      </Field>
      {errCount > 0 && (
        <p role="alert" className="rounded-xl border border-[#ff8a80]/50 bg-[#ff8a80]/10 px-4 py-3 font-semibold text-[#ffb4ab]">Please fix the highlighted fields.</p>
      )}
      <div className="space-y-4">
        <button type="submit" className="btn-primary w-full sm:w-auto" disabled={sending} aria-disabled={sending}>
          {sending ? (
            <><span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-onyx-black/30 border-t-onyx-black" />Sending…</>
          ) : (
            <>Send message <IconSend size={18} stroke={2} aria-hidden="true" /></>
          )}
        </button>
        <p className="text-sm text-on-surface-variant">I&apos;ll only use your details to reply to you.</p>
      </div>
    </form>
  );
}
