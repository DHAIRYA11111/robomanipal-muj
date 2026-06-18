export type AchievementCategory =
  | "Competition Won"
  | "Competition Participated"
  | "Workshop Conducted"
  | "Research Achievement"
  | "Event Highlight";

export type Achievement = {
  slug: string;
  event: string;
  year: number;
  position: string;
  category: AchievementCategory;
  location: string;
  summary: string;
  details: string[];
  highlights: string[];
};

export const ACHIEVEMENT_CATEGORIES: AchievementCategory[] = [
  "Competition Won",
  "Competition Participated",
  "Workshop Conducted",
  "Research Achievement",
  "Event Highlight",
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    slug: "line-follower-sprint-2024",
    event: "Techniche Line Follower Sprint",
    year: 2024,
    position: "1st Place",
    category: "Competition Won",
    location: "IIT Guwahati",
    summary:
      "Vector took the top step of the podium with the fastest clean lap of the event.",
    details: [
      "RoboManipal's line-follower Vector entered the Techniche sprint against more than forty teams and posted the fastest clean lap of the competition.",
      "On-track adaptive calibration let the bot run identically under the venue's harsh lighting, and the cascaded PID controller carried maximum speed through every hairpin without losing the line.",
    ],
    highlights: [
      "Fastest clean lap of the event — 11.4 s",
      "Beat 40+ competing teams",
      "Zero line-loss penalties across all heats",
    ],
  },
  {
    slug: "autonomous-soccer-2025",
    event: "Inter-University Autonomous Soccer Challenge",
    year: 2025,
    position: "Top 4 Finalist",
    category: "Competition Won",
    location: "Bengaluru",
    summary:
      "Striker-01 reached the semi-finals in its debut season of fully autonomous robot soccer.",
    details: [
      "In its first competitive season, the autonomous striker Striker-01 advanced to the semi-finals of the inter-university challenge, competing entirely without human control.",
      "Sub-200 ms perception-to-actuation latency and the holonomic drive let the bot intercept and redirect play, earning recognition for the cleanest autonomous ball control in the bracket.",
    ],
    highlights: [
      "Semi-finalist on debut",
      "Recognised for best autonomous ball control",
      "Fully autonomous — zero teleoperation",
    ],
  },
  {
    slug: "robotics-hackathon-2025",
    event: "National Robotics Hackathon",
    year: 2025,
    position: "Runner-Up",
    category: "Competition Won",
    location: "New Delhi",
    summary:
      "The development team placed second with the Gesture Control AI human-robot interface.",
    details: [
      "A 36-hour build culminated in Gesture Control AI — a webcam-driven gesture interface commanding a live robot — earning the runner-up prize at the national hackathon.",
      "Judges highlighted the system's 96% live classification accuracy and the seamless integration with the chapter's existing manipulator and AGV platforms.",
    ],
    highlights: [
      "Runner-up among 60+ teams",
      "96% live gesture accuracy",
      "Built and integrated in 36 hours",
    ],
  },
  {
    slug: "robocon-2024-participation",
    event: "DD-MIC ROBOCON India",
    year: 2024,
    position: "Participant",
    category: "Competition Participated",
    location: "Pune",
    summary:
      "The chapter fielded a full team at India's premier collegiate robotics contest.",
    details: [
      "RoboManipal qualified and competed at ROBOCON India, designing and fabricating task-specific robots to the season's theme within the official rulebook and timeline.",
      "The campaign sharpened the team's fabrication, project-management and on-field debugging skills, feeding directly into later competition wins.",
    ],
    highlights: [
      "Cleared design qualification round",
      "Full custom-fabricated robot build",
      "Invaluable on-field engineering experience",
    ],
  },
  {
    slug: "drone-challenge-2025",
    event: "Inter-College Drone Autonomy Challenge",
    year: 2025,
    position: "Participant",
    category: "Competition Participated",
    location: "Hyderabad",
    summary:
      "Skyhawk demonstrated GPS-denied indoor navigation at the autonomy challenge.",
    details: [
      "The Skyhawk quadrotor took part in the drone autonomy challenge, showcasing fully GPS-denied indoor flight using onboard visual-inertial odometry.",
      "The team's live demonstration of drift-bounded position hold in an unprepared indoor arena drew strong interest from judges and peer teams.",
    ],
    highlights: [
      "Live GPS-denied autonomous flight",
      "On-board 200 Hz state estimation",
      "Showcased to a national peer cohort",
    ],
  },
  {
    slug: "robotics-bootcamp-2024",
    event: "RoboManipal Robotics Bootcamp",
    year: 2024,
    position: "150+ Attendees",
    category: "Workshop Conducted",
    location: "Manipal University Jaipur",
    summary:
      "A hands-on bootcamp introducing first-years to embedded systems and ROS.",
    details: [
      "The chapter ran a multi-day bootcamp taking newcomers from blinking an LED to driving a robot in simulation, covering microcontrollers, sensors, control and an introduction to ROS 2.",
      "Over 150 students built and demonstrated a working line-following robot by the final day.",
    ],
    highlights: [
      "150+ students onboarded",
      "From zero to a working robot in days",
      "Built the chapter's next recruitment cohort",
    ],
  },
  {
    slug: "sigbed-research-symposium-2025",
    event: "ACM SIGBED Student Research Symposium",
    year: 2025,
    position: "5 Papers Presented",
    category: "Research Achievement",
    location: "Manipal University Jaipur",
    summary:
      "The research team presented five technical reports spanning autonomy, edge AI and swarms.",
    details: [
      "At the chapter's research symposium, the team presented five technical reports covering GPS-denied navigation, edge-AI quantisation, swarm consensus, sim-to-real learning and AGV SLAM.",
      "The event cemented RoboManipal's identity as a research-driven community, not just a competition club.",
    ],
    highlights: [
      "5 technical reports presented",
      "Spanned 5 distinct research areas",
      "Strengthened the research-first culture",
    ],
  },
  {
    slug: "innovation-showcase-2025",
    event: "MUJ Innovation Showcase",
    year: 2025,
    position: "Featured Exhibitor",
    category: "Event Highlight",
    location: "Manipal University Jaipur",
    summary:
      "RoboManipal headlined the university innovation showcase with a live robotics arena.",
    details: [
      "RoboManipal was a featured exhibitor at the university innovation showcase, running a live arena where visitors watched the soccer bot, AGV and manipulator operate side by side.",
      "The exhibit drew the largest crowd of the showcase and introduced the chapter to hundreds of prospective members and sponsors.",
    ],
    highlights: [
      "Largest crowd of the showcase",
      "Live multi-robot arena demo",
      "Major recruitment and sponsor interest",
    ],
  },
];

export function getAchievement(slug: string): Achievement | undefined {
  return ACHIEVEMENTS.find((a) => a.slug === slug);
}
