"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  strength?: number;
};

/** Wraps an interactive element so it leans toward the cursor on hover. */
export default function Magnetic({
  children,
  className,
  strength = 0.35,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { damping: 16, stiffness: 200, mass: 0.4 });
  const sy = useSpring(y, { damping: 16, stiffness: 200, mass: 0.4 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
