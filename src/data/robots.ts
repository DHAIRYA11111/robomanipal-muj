export type RobotCategory =
  | "Robo Soccer"
  | "Robo Wars"
  | "Line Follower"
  | "Multifunctional Drones"
  | "Robotic Arm"
  | "RC Car"
  | "RC Plane";

export type Robot = {
  slug: string;
  name: string;
  codename: string;
  category: RobotCategory;
  year: number;
  status: "Active" | "In Development";
  tagline: string;
  summary: string;
  overview: string[];
  specs: { label: string; value: string }[];
  metrics: { label: string; value: string }[];
  stack: string[];
  highlights: string[];
};

export const ROBOTS: Robot[] = [
  {
    slug: "robosoccer",
    name: "RoboSoccer Bot",
    codename: "RM-SOC",
    category: "Robo Soccer",
    year: 2026,
    status: "Active",
    tagline: "A competition robot built for fast, controlled play on the field.",
    summary: "RoboManipal's robot soccer platform.",
    overview: [
      "RoboSoccer Bot is RoboManipal's platform for robot-soccer competitions, bringing mechanical design, electronics and control together on the field.",
      "The platform is developed and refined through hands-on testing, team collaboration and competition preparation.",
    ],
    specs: [
      { label: "Platform", value: "Robot soccer" },
      { label: "Focus", value: "Competition" },
      { label: "Build", value: "In-house" },
    ],
    metrics: [
      { label: "Status", value: "Active" },
      { label: "Focus", value: "Field play" },
      { label: "Build", value: "In-house" },
    ],
    stack: ["Mechanical", "Electronics", "Control"],
    highlights: [
      "Built for RoboSoccer competitions",
      "Developed by the RoboManipal team",
    ],
  },
  {
    slug: "robowars-bot",
    name: "RoboWars Bot",
    codename: "RM-RW",
    category: "Robo Wars",
    year: 2026,
    status: "Active",
    tagline: "A robust combat-robot platform made for the RoboWars arena.",
    summary: "RoboManipal's RoboWars competition robot.",
    overview: [
      "The RoboWars Bot is built for the demands of combat robotics, where durability, control and quick iteration matter.",
      "Its design evolves with every build cycle and competition challenge.",
    ],
    specs: [
      { label: "Platform", value: "Combat robotics" },
      { label: "Focus", value: "RoboWars" },
      { label: "Build", value: "In-house" },
    ],
    metrics: [
      { label: "Status", value: "Active" },
      { label: "Focus", value: "Combat" },
      { label: "Build", value: "In-house" },
    ],
    stack: ["Mechanical", "Electronics", "Fabrication"],
    highlights: [
      "Built for RoboWars events",
      "Designed for iterative competition testing",
    ],
  },
  {
    slug: "line-following-bot",
    name: "Line Following Bot",
    codename: "RM-LF",
    category: "Line Follower",
    year: 2026,
    status: "Active",
    tagline: "A precise platform for high-speed line-following challenges.",
    summary: "RoboManipal's line-following competition robot.",
    overview: [
      "The Line Following Bot is developed to read a track accurately and respond with controlled movement.",
      "It gives the team a focused platform for tuning sensors, electronics and control logic.",
    ],
    specs: [
      { label: "Platform", value: "Line following" },
      { label: "Focus", value: "Precision" },
      { label: "Build", value: "In-house" },
    ],
    metrics: [
      { label: "Status", value: "Active" },
      { label: "Focus", value: "Tracking" },
      { label: "Build", value: "In-house" },
    ],
    stack: ["Sensors", "Electronics", "Control"],
    highlights: [
      "Built for line-following challenges",
      "Designed for repeatable track testing",
    ],
  },
  {
    slug: "multifunctional-drones",
    name: "Multifunctional Drones",
    codename: "RM-UAV",
    category: "Multifunctional Drones",
    year: 2026,
    status: "In Development",
    tagline: "Versatile aerial platforms for exploration, testing and learning.",
    summary: "RoboManipal's multifunctional drone platforms.",
    overview: [
      "The multifunctional drone platforms give RoboManipal a flexible way to explore aerial robotics across different use cases.",
      "The builds are designed to support hands-on learning, experimentation and future competition work.",
    ],
    specs: [
      { label: "Platform", value: "Aerial robotics" },
      { label: "Focus", value: "Versatility" },
      { label: "Build", value: "In-house" },
    ],
    metrics: [
      { label: "Status", value: "In development" },
      { label: "Focus", value: "Aerial" },
      { label: "Build", value: "In-house" },
    ],
    stack: ["Flight systems", "Electronics", "Testing"],
    highlights: [
      "Multifunctional aerial platform",
      "Built for future exploration and testing",
    ],
  },
  {
    slug: "robotic-arm",
    name: "Robotic Arm",
    codename: "RM-ARM",
    category: "Robotic Arm",
    year: 2026,
    status: "In Development",
    tagline: "A hands-on platform for manipulation and motion-control work.",
    summary: "RoboManipal's robotic-arm platform.",
    overview: [
      "The Robotic Arm is a dedicated platform for learning and building around motion, manipulation and controlled movement.",
      "It gives the team a practical foundation for mechanical design, electronics and programming work.",
    ],
    specs: [
      { label: "Platform", value: "Manipulation" },
      { label: "Focus", value: "Motion control" },
      { label: "Build", value: "In-house" },
    ],
    metrics: [
      { label: "Status", value: "In development" },
      { label: "Focus", value: "Manipulation" },
      { label: "Build", value: "In-house" },
    ],
    stack: ["Mechanical", "Electronics", "Programming"],
    highlights: [
      "Robotic manipulation platform",
      "Designed for hands-on development and testing",
    ],
  },
  {
    slug: "rc-car",
    name: "RC Car",
    codename: "RM-RCC",
    category: "RC Car",
    year: 2026,
    status: "In Development",
    tagline: "A responsive ground platform for radio-control, steering and drivetrain experiments.",
    summary: "RoboManipal's RC car development platform.",
    overview: [
      "The RC Car is a compact mobile platform for developing reliable steering, throttle control and mechanical integration.",
      "Its modular layout supports hands-on work across chassis design, electronics, radio control and future autonomy experiments.",
    ],
    specs: [
      { label: "Platform", value: "Ground vehicle" },
      { label: "Focus", value: "Radio control" },
      { label: "Build", value: "In-house" },
    ],
    metrics: [
      { label: "Status", value: "In development" },
      { label: "Focus", value: "Mobility" },
      { label: "Build", value: "In-house" },
    ],
    stack: ["Mechanical", "Electronics", "Radio control"],
    highlights: [
      "Modular RC ground platform",
      "Designed for drivetrain and steering experiments",
    ],
  },
  {
    slug: "rc-plane",
    name: "RC Plane",
    codename: "RM-RCP",
    category: "RC Plane",
    year: 2026,
    status: "In Development",
    tagline: "A lightweight fixed-wing platform for flight-control and aerodynamics testing.",
    summary: "RoboManipal's RC fixed-wing aircraft platform.",
    overview: [
      "The RC Plane gives the team a practical fixed-wing platform for learning aerodynamics, airframe construction and radio-control systems.",
      "Flight testing will guide refinements to stability, control surfaces, weight distribution and onboard electronics.",
    ],
    specs: [
      { label: "Platform", value: "Fixed-wing aircraft" },
      { label: "Focus", value: "Flight testing" },
      { label: "Build", value: "In-house" },
    ],
    metrics: [
      { label: "Status", value: "In development" },
      { label: "Focus", value: "Flight" },
      { label: "Build", value: "In-house" },
    ],
    stack: ["Aerodynamics", "Electronics", "Radio control"],
    highlights: [
      "Lightweight fixed-wing platform",
      "Built for iterative flight testing",
    ],
  },
];

export function getRobot(slug: string): Robot | undefined {
  return ROBOTS.find((robot) => robot.slug === slug);
}
