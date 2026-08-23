# jmlagumbay.com — Project Overview

Reference doc for the current site, captured 2026-08-23, for use when planning the redesign/upgrade.

## Summary

Personal portfolio/resume single-page site for JM Lagumbay (Full Stack Web Developer). Built with React + Vite, scaffolded from `create-uplift-project`. Deployed as a static SPA. Repo: `git@github.com:mikelagumbay22/jmlagumbay.com.git`.

## Tech Stack

- **Build tool**: Vite 4 (`@vitejs/plugin-react-swc`)
- **Framework**: React 18 + React Router DOM 6 (`createBrowserRouter`)
- **UI kit**: Mantine 7 (`@mantine/core`, `@mantine/hooks`, plus many unused Mantine packages — carousel, charts, dates, dropzone, form, modals, notifications, nprogress, spotlight, tiptap)
- **Icons**: `@tabler/icons-react`, `react-icons` (si icons for Express/Mongoose)
- **Styling**: CSS Modules (`*.module.css`) + inline styles, no CSS framework beyond Mantine's own styles
- **Other deps present but not obviously used in current components**: `@mui/styled-engine-sc`, `styled-components`, `dayjs`, `dom`, `embla-carousel-react`, `recharts`, `@tiptap/*` — likely leftovers from the `create-uplift-project` template, worth pruning during upgrade
- **Linting**: ESLint 8 (`eslint-plugin-react`, `react-hooks`, `react-refresh`)
- **PostCSS**: configured via `postcss.config.cjs` (Mantine preset)

## Scripts

```bash
npm run dev        # vite dev server
npm run build       # production build -> dist/
npm run preview     # preview production build
npm run lint:fix    # eslint --fix on src
```

## Project Structure

```
index.html                  # entry HTML, title "Jm Lagumbay | Portfolio", empty favicon href
public/
  robots.txt                # allows all crawling
  uplift-favicon-32x32.png  # leftover template favicon (not wired into index.html)
src/
  main.jsx                  # ReactDOM root, wraps <App /> in StrictMode
  App.jsx                   # MantineProvider + router setup
  index.css                 # global body styles (black bg, centered)
  pages/
    Homepage.jsx             # composes the whole single-page layout
    Homepage.module.css
  components/
    Header.jsx / .module.css       # "JM LAGUMBAY" title + subtitle
    Navigation.jsx / .module.css   # fixed top nav, logo, burger menu on mobile
    ProfileImage.jsx / .module.css # layout wrapper: Header+SocialMedia beside ProfilePic+About
    About.jsx                      # bio paragraphs
    SocialMedia.jsx                # social icon links
    Stacks.jsx / .module.css       # tech stack icon grid
    WorkExperience.jsx             # work history table + resume link
    Projects.jsx                   # project cards grid
  assets/
    JmlLogo.png, ProfilePic.png, CartoonPic.JPG,
    Tesla.png, DigitalStorm.jpg, Sykes.webp
```

## Routing

`App.jsx` defines routes via `createBrowserRouter`, but in practice the site behaves as a **single page** — `Homepage` renders everything (`Navigation`, `ProfileImage`, `Stacks`, `WorkExperience`, `Projects`) on one page, wrapped in `<div id="about">`, `<div id="resume">`, `<div id="projects">` anchors. The nav bar scrolls smoothly to these anchors rather than routing.

Separate routes also exist and render the same components standalone (would lose surrounding page context if visited directly):
- `/` → Homepage (full page)
- `/about` → About only
- `/resume` → WorkExperience only
- `/projects` → Projects only

**Note for upgrade**: this dual approach (anchor-scroll nav + separate routes to lone components) is inconsistent/likely unintentional — decide during redesign whether to go full single-page (drop the extra routes) or full multi-page (make nav actually route).

## Page Content (current copy, for reuse/reference)

### Header
- Title: **JM LAGUMBAY**
- Subtitle: **I am a Full Stack Web Developer**

### About (bio)
> My journey into full stack development began in March 2024 when I joined Uplift Code Camp. This experience sparked my enthusiasm for coding and set me on a path of discovery and growth. Since then, I've dived into numerous personal projects, developing a range of applications and honing my skills with each new challenge. I'm dedicated to learning and evolving, constantly exploring new technologies and methodologies to stay ahead in the ever-changing tech landscape.
>
> Outside of coding, you'll find me enjoying my favorite Netflix movies and series, hitting the basketball court, or embracing the thrill of snowboarding. Balancing my professional journey with these personal interests keeps me inspired and energized.

### Social Links
- LinkedIn: https://www.linkedin.com/in/jmlagumbay/
- Facebook: https://www.facebook.com/jmlagumbay
- Instagram: https://www.instagram.com/mikelagumbay/
- GitHub: https://github.com/mikelagumbay22
- Email: mailto:mikelagumbay@hotmail.com

### Tech Stack Icons Shown
HTML, CSS, React, JavaScript, Node.js, Express, Mongoose, MongoDB (all icons colored lime green)

### Work Experience (table: logo + description)
1. **Tesla** (Aug 2020 – Jun 2023) — Process Engineering dept.: Production Associate → Process Technician → Lead Process Technician → Supervisor of Process Engineering. Advanced powertrain assembly, QA, standard procedures, automated dashboards, EHS initiatives, cross-functional coordination.
2. **Digital Storm PC** — Quality Analyst: BIOS checks, Windows installs, driver verification, QA inspections, wire management, packing support.
3. **Sykes** (15 years, NCR Philippines) — Process Engineer (Quality Management) → earlier Assistant HR Manager, Sr. Specialist/Technology Officer, QA Coordinator/Technical Support Rep. Six Sigma root cause analysis, SOX/ISO audit prep, Power tools (Excel, SharePoint, PowerBI, PowerApps).

Resume link (Google Drive, currently public "anyone with link"):
`https://drive.google.com/file/d/1hbwVyUHfXbyPsQ1zYm34HYcorkC0AfkX/view?usp=sharing`

### Projects
1. **BUDDIE.PH** — https://buddie.ph/ — pet care platform: health records, vet connections.
2. **PARKRIDGE** — https://parkridgeapp-frontend.onrender.com/ — community management: announcements, facility requests, issue reporting, construction monitoring.
3. **GAMERS.PH** — https://gamersph.netlify.app/ — gaming hub: game catalog, reviews, news, trailers.

## Visual/Design Notes

- **Color palette**: black background (`#000000`), white/off-white text, **lime green** (`lime`) as the sole accent color throughout (titles, icons, links, hover states).
- **Typography**: Mantine `Title`/`Text` components, no custom font imports found (uses Mantine defaults).
- Nav is fixed to top, collapses to a lime-green full-height drawer with a burger icon under 768px.
- Header title is 5rem desktop / 4rem mobile, top margin shifts significantly on mobile (70px → 230px) to clear the mobile nav drawer height.
- Profile section (`ProfileImage`) is a two-column flex row (photo | header+bio) that stacks to a single column under 768px.
- Stacks grid is responsive: 8 cols (≥750px) → 4 cols (450–750px) → 2 cols (<450px).
- Work experience uses a plain `<table>` styled via Mantine `Table` (striped, hover-highlighted).
- Project cards use Mantine `Card` with a colored icon badge (lime background, black icon).

## Known Issues / Upgrade Candidates

- `index.html` favicon `<link>` has an empty `href`; `uplift-favicon-32x32.png` exists in `public/` but isn't referenced — favicon is effectively broken.
- Many installed dependencies appear unused in current source (styled-components, MUI styled-engine, dayjs, embla-carousel, recharts, tiptap, dropzone, spotlight, notifications, nprogress, modals, dates, charts, carousel) — audit and trim on upgrade.
- Routing inconsistency described above (anchor-scroll vs. standalone routes).
- No SEO meta tags (description, Open Graph, etc.) beyond `<title>`.
- No `alt`/accessibility audit done; images generally have `alt` text already.
- Asset filenames are inconsistent case (`CartoonPic.JPG` uppercase extension) — not currently used (`CartoonPic.JPG` appears unreferenced in components).
- Personal contact info (email `mikelagumbay@hotmail.com`, resume Drive link) is hardcoded directly in JSX — consider centralizing in a config/data file for easier future edits.

## Ideas to Carry Forward When Upgrading

- Keep the black + lime-green brand identity if desired (it's the one consistent visual through-line).
- Content to preserve: bio text, three work experience entries, three project entries, tech stack list, social links.
- Consider consolidating routing strategy, adding real SEO/meta tags, fixing the favicon, and pruning unused dependencies as part of the rebuild.
