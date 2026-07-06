import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import GalleryView from "@/components/gallery/GalleryView";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Moments from RoboManipal MUJ workshops, demonstrations, events and team life.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="/ 06"
        eyebrow="Gallery"
        title={
          <>
            Built together.
            <br />
            <span className="text-cherry-glow">Captured here.</span>
          </>
        }
        description="A look inside the rooms where ideas turn into working machines—and the community that makes it happen."
      />
      <GalleryView />
    </>
  );
}
