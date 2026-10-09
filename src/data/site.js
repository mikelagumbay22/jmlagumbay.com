// Site-wide facts. Portfolio only: business offers live on Northpage (NORTHPAGE_URL).
// Only the contact details below may be published. Do not add any other personal address.
export const SITE_URL = "https://www.jmlagumbay.com";
export const BRAND = "JM Lagumbay";
export const FULL_NAME = "John Michael Lagumbay";
// Phone. Empty on purpose. While it's null,
// nothing phone-related renders anywhere: no call buttons, links, rows or separators.
// To restore, set it to { display: "(xxx) xxx-xxxx", e164: "+1xxxxxxxxxx" } and re-add
// "telephone" to the JSON-LD in index.html.
export const PHONE = null;
export const PHONE_DISPLAY = PHONE ? PHONE.display : "";
export const PHONE_HREF = PHONE ? `tel:${PHONE.e164}` : "";
export const EMAIL = "jmlagumbay422@gmail.com";
export const LOCATION = "Mississauga, Ontario";
export const LINKEDIN_URL = "https://www.linkedin.com/in/jmlagumbay/";
export const GITHUB_URL = "https://github.com/mikelagumbay22";
export const RESUME_URL = "/JM-Lagumbay-Resume.pdf";
export const OG_IMAGE = `${SITE_URL}/og/og-default.jpg`;
export const NORTHPAGE_URL = "https://www.northpage.ca";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];
