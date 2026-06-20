export type AchievementCategory = "Competition Won";

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
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    slug: "robosoccer-plinth-2019",
    event: "RoboSoccer — Plinth",
    year: 2019,
    position: "Winner",
    category: "Competition Won",
    location: "The LNM Institute of Information Technology (LNMIIT), Jaipur",
    summary: "RoboManipal won the RoboSoccer event at Plinth.",
    details: [
      "RoboManipal recorded a RoboSoccer win at Plinth, the annual techno-management festival hosted by The LNM Institute of Information Technology (LNMIIT), Jaipur.",
    ],
    highlights: ["RoboSoccer winner", "Plinth, LNMIIT Jaipur", "2019"],
  },
  {
    slug: "robowars-iit-delhi-2020",
    event: "RoboWars",
    year: 2020,
    position: "Winner",
    category: "Competition Won",
    location: "Indian Institute of Technology Delhi",
    summary: "RoboManipal won a RoboWars event at IIT Delhi.",
    details: [
      "RoboManipal recorded a RoboWars win at the Indian Institute of Technology Delhi.",
    ],
    highlights: ["RoboWars winner", "IIT Delhi", "2020"],
  },
  {
    slug: "wrc-ifr-2021",
    event: "WRC",
    year: 2021,
    position: "Winner",
    category: "Competition Won",
    location: "IFR",
    summary: "RoboManipal won at WRC in IFR.",
    details: ["RoboManipal recorded a win at WRC in IFR."],
    highlights: ["WRC winner", "IFR", "2021"],
  },
];

export function getAchievement(slug: string): Achievement | undefined {
  return ACHIEVEMENTS.find((achievement) => achievement.slug === slug);
}
