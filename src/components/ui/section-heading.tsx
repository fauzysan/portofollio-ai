import * as React from "react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <ScrollReveal
      className={cn("flex flex-col gap-4", align === "center" && "items-center text-center", className)}
    >
      {eyebrow ? (
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border-subtle bg-white/[0.03] px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {description ? (
        <p className={cn("max-w-2xl text-base leading-relaxed text-muted", align === "center" && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </ScrollReveal>
  );
}
