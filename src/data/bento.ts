import { Network, ShieldCheck, BrainCircuit, Server } from "lucide-react";

export interface BentoCard {
  id: string;
  index: string;
  title: string;
  description: string;
  icon: typeof Network;
  badges: string[];
  accent: "blue" | "cyan" | "indigo" | "purple";
}

export const bentoCards: BentoCard[] = [
  {
    id: "network-engineering",
    index: "01",
    title: "Network Engineering",
    description:
      "Designing and operating routing, switching, and WAN infrastructure for enterprise and service-provider environments.",
    icon: Network,
    accent: "blue",
    badges: ["BGP", "OSPF", "VLAN", "VXLAN", "EVPN", "HSRP", "STP", "LACP", "SD-WAN", "ISP Networking"],
  },
  {
    id: "network-security",
    index: "02",
    title: "Network Security",
    description:
      "Securing enterprise perimeters and internal segments with next-gen firewalls, VPN, and centralized security monitoring.",
    icon: ShieldCheck,
    accent: "cyan",
    badges: [
      "FortiGate",
      "FortiManager",
      "FortiAnalyzer",
      "FortiWeb",
      "FortiMail",
      "FortiSIEM",
      "NAC",
      "IPsec VPN",
      "SSL VPN",
      "Firewall Policy",
      "Security Monitoring",
    ],
  },
  {
    id: "ai-engineering",
    index: "03",
    title: "AI Engineering",
    description:
      "Building AI-assisted tooling that turns telemetry and logs into engineering intelligence and automated action.",
    icon: BrainCircuit,
    accent: "indigo",
    badges: [
      "Python",
      "FastAPI",
      "LLM",
      "AI Agents",
      "RAG",
      "Network Automation",
      "API Integration",
      "Workflow Automation",
      "SIEM Automation",
    ],
  },
  {
    id: "infrastructure",
    index: "04",
    title: "Infrastructure",
    description:
      "Running virtualization and compute platforms that keep services highly available and observable end-to-end.",
    icon: Server,
    accent: "purple",
    badges: ["Linux", "Proxmox", "Nutanix", "Docker", "Kubernetes Concepts", "Virtualization", "Monitoring", "High Availability"],
  },
];
