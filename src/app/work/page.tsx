import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import WorkView from "@/components/work/WorkView";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore the robot platforms built by RoboManipal MUJ. Project stories and research papers are coming soon.",
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
        description="Explore every active robot platform in one place. Project stories and research papers will be published as the work reaches a shareable stage."
      />
      <WorkView />
    </>
  );
}
