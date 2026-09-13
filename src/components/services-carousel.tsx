import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Bot,
  BrainCircuit,
  Building2,
  Code2,
  Cpu,
  DraftingCompass,
  GraduationCap,
  RadioTower,
  Sigma,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { services } from "@/lib/services-data";

const serviceIcons = {
  "software-development": Code2,
  "ai-machine-learning": BrainCircuit,
  "iot-solutions": RadioTower,
  robotics: Bot,
  "embedded-systems": Cpu,
  "mechanical-engineering-cad-cae": DraftingCompass,
  "matlab-engineering-simulation": Sigma,
  "civil-engineering-design": Building2,
  "training-workshops": GraduationCap,
  "research-publications": BookOpen,
} as const;

function getVisibleCount() {
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

export function ServicesCarousel() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [activePage, setActivePage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressCycle, setProgressCycle] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const pages = useMemo(() => {
    const pageCount = Math.ceil(services.length / visibleCount);
    return Array.from({ length: pageCount }, (_, page) => {
      const start = page * visibleCount;
      const remaining = services.length - start;
      const adjustedStart = remaining < visibleCount ? Math.max(0, services.length - visibleCount) : start;
      return services.slice(adjustedStart, adjustedStart + visibleCount);
    });
  }, [visibleCount]);

  useEffect(() => {
    const updateVisibleCount = () => setVisibleCount(getVisibleCount());
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    setActivePage((current) => Math.min(current, Math.max(0, pages.length - 1)));
  }, [pages.length]);

  useEffect(() => {
    if (paused || pages.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timerRef.current = setInterval(() => {
      setActivePage((current) => (current + 1) % pages.length);
      setProgressCycle((current) => current + 1);
    }, 3500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [pages.length, paused]);

  const move = (direction: number) => {
    setActivePage((current) => (current + direction + pages.length) % pages.length);
    setProgressCycle((current) => current + 1);
  };

  const selectPage = (index: number) => {
    setActivePage(index);
    setProgressCycle((current) => current + 1);
  };

  const resume = () => {
    setPaused(false);
    setProgressCycle((current) => current + 1);
  };

  return (
    <div
      className="services-carousel mt-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={resume}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) resume();
      }}
      aria-roledescription="carousel"
      aria-label="RIZIQ services"
    >
      <div className="services-carousel-window">
        <div className="services-carousel-track" style={{ transform: `translateX(-${activePage * 100}%)` }}>
          {pages.map((page, pageIndex) => (
            <div
              key={page.map((service) => service.slug).join("-")}
              className="services-carousel-page"
              style={{ gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))` }}
              aria-hidden={activePage !== pageIndex}
              inert={activePage !== pageIndex}
            >
              {page.map((service) => {
                const Icon = serviceIcons[service.slug];
                const catalogueIndex = services.findIndex((item) => item.slug === service.slug);
                const tone = catalogueIndex % 3 === 0 ? "service-blue" : catalogueIndex % 3 === 1 ? "service-violet" : "service-teal";
                return (
                  <Link key={service.slug} to="/services/$service" params={{ service: service.slug }} className="service-card group block w-full">
                    <div className={`service-icon ${tone}`}><Icon className="size-6" /></div>
                    <h3 className="mt-5 text-sm font-extrabold leading-5">{service.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">{service.short}</p>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 sm:gap-4">
        <Button type="button" variant="outline" size="icon" onClick={() => move(-1)} aria-label="Previous services">
          <ArrowLeft />
        </Button>
        <div className="flex items-center gap-1 sm:gap-2" aria-label={`Service group ${activePage + 1} of ${pages.length}`}>
          {pages.map((page, index) => (
            <Button
              key={page.map((service) => service.slug).join("-")}
              type="button"
              variant="ghost"
              size="icon"
              className="services-carousel-dot-control"
              onClick={() => selectPage(index)}
              aria-label={`Show service group ${index + 1}`}
              aria-current={index === activePage ? "true" : undefined}
            >
              <span className={`services-carousel-dot ${index === activePage ? "active" : ""}`}>
                {index === activePage ? <span key={progressCycle} className="services-carousel-progress" /> : null}
              </span>
            </Button>
          ))}
        </div>
        <Button type="button" variant="outline" size="icon" onClick={() => move(1)} aria-label="Next services">
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}