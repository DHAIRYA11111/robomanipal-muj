"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Only play once per browser session.
    if (sessionStorage.getItem("rm-loaded")) {
      setVisible(false);
      return;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      sessionStorage.setItem("rm-loaded", "1");
      setVisible(false);
      return;
    }

    let current = 0;
    const tick = () => {
      const step = Math.random() * 8 + 3;
      current = Math.min(100, current + step);
      setCount(Math.floor(current));
      if (current < 100) {
        timer = window.setTimeout(tick, 90 + Math.random() * 90);
      } else {
        window.setTimeout(() => {
          sessionStorage.setItem("rm-loaded", "1");
          setVisible(false);
        }, 450);
      }
    };
    let timer = window.setTimeout(tick, 250);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col justify-between overflow-hidden bg-noir-900 px-6 py-8 md:px-12 md:py-12"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
          <div className="glow-cherry pointer-events-none absolute -bottom-1/3 left-1/2 h-[70vh] w-[70vh] -translate-x-1/2 blur-3xl" />

          {/* top row */}
          <div className="relative flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.3em] text-cotton/60">
            <span>ACM SIGBED · MUJ</span>
            <span className="hidden sm:block">Initialising Systems</span>
          </div>

          {/* center brand */}
          <div className="relative flex flex-1 flex-col items-center justify-center text-center">
            <motion.span
              className="eyebrow mb-5"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Robotics &amp; Research
            </motion.span>
            <motion.h1
              className="font-display text-5xl font-bold uppercase leading-none tracking-tight text-cotton sm:text-7xl md:text-8xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
            >
              Robo<span className="text-cherry-glow">Manipal</span>
            </motion.h1>
          </div>

          {/* bottom row + progress */}
          <div className="relative">
            <div className="mb-4 flex items-end justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-cotton/50">
                Loading Experience
              </span>
              <span className="font-display text-5xl font-bold tabular-nums text-cotton md:text-7xl">
                {String(count).padStart(3, "0")}
                <span className="text-cherry-glow">%</span>
              </span>
            </div>
            <div className="h-px w-full bg-cotton/15">
              <motion.div
                className="h-full bg-cherry-glow"
                animate={{ width: `${count}%` }}
                transition={{ ease: "linear", duration: 0.15 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
