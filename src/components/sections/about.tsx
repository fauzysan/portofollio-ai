"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { identityTimeline } from "@/data/timeline";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading eyebrow="About" title="Engineer Behind the Infrastructure" />

          <ScrollReveal delay={0.1} className="flex flex-col gap-5 text-base leading-relaxed text-muted">
            <p>
              I am a Network Security Engineer with experience across ISP networking, NOC operations, enterprise
              infrastructure, and cybersecurity. My work focuses on designing, troubleshooting, securing, and
              automating network infrastructure.
            </p>
            <p>
              More recently, I have been combining network engineering with AI engineering to build intelligent
              operational tools — from network monitoring and automated troubleshooting to AI-assisted remediation.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.15}>
          <div className="relative">
            <div className="hidden lg:flex lg:items-center">
              {identityTimeline.map((label, index) => {
                const isLast = index === identityTimeline.length - 1;
                return (
                  <div key={label} className="flex flex-1 items-center last:flex-none">
                    <div className="flex flex-col items-center gap-3">
                      <span className="relative flex h-3 w-3 items-center justify-center">
                        <motion.span
                          className="absolute h-full w-full rounded-full bg-accent-cyan/40"
                          animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                          transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.25 }}
                        />
                        <span className="relative h-2.5 w-2.5 rounded-full bg-accent-cyan" />
                      </span>
                      <span className="w-28 text-center font-mono text-xs text-muted">{label}</span>
                    </div>
                    {!isLast && (
                      <div className="relative mx-2 h-px flex-1 bg-border-strong">
                        <motion.div
                          className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-accent-cyan to-transparent"
                          animate={{ left: ["-30%", "110%"] }}
                          transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.2, ease: "linear" }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-6 lg:hidden">
              {identityTimeline.map((label, index) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="relative flex h-3 w-3 shrink-0 items-center justify-center">
                    <motion.span
                      className="absolute h-full w-full rounded-full bg-accent-cyan/40"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.25 }}
                    />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-accent-cyan" />
                  </span>
                  <span className="font-mono text-sm text-muted">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
