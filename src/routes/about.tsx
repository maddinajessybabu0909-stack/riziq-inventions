import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, FlaskConical, Gauge, Lightbulb, Target, ThumbsUp, Users } from "lucide-react";

import partnerImage from "@/assets/riziq-partner-natural.jpg";
import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About RIZIQ | Research-Led Technology" },
    { name: "description", content: "Learn how RIZIQ combines research, engineering and practical delivery to create useful technology." },
    { property: "og:title", content: "About RIZIQ | Research-Led Technology" },
    { property: "og:description", content: "A practical innovation partner for ambitious organizations." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutPage,
});

const principles = [
  { icon: FlaskConical, title: "Research first", text: "We begin with evidence, constraints and the people a solution needs to serve." },
  { icon: Gauge, title: "Built for reality", text: "Every concept is shaped around reliability, adoption and long-term value." },
  { icon: Compass, title: "Clear collaboration", text: "Small, focused teams keep decisions visible and progress easy to understand." },
];

const timeline = [
  { year: "The beginning", title: "A practical question", text: "RIZIQ began with a belief that research should travel further—out of reports and prototypes, into tools people can rely on." },
  { year: "Building the practice", title: "Disciplines came together", text: "Software, connected hardware, intelligent systems and product thinking became one integrated way of solving complex problems." },
  { year: "Working in the real world", title: "Context shaped the technology", text: "Field conditions, operational constraints and user feedback became part of the engineering process, not an afterthought." },
  { year: "What comes next", title: "Responsible scale", text: "We continue building partnerships that turn promising ideas into useful systems with measurable, lasting value." },
];

function AboutPage() {
  return <main className="min-h-screen bg-background">
    <PageIntro eyebrow="About RIZIQ" title="Ideas become valuable when they work in the real world." description="RIZIQ brings research, product thinking and engineering together to solve meaningful operational and community challenges." />
    <section className="py-20 md:py-24"><div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:px-8">
      <div className="overflow-hidden rounded-lg shadow-media"><img src={partnerImage} alt="Engineers collaborating on an intelligent sensor prototype" className="aspect-[8/6] h-full w-full object-cover" /></div>
      <div><p className="section-kicker">Our purpose</p><h2 className="mt-3 text-3xl font-bold">A bridge between possibility and practical impact.</h2><p className="mt-5 leading-7 text-muted-foreground">We help teams move from an early question to a tested, usable solution. That means connecting disciplines, challenging assumptions and building with the full operating environment in mind.</p><Button asChild className="mt-7 font-bold"><Link to="/contact">Work with us <ArrowRight /></Link></Button></div>
    </div></section>
    <section className="bg-cta py-20 text-hero-foreground"><div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.65fr_1.35fr] md:px-8"><div><div className="grid size-12 place-items-center rounded-md border border-hero-border bg-hero-soft"><Target /></div><p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-hero-muted">Our mission</p></div><div><h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">Make advanced technology useful, responsible and reachable.</h2><p className="mt-6 max-w-2xl leading-7 text-hero-muted">We exist to close the distance between a promising idea and meaningful adoption—building with the people, conditions and outcomes that define success.</p></div></div></section>
    <section className="py-20 md:py-24"><div className="mx-auto max-w-6xl px-6 md:px-8"><div className="grid gap-10 md:grid-cols-[0.72fr_1.28fr]"><div><p className="section-kicker">Our journey</p><h2 className="mt-3 text-3xl font-bold">Built one useful step at a time.</h2><p className="mt-5 leading-7 text-muted-foreground">Our story is not about chasing technology trends. It is about learning where technology can remove friction, expand possibility and earn trust.</p></div><ol className="timeline-list">{timeline.map((item) => <li key={item.title} className="timeline-item"><p className="section-kicker">{item.year}</p><h3 className="mt-2 text-xl font-bold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p></li>)}</ol></div></div></section>
    <section className="bg-section py-20"><div className="mx-auto max-w-6xl px-6 md:px-8"><p className="section-kicker">How we work</p><h2 className="mt-3 text-3xl font-bold">Curious by nature. Rigorous by design.</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{principles.map(({icon: Icon, title, text}) => <article key={title} className="content-card"><div className="stat-icon"><Icon /></div><h3 className="mt-5 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div>
      <div className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8">{[{value:"500+",label:"Projects delivered",icon:Lightbulb},{value:"50+",label:"Happy clients",icon:ThumbsUp},{value:"5+",label:"Years of experience",icon:Users}].map(({value,label,icon:Icon}) => <div key={label} className="text-center"><Icon className="mx-auto size-5 text-highlight"/><strong className="mt-2 block text-2xl">{value}</strong><span className="text-xs text-muted-foreground">{label}</span></div>)}</div>
      <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-border pt-9 sm:flex-row sm:items-center"><div><p className="section-kicker">The people behind RIZIQ</p><h2 className="mt-2 text-2xl font-bold">Meet the team soon.</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">We are preparing verified profiles with the real names, roles and experience of the people doing the work.</p></div><Button asChild variant="outline"><Link to="/contact">Talk to the team <ArrowRight /></Link></Button></div>
    </div></section>
  </main>;
}