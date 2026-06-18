export type TeamCategory =
  | "Faculty Mentors"
  | "Core Team"
  | "Robotics Team"
  | "Research Team"
  | "Development Team"
  | "Alumni";

export type Member = {
  name: string;
  position: string;
  category: TeamCategory;
  bio: string;
  linkedin: string;
};

export const TEAM_CATEGORIES: TeamCategory[] = [
  "Faculty Mentors",
  "Core Team",
  "Robotics Team",
  "Research Team",
  "Development Team",
  "Alumni",
];

export const MEMBERS: Member[] = [
  // Faculty Mentors
  {
    name: "Dr. Sanjana Iyer",
    position: "Faculty Mentor · ACM SIGBED",
    category: "Faculty Mentors",
    bio: "Leads the chapter's research direction in autonomy and embedded systems, guiding publications and competition strategy.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Dr. Nikhil Rao",
    position: "Faculty Advisor · Robotics",
    category: "Faculty Mentors",
    bio: "Advises on control theory and machine learning, mentoring the research team's reinforcement-learning and perception work.",
    linkedin: "https://linkedin.com",
  },
  // Core Team
  {
    name: "Aarav Sharma",
    position: "Chapter Lead",
    category: "Core Team",
    bio: "Sets the vision for RoboManipal, coordinates teams and competitions, and represents the chapter across the university.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Riya Verma",
    position: "Technical Lead",
    category: "Core Team",
    bio: "Owns the technical roadmap across robotics, research and development, and reviews every platform before competition.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Kabir Banerjee",
    position: "Operations Lead",
    category: "Core Team",
    bio: "Runs logistics, events and outreach, keeping the lab, budget and workshops running smoothly.",
    linkedin: "https://linkedin.com",
  },
  // Robotics Team
  {
    name: "Tanvi Mehta",
    position: "Robotics Engineer · Mechatronics",
    category: "Robotics Team",
    bio: "Designs drivetrains and actuation, from the omni-drive soccer bot to the AGV chassis.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Arjun Joshi",
    position: "Robotics Engineer · Controls",
    category: "Robotics Team",
    bio: "Tunes the control loops behind Vector and Pathfinder, specialising in real-time embedded control.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Sara Kulkarni",
    position: "Robotics Engineer · Perception",
    category: "Robotics Team",
    bio: "Builds the vision and sensing stacks that let the robots see, from line arrays to depth cameras.",
    linkedin: "https://linkedin.com",
  },
  // Research Team
  {
    name: "Pranav Nair",
    position: "Research Lead",
    category: "Research Team",
    bio: "Coordinates the chapter's publications and drives the aerial autonomy and VIO research threads.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Meera Gupta",
    position: "Research Associate · Embedded AI",
    category: "Research Team",
    bio: "Researches model compression and on-device inference for power-constrained robots.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Pooja Deshmukh",
    position: "Research Associate · Learning",
    category: "Research Team",
    bio: "Works on reinforcement learning and sim-to-real transfer for legged locomotion.",
    linkedin: "https://linkedin.com",
  },
  // Development Team
  {
    name: "Dev Malhotra",
    position: "Software Lead",
    category: "Development Team",
    bio: "Architects the ROS 2 stacks, dashboards and tooling that tie every platform together.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Ananya Rao",
    position: "Full-Stack Developer",
    category: "Development Team",
    bio: "Builds the telemetry dashboards and the web presence for the chapter and its robots.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Ishaan Kapoor",
    position: "Embedded Developer",
    category: "Development Team",
    bio: "Writes the firmware and device drivers that run on the chapter's microcontrollers.",
    linkedin: "https://linkedin.com",
  },
  // Alumni
  {
    name: "Rohan Khanna",
    position: "Founding Lead · 2021",
    category: "Alumni",
    bio: "Co-founded RoboManipal and now works on autonomous systems in industry.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Neha Bose",
    position: "Ex-Research Lead · 2022",
    category: "Alumni",
    bio: "Led the chapter's first published research and is now pursuing a robotics PhD.",
    linkedin: "https://linkedin.com",
  },
];
