"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

/**
 * Route-change reveal. A curtain covers the viewport on arrival and lifts away,
 * uncovering the freshly mounted page. Pointer-events are disabled so it never
 * blocks interaction, and it sits below the cursor + loading layers.
 */
export default function PageTransition() {
  const pathname = usePathname();
  const ease: [number, number, number, number] = [0.76, 0, 0.24, 1];

  return (
    <div className="pointer-events-none fixed inset-0 z-[9000]" aria-hidden>
      <motion.div
        key={pathname}
        className="absolute inset-0 origin-top"
        style={{
          background: "linear-gradient(180deg, #5B0300 0%, #821010 100%)",
        }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.75, ease }}
      >
        <div className="absolute bottom-0 left-0 h-px w-full bg-cherry-glow" />
      </motion.div>
    </div>
  );
}
