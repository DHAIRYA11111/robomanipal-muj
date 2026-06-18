import type { Metadata } from "next";
import { Mail, Instagram, Linkedin, MapPin, Github } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with RoboManipal MUJ — join the community, collaborate, or just say hello.",
};

const CHANNELS = [
  { icon: Mail, label: "Email", value: SITE.email, href: SITE.socials.email },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@robomanipal",
    href: SITE.socials.instagram,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "RoboManipal MUJ",
    href: SITE.socials.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "/robomanipal",
    href: SITE.socials.github,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="/ 06"
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build
            <br />
            <span className="text-cherry-glow">together.</span>
          </>
        }
        description="Whether you want to join the team, collaborate on research, sponsor a build or just see the lab — we'd love to hear from you."
      />

      <section className="container-wide py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* info */}
          <div className="flex flex-col gap-10">
            <Reveal>
              <div className="space-y-3">
                {CHANNELS.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 border border-cotton/10 bg-noir-800/40 p-5 transition-all duration-500 hover:border-cherry-glow/50 hover:bg-noir-700/40"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cotton/15 text-cotton/70 transition-colors group-hover:border-cherry-glow/60 group-hover:text-cherry-glow">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-cotton/40">
                        {c.label}
                      </span>
                      <span className="text-cotton/85 transition-colors group-hover:text-cotton">
                        {c.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>

            {/* location */}
            <Reveal delay={0.05}>
              <div className="relative overflow-hidden border border-cotton/10 bg-noir-800/40 p-7">
                <div className="dot-bg pointer-events-none absolute inset-0 opacity-40" />
                <div className="glow-cherry pointer-events-none absolute -bottom-1/3 -right-1/4 h-2/3 w-2/3 opacity-40 blur-2xl" />
                <div className="relative">
                  <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cherry-glow">
                    <MapPin className="h-4 w-4" /> Location
                  </span>
                  <p className="mt-4 text-lg leading-relaxed text-cotton/80">
                    {SITE.location}
                  </p>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-cotton/40">
                    26.84°N · 75.56°E
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
