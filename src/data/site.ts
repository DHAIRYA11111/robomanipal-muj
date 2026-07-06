export const SITE = {
  name: "RoboManipal MUJ",
  shortName: "RoboManipal",
  tagline: "Where Ideas Become Intelligent Machines.",
  description:
    "RoboManipal MUJ is a student-driven robotics & research community at Manipal University Jaipur, managed by the ACM SIGBED Student Chapter.",
  managedBy: "Managed by ACM SIGBED, MUJ",
  university: "Manipal University Jaipur",
  email: "robomanipal@muj.manipal.edu",
  location: "Manipal University Jaipur, Dehmi Kalan, Jaipur, Rajasthan 303007",
  socials: {
    instagram: "https://www.instagram.com/robomanipal_muj/",
    linkedin: "https://linkedin.com/company/robomanipal-muj",
    github: "https://github.com/robomanipal",
    email: "mailto:robomanipal@muj.manipal.edu",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Our Work", href: "/work" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/contact" },
] as const;

export const STATS = [
  { label: "Robotic Platforms", value: 5, suffix: "" },
  { label: "Competition Wins", value: 3, suffix: "" },
  { label: "Team Members", value: 6, suffix: "" },
] as const;
