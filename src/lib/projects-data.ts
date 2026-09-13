import agricultureImage from "@/assets/case-study-agriculture.jpg";
import healthcareImage from "@/assets/case-study-healthcare.jpg";
import manufacturingImage from "@/assets/case-study-manufacturing.jpg";

export const projects = [
  {
    slug: "connected-crop-operations",
    industry: "Climate-smart agriculture",
    title: "Connected insight for more confident crop decisions",
    summary: "A field-ready monitoring concept that brings irrigation and environmental signals into one clear operating view.",
    image: agricultureImage,
    imageAlt: "Engineers installing connected monitoring equipment in a greenhouse",
    challenge: "A distributed growing operation relied on manual checks and disconnected readings. Teams needed a dependable way to understand changing field conditions without adding another complicated tool.",
    approach: "We mapped the decisions made each day, tested sensor placement in representative conditions and designed a low-friction dashboard around exceptions rather than raw data volume.",
    solution: "The resulting pilot connected environmental sensors, a rugged gateway and a responsive operations view with practical alerts for the field team.",
    outcomes: ["One shared view of changing field conditions", "Faster visibility between manual site visits", "A tested architecture ready for phased expansion"],
    testimonial: "The most useful part was how the team translated field realities into a system our operators could understand immediately.",
    attribution: "Operations lead, regional agriculture organization",
  },
  {
    slug: "predictive-production-insight",
    industry: "Advanced manufacturing",
    title: "From machine signals to timely maintenance insight",
    summary: "A focused monitoring pilot designed to help a production team spot abnormal equipment behavior earlier.",
    image: manufacturingImage,
    imageAlt: "Engineer testing an industrial machine monitoring system",
    challenge: "Maintenance knowledge was distributed across shift notes, operator experience and periodic inspections. The team wanted earlier signals without disrupting production or replacing existing machinery.",
    approach: "We studied the maintenance workflow, established a measurable baseline and instrumented one critical machine before designing the wider system.",
    solution: "A sensor and analytics pilot surfaced operating patterns in a simple dashboard, giving engineers evidence to investigate changes before they became urgent.",
    outcomes: ["A repeatable baseline for machine condition", "Clearer handoffs between operations and maintenance", "A practical roadmap for additional equipment"],
    testimonial: "RIZIQ kept the pilot grounded. We learned what data mattered before investing in a larger rollout.",
    attribution: "Engineering manager, mid-sized manufacturer",
  },
  {
    slug: "care-team-workflow",
    industry: "Healthcare operations",
    title: "A clearer workflow for coordinated care teams",
    summary: "A human-centered platform concept that reduces fragmented follow-up and makes responsibilities easier to see.",
    image: healthcareImage,
    imageAlt: "Team reviewing a healthcare operations platform on laptops",
    challenge: "A growing care network managed follow-up activities across several disconnected tools. Staff needed clarity without introducing more administrative burden or exposing sensitive information.",
    approach: "We interviewed representative users, mapped handoffs and prototyped the highest-risk interactions before engineering the core workflow.",
    solution: "The validated concept brought tasks, status and escalation cues into one accessible view designed around role-based responsibilities.",
    outcomes: ["A shared picture of pending follow-up", "Fewer ambiguous task handoffs", "A privacy-conscious foundation for further validation"],
    testimonial: "They listened to the way our team actually works and made the experience feel simpler rather than more technical.",
    attribution: "Program coordinator, community care network",
  },
] as const;

export type Project = (typeof projects)[number];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}