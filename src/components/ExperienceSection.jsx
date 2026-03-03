// Experience section - employment history, minimalist with subtle animation
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

const fadeDelays = [
  "animate-fade-in-delay-1",
  "animate-fade-in-delay-2",
  "animate-fade-in-delay-3",
  "animate-fade-in-delay-4",
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[11px] top-2 bottom-2 w-px bg-border opacity-60"
            aria-hidden
          />

          <ul className="space-y-10">
            {jobs.map((job, i) => (
              <li
                key={i}
                className={`relative pl-10 opacity-0 ${fadeDelays[i] ?? "animate-fade-in"}`}
              >
                {/* Dot */}
                <div
                  className="absolute left-0 top-2 w-[22px] h-[22px] rounded-full border-2 border-primary bg-background"
                  aria-hidden
                />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <span className="font-semibold text-foreground">
                      {job.role}
                    </span>
                    <span className="text-muted-foreground"> · {job.company}</span>
                  </div>
                  <div className="text-sm text-muted-foreground tabular-nums">
                    {job.period}
                    {job.remote && (
                      <span className="ml-2 text-primary/80">Remote</span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
