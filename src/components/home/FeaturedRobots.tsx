import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ROBOTS } from "@/data/robots";
import RobotCard from "@/components/cards/RobotCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function FeaturedRobots() {
  const featured = ROBOTS.slice(0, 3);
  return (
    <section id="featured-robots" className="container-wide py-24 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          index="01"
          eyebrow="Featured Robots"
          title={
            <>
              Machines that <span className="text-cherry-glow">think.</span>
            </>
          }
          description="Autonomous platforms engineered, fabricated and tuned in-house — each built to compete, explore or push a research question."
        />
        <Reveal>
          <Link
            href="/work#robots"
            className="link-underline inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-cotton/70 hover:text-cherry-glow"
          >
            All Robots <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {featured.map((r, i) => (
          <Reveal key={r.slug} delay={i * 0.08}>
            <RobotCard robot={r} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
