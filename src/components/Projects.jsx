import { IconArrowUpRight } from "@tabler/icons-react";

const projects = [
  {
    title: "BUDDIE.PH",
    description:
      "A trusted pet care platform for managing pet health records, connecting with verified veterinarians, and booking care — all in one place.",
    link: "https://buddie.ph/",
    tags: ["React", "Node.js", "MongoDB"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMkmZq4RaOGMREQEhJ6OaB5UERhuiyascdtQIbfcjxLgEHBH7Ge9AzXXuRtjs5-KDYSXJ0Qt6DUU_PKG53aebfiGl60FAQsoBLqAeuKQsH-zFcN8zZlFlOUZwW2P30sEBcmfjYorSwlJA07hLgxpz9sGvRf1dRV_wQ4VVoUpQ-PefA8T2iuQKC3pyA1zYcg5rTGCV_KhzTHhNkquvoqAD0YHkHJFt_Tyaa2hPTfIOpwvCmVb7HzrJZ",
  },
  {
    title: "PARKRIDGE",
    description:
      "A community management tool keeping residents connected through announcements, facility requests, issue reporting, and construction monitoring.",
    link: "https://parkridgeapp-frontend.onrender.com/",
    tags: ["React", "Node.js", "MongoDB"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCbXO39XxY4pPz2KvuG1qKJSD5KTG711UMTspT3SRCKyAsLhfnYqlmtSvumc2Os2rFE0I7L3Lojyr_xWewTnT-fe18-sm3CHPyXewSr50VZaFMsEfSnoykDuB7ozaBaCgUFsB1t_SnhNMuodS31q7MxRn7sJO4qFBb8hHIufKfAntCOPZmoemPWeyMlZ-5es1j-MrcLTRRKoWvta1MWK7exYPm_hNmHsPJOU4XNnw3aO0NpvLog8p7W",
  },
  {
    title: "GAMERS.PH",
    description:
      "A gaming hub covering console, PC, and mobile titles, with reviews, news, and trailers for casual and hardcore gamers alike.",
    link: "https://gamersph.netlify.app/",
    tags: ["React", "Node.js"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6NGzITM3DDZdiDbl-BZo9jR0_wgZyTfN9kwouf82GXSNTi-JeoNaE85gjairE4XJA5CMftBao68EBUD9bo3ed2Xc_FONRou79oYua-w07wIX6Yj6cqBoSKyqHSI69OwB-7hcHPRwkw-BPU3su-Bq5DbhOwUsScC8SGvQud7ac4_OdDQE6gRM0BzIOLwWjaADNCeeOhx_GTF_2vj96M4VCbCdj0AUti3kBDmf7bmto5QtNKliAzvsk",
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
        {projects.map(({ title, description, link, tags, image }) => (
          <div
            key={title}
            className="project-card relative rounded-xl overflow-hidden bg-graphite-grey border border-border-subtle h-[400px] group cursor-pointer"
          >
            <div className="absolute inset-0 bg-onyx-black z-0">
              <img
                className="w-full h-full object-cover project-image opacity-60 group-hover:opacity-100"
                src={image}
                alt={`${title} project preview`}
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
