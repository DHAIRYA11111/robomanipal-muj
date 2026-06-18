import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { pad } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Vision",
  description:
    "The RoboManipal MUJ vision — the future of robotics, our research goals, innovation roadmap and long-term objectives.",
};

const FRONTIERS = [
  "Autonomous Navigation",
  "Embedded Intelligence",
  "Swarm Robotics",
  "Human-Robot Interaction",
  "Perception & Vision",
  "Reinforcement Learning",
];

const GOALS = [
  {
    title: "Robust Autonomy",
    text: "Machines that perceive, plan and act reliably in unstructured, unpredictable real-world environments.",
  },
  {
    title: "Intelligence At The Edge",
    text: "Pushing capable AI onto power-constrained hardware — autonomy without the cloud.",
  },
  {
    title: "Coordinated Systems",
    text: "Many robots acting as one: swarms and multi-agent teams that scale gracefully.",
  },
  {
    title: "Human-Robot Collaboration",
    text: "Interfaces and behaviours that let people and machines work side by side, safely.",
  },
];

const ROADMAP = [
  {
    phase: "Now",
    window: "2026",
    items: [
      "AGV SLAM & navigation platform",
      "Decentralised swarm testbed",
      "Sub-2W edge-AI perception",
    ],
  },
  {
    phase: "Next",
    window: "2027",
    items: [
      "Multi-robot coordination",
      "Mobile manipulation",
      "First peer-reviewed publication",
    ],
  },
  {
    phase: "Horizon",
    window: "2028+",
    items: [
      "Autonomous lab-assistant fleet",
      "Hardened sim-to-real pipeline",
      "National research presence",
    ],
  },
];

const OBJECTIVES = [
  "Become a nationally recognised student robotics research community.",
  "Publish work that is cited beyond the walls of the university.",
  "Send graduates into the world's leading robotics labs and companies.",
  "Make Manipal University Jaipur synonymous with student-led autonomy.",
];

export default function VisionPage() {
  return (
    <>
      <PageHero
        kicker="/ 02"
        eyebrow="Our Vision"
        title={
          <>
            The era of
            <br />
            <span className="text-cherry-glow">intelligent machines.</span>
          </>
        }
        description="We are not building a club. We are building the institution that defines student robotics in India — one autonomous machine, one published idea, one engineer at a time."
      />

      {/* cinematic manifesto */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden border-b border-cotton/10">
        <div className="glow-cherry pointer-events-none absolute left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-40" />
        <div className="container-wide relative text-center">
          <Reveal>
            <p className="mx-auto max-w-5xl text-fluid-md font-bold uppercase leading-[1.02] tracking-tight">
              We believe the next decade of robotics will be{" "}
              <span className="text-cherry-glow">written by students</span> who
              refuse to wait for permission to build the future.
            </p>
          </Reveal>
        </div>
      </section>

      {/* future of robotics */}
      <section className="container-wide py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            index="01"
            eyebrow="The Future Of Robotics"
            title={
              <>
                Autonomy is the
                <br />
                <span className="text-cherry-glow">next interface.</span>
              </>
            }
          />
          <div className="flex flex-col justify-center gap-6 text-lg leading-relaxed text-cotton/65">
            <Reveal>
              <p>
                Robots are leaving the cage. The frontier is no longer repetitive
                motion on a factory line — it is machines that understand messy,
                changing environments and make decisions in them.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                We position RoboManipal at exactly this frontier: perception,
                planning and learning on real, embedded hardware.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-2.5 pt-2">
                {FRONTIERS.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-cotton/15 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-cotton/60"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* research goals */}
      <section className="relative border-y border-cotton/10 bg-noir-800/30">
        <div className="container-wide py-24 md:py-32">
          <SectionHeading
            index="02"
            eyebrow="Research Goals"
            title={
              <>
                Four questions we
                <br />
                <span className="text-cherry-glow">refuse to drop.</span>
              </>
            }
            className="mb-16"
          />
          <div className="grid gap-px overflow-hidden border border-cotton/10 bg-cotton/10 md:grid-cols-2">
            {GOALS.map((g, i) => (
              <div
                key={g.title}
                className="group bg-noir-900 p-8 transition-colors duration-500 hover:bg-noir-800 md:p-12"
              >
                <span className="font-mono text-sm text-cherry-glow">
                  {pad(i + 1)}
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
                  {g.title}
                </h3>
                <p className="mt-4 max-w-md text-cotton/60">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* innovation roadmap */}
      <section className="container-wide py-24 md:py-32">
        <SectionHeading
          index="03"
          eyebrow="Innovation Roadmap"
          title={
            <>
              The path <span className="text-cherry-glow">forward.</span>
            </>
          }
          className="mb-16"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {ROADMAP.map((r, i) => (
            <Reveal key={r.phase} delay={i * 0.08}>
              <div className="relative h-full border border-cotton/10 bg-noir-800/40 p-8 transition-all duration-500 hover:border-cherry-glow/50">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-2xl font-bold uppercase tracking-tight text-cherry-glow">
                    {r.phase}
                  </span>
                  <span className="font-mono text-xs tracking-[0.2em] text-cotton/40">
                    {r.window}
                  </span>
                </div>
                <ul className="mt-8 space-y-4">
                  {r.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-3 text-sm text-cotton/65"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cherry-glow" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* long-term objectives */}
      <section className="relative overflow-hidden border-t border-cotton/10 bg-noir-800/30">
        <div className="container-wide py-24 md:py-32">
          <SectionHeading
            index="04"
            eyebrow="Long-Term Objectives"
            title={
              <>
                Where this <span className="text-cherry-glow">leads.</span>
              </>
            }
            className="mb-14"
          />
          <div className="space-y-2">
            {OBJECTIVES.map((o, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="group flex items-center gap-6 border-b border-cotton/10 py-7 transition-colors hover:border-cherry-glow/40">
                  <span className="font-mono text-sm text-cotton/30">
                    {pad(i + 1)}
                  </span>
                  <p className="text-xl font-medium leading-tight text-cotton/85 transition-colors group-hover:text-cotton md:text-3xl">
                    {o}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <Link href="/contact" className="btn btn-primary">
              Build It With Us <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
