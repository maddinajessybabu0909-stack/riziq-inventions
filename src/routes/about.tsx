import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ArrowRight, Compass, Eye, FlaskConical, Gauge, GraduationCap, Lightbulb, Target, ThumbsUp, Users } from "lucide-react";

import classroomImage from "@/assets/riziq-digital-classroom.png";
import jessyPortrait from "@/assets/jessy-yadav-transparent.png";
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

const timeline = [
  { year: "The beginning", title: "A practical question", text: "RIZIQ began with a belief that research should travel further—out of reports and prototypes, into tools people can rely on." },
  { year: "Building the practice", title: "Disciplines came together", text: "Software, connected hardware, intelligent systems and product thinking became one integrated way of solving complex problems." },
  { year: "Working in the real world", title: "Context shaped the technology", text: "Field conditions, operational constraints and user feedback became part of the engineering process, not an afterthought." },
  { year: "What comes next", title: "Responsible scale", text: "We continue building partnerships that turn promising ideas into useful systems with measurable, lasting value." },
];

function AboutPage() {
  const timelineRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const timelineElement = timelineRef.current;
    if (!timelineElement) return;

    const updateProgress = () => {
      const bounds = timelineElement.getBoundingClientRect();
      const start = window.innerHeight * 0.72;
      const distance = Math.max(bounds.height, 1);
      const progress = Math.min(1, Math.max(0, (start - bounds.top) / distance));
      timelineElement.style.setProperty("--timeline-progress", progress.toString());
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return <main className="min-h-screen bg-background">
    <section className="about-editorial overflow-hidden pb-24 pt-36 text-hero-foreground md:pb-32 md:pt-44">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <header className="text-center">
          <p className="about-kicker">Our genesis</p>
          <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-bold leading-[0.95] md:text-8xl">The story behind <span className="text-primary">RIZIQ.</span></h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-hero-muted md:text-lg">Ideas become valuable when they work in the real world. We bring research, product thinking and engineering together to solve meaningful challenges.</p>
        </header>

        <div className="mt-20 grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div className="founder-orbit mx-auto">
            <div className="founder-orbit-ring founder-orbit-ring-outer" aria-hidden="true" />
            <div className="founder-orbit-ring founder-orbit-ring-inner" aria-hidden="true" />
            <div className="founder-portrait"><img src={jessyPortrait} alt="Jessy Yadav Maddina, Founder and CEO of RIZIQ" /></div>
          </div>
          <div className="text-center md:text-left">
            <p className="about-kicker">Leadership</p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">Jessy Yadav Maddina</h2>
            <p className="mt-3 text-xl font-semibold text-primary">Founder &amp; CEO</p>
            <div className="mx-auto mt-5 flex w-fit items-center gap-2 text-sm text-hero-muted md:mx-0"><GraduationCap className="size-4 text-primary" /><span>Education: M.Tech</span></div>
            <div className="mx-auto mt-7 flex w-fit items-center gap-4 border-y border-hero-border py-5 md:mx-0"><div className="grid size-11 place-items-center rounded-md bg-hero-soft text-primary"><Users className="size-5" /></div><div className="text-left"><strong className="block text-xl">5+ Years</strong><span className="text-sm text-hero-muted">Experience</span></div></div>
            <Button asChild className="mt-8 font-bold"><Link to="/contact">Talk to Jessy <ArrowRight /></Link></Button>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28"><div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.08fr_0.92fr] md:px-8">
      <div className="overflow-hidden rounded-lg shadow-media"><img src={classroomImage} alt="Jessy Yadav Maddina teaching as students build electronics and robotics projects in a digital classroom" className="aspect-[8/5] h-full w-full object-cover" width={1280} height={800} loading="lazy" /></div>
      <div><p className="section-kicker">Our purpose</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">Learning becomes impact when people build together.</h2><p className="mt-5 leading-7 text-muted-foreground">We connect research, practical teaching and hands-on engineering so ideas move beyond the screen. Students and teams learn by creating real software, electronics and intelligent systems for real-world needs.</p><Button asChild className="mt-7 font-bold"><Link to="/contact">Work with us <ArrowRight /></Link></Button></div>
    </div></section>

    <section className="bg-cta py-20 text-hero-foreground"><div className="mx-auto max-w-6xl px-6 md:px-8"><div className="grid gap-px overflow-hidden rounded-lg border border-hero-border bg-hero-border md:grid-cols-2">
      <article className="bg-cta p-8 md:p-12"><div className="grid size-12 place-items-center rounded-md border border-hero-border bg-hero-soft"><Target /></div><p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-primary">Our mission</p><h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">Make advanced technology useful, responsible and reachable.</h2><p className="mt-5 leading-7 text-hero-muted">We close the distance between a promising idea and meaningful adoption by building with the people, conditions and outcomes that define success.</p></article>
      <article className="bg-cta p-8 md:p-12"><div className="grid size-12 place-items-center rounded-md border border-hero-border bg-hero-soft"><Eye /></div><p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-primary">Our vision</p><h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">A future where every learner can shape technology.</h2><p className="mt-5 leading-7 text-hero-muted">We envision curious people becoming confident creators—equipped to solve local challenges and build smarter, more inclusive communities.</p></article>
    </div></div></section>

    <section className="about-journey py-24 text-hero-foreground md:py-32"><div className="mx-auto max-w-5xl px-6 md:px-8">
      <div className="max-w-2xl"><p className="about-kicker">Our journey</p><h2 className="mt-4 text-4xl font-bold md:text-6xl">Built one useful step at a time.</h2><p className="mt-6 text-lg leading-8 text-hero-muted">Our story is not about chasing technology trends. It is about learning where technology can remove friction, expand possibility and earn trust.</p></div>
      <ol ref={timelineRef} className="liquid-timeline mt-20">
        {timeline.map((item, index) => <li key={item.title} className="liquid-timeline-item"><span className="liquid-node" aria-hidden="true"><span /></span><div className="liquid-index">0{index + 1}</div><article><p className="about-kicker">{item.year}</p><h3 className="mt-4 text-2xl font-bold md:text-4xl">{item.title}</h3><p className="mt-4 max-w-xl leading-7 text-hero-muted">{item.text}</p></article></li>)}
      </ol>
    </div></section>

    <section className="bg-section py-20 md:py-28"><div className="mx-auto max-w-6xl px-6 md:px-8"><div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]"><div><p className="section-kicker">How we work</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">Curious by nature. Rigorous by design.</h2></div><div className="grid gap-5 md:grid-cols-3">{principles.map(({icon: Icon, title, text}) => <article key={title} className="content-card"><div className="stat-icon"><Icon /></div><h3 className="mt-5 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div></div>
      <div className="mt-14 grid grid-cols-3 gap-4 border-t border-border pt-9">{[{value:"500+",label:"Projects delivered",icon:Lightbulb},{value:"50+",label:"Happy clients",icon:ThumbsUp},{value:"5+",label:"Years of experience",icon:Users}].map(({value,label,icon:Icon}) => <div key={label} className="text-center"><Icon className="mx-auto size-5 text-highlight"/><strong className="mt-2 block text-2xl">{value}</strong><span className="text-xs text-muted-foreground">{label}</span></div>)}</div>
    </div></section>
  </main>;
}