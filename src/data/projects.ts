export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technology: string[];
  features: string[];
  diagram?: string[];
  size: "large" | "medium";
}

export const projects: Project[] = [
  {
    id: "ai-netops-platform",
    title: "AI-Powered Network Operations Platform",
    category: "AI + Network Operations",
    description:
      "An AI-assisted network operations platform designed to monitor infrastructure, analyze network incidents, validate potential issues, and assist engineers with remediation.",
    technology: ["Python", "FastAPI", "PostgreSQL", "LLM", "FortiGate API", "Cisco", "MikroTik", "Wazuh", "SIEM", "n8n"],
    features: [
      "AI-assisted troubleshooting",
      "Network device integration",
      "Duplicate IP verification",
      "Automated diagnostics",
      "Security event analysis",
      "Remediation workflow",
    ],
    size: "large",
  },
  {
    id: "enterprise-security-infra",
    title: "Enterprise Network Security Infrastructure",
    category: "Network Security",
    description:
      "A resilient enterprise security architecture built around highly-available firewalls and layered network segmentation.",
    technology: ["FortiGate HA", "LACP", "VLAN", "SD-WAN", "IPsec VPN", "Security Monitoring"],
    features: ["High Availability", "LACP", "VLAN", "Routing", "Firewall", "SD-WAN", "VPN", "Security monitoring"],
    diagram: ["Internet", "FortiGate HA", "Core", "Distribution", "Access", "Servers / Users"],
    size: "medium",
  },
  {
    id: "spine-leaf-vxlan-lab",
    title: "Spine-Leaf VXLAN / EVPN Lab",
    category: "Data Center Networking",
    description:
      "A production-inspired data center network laboratory designed to study modern leaf-spine architecture and VXLAN/EVPN overlay design.",
    technology: ["VXLAN", "EVPN", "BGP", "OSPF", "Anycast Gateway", "ECMP"],
    features: ["Overlay/underlay separation", "EVPN control plane", "Anycast gateway per leaf", "ECMP load sharing"],
    size: "medium",
  },
  {
    id: "network-monitoring-platform",
    title: "Network Monitoring Platform",
    category: "Observability",
    description:
      "A unified monitoring pipeline that turns multi-vendor device telemetry into dashboards, alerts, and AI-driven health analysis.",
    technology: ["MikroTik", "Cisco", "FortiGate", "Zabbix", "Grafana"],
    features: [
      "Device monitoring",
      "Interface monitoring",
      "Bandwidth analysis",
      "Alerting",
      "Performance dashboards",
      "Network health analysis",
    ],
    diagram: ["MikroTik / Cisco / FortiGate", "Monitoring", "Zabbix", "Grafana", "Alerting", "AI Analysis"],
    size: "large",
  },
];
