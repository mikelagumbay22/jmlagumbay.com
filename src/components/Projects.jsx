import {
  IconDog,
  IconBackhoe,
  IconDeviceGamepad,
  IconArrowUpRight,
} from "@tabler/icons-react";

const projects = [
  {
    title: "BUDDIE.PH",
    description:
      "A trusted pet care platform for managing pet health records, connecting with verified veterinarians, and booking care — all in one place.",
    link: "https://buddie.ph/",
    tags: ["React", "Node.js", "MongoDB"],
    Icon: IconDog,
  },
  {
    title: "PARKRIDGE",
    description:
      "A community management tool keeping residents connected through announcements, facility requests, issue reporting, and construction monitoring.",
    link: "https://parkridgeapp-frontend.onrender.com/",
    tags: ["React", "Node.js", "MongoDB"],
    Icon: IconBackhoe,
  },
  {
    title: "GAMERS.PH",
    description:
      "A gaming hub covering console, PC, and mobile titles, with reviews, news, and trailers for casual and hardcore gamers alike.",
    link: "https://gamersph.netlify.app/",
    tags: ["React", "Node.js"],
    Icon: IconDeviceGamepad,
  },
];

function Projects() {
  return (
    <section
      className="py-section-padding px-gutter max-w-container-max mx-auto"
      id="projects"
    >
      <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-16 border-l-4 border-electric-lime pl-4">
        Selected Works
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ title, description, link, tags, Icon }) => (
          <div
            key={title}
            className="project-card relative rounded-xl overflow-hidden bg-graphite-grey border border-border-subtle h-[400px] group cursor-pointer"
          >
            <div className="absolute inset-0 bg-onyx-black z-0 flex items-center justify-center">
              <Icon
                className="project-image opacity-60 group-hover:opacity-100 transition-opacity"
                size={120}
                stroke={1}
                color="#CCFF00"
              />
            </div>
            <div className="absolute top-0 left-0 w-full p-6 z-10 bg-gradient-to-b from-onyx-black/90 to-transparent">
              <h3 className="font-headline-md text-headline-md text-primary">
                {title}
              </h3>
            </div>
            <div className="absolute bottom-0 w-full p-6 bg-onyx-black/80 backdrop-blur-md project-overlay z-20 border-t border-border-subtle flex flex-col justify-between h-1/2">
              <p className="text-on-surface-variant font-body-md text-body-md line-clamp-3">
                {description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {tags.map((tag, index) => (
                  <span
                    key={tag}
                    className={`font-label-code text-label-code px-2 py-1 rounded ${
                      index === 0
                        ? "bg-electric-lime/10 text-electric-lime"
                        : "bg-surface-variant text-on-surface"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                className="mt-4 inline-flex items-center text-electric-lime font-label-caps text-label-caps hover:text-primary transition-colors"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live <IconArrowUpRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
