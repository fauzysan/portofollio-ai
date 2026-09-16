"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { techCategories } from "@/data/techstack";

export function TechStack() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Technology"
          title="Technical Stack"
          description="The tools and platforms behind the network, security, and AI work above."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {techCategories.map((category, catIndex) => (
            <ScrollReveal key={category.id} delay={catIndex * 0.08}>
              <Card className="h-full p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">{category.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ y: -2, borderColor: "rgba(34,211,238,0.5)", color: "#e6ebf2" }}
                      className="rounded-lg border border-border-subtle bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-muted transition-colors"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
