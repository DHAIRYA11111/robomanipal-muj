import { STATS } from "@/data/site";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Reveal from "@/components/ui/Reveal";
import { pad } from "@/lib/utils";

export default function Stats() {
  return (
    <section className="container-wide py-24 md:py-32">
      <Reveal className="mb-14 flex items-center gap-3">
        <span className="h-px w-8 bg-cherry-glow/60" />
        <span className="eyebrow">By The Numbers</span>
      </Reveal>

      <div className="grid grid-cols-1 gap-px overflow-hidden border border-cotton/10 bg-cotton/10 sm:grid-cols-3">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className="group relative bg-noir-900 p-8 transition-colors duration-500 hover:bg-noir-800 md:p-10"
          >
            <span className="font-mono text-xs text-cotton/30">{pad(i + 1)}</span>
            <div className="mt-6 font-display text-5xl font-bold leading-none tracking-tight text-cotton md:text-6xl">
              <AnimatedCounter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-4 h-px w-10 bg-cherry-glow/60 transition-all duration-500 group-hover:w-16" />
            <p className="mt-4 max-w-[14rem] text-sm leading-snug text-cotton/55">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
