"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          description="Vendor and industry credentials across networking, security, and infrastructure. Placeholder data — replace with your own."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.id} delay={index * 0.06}>
              <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="h-full">
                <Card className="flex h-full flex-col gap-4 p-6 hover:border-border-strong">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-indigo/10 text-accent-indigo">
                      <Award className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs text-muted">{cert.year}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{cert.name}</h3>
                    <p className="mt-1 text-sm text-muted">{cert.vendor}</p>
                  </div>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 text-sm text-accent-cyan transition-colors hover:text-foreground"
                  >
                    View credential
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
