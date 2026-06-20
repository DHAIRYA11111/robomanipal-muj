export type Project = {
  slug: string;
  title: string;
  category:
    | "Embedded Systems"
    | "IoT"
    | "AI Applications"
    | "Automation"
    | "Robotics Research";
  year: number;
  summary: string;
  overview: string[];
  tech: string[];
  features: string[];
  outcome: string;
  team: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "edge-vision-node",
    title: "Edge Vision Node",
    category: "Embedded Systems",
    year: 2025,
    summary:
      "A low-power embedded vision module running on-device object detection at the edge with zero cloud dependency.",
    overview: [
      "Edge Vision Node packs a quantised neural network onto a microcontroller-class device, running real-time object detection without ever sending a frame to the cloud — critical for privacy-sensitive and bandwidth-constrained deployments.",
      "The team built a full pipeline: dataset capture, model training, INT8 quantisation, and deployment to an embedded NPU, with a tuned camera-to-inference path that holds a steady frame rate within a tight power budget.",
    ],
    tech: ["TensorFlow Lite", "C/C++", "ESP32-S3", "OpenCV", "Python"],
    features: [
      "On-device INT8 inference, no cloud",
      "Sub-2 W total power envelope",
      "End-to-end training-to-deployment toolchain",
    ],
    outcome:
      "Demonstrated 18 FPS detection on a sub-2 W embedded target, now reused across drone and robotic-arm platforms.",
    team: ["Development Team", "Research Team"],
  },
  {
    slug: "campus-iot-mesh",
    title: "Campus IoT Mesh",
    category: "IoT",
    year: 2024,
    summary:
      "A self-healing sensor mesh that monitors lab environment and equipment across the robotics workspace.",
    overview: [
      "Campus IoT Mesh blankets the robotics lab in low-power wireless sensor nodes that report temperature, humidity, air quality and equipment state to a central dashboard.",
      "Nodes form a self-healing mesh: if one drops, traffic reroutes automatically. A time-series backend stores readings and a live dashboard surfaces alerts, giving the team visibility into the workspace and the machines in it.",
    ],
    tech: ["ESP-NOW", "MQTT", "InfluxDB", "Grafana", "C++", "Node.js"],
    features: [
      "Self-healing wireless mesh topology",
      "Real-time dashboard with alerting",
      "Year-long battery life per node",
    ],
    outcome:
      "Deployed 20+ nodes across the lab with 99.4% uptime over an academic year.",
    team: ["Development Team"],
  },
  {
    slug: "gesture-control-ai",
    title: "Gesture Control AI",
    category: "AI Applications",
    year: 2025,
    summary:
      "A real-time hand-gesture interface that maps recognised gestures to robot commands.",
    overview: [
      "Gesture Control AI turns a webcam into a robot controller. A hand-landmark model extracts 21 keypoints per frame; a lightweight temporal classifier maps gesture sequences to discrete commands.",
      "The system was integrated with the Robotic Arm, letting an operator command a robot with natural hand motions and no physical controller.",
    ],
    tech: ["MediaPipe", "PyTorch", "Python", "ROS 2", "OpenCV"],
    features: [
      "21-point hand landmark tracking",
      "Temporal gesture-sequence classifier",
      "Live integration with robotic-arm controls",
    ],
    outcome:
      "Achieved 96% gesture classification accuracy in live demos at the chapter showcase.",
    team: ["Research Team", "Development Team"],
  },
  {
    slug: "smart-sorting-cell",
    title: "Smart Sorting Cell",
    category: "Automation",
    year: 2024,
    summary:
      "An automated conveyor cell that sorts objects by colour and shape using vision and a delta-style actuator.",
    overview: [
      "Smart Sorting Cell is a desktop industrial-automation demonstrator: a conveyor feeds mixed objects past a vision station that classifies each by colour and shape, then a fast actuator diverts it to the correct bin.",
      "A PLC-style state machine orchestrates the conveyor, sensors and actuator with hardware interlocks, mirroring real factory automation safety practice.",
    ],
    tech: ["OpenCV", "Python", "Arduino", "Ladder Logic", "Fusion 360"],
    features: [
      "Vision-based colour + shape classification",
      "Deterministic state-machine control",
      "Hardware interlocks & safe-state handling",
    ],
    outcome:
      "Sorted mixed feed at 40 items/min with 98% accuracy in continuous runs.",
    team: ["Development Team", "Robotics Team"],
  },
  {
    slug: "terrain-rl-sim",
    title: "Terrain Locomotion RL",
    category: "Robotics Research",
    year: 2026,
    summary:
      "A reinforcement-learning policy that teaches a simulated legged robot to walk over rough terrain.",
    overview: [
      "Terrain Locomotion RL trains a quadruped control policy entirely in simulation, then studies how well it transfers to harder, unseen terrain — a core sim-to-real research question.",
      "Using massively parallel physics simulation, thousands of robots train simultaneously. Domain randomisation over friction, mass and terrain teaches a robust policy that recovers from pushes and slopes.",
    ],
    tech: ["Isaac Gym", "PyTorch", "Python", "RL (PPO)", "NumPy"],
    features: [
      "Massively parallel sim training",
      "Domain randomisation for robustness",
      "Push-recovery and slope traversal",
    ],
    outcome:
      "Policy maintained stable gait across 5 unseen terrain types; basis for an ongoing publication.",
    team: ["Research Team"],
  },
  {
    slug: "voice-lab-assistant",
    title: "Voice Lab Assistant",
    category: "AI Applications",
    year: 2025,
    summary:
      "An offline voice assistant that controls lab equipment and answers robotics queries on-device.",
    overview: [
      "Voice Lab Assistant runs speech recognition and a compact language model fully offline, so the lab keeps working even without internet — and no audio ever leaves the building.",
      "Wake-word detection triggers local transcription; intents route to either equipment control (lights, power rails, the IoT mesh) or a retrieval-augmented answer drawn from the chapter's own documentation.",
    ],
    tech: ["Whisper", "Llama.cpp", "Python", "MQTT", "RAG"],
    features: [
      "Fully offline speech + language stack",
      "Retrieval over chapter documentation",
      "Voice control of lab equipment",
    ],
    outcome:
      "Runs on a single mini-PC controlling 6 lab subsystems with no cloud dependency.",
    team: ["Development Team", "Research Team"],
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
