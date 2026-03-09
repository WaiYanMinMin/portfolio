// About section - tell visitors about yourself
import { Briefcase, Smartphone, BarChart } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Main content - Vertical stacked layout */}
        <div className="space-y-16">
          {/* Intro text */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">
              Data Scientist & Mobile Developer
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a Data Scientist and cross-platform mobile developer with
                professional experience across data analysis, ML, and product
                development. I've worked as a Data Scientist (B8 ICT), Flutter
                Developer (Timeworld), Frontend Developer (Mom&Pop), and Junior
                Data Analyst (Pixora Lab)—combining data-driven insights with
                hands-on building.
              </p>
              <p>
                I focus on turning data into clear narratives and dashboards,
                and on building mobile and web apps that users rely on. I'm at
                home with Python, SQL, Flutter, and modern frontend tools, and I
                care about clean code, solid analytics, and shipping things that
                work.
              </p>
            </div>
          </div>

          {/* Service cards - Horizontal layout with different styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-lg border-t-4 border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-2xl bg-primary/10 w-fit">
                  <BarChart className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold text-xl">Data Science</h4>
                <p className="text-muted-foreground">
                  Analyzing complex datasets and building predictive models to
                  extract actionable insights.
                </p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg border-t-4 border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-2xl bg-primary/10 w-fit">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold text-xl">Mobile Development</h4>
                <p className="text-muted-foreground">
                  Building cross-platform mobile applications with
                  professional-grade code and user-centric design.
                </p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg border-t-4 border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-2xl bg-primary/10 w-fit">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold text-xl">Project Experience</h4>
                <p className="text-muted-foreground">
                  Delivering multiple successful projects with focus on quality,
                  performance, and user satisfaction.
                </p>
              </div>
            </div>
          </div>

          {/* Action buttons - Centered */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a href="#contact" className="cosmic-button">
              Get In Touch
            </a>
            <a
              href="https://drive.google.com/drive/folders/1a8bLr6OSUUTC8awLUdhRC8aM0TTFCQE1?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border-2 border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 hover:border-primary"
            >
              Download resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
