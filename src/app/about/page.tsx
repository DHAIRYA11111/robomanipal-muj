import type { Metadata } from "next";
import Link from "next/link";
import {
  Lightbulb,
  Wrench,
  FlaskConical,
  Users,
  Compass,
  Target,
  ArrowUpRight,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Marquee from "@/components/ui/Marquee";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS } from "@/data/site";
import { pad } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who we are: the story, mission and values behind RoboManipal MUJ, the student-driven robotics & research community managed by ACM SIGBED.",
};

const VALUES = [
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We chase ideas others dismiss as impossible and turn them into working machines.",
  },
  {
    icon: Wrench,
    title: "Engineering Excellence",
    text: "Every bolt, line of code and control loop is held to a standard we'd put on a podium.",
  },
  {
    icon: FlaskConical,
    title: "Research First",
    text: "We don't just build — we ask why, measure rigorously, and publish what we learn.",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "Mechatronics, software and research engineers shipping as one team.",
  },
  {
    icon: Compass,
    title: "Curiosity",
    text: "A relentless need to understand how intelligent systems perceive, decide and act.",
  },
  {
    icon: Target,
    title: "Impact",
    text: "Work that reaches beyond the lab — competitions, the campus and the community.",
  },
];

const TIMELINE = [
  {
    year: "2021",
    title: "The Spark",
    text: "RoboManipal is founded under the ACM SIGBED Student Chapter — a handful of students, a shared bench and an outsized ambition.",
  },
  {
    year: "2022",
    title: "First Signals",
    text: "The community enters its first competitions, learning to build under pressure.",
  },
  {
    year: "2023",
    title: "Structure & Lab",
    text: "A dedicated robotics lab and the split into Robotics, Research and Development teams give the chapter its backbone.",
  },
  {
    year: "2024",
    title: "On The Podium",
    text: "First competition wins arrive, and a 150-strong bootcamp brings in the next generation of builders.",
  },
  {
    year: "2025",
    title: "Research-First",
    text: "A research symposium, autonomous soccer semi-finals and GPS-denied drone flight define a research-driven identity.",
  },
  {
    year: "2026",
    title: "Scaling Autonomy",
    text: "New robotic platforms come online as the community continues to grow.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="/ 01"
        eyebrow="About RoboManipal"
        title={
          <>
            Who <span className="text-cherry-glow">we are.</span>
          </>
        }
        description="A student-driven robotics & research community at Manipal University Jaipur, managed by the ACM SIGBED Student Chapter — engineering the machines of tomorrow, today."
      />

      {/* lead */}
      <section className="container-wide py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <span className="eyebrow">The Community</span>
          </Reveal>
          <div className="space-y-7 text-xl leading-relaxed text-cotton/80 md:text-2xl">
            <Reveal>
              <p>
                RoboManipal MUJ is where curiosity meets engineering. We are
                students who design, fabricate and program autonomous machines —
                and who treat every project as a research question worth answering
                properly.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-cotton/55">
                From soccer-playing robots to GPS-denied drones, from embedded
                vision to swarm intelligence, we build across the full stack of
                modern robotics. We compete nationally, we publish our work, and
                we onboard the next cohort of builders every year.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "Robotics",
          "Research",
          "Autonomy",
          "Embedded AI",
          "Innovation",
          "Engineering",
        ]}
      />

      {/* mission */}
      <section className="relative border-b border-cotton/10 bg-noir-800/30">
        <div className="container-wide grid gap-12 py-24 md:py-32 lg:grid-cols-2">
          <SectionHeading
            index="02"
            eyebrow="Our Mission"
            title={
              <>
                Make intelligent
                <br />
                machines <span className="text-cherry-glow">accessible.</span>
              </>
            }
          />
          <div className="flex flex-col justify-center gap-6 text-lg leading-relaxed text-cotton/65">
            <Reveal>
              <p>
                Our mission is to give every student the tools, mentorship and
                arena to build real robotics — and to push the field forward with
                research that stands on its own.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                We exist to turn classroom theory into hardware that moves,
                perceives and decides — and to make that journey open to anyone
                willing to learn.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* core values */}
      <section className="container-wide py-24 md:py-32">
        <SectionHeading
          index="03"
          eyebrow="Core Values"
          title={
            <>
              What we <span className="text-cherry-glow">stand for.</span>
            </>
          }
          className="mb-14"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div className="group h-full border border-cotton/10 bg-noir-800/40 p-8 transition-all duration-500 hover:border-cherry-glow/50 hover:bg-noir-700/40">
                <v.icon
                  className="h-8 w-8 text-cherry-glow"
                  strokeWidth={1.3}
                />
                <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-tight">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cotton/55">
                  {v.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* timeline */}
      <section className="relative border-y border-cotton/10 bg-noir-800/30">
        <div className="container-wide py-24 md:py-32">
          <SectionHeading
            index="04"
            eyebrow="Timeline Of Growth"
            title={
              <>
                From bench to <span className="text-cherry-glow">podium.</span>
              </>
            }
            className="mb-16"
          />
          <div className="relative">
            <div className="absolute left-0 top-0 hidden h-full w-px bg-cotton/10 md:left-[120px] md:block" />
            <div className="space-y-12">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.04}>
                  <div className="flex flex-col gap-4 md:flex-row md:gap-12">
                    <div className="flex items-center gap-4 md:w-[120px] md:flex-col md:items-start">
                      <span className="font-display text-3xl font-bold text-cherry-glow">
                        {t.year}
                      </span>
                    </div>
                    <div className="relative md:pl-12">
                      <span className="absolute -left-[7px] top-2 hidden h-3.5 w-3.5 rounded-full border-2 border-cherry-glow bg-noir-900 md:block" />
                      <h3 className="font-display text-xl font-bold uppercase tracking-tight">
                        {t.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-cotton/60">{t.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* community impact */}
      <section className="container-wide py-24 md:py-32">
        <SectionHeading
          index="05"
          eyebrow="Community Impact"
          title={
            <>
              Measured in <span className="text-cherry-glow">momentum.</span>
            </>
          }
          className="mb-14"
        />
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-cotton/10 bg-cotton/10 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <div key={s.label} className="bg-noir-900 p-8 md:p-10">
              <span className="font-mono text-xs text-cotton/30">
                {pad(i + 1)}
              </span>
              <div className="mt-6 font-display text-5xl font-bold tracking-tight md:text-6xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-4 text-sm text-cotton/55">{s.label}</p>
            </div>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-cotton/10 pt-12 md:flex-row md:items-center">
          <p className="max-w-xl text-lg text-cotton/70">
            Want to meet the people behind the machines?
          </p>
          <div className="flex gap-4">
            <Link href="/team" className="btn btn-primary">
              Meet The Team <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/work" className="btn btn-ghost">
              Explore Our Work
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
