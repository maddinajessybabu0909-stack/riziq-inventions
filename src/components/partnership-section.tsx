import { ArrowUpRight, CircuitBoard, Code2 } from "lucide-react";

import instructIqLogo from "@/assets/instructiq-lockup.png.asset.json";

export function PartnershipSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`partnership-section ${compact ? "partnership-section-compact" : ""}`}>
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="partnership-frame">
          <div className="partnership-brand">
            <p className="partnership-kicker">Partnership · Collaboration</p>
            <div className="partnership-logo-wrap">
              <img
                src={instructIqLogo.url}
                alt="InstructIQ - Where IQ Meets IT"
                className="partnership-logo"
                width={421}
                height={138}
                loading="lazy"
              />
            </div>
            <div className="partnership-brand-copy">
              <p className="partnership-name">InstructIQ</p>
              <p className="partnership-tagline">Where IQ Meets IT</p>
            </div>
          </div>

          <div className="partnership-story">
            <span className="partnership-index">01 / Strategic collaboration</span>
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