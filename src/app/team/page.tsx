import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import TeamView from "@/components/team/TeamView";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the faculty mentors, core team, robotics, research, development teams and alumni behind RoboManipal MUJ.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        kicker="/ 03"
        eyebrow="The People"
        title={
          <>
            The minds behind
            <br />
            the <span className="text-cherry-glow">machines.</span>
          </>
        }
        description="Faculty mentors, core leadership, and the robotics, research and development engineers who design, build and publish — plus the alumni who started it all."
      />
      <TeamView />
    </>
  );
}
