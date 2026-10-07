// Work page data (copy.md Page 3). Demo screenshots: public/img/work/<slug>.webp, captured from the LIVE
// demo sites by ../qa/capture_demos.py (720 px wide, tall strips for the auto-scrolling device frame).
export const DEMO_LABEL = "Demo concept, not a real client";

export const DEMOS = [
  {
    slug: "9-natural-nails",
    title: "9 Natural Nails & Spa",
    meta: "Nail salon and spa · Creditview, Mississauga",
    text: "A 5-page salon site with Home, Services, About, Reviews and Contact pages. It shows a sample services menu, client reviews, hours, a map, tap-to-call and a \u201cBook Now\u201d button.",
    url: "https://mikelagumbay22.github.io/9-natural-nails-demo/",
    shot: { src: "/img/work/9-natural-nails.webp", w: 720, h: 2335 },
  },
  {
    slug: "nannus-pastizzi",
    title: "Nannu's Pastizzi",
    meta: "Maltese bakery · Meadowvale, Mississauga",
    text: "A 5-page bakery site with Home, Menu, About, Reviews and Visit pages. It has a full menu from pastizzi to Maltese sweets, the family story, directions and hours, plus order-ahead and catering info.",
    url: "https://mikelagumbay22.github.io/nannus-pastizzi-demo/",
    shot: { src: "/img/work/nannus-pastizzi.webp", w: 720, h: 2588 },
  },
  {
    slug: "best-auto-repair",
    title: "Best Auto Repair Service",
    meta: "Auto repair shop · Mavis-Erindale, Mississauga",
    text: "A 5-page garage site with Home, Services, About, Reviews and Contact pages. It covers everyday repairs, a DriveON inspection centre section, customer reviews, hours and directions, with tap-to-call throughout.",
    url: "https://mikelagumbay22.github.io/best-auto-repair-demo/",
    shot: { src: "/img/work/best-auto-repair.webp", w: 720, h: 2135 },
  },
  {
    slug: "red-hat-cleaners",
    title: "Red Hat Cleaners",
    meta: "Alterations and dry cleaning · Meadowvale Village, Mississauga",
    text: "A 5-page site with Home, Services, About, Reviews and Contact pages. It has a bridal and South Asian alterations section, tailoring and dry cleaning, space for a before-and-after gallery, hours, a map and tap-to-call.",
    url: "https://mikelagumbay22.github.io/red-hat-cleaners-demo/",
    shot: { src: "/img/work/red-hat-cleaners.webp", w: 720, h: 2188 },
  },
  {
    slug: "escape-studio",
    title: "Escape Studio Hair & Spa",
    meta: "Hair salon and spa · Applewood, Mississauga",
    text: "A 5-page salon site with Home, Services, Team, Reviews and Contact pages. It has colour and colour-correction services, space for a colour gallery, the stylists and their specialties on a Meet the Team page, reviews, and booking by phone.",
    url: "https://mikelagumbay22.github.io/escape-studio-demo/",
    shot: { src: "/img/work/escape-studio.webp", w: 720, h: 2588 },
  },
];

export const FEATURED_DEMOS = ["9-natural-nails", "nannus-pastizzi", "best-auto-repair"];

const WAKE = "Free server: may take up to a minute to wake up.";

// category: web | ml | games. BUDDIE.PH and PARKRIDGE sit at the end (copy.md builder note).
export const PROJECTS = [
  {
    title: "GAMERS.PH",
    category: "web",
    image: "/img/projects/gamers-ph.webp", w: 512, h: 279,
    blurb: "A gaming hub with reviews, news and trailers for console, PC and mobile games.",
    full: "A gaming hub covering console, PC, and mobile titles, with reviews, news, and trailers for casual and hardcore gamers alike.",
    tags: ["React", "Node.js"],
    links: [{ label: "View Live", href: "https://gamersph.netlify.app/" }],
  },
  {
    title: "Battle Tank",
    category: "games",
    image: "/img/projects/battle-tank.webp", w: 512, h: 286,
    blurb: "A retro arcade shooter in C#. Survive the desert across levels that get harder.",
    full: "A retro-inspired arcade shooter built with high-performance logic. Maneuver through desert terrain, destroy enemy shapes, and survive multiple levels of increasing difficulty.",
    tags: ["C#", "Game Dev"],
    links: [
      { label: "Play Now", href: "https://github.com/mikelagumbay22/Battle-Tank/releases/latest" },
      { label: "View Code", href: "https://github.com/mikelagumbay22/Battle-Tank" },
    ],
  },
  {
    title: "Agent Data API",
    category: "web",
    image: "/img/projects/agent-data-api.webp", w: 512, h: 286,
    blurb: "A Spring Boot REST API for managing agent records, with interactive Swagger docs.",
    full: "A Spring Boot REST API for managing agent records. Full CRUD with Spring Data JPA and Hibernate over an H2 database, documented with an interactive OpenAPI/Swagger interface.",
    tags: ["Java", "Spring Boot", "REST API", "Hibernate"],
    links: [{ label: "View Project", href: "https://createapiusingspringboot.onrender.com/" }],
    note: WAKE,
  },
  {
    title: "Agents and Missions",
    category: "web",
    image: "/img/projects/agents-and-missions.webp", w: 512, h: 286,
    blurb: "A full-stack Java web app linking agents and missions, built with Spring Boot and Thymeleaf.",
    full: "A full-stack Java web application built with Spring Boot 4 and Thymeleaf. Agents and missions are modelled as a bidirectional many-to-many relationship through Spring Data JPA and Hibernate, so each agent's page lists their missions and each mission's page lists its assigned agents. Styled with Bootstrap 5 and seeded with sample data at startup.",
    tags: ["Java", "Spring Boot", "Thymeleaf", "JPA/Hibernate", "Gradle"],
    links: [{ label: "View Project", href: "https://agents-missions-springboot.onrender.com" }],
    note: WAKE,
  },
  {
    title: "CNN Image Classification",
    category: "ml",
    image: "/img/projects/cnn-image-classification.webp", w: 512, h: 286,
    blurb: "Two TensorFlow/Keras neural networks that read handwritten digits and classify clothing.",
    full: "Two convolutional neural networks built with TensorFlow/Keras, applying the same architecture to handwritten digit recognition and clothing classification. Custom images are preprocessed with OpenCV and run through the trained models.",
    tags: ["Python", "TensorFlow/Keras", "CNN", "OpenCV", "scikit-learn"],
    links: [{ label: "View Notebook", href: "https://github.com/mikelagumbay22/cnn-image-classification" }],
  },
  {
    title: "News Headline Classifier API",
    category: "ml",
    image: "/img/projects/news-headline-classifier-api.webp", w: 512, h: 286,
    blurb: "A live machine-learning service that sorts a headline into one of 41 news sections.",
    full: "A machine learning model deployed as a live web service. A Naive Bayes classifier trained on 47,590 news headlines predicts which of 41 news sections a headline belongs to.",
    tags: ["Python", "scikit-learn", "NLP", "Flask", "Docker"],
    links: [{ label: "View Live", href: "https://news-classifier-api-eg9u.onrender.com/" }],
    note: WAKE,
  },
  {
    title: "K-Means Image Compression",
    category: "ml",
    image: "/img/projects/kmeans-image-compression.webp", w: 512, h: 286,
    blurb: "An interactive web app that rebuilds any image from a smaller colour palette.",
    full: "Unsupervised learning applied to images: every pixel is clustered as a point in RGB colour space, then rewritten as its cluster centre to rebuild the image from a reduced palette. Interactive web app built with scikit-learn and Flask, deployed with Docker.",
    tags: ["Python", "scikit-learn", "Unsupervised Learning", "NumPy", "Flask", "Docker"],
    links: [{ label: "View Live", href: "https://kmeans-image-compression.onrender.com/" }],
    note: WAKE,
  },
  {
    title: "BUDDIE.PH",
    category: "web",
    image: "/img/projects/buddie-ph.webp", w: 512, h: 279,
    blurb: "A pet care platform for health records, verified vets and booking care in one place.",
    full: "A trusted pet care platform for managing pet health records, connecting with verified veterinarians, and booking care \u2014 all in one place.",
    tags: ["React", "Node.js", "MongoDB"],
    links: [],
    label: "Case study, no longer live",
  },
  {
    title: "PARKRIDGE",
    category: "web",
    image: "/img/projects/parkridge.webp", w: 512, h: 279,
    blurb: "A community tool for announcements, facility requests, issue reports and construction updates.",
    full: "A community management tool keeping residents connected through announcements, facility requests, issue reporting, and construction monitoring.",
    tags: ["React", "Node.js", "MongoDB"],
    links: [],
    label: "Case study, no longer live",
  },
];

export const FILTERS = [
  { id: "all", label: "All" },
  { id: "demo", label: "Demo sites" },
  { id: "web", label: "Web apps" },
  { id: "ml", label: "Machine learning" },
  { id: "games", label: "Games" },
];
