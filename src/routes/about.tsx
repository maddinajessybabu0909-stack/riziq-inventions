import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, FlaskConical, Gauge, Lightbulb, ThumbsUp, Users } from "lucide-react";

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

function AboutPage() {
  return <main className="min-h-screen bg-background">
    <PageIntro eyebrow="About RIZIQ" title="Ideas become valuable when they work in the real world." description="RIZIQ brings research, product thinking and engineering together to solve meaningful operational and community challenges." />
    <section className="py-20 md:py-24"><div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:px-8">
      <div className="overflow-hidden rounded-lg shadow-media"><img src={partnerImage} alt="Engineers collaborating on an intelligent sensor prototype" className="aspect-[8/6] h-full w-full object-cover" /></div>
      <div><p className="section-kicker">Our purpose</p><h2 className="mt-3 text-3xl font-bold">A bridge between possibility and practical impact.</h2><p className="mt-5 leading-7 text-muted-foreground">We help teams move from an early question to a tested, usable solution. That means connecting disciplines, challenging assumptions and building with the full operating environment in mind.</p><Button asChild className="mt-7 font-bold"><Link to="/contact">Work with us <ArrowRight /></Link></Button></div>
    </div></section>
    <section className="bg-section py-20"><div className="mx-auto max-w-6xl px-6 md:px-8"><p className="section-kicker">How we work</p><h2 className="mt-3 text-3xl font-bold">Curious by nature. Rigorous by design.</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{principles.map(({icon: Icon, title, text}) => <article key={title} className="content-card"><div className="stat-icon"><Icon /></div><h3 className="mt-5 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div>
      <div className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8">{[{value:"500+",label:"Projects delivered",icon:Lightbulb},{value:"50+",label:"Happy clients",icon:ThumbsUp},{value:"5+",label:"Years of experience",icon:Users}].map(({value,label,icon:Icon}) => <div key={label} className="text-center"><Icon className="mx-auto size-5 text-highlight"/><strong className="mt-2 block text-2xl">{value}</strong><span className="text-xs text-muted-foreground">{label}</span></div>)}</div>
    </div></section>
  </main>;
}