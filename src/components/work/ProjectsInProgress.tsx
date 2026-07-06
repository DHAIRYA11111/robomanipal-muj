import { Cog, Sparkles } from "lucide-react";

export default function ProjectsInProgress() {
  return (
    <div className="relative min-h-[24rem] overflow-hidden border border-cotton/10 bg-noir-800/40 p-8 md:p-12">
      <div className="dot-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="glow-cherry pointer-events-none absolute -right-1/4 -top-1/3 h-96 w-96 opacity-65 blur-3xl" />
      <div className="relative flex min-h-[18rem] max-w-2xl flex-col justify-center">
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cherry-glow">
          <Cog className="h-4 w-4 animate-spin-slow" /> Projects
        </span>
        <h3 className="mt-6 font-display text-4xl font-bold uppercase leading-none tracking-tight md:text-6xl">
          In <span className="text-cherry-glow">progress.</span>
        </h3>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cotton/65 md:text-lg">
          The team is documenting active builds and validating results before publishing them here. New project stories are on the way.
        </p>
        <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-cotton/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-cotton/45">
          <Sparkles className="h-3.5 w-3.5 text-cherry-glow" /> Updates coming soon
        </span>
      </div>
    </div>
  );
}
