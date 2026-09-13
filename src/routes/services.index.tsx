import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, BrainCircuit, Code2, Cpu, GraduationCap, RadioTower } from "lucide-react";

import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Technology Services | RIZIQ" },
    { name: "description", content: "Explore RIZIQ services across software, AI, IoT, robotics, embedded systems and technical training." },
    { property: "og:title", content: "Technology Services | RIZIQ" },
    { property: "og:description", content: "End-to-end technology services from research through delivery." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ServicesPage,
});

const services = [
  { icon: Code2, title: "Software Development", text: "Purpose-built web, mobile and cloud products designed around real workflows.", points: ["Product discovery", "Interface engineering", "Cloud architecture"] },
  { icon: BrainCircuit, title: "AI & Machine Learning", text: "Focused intelligence that improves decisions, automation and customer experiences.", points: ["Applied AI strategy", "Predictive systems", "Workflow automation"] },
  { icon: RadioTower, title: "IoT Solutions", text: "Connected systems that make physical environments visible and manageable.", points: ["Sensor integration", "Remote monitoring", "Operational dashboards"] },
  { icon: Bot, title: "Robotics", text: "Automation concepts and prototypes designed for precision and repeatability.", points: ["Prototype development", "Control systems", "Process automation"] },
  { icon: Cpu, title: "Embedded Systems", text: "Reliable hardware-software systems shaped for demanding real-world conditions.", points: ["Firmware development", "Hardware integration", "System validation"] },
  { icon: GraduationCap, title: "Training & Workshops", text: "Hands-on learning that helps teams confidently adopt modern technologies.", points: ["Team upskilling", "Technical workshops", "Innovation programs"] },
];

function ServicesPage() {
  return <main className="min-h-screen bg-background"><PageIntro eyebrow="Capabilities" title="One partner from first question to working solution." description="Our multidisciplinary teams combine strategic research, practical engineering and careful delivery across the technology lifecycle." />
    <section className="py-20 md:py-24"><div className="mx-auto max-w-6xl px-6 md:px-8"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(({icon: Icon,title,text,points}, index) => <article key={title} className="content-card flex min-h-80 flex-col"><div className={`service-icon ${index % 3 === 0 ? "service-blue" : index % 3 === 1 ? "service-violet" : "service-teal"}`}><Icon /></div><h2 className="mt-6 text-xl font-bold">{title}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p><ul className="mt-6 space-y-2 border-t border-border pt-5 text-sm">{points.map(point => <li key={point} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-primary"/>{point}</li>)}</ul></article>)}</div></div></section>
    <section className="bg-section py-16"><div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between md:px-8"><div><p className="section-kicker">Have a challenge?</p><h2 className="mt-2 text-2xl font-bold">Let’s define the right solution together.</h2></div><Button asChild size="lg" className="font-bold"><Link to="/contact">Start a conversation <ArrowRight /></Link></Button></div></section>
  </main>;
}