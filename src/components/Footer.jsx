// Footer component
import { ArrowUp, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t-2 border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} <span className="text-primary font-semibold">Wai Yan Min Min (Zack)</span>. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>
          
          {/* Social links */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/wai-yan-min-min-0ba7251b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary/50 hover:bg-primary/10 text-foreground/70 hover:text-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/WaiYanMinMin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary/50 hover:bg-primary/10 text-foreground/70 hover:text-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
          
          {/* Scroll to top button */}
          <a
            href="#hero"
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110 shadow-md"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

