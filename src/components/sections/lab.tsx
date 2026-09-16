"use client";

import { motion } from "framer-motion";
import { Server, Box, FlaskConical } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { labBranches, labTechnologies } from "@/data/lab";

export function Lab() {
  return (
    <section id="lab" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Playground"
          title="Home Lab / Engineering Lab"
          description="A dedicated environment for testing network designs, security tooling, and AI workflows before they touch production."
        />

        <ScrollReveal>
          <div className="flex flex-col items-center gap-3">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel flex items-center gap-2 rounded-xl px-5 py-3 font-mono text-sm text-foreground/90"
            >
              <Server className="h-4 w-4 text-accent-blue" />
              Dell Server
            </motion.div>
            <div className="h-6 w-px bg-border-strong" />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel flex items-center gap-2 rounded-xl px-5 py-3 font-mono text-sm text-foreground/90"
            >
              <Box className="h-4 w-4 text-accent-cyan" />
              Proxmox
            </motion.div>
            <div className="h-6 w-px bg-border-strong" />

            <div className="flex flex-wrap justify-center gap-4 pt-1">
              {labBranches.map((item, index) => (
                <div key={item} className="flex flex-col items-center gap-2">
                  <div className="h-4 w-px bg-border-strong" />
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + index * 0.08 }}
                    className="glass-panel flex items-center gap-2 rounded-lg px-4 py-2.5 font-mono text-xs text-foreground/90"
                  >
                    <FlaskConical className="h-3.5 w-3.5 text-accent-indigo" />
                    {item}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Card className="flex flex-wrap gap-2 p-6">
            {labTechnologies.map((tech) => (
              <Badge key={tech} variant="indigo">
                {tech}
              </Badge>
            ))}
          </Card>
        </ScrollReveal>
      </Container>
    </section>
  );
}
