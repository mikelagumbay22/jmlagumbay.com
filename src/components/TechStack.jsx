const stack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "HTML5",
  "Git/GitHub",
  "Tailwind CSS",
];

function TechStack() {
  return (
    <section className="py-section-padding px-gutter bg-graphite-grey border-y border-border-subtle">
      <div className="max-w-container-max mx-auto text-center">
        <h2 className="font-label-caps text-label-caps text-on-surface-variant mb-12 tracking-widest uppercase">
          Core Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {stack.map((tech) => (
            <div
              key={tech}
              className="px-6 py-3 border border-border-subtle rounded-full bg-onyx-black/50 backdrop-blur-md hover:border-electric-lime hover:text-electric-lime transition-colors flex items-center gap-2 text-primary font-label-code text-label-code"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
