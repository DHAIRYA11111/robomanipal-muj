import Link from "next/link";
import { FileText, Download, ArrowRight } from "lucide-react";
import type { Paper } from "@/data/research";

export default function PaperCard({ paper }: { paper: Paper }) {
  return (
    <article className="group relative flex flex-col border border-cotton/10 bg-noir-800/40 p-7 transition-all duration-500 hover:border-cherry-glow/40 md:p-9">
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-cotton/45">
        <span className="flex items-center gap-2 text-cherry-glow">
          <FileText className="h-3.5 w-3.5" /> {paper.area}
        </span>
        <span>{paper.year}</span>
      </div>

      <h3 className="mt-5 font-display text-xl font-bold uppercase leading-tight tracking-tight transition-colors group-hover:text-cherry-glow md:text-2xl">
        <Link href={`/work/research/${paper.slug}`} data-cursor="Read">
          {paper.title}
        </Link>
      </h3>

      <p className="mt-3 font-mono text-xs text-cotton/45">
        {paper.authors.join(" · ")}
      </p>

      <p className="mt-5 flex-1 text-sm leading-relaxed text-cotton/60">
        {paper.abstractPreview}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {paper.keywords.slice(0, 4).map((k) => (
          <span
            key={k}
            className="rounded-full border border-cotton/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-cotton/45"
          >
            {k}
          </span>
        ))}
      </div>

      <div className="mt-7 flex items-center gap-5 border-t border-cotton/10 pt-5">
        <Link
          href={`/work/research/${paper.slug}`}
          data-cursor="Read"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-cotton/80 transition-colors hover:text-cherry-glow"
        >
          Read More <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <a
          href={paper.pdf}
          download
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-cotton/50 transition-colors hover:text-cotton"
        >
          <Download className="h-3.5 w-3.5" /> PDF
        </a>
      </div>
    </article>
  );
}
