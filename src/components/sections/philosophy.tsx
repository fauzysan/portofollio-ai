"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { philosophyPrinciples } from "@/data/philosophy";

export function Philosophy() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow="Principles" title="Engineering Philosophy" align="center" />

        <div className="grid gap-8 sm:grid-cols-3">
          {philosophyPrinciples.map((principle, index) => (
            <motion.div
              key={principle.index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-4 px-4 text-center"
            >
              <span className="font-mono text-sm text-accent-cyan/70">{principle.index}</span>
              <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{principle.title}</h3>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
