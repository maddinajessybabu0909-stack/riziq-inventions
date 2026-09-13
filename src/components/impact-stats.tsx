import { useEffect, useRef, useState } from "react";
import {
  Award,
  GraduationCap,
  Lightbulb,
  Target,
  ThumbsUp,
  Users,
  type LucideIcon,
} from "lucide-react";

type ImpactStat = {
  target: number;
  label: string;
  suffix: string;
  compact?: boolean;
  icon: LucideIcon;
};

const impactStats: ImpactStat[] = [
  { target: 1500, label: "Students Trained", suffix: "+", compact: true, icon: GraduationCap },
  { target: 450, label: "Projects Completed", suffix: "+", icon: Lightbulb },
  { target: 50, label: "Happy Clients", suffix: "+", icon: ThumbsUp },
  { target: 15, label: "Expert Trainers", suffix: "+", icon: Users },
  { target: 95, label: "Success Rate", suffix: "%", icon: Target },
  { target: 5, label: "Years of Excellence", suffix: "+", icon: Award },
];

function formatValue(value: number, stat: ImpactStat) {
  if (stat.compact) return `${(value / 1000).toFixed(1)}K${stat.suffix}`;
  return `${Math.round(value)}${stat.suffix}`;
}

export function ImpactStats({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setProgress(1);
          observer.disconnect();
          return;
        }

        const startedAt = performance.now();
        const duration = 1600;
        const animate = (time: number) => {
          const elapsed = Math.min((time - startedAt) / duration, 1);
          setProgress(1 - Math.pow(1 - elapsed, 3));
          if (elapsed < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.2 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`impact-stats ${className}`} aria-label="RIZIQ impact statistics">
      {impactStats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.label} className="impact-stat">
            <div className="stat-icon"><Icon className="size-5" /></div>
            <strong className="impact-stat-value" aria-label={formatValue(stat.target, stat)}>
              {formatValue(stat.target * progress, stat)}
            </strong>
            <span className="impact-stat-label">{stat.label}</span>
          </div>
        );
      })}
    </div>
  );
}