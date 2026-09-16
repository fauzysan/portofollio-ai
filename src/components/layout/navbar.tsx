"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass-panel-strong border-b border-border-subtle" : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5 font-mono text-sm font-medium text-foreground">
          <Logo />
          <span className="hidden sm:inline">{siteConfig.initials}</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-xs text-muted">Engineering Mode</span>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="glass-panel-strong overflow-hidden border-t border-border-subtle lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm text-muted transition-colors hover:bg-white/[0.04] hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-2 px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="font-mono text-xs text-muted">Engineering Mode</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
