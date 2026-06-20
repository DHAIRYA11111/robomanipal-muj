import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { pad } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Vision",
  description:
    "The RoboManipal MUJ vision — the future of robotics and our research goals.",
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

    </>
  );
}
