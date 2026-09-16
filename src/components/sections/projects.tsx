"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { SpineLeafTopology } from "@/components/widgets/spine-leaf-topology";

function ProjectDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-xl border border-border-subtle bg-black/20 p-3 font-mono text-[11px] text-muted">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-2">
          <span className="rounded-md border border-border-subtle bg-white/[0.03] px-2 py-1 text-foreground/80">{step}</span>
          {index < steps.length - 1 && <ArrowRight className="h-3 w-3 shrink-0 text-accent-cyan" />}
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <ScrollReveal
      delay={index * 0.06}
      className={cn(project.size === "large" ? "sm:col-span-2" : "sm:col-span-1")}
    >
      <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="h-full">
        <Card className="flex h-full flex-col gap-5 p-6 hover:border-border-strong">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent-cyan">{project.category}</span>
          </div>

          <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
          <p className="text-sm leading-relaxed text-muted">{project.description}</p>

          {project.id === "spine-leaf-vxlan-lab" && <SpineLeafTopology />}
          {project.diagram && <ProjectDiagram steps={project.diagram} />}

          <ul className="grid gap-1.5 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-blue" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
            {project.technology.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </Card>
      </motion.div>
    </ScrollReveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Engineering Projects"
          description="Representative work spanning AI-assisted operations, enterprise security, data center fabrics, and observability."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
