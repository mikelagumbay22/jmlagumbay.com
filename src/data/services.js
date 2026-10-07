// Services page data (copy.md Page 2). John, Oct 7: launch prices until December 31, 2026, shown with the
// January 1, 2027 price struck through (Services page only).
export const PACKAGES = [
  {
    id: "starter",
    name: "Starter",
    price: "$499",
    regular: "$699",
    tagline: "A simple, professional website to get you found.",
    intro: null,
    items: [
      "5 pages: Home, Services, About, Reviews, Contact",
      "Works on phones, tablets and computers",
      "Your own web address (yourbusiness.ca), 1st year included",
      "Secure padlock in the browser, so customers know your site is safe",
      "Tap-to-call button, Google Map and your hours",
      "Your best Google reviews on display",
      "Emails to info@yourbusiness.ca go to your inbox",
      "Shows up on Google",
      "I write the words for you after a quick 20-minute chat",
    ],
    turnaround: "Ready in 3–5 business days*",
    cta: "Start with Starter",
  },
  {
    id: "business",
    name: "Business",
    price: "$849",
    regular: "$1,199",
    recommended: true,
    tagline: "A custom look that brings in more calls and customers.",
    intro: "Everything in Starter, plus:",
    items: [
      "Custom layout and colours to match your business",
      "Written with words people search for, like \u201chair salon near me\u201d",
      "Contact form for questions and quotes",
      "\u201cLeave us a Google review\u201d button",
      "I tidy up your logo and edit your photos",
      "I set up your Google Maps business listing with hours and photos",
      "Both yourbusiness.ca and .com",
      "1 business email (you@yourbusiness.ca)",
    ],
    turnaround: "Ready in 7–10 business days*",
    cta: "Go with Business",
  },
  {
    id: "premium",
    name: "Premium",
    price: "$1,299",
    regular: "$1,799",
    tagline: "The full package: photos, logo and more ways to be found.",
    intro: "Everything in Business, plus:",
    items: [
      "Up to 7 pages (add a photo gallery, price list or FAQ)",
      "1-hour photo visit at your shop (in Mississauga)",
      "A simple new logo (2 designs to choose from)",
      "Printable \u201cReview us on Google\u201d card for your counter",
      "Listed on Google Maps, Apple Maps and Bing, linked to your Facebook",
      "Up to 3 business emails",
      "A check-up 30 days after launch",
    ],
    turnaround: "Ready in 10–14 business days*",
    cta: "Go with Premium",
  },
];

export const HANDOVER = { price: "$99", regular: "$150" };

export const CARE = {
  plans: [
    { name: "Starter", price: "$29", changes: "1 a month", google: "–", googleSr: "Not included" },
    { name: "Business", price: "$59", changes: "Up to 3 a month", google: "1 post a month + holiday hours" },
    { name: "Premium", price: "$99", changes: "Up to 2 hours a month", google: "2 posts a month + help with reviews" },
  ],
};

export const STEPS = [
  { title: "Quick chat.", text: "You tell me about your business or your idea, your customers and what you need. For a website, it's a 20-minute chat, and I'll show you examples so you can see what's possible." },
  { title: "Plan and price.", text: "Website: pick a package, pay 50% to start and send me your photos, hours, services and logo (if you have one). Your turnaround clock starts here. Web app: I map out what it needs to do and send you a fixed quote." },
  { title: "I build it, you review it.", text: "I build it, write the words where needed, and check everything on phones and computers. You try it out and tell me what to change." },
  { title: "Launch.", text: "Your website or app goes live. For website packages, you pay the other 50% before it goes live, on your own web address." },
];

// Custom web apps (copy.md Page 2, #web-apps). Custom quote only: no timelines, payment, hosting or ownership terms (A4 #6).
export const WEB_APPS = [
  { title: "Dashboards", text: "Your numbers and records in one place, updated as you work." },
  { title: "Client portals", text: "A private place where your customers log in to see their details, documents or bookings." },
  { title: "Booking or management tools", text: "Take bookings, track jobs or manage your team without spreadsheets." },
  { title: "SaaS MVPs", text: "A first working version of your product, so you can put it in front of real users." },
];
