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
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const pages = useMemo(
    () => Array.from({ length: Math.ceil(services.length / visibleCount) }, (_, page) =>
      services.slice(page * visibleCount, (page + 1) * visibleCount),
    ),
    [visibleCount],
  );

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
    }, 3000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [pages.length, paused]);

  const move = (direction: number) => {
    setActivePage((current) => (current + direction + pages.length) % pages.length);
  };

  return (
    <div
      className="services-carousel mt-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
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
              {page.map((service, serviceIndex) => {
                const Icon = serviceIcons[service.slug];
                const catalogueIndex = pageIndex * visibleCount + serviceIndex;
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

      <div className="mt-6 flex items-center justify-center gap-4">
        <Button type="button" variant="outline" size="icon" onClick={() => move(-1)} aria-label="Previous services">
          <ArrowLeft />
        </Button>
        <div className="flex items-center gap-2" aria-label={`Service group ${activePage + 1} of ${pages.length}`}>
          {pages.map((page, index) => (
            <button
              key={page.map((service) => service.slug).join("-")}
              type="button"
              className={`services-carousel-dot ${index === activePage ? "active" : ""}`}
              onClick={() => setActivePage(index)}
              aria-label={`Show service group ${index + 1}`}
              aria-current={index === activePage ? "true" : undefined}
            />
          ))}
        </div>
        <Button type="button" variant="outline" size="icon" onClick={() => move(1)} aria-label="Next services">
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}