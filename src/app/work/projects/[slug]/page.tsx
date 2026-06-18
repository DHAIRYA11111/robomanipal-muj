import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Cpu,
  Wifi,
  BrainCircuit,
  Cog,
  FlaskConical,
  ArrowLeft,
  ArrowRight,
  Check,
  Zap,
} from "lucide-react";
import { PROJECTS, getProject } from "@/data/projects";
import Backlink from "@/components/detail/Backlink";
import Reveal from "@/components/ui/Reveal";

const ICONS = {
  "Embedded Systems": Cpu,
  IoT: Wifi,
  "AI Applications": BrainCircuit,
  Automation: Cog,
  "Robotics Research": FlaskConical,
} as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Project Not Found" };
  return { title: project.title, description: project.summary };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const Icon = ICONS[project.category] ?? Cpu;
  const i = PROJECTS.findIndex((p) => p.slug === project.slug);
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];

  return (
    <article>
      {/* hero */}
      <section className="relative overflow-hidden border-b border-cotton/10 pb-16 pt-32 md:pt-40">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="glow-cherry pointer-events-none absolute -left-1/4 top-0 h-[60vh] w-[60vh] blur-3xl opacity-40" />

        <div className="container-wide relative">
          <Backlink href="/work#projects" label="All Projects" />

          <Reveal className="mt-10 flex flex-wrap items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cherry-glow/40 text-cherry-glow">
              <Icon className="h-5 w-5" strokeWidth={1.4} />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cherry-glow">
              {project.category}
            </span>
            <span className="h-1 w-1 rounded-full bg-cotton/30" />
            <span className="font-mono text-xs tracking-[0.2em] text-cotton/45">
              {project.year}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-7 max-w-4xl text-fluid-md font-bold uppercase leading-[0.9] tracking-tight">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cotton/70 md:text-xl">
              {project.summary}
            </p>
          </Reveal>
        </div>
      </section>

      {/* body */}
      <section className="container-wide grid gap-14 py-20 md:py-28 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <Reveal className="eyebrow mb-6">Overview</Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-cotton/75">
            {project.overview.map((p, idx) => (
              <Reveal key={idx} delay={idx * 0.04}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="eyebrow mb-6 mt-16">Key Features</Reveal>
          <ul className="space-y-4">
            {project.features.map((f, idx) => (
              <Reveal key={idx} delay={idx * 0.04}>
                <li className="flex items-start gap-4 border-b border-cotton/10 pb-4">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-cherry-glow" />
                  <span className="text-cotton/80">{f}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-12">
            <div className="relative overflow-hidden border border-cherry-glow/30 bg-noir-800/40 p-8">
              <div className="glow-cherry absolute -right-1/4 -top-1/4 h-1/2 w-1/2 opacity-50 blur-2xl" />
              <div className="relative flex items-start gap-4">
                <Zap className="mt-1 h-6 w-6 shrink-0 text-cherry-glow" />
                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-cherry-glow">
                    Outcome
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-cotton/85">
                    {project.outcome}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <aside className="space-y-12">
          <div>
            <h3 className="eyebrow mb-5">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-cotton/15 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-cotton/65"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="eyebrow mb-5">Built By</h3>
            <div className="flex flex-wrap gap-2">
              {project.team.map((t) => (
                <Link
                  key={t}
                  href="/team"
                  className="rounded-full border border-cherry-glow/30 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-cherry-glow/90 transition-colors hover:bg-cherry-glow/10"
                >
                  {t}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>

      {/* prev / next */}
      <nav className="grid border-t border-cotton/10 sm:grid-cols-2">
        <Link
          href={`/work/projects/${prev.slug}`}
          className="group flex items-center gap-4 border-b border-cotton/10 px-6 py-10 transition-colors hover:bg-noir-800/40 sm:border-b-0 sm:border-r md:px-12"
        >
          <ArrowLeft className="h-5 w-5 text-cotton/40 transition-all group-hover:-translate-x-1 group-hover:text-cherry-glow" />
          <span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-cotton/40">
              Previous
            </span>
            <span className="font-display text-lg font-bold uppercase tracking-tight transition-colors group-hover:text-cherry-glow">
              {prev.title}
            </span>
          </span>
        </Link>
        <Link
          href={`/work/projects/${next.slug}`}
          className="group flex items-center justify-end gap-4 px-6 py-10 text-right transition-colors hover:bg-noir-800/40 md:px-12"
        >
          <span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-cotton/40">
              Next
            </span>
            <span className="font-display text-lg font-bold uppercase tracking-tight transition-colors group-hover:text-cherry-glow">
              {next.title}
            </span>
          </span>
          <ArrowRight className="h-5 w-5 text-cotton/40 transition-all group-hover:translate-x-1 group-hover:text-cherry-glow" />
        </Link>
      </nav>
    </article>
  );
}
