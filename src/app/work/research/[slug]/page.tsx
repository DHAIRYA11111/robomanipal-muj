import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Download, ArrowLeft, ArrowRight, FileText, Quote } from "lucide-react";
import { PAPERS, getPaper } from "@/data/research";
import Backlink from "@/components/detail/Backlink";
import Reveal from "@/components/ui/Reveal";

export const dynamicParams = false;

export function generateStaticParams() {
  return PAPERS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const paper = getPaper(params.slug);
  if (!paper) return { title: "Paper Not Found" };
  return { title: paper.title, description: paper.abstractPreview };
}

export default function PaperDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const paper = getPaper(params.slug);
  if (!paper) notFound();

  const i = PAPERS.findIndex((p) => p.slug === paper.slug);
  const prev = PAPERS[(i - 1 + PAPERS.length) % PAPERS.length];
  const next = PAPERS[(i + 1) % PAPERS.length];
  const citation = `${paper.authors.join(", ")} (${paper.year}). ${paper.title}. ${paper.venue}.`;

  return (
    <article>
      {/* hero */}
      <section className="relative overflow-hidden border-b border-cotton/10 pb-16 pt-32 md:pt-40">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="glow-cherry pointer-events-none absolute -right-1/4 top-0 h-[60vh] w-[60vh] blur-3xl opacity-40" />

        <div className="container-wide relative max-w-4xl">
          <Backlink href="/work#research" label="All Papers" />

          <Reveal className="mt-10 flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-cherry-glow">
              <FileText className="h-4 w-4" /> {paper.area}
            </span>
            <span className="h-1 w-1 rounded-full bg-cotton/30" />
            <span className="font-mono text-xs tracking-[0.2em] text-cotton/45">
              {paper.year}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-7 text-fluid-sm font-bold uppercase leading-[1.05] tracking-tight md:text-5xl">
              {paper.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-mono text-sm text-cotton/55">
              {paper.authors.join(" · ")}
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-cotton/40">
              {paper.venue}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href={paper.pdf}
              download
              data-cursor="PDF"
              className="btn btn-primary mt-9"
            >
              <Download className="h-4 w-4" /> Download PDF
            </a>
          </Reveal>
        </div>
      </section>

      {/* body */}
      <section className="container-wide grid gap-14 py-20 md:py-28 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <Reveal className="eyebrow mb-6">Abstract</Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-cotton/75">
            {paper.abstract.map((p, idx) => (
              <Reveal key={idx} delay={idx * 0.04}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <div className="relative border-l-2 border-cherry-glow/60 bg-noir-800/40 p-7">
              <Quote className="mb-3 h-5 w-5 text-cherry-glow" />
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-cotton/45">
                Cite This Work
              </h3>
              <p className="mt-3 font-mono text-sm leading-relaxed text-cotton/75">
                {citation}
              </p>
            </div>
          </Reveal>
        </div>

        <aside className="space-y-12">
          <div>
            <h3 className="eyebrow mb-5">Details</h3>
            <dl className="overflow-hidden border border-cotton/10">
              {[
                { k: "Year", v: String(paper.year) },
                { k: "Area", v: paper.area },
                { k: "Authors", v: String(paper.authors.length) },
                { k: "Venue", v: "Technical Report" },
              ].map((row, idx) => (
                <div
                  key={row.k}
                  className={`flex items-center justify-between gap-4 px-5 py-4 text-sm ${
                    idx % 2 === 0 ? "bg-noir-800/40" : "bg-noir-900"
                  }`}
                >
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-cotton/45">
                    {row.k}
                  </dt>
                  <dd className="text-right font-medium text-cotton/85">
                    {row.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="eyebrow mb-5">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {paper.keywords.map((k) => (
                <span
                  key={k}
                  className="rounded-full border border-cotton/15 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-cotton/65"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </section>

      {/* prev / next */}
      <nav className="grid border-t border-cotton/10 sm:grid-cols-2">
        <Link
          href={`/work/research/${prev.slug}`}
          className="group flex items-center gap-4 border-b border-cotton/10 px-6 py-10 transition-colors hover:bg-noir-800/40 sm:border-b-0 sm:border-r md:px-12"
        >
          <ArrowLeft className="h-5 w-5 shrink-0 text-cotton/40 transition-all group-hover:-translate-x-1 group-hover:text-cherry-glow" />
          <span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-cotton/40">
              Previous
            </span>
            <span className="line-clamp-1 font-display text-base font-bold uppercase tracking-tight transition-colors group-hover:text-cherry-glow">
              {prev.title}
            </span>
          </span>
        </Link>
        <Link
          href={`/work/research/${next.slug}`}
          className="group flex items-center justify-end gap-4 px-6 py-10 text-right transition-colors hover:bg-noir-800/40 md:px-12"
        >
          <span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-cotton/40">
              Next
            </span>
            <span className="line-clamp-1 font-display text-base font-bold uppercase tracking-tight transition-colors group-hover:text-cherry-glow">
              {next.title}
            </span>
          </span>
          <ArrowRight className="h-5 w-5 shrink-0 text-cotton/40 transition-all group-hover:translate-x-1 group-hover:text-cherry-glow" />
        </Link>
      </nav>
    </article>
  );
}
