export interface Certification {
  id: string;
  name: string;
  vendor: string;
  year: string;
  credentialUrl: string;
}

export const certifications: Certification[] = [
  {
    id: "cert-fortinet-nse4",
    name: "NSE 4 — Network Security Professional",
    vendor: "Fortinet",
    year: "2026",
    credentialUrl: "https://www.credly.com/your-credential",
  },
  {
    id: "cert-fortinet-nse6",
    name: "NSE 6 — Network Security Specialist",
    vendor: "Fortinet",
    year: "2026",
    credentialUrl: "https://www.credly.com/your-credential",
  },
  {
    id: "cert-nutanix-ncp-mci",
    name: "NCP-MCI — Nutanix Certified Professional, Multicloud Infrastructure",
    vendor: "Nutanix",
    year: "2026",
    credentialUrl: "https://university.nutanix.com/your-credential",
  },
  {
    id: "cert-mtcna",
    name: "MTCNA — MikroTik Certified Network Associate",
    vendor: "MikroTik",
    year: "2024",
    credentialUrl: "https://mikrotik.com/training/certificates",
  },
  {
    id: "cert-solidserver",
    name: "SOLIDserver Certified Professional",
    vendor: "EfficientIP",
    year: "2026",
    credentialUrl: "https://www.efficientip.com/your-credential",
  },
];
