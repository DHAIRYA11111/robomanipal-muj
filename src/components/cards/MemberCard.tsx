import type { Member } from "@/data/team";

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function MemberCard({ member }: { member: Member }) {
  return (
    <article className="group relative flex min-h-56 flex-col items-center justify-center overflow-hidden border border-cotton/10 bg-noir-800/40 p-7 text-center transition-all duration-500 hover:border-cherry-glow/50 hover:bg-noir-700/40">
      <span className="absolute left-0 top-0 h-px w-full bg-cherry-glow/70 transition-all duration-[1100ms] ease-smooth group-hover:top-full" />
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-cotton/15 bg-noir-900">
        <div className="glow-cherry absolute inset-0 opacity-50" />
        <span className="relative font-display text-2xl font-bold tracking-tight text-cotton/90">
          {initials(member.name)}
        </span>
      </div>
      <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-tight transition-colors group-hover:text-cherry-glow">
        {member.name}
      </h3>
    </article>
  );
}
