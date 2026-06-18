import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

type Props = {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Reveal>
        <div
          className={cn(
            "mb-5 flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          {index && (
            <span className="font-mono text-xs text-cherry-glow">/{index}</span>
          )}
          <span className="h-px w-8 bg-cherry-glow/60" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="text-fluid-md font-bold uppercase leading-[0.95] tracking-tight">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-6 text-base leading-relaxed text-cotton/65 md:text-lg",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
