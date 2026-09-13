import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  ChevronRight,
  Code2,
  Cpu,
  GraduationCap,
  Lightbulb,
  Play,
  RadioTower,
  ThumbsUp,
  Users,
} from "lucide-react";
import horizontalLogo from "@/assets/riziq-logo-horizontal.png";
import heroImage from "@/assets/riziq-hero.jpg";
import partnerImage from "@/assets/riziq-partner.jpg";

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
  }),
  component: Index,
});

const services = [
  {
    title: "Software Development",
    text: "Web, Mobile & Cloud Applications",
    icon: Code2,
    tone: "service-blue",
  },
  {
    title: "AI & Machine Learning",
    text: "Smart Solutions for a Smarter Tomorrow",
    icon: BrainCircuit,
    tone: "service-violet",
  },
  {
    title: "IoT Solutions",
    text: "Connected Devices, Smarter Systems",
    icon: RadioTower,
    tone: "service-teal",
  },
  {
    title: "Robotics",
    text: "Automating Ideas with Precision",
    icon: Bot,
    tone: "service-violet",
  },
  {
    title: "Embedded Systems",
    text: "Reliable. Efficient. Future Ready.",
    icon: Cpu,
    tone: "service-teal",
  },
  {
    title: "Training & Workshops",
    text: "Build Skills. Build Futures.",
    icon: GraduationCap,
    tone: "service-blue",
  },
];

const stats = [
  { value: "500+", label: "Projects Delivered", icon: Lightbulb },
  { value: "50+", label: "Happy Clients", icon: ThumbsUp },
  { value: "5+", label: "Years of Experience", icon: Users },
];

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-lg border border-border/70 bg-card/95 px-4 shadow-nav backdrop-blur md:px-6" aria-label="Main navigation">
          <a href="#home" className="shrink-0" aria-label="RIZIQ home">
            <img src={horizontalLogo} alt="RIZIQ" className="h-10 w-auto object-contain object-left md:h-11" />
          </a>
          <div className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground md:flex">
            <a className="nav-link active" href="#home">Home</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#blog">Blog</a>
            <a className="nav-link" href="#contact">Contact</a>
          </div>
          <a href="#contact" className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-bold text-primary-foreground shadow-button transition-transform hover:-translate-y-0.5">
            Get Started <ArrowRight className="size-4" />
          </a>
        </nav>
      </header>

      <section id="home" className="relative flex min-h-[720px] items-center bg-hero pt-24 text-hero-foreground md:min-h-[760px]">
        <img src={heroImage} alt="Holographic artificial intelligence brain above a laptop" className="absolute inset-0 h-full w-full object-cover object-center" width={1536} height={864} />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-24 md:px-8">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.38em] text-hero-muted">Ideas to impact</p>
            <h1 className="max-w-xl text-4xl font-extrabold leading-[1.08] md:text-6xl">
              Turning Research into Real-World <span className="text-highlight">Innovation</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-hero-muted md:text-lg">
              RIZIQ builds intelligent solutions at the intersection of research, technology and innovation — helping businesses and communities reach new heights.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-sm font-bold text-primary-foreground shadow-button transition-transform hover:-translate-y-0.5">
                Explore Our Solutions <ArrowRight className="size-4" />
              </a>
              <a href="#projects" className="inline-flex h-12 items-center gap-3 rounded-md border border-hero-border px-6 text-sm font-bold text-hero-foreground transition-colors hover:bg-hero-soft">
                Watch Video <Play className="size-4 fill-current" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-hero-line" />
      </section>

      <section id="services" className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <p className="section-kicker">What we do</p>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Our Core <span className="text-highlight">Services</span></h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">We deliver end-to-end technology solutions to turn your ideas into scalable and impactful products.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {services.map(({ title, text, icon: Icon, tone }) => (
              <article key={title} className="service-card group">
                <div className={`service-icon ${tone}`}><Icon className="size-6" /></div>
                <h3 className="mt-5 text-sm font-extrabold leading-5">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-section py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[1.05fr_1fr] md:px-8">
          <div className="relative overflow-hidden rounded-lg shadow-media">
            <img src={partnerImage} alt="Digital technology network held in a person's hand" className="aspect-[8/5] h-full w-full object-cover" width={1024} height={640} loading="lazy" />
            <div className="absolute inset-0 ring-1 ring-inset ring-border/30" />
          </div>
          <div>
            <p className="section-kicker">Why RIZIQ?</p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight md:text-4xl">Your Partner in<br />Research & <span className="text-highlight">Innovation</span></h2>
            <p className="mt-5 leading-7 text-muted-foreground">We combine technical expertise, creative thinking and a passion for innovation to deliver solutions that make a difference.</p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-7">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="flex gap-3">
                  <div className="stat-icon"><Icon className="size-5" /></div>
                  <div><strong className="block text-lg font-extrabold">{value}</strong><span className="text-xs leading-4 text-muted-foreground">{label}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-cta py-10 text-hero-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center md:px-8">
          <div><h2 className="text-xl font-extrabold">Let’s Build Something Amazing Together</h2><p className="mt-1 text-sm text-hero-muted">Partner with us for your next research or development project.</p></div>
          <a id="contact" href="mailto:hello@riziq.com" className="inline-flex h-11 shrink-0 items-center gap-2 rounded-md bg-primary px-6 text-sm font-bold text-primary-foreground shadow-button">Contact Us <ChevronRight className="size-4" /></a>
        </div>
      </section>
      <footer id="blog" className="border-t border-border bg-background py-6 text-center text-sm text-muted-foreground">© 2026 RIZIQ — Research · Innovation · Zenith</footer>
    </main>
  );
}