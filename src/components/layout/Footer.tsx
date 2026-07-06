import Link from "next/link";
import { Instagram, Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/site";
import RobotMark from "@/components/ui/RobotMark";

const socials = [
  { icon: Instagram, href: SITE.socials.instagram, label: "Instagram" },
  { icon: Linkedin, href: SITE.socials.linkedin, label: "LinkedIn" },
  { icon: Github, href: SITE.socials.github, label: "GitHub" },
  { icon: Mail, href: SITE.socials.email, label: "Email" },
];

export default function Footer() {
  const year = 2026;
  return (
    <footer className="relative overflow-hidden border-t border-cotton/10 bg-noir-900">
      <div className="dot-bg pointer-events-none absolute inset-0 opacity-30" />
      <div className="glow-cherry pointer-events-none absolute -top-40 left-1/2 h-[40vh] w-[80vh] -translate-x-1/2 blur-3xl opacity-40" />

      <div className="container-wide relative pt-20">
        {/* CTA */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-cotton/10 pb-16 lg:flex-row lg:items-end">
          <div>
            <span className="eyebrow">Build the future with us</span>
            <h2 className="mt-4 max-w-2xl text-fluid-md font-bold uppercase leading-[0.95] tracking-tight">
              Ideas become <span className="text-cherry-glow">intelligent</span>{" "}
              machines.
            </h2>
          </div>
          <Link
            href="/contact"
            data-cursor="Contact"
            className="btn btn-primary"
          >
            Contact Us <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* columns */}
        <div className="grid grid-cols-2 gap-10 py-16 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <RobotMark className="h-7 w-7 text-cherry-glow" />
              <span className="font-display text-lg font-bold uppercase tracking-tight">
                RoboManipal
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cotton/55">
              {SITE.description}
            </p>
          </div>

          <div>
            <h3 className="eyebrow mb-5">Navigate</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="link-underline text-sm text-cotton/70 hover:text-cotton"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-5">Our Work</h3>
            <ul className="space-y-3 text-sm text-cotton/70">
              <li>
                <Link href="/work#robots" className="link-underline hover:text-cotton">
                  Robots
                </Link>
              </li>
              <li>
                <Link href="/work#projects" className="link-underline hover:text-cotton">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/work#research" className="link-underline hover:text-cotton">
                  Research Papers
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="link-underline hover:text-cotton">
                  Achievements
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-5">Connect</h3>
            <ul className="space-y-3 text-sm text-cotton/70">
              <li>
                <a
                  href={SITE.socials.email}
                  className="link-underline hover:text-cotton"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="max-w-[16rem] text-cotton/55">{SITE.location}</li>
            </ul>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cotton/15 text-cotton/70 transition-all hover:border-cherry-glow/60 hover:text-cherry-glow"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* giant wordmark */}
      <div className="container-wide relative select-none overflow-hidden">
        <div className="text-outline whitespace-nowrap text-[18vw] font-bold uppercase leading-[0.8] tracking-tighter opacity-60">
          RoboManipal
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-cotton/10">
        <div className="container-wide flex flex-col items-center justify-between gap-3 py-6 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-cotton/40 md:flex-row md:text-left">
          <span>
            © {year} {SITE.name}
          </span>
          <span>{SITE.managedBy}</span>
          <span>{SITE.university}</span>
        </div>
      </div>
    </footer>
  );
}
