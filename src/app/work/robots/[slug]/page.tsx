import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Goal,
  Route,
  Plane,
  Radar,
  Bot,
  Atom,
  ArrowLeft,
  ArrowRight,
  Check,
} from "lucide-react";
import { ROBOTS, getRobot } from "@/data/robots";
import Backlink from "@/components/detail/Backlink";
import Reveal from "@/components/ui/Reveal";
import CoreVisual from "@/components/ui/CoreVisual";

const ICONS = {
  "Robo Soccer": Goal,
  "Line Follower": Route,
  Drone: Plane,
  "Autonomous System": Radar,
  Manipulator: Bot,
  Experimental: Atom,
} as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return ROBOTS.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const robot = getRobot(params.slug);
  if (!robot) return { title: "Robot Not Found" };
  return { title: robot.name, description: robot.summary };
}

export default function RobotDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const robot = getRobot(params.slug);
  if (!robot) notFound();

  const Icon = ICONS[robot.category] ?? Bot;
  const i = ROBOTS.findIndex((r) => r.slug === robot.slug);
  const prev = ROBOTS[(i - 1 + ROBOTS.length) % ROBOTS.length];
  const next = ROBOTS[(i + 1) % ROBOTS.length];

  return (
    <article>
      {/* hero */}
      <section className="relative overflow-hidden border-b border-cotton/10 pb-16 pt-32 md:pt-40">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="glow-cherry pointer-events-none absolute -right-1/4 top-0 h-[70vh] w-[70vh] blur-3xl opacity-40" />

        <div className="container-wide relative">
          <Backlink href="/work#robots" label="All Robots" />

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <Reveal className="mb-5 flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-cherry-glow">
                  <Icon className="h-4 w-4" /> {robot.category}
                </span>
                <span className="h-1 w-1 rounded-full bg-cotton/30" />
                <span className="font-mono text-xs tracking-[0.2em] text-cotton/45">
                  {robot.codename}
                </span>
                <span className="rounded-full border border-cotton/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-cotton/60">
                  {robot.status}
                </span>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="text-fluid-lg font-bold uppercase leading-[0.85] tracking-tight">
                  {robot.name}
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-cotton/70 md:text-xl">
                  {robot.tagline}
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-10 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-sm border border-cotton/10 bg-cotton/10">
                  {robot.metrics.map((m) => (
                    <div key={m.label} className="bg-noir-900 p-5">
                      <div className="font-display text-2xl font-bold tracking-tight text-cherry-glow md:text-3xl">
                        {m.value}
                      </div>
                      <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-cotton/50">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="relative mx-auto aspect-square w-full max-w-md">
                <CoreVisual />
                <Icon
                  className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-cotton/80"
                  strokeWidth={1}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* body */}
      <section className="container-wide grid gap-14 py-20 md:py-28 lg:grid-cols-[1.3fr_0.7fr]">
        {/* left: overview + highlights */}
        <div>
          <Reveal className="eyebrow mb-6">Overview</Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-cotton/75">
            {robot.overview.map((p, idx) => (
              <Reveal key={idx} delay={idx * 0.04}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="eyebrow mb-6 mt-16">Highlights</Reveal>
          <ul className="space-y-4">
            {robot.highlights.map((h, idx) => (
              <Reveal key={idx} delay={idx * 0.04}>
                <li className="flex items-start gap-4 border-b border-cotton/10 pb-4">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-cherry-glow" />
                  <span className="text-cotton/80">{h}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* right: specs / stack / teams */}
        <aside className="space-y-12">
          <div>
            <h3 className="eyebrow mb-5">Specifications</h3>
            <dl className="overflow-hidden border border-cotton/10">
              {robot.specs.map((s, idx) => (
                <div
                  key={s.label}
                  className={`flex items-center justify-between gap-4 px-5 py-4 text-sm ${
                    idx % 2 === 0 ? "bg-noir-800/40" : "bg-noir-900"
                  }`}
                >
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-cotton/45">
                    {s.label}
                  </dt>
                  <dd className="text-right font-medium text-cotton/85">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="eyebrow mb-5">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {robot.stack.map((t) => (
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
              {robot.team.map((t) => (
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
          href={`/work/robots/${prev.slug}`}
          className="group flex items-center gap-4 border-b border-cotton/10 px-6 py-10 transition-colors hover:bg-noir-800/40 sm:border-b-0 sm:border-r md:px-12"
        >
          <ArrowLeft className="h-5 w-5 text-cotton/40 transition-all group-hover:-translate-x-1 group-hover:text-cherry-glow" />
          <span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-cotton/40">
              Previous
            </span>
            <span className="font-display text-lg font-bold uppercase tracking-tight transition-colors group-hover:text-cherry-glow">
              {prev.name}
            </span>
          </span>
        </Link>
        <Link
          href={`/work/robots/${next.slug}`}
          className="group flex items-center justify-end gap-4 px-6 py-10 text-right transition-colors hover:bg-noir-800/40 md:px-12"
        >
          <span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-cotton/40">
              Next
            </span>
            <span className="font-display text-lg font-bold uppercase tracking-tight transition-colors group-hover:text-cherry-glow">
              {next.name}
            </span>
          </span>
          <ArrowRight className="h-5 w-5 text-cotton/40 transition-all group-hover:translate-x-1 group-hover:text-cherry-glow" />
        </Link>
      </nav>
    </article>
  );
}
