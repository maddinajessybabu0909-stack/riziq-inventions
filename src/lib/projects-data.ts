import hexabotImage from "@/assets/project-ai-hexabot.jpg";
import smartClassroomImage from "@/assets/project-smart-classroom.jpg";
import electricVehicleImage from "@/assets/project-electric-vehicle.jpg";
import serviceRobotImage from "@/assets/project-service-robot.jpg";

export const projects = [
  {
    slug: "ai-powered-hexabot",
    industry: "AI robotics",
    title: "AI-Powered Hexabot",
    summary: "A six-legged research platform that combines stable movement, environmental sensing and intelligent navigation for demanding terrain.",
    image: hexabotImage,
    imageAlt: "Six-legged AI robotics prototype being tested in an engineering lab",
    challenge: "Wheeled robots struggle on steps, debris and irregular surfaces. The project needed a compact platform that could coordinate six legs, remain balanced and react to obstacles without relying on constant manual control.",
    approach: "The system was divided into mechanical, embedded and intelligence layers. Leg geometry and gait sequences were tested first, followed by sensor fusion, motion control and repeatable navigation trials on varied surfaces.",
    solution: "The resulting Hexabot concept combines articulated legs, onboard processing, distance and orientation sensors, real-time gait control and an AI-ready perception layer in one modular research platform.",
    capabilities: ["Adaptive multi-leg gait control", "Obstacle and terrain sensing", "Wireless monitoring and commands", "Modular payload and sensor mounting"],
    outcomes: ["A stable platform for robotics and AI experimentation", "Reusable control modules for future autonomous systems", "A practical demonstrator for research, training and field robotics"],
    testimonial: "The Hexabot turns complex ideas in locomotion, sensing and autonomy into a platform people can observe, test and improve.",
    attribution: "Project principle, RIZIQ engineering team",
  },
  {
    slug: "ai-smart-classroom",
    industry: "IoT and education technology",
    title: "Smart Classrooms Using Intelligent Systems and AI",
    summary: "A connected classroom concept that brings teaching tools, environmental data and AI-assisted learning support into one practical system.",
    image: smartClassroomImage,
    imageAlt: "Teacher and students using intelligent systems in a connected classroom",
    challenge: "Digital classrooms often consist of disconnected screens, sensors and applications. Teachers need technology that supports lessons and lab work without creating additional complexity or replacing human guidance.",
    approach: "We mapped classroom routines, equipment use and common learning barriers before connecting the most useful signals. The design prioritised simple teacher controls, visible classroom conditions and assistance that stays under educator supervision.",
    solution: "The concept integrates a digital board, connected lab devices, classroom sensors and AI-assisted content tools through a single control layer designed for teaching, demonstrations and hands-on project work.",
    capabilities: ["Connected digital board and lesson controls", "Environmental and equipment monitoring", "AI-assisted learning content", "IoT lab kits and project dashboards"],
    outcomes: ["One coordinated view of classroom technology", "More opportunities for practical electronics learning", "A modular foundation that institutions can expand in stages"],
    testimonial: "Intelligence in a classroom should make teaching clearer and practical learning easier, not add another layer of complexity.",
    attribution: "Project principle, RIZIQ learning systems team",
  },
  {
    slug: "electric-vehicle-systems",
    industry: "Electric mobility",
    title: "Electric Vehicle Systems",
    summary: "A working EV development platform focused on safe energy management, motor control and live system visibility.",
    image: electricVehicleImage,
    imageAlt: "Engineers developing battery and motor control systems for an electric vehicle",
    challenge: "An electric vehicle prototype must coordinate the battery, motor, controller and safety systems while making operating conditions easy to inspect. The team needed a development setup suitable for testing before road deployment.",
    approach: "The powertrain was broken into testable subsystems. Battery sensing, protection, motor control and communications were validated independently before integration, with clear checkpoints for temperature, voltage and fault behaviour.",
    solution: "The platform brings together battery monitoring, motor drive control, embedded communications and a live diagnostic interface for structured EV research and prototype validation.",
    capabilities: ["Battery monitoring and protection", "Motor controller integration", "CAN-based system communication", "Live diagnostics and fault visibility"],
    outcomes: ["A safer path from subsystem tests to vehicle integration", "Clearer visibility into energy and drivetrain behaviour", "A reusable platform for EV research and student projects"],
    testimonial: "Every subsystem becomes easier to trust when energy, control and safety can be tested independently before full integration.",
    attribution: "Project principle, RIZIQ mobility team",
  },
  {
    slug: "autonomous-serving-robot",
    industry: "Service robotics and IoT",
    title: "Autonomous Serving Robot",
    summary: "A mobile service robot concept built to carry items, navigate shared spaces and support routine delivery tasks safely.",
    image: serviceRobotImage,
    imageAlt: "Autonomous serving robot being tested in an indoor corridor",
    challenge: "Indoor delivery environments are dynamic: people move unpredictably, routes change and the robot must stop safely near obstacles. The system also needed an easy way for staff to assign and monitor tasks.",
    approach: "The work began with route mapping and human interaction scenarios. Navigation, obstacle detection, load stability and task controls were then tested together in increasingly realistic indoor trials.",
    solution: "The serving robot concept combines mapped navigation, proximity sensing, a stable multi-tier carrier and a simple task interface for controlled delivery in hospitality, healthcare and institutional spaces.",
    capabilities: ["Autonomous indoor navigation", "Obstacle detection and safe stopping", "Destination-based task control", "Remote status and battery monitoring"],
    outcomes: ["A repeatable platform for indoor delivery trials", "Simple task assignment for non-technical operators", "A modular base for hospitality and institutional use cases"],
    testimonial: "Useful service robotics begins with safe movement, simple task controls and behaviour that people can understand immediately.",
    attribution: "Project principle, RIZIQ robotics team",
  },
] as const;

export type Project = (typeof projects)[number];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}