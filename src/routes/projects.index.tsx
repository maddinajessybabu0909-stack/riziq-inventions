import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

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
    <section className="py-16 md:py-24"><div className="mx-auto max-w-6xl px-6 md:px-8">
      <div className="mb-12 max-w-3xl md:mb-20"><p className="section-kicker">Selected work</p><h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">Engineering you can see, test and improve.</h2><p className="mt-4 max-w-2xl leading-7 text-muted-foreground">Each project connects physical systems, intelligent software and practical learning.</p></div>
      <div className="project-showcase-list">{projects.map((project, index) => (
        <article key={project.slug} className="project-showcase group">
          <Link to="/projects/$project" params={{ project: project.slug }} className="project-showcase-media" aria-label={`Read the ${project.title} case study`}>
            <img src={project.image} alt={project.imageAlt} className="h-full w-full object-cover" width={1440} height={960} loading="lazy" />
            <span className="project-showcase-index">0{index + 1}</span>
          </Link>
          <div className="project-showcase-content">
            <div className="project-showcase-meta"><span>{project.industry}</span><span>RIZIQ project</span></div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <ul className="project-showcase-tags" aria-label={`${project.title} capabilities`}>
              {project.capabilities.slice(0, 3).map((capability) => <li key={capability}>{capability}</li>)}
            </ul>
            <Button asChild variant="link" className="project-showcase-link">
              <Link to="/projects/$project" params={{ project: project.slug }}>Read case study <ArrowRight /></Link>
            </Button>
          </div>
        </article>
      ))}</div>
    </div></section>
    <section className="bg-section py-16"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center md:px-8"><div><p className="section-kicker">Build with us</p><h2 className="mt-2 text-2xl font-bold">Have an intelligent system in mind?</h2><p className="mt-2 text-muted-foreground">Let's turn the idea into a testable engineering project.</p></div><Button asChild size="lg"><Link to="/contact">Discuss your project <ArrowRight /></Link></Button></div></section>
  </main>;
}