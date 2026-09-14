import { ArrowUpRight, CircuitBoard, Code2, Globe, GraduationCap, Instagram, Linkedin, Wrench } from "lucide-react";

import instructIqSymbol from "@/assets/instructiq-symbol.png";

const partnerLinks = [
  { icon: Globe, label: "Website", href: "https://www.instructiq.in" },
  { icon: Wrench, label: "Services", href: "https://www.services.instructiq.in" },
  { icon: GraduationCap, label: "Academy", href: "https://www.academy.instructiq.in" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/instructiq.in/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/instructiq" },
];

export function PartnershipSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`partnership-section ${compact ? "partnership-section-compact" : ""}`}>
      <div className="site-container">
        <div className="partnership-frame">
          <div className="partnership-brand">
            <p className="partnership-kicker">Partnership · Collaboration</p>
            <div className="partnership-identity">
              <img
                src={instructIqSymbol}
                alt="InstructIQ symbol"
                className="partnership-symbol"
                width={500}
                height={500}
                loading="lazy"
              />
              <div className="partnership-brand-copy">
                <p className="partnership-name">Instruct<span>IQ</span></p>
                <p className="partnership-tagline">Where <span>IQ</span> Meets IT</p>
              </div>
            </div>

            <div className="partnership-links" aria-label="InstructIQ links">
              {partnerLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partnership-link"
                  aria-label={`${label} (opens in new tab)`}
                >
                  <Icon className="size-3.5" aria-hidden="true" />
                  <span>{label}</span>
                  <ArrowUpRight className="partnership-link-arrow" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="partnership-story">
            <h2>Software intelligence meets hands-on engineering.</h2>
            <p>
              InstructIQ is a research-minded EdTech startup building the systems behind how people learn,
              qualify and ship in tech.
            </p>
            <p>
              Together with RIZIQ, we bridge software with hardware - combining advanced software training
              with hands-on hardware, engineering and innovation to create a more complete learning experience.
            </p>
            <div className="partnership-bridge" aria-label="Collaboration strengths">
              <div><Code2 /><span>Advanced software training</span></div>
              <ArrowUpRight className="partnership-bridge-arrow" aria-hidden="true" />
              <div><CircuitBoard /><span>Hardware and engineering</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
