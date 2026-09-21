// Resolves the canonical site URL for metadata/OG/sitemap without extra config:
// 1. NEXT_PUBLIC_SITE_URL — set this to your real domain once you have one.
// 2. VERCEL_URL — auto-provided by Vercel for production and preview deployments.
// 3. Fallback placeholder for local development.
const resolveSiteUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "https://portofollio-ai.vercel.app";
};

export const siteConfig = {
  name: "Ahmad Fauzi Hafidz",
  initials: "AFH",
  role: "Network Security Engineer × AI Engineer",
  tagline: "Building secure networks, intelligent automation, and resilient infrastructure.",
  intro:
    "I design, operate, and automate enterprise network and security infrastructure — combining networking, cybersecurity, infrastructure, and AI to solve complex operational problems.",
  location: "Indonesia",
  availability: "Available for Engineering & Infrastructure Projects",
  url: resolveSiteUrl(),
  email: "fauzyhafidz123@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/fauzi-hafidz-077230240",
    github: "https://github.com/fauzysan",
    cv: "/cv/ahmad-fauzi-hafidz-cv.pdf",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Lab", href: "#lab" },
    { label: "Certifications", href: "#certifications" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
  footerNav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Lab", href: "#lab" },
    { label: "Certifications", href: "#certifications" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
  seoKeywords: [
    "Network Security Engineer",
    "AI Engineer",
    "Network Engineer",
    "Cybersecurity Engineer",
    "Network Automation Engineer",
    "Fortinet Engineer",
    "Network Security Indonesia",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
