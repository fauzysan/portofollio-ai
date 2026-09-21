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
    period: "2024 — 2025",
    title: "Network Operations Center (NOC)",
    organization: "Internet Service Provider",
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
    period: "2025 — Present",
    title: "Network Security Engineer",
    organization: "Enterprise Client",
    summary:
      "Own the design, deployment, and hardening of enterprise firewall and VPN infrastructure across multiple sites.",
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
];
