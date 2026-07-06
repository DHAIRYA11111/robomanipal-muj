"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [down, setDown] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 45, stiffness: 600, mass: 0.35 });
  const ringY = useSpring(y, { damping: 45, stiffness: 600, mass: 0.35 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-none-desktop");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as HTMLElement)?.closest(
        "a, button, [data-cursor], input, textarea, [role='button']",
      ) as HTMLElement | null;
      if (target) {
        setHovering(true);
        setLabel(target.getAttribute("data-cursor"));
      } else {
        setHovering(false);
        setLabel(null);
      }
    };
    const downH = () => setDown(true);
    const upH = () => setDown(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", downH);
    window.addEventListener("mouseup", upH);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", downH);
      window.removeEventListener("mouseup", upH);
      document.documentElement.classList.remove("cursor-none-desktop");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* core dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cotton mix-blend-difference"
        style={{ x, y }}
        animate={{ scale: down ? 0.6 : hovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      {/* trailing ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cotton/70 mix-blend-difference"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? 72 : 34,
          height: hovering ? 72 : 34,
          opacity: 1,
          borderColor: hovering
            ? "rgba(237,233,221,0.95)"
            : "rgba(237,233,221,0.55)",
        }}
        transition={{ type: "spring", damping: 32, stiffness: 360 }}
      >
        {label && (
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-cotton">
            {label}
          </span>
        )}
      </motion.div>
    </>
  );
}
