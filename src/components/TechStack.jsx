const techGroups = [
  {
    name: "Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "Java",
      "Python",
      "C#",
      "SQL",
      "HTML5",
      "CSS3",
    ],
  },
  {
    name: "Frontend",
    items: ["React", "Tailwind CSS", "Bootstrap", "Thymeleaf"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express", "Spring Boot", "Flask", "REST APIs"],
  },
  {
    name: "Data & ML",
    items: ["scikit-learn", "TensorFlow/Keras", "pandas", "NumPy"],
  },
  {
    name: "Databases",
    items: ["MongoDB", "PostgreSQL", "H2", "Entity Framework"],
  },
  {
    name: "Tools",
    items: [
      "Git/GitHub",
      "Docker",
      "Render",
      "Maven/Gradle",
      "IntelliJ IDEA",
      "Visual Studio",
    ],
  },
];

export default function TechStack() {
  return (
    <section className="py-section-padding px-gutter bg-graphite-grey border-y border-border-subtle">
      <div className="max-w-container-max mx-auto">
        <h2 className="font-label-caps text-label-caps text-on-surface-variant mb-12 tracking-widest uppercase text-center">
          Core Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techGroups.map((group) => (
            <div
              key={group.name}
              className="bg-surface-container-low border border-border-subtle rounded-lg p-6"
            >
              <h3 className="text-electric-lime font-label-caps text-label-caps mb-4">
                {group.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full text-label-code"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


