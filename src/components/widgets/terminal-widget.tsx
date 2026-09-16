"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";

interface TerminalBlock {
  command: string;
  output: string[];
}

const blocks: TerminalBlock[] = [
  {
    command: "whoami",
    output: ["Network Security Engineer", "AI Engineer"],
  },
  {
    command: "focus",
    output: ["Network Security", "AI Automation", "Infrastructure", "Observability"],
  },
  {
    command: "mission",
    output: ["Build secure,", "observable,", "and intelligent infrastructure."],
  },
];

const TYPE_SPEED = 55;
const LINE_PAUSE = 380;
const BLOCK_PAUSE = 1400;
const LOOP_PAUSE = 3200;

export function TerminalWidget() {
  const [blockIndex, setBlockIndex] = React.useState(0);
  const [typed, setTyped] = React.useState("");
  const [visibleLines, setVisibleLines] = React.useState(0);
  const [phase, setPhase] = React.useState<"typing" | "output" | "pause">("typing");

  React.useEffect(() => {
    const current = blocks[blockIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (typed.length < current.command.length) {
        timeout = setTimeout(() => setTyped(current.command.slice(0, typed.length + 1)), TYPE_SPEED);
      } else {
        timeout = setTimeout(() => setPhase("output"), 300);
      }
    } else if (phase === "output") {
      if (visibleLines < current.output.length) {
        timeout = setTimeout(() => setVisibleLines((v) => v + 1), LINE_PAUSE);
      } else {
        timeout = setTimeout(() => setPhase("pause"), BLOCK_PAUSE);
      }
    } else {
      const isLast = blockIndex === blocks.length - 1;
      timeout = setTimeout(
        () => {
          setTyped("");
          setVisibleLines(0);
          setPhase("typing");
          setBlockIndex((i) => (isLast ? 0 : i + 1));
        },
        isLast ? LOOP_PAUSE : 300,
      );
    }

    return () => clearTimeout(timeout);
  }, [typed, phase, visibleLines, blockIndex]);

  const current = blocks[blockIndex];
  const isTypingDone = typed.length === current.command.length;

  return (
    <Card className="w-full max-w-md font-mono text-sm shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-border-subtle px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-2 text-xs text-muted">engineer@afh:~</span>
      </div>
      <div className="min-h-[220px] px-4 py-4">
        <AnimatePresence mode="wait">
          {Array.from({ length: blockIndex }).map((_, idx) => (
            <div key={idx} className="mb-2">
              <p className="text-accent-cyan">
                <span className="text-muted">$</span> {blocks[idx].command}
              </p>
              {blocks[idx].output.map((line) => (
                <p key={line} className="text-foreground/90">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </AnimatePresence>
        <p className="text-accent-cyan">
          <span className="text-muted">$</span> {typed}
          {!isTypingDone && <span className="animate-blink border-l-2 border-accent-cyan" />}
        </p>
        <div className="mt-0.5">
          {current.output.slice(0, visibleLines).map((line) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-foreground/90"
            >
              {line}
            </motion.p>
          ))}
          {isTypingDone && phase !== "typing" && (
            <span className="inline-block h-4 w-2 animate-blink bg-accent-cyan align-middle" />
          )}
        </div>
      </div>
    </Card>
  );
}
