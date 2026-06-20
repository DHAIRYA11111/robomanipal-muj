import type { Metadata } from "next";
import {
  ACHIEVEMENTS,
  ACHIEVEMENT_CATEGORIES,
} from "@/data/achievements";
import { ROBOTS } from "@/data/robots";
import { MEMBERS } from "@/data/team";
import AchievementTile from "@/components/cards/AchievementTile";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { pad } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Competition wins from RoboManipal MUJ.",
};

const COUNTERS = [
  { value: ACHIEVEMENTS.length, suffix: "", label: "Competition Wins" },
  {
    value: new Set(ACHIEVEMENTS.map((achievement) => achievement.year)).size,
    suffix: "",
    label: "Years Recorded",
  },
  { value: ROBOTS.length, suffix: "", label: "Robotic Platforms" },
  { value: MEMBERS.length, suffix: "", label: "Team Members" },
];

export default function AchievementsPage() {
  const timeline = [...ACHIEVEMENTS].sort((a, b) => a.year - b.year);

  return (
    <>
      <PageHero
        kicker="/ 05"
        eyebrow="Achievements"
        title={
          <>
            Proof on the
            <br />
            <span className="text-cherry-glow">podium.</span>
          </>
        }
        description="A record of RoboManipal's competition wins."
      />

      {/* counters */}
      <section className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-2 gap-px overflow-hidden border border-cotton/10 bg-cotton/10 md:grid-cols-4">
          {COUNTERS.map((c, i) => (
            <div key={c.label} className="bg-noir-900 p-7 md:p-9">
              <span className="font-mono text-xs text-cotton/30">
                {pad(i + 1)}
              </span>
              <div className="mt-5 font-display text-5xl font-bold tracking-tight text-cherry-glow md:text-6xl">
                <AnimatedCounter value={c.value} suffix={c.suffix} />
              </div>
              <p className="mt-3 text-sm text-cotton/55">{c.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* tiles by category */}
      {ACHIEVEMENT_CATEGORIES.map((cat, ci) => {
        const items = ACHIEVEMENTS.filter((a) => a.category === cat);
        if (items.length === 0) return null;
        return (
          <section
            key={cat}
            className={
              ci % 2 === 1
                ? "relative border-y border-cotton/10 bg-noir-800/30"
                : ""
            }
          >
            <div className="container-wide py-20 md:py-24">
              <SectionHeading
                index={pad(ci + 1)}
                eyebrow={`${items.length} ${items.length === 1 ? "Entry" : "Entries"}`}
                title={cat}
                className="mb-12"
              />
              <div className="grid gap-6 md:grid-cols-2">
                {items.map((a, i) => (
                  <Reveal key={a.slug} delay={i * 0.06}>
                    <AchievementTile achievement={a} index={i + 1} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* chronological timeline */}
      <section className="container-wide py-24 md:py-32">
        <SectionHeading
          eyebrow="The Record"
          title={
            <>
              A timeline of <span className="text-cherry-glow">wins.</span>
            </>
          }
          className="mb-16"
        />
        <div className="relative">
          <div className="absolute left-[7px] top-0 h-full w-px bg-cotton/10 md:left-[120px]" />
          <div className="space-y-10">
            {timeline.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.03}>
                <div className="flex gap-6 md:gap-12">
                  <div className="hidden w-[120px] shrink-0 md:block">
                    <span className="font-display text-2xl font-bold text-cherry-glow">
                      {a.year}
                    </span>
                  </div>
                  <div className="relative pl-8 md:pl-12">
                    <span className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-cherry-glow bg-noir-900 md:-left-[7px]" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-cotton/40 md:hidden">
                      {a.year} · {a.position}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-bold uppercase tracking-tight md:mt-0">
                      {a.event}
                    </h3>
                    <p className="mt-2 max-w-2xl text-cotton/60">{a.summary}</p>
                    <span className="mt-2 hidden font-mono text-[11px] uppercase tracking-[0.18em] text-cherry-glow/80 md:inline-block">
                      {a.position} · {a.location}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
