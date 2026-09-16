"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Globe, ShieldCheck, Network, Layers, Server, BrainCircuit, type LucideIcon } from "lucide-react";
import { heroTopologyLayers } from "@/data/network-topology";

const iconMap: Record<string, LucideIcon> = {
  Internet: Globe,
  Firewall: ShieldCheck,
  "Core Network": Network,
  "Spine / Leaf": Layers,
  Servers: Server,
  "AI / Automation": BrainCircuit,
};

export function NetworkVisualization() {
  return (
    <div className="relative mx-auto flex w-full max-w-xs flex-col items-center py-4" aria-hidden="true">
      {heroTopologyLayers.map((layer, index) => {
        const Icon = iconMap[layer] ?? Network;
        const isLast = index === heroTopologyLayers.length - 1;
        return (
          <React.Fragment key={layer}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="glass-panel relative z-10 flex w-full items-center gap-3 rounded-xl px-4 py-3"
            >
              <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-cyan">
                <Icon className="h-4 w-4" />
                <motion.span
                  className="absolute inset-0 rounded-lg border border-accent-cyan/40"
                  animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.08, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.3 }}
                />
              </span>
              <span className="font-mono text-xs tracking-wide text-foreground/90">{layer}</span>
            </motion.div>
            {!isLast && (
              <div className="relative h-8 w-px overflow-hidden bg-border-strong">
                <motion.span
                  className="absolute left-0 top-0 h-3 w-px bg-accent-cyan"
                  animate={{ y: ["-20%", "220%"] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: index * 0.25, ease: "linear" }}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
