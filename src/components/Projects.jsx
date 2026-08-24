import { useState } from "react";
import PropTypes from "prop-types";
import { IconArrowUpRight, IconCode, IconPhotoOff } from "@tabler/icons-react";

const projects = [
  {
    title: "GAMERS.PH",
    description:
      "A gaming hub covering console, PC, and mobile titles, with reviews, news, and trailers for casual and hardcore gamers alike.",
    tags: ["React", "Node.js"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6NGzITM3DDZdiDbl-BZo9jR0_wgZyTfN9kwouf82GXSNTi-JeoNaE85gjairE4XJA5CMftBao68EBUD9bo3ed2Xc_FONRou79oYua-w07wIX6Yj6cqBoSKyqHSI69OwB-7hcHPRwkw-BPU3su-Bq5DbhOwUsScC8SGvQud7ac4_OdDQE6gRM0BzIOLwWjaADNCeeOhx_GTF_2vj96M4VCbCdj0AUti3kBDmf7bmto5QtNKliAzvsk",
    links: [{ label: "View Live", href: "https://gamersph.netlify.app/" }],
  },
  {
    title: "Battle Tank",
    description:
      "A retro-inspired arcade shooter built with high-performance logic. Maneuver through desert terrain, destroy enemy shapes, and survive multiple levels of increasing difficulty.",
    tags: ["C++", "Game Dev"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAlFW8eGfjQu52CawmyaQbbKC-GlZPru2BdLncAlntdhHYKcHhjCKrh5HsgThaOI6RoXO6MecwZlb_LR86ZAILbtw7_RXYlsV9F20qakZiuXs8DRzETUCq64b4XEdFIXlpgp-jNwvMBI_7nwYiOextJKS5visOh8OAuzdjS49uHYmYlo7Us_0mGbzaSq4Mt8LtlnHoEmP0wq_OfU4C7IbtTmSvk2EhCE7BfAiiPSgTWbc6gjPWGUrf0",
    links: [
      {
        label: "Play Now",
        href: "https://github.com/mikelagumbay22/Battle-Tank/releases/latest",
      },
      {
        label: "View Code",
        href: "https://github.com/mikelagumbay22/Battle-Tank",
        icon: IconCode,
      },
    ],
  },
  {
    title: "Agent Data API",
    description:
      "A Spring Boot REST API for managing agent records. Full CRUD with Spring Data JPA and Hibernate over an H2 database, documented with an interactive OpenAPI/Swagger interface.",
    tags: ["Java", "Spring Boot", "REST API", "Hibernate"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLMqv-AHGQUu4n6-iLj4JcDCGkk0AADDEkOGYW8zQEbdECwvEg7tS33foReUaAaeraq6yUTxxRfy3FebluZhGsL4kmcx_OB647Jkipf1shFg3OD8rvdUzrOzO4tzeqCRFVeDdQRpICXCNuS5FrcuUNMZG_rTFARtqwmd-3ikRSuaYBBka3-Glv_inEOtpGZz4fiV5TYigMV2DqjUC2AJgnWAs8TL_Q2FC_wnR1GPHsbr69RhDD7dS3",
    links: [
      {
        label: "View Project",
        href: "https://createapiusingspringboot.onrender.com/",
      },
    ],
  },
  {
    title: "Agents and Missions",
    description:
      "A full-stack Java web application built with Spring Boot 4 and Thymeleaf. Agents and missions are modelled as a bidirectional many-to-many relationship through Spring Data JPA and Hibernate, so each agent's page lists their missions and each mission's page lists its assigned agents. Styled with Bootstrap 5 and seeded with sample data at startup.",
    tags: [
      "Java",
      "Spring Boot",
      "Thymeleaf",
      "JPA/Hibernate",
      "Gradle",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-ZNVCF3HpsNktDdAeemfOHs6F2i2NXX9JGOFv7X9L8cRhKxuclki-lR21tZe2bhFBcBrYt4pz6saAwrxUH4BUkInrTVaV0bg4ojQLELTJpTAUJP3_nOrMzKe62VFcVzcWGci6Ea56djZEKBXkBaAgNkjN85OZcvJhc6Y2ieY_TeX6VyTT3YhJN0L8a3izs1wpXirxssYd-uKcZyz3CH5s40VbaMO1mN4U35SjhjklLlswOCbPqlPy",
    links: [
      {
        label: "View Project",
        href: "https://agents-missions-springboot.onrender.com",
      },
    ],
  },
  {
    title: "BUDDIE.PH",
    description:
      "A trusted pet care platform for managing pet health records, connecting with verified veterinarians, and booking care — all in one place.",
    tags: ["React", "Node.js", "MongoDB"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMkmZq4RaOGMREQEhJ6OaB5UERhuiyascdtQIbfcjxLgEHBH7Ge9AzXXuRtjs5-KDYSXJ0Qt6DUU_PKG53aebfiGl60FAQsoBLqAeuKQsH-zFcN8zZlFlOUZwW2P30sEBcmfjYorSwlJA07hLgxpz9sGvRf1dRV_wQ4VVoUpQ-PefA8T2iuQKC3pyA1zYcg5rTGCV_KhzTHhNkquvoqAD0YHkHJFt_Tyaa2hPTfIOpwvCmVb7HzrJZ",
    links: [],
  },
  {
    title: "PARKRIDGE",
    description:
      "A community management tool keeping residents connected through announcements, facility requests, issue reporting, and construction monitoring.",
    tags: ["React", "Node.js", "MongoDB"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCbXO39XxY4pPz2KvuG1qKJSD5KTG711UMTspT3SRCKyAsLhfnYqlmtSvumc2Os2rFE0I7L3Lojyr_xWewTnT-fe18-sm3CHPyXewSr50VZaFMsEfSnoykDuB7ozaBaCgUFsB1t_SnhNMuodS31q7MxRn7sJO4qFBb8hHIufKfAntCOPZmoemPWeyMlZ-5es1j-MrcLTRRKoWvta1MWK7exYPm_hNmHsPJOU4XNnw3aO0NpvLog8p7W",
    links: [],
  },
  {
    title: "CNN Image Classification",
    description:
      "Two convolutional neural networks built with TensorFlow/Keras, applying the same architecture to handwritten digit recognition and clothing classification. Custom images are preprocessed with OpenCV and run through the trained models.",
    tags: ["Python", "TensorFlow/Keras", "CNN", "OpenCV", "scikit-learn"],
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1UyQybPxXEPSG8YTs5Phpe565pZ4TJaq0EG58MiATYebvR0AnSrK9R5IV12SOWCylz3I9Gao_NvpX_OfRM1CgZcbfoYHOIYlC53cWsd28czDXLnnowOY2nty9-hwmRI5T9LFYKaoeE1KfhdXtyEqawt-ev4zr6C6qnHYQ16rPaVC2zcUMuNnRscrqCbsd61CMUEE5jHTB-ts8AA6PkXW03JT0XuPTp8meL0kAohMao_K7rVNjroB9JIFQ",
    links: [
      {
        label: "View Notebook",
        href: "https://github.com/mikelagumbay22/cnn-image-classification",
      },
    ],
  },
  {
    title: "News Headline Classifier API",
    description:
      "A machine learning model deployed as a live web service. A Naive Bayes classifier trained on 47,590 news headlines predicts which of 41 news sections a headline belongs to.",
    tags: ["Python", "scikit-learn", "NLP", "Flask", "Docker"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAw_YxsnBYMPwy17d-WU_5GEzNtBOSv6dlM556fbiyL0xxl5SBhvHyCetzR-xFR1lql-FWkXIHfR62fe_Yex1s-7QSsIsRB4DaRw5AptIonrUsUE1VFNJ1qtSpZH67kxXSh-HLG5L2ecKtISrR8TOL_q180ekLHeQKL4uBLqb9RkgixyMwYtpqFhi6tC1880O1mdNuzA2OriqoitP9QUnaxjNdNv7_SPt4KrFT2rfMEAr3fKv9Opnhy",
    links: [
      {
        label: "View Live",
        href: "https://news-classifier-api-eg9u.onrender.com/",
      },
    ],
  },
  {
    title: "K-Means Image Compression",
    description:
      "Unsupervised learning applied to images: every pixel is clustered as a point in RGB colour space, then rewritten as its cluster centre to rebuild the image from a reduced palette. Interactive web app built with scikit-learn and Flask, deployed with Docker.",
    tags: ["Python", "scikit-learn", "Unsupervised Learning", "NumPy", "Flask", "Docker"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDCLMswisSrmh8HKIR-Kb7DbuqhriV_fL7SAh6MMP65I7osZDwq9D5brMk9Dk0E37RKlO_DyZ-jvIbfmAKMe7tg_DZ49TIek2u02MJUDqeXV2xXXKwGuldrDM-tEZdyXz6Z-MKRuJKUtLKK2LSp1LkMRD1AFfoN4kMeq791DjmbQC9fcO8jvZ5kThGH6DsUC2LlHpOcAs4xjpZBxr6-2vJ1kI5P9-5PpOvTx3QJt0bVU7wd19ynb5-U",
    links: [
      {
        label: "View Live",
        href: "https://kmeans-image-compression.onrender.com/",
      },
    ],
  },
];

function ProjectImage({ image, title }) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-onyx-black">
        <IconPhotoOff size={64} stroke={1} className="opacity-30" color="#CCFF00" />
      </div>
    );
  }

  return (
    <img
      className="w-full h-full object-cover project-image opacity-60 group-hover:opacity-100"
      src={image}
      alt={`${title} project preview`}
      onError={() => setBroken(true)}
    />
  );
}

ProjectImage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default function Projects() {
  return (
    <section
      className="py-section-padding px-gutter max-w-container-max mx-auto"
      id="projects"
    >
      <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-16 border-l-4 border-electric-lime pl-4">
        Selected Works
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ title, description, tags, image, links }) => (
          <div
            key={title}
            className="project-card relative rounded-xl overflow-hidden bg-graphite-grey border border-border-subtle h-[400px] group cursor-pointer"
          >
            <div className="absolute inset-0 bg-onyx-black z-0">
              <ProjectImage image={image} title={title} />
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
              {links.length > 0 && (
                <div className="flex items-center justify-between mt-4">
                  {links.map(({ label, href, icon: Icon = IconArrowUpRight }, index) => (
                    <a
                      key={label}
                      className={`inline-flex items-center font-label-caps text-label-caps transition-colors ${
                        index === 0
                          ? "text-electric-lime hover:text-primary"
                          : "text-on-surface-variant hover:text-electric-lime"
                      }`}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {label} <Icon size={16} className="ml-1" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


