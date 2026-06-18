"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { MEMBERS, TEAM_CATEGORIES, type TeamCategory } from "@/data/team";
import MemberCard from "@/components/cards/MemberCard";
import { cn } from "@/lib/utils";

type Filter = TeamCategory | "All";

export default function TeamView() {
  const [active, setActive] = useState<Filter>("All");
  const [q, setQ] = useState("");

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: MEMBERS.length };
    for (const cat of TEAM_CATEGORIES)
      c[cat] = MEMBERS.filter((m) => m.category === cat).length;
    return c;
  }, []);

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();
    return MEMBERS.filter((m) => {
      const catOk = active === "All" || m.category === active;
      const qOk =
        !qq ||
        m.name.toLowerCase().includes(qq) ||
        m.position.toLowerCase().includes(qq) ||
        m.bio.toLowerCase().includes(qq);
      return catOk && qOk;
    });
  }, [active, q]);

  const filters: Filter[] = ["All", ...TEAM_CATEGORIES];

  return (
    <section className="container-wide py-16 md:py-24">
      {/* controls */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-all duration-300",
                active === f
                  ? "border-cherry bg-cherry text-cotton"
                  : "border-cotton/15 text-cotton/60 hover:border-cotton/40 hover:text-cotton",
              )}
            >
              {f}
              <span className="ml-2 text-[10px] opacity-60">{counts[f]}</span>
            </button>
          ))}
        </div>

        <label className="relative flex w-full items-center lg:w-72">
          <Search className="pointer-events-none absolute left-4 h-4 w-4 text-cotton/40" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search members…"
            className="w-full rounded-full border border-cotton/15 bg-noir-800/60 py-2.5 pl-11 pr-4 font-mono text-xs uppercase tracking-[0.1em] text-cotton placeholder:text-cotton/30 focus:border-cherry-glow/60 focus:outline-none"
          />
        </label>
      </div>

      {/* grid */}
      <motion.div
        layout
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((m) => (
            <motion.div
              key={m.name}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <MemberCard member={m} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="py-24 text-center font-mono text-sm uppercase tracking-[0.2em] text-cotton/40">
          No members match your search.
        </div>
      )}
    </section>
  );
}
