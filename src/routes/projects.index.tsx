import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Bot, CarFront, GraduationCap, RadioTower } from "lucide-react";

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
      <div className="mb-10 flex max-w-3xl items-end justify-between gap-6 md:mb-14"><div><p className="section-kicker">Four working directions</p><h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">Engineering you can see, test and improve.</h2></div><p className="hidden max-w-xs text-sm leading-6 text-muted-foreground lg:block">Each project connects physical systems, intelligent software and practical learning.</p></div>
      <div className="grid gap-7 md:grid-cols-2">{projects.map((project, index) => {
        const Icon = projectIcons[index];
        return <article key={project.slug} className="project-tile group">
          <Link to="/projects/$project" params={{ project: project.slug }} className="block" aria-label={`Explore ${project.title}`}>
            <div className="project-tile-media"><img src={project.image} alt={project.imageAlt} className="h-full w-full object-cover" width={1440} height={960} loading="lazy" /><span className="project-index">0{index + 1}</span></div>
            <div className="project-tile-body"><div className="flex items-center justify-between gap-4"><p className="section-kicker">{project.industry}</p>{Icon ? <span className="stat-icon"><Icon className="size-5" /></span> : null}</div>
              <h3 className="mt-5 text-2xl font-bold leading-tight md:text-[1.7rem]">{project.title}</h3><p className="mt-3 line-clamp-2 leading-7 text-muted-foreground">{project.summary}</p>
              <span className="project-tile-link">View project <ArrowUpRight className="size-4" /></span>
            </div>
          </Link>
        </article>;
      })}</div>
    </div></section>
    <section className="bg-section py-16"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center md:px-8"><div><p className="section-kicker">Build with us</p><h2 className="mt-2 text-2xl font-bold">Have an intelligent system in mind?</h2><p className="mt-2 text-muted-foreground">Let’s turn the idea into a testable engineering project.</p></div><Button asChild size="lg"><Link to="/contact">Discuss your project <ArrowUpRight /></Link></Button></div></section>
  </main>;
}