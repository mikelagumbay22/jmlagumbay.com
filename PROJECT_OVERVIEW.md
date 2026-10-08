# Project overview

Multi-page business site for **JM Lagumbay Website Design** (John Michael Lagumbay, Mississauga, ON).

| Route | File | Content |
|---|---|---|
| `/` | `src/pages/Home.jsx` | Kinetic hero, "What you get", 3 featured demo sites, CTA |
| `/services` | `src/pages/Services.jsx` | 3 packages (launch prices until December 31, 2026, with the January 1, 2027 price struck through), Care Plan, yearly fee, full handover, 4 steps, FAQ, CTA |
| `/work` | `src/pages/Work.jsx` | Filterable grid: 5 demo sites (auto-scrolling device frames) + 9 projects |
| `/about` | `src/pages/About.jsx` | Story, portrait, scroll-drawn career timeline, education, tools, recruiter block |
| `/contact` | `src/pages/Contact.jsx` | Email, location, links + Web3Forms form with validation and send states |
| `/404` | `src/pages/NotFound.jsx` | Prerendered `404.html` (noindex), served by Pages for unknown paths |

**Shared pieces:**
- `src/layout/`: the header with its sliding active pill, the mobile overlay menu, the footer, and route focus management.
- `src/components/`: Seo, Reveal, cards, CTA band and the other shared components.

**Contact details** come from `src/data/site.js`: jmlagumbay422@gmail.com. `PHONE` is `null` for now, so no phone number, call/text button or tel link renders anywhere; set it to `{ display, e164 }` (and re-add `telephone` to the JSON-LD in `index.html`) when John has a new business number. No other personal address may be added.

**Hourly rate:** later changes without a Care Plan are $50 an hour, 1-hour minimum (Services: handover box and FAQ).
