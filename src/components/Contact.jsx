import { useState } from "react";
import { EMAIL, PHONE, LOCATION } from "../constants";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      form.subject || `Portfolio inquiry from ${form.name}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

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
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  className="block font-label-caps text-label-caps text-on-surface-variant"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full bg-onyx-black border border-border-subtle rounded-lg px-4 py-3 text-primary focus:outline-none focus:ring-1 focus:ring-electric-lime focus:border-electric-lime transition-all placeholder:opacity-30"
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
                  className="w-full bg-onyx-black border border-border-subtle rounded-lg px-4 py-3 text-primary focus:outline-none focus:ring-1 focus:ring-electric-lime focus:border-electric-lime transition-all placeholder:opacity-30"
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
                className="w-full bg-onyx-black border border-border-subtle rounded-lg px-4 py-3 text-primary focus:outline-none focus:ring-1 focus:ring-electric-lime focus:border-electric-lime transition-all placeholder:opacity-30"
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
                className="w-full bg-onyx-black border border-border-subtle rounded-lg px-4 py-3 text-primary focus:outline-none focus:ring-1 focus:ring-electric-lime focus:border-electric-lime transition-all placeholder:opacity-30 resize-none"
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
              className="w-full inline-flex items-center justify-center font-label-caps text-label-caps bg-electric-lime text-onyx-black px-8 py-4 rounded-full glow-effect transition-all duration-300 active:scale-95 font-bold"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
