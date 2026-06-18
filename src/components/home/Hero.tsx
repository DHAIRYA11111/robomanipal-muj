"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import CoreVisual from "@/components/ui/CoreVisual";
import Magnetic from "@/components/ui/Magnetic";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { damping: 30, stiffness: 120 });
  const sy = useSpring(py, { damping: 30, stiffness: 120 });

  const onMove = (e: React.MouseEvent) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    px.set(x * 40);
    py.set(y * 40);
  };

  return (
    <section
      onMouseMove={onMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* backdrop layers */}
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="glow-cherry pointer-events-none absolute -right-1/4 top-1/2 h-[100vh] w-[100vh] -translate-y-1/2 blur-2xl" />

      {/* animated core, right side, with parallax */}
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none absolute right-[-30%] top-1/2 h-[120vw] w-[120vw] -translate-y-1/2 opacity-70 sm:right-[-15%] sm:h-[90vh] sm:w-[90vh] lg:right-[2%] lg:h-[105vh] lg:w-[105vh] lg:opacity-100"
      >
        <CoreVisual />
      </motion.div>

      {/* HUD frame */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
        <div className="container-wide flex h-full flex-col justify-between py-28">
          <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-cotton/40">
            <span>EST. 2021</span>
            <span>MUJ // 26.84°N 75.56°E</span>
          </div>
          <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-cotton/40">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cherry-glow" />
              Systems Online
            </span>
            <span>ACM SIGBED Student Chapter</span>
          </div>
        </div>
      </div>

      {/* content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-wide relative z-20 pt-24"
      >
        <motion.div variants={item} className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-cherry-glow" />
          <span className="eyebrow">
            Student-Driven Robotics &amp; Research Community
          </span>
        </motion.div>

        <h1 className="font-display font-bold uppercase leading-[0.82] tracking-tight">
          <motion.span variants={item} className="block text-fluid-lg">
            RoboManipal
          </motion.span>
          <motion.span
            variants={item}
            className="block text-fluid-lg text-outline"
          >
            MUJ
          </motion.span>
        </h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-lg leading-relaxed text-cotton/75 md:text-2xl"
        >
          Where ideas become{" "}
          <span className="text-cherry-glow">intelligent machines.</span>
        </motion.p>

        <motion.p
          variants={item}
          className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-cotton/45"
        >
          Managed by ACM SIGBED, MUJ
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <Magnetic>
            <Link
              href="/work"
              data-cursor="View"
              className="btn btn-primary"
            >
              Explore Our Work <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link href="/contact" className="btn btn-ghost">
              Join The Community
            </Link>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-cotton/40"
      >
        Scroll
        <ArrowDown className="h-4 w-4 animate-bounce text-cherry-glow" />
      </motion.div>
    </section>
  );
}
