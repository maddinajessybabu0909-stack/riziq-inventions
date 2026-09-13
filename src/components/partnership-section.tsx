import { ArrowUpRight, CircuitBoard, Code2 } from "lucide-react";

import instructIqSymbol from "@/assets/instructiq-symbol.png.asset.json";

export function PartnershipSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`partnership-section ${compact ? "partnership-section-compact" : ""}`}>
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="partnership-frame">
          <div className="partnership-brand">
            <p className="partnership-kicker">Partnership · Collaboration</p>
            <div className="partnership-identity">
              <img
                src={instructIqSymbol.url}
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