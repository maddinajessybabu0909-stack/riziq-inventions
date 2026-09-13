import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";

import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects-data";

export const Route = createFileRoute("/projects/")({
  head: () => ({ meta: [
    { title: "Technology Case Studies | RIZIQ" },
    { name: "description", content: "Explore anonymized RIZIQ case studies across connected agriculture, manufacturing insight and healthcare operations." },
    { property: "og:title", content: "Technology Case Studies | RIZIQ" },
    { property: "og:description", content: "Practical technology case studies shaped around measurable real-world outcomes." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ProjectsPage,
});

function ProjectsPage() {
  return <main className="min-h-screen bg-background"><PageIntro eyebrow="Selected work" title="Real challenges. Practical systems. Visible progress." description="These anonymized case studies show how we connect research, engineering and real operating context. Identifying details are withheld to protect client confidentiality." />
    <section className="py-20 md:py-24"><div className="mx-auto max-w-6xl space-y-16 px-6 md:px-8">{projects.map((project, index) => <article key={project.slug} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"><div className={`overflow-hidden rounded-lg shadow-media ${index % 2 ? "lg:order-2" : ""}`}><img src={project.image} alt={project.imageAlt} className="aspect-[3/2] h-full w-full object-cover" width={1440} height={960} loading="lazy" /></div><div><p className="section-kicker">{project.industry}</p><h2 className="mt-3 text-3xl font-bold leading-tight">{project.title}</h2><p className="mt-5 leading-7 text-muted-foreground">{project.summary}</p><div className="mt-7 border-l-2 border-primary pl-5"><Quote className="size-5 text-highlight"/><blockquote className="mt-3 text-sm font-medium leading-6">“{project.testimonial}”</blockquote><p className="mt-2 text-xs text-muted-foreground">{project.attribution}</p></div><Button asChild className="mt-7 font-bold"><Link to="/projects/$project" params={{ project: project.slug }}>Read case study <ArrowRight /></Link></Button></div></article>)}</div></section>
    <section className="bg-section py-16"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center md:px-8"><div><p className="section-kicker">Your challenge</p><h2 className="mt-2 text-2xl font-bold">Let’s shape the next useful case study.</h2></div><Button asChild size="lg"><Link to="/contact">Discuss your project <ArrowRight /></Link></Button></div></section>
  </main>;
}