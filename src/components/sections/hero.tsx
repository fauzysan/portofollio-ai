"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic-button";
import { TerminalWidget } from "@/components/widgets/terminal-widget";
import { NetworkVisualization } from "@/components/widgets/network-visualization";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-40">
      <div className="absolute inset-0 -z-10 bg-grid" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[640px] glow-radial" />

      <Container className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border-strong bg-white/[0.03] px-3 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-xs text-muted">{siteConfig.availability}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="text-gradient">Network Security Engineer</span>
            <span className="mx-2 text-foreground/50">×</span>
            <span className="text-foreground">AI Engineer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl text-lg text-muted"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="max-w-xl text-sm leading-relaxed text-muted/90"
          >
            {siteConfig.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Magnetic>
              <Button asChild size="lg">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Let&apos;s Connect</a>
              </Button>
            </Magnetic>
            <a
              href={siteConfig.links.cv}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44 }}
            className="pt-6"
          >
            <TerminalWidget />
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 glow-radial-cyan" />
          <NetworkVisualization />
        </div>
      </Container>
    </section>
  );
}
