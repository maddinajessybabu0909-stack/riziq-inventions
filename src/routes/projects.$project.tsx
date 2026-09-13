import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getProject } from "@/lib/projects-data";

export const Route = createFileRoute("/projects/$project")({
  loader: ({ params }) => {
    const project = getProject(params.project);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({ meta: [
    { title: loaderData ? `${loaderData.title} | RIZIQ` : "Case Study Unavailable | RIZIQ" },
    { name: "description", content: loaderData?.summary ?? "This RIZIQ case study is unavailable." },
    { property: "og:title", content: loaderData ? `${loaderData.title} | RIZIQ` : "Case Study Unavailable | RIZIQ" },
    { property: "og:description", content: loaderData?.summary ?? "This RIZIQ case study is unavailable." },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ProjectDetail,
});

function ProjectDetail() {
  const project = Route.useLoaderData();
  return <main className="min-h-screen bg-background"><section className="page-intro pt-32 text-hero-foreground md:pt-40"><div className="mx-auto max-w-6xl px-6 pb-16 md:px-8 md:pb-20"><p className="text-xs font-bold uppercase tracking-[0.24em] text-hero-muted">{project.industry}</p><h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">{project.title}</h1><p className="mt-6 max-w-2xl text-lg leading-7 text-hero-muted">{project.summary}</p></div></section>
    <section className="py-16 md:py-20"><div className="mx-auto max-w-6xl px-6 md:px-8"><img src={project.image} alt={project.imageAlt} className="aspect-[3/2] max-h-[640px] w-full rounded-lg object-cover shadow-media" width={1440} height={960} /><div className="mt-16 grid gap-12 lg:grid-cols-[1fr_0.8fr]"><div className="space-y-10">{[["The challenge",project.challenge],["Our approach",project.approach],["The solution",project.solution]].map(([title,text]) => <section key={title}><p className="section-kicker">{title}</p><h2 className="sr-only">{title}</h2><p className="mt-3 text-lg leading-8">{text}</p></section>)}</div><aside className="content-card self-start"><p className="section-kicker">What changed</p><ul className="mt-6 space-y-4">{project.outcomes.map((outcome) => <li key={outcome} className="flex gap-3 text-sm leading-6"><span className="stat-icon size-7"><Check className="size-4"/></span>{outcome}</li>)}</ul></aside></div><div className="mt-16 bg-section p-8 md:p-12"><Quote className="size-7 text-highlight"/><blockquote className="mt-5 max-w-4xl text-2xl font-bold leading-9">“{project.testimonial}”</blockquote><p className="mt-4 text-sm text-muted-foreground">{project.attribution} · Anonymized client perspective</p></div></div></section>
    <section className="bg-cta py-14 text-hero-foreground"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center md:px-8"><div><h2 className="text-2xl font-bold">Have a challenge worth exploring?</h2><p className="mt-2 text-hero-muted">We’ll help define a practical first step.</p></div><Button asChild size="lg"><Link to="/contact">Start a conversation <ArrowRight /></Link></Button></div></section>
  </main>;
}