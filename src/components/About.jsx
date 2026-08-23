import ProfilePic from "../assets/ProfilePic.png";

function About() {
  return (
    <section className="py-section-padding px-gutter max-w-container-max mx-auto" id="about">
      <div className="grid md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-5 relative">
          <div className="aspect-square rounded-2xl overflow-hidden bg-graphite-grey border border-border-subtle relative p-4">
            <div className="absolute inset-0 bg-gradient-to-tr from-electric-lime/10 to-transparent pointer-events-none" />
            <img
              alt="JM Lagumbay Profile Portrait"
              className="w-full h-full object-cover rounded-xl filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              src={ProfilePic}
            />
          </div>
        </div>

        <div className="md:col-span-7 space-y-stack-lg pl-0 md:pl-gutter">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary border-l-4 border-electric-lime pl-4">
            Driven by Build.
          </h2>

          <div className="space-y-stack-md text-on-surface-variant font-body-lg text-body-lg">
            <p>
              Transitioning from a solid foundation in customer experience at
              leading tech companies, I&apos;ve pivoted my career to where my
              true passion lies: building robust, scalable web applications.
            </p>
            <p>
              My journey isn&apos;t traditional, and that&apos;s my strength.
              It instilled in me a profound understanding of user friction,
              which I now translate into seamless digital experiences. I
              don&apos;t just write code; I engineer solutions focused on
              user empathy and technical excellence.
            </p>
          </div>

          <div className="pt-stack-sm flex flex-wrap gap-4">
            <div className="bg-graphite-grey border border-border-subtle p-4 rounded-lg">
              <span className="block font-label-code text-label-code text-electric-lime mb-1">
                Status
              </span>
              <span className="font-body-md text-body-md text-primary">
                Open to Opportunities
              </span>
            </div>
            <div className="bg-graphite-grey border border-border-subtle p-4 rounded-lg">
              <span className="block font-label-code text-label-code text-electric-lime mb-1">
                Focus
              </span>
              <span className="font-body-md text-body-md text-primary">
                <ul className="padding-left-10">Full Stack Development</ul>
                <ul className="padding-left-4">Business Development</ul>
                <ul className="padding-left-4">Artificial Intelligence</ul>
              </span>
            </div>
            <div className="bg-graphite-grey border border-border-subtle p-4 rounded-lg">
              <span className="block font-label-code text-label-code text-electric-lime mb-1">
                Education
              </span>
              <ul className="font-body-md text-body-md text-primary">
                <li>Diploma, Computer Programming — Sheridan College (2026)</li>
                <li>Full Stack Web Development — Uplift Code Camp (2024)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
