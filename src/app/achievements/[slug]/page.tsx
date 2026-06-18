import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Trophy,
  Medal,
  GraduationCap,
  FlaskConical,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Star,
  MapPin,
} from "lucide-react";
import { ACHIEVEMENTS, getAchievement } from "@/data/achievements";
import Backlink from "@/components/detail/Backlink";
import Reveal from "@/components/ui/Reveal";
import { pad } from "@/lib/utils";

const ICONS = {
  "Competition Won": Trophy,
  "Competition Participated": Medal,
  "Workshop Conducted": GraduationCap,
  "Research Achievement": FlaskConical,
  "Event Highlight": Sparkles,
} as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return ACHIEVEMENTS.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const a = getAchievement(params.slug);
  if (!a) return { title: "Achievement Not Found" };
  return { title: `${a.event} — ${a.position}`, description: a.summary };
}

export default function AchievementDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const a = getAchievement(params.slug);
  if (!a) notFound();

  const Icon = ICONS[a.category] ?? Trophy;
  const i = ACHIEVEMENTS.findIndex((x) => x.slug === a.slug);
  const prev = ACHIEVEMENTS[(i - 1 + ACHIEVEMENTS.length) % ACHIEVEMENTS.length];
  const next = ACHIEVEMENTS[(i + 1) % ACHIEVEMENTS.length];

  return (
    <article>
      {/* hero */}
      <section className="relative overflow-hidden border-b border-cotton/10 pb-16 pt-32 md:pt-40">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="glow-cherry pointer-events-none absolute -right-1/4 top-0 h-[70vh] w-[70vh] blur-3xl opacity-40" />

        <div className="container-wide relative">
          <Backlink href="/achievements" label="All Achievements" />

          <Reveal className="mt-10 flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-cherry-glow">
              <Icon className="h-4 w-4" /> {a.category}
            </span>
            <span className="h-1 w-1 rounded-full bg-cotton/30" />
            <span className="font-mono text-xs tracking-[0.2em] text-cotton/45">
              {a.year}
            </span>
            <span className="flex items-center gap-1.5 font-mono text-xs tracking-[0.15em] text-cotton/45">
              <MapPin className="h-3.5 w-3.5" /> {a.location}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-7 max-w-4xl text-fluid-md font-bold uppercase leading-[0.9] tracking-tight">
              {a.event}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-7 inline-flex items-center gap-3 border border-cherry-glow/40 bg-cherry/10 px-5 py-3">
              <Star className="h-5 w-5 text-cherry-glow" />
              <span className="font-display text-xl font-bold uppercase tracking-tight text-cherry-glow">
                {a.position}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cotton/70 md:text-xl">
              {a.summary}
            </p>
          </Reveal>
        </div>
      </section>

      {/* body */}
      <section className="container-wide grid gap-14 py-20 md:py-28 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <Reveal className="eyebrow mb-6">The Story</Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-cotton/75">
            {a.details.map((p, idx) => (
              <Reveal key={idx} delay={idx * 0.04}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <aside>
          <h3 className="eyebrow mb-5">Highlights</h3>
          <ul className="space-y-4">
            {a.highlights.map((h, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <li className="flex items-start gap-3 border-b border-cotton/10 pb-4">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cherry-glow" />
                  <span className="text-cotton/80">{h}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </aside>
      </section>

      {/* event gallery (placeholder visuals — swap for real photos in /public) */}
      <section className="container-wide pb-24 md:pb-32">
        <Reveal className="eyebrow mb-8">Event Gallery</Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((g) => (
            <Reveal key={g} delay={g * 0.06}>
              <div className="dot-bg group relative flex aspect-video items-center justify-center overflow-hidden border border-cotton/10">
                <div className="glow-cherry absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-70" />
                <Icon
                  className="h-12 w-12 text-cotton/25 transition-transform duration-500 group-hover:scale-110"
                  strokeWidth={1}
                />
                <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-cotton/45">
                  Capture / {pad(g + 1)}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* prev / next */}
      <nav className="grid border-t border-cotton/10 sm:grid-cols-2">
        <Link
          href={`/achievements/${prev.slug}`}
          className="group flex items-center gap-4 border-b border-cotton/10 px-6 py-10 transition-colors hover:bg-noir-800/40 sm:border-b-0 sm:border-r md:px-12"
        >
          <ArrowLeft className="h-5 w-5 shrink-0 text-cotton/40 transition-all group-hover:-translate-x-1 group-hover:text-cherry-glow" />
          <span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-cotton/40">
              Previous
            </span>
            <span className="line-clamp-1 font-display text-base font-bold uppercase tracking-tight transition-colors group-hover:text-cherry-glow">
              {prev.event}
            </span>
          </span>
        </Link>
        <Link
          href={`/achievements/${next.slug}`}
          className="group flex items-center justify-end gap-4 px-6 py-10 text-right transition-colors hover:bg-noir-800/40 md:px-12"
        >
          <span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-cotton/40">
              Next
            </span>
            <span className="line-clamp-1 font-display text-base font-bold uppercase tracking-tight transition-colors group-hover:text-cherry-glow">
              {next.event}
            </span>
          </span>
          <ArrowRight className="h-5 w-5 shrink-0 text-cotton/40 transition-all group-hover:translate-x-1 group-hover:text-cherry-glow" />
        </Link>
      </nav>
    </article>
  );
}
