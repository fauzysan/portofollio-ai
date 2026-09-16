"use client";

import * as React from "react";
import { motion, useInView, animate } from "framer-motion";

interface CounterProps {
  value: string;
  className?: string;
}

function parseValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { numeric: null, suffix: value };
  return { numeric: Number(match[1]), suffix: match[2] };
}

export function Counter({ value, className }: CounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { numeric, suffix } = parseValue(value);
  const [display, setDisplay] = React.useState(numeric === null ? value : "0");

  React.useEffect(() => {
    if (numeric === null || !inView) return;
    const controls = animate(0, numeric, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(String(Math.round(latest))),
    });
    return () => controls.stop();
  }, [inView, numeric]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
      {suffix}
    </motion.span>
  );
}
