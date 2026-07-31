// Hero section - the first thing visitors see
import { ArrowDown, Brain, Code, Github, Layers, Linkedin } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-4">
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 text-left">
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span className="opacity-0 animate-fade-in-delay-1 block">
                  Hello, I'm
                </span>
                <span className="text-primary opacity-0 animate-fade-in-delay-2 block">
                  Wai Yan Min Min
                </span>
                <span className="text-gradient opacity-0 animate-fade-in-delay-3 block text-3xl md:text-4xl lg:text-5xl mt-2">
                  (Zack)
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-in-delay-4 max-w-lg">
              Full-Stack AI Engineer building end-to-end products — from LLM
              agents and RAG systems to scalable APIs and polished web apps.
            </p>

            {/* Call-to-action buttons */}
            <div className="flex flex-col gap-4 pt-4 opacity-0 animate-fade-in-delay-4">
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="cosmic-button">
                  View My Projects
                </a>
                <a
                  href="/Wai-Yan-Min-Min-Resume.pdf"
                  download="Wai-Yan-Min-Min-Resume.pdf"
                  className="px-6 py-3 rounded-full border-2 border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 hover:border-primary"
                >
                  Download resume
                </a>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/wai-yan-min-min-0ba7251b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border-2 border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 hover:border-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="https://github.com/WaiYanMinMin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border-2 border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 hover:border-primary"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Visual elements */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Floating icons */}
              <div className="absolute top-0 left-0 p-6 bg-card rounded-2xl shadow-lg border border-border/50 animate-float">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <div
                className="absolute top-1/2 right-0 p-6 bg-card rounded-2xl shadow-lg border border-border/50 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Code className="h-8 w-8 text-primary" />
              </div>
              <div
                className="absolute bottom-0 left-1/4 p-6 bg-card rounded-2xl shadow-lg border border-border/50 animate-float"
                style={{ animationDelay: "2s" }}
              >
                <Layers className="h-8 w-8 text-primary" />
              </div>

              {/* Central gradient circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
