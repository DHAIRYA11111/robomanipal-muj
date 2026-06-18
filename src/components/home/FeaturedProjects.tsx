import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "@/components/cards/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function FeaturedProjects() {
  const featured = PROJECTS.slice(0, 3);
  return (
    <section
      id="featured-projects"
      className="relative border-y border-cotton/10 bg-noir-800/30"
    >
      <div className="dot-bg pointer-events-none absolute inset-0 opacity-30" />
      <div className="container-wide relative py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="02"
            eyebrow="Featured Projects"
            title={
              <>
                Hardware that <span className="text-cherry-glow">ships.</span>
              </>
            }
            description="Embedded systems, IoT, AI and automation projects that move from whiteboard to working build."
          />
          <Reveal>
            <Link
              href="/work#projects"
              className="link-underline inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-cotton/70 hover:text-cherry-glow"
            >
              All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
