import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, MessageSquareText } from "lucide-react";

import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
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
  return <main className="min-h-screen bg-background"><PageIntro eyebrow="Start a conversation" title="Bring us the challenge. We’ll help find the next step." description="Share a little about your goal, your current stage and where technology could make the greatest difference." />
    <section className="py-20 md:py-24"><div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr] md:px-8"><div><div className="stat-icon"><MessageSquareText /></div><h2 className="mt-5 text-2xl font-bold">Let’s make the first conversation useful.</h2><p className="mt-4 text-sm leading-6 text-muted-foreground">You do not need a finished brief. Context, constraints and a desired outcome are enough to begin.</p><a className="mt-7 inline-flex items-center gap-2 font-semibold text-highlight" href="mailto:hello@riziq.com"><Mail className="size-4"/>hello@riziq.com</a></div>
      <form className="content-card grid gap-5" action="mailto:hello@riziq.com" method="post" encType="text/plain"><div className="grid gap-5 sm:grid-cols-2"><label className="form-field">Name<input required name="name" autoComplete="name" placeholder="Your name"/></label><label className="form-field">Email<input required type="email" name="email" autoComplete="email" placeholder="you@company.com"/></label></div><label className="form-field">Organization<input name="organization" autoComplete="organization" placeholder="Company or team"/></label><label className="form-field">How can we help?<textarea required name="message" rows={6} placeholder="Tell us about the challenge, goal or idea."/></label><Button type="submit" size="lg" className="justify-self-start font-bold">Send inquiry <ArrowRight /></Button></form>
    </div></section>
  </main>;
}