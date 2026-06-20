import { FlaskConical } from "lucide-react";

export default function ResearchComingSoon() {
  return (
    <div className="relative overflow-hidden border border-cotton/10 bg-noir-800/40 p-8 md:p-12">
      <div className="dot-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="glow-cherry pointer-events-none absolute -right-1/4 -top-1/3 h-72 w-72 blur-3xl opacity-60" />
      <div className="relative max-w-2xl">
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cherry-glow">
          <FlaskConical className="h-4 w-4" /> Research Papers
        </span>
        <h3 className="mt-6 font-display text-4xl font-bold uppercase leading-none tracking-tight md:text-6xl">
          Coming <span className="text-cherry-glow">soon.</span>
        </h3>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cotton/65 md:text-lg">
          Our research papers are being prepared for publication. Check back soon
          to explore the work.
        </p>
      </div>
    </div>
  );
}
