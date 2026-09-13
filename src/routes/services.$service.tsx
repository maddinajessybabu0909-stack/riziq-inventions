import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getService } from "@/lib/services-data";

export const Route = createFileRoute("/services/$service")({
  loader: ({ params }) => {
    const service = getService(params.service);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({ meta: [
    { title: loaderData ? `${loaderData.title} Services | RIZIQ` : "Service Unavailable | RIZIQ" },
    { name: "description", content: loaderData?.short ?? "This RIZIQ service is unavailable." },
    { property: "og:title", content: loaderData ? `${loaderData.title} Services | RIZIQ` : "Service Unavailable | RIZIQ" },
    { property: "og:description", content: loaderData?.short ?? "This RIZIQ service is unavailable." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ServiceDetail,
});

function ServiceDetail() {
  const service = Route.useLoaderData();
  return <main className="min-h-screen bg-background"><section className="page-intro pt-32 text-hero-foreground md:pt-40"><div className="mx-auto max-w-6xl px-6 pb-16 md:px-8 md:pb-20"><Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-hero-muted"><ArrowLeft className="size-4"/> All services</Link><p className="mt-10 text-xs font-bold uppercase tracking-[0.24em] text-hero-muted">RIZIQ service</p><h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">{service.title}</h1><p className="mt-6 max-w-2xl text-lg leading-7 text-hero-muted">{service.promise}</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/contact" search={{ service: service.slug }}>Enquire about this service <ArrowRight /></Link></Button><Button asChild size="lg" variant="outline" className="border-hero-border bg-hero-soft text-hero-foreground hover:bg-hero-soft hover:text-hero-foreground"><a href="tel:+919014314025"><Phone/> Call us</a></Button></div></div></section>
    <section className="py-20 md:py-24"><div className="mx-auto max-w-6xl px-6 md:px-8"><div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="section-kicker">What we deliver</p><h2 className="mt-3 text-3xl font-bold">Built for the full operating context.</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">{service.description}</p><div className="mt-8 rounded-lg bg-section p-6"><p className="text-sm font-bold">A strong fit for</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{service.fit}</p></div></div><div className="grid gap-4 sm:grid-cols-2">{service.capabilities.map((capability) => <div key={capability} className="content-card flex min-h-28 items-start gap-3"><span className="stat-icon size-8"><Check className="size-4"/></span><p className="text-sm font-semibold leading-6">{capability}</p></div>)}</div></div>
      <div className="mt-20 grid gap-12 border-t border-border pt-16 lg:grid-cols-[1.2fr_0.8fr]"><div><p className="section-kicker">How we work</p><h2 className="mt-3 text-3xl font-bold">A clear path from question to outcome.</h2><ol className="mt-9 grid gap-4 sm:grid-cols-2">{service.process.map((step, index) => <li key={step} className="content-card"><span className="text-sm font-bold text-highlight">0{index + 1}</span><p className="mt-4 font-semibold leading-6">{step}</p></li>)}</ol></div><aside><p className="section-kicker">Typical outputs</p><ul className="mt-6 space-y-4">{service.outputs.map(output => <li key={output} className="flex items-center gap-3 border-b border-border pb-4 text-sm font-semibold"><Check className="size-4 text-highlight"/>{output}</li>)}</ul></aside></div>
    </div></section>
    <section className="bg-cta py-14 text-hero-foreground"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 px-6 lg:flex-row lg:items-center md:px-8"><div><h2 className="text-2xl font-bold">Let’s discuss your {service.title.toLowerCase()} challenge.</h2><p className="mt-2 text-hero-muted">Start with context. We’ll help define the next practical move.</p></div><div className="flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/contact" search={{ service: service.slug }}>Send an enquiry <ArrowRight /></Link></Button><Button asChild size="lg" variant="outline" className="border-hero-border bg-hero-soft text-hero-foreground hover:bg-hero-soft hover:text-hero-foreground"><a href="mailto:info@riziq.in"><Mail/> Email us</a></Button></div></div></section>
  </main>;
}