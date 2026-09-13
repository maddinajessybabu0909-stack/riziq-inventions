import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Factory, HeartPulse, Leaf, Network } from "lucide-react";

import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Project Capabilities | RIZIQ" },
    { name: "description", content: "See the kinds of connected, intelligent and human-centered technology projects RIZIQ is built to deliver." },
    { property: "og:title", content: "Project Capabilities | RIZIQ" },
    { property: "og:description", content: "Technology project capabilities designed for measurable real-world impact." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ProjectsPage,
});

const work = [
  { icon: Network, label: "Connected operations", title: "See systems clearly, wherever they operate.", text: "Sensor networks, remote monitoring and dashboards that turn field activity into useful operational information." },
  { icon: Factory, label: "Intelligent automation", title: "Make repetitive processes safer and more consistent.", text: "Focused robotics and embedded solutions that support precision, reliability and better use of skilled teams." },
  { icon: HeartPulse, label: "Human-centered platforms", title: "Give people tools that fit the way they work.", text: "Accessible software experiences shaped through research, prototyping and continuous feedback." },
  { icon: Leaf, label: "Resource insight", title: "Use data to reduce waste and improve resilience.", text: "Connected measurement and decision-support tools for energy, agriculture and resource-conscious operations." },
];

function ProjectsPage() {
  return <main className="min-h-screen bg-background"><PageIntro eyebrow="Project capabilities" title="Technology is most powerful when its impact is visible." description="We work across software and physical systems to create solutions that are useful on day one and adaptable for what comes next." />
    <section className="py-20 md:py-24"><div className="mx-auto max-w-6xl px-6 md:px-8"><div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">{work.map(({icon:Icon,label,title,text}) => <article key={label} className="bg-card p-7 md:p-9"><Icon className="size-7 text-highlight"/><p className="mt-8 section-kicker">{label}</p><h2 className="mt-3 max-w-md text-2xl font-bold">{title}</h2><p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div>
      <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-border pt-10 md:flex-row md:items-center"><div><h2 className="text-2xl font-bold">Your challenge could be next.</h2><p className="mt-2 text-muted-foreground">Bring us the problem, the context and the ambition.</p></div><Button asChild size="lg" className="font-bold"><Link to="/contact">Discuss your project <ArrowRight /></Link></Button></div>
    </div></section>
  </main>;
}