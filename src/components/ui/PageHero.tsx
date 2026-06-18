import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

type Props = {
  kicker?: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
};

export default function PageHero({
  kicker,
  eyebrow,
  title,
  description,
  className,
}: Props) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-cotton/10 pb-16 pt-36 md:pb-24 md:pt-48",
        className,
      )}
    >
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="glow-cherry pointer-events-none absolute -left-1/4 top-0 h-[60vh] w-[60vh] blur-3xl opacity-50" />

      <div className="container-wide relative">
        <Reveal className="mb-6 flex items-center gap-3">
          {kicker && (
            <span className="font-mono text-xs text-cherry-glow">{kicker}</span>
          )}
          <span className="h-px w-10 bg-cherry-glow/60" />
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="max-w-5xl text-fluid-lg font-bold uppercase leading-[0.85] tracking-tight">
            {title}
          </h1>
        </Reveal>

        {description && (
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-cotton/65 md:text-xl">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
