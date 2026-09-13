export const services = [
  {
    slug: "software-development",
    title: "Software Development",
    short: "Web, mobile and cloud products built around the way your team and customers actually work.",
    promise: "Turn a defined opportunity into reliable software people can use with confidence.",
    description: "We design and engineer focused digital products - from internal platforms to customer-facing applications - with usability, security and maintainability considered from the start.",
    capabilities: ["Product discovery and technical planning", "Web and mobile application engineering", "Cloud architecture and API integration", "Quality assurance and release support"],
    process: ["Understand the workflow and success criteria", "Prototype the critical experience", "Build in measurable releases", "Launch, learn and improve"],
    outputs: ["Product roadmap", "Experience prototype", "Production-ready application", "Technical documentation"],
    fit: "New digital products, modernization initiatives and operational tools that have outgrown spreadsheets or disconnected systems.",
  },
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    short: "Practical intelligence for better decisions, useful automation and more responsive experiences.",
    promise: "Move from an AI idea to a controlled, measurable system with a clear business purpose.",
    description: "We identify where AI can create genuine value, validate the data and workflow, then build solutions with human oversight, evaluation and responsible deployment in mind.",
    capabilities: ["AI opportunity and data readiness assessment", "Prediction and classification systems", "Knowledge assistants and workflow automation", "Model evaluation and integration"],
    process: ["Define the decision or task to improve", "Assess available data and risk", "Prototype and evaluate", "Integrate with clear safeguards"],
    outputs: ["Feasibility report", "Working proof of concept", "Evaluation framework", "Integrated AI capability"],
    fit: "Teams with a repeatable decision, information bottleneck or manual process that can be measured before and after implementation.",
  },
  {
    slug: "iot-solutions",
    title: "IoT Solutions",
    short: "Connected devices and dashboards that make physical operations visible and actionable.",
    promise: "Connect field conditions to the people who need to understand and act on them.",
    description: "We bring sensors, gateways, connectivity and software together as one dependable system, designed for the realities of installation, maintenance and daily use.",
    capabilities: ["Sensor and gateway architecture", "Device connectivity and data pipelines", "Remote monitoring dashboards", "Alerts, reporting and system integration"],
    process: ["Map the environment and decisions", "Select and test the sensing approach", "Pilot in real conditions", "Scale with monitoring and support"],
    outputs: ["System architecture", "Connected prototype", "Operations dashboard", "Deployment playbook"],
    fit: "Agriculture, facilities, energy and distributed operations where teams need timely insight beyond manual checks.",
  },
  {
    slug: "robotics",
    title: "Robotics",
    short: "Focused automation systems designed for precision, repeatability and safer work.",
    promise: "Prove the right automation concept before committing to a complex deployment.",
    description: "We combine mechanical thinking, controls and software to develop task-specific robotic concepts and prototypes grounded in the operating environment.",
    capabilities: ["Automation opportunity assessment", "Motion and control prototyping", "Machine vision integration", "Safety and validation planning"],
    process: ["Observe the task and constraints", "Model the automation concept", "Build and test a prototype", "Validate performance and next steps"],
    outputs: ["Automation concept", "Functional prototype", "Test findings", "Scale-up recommendations"],
    fit: "Repetitive, hazardous or precision-critical tasks where a controlled prototype can reduce implementation risk.",
  },
  {
    slug: "embedded-systems",
    title: "Embedded Systems",
    short: "Reliable firmware and hardware integration for products that work beyond the lab.",
    promise: "Build the dependable intelligence inside a connected product or machine.",
    description: "We develop embedded software and integrate electronics with careful attention to power, connectivity, resilience and the conditions the device must survive.",
    capabilities: ["Firmware architecture and development", "Hardware and peripheral integration", "Connectivity and power optimization", "System testing and diagnostics"],
    process: ["Define operating requirements", "Select the platform and architecture", "Develop through hardware-in-loop tests", "Validate and document"],
    outputs: ["Firmware codebase", "Integrated device prototype", "Validation results", "Manufacturing handoff package"],
    fit: "Connected products, instrumentation and control devices that require dependable behavior under real operating constraints.",
  },
  {
    slug: "training-workshops",
    title: "Training & Workshops",
    short: "Hands-on programs that help teams understand, evaluate and apply modern technology.",
    promise: "Give your team practical confidence, not just a presentation deck.",
    description: "We shape workshops around your participants, context and desired outcome, combining clear foundations with guided exercises and applied problem-solving.",
    capabilities: ["AI and emerging technology foundations", "IoT and embedded systems labs", "Innovation and product discovery workshops", "Custom technical upskilling"],
    process: ["Assess participants and goals", "Design the learning journey", "Deliver practical sessions", "Provide resources and next steps"],
    outputs: ["Tailored curriculum", "Facilitated sessions", "Hands-on exercises", "Learning resources"],
    fit: "Leadership teams, engineers, educators and organizations preparing to adopt or evaluate new technology responsibly.",
  },
] as const;

export type Service = (typeof services)[number];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}