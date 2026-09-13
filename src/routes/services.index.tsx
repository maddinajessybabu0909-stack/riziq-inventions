import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, BrainCircuit, Code2, Cpu, GraduationCap, RadioTower } from "lucide-react";

import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services-data";

const icons = { "software-development": Code2, "ai-machine-learning": BrainCircuit, "iot-solutions": RadioTower, robotics: Bot, "embedded-systems": Cpu, "training-workshops": GraduationCap } as const;

export const Route = createFileRoute("/services/")({
  head: () => ({ meta: [
    { title: "Technology Services | RIZIQ" },
    { name: "description", content: "Explore RIZIQ services across software, AI, IoT, robotics, embedded systems and technical training." },
    { property: "og:title", content: "Technology Services | RIZIQ" },
    { property: "og:description", content: "End-to-end technology services from research through delivery." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ServicesPage,
});

function ServicesPage() {
  return <main className="min-h-screen bg-background"><PageIntro eyebrow="Capabilities" title="One partner from first question to working solution." description="Choose a focused service or bring us a challenge that crosses disciplines. Every engagement begins by defining the outcome, constraints and right first step." />
    <section className="py-20 md:py-24"><div className="mx-auto max-w-6xl px-6 md:px-8"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => { const Icon = icons[service.slug]; return <article key={service.slug} className="content-card flex min-h-96 flex-col"><div className={`service-icon ${index % 3 === 0 ? "service-blue" : index % 3 === 1 ? "service-violet" : "service-teal"}`}><Icon /></div><h2 className="mt-6 text-xl font-bold">{service.title}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{service.short}</p><ul className="mt-6 space-y-2 border-t border-border pt-5 text-sm">{service.capabilities.slice(0,3).map(point => <li key={point} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-primary"/>{point}</li>)}</ul><Button asChild variant="outline" className="mt-auto self-start"><Link to="/services/$service" params={{ service: service.slug }}>Explore service <ArrowRight /></Link></Button></article>})}</div></div></section>
    <section className="bg-section py-16"><div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between md:px-8"><div><p className="section-kicker">Not sure where to start?</p><h2 className="mt-2 text-2xl font-bold">Bring us the challenge, not a finished brief.</h2></div><Button asChild size="lg"><Link to="/contact">Start a conversation <ArrowRight /></Link></Button></div></section>
  </main>;
}