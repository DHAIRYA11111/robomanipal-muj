import Hero from "@/components/home/Hero";
import HorizontalStory from "@/components/home/HorizontalStory";
import FeaturedRobots from "@/components/home/FeaturedRobots";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ResearchHighlights from "@/components/home/ResearchHighlights";
import AchievementShowcase from "@/components/home/AchievementShowcase";
import Stats from "@/components/home/Stats";
import JoinUs from "@/components/home/JoinUs";
import FAQ from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HorizontalStory />
      <FeaturedRobots />
      <FeaturedProjects />
      <ResearchHighlights />
      <AchievementShowcase />
      <Stats />
      <JoinUs />
      <FAQ />
    </>
  );
}
