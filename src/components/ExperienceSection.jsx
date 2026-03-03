// Experience section - employment history, elegant card timeline
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { MapPin, Calendar } from "lucide-react";

const jobs = [
  {
    role: "Frontend Developer",
    company: "Mom&Pop (Thailand)",
    period: "Dec 2023 – Feb 2024",
    remote: true,
  },
  {
    role: "Flutter Developer",
    company: "Timeworld",
    period: "Dec 2024 – Nov 2025",
    remote: true,
  },
  {
    role: "Junior Data Analyst",
    company: "Pixora Lab",
    period: "Jun 2024 – Jan 2025",
    remote: true,
  },
  {
    role: "Data Scientist",
    company: "B8 ICT solution",
    period: "Jan 2025 – Feb 2026",
    remote: true,
  },
];

const staggerDelays = [0.1, 0.25, 0.4, 0.55];

export const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-28 md:py-36 px-4 relative bg-secondary/10"
    >
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div
          className={cn(
            "text-center mb-20 transition-all duration-700 ease-out",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary/80 mb-3">
            Where I've worked
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Timeline with cards */}
        <div className="relative pl-2">
          {/* Vertical line */}
          <div
            className="absolute left-[11px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/70 to-primary/30 origin-top transition-all duration-1000 ease-out"
            style={{
              transform: isInView ? "scaleY(1)" : "scaleY(0)",
              opacity: isInView ? 1 : 0,
            }}
            aria-hidden
          />

          <ul className="space-y-6">
            {jobs.map((job, i) => (
              <li
                key={i}
                className="group relative pl-10"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                  transitionDelay: isInView ? `${staggerDelays[i]}s` : "0s",
                }}
              >
                {/* Card */}
                <article className="rounded-2xl border border-border/80 bg-card/80 backdrop-blur-sm p-6 md:p-8 shadow-md hover:shadow-xl hover:border-primary/25 transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {job.role}
                      </h3>
                      <p className="text-muted-foreground mt-1 font-medium text-left">
                        {job.company}
                      </p>
                    </div>
                    {job.remote && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary border border-primary/20">
                        <MapPin className="w-3 h-3" />
                        Remote
                      </span>
                    )}
                  </div>
                  <div className="mt-5 pt-4 border-t border-border/50 flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 flex-shrink-0 text-primary/70" />
                    <span className="tabular-nums">{job.period}</span>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
