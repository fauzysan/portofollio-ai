"use client";

import { Mail, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/social-icons";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic-button";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[480px] glow-radial" />
      <Container>
        <ScrollReveal className="glass-panel-strong mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl px-6 py-14 text-center sm:px-14">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s Build Something Reliable.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted">
            Whether it&apos;s enterprise networking, cybersecurity, infrastructure automation, or AI-powered
            operations, I&apos;m always interested in solving challenging engineering problems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Magnetic>
              <Button asChild size="lg">
                <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild variant="outline" size="lg">
                <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild variant="outline" size="lg">
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild variant="ghost" size="lg">
                <a href={siteConfig.links.cv}>
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </Magnetic>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
