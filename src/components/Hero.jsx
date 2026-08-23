import { RESUME_URL } from "../constants";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-gutter max-w-container-max mx-auto relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-lime rounded-full blur-[150px]" />
      </div>
      <div className="relative z-10 text-center space-y-stack-lg max-w-3xl">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
          JM <span className="text-electric-lime">LAGUMBAY</span>
        </h1>
        <p className="font-headline-md text-headline-md text-on-surface-variant">
          Full Stack Web Developer
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-stack-md pt-stack-md">
          <a
            className="w-full sm:w-auto inline-flex items-center justify-center font-label-caps text-label-caps bg-electric-lime text-onyx-black px-8 py-4 rounded-full glow-effect transition-all duration-300 active:scale-95 font-bold"
            href="#experience"
          >
            View Experience
          </a>
          <a
            className="w-full sm:w-auto inline-flex items-center justify-center font-label-caps text-label-caps bg-transparent border border-border-subtle text-primary px-8 py-4 rounded-full hover:border-primary hover:bg-glass-overlay transition-all duration-300 active:scale-95"
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
