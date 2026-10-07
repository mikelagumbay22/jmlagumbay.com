# jmlagumbay.com

John Michael Lagumbay's business site: websites for Mississauga small businesses, plus his portfolio and resume.

**Stack:** React 18, React Router 6, Vite 8, vite-react-ssg (prerenders every route to real HTML), Tailwind CSS 3, Motion (`motion/react`), react-helmet-async and @tabler/icons-react. Fonts are self-hosted in `public/fonts`.

## Develop
```bash
npm ci
npm run dev        # client-side dev server (http://localhost:5173)
npm run dev:ssr    # dev server with SSR, closer to production
npm run build      # prerender every route into dist/ (index.html, services.html, work.html, about.html, contact.html, 404.html)
npm run preview    # serve dist/ like GitHub Pages on http://127.0.0.1:8090 (needs python3)
npm run lint
```

## Contact form (Web3Forms)
The form posts to Web3Forms with the access key from `VITE_WEB3FORMS_KEY`. **Never commit the key.**
- **Local testing:** copy `.env.example` to `.env.local` (git-ignored) and paste the key.
- **Production:** add the repository secret `VITE_WEB3FORMS_KEY`. The deploy workflow passes it into the build.
- **If the key is missing:** visitors see the friendly error text with the phone number and email, and the console logs the details.
- **Note:** Web3Forms keys are public by design, because they end up in the browser bundle. Turn on domain restriction in the Web3Forms dashboard.

## Deploy (GitHub Pages)
`.github/workflows/deploy.yml` builds on every push to `main` and deploys `dist/` to Pages.
1. Go to Settings → Pages → Source, and choose **GitHub Actions**.
2. Add the secret `VITE_WEB3FORMS_KEY` under Settings → Secrets and variables → Actions.
3. Set the custom domain to `www.jmlagumbay.com`. `public/CNAME` is already in the build, so then tick **Enforce HTTPS**.
4. Set up DNS:
   - `www` → CNAME → `mikelagumbay22.github.io`.
   - Apex `jmlagumbay.com` → A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`, plus AAAA `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153` and `2606:50c0:8003::153`. Pages then redirects the apex to www.

Each route is a real prerendered file (`/work` → `work.html`), so deep links return 200 on Pages with no SPA redirect trick. Unknown paths get `404.html` (noindex).

## Where things live
- **Copy and data:** `src/data/*.js`. Placeholder `[RATE]` is rendered by `<Placeholder name="RATE" />` on /services.
- **Per-page SEO:** `src/data/seo.js` + `src/components/Seo.jsx`. JSON-LD (Person + ProfessionalService) is in `index.html`. `public/robots.txt` and `public/sitemap.xml`.
- **Images:**
  - `scripts/make_images.py` (portrait, logo, favicons, project thumbnails).
  - `scripts/make_og.py` (share card).
  - The demo screenshots in `public/img/work/` come from the live demo sites (capture script kept outside this repo).
- **Motion:**
  - Page transitions are in `src/layout/Layout.jsx`. The hero headline is a CSS animation, so it paints before JS.
  - Scroll reveals are in `src/components/Reveal.jsx` and never hide prerendered content. The timeline is `src/components/Timeline.jsx`, and the cards are `TiltCard`, `DemoCard` and `ProjectCard`.
  - Everything respects `prefers-reduced-motion`.
