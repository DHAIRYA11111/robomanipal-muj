"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { pad } from "@/lib/utils";

type Panel = {
  chapter: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  accent?: boolean;
};

const PANELS: Panel[] = [
  {
    chapter: "Who We Are",
    title: "Engineering Intelligent Machines",
    body: "RoboManipal MUJ is a student-driven robotics community at Manipal University Jaipur — designing and building the machines of tomorrow.",
    href: "/about",
    cta: "About Us",
  },
  {
    chapter: "Compete",
    title: "Robotics Competitions",
    body: "We field autonomous robots at national and inter-university arenas — from soccer bots to line followers — and we come back with podiums.",
    href: "/achievements",
    cta: "See Results",
  },
  {
    chapter: "Discover",
    title: "Research & Innovation",
    body: "Our research papers are being prepared for publication. Explore the work-in-progress section to see what is coming next.",
    href: "/work#research",
    cta: "Coming Soon",
  },
  {
    chapter: "Build",
    title: "Engineering Projects",
    body: "Active engineering builds are being tested and documented before their complete project stories are published.",
    href: "/work#projects",
    cta: "In Progress",
  },
  {
    chapter: "Machines",
    title: "Featured Robots",
    body: "RoboSoccer, RoboWars, line-following, drone, robotic-arm, RC-car and RC-plane platforms.",
    href: "/work#robots",
    cta: "Meet The Robots",
  },
  {
    chapter: "Publish",
    title: "Research Papers",
    body: "Research papers are coming soon. We are preparing this section for future publications.",
    href: "/work#research",
    cta: "Coming Soon",
  },
  {
    chapter: "Win",
    title: "Achievements",
    body: "A record of RoboManipal's competition wins and the events that mark its journey.",
    href: "/achievements",
    cta: "Our Wins",
  },
  {
    chapter: "Join",
    title: "Join RoboManipal",
    body: "Designers, coders, makers and researchers — there's a seat at the bench for you. Build the future with us.",
    href: "/contact",
    cta: "Become A Member",
    accent: true,
  },
];

export default function HorizontalStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  // ScrollTrigger's pinning moves this section into a spacer. Its cleanup must
  // happen before React removes the home page during a route transition.
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const track = trackRef.current!;
      const section = sectionRef.current!;
      const distance = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + distance(),
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current)
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            if (counterRef.current)
              counterRef.current.textContent = pad(
                Math.min(PANELS.length, Math.round(self.progress * (PANELS.length - 1)) + 1),
              );
          },
        },
      });

      // parallax on the big ghost numbers as each panel passes
      const nums = gsap.utils.toArray<HTMLElement>(".panel-bgnum");
      nums.forEach((el) => {
        gsap.fromTo(
          el,
          { xPercent: 12 },
          {
            xPercent: -12,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              containerAnimation: tween,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          },
        );
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-noir-900"
      aria-label="The RoboManipal story"
    >
      <div
        ref={trackRef}
        className="flex flex-col lg:h-[100svh] lg:flex-row lg:flex-nowrap"
      >
        {PANELS.map((p, i) => (
          <article
            key={p.title}
            className="panel relative flex h-[90vh] w-full shrink-0 flex-col justify-center border-b border-cotton/5 lg:h-full lg:w-screen lg:border-b-0 lg:border-r"
          >
            {/* ghost number */}
            <span className="panel-bgnum pointer-events-none absolute right-2 top-1/2 -z-0 -translate-y-1/2 select-none font-display text-[40vw] font-bold leading-none text-cotton/[0.03] lg:text-[26vw]">
              {pad(i + 1)}
            </span>
            <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />

            <div className="container-wide relative z-10 max-w-3xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="font-mono text-xs text-cherry-glow">
                  {pad(i + 1)} / {pad(PANELS.length)}
                </span>
                <span className="h-px w-10 bg-cherry-glow/60" />
                <span className="eyebrow">Chapter — {p.chapter}</span>
              </div>
              <h3
                className={`text-fluid-md font-bold uppercase leading-[0.92] tracking-tight ${
                  p.accent ? "text-cherry-glow" : ""
                }`}
              >
                {p.title}
              </h3>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-cotton/65 md:text-lg">
                {p.body}
              </p>
              <Link
                href={p.href}
                data-cursor="Open"
                className={`mt-9 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] ${
                  p.accent
                    ? "btn btn-primary"
                    : "text-cotton/80 transition-colors hover:text-cherry-glow"
                }`}
              >
                {p.cta}
                {p.accent ? (
                  <ArrowUpRight className="h-4 w-4" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* desktop progress HUD */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 hidden lg:block">
        <div className="container-wide flex items-center gap-5 pb-7">
          <span className="font-mono text-[11px] tracking-[0.2em] text-cotton/60">
            <span ref={counterRef}>01</span> / {pad(PANELS.length)}
          </span>
          <div className="h-px flex-1 bg-cotton/15">
            <div
              ref={progressRef}
              className="h-full origin-left scale-x-0 bg-cherry-glow"
            />
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-cotton/40">
            Scroll to advance
          </span>
        </div>
      </div>
    </section>
  );
}
