import { Linkedin } from "lucide-react";
import type { Member } from "@/data/team";

function initials(name: string) {
  const words = name.replace(/Dr\.?/g, "").trim().split(/\s+/);
  return words.slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

export default function MemberCard({ member }: { member: Member }) {
  return (
    <article className="group relative flex flex-col overflow-hidden border border-cotton/10 bg-noir-800/40 p-7 transition-all duration-500 hover:border-cherry-glow/50 hover:bg-noir-700/40">
      <div className="flex items-center gap-4">
        {/* initials avatar */}
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-cotton/15 bg-noir-900">
          <div className="glow-cherry absolute inset-0 opacity-50" />
          <span className="relative font-display text-lg font-bold tracking-tight text-cotton/90">
            {initials(member.name)}
          </span>
          <span className="absolute left-0 top-0 h-px w-full bg-cherry-glow/60 transition-all duration-[1100ms] ease-smooth group-hover:top-full" />
        </div>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} on LinkedIn`}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-cotton/15 text-cotton/60 transition-all hover:border-cherry-glow/60 hover:text-cherry-glow"
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </div>

      <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-tight transition-colors group-hover:text-cherry-glow">
        {member.name}
      </h3>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-cherry-glow/90">
        {member.position}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-cotton/55">{member.bio}</p>
    </article>
  );
}
