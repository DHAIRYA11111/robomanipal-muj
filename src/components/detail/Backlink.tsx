import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Backlink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cotton/60 transition-colors hover:text-cherry-glow"
    >
      <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-x-1" />
      {label}
    </Link>
  );
}
