export interface BlogPost {
  id: string;
  category: string;
  title: string;
  description: string;
  readingTime: string;
  date: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "bgp-failover-bfd",
    category: "Networking",
    title: "Understanding BGP Failover and BFD",
    description: "How Bidirectional Forwarding Detection tightens BGP convergence times in enterprise WAN designs.",
    readingTime: "7 min read",
    date: "2025-11-02",
    tags: ["BGP", "BFD", "Routing"],
  },
  {
    id: "spine-leaf-explained",
    category: "Data Center",
    title: "Spine-Leaf Architecture Explained",
    description: "Why modern data centers moved away from three-tier designs, and how leaf-spine fabrics scale predictably.",
    readingTime: "9 min read",
    date: "2025-09-18",
    tags: ["Data Center", "Spine-Leaf", "Fabric"],
  },
  {
    id: "vxlan-evpn-perspective",
    category: "Data Center",
    title: "VXLAN EVPN from a Network Engineer's Perspective",
    description: "A practical walkthrough of VXLAN overlays and EVPN control planes, minus the marketing slides.",
    readingTime: "11 min read",
    date: "2025-08-05",
    tags: ["VXLAN", "EVPN", "BGP"],
  },
  {
    id: "fortigate-ha-lacp",
    category: "Security",
    title: "FortiGate HA and LACP Troubleshooting",
    description: "Field notes on diagnosing split-brain and link-aggregation issues in FortiGate HA clusters.",
    readingTime: "6 min read",
    date: "2025-06-21",
    tags: ["FortiGate", "HA", "LACP"],
  },
  {
    id: "ai-assisted-netops",
    category: "AI Engineering",
    title: "Building AI-Assisted Network Operations",
    description: "Design notes from building an agent that reasons about network incidents before recommending action.",
    readingTime: "10 min read",
    date: "2025-04-14",
    tags: ["AI Agents", "LLM", "NetOps"],
  },
  {
    id: "network-automation-python",
    category: "Automation",
    title: "Network Automation with Python and APIs",
    description: "Patterns for building reliable automation against multi-vendor network device APIs.",
    readingTime: "8 min read",
    date: "2025-02-27",
    tags: ["Python", "Automation", "API"],
  },
];
