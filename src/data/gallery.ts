export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  width: number;
  height: number;
  layout: "wide" | "standard" | "portrait" | "panorama";
};

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/gallery/team-celebration.jpg",
    alt: "RoboManipal and ACM MUJ members celebrating together at an evening event",
    title: "One team. One energy.",
    caption: "The people behind the prototypes, workshops and late-night builds.",
    width: 1920,
    height: 1440,
    layout: "wide",
  },
  {
    src: "/gallery/floor-build.jpg",
    alt: "A student carefully working on a large floor build during a workshop",
    title: "Hands on",
    caption: "Ideas become real one careful detail at a time.",
    width: 287,
    height: 640,
    layout: "portrait",
  },
  {
    src: "/gallery/rover-prototype.jpg",
    alt: "A small wheeled robot prototype surrounded by electronics tools",
    title: "On the bench",
    caption: "A rover takes shape between wires, boards and tools.",
    width: 640,
    height: 480,
    layout: "standard",
  },
  {
    src: "/gallery/aircraft-showcase.jpg",
    alt: "RoboManipal member presenting a model aircraft to visitors",
    title: "Ready for take-off",
    caption: "Explaining the systems behind an aircraft build.",
    width: 480,
    height: 640,
    layout: "portrait",
  },
  {
    src: "/gallery/robotics-demo.jpg",
    alt: "RoboManipal members demonstrating a small walking robot to visitors",
    title: "Built to be shared",
    caption: "A live robotics demonstration with the team.",
    width: 1920,
    height: 1280,
    layout: "wide",
  },
  {
    src: "/gallery/stage-demo.jpg",
    alt: "Students demonstrating a robotics controller on an auditorium stage",
    title: "Live on stage",
    caption: "Putting the build through its paces in front of an audience.",
    width: 1920,
    height: 1280,
    layout: "standard",
  },
  {
    src: "/gallery/acm-stage.jpg",
    alt: "Illuminated ACM MUJ Chapter letters on a stage",
    title: "Our chapter",
    caption: "ACM MUJ—the community that brings us together.",
    width: 1920,
    height: 778,
    layout: "panorama",
  },
  {
    src: "/gallery/guest-session.jpg",
    alt: "Guest speaker presenting about 3D representations in an auditorium",
    title: "Learning from experts",
    caption: "A guest session exploring the ideas shaping intelligent systems.",
    width: 1080,
    height: 1920,
    layout: "portrait",
  },
  {
    src: "/gallery/amd-masters-team.jpg",
    alt: "Student organizing team gathered at the AMD Ryzen AI Masters event",
    title: "Showing up together",
    caption: "The team at AMD Ryzen AI Masters.",
    width: 1920,
    height: 1440,
    layout: "wide",
  },
  {
    src: "/gallery/workshop-collaboration.jpg",
    alt: "Two students collaborating on laptops during a technical workshop",
    title: "Better together",
    caption: "Learning, debugging and building side by side.",
    width: 1240,
    height: 698,
    layout: "standard",
  },
];
