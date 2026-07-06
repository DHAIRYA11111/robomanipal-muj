"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  CircleHelp,
  Code2,
  FlaskConical,
  Network,
  Trophy,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "Which branch students can apply?",
    answer:
      "MUJ students from any discipline are encouraged to apply for the subsystem of their choice. What matters most is a genuine interest in the selected subsystem and the commitment to build expertise in it.",
    icon: CircleHelp,
  },
  {
    question: "What networking opportunities are available?",
    answer:
      "Members work alongside students from mechanical, electronics, software and research backgrounds, connect with faculty and technical communities, and represent RoboManipal at competitions, workshops and chapter events.",
    icon: Network,
  },
  {
    question: "Do I need prior experience in coding or electronics to be part of the team?",
    answer:
      "Prior experience in coding or electronics is not required. A basic curiosity about how systems work and a willingness to learn the fundamentals are enough to get started; the team develops skills through hands-on work.",
    icon: Code2,
  },
  {
    question: "What are the recent achievements of the team?",
    answer:
      "RoboManipal's recorded competition wins include RoboSoccer at Plinth, RoboWars at IIT Delhi and WRC at IFR. The Achievements page contains the complete published record.",
    icon: Trophy,
  },
  {
    question: "What research projects is the team currently working on?",
    answer:
      "Current work spans RoboSoccer, RoboWars, line following, multifunctional drones, robotic manipulation, RC cars and RC planes. Formal project and research write-ups will be published as the work reaches a shareable stage.",
    icon: FlaskConical,
  },
] as const;

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-t border-cotton/10 bg-noir-900 py-24 md:py-32">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-35" />
      <div className="glow-cherry pointer-events-none absolute -left-1/4 top-0 h-[70vh] w-[70vh] opacity-35 blur-3xl" />
      <div className="container-wide relative">
        <SectionHeading
          index="07"
          eyebrow="Frequently Asked Questions"
          title={
            <>
              Curious? <span className="text-cherry-glow">Start here.</span>
            </>
          }
          description="A few useful answers about joining RoboManipal, learning with the team and the work currently underway."
          className="mb-14"
        />

        <Reveal>
          <div className="mx-auto max-w-5xl space-y-3">
            {FAQS.map((item, index) => {
              const expanded = open === index;
              const Icon = item.icon;
              return (
                <div
                  key={item.question}
                  className={cn(
                    "overflow-hidden border bg-noir-800/35 transition-colors duration-500",
                    expanded
                      ? "border-cherry-glow/55 bg-noir-800/65"
                      : "border-cotton/10 hover:border-cotton/25",
                  )}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(expanded ? null : index)}
                      aria-expanded={expanded}
                      aria-controls={`faq-answer-${index}`}
                      data-cursor={expanded ? "Close" : "Open"}
                      className="flex w-full items-center gap-4 px-5 py-6 text-left md:gap-6 md:px-8 md:py-8"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cherry-glow/35 bg-cherry/10 text-cherry-glow">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                      </span>
                      <span className="flex-1 font-display text-lg font-semibold tracking-tight text-cotton md:text-xl">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 shrink-0 text-cotton/45 transition-transform duration-500",
                          expanded && "rotate-180 text-cherry-glow",
                        )}
                      />
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {expanded && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="mx-5 border-t border-cotton/10 py-6 pl-14 text-base leading-relaxed text-cotton/68 md:mx-8 md:py-7 md:pl-16 md:text-lg">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
