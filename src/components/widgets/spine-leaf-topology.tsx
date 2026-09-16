"use client";

import { motion } from "framer-motion";

const nodes = {
  spine1: { x: 70, y: 20, label: "Spine 1" },
  spine2: { x: 230, y: 20, label: "Spine 2" },
  leaf1: { x: 70, y: 100, label: "Leaf 1" },
  leaf2: { x: 230, y: 100, label: "Leaf 2" },
  server1: { x: 70, y: 175, label: "Server" },
  server2: { x: 230, y: 175, label: "Server" },
};

const edges: [keyof typeof nodes, keyof typeof nodes][] = [
  ["spine1", "leaf1"],
  ["spine1", "leaf2"],
  ["spine2", "leaf1"],
  ["spine2", "leaf2"],
  ["leaf1", "server1"],
  ["leaf2", "server2"],
];

export function SpineLeafTopology() {
  return (
    <div className="rounded-xl border border-border-subtle bg-black/20 p-3">
      <svg viewBox="0 0 300 195" className="w-full" role="img" aria-label="Spine-leaf VXLAN EVPN topology">
        {edges.map(([from, to], index) => {
          const a = nodes[from];
          const b = nodes[to];
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="rgba(34,211,238,0.35)"
              strokeWidth={1.5}
              className="animate-dash-flow"
              style={{ animationDelay: `${index * 0.15}s` }}
            />
          );
        })}
        {Object.entries(nodes).map(([key, node], index) => (
          <g key={key}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={5}
              fill="#0d121b"
              stroke="#22d3ee"
              strokeWidth={1.5}
              animate={{ r: [5, 6.5, 5] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.1 }}
            />
            <text
              x={node.x}
              y={node.y + (node.y < 50 ? -12 : 16)}
              textAnchor="middle"
              className="fill-current text-muted"
              fontSize="10"
              fontFamily="var(--font-mono)"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
