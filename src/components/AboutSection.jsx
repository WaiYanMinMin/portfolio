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
              Data Science Student & Mobile Developer
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a data science student with hands-on experience in multiple
                projects, combining analytical thinking with practical
                development skills. With over 2 years of professional experience
                as a cross-platform mobile developer, I bring a unique perspective
                to solving complex problems.
              </p>
              <p>
                I'm passionate about leveraging data to create meaningful insights
                and building innovative mobile applications that deliver seamless
                user experiences across different platforms. I'm constantly
                exploring new technologies and methodologies to stay at the
                forefront of both data science and mobile development.
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
                  Analyzing complex datasets and building predictive models
                  to extract actionable insights.
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
                  Delivering multiple successful projects with focus on
                  quality, performance, and user satisfaction.
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
              href="#"
              className="px-6 py-3 rounded-full border-2 border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 hover:border-primary"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};