export type Paper = {
  slug: string;
  title: string;
  authors: string[];
  year: number;
  venue: string;
  area: string;
  abstractPreview: string;
  abstract: string[];
  keywords: string[];
  pdf: string; // replace with a real /papers/*.pdf path in /public
  doi?: string;
};

export const PAPERS: Paper[] = [
  {
    slug: "gps-denied-vio-navigation",
    title:
      "Robust GPS-Denied Navigation for Micro-Aerial Vehicles using Tightly-Coupled Visual-Inertial Odometry",
    authors: ["A. Sharma", "R. Verma", "P. Nair", "Dr. S. Iyer"],
    year: 2025,
    venue: "RoboManipal Technical Report · ACM SIGBED MUJ",
    area: "Aerial Autonomy",
    abstractPreview:
      "We present a tightly-coupled visual-inertial odometry pipeline enabling drift-bounded indoor flight without GPS, validated on an embedded GPU platform.",
    abstract: [
      "Reliable state estimation without GPS remains a central challenge for autonomous micro-aerial vehicles operating indoors. We present a tightly-coupled visual-inertial odometry (VIO) pipeline that fuses stereo-depth features with high-rate inertial measurements to produce a drift-bounded pose estimate at 200 Hz on an embedded GPU.",
      "Our approach combines a sliding-window optimiser with online IMU bias estimation and a lightweight loop-closure module. We evaluate the system across corridor, lab and warehouse environments, demonstrating sustained GPS-denied autonomous flight with closed-loop position hold.",
      "Results show a mean trajectory error under 1.8% of distance travelled, with graceful degradation under motion blur and low-texture conditions.",
    ],
    keywords: ["VIO", "SLAM", "UAV", "Sensor Fusion", "Embedded GPU"],
    pdf: "#",
  },
  {
    slug: "edge-quantised-detection",
    title:
      "Sub-2-Watt Object Detection: INT8 Quantisation Strategies for Microcontroller-Class Vision",
    authors: ["K. Banerjee", "M. Gupta", "Dr. N. Rao"],
    year: 2025,
    venue: "RoboManipal Technical Report · ACM SIGBED MUJ",
    area: "Embedded AI",
    abstractPreview:
      "A study of post-training and quantisation-aware strategies that bring real-time object detection to sub-2-watt embedded targets.",
    abstract: [
      "Deploying deep object detectors on microcontroller-class hardware demands aggressive compression without collapsing accuracy. We systematically compare post-training quantisation and quantisation-aware training for a family of detector backbones targeting an embedded NPU.",
      "We characterise the accuracy–latency–power trade-off across calibration set sizes and per-channel versus per-tensor schemes, and propose a calibration recipe that preserves small-object recall.",
      "Our deployed model sustains 18 FPS within a 2 W envelope, retaining 94% of the full-precision mAP, enabling fully on-device perception for drones and ground vehicles.",
    ],
    keywords: ["Quantisation", "Edge AI", "TinyML", "Object Detection"],
    pdf: "#",
  },
  {
    slug: "decentralised-swarm-consensus",
    title:
      "Emergent Formation Control in Decentralised Micro-Robot Swarms over Lossy Mesh Radio",
    authors: ["T. Mehta", "S. Kulkarni", "A. Joshi", "Dr. S. Iyer"],
    year: 2026,
    venue: "RoboManipal Technical Report · ACM SIGBED MUJ",
    area: "Swarm Robotics",
    abstractPreview:
      "We show that simple local interaction rules over an unreliable mesh radio are sufficient for robust formation and flocking in a 12-agent swarm.",
    abstract: [
      "Centralised coordination scales poorly and fails catastrophically when the controller is lost. We investigate fully decentralised formation control in a swarm of twelve micro-robots communicating only with local neighbours over a lossy ESP-NOW mesh.",
      "Each agent runs identical local rules driven by infrared ranging and neighbour state. We analyse convergence to target formations under packet loss and agent dropout, and demonstrate self-healing flocking behaviour.",
      "Experiments confirm stable formations persist with up to 30% packet loss and recover after the removal of multiple agents, with no central controller present.",
    ],
    keywords: ["Swarm", "Decentralised Control", "Consensus", "Mesh"],
    pdf: "#",
  },
  {
    slug: "simreal-legged-locomotion",
    title:
      "Bridging the Reality Gap: Domain Randomisation for Transferable Legged Locomotion Policies",
    authors: ["R. Verma", "P. Deshmukh", "Dr. N. Rao"],
    year: 2026,
    venue: "RoboManipal Technical Report · ACM SIGBED MUJ",
    area: "Reinforcement Learning",
    abstractPreview:
      "An empirical study of domain-randomisation schedules that improve sim-to-real transfer of reinforcement-learned quadruped gaits.",
    abstract: [
      "Reinforcement-learned locomotion policies trained in simulation often fail to transfer to the real world. We study how the scheduling and breadth of domain randomisation over dynamics and terrain affects the robustness and transferability of quadruped gaits.",
      "Training thousands of agents in parallel, we evaluate policies on a battery of unseen terrains and disturbance tests, isolating which randomisation axes matter most for transfer.",
      "We find that curriculum-scheduled randomisation of friction and terrain geometry yields the largest gains, producing policies that maintain a stable gait across five previously unseen terrain classes.",
    ],
    keywords: ["Reinforcement Learning", "Sim-to-Real", "Locomotion", "PPO"],
    pdf: "#",
  },
  {
    slug: "agv-slam-dynamic-obstacles",
    title:
      "Real-Time 2D SLAM with Dynamic Obstacle Avoidance for Indoor Autonomous Ground Vehicles",
    authors: ["A. Joshi", "K. Banerjee", "M. Gupta", "Dr. S. Iyer"],
    year: 2026,
    venue: "RoboManipal Technical Report · ACM SIGBED MUJ",
    area: "Ground Autonomy",
    abstractPreview:
      "A modular navigation stack combining 2D LiDAR SLAM with reactive local planning for AGVs operating among people.",
    abstract: [
      "Indoor autonomous ground vehicles must map unknown spaces while safely sharing them with moving people. We present a modular navigation stack that pairs real-time 2D LiDAR SLAM with loop closure and a reactive local planner for dynamic obstacle avoidance.",
      "Wheel odometry and inertial data are fused for robust localisation, while a global planner and pure-pursuit controller track routes across the live occupancy map.",
      "We report mapping accuracy within ±3 cm and reliable avoidance of dynamic obstacles during continuous operation, establishing a reusable platform for AGV research.",
    ],
    keywords: ["SLAM", "AGV", "Navigation", "LiDAR", "Path Planning"],
    pdf: "#",
  },
];

export function getPaper(slug: string): Paper | undefined {
  return PAPERS.find((p) => p.slug === slug);
}
