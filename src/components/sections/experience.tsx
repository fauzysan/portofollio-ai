"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { experienceEntries } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Career"
          title="Professional Journey"
          description="From ISP network operations to AI-assisted infrastructure — each role built on the last."
        />

        <div className="relative flex flex-col">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border-strong sm:left-[9px]" aria-hidden />

          {experienceEntries.map((entry, index) => (
            <ScrollReveal key={entry.id} delay={index * 0.08} className="relative flex gap-6 pb-12 last:pb-0 sm:gap-8">
              <div className="relative z-10 flex shrink-0 items-start pt-1.5">
                <motion.span
                  initial={{ scale: 0.4, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex h-4 w-4 items-center justify-center rounded-full bg-background ring-2 ring-accent-cyan sm:h-5 sm:w-5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                </motion.span>
              </div>

              <div className="flex flex-1 flex-col gap-3">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent-cyan">{entry.period}</span>
                  <h3 className="text-xl font-semibold text-foreground">{entry.title}</h3>
                </div>
                <p className="text-sm font-medium text-muted">{entry.organization}</p>
                <p className="max-w-2xl text-sm leading-relaxed text-muted">{entry.summary}</p>

                <ul className="mt-1 grid gap-1.5 sm:grid-cols-2">
                  {entry.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-blue" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-2 flex flex-wrap gap-1.5">
                  {entry.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
