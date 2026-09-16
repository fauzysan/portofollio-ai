export interface TechCategory {
  id: string;
  title: string;
  items: string[];
}

export const techCategories: TechCategory[] = [
  {
    id: "networking",
    title: "Networking",
    items: ["Cisco", "Fortinet", "MikroTik", "BGP", "OSPF", "VXLAN", "EVPN", "LACP", "SD-WAN"],
  },
  {
    id: "security",
    title: "Security",
    items: ["FortiGate", "FortiManager", "FortiAnalyzer", "FortiWeb", "FortiMail", "FortiSIEM", "Wazuh"],
  },
  {
    id: "ai-development",
    title: "AI / Development",
    items: ["Python", "FastAPI", "PostgreSQL", "Docker", "REST API", "LLM", "RAG", "AI Agents", "n8n"],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    items: ["Nutanix", "AHV", "Proxmox", "Linux", "Virtualization", "Monitoring"],
  },
];
