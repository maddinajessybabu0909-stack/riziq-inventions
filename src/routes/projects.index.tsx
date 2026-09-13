import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";

import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects-data";

export const Route = createFileRoute("/projects/")({
  head: () => ({ meta: [
    { title: "IoT, Robotics & AI Projects | RIZIQ" },
    { name: "description", content: "Explore RIZIQ projects in AI robotics, intelligent classrooms, electric vehicle systems and autonomous service robots." },
    { property: "og:title", content: "IoT, Robotics & AI Projects | RIZIQ" },
    { property: "og:description", content: "Applied engineering projects that connect AI, IoT, embedded systems and robotics." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ProjectsPage,
});

function ProjectsPage() {
  return <main className="min-h-screen bg-background">
    <PageIntro eyebrow="Built at RIZIQ" title="Intelligent systems made real." description="Explore practical platforms that bring AI, IoT, embedded intelligence and robotics together - from agile machines to connected classrooms and electric mobility." />
    <section className="py-20 md:py-24"><div className="mx-auto max-w-6xl space-y-16 px-6 md:px-8">{projects.map((project, index) => <article key={project.slug} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"><div className={`overflow-hidden rounded-lg shadow-media ${index % 2 ? "lg:order-2" : ""}`}><img src={project.image} alt={project.imageAlt} className="aspect-[3/2] h-full w-full object-cover" width={1440} height={960} loading="lazy" /></div><div><p className="section-kicker">{project.industry}</p><h2 className="mt-3 text-3xl font-bold leading-tight">{project.title}</h2><p className="mt-5 leading-7 text-muted-foreground">{project.summary}</p><div className="mt-7 border-l-2 border-primary pl-5"><Quote className="size-5 text-highlight"/><blockquote className="mt-3 text-sm font-medium leading-6">“{project.testimonial}”</blockquote><p className="mt-2 text-xs text-muted-foreground">{project.attribution}</p></div><Button asChild className="mt-7 font-bold"><Link to="/projects/$project" params={{ project: project.slug }}>Read case study <ArrowRight /></Link></Button></div></article>)}</div></section>
    <section className="bg-section py-16"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center md:px-8"><div><p className="section-kicker">Build with us</p><h2 className="mt-2 text-2xl font-bold">Have an intelligent system in mind?</h2><p className="mt-2 text-muted-foreground">Let's turn the idea into a testable engineering project.</p></div><Button asChild size="lg"><Link to="/contact">Discuss your project <ArrowRight /></Link></Button></div></section>
  </main>;
}