import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PAPERS } from "@/data/research";
import PaperCard from "@/components/cards/PaperCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function ResearchHighlights() {
  const featured = PAPERS.slice(0, 2);
  return (
    <section id="research" className="container-wide py-24 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          index="03"
          eyebrow="Research Highlights"
          title={
            <>
              Questions worth <span className="text-cherry-glow">publishing.</span>
            </>
          }
          description="A research-first community. Our technical reports span aerial autonomy, embedded AI, swarms and learning."
        />
        <Reveal>
          <Link
            href="/work#research"
            className="link-underline inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-cotton/70 hover:text-cherry-glow"
          >
            All Papers <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <PaperCard paper={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
