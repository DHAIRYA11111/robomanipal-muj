import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ACHIEVEMENTS } from "@/data/achievements";
import AchievementTile from "@/components/cards/AchievementTile";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function AchievementShowcase() {
  const featured = ACHIEVEMENTS.slice(0, 4);
  return (
    <section
      id="achievements"
      className="relative border-y border-cotton/10 bg-noir-800/30"
    >
      <div className="container-wide relative py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="04"
            eyebrow="Achievement Showcase"
            title={
              <>
                Built to <span className="text-cherry-glow">win.</span>
              </>
            }
            description="A selection of competition wins that mark RoboManipal's journey beyond the lab."
          />
          <Reveal>
            <Link
              href="/achievements"
              className="link-underline inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-cotton/70 hover:text-cherry-glow"
            >
              All Achievements <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {featured.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.06}>
              <AchievementTile achievement={a} index={i + 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
