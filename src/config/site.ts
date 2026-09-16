export const siteConfig = {
  name: "Ahmad Fauzy Hafidz",
  initials: "AFH",
  role: "Network Security Engineer × AI Engineer",
  tagline: "Building secure networks, intelligent automation, and resilient infrastructure.",
  intro:
    "I design, operate, and automate enterprise network and security infrastructure — combining networking, cybersecurity, infrastructure, and AI to solve complex operational problems.",
  location: "Indonesia",
  availability: "Available for Engineering & Infrastructure Projects",
  url: "https://afh-portfolio.example.com",
  email: "contact@example.com",
  links: {
    linkedin: "https://linkedin.com/in/your-handle",
    github: "https://github.com/your-handle",
    cv: "/cv/ahmad-fauzy-hafidz-cv.pdf",
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
