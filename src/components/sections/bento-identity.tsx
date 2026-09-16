"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { bentoCards, type BentoCard } from "@/data/bento";

const accentText: Record<BentoCard["accent"], string> = {
  blue: "text-accent-blue",
  cyan: "text-accent-cyan",
  indigo: "text-accent-indigo",
  purple: "text-accent-purple",
};

const accentBadge: Record<BentoCard["accent"], "blue" | "cyan" | "indigo" | "purple"> = {
  blue: "blue",
  cyan: "cyan",
  indigo: "indigo",
  purple: "purple",
};

export function BentoIdentity() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Engineering Identity"
          title="Engineering Across Network, Security & AI"
          description="Four disciplines, one operating mindset: understand the system, secure it, then make it smarter."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {bentoCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={card.id} delay={index * 0.08}>
                <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  <Card className="group h-full p-6 hover:border-border-strong">
                    <div className="flex items-start justify-between">
                      <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] ${accentText[card.accent]}`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-xs text-muted/60">{card.index}</span>
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-foreground">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{card.description}</p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {card.badges.map((badge) => (
                        <Badge key={badge} variant={accentBadge[card.accent]}>
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
