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
    <section className="page-intro pt-32 text-hero-foreground md:pt-40"><div className="mx-auto max-w-6xl px-6 pb-16 md:px-8 md:pb-20"><p className="text-xs font-bold uppercase tracking-[0.24em] text-hero-muted">{project.industry}</p><h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">{project.title}</h1><p className="mt-6 max-w-2xl text-lg leading-7 text-hero-muted">{project.summary}</p></div></section>
    <section className="py-14 md:py-20"><div className="mx-auto max-w-6xl px-6 md:px-8">
      <img src={project.image} alt={project.imageAlt} className="aspect-[3/2] max-h-[640px] w-full rounded-lg object-cover shadow-media" width={1440} height={960} />
      <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-10">{[["The challenge", project.challenge], ["How we approached it", project.approach], ["The system", project.solution]].map(([title, text]) => <section key={title}><p className="section-kicker">{title}</p><h2 className="sr-only">{title}</h2><p className="mt-3 text-lg leading-8">{text}</p></section>)}</div>
        <aside className="content-card self-start"><p className="section-kicker">Core capabilities</p><ul className="mt-6 space-y-4">{project.capabilities.map((capability) => <li key={capability} className="flex gap-3 text-sm leading-6"><span className="stat-icon size-7"><Check className="size-4" /></span>{capability}</li>)}</ul></aside>
      </div>
      <section className="mt-14 border-y border-border py-10"><p className="section-kicker">What this enables</p><div className="mt-7 grid gap-6 md:grid-cols-3">{project.outcomes.map((outcome, index) => <div key={outcome} className="border-l-2 border-primary pl-5"><span className="text-xs font-bold text-highlight">0{index + 1}</span><p className="mt-2 font-bold leading-6">{outcome}</p></div>)}</div></section>
    </div></section>
    <section className="bg-cta py-14 text-hero-foreground"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 px-6 lg:flex-row lg:items-center md:px-8"><div><p className="text-xs font-bold uppercase tracking-[0.24em] text-hero-muted">Start a related project</p><h2 className="mt-3 text-2xl font-bold">Let’s build the next working prototype.</h2><p className="mt-2 text-hero-muted">Share your problem, research goal or product idea with RIZIQ.</p></div><div className="flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/contact">Send an enquiry <ArrowRight /></Link></Button><Button asChild size="lg" variant="outline" className="border-hero-border bg-hero-soft text-hero-foreground hover:bg-hero-soft hover:text-hero-foreground"><a href="tel:+919014314025"><Phone /> Call us</a></Button><Button asChild size="icon" variant="outline" className="size-11 border-hero-border bg-hero-soft text-hero-foreground hover:bg-hero-soft hover:text-hero-foreground"><a href="mailto:info@riziq.in" aria-label="Email RIZIQ"><Mail /></a></Button></div></div></section>
  </main>;
}