import { useEffect, useState } from "react";
import { EMAIL, PHONE, LOCATION } from "../constants";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const closeModal = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  // Let Escape dismiss the modal
  useEffect(() => {
    if (status !== "success" && status !== "error") return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [status]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!WEB3FORMS_KEY) {
      setStatus("error");
      setErrorMessage(
        "Email service is not configured. Set VITE_WEB3FORMS_KEY in your environment."
      );
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject || `Portfolio inquiry from ${form.name}`,
          message: form.message,
          // Honeypot: bots fill hidden fields, humans never see this one
          botcheck: "",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setForm(EMPTY_FORM);
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Could not reach the server. Please check your connection.");
    }
  };

  const isSending = status === "sending";

  return (
    <section
      className="py-section-padding px-gutter max-w-container-max mx-auto"
      id="contact"
    >
      <div className="grid md:grid-cols-2 gap-gutter items-start">
        <div className="space-y-stack-lg">
          <div className="space-y-4">
            <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
              Get In <span className="text-electric-lime">Touch</span>
            </h2>
            <p className="text-on-surface-variant font-body-lg text-body-lg max-w-md">
              Have a project in mind or just want to say hi? Feel free to
              reach out — I&apos;m currently open for new opportunities and
              collaborations.
            </p>
          </div>

          <div className="space-y-6 pt-8">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-electric-lime/10 flex items-center justify-center text-electric-lime border border-electric-lime/20 group-hover:bg-electric-lime group-hover:text-onyx-black transition-all">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="text-label-caps font-label-caps text-on-surface-variant">
                  Email
                </p>
                <a
                  className="text-body-lg font-body-lg text-primary hover:text-electric-lime transition-colors"
                  href={`mailto:${EMAIL}`}
                >
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-electric-lime/10 flex items-center justify-center text-electric-lime border border-electric-lime/20 group-hover:bg-electric-lime group-hover:text-onyx-black transition-all">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <p className="text-label-caps font-label-caps text-on-surface-variant">
                  Phone
                </p>
                <a
                  className="text-body-lg font-body-lg text-primary hover:text-electric-lime transition-colors"
                  href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}
                >
                  {PHONE}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-electric-lime/10 flex items-center justify-center text-electric-lime border border-electric-lime/20 group-hover:bg-electric-lime group-hover:text-onyx-black transition-all">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <p className="text-label-caps font-label-caps text-on-surface-variant">
                  Location
                </p>
                <p className="text-body-lg font-body-lg text-primary">
                  {LOCATION}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-graphite-grey border border-border-subtle p-8 rounded-2xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Honeypot — hidden from users, catches automated spam */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  className="block font-label-caps text-label-caps text-on-surface-variant"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full bg-onyx-black border border-border-subtle rounded-lg px-4 py-3 text-primary focus:outline-none focus:ring-1 focus:ring-electric-lime focus:border-electric-lime transition-all placeholder:opacity-30 disabled:opacity-50"
                  disabled={isSending}
                  id="name"
                  name="name"
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  type="text"
                  value={form.name}
                />
              </div>
              <div className="space-y-2">
                <label
                  className="block font-label-caps text-label-caps text-on-surface-variant"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full bg-onyx-black border border-border-subtle rounded-lg px-4 py-3 text-primary focus:outline-none focus:ring-1 focus:ring-electric-lime focus:border-electric-lime transition-all placeholder:opacity-30 disabled:opacity-50"
                  disabled={isSending}
                  id="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  type="email"
                  value={form.email}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                className="block font-label-caps text-label-caps text-on-surface-variant"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                className="w-full bg-onyx-black border border-border-subtle rounded-lg px-4 py-3 text-primary focus:outline-none focus:ring-1 focus:ring-electric-lime focus:border-electric-lime transition-all placeholder:opacity-30 disabled:opacity-50"
                disabled={isSending}
                id="subject"
                name="subject"
                onChange={handleChange}
                placeholder="Project Inquiry"
                type="text"
                value={form.subject}
              />
            </div>

            <div className="space-y-2">
              <label
                className="block font-label-caps text-label-caps text-on-surface-variant"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full bg-onyx-black border border-border-subtle rounded-lg px-4 py-3 text-primary focus:outline-none focus:ring-1 focus:ring-electric-lime focus:border-electric-lime transition-all placeholder:opacity-30 resize-none disabled:opacity-50"
                disabled={isSending}
                id="message"
                name="message"
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows="4"
                value={form.message}
              />
            </div>

            <button
              className="w-full inline-flex items-center justify-center gap-3 font-label-caps text-label-caps bg-electric-lime text-onyx-black px-8 py-4 rounded-full glow-effect transition-all duration-300 active:scale-95 font-bold disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
              disabled={isSending}
              type="submit"
            >
              {isSending && (
                <span className="w-4 h-4 border-2 border-onyx-black/30 border-t-onyx-black rounded-full animate-spin" />
              )}
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {(status === "success" || status === "error") && (
        <div
          aria-labelledby="modal-title"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-onyx-black/80 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
        >
          <div
            className="bg-graphite-grey border border-border-subtle rounded-2xl p-8 max-w-sm w-full text-center space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center border ${
                status === "success"
                  ? "bg-electric-lime/10 text-electric-lime border-electric-lime/20"
                  : "bg-red-500/10 text-red-400 border-red-400/20"
              }`}
            >
              <span className="material-symbols-outlined text-3xl">
                {status === "success" ? "check" : "error"}
              </span>
            </div>

            <div className="space-y-2">
              <h3
                className="text-primary font-bold text-xl"
                id="modal-title"
              >
                {status === "success" ? "Message Sent" : "Message Not Sent"}
              </h3>
              <p className="text-on-surface-variant font-body-lg text-body-lg">
                {status === "success"
                  ? "Thanks for reaching out — I'll get back to you soon."
                  : errorMessage}
              </p>
            </div>

            <button
              autoFocus
              className="w-full inline-flex items-center justify-center font-label-caps text-label-caps bg-electric-lime text-onyx-black px-8 py-3 rounded-full transition-all duration-300 active:scale-95 font-bold"
              onClick={closeModal}
              type="button"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
