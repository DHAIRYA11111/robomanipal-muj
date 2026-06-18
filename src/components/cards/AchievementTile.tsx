import Link from "next/link";
import { Trophy, Medal, GraduationCap, FlaskConical, Sparkles, ArrowUpRight } from "lucide-react";
import type { Achievement } from "@/data/achievements";
import { pad } from "@/lib/utils";

const ICONS = {
  "Competition Won": Trophy,
  "Competition Participated": Medal,
  "Workshop Conducted": GraduationCap,
  "Research Achievement": FlaskConical,
  "Event Highlight": Sparkles,
} as const;

export default function AchievementTile({
  achievement,
  index,
}: {
  achievement: Achievement;
  index: number;
}) {
  const Icon = ICONS[achievement.category] ?? Trophy;
  const won = achievement.category === "Competition Won";

  return (
    <Link
      href={`/achievements/${achievement.slug}`}
      data-cursor="Open"
      className="group relative flex min-h-[260px] flex-col justify-between overflow-hidden border border-cotton/10 bg-noir-800/40 p-7 transition-all duration-500 hover:border-cherry-glow/50 hover:bg-noir-700/40 md:p-9"
    >
      <div className="glow-cherry absolute -right-1/4 -top-1/4 h-1/2 w-1/2 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between">
        <span className="font-mono text-xs text-cotton/30">{pad(index)}</span>
        <Icon
          className={`h-9 w-9 transition-colors duration-500 ${
            won ? "text-cherry-glow" : "text-cotton/40 group-hover:text-cherry-glow"
          }`}
          strokeWidth={1.2}
        />
      </div>

      <div className="relative">
        <span className="eyebrow">{achievement.category}</span>
        <h3 className="mt-3 font-display text-2xl font-bold uppercase leading-[0.98] tracking-tight transition-colors group-hover:text-cherry-glow md:text-3xl">
          {achievement.event}
        </h3>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-cotton/50">
          <span className="text-cherry-glow">{achievement.position}</span>
          <span>{achievement.year}</span>
          <span>{achievement.location}</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
