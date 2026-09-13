import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BrainCircuit, CircuitBoard, RadioTower } from "lucide-react";

import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [
    { title: "RIZIQ Insights | Ideas in Applied Technology" },
    { name: "description", content: "Upcoming RIZIQ insights on applied AI, connected systems and practical product engineering." },
    { property: "og:title", content: "RIZIQ Insights | Ideas in Applied Technology" },
    { property: "og:description", content: "Practical perspectives from research, technology and innovation." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: BlogPage,
});

const topics = [
  { icon: BrainCircuit, label: "Applied AI", title: "Moving from impressive demos to useful intelligence." },
  { icon: RadioTower, label: "Connected systems", title: "Designing IoT around decisions, not device counts." },
  { icon: CircuitBoard, label: "Product engineering", title: "What makes a technology prototype ready for reality?" },
];

function BlogPage() {
  return <main className="min-h-screen bg-background"><PageIntro eyebrow="RIZIQ insights" title="Practical thinking for people building what comes next." description="We’re preparing field notes, engineering perspectives and lessons from applied innovation. Here is what we’ll be exploring." />
    <section className="py-20 md:py-24"><div className="mx-auto max-w-6xl px-6 md:px-8"><div className="grid gap-5 md:grid-cols-3">{topics.map(({icon:Icon,label,title}) => <article key={label} className="content-card"><Icon className="size-7 text-highlight"/><p className="mt-10 section-kicker">{label}</p><h2 className="mt-3 text-xl font-bold leading-7">{title}</h2><p className="mt-4 text-sm leading-6 text-muted-foreground">Original RIZIQ perspectives are coming soon.</p></article>)}</div>
      <div className="mt-12 rounded-lg bg-section p-8 md:flex md:items-center md:justify-between md:p-10"><div><p className="section-kicker">In the meantime</p><h2 className="mt-2 text-2xl font-bold">Have a topic or technical challenge in mind?</h2></div><Button asChild className="mt-6 font-bold md:mt-0"><Link to="/contact">Talk with our team <ArrowRight /></Link></Button></div>
    </div></section>
  </main>;
}