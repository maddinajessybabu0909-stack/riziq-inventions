import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Linkedin, Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import horizontalLogo from "@/assets/riziq-logo-horizontal.png";
import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="relative mx-auto flex min-h-16 max-w-6xl items-center justify-between rounded-lg border border-border/70 bg-card/95 px-4 shadow-nav backdrop-blur md:px-6" aria-label="Main navigation">
        <Link to="/" className="shrink-0" aria-label="RIZIQ home" onClick={() => setOpen(false)}>
          <img src={horizontalLogo} alt="RIZIQ" className="h-10 w-auto object-contain object-left md:h-11" />
        </Link>

        <div className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground md:flex">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link"
              activeProps={{ className: "active" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden font-bold sm:inline-flex">
            <Link to="/contact">Get Started <ArrowUpRight /></Link>
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>

        {open ? (
          <div className="absolute inset-x-0 top-[calc(100%+0.5rem)] grid gap-1 rounded-lg border border-border bg-card p-2 shadow-nav md:hidden">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "bg-secondary text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-md px-4 py-3 text-sm font-semibold text-muted-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        ) : null}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-background px-4 pb-4 pt-12 md:px-6 md:pb-6">
      <div className="footer-panel relative mx-auto max-w-6xl overflow-hidden rounded-lg px-6 py-8 text-footer-foreground shadow-footer md:px-10 md:py-10">
        <div className="footer-spectrum absolute inset-x-0 top-0 h-1" aria-hidden="true" />
        <div className="grid gap-10 border-b border-footer-border pb-9 lg:grid-cols-[1.35fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-flex" aria-label="RIZIQ home">
              <img src={horizontalLogo} alt="RIZIQ" className="h-11 w-auto object-contain object-left" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-footer-muted">
              Research-led technology for organizations ready to turn ambitious ideas into useful, scalable products.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-footer-border px-3 py-1.5 text-xs font-semibold text-footer-muted">
              <span className="status-dot size-2 animate-pulse rounded-full" /> All systems Operational
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">Explore</p>
            <div className="mt-4 flex flex-col gap-2.5 text-sm font-semibold">
              {navigation.map((item) => (
                <Link key={item.to} to={item.to} className="footer-link w-fit">{item.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">Start a project</p>
            <p className="mt-4 text-sm leading-6 text-footer-muted">Tell us what you are exploring. We’ll help shape the next practical step.</p>
            <div className="mt-5 grid gap-3 text-sm font-semibold">
              <a className="footer-link inline-flex items-center gap-2" href="tel:+919014314025"><Phone className="size-4" /> +91 90143-14025</a>
              <a className="footer-link inline-flex items-center gap-2" href="mailto:info@riziq.in"><Mail className="size-4" /> info@riziq.in</a>
            </div>
            <div className="mt-5 flex items-center gap-2" aria-label="RIZIQ social media">
              <Button asChild variant="outline" size="icon" className="border-footer-border bg-hero-soft text-footer-foreground hover:bg-hero-soft hover:text-primary">
                <a href="https://www.linkedin.com/company/riziq-inventions/" target="_blank" rel="noreferrer" aria-label="RIZIQ on LinkedIn"><Linkedin /></a>
              </Button>
              <Button asChild variant="outline" size="icon" className="border-footer-border bg-hero-soft text-footer-foreground hover:bg-hero-soft hover:text-primary">
                <a href="https://www.instagram.com/riziq.in/" target="_blank" rel="noreferrer" aria-label="RIZIQ on Instagram"><Instagram /></a>
              </Button>
            </div>
            <Button asChild className="mt-5 font-bold"><Link to="/contact">Send an enquiry <ArrowUpRight /></Link></Button>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-xs text-footer-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 RIZIQ. Research · Innovation · Zenith.</p>
          <p>Built around useful technology and measurable impact.</p>
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-intro pt-32 text-hero-foreground md:pt-40">
      <div className="mx-auto max-w-6xl px-6 pb-16 md:px-8 md:pb-20">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-hero-muted">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-hero-muted md:text-lg">{description}</p>
      </div>
    </section>
  );
}