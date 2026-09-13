import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import agreementImage from "@/assets/riziq-gallery-agreement.jpeg.asset.json";
import boardSessionImage from "@/assets/riziq-gallery-board-session.png.asset.json";
import classroomImage from "@/assets/riziq-gallery-classroom.png.asset.json";
import collaborationImage from "@/assets/riziq-gallery-collaboration.png.asset.json";
import conferenceImage from "@/assets/riziq-gallery-conference.png.asset.json";
import labTrainingImage from "@/assets/riziq-gallery-computer-lab-training.png.asset.json";
import labWideImage from "@/assets/riziq-gallery-computer-lab-wide.png.asset.json";
import recognitionImage from "@/assets/riziq-gallery-recognition.png.asset.json";
import { Button } from "@/components/ui/button";

const galleryImages = [
  { src: classroomImage.url, alt: "RIZIQ instructor leading a classroom session", caption: "Learning in action" },
  { src: labTrainingImage.url, alt: "Students attending a technology training session in a computer lab", caption: "Practical technology training" },
  { src: boardSessionImage.url, alt: "RIZIQ instructor explaining embedded systems at a classroom board", caption: "Engineering concepts made clear" },
  { src: labWideImage.url, alt: "Students learning together in a computer laboratory", caption: "Hands-on learning environments" },
  { src: recognitionImage.url, alt: "RIZIQ founder receiving recognition at an institution", caption: "Honored for the great work", position: "center 22%" },
  { src: collaborationImage.url, alt: "RIZIQ representatives presenting a collaboration document", caption: "Institutional collaboration" },
  { src: conferenceImage.url, alt: "RIZIQ founder with educators and industry representatives at a conference", caption: "External Co-Chair at International Conference" },
  { src: agreementImage.url, alt: "RIZIQ representatives marking an institutional agreement", caption: "Partnerships built for impact" },
];

function getVisibleCount() {
  return window.innerWidth < 640 ? 1 : 2;
}

export function AboutGalleryCarousel() {
  const [visibleCount, setVisibleCount] = useState(2);
  const [activePage, setActivePage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressCycle, setProgressCycle] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const pages = useMemo(() => {
    const pageCount = Math.ceil(galleryImages.length / visibleCount);
    return Array.from({ length: pageCount }, (_, page) => {
      const start = page * visibleCount;
      const remaining = galleryImages.length - start;
      const adjustedStart = remaining < visibleCount ? Math.max(0, galleryImages.length - visibleCount) : start;
      return galleryImages.slice(adjustedStart, adjustedStart + visibleCount);
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
      className="services-carousel about-gallery-carousel mt-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={resume}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) resume();
      }}
      aria-roledescription="carousel"
      aria-label="RIZIQ learning and collaboration gallery"
    >
      <div className="services-carousel-window">
        <div className="services-carousel-track" style={{ transform: `translateX(-${activePage * 100}%)` }}>
          {pages.map((page, pageIndex) => (
            <div
              key={page.map((image) => image.src).join("-")}
              className="services-carousel-page"
              style={{ gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))` }}
              aria-hidden={activePage !== pageIndex}
              inert={activePage !== pageIndex}
            >
              {page.map((image) => (
                <figure key={image.src} className="about-gallery-card">
                  <img src={image.src} alt={image.alt} width={1024} height={768} loading="lazy" style={{ objectPosition: image.position }} />
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 sm:gap-4">
        <Button type="button" variant="outline" size="icon" onClick={() => move(-1)} aria-label="Previous gallery images">
          <ArrowLeft />
        </Button>
        <div className="flex items-center gap-1 sm:gap-2" aria-label={`Gallery group ${activePage + 1} of ${pages.length}`}>
          {pages.map((page, index) => (
            <Button
              key={page.map((image) => image.src).join("-")}
              type="button"
              variant="ghost"
              size="icon"
              className="services-carousel-dot-control"
              onClick={() => selectPage(index)}
              aria-label={`Show gallery group ${index + 1}`}
              aria-current={index === activePage ? "true" : undefined}
            >
              <span className={`services-carousel-dot ${index === activePage ? "active" : ""}`}>
                {index === activePage ? <span key={progressCycle} className="services-carousel-progress" /> : null}
              </span>
            </Button>
          ))}
        </div>
        <Button type="button" variant="outline" size="icon" onClick={() => move(1)} aria-label="Next gallery images">
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}