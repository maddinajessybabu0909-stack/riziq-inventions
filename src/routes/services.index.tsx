import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { Button } from "@/components/ui/button";
import { breadcrumbSchema, jsonLdGraph, pageHead, serviceListSchema, webPageSchema } from "@/lib/seo";
import { services } from "@/lib/services-data";

const tones = ["schematic-blue", "schematic-violet", "schematic-teal", "schematic-amber"] as const;

const servicesTitle = "Engineering Services | Projects, Training & Research | RIZIQ";
const servicesDescription =
  "Explore RIZIQ services across software, AI, IoT, robotics, embedded systems, VLSI, MATLAB, mechanical and civil design, student projects, workshops, FDP, CRT and research publications.";

export const Route = createFileRoute("/services/")({
  head: () => pageHead({
    title: servicesTitle,
    description: servicesDescription,
    path: "/services",
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="min-h-screen bg-hero text-hero-foreground">
      <JsonLd data={jsonLdGraph([
        webPageSchema({ path: "/services", title: servicesTitle, description: servicesDescription, type: "CollectionPage" }),
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]),
        serviceListSchema(),
      ])} />
      <section className="services-schematic-hero pt-32 md:pt-40">
        <div className="pointer-events-none absolute -left-10 -top-10 size-32 rounded-full bg-[color-mix(in_oklab,var(--schematic-teal)_10%,transparent)] blur-3xl" />
        <div className="mx-auto max-w-6xl px-6 pb-16 md:px-8 md:pb-20">
          <p className="about-kicker">Software · AI · IoT · Robotics · Embedded · Mechanical</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.1] md:text-6xl">
            Engineering <span className="schematic-gradient-text">precision</span> solutions for innovation
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-hero-muted md:text-lg">
            We bridge the gap between complex engineering challenges and scalable real world applications through multi disciplinary technical excellence and strategic research.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const tone = tones[index % tones.length];
              const isLast = index === services.length - 1;
              return (
                <Link
                  key={service.slug}
                  to="/services/$service"
                  params={{ service: service.slug }}
                  className={`service-schematic group ${tone} ${isLast && services.length % 3 === 1 ? "lg:col-start-2" : ""}`}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <div className="service-schematic-glow" />
                  <div className="service-schematic-bar mb-8" />
                  <h2 className="text-xl font-bold md:text-2xl">{service.title}</h2>
                  <p className="service-schematic-desc mt-4 text-sm leading-relaxed">{service.short}</p>
                  <span className="service-schematic-link mt-6">
                    Learn more <ArrowRight className="size-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-hero-border/40 py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <div>
            <p className="section-kicker">Not sure where to start?</p>
            <h2 className="mt-2 text-2xl font-bold">Bring us the challenge, not a finished brief.</h2>
          </div>
          <Button asChild size="lg"><Link to="/contact">Start a conversation <ArrowRight /></Link></Button>
        </div>
      </section>
    </main>
  );
}
