export type Robot = {
  slug: string;
  name: string;
  codename: string;
  category:
    | "Robo Soccer"
    | "Line Follower"
    | "Drone"
    | "Autonomous System"
    | "Manipulator"
    | "Experimental";
  year: number;
  status: "Active" | "Competition Ready" | "In Development" | "Retired";
  tagline: string;
  summary: string;
  overview: string[];
  specs: { label: string; value: string }[];
  metrics: { label: string; value: string }[];
  stack: string[];
  highlights: string[];
  team: string[];
};

export const ROBOTS: Robot[] = [
  {
    slug: "striker-01",
    name: "Striker-01",
    codename: "RM-SOC-01",
    category: "Robo Soccer",
    year: 2025,
    status: "Competition Ready",
    tagline: "Omnidirectional autonomous striker built for sub-200ms reaction.",
    summary:
      "A three-wheeled omnidirectional soccer bot with onboard vision, capable of tracking the ball and goal in real time and executing curved interception paths.",
    overview: [
      "Striker-01 is RoboManipal's flagship autonomous soccer platform, engineered around a holonomic three-wheel omni drive that lets it translate and rotate independently. This gives the bot the agility to intercept a moving ball without ever breaking line of sight to the goal.",
      "An onboard vision pipeline running on a Raspberry Pi 5 fuses a global-shutter camera with the IMU to estimate ball trajectory, then a behaviour tree decides between intercept, dribble, and shoot states. A dedicated STM32 motion controller closes the velocity loop at 1 kHz for crisp, low-latency response.",
      "The chassis is a CNC-milled aluminium monocoque with a 3D-printed kicker housing. A capacitor-bank solenoid kicker delivers a tunable shot, while the spring-loaded dribbler keeps the ball captured during evasive manoeuvres.",
    ],
    specs: [
      { label: "Drive", value: "3-wheel holonomic omni" },
      { label: "Compute", value: "Raspberry Pi 5 + STM32F4" },
      { label: "Vision", value: "Global-shutter 120 FPS" },
      { label: "Top Speed", value: "3.2 m/s" },
      { label: "Kicker", value: "Capacitor solenoid, 6 J" },
      { label: "Battery", value: "4S LiPo, 14.8 V" },
    ],
    metrics: [
      { label: "Reaction Time", value: "180 ms" },
      { label: "Control Loop", value: "1 kHz" },
      { label: "Weight", value: "2.4 kg" },
    ],
    stack: ["ROS 2", "OpenCV", "C/C++", "Python", "STM32 HAL", "Fusion 360"],
    highlights: [
      "Top-4 finish at the 2025 inter-university autonomous soccer challenge",
      "Custom 1 kHz field-oriented motor controller designed in-house",
      "Sub-200 ms perception-to-actuation latency",
    ],
    team: ["Robotics Team", "Development Team"],
  },
  {
    slug: "vector-line-follower",
    name: "Vector",
    codename: "RM-LF-07",
    category: "Line Follower",
    year: 2024,
    status: "Competition Ready",
    tagline: "PID-tuned speed demon that holds the racing line at 2.5 m/s.",
    summary:
      "A maze-and-track line following robot with a 16-sensor array, cascaded PID control, and a carbon-fibre chassis tuned for cornering grip.",
    overview: [
      "Vector is built for one thing: carrying the maximum possible speed through a line-following circuit. A 16-channel reflectance array sampled at 2 kHz feeds a cascaded PID controller that anticipates corners using a weighted line-position estimate.",
      "The low-slung carbon-fibre chassis keeps the centre of gravity millimetres off the floor, and a downforce-generating front lip lets the bot brake later into hairpins. Coreless motors with custom silicone tyres deliver the grip.",
      "An auto-calibration routine profiles the track surface on the formation lap, adapting sensor thresholds to lighting so Vector runs identically on glossy or matte tracks.",
    ],
    specs: [
      { label: "Sensors", value: "16-ch reflectance array" },
      { label: "Controller", value: "Teensy 4.1 @ 600 MHz" },
      { label: "Drive", value: "Dual coreless + silicone tyres" },
      { label: "Top Speed", value: "2.5 m/s" },
      { label: "Control", value: "Cascaded PID, 2 kHz" },
      { label: "Mass", value: "190 g" },
    ],
    metrics: [
      { label: "Lap Best", value: "11.4 s" },
      { label: "Sample Rate", value: "2 kHz" },
      { label: "Weight", value: "190 g" },
    ],
    stack: ["C++", "Teensyduino", "MATLAB", "KiCad"],
    highlights: [
      "1st place — Techniche Line Follower sprint, 2024",
      "On-track adaptive sensor auto-calibration",
      "Custom 4-layer PCB integrating MCU, drivers and array",
    ],
    team: ["Robotics Team"],
  },
  {
    slug: "skyhawk-drone",
    name: "Skyhawk",
    codename: "RM-UAV-03",
    category: "Drone",
    year: 2025,
    status: "Active",
    tagline: "GPS-denied autonomous quadrotor with onboard visual odometry.",
    summary:
      "A research quadrotor that navigates indoors without GPS using visual-inertial odometry and a depth camera for obstacle-aware path planning.",
    overview: [
      "Skyhawk explores autonomy where GPS cannot reach. A stereo-depth camera and IMU feed a visual-inertial odometry stack, giving the drone a drift-corrected estimate of its own pose inside warehouses, corridors and labs.",
      "On top of localisation, an onboard companion computer runs a sampling-based planner that threads collision-free trajectories through cluttered space, handing setpoints to a PX4 flight controller.",
      "Skyhawk is the platform behind two of the chapter's active research threads on autonomous inspection and aerial mapping.",
    ],
    specs: [
      { label: "Frame", value: '5" carbon X-quad' },
      { label: "Companion", value: "NVIDIA Jetson Orin Nano" },
      { label: "Flight Ctrl", value: "PX4 on Pixhawk 6C" },
      { label: "Sensing", value: "Stereo depth + IMU VIO" },
      { label: "Endurance", value: "14 min" },
      { label: "Payload", value: "420 g" },
    ],
    metrics: [
      { label: "Pose Rate", value: "200 Hz" },
      { label: "Endurance", value: "14 min" },
      { label: "MTOW", value: "1.1 kg" },
    ],
    stack: ["ROS 2", "PX4", "OpenCV", "C++", "Python", "CUDA"],
    highlights: [
      "Fully GPS-denied indoor autonomous flight demonstrated",
      "Real-time VIO at 200 Hz on embedded GPU",
      "Foundation for two active research publications",
    ],
    team: ["Robotics Team", "Research Team"],
  },
  {
    slug: "pathfinder-agv",
    name: "Pathfinder",
    codename: "RM-AGV-02",
    category: "Autonomous System",
    year: 2026,
    status: "In Development",
    tagline: "Differential-drive AGV with LiDAR SLAM and real-time path tracking.",
    summary:
      "An autonomous ground vehicle that maps unknown environments with 2D LiDAR SLAM, then plans and tracks routes while avoiding dynamic obstacles.",
    overview: [
      "Pathfinder is the chapter's autonomous ground vehicle research platform. A 2D LiDAR drives a SLAM stack that builds an occupancy grid of an unknown space, while wheel odometry and an IMU are fused for robust pose tracking.",
      "A global planner computes the optimal route across the live map; a local planner reshapes the path in real time to flow around people and moving obstacles. A pure-pursuit controller keeps the vehicle glued to its trajectory.",
      "Designed as a modular testbed, Pathfinder mirrors the architecture of industrial AGVs and serves as a teaching platform for the development and research teams.",
    ],
    specs: [
      { label: "Drive", value: "Differential, 2× geared DC" },
      { label: "Compute", value: "Jetson Orin + ESP32 base" },
      { label: "Sensing", value: "2D LiDAR + IMU + encoders" },
      { label: "Mapping", value: "Grid SLAM, loop closure" },
      { label: "Payload", value: "12 kg" },
      { label: "Runtime", value: "3 hr" },
    ],
    metrics: [
      { label: "Map Accuracy", value: "±3 cm" },
      { label: "Payload", value: "12 kg" },
      { label: "Runtime", value: "3 hr" },
    ],
    stack: ["ROS 2", "Nav2", "SLAM Toolbox", "C++", "Python", "Gazebo"],
    highlights: [
      "Real-time 2D SLAM with loop closure",
      "Dynamic obstacle avoidance via local replanning",
      "Modular, industrial-style AGV teaching platform",
    ],
    team: ["Robotics Team", "Development Team", "Research Team"],
  },
  {
    slug: "helix-arm",
    name: "Helix",
    codename: "RM-ARM-01",
    category: "Manipulator",
    year: 2025,
    status: "Active",
    tagline: "5-DOF robotic arm with inverse kinematics and vision-guided pick.",
    summary:
      "A desktop 5-DOF manipulator that solves inverse kinematics in real time and uses a wrist camera for vision-guided pick-and-place.",
    overview: [
      "Helix is a 5-degree-of-freedom robotic arm built to explore motion planning and manipulation. A closed-form inverse kinematics solver maps target poses to joint angles, and trajectories are time-parameterised for smooth, jerk-limited motion.",
      "A wrist-mounted camera detects and localises objects, letting Helix perform vision-guided pick-and-place onto target zones. Each joint uses a smart serial servo with position and load feedback.",
      "Helix is the platform the chapter uses to teach manipulation, kinematics and ROS MoveIt motion planning.",
    ],
    specs: [
      { label: "DOF", value: "5 + gripper" },
      { label: "Actuators", value: "Serial bus smart servos" },
      { label: "Reach", value: "520 mm" },
      { label: "Payload", value: "750 g" },
      { label: "Planner", value: "MoveIt / closed-form IK" },
      { label: "Repeatability", value: "±1.2 mm" },
    ],
    metrics: [
      { label: "Reach", value: "520 mm" },
      { label: "Payload", value: "750 g" },
      { label: "Repeatability", value: "±1.2 mm" },
    ],
    stack: ["ROS 2", "MoveIt", "Python", "OpenCV", "Fusion 360"],
    highlights: [
      "Real-time closed-form inverse kinematics",
      "Vision-guided pick-and-place pipeline",
      "Used as the chapter's manipulation teaching rig",
    ],
    team: ["Robotics Team", "Development Team"],
  },
  {
    slug: "nimbus-swarm",
    name: "Nimbus",
    codename: "RM-EXP-05",
    category: "Experimental",
    year: 2026,
    status: "In Development",
    tagline: "Swarm of micro-bots exhibiting emergent collective behaviour.",
    summary:
      "An experimental fleet of palm-sized robots that coordinate over a mesh radio to form patterns, flock, and collectively map a space.",
    overview: [
      "Nimbus is RoboManipal's exploration of swarm robotics — many simple agents producing complex emergent behaviour. Each palm-sized bot carries an IR ranging ring and an ESP-NOW mesh radio, sharing only local state with its neighbours.",
      "From these local rules emerge global behaviours: flocking, pattern formation, and distributed area coverage with no central controller. A ceiling camera provides ground-truth for research, but the swarm itself runs fully decentralised.",
      "Nimbus is a deliberately open research testbed for studying decentralised control, consensus and bio-inspired algorithms.",
    ],
    specs: [
      { label: "Agents", value: "12 micro-bots" },
      { label: "Radio", value: "ESP-NOW mesh" },
      { label: "Sensing", value: "8× IR ranging ring" },
      { label: "Control", value: "Fully decentralised" },
      { label: "Size", value: "70 mm Ø each" },
      { label: "Runtime", value: "90 min" },
    ],
    metrics: [
      { label: "Agents", value: "12" },
      { label: "Update", value: "50 Hz" },
      { label: "Runtime", value: "90 min" },
    ],
    stack: ["C++", "ESP-IDF", "Python", "NumPy", "KiCad"],
    highlights: [
      "Decentralised flocking with zero central controller",
      "Mesh-radio consensus between agents",
      "Open testbed for bio-inspired swarm research",
    ],
    team: ["Research Team", "Development Team"],
  },
];

export function getRobot(slug: string): Robot | undefined {
  return ROBOTS.find((r) => r.slug === slug);
}
