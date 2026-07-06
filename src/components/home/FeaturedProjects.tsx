import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ProjectsInProgress from "@/components/work/ProjectsInProgress";

export default function FeaturedProjects() {
  return (
    <section
      id="featured-projects"
      className="relative border-y border-cotton/10 bg-noir-800/30"
    >
      <div className="dot-bg pointer-events-none absolute inset-0 opacity-30" />
      <div className="container-wide relative py-24 md:py-32">
        <SectionHeading
          index="02"
          eyebrow="Projects"
          title={
            <>
              Building in <span className="text-cherry-glow">public.</span>
            </>
          }
          description="Active builds are being documented and tested before their full project stories go live."
        />

        <Reveal className="mt-14">
          <ProjectsInProgress />
        </Reveal>
      </div>
    </section>
  );
}
