import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import TeamView from "@/components/team/TeamView";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the RoboManipal MUJ team.",
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
        description="Meet the people building RoboManipal MUJ."
      />
      <TeamView />
    </>
  );
}
