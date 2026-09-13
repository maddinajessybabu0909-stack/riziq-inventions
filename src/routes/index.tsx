import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/riziq-hero-natural.jpg";
import msmeRegistration from "@/assets/msme-registration-white.png.asset.json";
import partnerImage from "@/assets/riziq-partner-natural.jpg";
import { ImpactStats } from "@/components/impact-stats";
import { ServicesCarousel } from "@/components/services-carousel";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RIZIQ | Research, Innovation & Technology" },
      {
        name: "description",
        content:
          "RIZIQ turns research into real-world innovation through software, AI, IoT, robotics, and embedded systems.",
      },
      { property: "og:title", content: "RIZIQ | Research, Innovation & Technology" },
      {
        property: "og:description",
        content: "Intelligent solutions where research, technology and innovation meet.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "preload", as: "image", href: heroImage, fetchpriority: "high" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <section id="home" className="relative flex min-h-[720px] items-center bg-hero pt-24 text-hero-foreground md:min-h-[760px]">
        <img src={heroImage} alt="Engineers developing a robotics prototype in a technology studio" className="absolute inset-0 h-full w-full object-cover object-center" width={1536} height={864} fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-24 md:px-8">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.38em] text-hero-muted">Ideas to impact</p>
            <h1 className="max-w-xl text-4xl font-extrabold leading-[1.08] md:text-6xl">
              Turning Research into Real-World <span className="text-highlight">Innovation</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-hero-muted md:text-lg">
              RIZIQ builds intelligent solutions at the intersection of research, technology and innovation - helping businesses and communities reach new heights.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 px-6 font-bold"><Link to="/services">Explore Our Solutions</Link></Button>
              <Button asChild size="lg" variant="outline" className="h-12 border-hero-border bg-hero-soft px-6 font-bold text-hero-foreground hover:bg-hero-soft hover:text-hero-foreground"><Link to="/projects">View Our Capabilities</Link></Button>
            </div>
            <div className="mt-8 border-t border-hero-border pt-5">
              <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-hero-muted">Registered under</p>
              <img
                src={msmeRegistration.url}
                alt="Registered under the Ministry of Micro, Small and Medium Enterprises, Government of India"
                className="h-auto w-full max-w-[23rem] object-contain object-left"
                width={847}
                height={385}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-hero-line" />
      </section>

      <section id="services" className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <p className="section-kicker">What we do</p>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Our Core <span className="text-highlight">Services</span></h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">We deliver end-to-end technology solutions - from engineering to research publication - to turn your ideas into scalable and impactful outcomes.</p>
          <ServicesCarousel />
        </div>
      </section>

      <section id="about" className="bg-section py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[1.05fr_1fr] md:px-8">
          <div className="relative overflow-hidden rounded-lg shadow-media">
            <img src={partnerImage} alt="Engineers assembling an intelligent sensor prototype" className="aspect-[8/5] h-full w-full object-cover" width={1280} height={800} loading="lazy" />
            <div className="absolute inset-0 ring-1 ring-inset ring-border/30" />
          </div>
          <div>
            <p className="section-kicker">About RIZIQ</p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight md:text-4xl">Where curious minds learn,<br />experiment and <span className="text-highlight">build what matters.</span></h2>
            <p className="mt-5 leading-7 text-muted-foreground">RIZIQ is a research and technology company built around learning by doing. We connect expert guidance, hands-on engineering and real-world problem solving to help people turn knowledge into useful technology.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Learn clearly", "Build hands-on", "Create impact"].map((item, index) => <div key={item} className="border-l-2 border-primary pl-3"><span className="text-xs font-bold text-muted-foreground">0{index + 1}</span><strong className="mt-1 block text-sm">{item}</strong></div>)}
            </div>
            <ImpactStats className="mt-8 border-t border-border pt-7" />
          </div>
        </div>
      </section>

      <section id="projects" className="bg-cta py-10 text-hero-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center md:px-8">
          <div><h2 className="text-xl font-extrabold">Let’s Build Something Amazing Together</h2><p className="mt-1 text-sm text-hero-muted">Partner with us for your next research or development project.</p></div>
          <Button asChild className="h-11 shrink-0 px-6 font-bold"><Link to="/contact">Contact Us</Link></Button>
        </div>
      </section>
    </main>
  );
}