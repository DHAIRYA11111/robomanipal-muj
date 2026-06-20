import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ResearchComingSoon from "@/components/work/ResearchComingSoon";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function ResearchHighlights() {
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
            description="Our research papers are in the works."
        />
        <Reveal>
          <Link
            href="/work#research"
            className="link-underline inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-cotton/70 hover:text-cherry-glow"
          >
            Research Papers <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>

        <Reveal className="mt-14">
          <ResearchComingSoon />
        </Reveal>
    </section>
  );
}
