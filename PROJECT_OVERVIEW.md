# Project overview

Multi-page portfolio for **John Michael Lagumbay** (full-stack web developer, Mississauga, ON). All business offers live on Northpage (https://www.northpage.ca); this site only links to it from the footer.

| Route | File | Content |
|---|---|---|
| `/` | `src/pages/Home.jsx` | Kinetic hero, "What I do", NestWillow + 3 featured demo sites, contact CTA |
| `/work` | `src/pages/Work.jsx` | Filterable: NestWillow, 5 demo sites (auto-scrolling device frames) + 9 projects |
| `/about` | `src/pages/About.jsx` | Story, portrait, scroll-drawn career timeline, education, tools, recruiter block |
| `/contact` | `src/pages/Contact.jsx` | Email, location, LinkedIn/GitHub, resume (no form) |
| `/404` | `src/pages/NotFound.jsx` | Prerendered `404.html` (noindex), served by Pages for unknown paths |

**Shared pieces:**
- `src/layout/`: the header with its sliding active pill, the mobile overlay menu, the footer, and route focus management.
- `src/components/`: Seo, Reveal, cards, CTA band and the other shared components.

**Contact details** come from `src/data/site.js`: jmlagumbay422@gmail.com. `PHONE` is `null` for now, so no phone number, call/text button or tel link renders anywhere; keep it that way. No other personal address may be added.

