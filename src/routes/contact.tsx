import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Instagram, Linkedin, Mail, MessageSquareText, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { z } from "zod";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { getService, services } from "@/lib/services-data";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjyvqoqb";
const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=919014314025&text=hi%2C%20I%20need%20to%20discuss%20something%20with%20you%20regarding%20the%20company";

export const Route = createFileRoute("/contact")({
  validateSearch: (search) => z.object({ service: z.string().optional() }).parse(search),
  head: () => ({ meta: [
    { title: "Contact RIZIQ | Start a Technology Project" },
    { name: "description", content: "Tell RIZIQ about your research, software, AI, IoT, robotics or embedded systems project." },
    { property: "og:title", content: "Contact RIZIQ | Start a Technology Project" },
    { property: "og:description", content: "Start a practical conversation about your next technology project." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ContactPage,
});

function ContactPage() {
  const { service: serviceSlug } = Route.useSearch();
  const selectedService = serviceSlug ? getService(serviceSlug) : undefined;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return <main className="min-h-screen bg-background"><PageIntro eyebrow="Start a conversation" title="Bring us the challenge. We’ll help find the next step." description="Share a little about your goal, your current stage and where technology could make the greatest difference." />
    <section className="py-20 md:py-24"><div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr] md:px-8"><div><div className="stat-icon"><MessageSquareText /></div><h2 className="mt-5 text-2xl font-bold">Let’s make the first conversation useful.</h2><p className="mt-4 text-sm leading-6 text-muted-foreground">You do not need a finished brief. Context, constraints and a desired outcome are enough to begin.</p><div className="mt-7 grid gap-4"><a className="inline-flex items-center gap-2 font-semibold text-highlight" href="tel:+919014314025"><Phone className="size-4"/>+91 90143-14025</a><a className="inline-flex items-center gap-2 font-semibold text-highlight" href="mailto:info@riziq.in"><Mail className="size-4"/>info@riziq.in</a></div><div className="mt-8"><p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Follow us</p><div className="mt-3 flex flex-wrap items-center gap-3"><a href="https://www.linkedin.com/company/riziq-inventions/" target="_blank" rel="noreferrer" className="social-chip inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:border-highlight hover:text-highlight"><Linkedin className="size-4"/> riziq-inventions</a><a href="https://www.instagram.com/riziq.in/" target="_blank" rel="noreferrer" className="social-chip inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:border-highlight hover:text-highlight"><Instagram className="size-4"/> riziq.in</a></div></div></div>
      <form className="content-card grid gap-5" action={FORMSPREE_ENDPOINT} method="post" onSubmit={handleSubmit}><div className="grid gap-5 sm:grid-cols-2"><label className="form-field">Name<input required name="name" autoComplete="name" placeholder="Your name"/></label><label className="form-field">Email<input required type="email" name="email" autoComplete="email" placeholder="you@company.com"/></label></div><label className="form-field">Organization<input name="organization" autoComplete="organization" placeholder="Company or team"/></label><label className="form-field">Service<select name="service" defaultValue={selectedService?.slug ?? ""}><option value="">Select a service</option>{services.map(service => <option key={service.slug} value={service.slug}>{service.title}</option>)}</select></label><label className="form-field">How can we help?<textarea required name="message" rows={6} placeholder="Tell us about the challenge, goal or idea."/></label><Button type="submit" size="lg" className="justify-self-start font-bold" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send inquiry"} <ArrowRight /></Button>{status === "sent" && <p className="inline-flex items-center gap-2 text-sm font-semibold text-highlight" role="status"><CheckCircle2 className="size-4" />Thank you! Your message has been sent. We will get back to you soon.</p>}{status === "error" && <p className="text-sm font-semibold text-destructive" role="alert">Something went wrong. Please try again or email us at info@riziq.in.</p>}</form>
    </div></section>
  </main>;
}