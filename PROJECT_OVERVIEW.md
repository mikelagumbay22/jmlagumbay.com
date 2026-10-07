# Project overview

Multi-page business site for **JM Lagumbay Website Design** (John Michael Lagumbay, Mississauga, ON).

| Route | File | Content |
|---|---|---|
| `/` | `src/pages/Home.jsx` | Kinetic hero, "What you get", 3 featured demo sites, trust line, CTA |
| `/services` | `src/pages/Services.jsx` | 3 packages (launch prices with the regular price struck through), Care Plan, yearly fee, full handover, 4 steps, FAQ, CTA |
| `/work` | `src/pages/Work.jsx` | Filterable grid: 5 demo sites (auto-scrolling device frames) + 9 projects |
| `/about` | `src/pages/About.jsx` | Story, portrait, scroll-drawn career timeline, education, tools, recruiter block |
| `/contact` | `src/pages/Contact.jsx` | Phone, email, location, links + Web3Forms form with validation and send states |
| `/404` | `src/pages/NotFound.jsx` | Prerendered `404.html` (noindex), served by Pages for unknown paths |

**Shared pieces:**
- `src/layout/`: the header with its sliding active pill, the mobile overlay menu, the footer, and route focus management.
- `src/components/`: Seo, Reveal, cards, CTA band and the other shared components.

**Contact details** come from `src/data/site.js`: phone (647) 633-7623 and jmlagumbay422@gmail.com. No other personal address may be added.

**Open items for John:** the `[RATE]` hourly rate (Services: handover and FAQ).
