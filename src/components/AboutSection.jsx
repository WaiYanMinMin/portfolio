// About section - tell visitors about yourself
import { Briefcase, Brain, Layers } from "lucide-react";

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
              Full-Stack AI Engineer
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I design and ship AI-powered products end to end — from LLM
                workflows, RAG pipelines, and ML backends to the APIs and
                interfaces users actually touch. My path spans frontend and
                full-stack roles at Mom&Pop and Pixora Lab, Flutter product work
                at Timeworld, and freelance work shipping AI systems into
                production.
              </p>
              <p>
                I work comfortably across Python, FastAPI, React, and modern
                frontend stacks, and I care about reliable models, clean
                architecture, and shipping features that hold up in the real
                world — not just demos.
              </p>
            </div>
          </div>

          {/* Service cards - Horizontal layout with different styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-lg border-t-4 border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-2xl bg-primary/10 w-fit">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold text-xl">AI & LLMs</h4>
                <p className="text-muted-foreground">
                  Building RAG systems, agent workflows, and ML pipelines that
                  turn models into useful product features.
                </p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg border-t-4 border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-2xl bg-primary/10 w-fit">
                  <Layers className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold text-xl">Full-Stack Systems</h4>
                <p className="text-muted-foreground">
                  Shipping APIs, backends, and web apps that connect AI
                  capabilities to real users and production workloads.
                </p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg border-t-4 border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-2xl bg-primary/10 w-fit">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold text-xl">Product Delivery</h4>
                <p className="text-muted-foreground">
                  Taking ideas from prototype to production with a focus on
                  reliability, performance, and clear user outcomes.
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
              href="/Wai-Yan-Min-Min-Resume.docx"
              download="Wai-Yan-Min-Min-Resume.docx"
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
