"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { blogPosts } from "@/data/blog";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export function Blog() {
  return (
    <section id="blog" className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Knowledge"
          title="Technical Writing"
          description="Notes from the field — networking fundamentals, data center design, and AI-assisted operations."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 0.06}>
              <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="h-full">
                <Card className="flex h-full flex-col gap-4 p-6 hover:border-border-strong">
                  <span className="w-fit font-mono text-xs uppercase tracking-[0.15em] text-accent-cyan">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold leading-snug text-foreground">{post.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{post.description}</p>

                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-border-subtle pt-3 text-xs text-muted">
                    <span>{formatDate(post.date)}</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readingTime}
                    </span>
                  </div>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
