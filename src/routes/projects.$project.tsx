import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getProject } from "@/lib/projects-data";

export const Route = createFileRoute("/projects/$project")({
  loader: ({ params }) => {
    const project = getProject(params.project);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({ meta: [
    { title: loaderData ? `${loaderData.title} | RIZIQ` : "Project Unavailable | RIZIQ" },
    { name: "description", content: loaderData?.summary ?? "This RIZIQ project is unavailable." },
    { property: "og:title", content: loaderData ? `${loaderData.title} | RIZIQ` : "Project Unavailable | RIZIQ" },
    { property: "og:description", content: loaderData?.summary ?? "This RIZIQ project is unavailable." },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ProjectDetail,
});

function ProjectDetail() {
  const project = Route.useLoaderData();
  return <main className="min-h-screen bg-background">
    <section className="project-story-hero pt-32 text-hero-foreground md:pt-40"><div className="mx-auto grid max-w-6xl items-end gap-10 px-6 pb-10 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:pb-0"><header className="pb-6 lg:pb-16"><p className="text-xs font-bold uppercase tracking-[0.24em] text-hero-muted">{project.industry}</p><h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">{project.title}</h1><p className="mt-6 max-w-xl text-lg leading-8 text-hero-muted">{project.summary}</p></header><div className="project-story-image"><img src={project.image} alt={project.imageAlt} className="h-full w-full object-cover" width={1440} height={960} /></div></div></section>
    <section className="py-16 md:py-24"><div className="mx-auto max-w-6xl px-6 md:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20"><aside className="lg:sticky lg:top-28 lg:self-start"><p className="section-kicker">Project overview</p><h2 className="mt-3 text-3xl font-bold leading-tight">From a practical need to a working system.</h2><ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">{project.capabilities.map((capability) => <li key={capability} className="project-capability"><Check className="size-4" /> <span>{capability}</span></li>)}</ul></aside>
        <div className="project-story-sections">{[["01", "The challenge", project.challenge], ["02", "Our approach", project.approach], ["03", "The system", project.solution]].map(([number, title, text]) => <section key={title} className="project-story-section"><span>{number}</span><div><p className="section-kicker">{title}</p><h2 className="sr-only">{title}</h2><p className="mt-4 text-lg leading-8">{text}</p></div></section>)}</div>
      </div>
      <section className="mt-16 border-t border-border pt-12 md:mt-24 md:pt-16"><div className="max-w-2xl"><p className="section-kicker">What this enables</p><h2 className="mt-3 text-3xl font-bold">A foundation designed to keep evolving.</h2></div><div className="mt-9 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">{project.outcomes.map((outcome, index) => <div key={outcome} className="project-outcome"><span>0{index + 1}</span><p>{outcome}</p></div>)}</div></section>
    </div></section>
    <section className="bg-cta py-14 text-hero-foreground"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 px-6 lg:flex-row lg:items-center md:px-8"><div><p className="text-xs font-bold uppercase tracking-[0.24em] text-hero-muted">Start a related project</p><h2 className="mt-3 text-2xl font-bold">Let’s build the next working prototype.</h2><p className="mt-2 text-hero-muted">Share your problem, research goal or product idea with RIZIQ.</p></div><div className="flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/contact">Send an enquiry <ArrowRight /></Link></Button><Button asChild size="lg" variant="outline" className="border-hero-border bg-hero-soft text-hero-foreground hover:bg-hero-soft hover:text-hero-foreground"><a href="tel:+919014314025"><Phone /> Call us</a></Button><Button asChild size="icon" variant="outline" className="size-11 border-hero-border bg-hero-soft text-hero-foreground hover:bg-hero-soft hover:text-hero-foreground"><a href="mailto:info@riziq.in" aria-label="Email RIZIQ"><Mail /></a></Button></div></div></section>
  </main>;
}