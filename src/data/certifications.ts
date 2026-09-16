export interface Certification {
  id: string;
  name: string;
  vendor: string;
  year: string;
  credentialUrl: string;
}

export const certifications: Certification[] = [
  {
    id: "cert-fortinet-nse",
    name: "NSE — Network Security (placeholder)",
    vendor: "Fortinet",
    year: "2022",
    credentialUrl: "https://www.credly.com/your-credential",
  },
  {
    id: "cert-cisco",
    name: "CCNA — Routing & Switching (placeholder)",
    vendor: "Cisco",
    year: "2021",
    credentialUrl: "https://www.credly.com/your-credential",
  },
  {
    id: "cert-nutanix",
    name: "NCA — Nutanix Certified Associate (placeholder)",
    vendor: "Nutanix",
    year: "2023",
    credentialUrl: "https://university.nutanix.com/your-credential",
  },
  {
    id: "cert-linux",
    name: "Linux Foundation Certified Engineer (placeholder)",
    vendor: "Linux Foundation",
    year: "2022",
    credentialUrl: "https://www.credly.com/your-credential",
  },
  {
    id: "cert-security",
    name: "Security+ (placeholder)",
    vendor: "CompTIA",
    year: "2023",
    credentialUrl: "https://www.credly.com/your-credential",
  },
];
