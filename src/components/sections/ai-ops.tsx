"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { aiPipelineStages, workflowSteps } from "@/data/ai-pipeline";

function WorkflowCard() {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActive((i) => (i + 1) % workflowSteps.length);
    }, 1300);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="p-6 font-mono text-sm">
      <div className="mb-4 flex items-center gap-2 text-xs text-muted">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-2">workflow.yaml</span>
      </div>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
        {workflowSteps.map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <motion.span
              animate={{
                color: active === index ? "#22d3ee" : "#8a96a8",
                borderColor: active === index ? "rgba(34,211,238,0.5)" : "rgba(148,163,184,0.12)",
                backgroundColor: active === index ? "rgba(34,211,238,0.08)" : "rgba(255,255,255,0.02)",
              }}
              transition={{ duration: 0.4 }}
              className="rounded-md border px-2.5 py-1.5"
            >
              {step}
            </motion.span>
            {index < workflowSteps.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-muted/60" />}
          </div>
        ))}
      </div>
    </Card>
  );
}

export function AiOps() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-1/3 -z-10 h-[500px] glow-radial-cyan" />
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="AI Engineering"
          title="AI for Network Operations"
          description="Turning network telemetry into actionable engineering intelligence."
        />

        <ScrollReveal>
          <div className="flex flex-wrap items-stretch gap-2 overflow-x-auto pb-2">
            {aiPipelineStages.map((stage, index) => (
              <div key={stage} className="flex items-center gap-2">
                <div className="glass-panel flex min-w-[9.5rem] items-center justify-center rounded-xl px-4 py-3 text-center font-mono text-xs text-foreground/90">
                  {stage}
                </div>
                {index < aiPipelineStages.length - 1 && (
                  <ArrowRight className="h-4 w-4 shrink-0 text-accent-cyan" />
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex items-center gap-3 rounded-xl border border-accent-cyan/30 bg-accent-cyan/5 px-5 py-4">
            <ShieldCheck className="h-5 w-5 shrink-0 text-accent-cyan" />
            <p className="font-mono text-sm text-foreground">
              Principle: <span className="text-accent-cyan">&ldquo;Verify before Remediate.&rdquo;</span>
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.18}>
          <WorkflowCard />
        </ScrollReveal>
      </Container>
    </section>
  );
}
