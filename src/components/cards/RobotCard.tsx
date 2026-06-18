import Link from "next/link";
import { Goal, Route, Plane, Radar, Bot, Atom, ArrowUpRight } from "lucide-react";
import type { Robot } from "@/data/robots";

const ICONS = {
  "Robo Soccer": Goal,
  "Line Follower": Route,
  Drone: Plane,
  "Autonomous System": Radar,
  Manipulator: Bot,
  Experimental: Atom,
} as const;

export default function RobotCard({ robot }: { robot: Robot }) {
  const Icon = ICONS[robot.category] ?? Bot;
  const active =
    robot.status === "Active" || robot.status === "Competition Ready";

  return (
    <Link
      href={`/work/robots/${robot.slug}`}
      data-cursor="Open"
      className="group relative flex flex-col overflow-hidden border border-cotton/10 bg-noir-800/40 transition-all duration-500 hover:border-cherry-glow/50 hover:bg-noir-700/40"
    >
      {/* scan line on hover */}
      <span className="absolute left-0 top-0 z-20 h-px w-full bg-cherry-glow/70 transition-all duration-[1100ms] ease-smooth group-hover:top-full" />

      {/* visual */}
      <div className="dot-bg relative flex aspect-[4/3] items-center justify-center overflow-hidden">
        <div className="glow-cherry absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <Icon
          className="h-20 w-20 text-cotton/25 transition-all duration-500 group-hover:scale-110 group-hover:text-cherry-glow"
          strokeWidth={1}
        />
        <span className="absolute left-4 top-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-cotton/50">
          <span
            className={`h-1.5 w-1.5 rounded-full ${active ? "animate-pulse bg-cherry-glow" : "bg-cotton/30"}`}
          />
          {robot.status}
        </span>
        <span className="absolute right-4 top-4 font-mono text-[10px] tracking-[0.2em] text-cotton/40">
          {robot.codename}
        </span>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col p-6">
        <span className="eyebrow">{robot.category}</span>
        <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight transition-colors group-hover:text-cherry-glow">
          {robot.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-cotton/55">
          {robot.tagline}
        </p>
        <div className="mt-6 flex items-center justify-between border-t border-cotton/10 pt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-cotton/45">
          <span>{robot.year}</span>
          <span className="flex items-center gap-1.5 text-cotton/70 transition-colors group-hover:text-cherry-glow">
            View
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
