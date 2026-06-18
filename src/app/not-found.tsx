import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import RobotMark from "@/components/ui/RobotMark";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="glow-cherry pointer-events-none absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50" />

      <div className="container-wide relative text-center">
        <RobotMark className="mx-auto h-14 w-14 animate-float text-cherry-glow" />
        <h1 className="mt-8 font-display text-[28vw] font-bold leading-none tracking-tighter text-outline md:text-[18vw]">
          404
        </h1>
        <p className="mx-auto mt-4 max-w-md font-mono text-xs uppercase tracking-[0.25em] text-cotton/50">
          Signal lost — this machine doesn&apos;t exist
        </p>
        <Link href="/" className="btn btn-primary mt-10">
          <ArrowLeft className="h-4 w-4" /> Return Home
        </Link>
      </div>
    </section>
  );
}
