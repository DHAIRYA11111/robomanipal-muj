"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ROBOTS } from "@/data/robots";
import { PROJECTS } from "@/data/projects";
import RobotCard from "@/components/cards/RobotCard";
import ProjectCard from "@/components/cards/ProjectCard";
import ResearchComingSoon from "@/components/work/ResearchComingSoon";
import { cn } from "@/lib/utils";

type TabId = "robots" | "projects" | "research";

const TABS: { id: TabId; label: string; count: number | string }[] = [
  { id: "robots", label: "Robots", count: ROBOTS.length },
  { id: "projects", label: "Projects", count: PROJECTS.length },
  { id: "research", label: "Research Papers", count: "Soon" },
];

export default function WorkView() {
  const [tab, setTab] = useState<TabId>("robots");

  useEffect(() => {
    const apply = () => {
      const h = window.location.hash.replace("#", "");
      if (h === "robots" || h === "projects" || h === "research") setTab(h);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const select = (id: TabId) => {
    setTab(id);
    if (typeof history !== "undefined")
      history.replaceState(null, "", `#${id}`);
  };

  return (
    <section className="container-wide py-16 md:py-20">
      {/* tabs */}
      <div className="flex flex-wrap gap-x-10 gap-y-4 border-b border-cotton/10 pb-1">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => select(t.id)}
            className="group relative pb-4 text-left"
          >
            <span className="flex items-baseline gap-2">
              <span
                className={cn(
                  "font-display text-2xl font-bold uppercase tracking-tight transition-colors md:text-4xl",
                  tab === t.id
                    ? "text-cotton"
                    : "text-cotton/35 group-hover:text-cotton/70",
                )}
              >
                {t.label}
              </span>
              <span className="font-mono text-xs text-cherry-glow">
                {t.count}
              </span>
            </span>
            {tab === t.id && (
              <motion.span
                layoutId="work-underline"
                className="absolute -bottom-px left-0 h-0.5 w-full bg-cherry-glow"
              />
            )}
          </button>
        ))}
      </div>

      {/* content */}
      <div className="mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {tab === "robots" && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {ROBOTS.map((r) => (
                  <RobotCard key={r.slug} robot={r} />
                ))}
              </div>
            )}
            {tab === "projects" && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
              </div>
            )}
            {tab === "research" && (
              <ResearchComingSoon />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
