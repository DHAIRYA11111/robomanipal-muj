import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import WorkView from "@/components/work/WorkView";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore the robots, engineering projects and research papers built by RoboManipal MUJ — every one with a dedicated detail page.",
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
        description="Everything we build, in one place — autonomous machines, engineering projects and the research that underpins them. Open any item for the full story."
      />
      <WorkView />
    </>
  );
}
