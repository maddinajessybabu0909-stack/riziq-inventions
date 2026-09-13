import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, CarFront, GraduationCap, RadioTower } from "lucide-react";

import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects-data";

const projectIcons = [Bot, GraduationCap, CarFront, RadioTower];

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
    <section className="py-16 md:py-24"><div className="mx-auto max-w-6xl px-6 md:px-8">
      <div className="grid gap-6 md:grid-cols-2">{projects.map((project, index) => {
        const Icon = projectIcons[index];
        return <article key={project.slug} className="group overflow-hidden rounded-lg border border-border bg-card shadow-media">
          <Link to="/projects/$project" params={{ project: project.slug }} className="block overflow-hidden" aria-label={`Explore ${project.title}`}>
            <img src={project.image} alt={project.imageAlt} className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" width={1440} height={960} loading="lazy" />
          </Link>
          <div className="p-6 md:p-8"><div className="flex items-center justify-between gap-4"><p className="section-kicker">{project.industry}</p>{Icon ? <span className="stat-icon"><Icon className="size-5" /></span> : null}</div>
            <h2 className="mt-5 text-2xl font-bold leading-tight">{project.title}</h2><p className="mt-4 leading-7 text-muted-foreground">{project.summary}</p>
            <Button asChild variant="outline" className="mt-7 font-bold"><Link to="/projects/$project" params={{ project: project.slug }}>Explore project <ArrowRight /></Link></Button>
          </div>
        </article>;
      })}</div>
    </div></section>
    <section className="bg-section py-16"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center md:px-8"><div><p className="section-kicker">Build with us</p><h2 className="mt-2 text-2xl font-bold">Have an intelligent system in mind?</h2><p className="mt-2 text-muted-foreground">Let’s turn the idea into a testable engineering project.</p></div><Button asChild size="lg"><Link to="/contact">Discuss your project <ArrowRight /></Link></Button></div></section>
  </main>;
}