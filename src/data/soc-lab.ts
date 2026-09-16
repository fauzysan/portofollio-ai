export const socStats = [
  { id: "devices", label: "Network Devices", value: "120+" },
  { id: "events", label: "Security Events", value: "24/7" },
  { id: "interfaces", label: "Monitored Interfaces", value: "500+" },
  { id: "automations", label: "Automation Workflows", value: "30+" },
];

export interface SocEvent {
  id: string;
  time: string;
  source: string;
  message: string;
  severity: "info" | "warning" | "critical";
}

export const socEvents: SocEvent[] = [
  { id: "1", time: "09:42:11", source: "FortiGate", message: "Suspicious Traffic Detected", severity: "warning" },
  { id: "2", time: "09:43:02", source: "Wazuh", message: "Authentication Anomaly", severity: "critical" },
  { id: "3", time: "09:44:18", source: "AI Agent", message: "Incident Correlated", severity: "info" },
  { id: "4", time: "09:45:03", source: "Automation", message: "Investigation Started", severity: "info" },
];
