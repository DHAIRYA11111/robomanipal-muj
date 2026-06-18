import { cn } from "@/lib/utils";

/** Seamless scrolling ticker of words. Pure CSS (animate-marquee). */
export default function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const row = [...items, ...items];
  return (
    <div
      className={cn(
        "relative flex overflow-hidden border-y border-cotton/10 py-5",
        className,
      )}
    >
      <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={i}
            className="mx-8 flex items-center gap-8 font-display text-xl font-bold uppercase tracking-tight text-cotton/70"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-cherry-glow" />
          </span>
        ))}
      </div>
    </div>
  );
}
