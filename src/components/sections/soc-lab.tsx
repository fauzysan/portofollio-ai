"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Info, ShieldAlert } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Counter } from "@/components/motion/counter";
import { socStats, socEvents, type SocEvent } from "@/data/soc-lab";

const severityStyles: Record<SocEvent["severity"], { color: string; Icon: typeof Info }> = {
  info: { color: "text-accent-cyan", Icon: Info },
  warning: { color: "text-amber-400", Icon: AlertTriangle },
  critical: { color: "text-rose-400", Icon: ShieldAlert },
};

export function SocLab() {
  return (
    <section id="soc-lab" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-grid-fine opacity-40" />
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Operations"
          title="Security Operations Lab"
          description="A snapshot of the scale this workflow is designed to operate at, visualized in a SOC-style dashboard."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {socStats.map((stat, index) => (
            <ScrollReveal key={stat.id} delay={index * 0.06}>
              <Card className="p-6">
                <p className="font-mono text-3xl font-semibold text-foreground">
                  <Counter value={stat.value} />
                </p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.15}>
          <Card className="overflow-hidden">
            <div className="flex items-center justify-between border-b border-border-subtle px-5 py-3.5">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Simulated Event Feed</span>
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
                </span>
                <span className="font-mono text-[11px] text-muted">Portfolio visualization</span>
              </span>
            </div>
            <div className="flex flex-col divide-y divide-border-subtle">
              {socEvents.map((event, index) => {
                const { color, Icon } = severityStyles[event.severity];
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 px-5 py-3.5 font-mono text-sm"
                  >
                    <Icon className={`h-4 w-4 shrink-0 ${color}`} />
                    <span className="text-muted">{event.time}</span>
                    <span className="text-foreground/70">—</span>
                    <span className="text-accent-cyan">{event.source}</span>
                    <span className="text-foreground/70">—</span>
                    <span className="text-foreground/90">{event.message}</span>
                  </motion.div>
                );
              })}
            </div>
          </Card>
          <p className="mt-3 text-xs text-muted/70">
            Event feed and statistics are illustrative portfolio visualizations, not live production telemetry.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
