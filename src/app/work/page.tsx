import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import WorkView from "@/components/work/WorkView";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore the robots and engineering projects built by RoboManipal MUJ. Research papers are coming soon.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        kicker="/ 04"
        eyebrow="Our Work"
        title={
          <>
            Robots. Projects.
            <br />
            <span className="text-cherry-glow">Research.</span>
          </>
        }
        description="Everything we build, in one place — autonomous machines, engineering projects and a research section coming soon. Open a robot or project for the full story."
      />
      <WorkView />
    </>
  );
}
