import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Mail, MessageSquare, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getService, services } from "@/lib/services-data";

export const Route = createFileRoute("/services/$service")({
  loader: ({ params }) => {
    const service = getService(params.service);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} | RIZIQ Services` : "Service Unavailable | RIZIQ" },
      { name: "description", content: loaderData?.short ?? "This RIZIQ service is unavailable." },
      { property: "og:title", content: loaderData ? `${loaderData.title} | RIZIQ Services` : "Service Unavailable | RIZIQ" },
      { property: "og:description", content: loaderData?.short ?? "This RIZIQ service is unavailable." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServiceDetail,
});

function ServiceDetail() {
  const service = Route.useLoaderData();
  const others = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      <section className="page-intro pt-32 text-hero-foreground md:pt-40">
        <div className="mx-auto max-w-6xl px-6 pb-16 md:px-8 md:pb-20">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-hero-muted">RIZIQ service</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">{service.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-7 text-hero-muted">{service.promise}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contact" search={{ service: service.slug }}>
                Enquire about this service <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-hero-border bg-hero-soft text-hero-foreground hover:bg-hero-soft hover:text-hero-foreground"
            >
              <a href="tel:+919014314025">
                <Phone /> +91 90143-14025
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="section-kicker">What we deliver</p>
              <h2 className="mt-3 text-3xl font-bold">Built for the full operating context.</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">{service.description}</p>
              <div className="mt-8 rounded-lg bg-section p-6">
                <p className="text-sm font-bold">A strong fit for</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.fit}</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {service.capabilities.map((capability) => (
                <div key={capability} className="content-card flex min-h-28 items-start gap-3">
                  <span className="stat-icon size-8">
                    <Check className="size-4" />
                  </span>
                  <p className="text-sm font-semibold leading-6">{capability}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 border-t border-border pt-16">
            <p className="section-kicker">What this service includes</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold">The work, in plain terms.</h2>
            <div className="mt-9 grid gap-4 md:grid-cols-2">
              {service.offerings.map((offering, index) => (
                <article key={offering.title} className="content-card">
                  <div className="flex items-baseline gap-3">
                    <span className="text-sm font-bold text-highlight">0{index + 1}</span>
                    <h3 className="text-lg font-semibold leading-6">{offering.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{offering.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-12 border-t border-border pt-16 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="section-kicker">How we work</p>
              <h2 className="mt-3 text-3xl font-bold">A clear path from question to outcome.</h2>
              <ol className="mt-9 grid gap-4 sm:grid-cols-2">
                {service.process.map((step, index) => (
                  <li key={step} className="content-card">
                    <span className="text-sm font-bold text-highlight">0{index + 1}</span>
                    <p className="mt-4 font-semibold leading-6">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
            <aside>
              <p className="section-kicker">Typical outputs</p>
              <ul className="mt-6 space-y-4">
                {service.outputs.map((output) => (
                  <li key={output} className="flex items-center gap-3 border-b border-border pb-4 text-sm font-semibold">
                    <Check className="size-4 text-highlight" />
                    {output}
                  </li>
                ))}
              </ul>
              <p className="section-kicker mt-10">Tools and standards</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.tech.map((item) => (
                  <span key={item} className="rounded-full bg-section px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </aside>
          </div>

          <div className="mt-20 grid gap-12 border-t border-border pt-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="section-kicker">Common questions</p>
              <h2 className="mt-3 text-3xl font-bold">Before you get in touch.</h2>
              <p className="mt-5 text-muted-foreground">
                Something not answered here? Ask us directly - we reply with a straight answer, not a sales pitch.
              </p>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq) => (
                <details key={faq.q} className="content-card group">
                  <summary className="cursor-pointer list-none text-base font-semibold leading-6 marker:hidden">
                    {faq.q}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="mt-20 border-t border-border pt-16">
            <p className="section-kicker">Explore more</p>
            <h2 className="mt-3 text-3xl font-bold">Other services</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {others.map((item) => (
                <Link
                  key={item.slug}
                  to="/services/$service"
                  params={{ service: item.slug }}
                  className="content-card group block transition-transform hover:-translate-y-1"
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.short}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-highlight">
                    View service <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
            <Link to="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-highlight">
              See all services <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cta py-16 text-hero-foreground">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold">Talk to us about {service.title.toLowerCase()}.</h2>
              <p className="mt-3 max-w-lg text-hero-muted">
                Share your context in a few lines. We will tell you honestly whether we are the right fit and what a
                sensible first step looks like.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/contact" search={{ service: service.slug }}>
                    Send an enquiry <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="tel:+919014314025"
                className="rounded-lg border border-hero-border bg-hero-soft p-5 transition-colors hover:bg-hero-border/40"
              >
                <Phone className="size-5" />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-hero-muted">Call</p>
                <p className="mt-1 font-semibold">+91 90143-14025</p>
              </a>
              <a
                href={`mailto:info@riziq.in?subject=${encodeURIComponent(`${service.title} enquiry`)}`}
                className="rounded-lg border border-hero-border bg-hero-soft p-5 transition-colors hover:bg-hero-border/40"
              >
                <Mail className="size-5" />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-hero-muted">Email</p>
                <p className="mt-1 font-semibold">info@riziq.in</p>
              </a>
              <div className="rounded-lg border border-hero-border bg-hero-soft p-5 sm:col-span-2">
                <MessageSquare className="size-5" />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-hero-muted">Response time</p>
                <p className="mt-1 text-sm text-hero-muted">
                  We usually reply within one working day and follow up with a short discovery call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
