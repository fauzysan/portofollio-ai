"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { damping: 30, stiffness: 200, mass: 0.4 });
  const springY = useSpring(y, { damping: 30, stiffness: 200, mass: 0.4 });
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };
    const handleLeave = () => setVisible(false);

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerleave", handleLeave);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[420px] w-[420px] rounded-full mix-blend-screen md:block"
      style={{
        translateX: springX,
        translateY: springY,
        x: "-50%",
        y: "-50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, rgba(34,211,238,0.05) 40%, transparent 70%)",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}
    />
  );
}
