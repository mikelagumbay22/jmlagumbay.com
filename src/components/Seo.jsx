import { Helmet } from "react-helmet-async";
import { SEO } from "@/data/seo";
import { OG_IMAGE, SITE_URL } from "@/data/site";

/** Per-page title, description, canonical and Open Graph / Twitter tags (react-helmet-async, prerendered). */
export default function Seo({ page }) {
  const s = SEO[page];
  const url = SITE_URL + s.path;
  const ogTitle = s.ogTitle || s.title;
  const ogDescription = s.ogDescription || s.description;
  const alt = "JM Lagumbay: websites and web apps for small businesses, lime text on black";
  return (
    <Helmet>
      <html lang="en-CA" />
      <title>{s.title}</title>
      <meta name="description" content={s.description} />
      {s.noindex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={url} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="JM Lagumbay" />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      {!s.noindex && <meta property="og:url" content={url} />}
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={alt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:image:alt" content={alt} />
    </Helmet>
  );
}
