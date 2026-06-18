import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";
import Reveal from "@/components/ui/Reveal";
import CoreVisual from "@/components/ui/CoreVisual";

export default function JoinUs() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="glow-cherry pointer-events-none absolute left-1/2 top-1/2 h-[90vh] w-[90vh] -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -right-1/3 top-1/2 hidden h-[80vh] w-[80vh] -translate-y-1/2 opacity-30 lg:block">
        <CoreVisual />
      </div>

      <div className="container-wide relative flex flex-col items-center py-28 text-center md:py-40">
        <Reveal className="eyebrow mb-6">Join RoboManipal</Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-fluid-lg font-bold uppercase leading-[0.85] tracking-tight">
            Build the
            <br />
            <span className="text-cherry-glow">future</span> with us
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-cotton/65 md:text-lg">
            Designers, coders, makers and researchers — RoboManipal is where ideas
            become intelligent machines. There's a seat at the bench for you.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Magnetic>
              <Link href="/contact" data-cursor="Join" className="btn btn-primary">
                Join The Community <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="/work" className="btn btn-ghost">
                Explore Our Work
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
