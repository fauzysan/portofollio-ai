export interface ExperienceEntry {
  id: string;
  period: string;
  title: string;
  organization: string;
  summary: string;
  responsibilities: string[];
  tags: string[];
}

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "noc",
    period: "2019 — 2020",
    title: "Network Operations / ISP",
    organization: "Internet Service Provider (placeholder)",
    summary:
      "Monitored and maintained ISP-scale network infrastructure across a 24/7 NOC rotation, keeping uptime and routing stability front and center.",
    responsibilities: [
      "24/7 network monitoring across core and access layers",
      "Monitoring with Zabbix, Cacti, and LibreNMS",
      "Network troubleshooting for routing and last-mile issues",
      "BGP and OSPF route health verification",
      "VLAN and PPPoE subscriber provisioning",
      "NOC shift operations and incident escalation",
    ],
    tags: ["Zabbix", "Cacti", "LibreNMS", "BGP", "OSPF", "VLAN", "PPPoE"],
  },
  {
    id: "network-security-engineer",
    period: "2020 — 2022",
    title: "Network Security Engineer",
    organization: "Enterprise Client (placeholder)",
    summary:
      "Owned the design, deployment, and hardening of enterprise firewall and VPN infrastructure across multiple sites.",
    responsibilities: [
      "FortiGate deployment and lifecycle management",
      "Firewall policy design and change control",
      "Site-to-site and remote access VPN (IPsec / SSL)",
      "SD-WAN rollout across branch sites",
      "Centralized visibility with FortiManager and FortiAnalyzer",
      "Web and mail security with FortiWeb and FortiMail",
      "Network security troubleshooting and incident response",
    ],
    tags: ["FortiGate", "FortiManager", "FortiAnalyzer", "FortiWeb", "FortiMail", "SD-WAN", "VPN"],
  },
  {
    id: "infrastructure-datacenter",
    period: "2022 — 2023",
    title: "Infrastructure / Data Center Engineer",
    organization: "Enterprise Client (placeholder)",
    summary:
      "Built and operated virtualization platforms designed for high availability and rapid disaster recovery.",
    responsibilities: [
      "Nutanix AHV cluster deployment and operations",
      "Prism Central administration and lifecycle management",
      "Proxmox virtualization for lab and production workloads",
      "High-availability cluster design",
      "Disaster recovery planning and failover testing",
    ],
    tags: ["Nutanix", "AHV", "Prism Central", "Proxmox", "High Availability", "Disaster Recovery"],
  },
  {
    id: "ai-network-automation",
    period: "2023 — Present",
    title: "AI / Network Automation Engineer",
    organization: "Independent / Applied R&D (placeholder)",
    summary:
      "Combining network engineering depth with AI engineering to build tools that reason about infrastructure, not just report on it.",
    responsibilities: [
      "Python and FastAPI services for network tooling",
      "AI agent design for operational workflows",
      "LLM integration for log and telemetry analysis",
      "Network automation across multi-vendor environments",
      "SIEM integration for correlated event analysis",
      "Automated diagnostics and remediation workflows",
    ],
    tags: ["Python", "FastAPI", "AI Agents", "LLM", "Automation", "SIEM"],
  },
];
