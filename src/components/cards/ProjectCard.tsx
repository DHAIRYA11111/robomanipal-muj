import Link from "next/link";
import { Cpu, Wifi, BrainCircuit, Cog, FlaskConical, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

const ICONS = {
  "Embedded Systems": Cpu,
  IoT: Wifi,
  "AI Applications": BrainCircuit,
  Automation: Cog,
  "Robotics Research": FlaskConical,
} as const;

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = ICONS[project.category] ?? Cpu;

  return (
    <Link
      href={`/work/projects/${project.slug}`}
      data-cursor="Open"
      className="group relative flex flex-col overflow-hidden border border-cotton/10 bg-noir-800/40 p-7 transition-all duration-500 hover:border-cherry-glow/50 hover:bg-noir-700/40"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cotton/15 text-cotton/60 transition-all duration-500 group-hover:border-cherry-glow/60 group-hover:text-cherry-glow">
          <Icon className="h-5 w-5" strokeWidth={1.4} />
        </span>
        <ArrowUpRight className="h-5 w-5 text-cotton/30 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cherry-glow" />
      </div>

      <span className="eyebrow mt-6">{project.category}</span>
      <h3 className="mt-2 font-display text-xl font-bold uppercase leading-tight tracking-tight transition-colors group-hover:text-cherry-glow">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-cotton/55">
        {project.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded-full border border-cotton/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-cotton/50"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}
