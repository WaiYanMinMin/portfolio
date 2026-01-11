// Skills section - showcase your technical skills
import { useState } from "react";
import { cn } from "@/lib/utils";

// Customize these skills with your own!
// Change the name, level (0-100), and category
const skills = [
  // Data Science skills
  { name: "Python", level: 95, category: "data-science" },
  { name: "Machine Learning", level: 90, category: "data-science" },
  { name: "Deep Learning", level: 90, category: "data-science" },
  { name: "LLMs", level: 85, category: "data-science" },
  { name: "Pandas", level: 90, category: "data-science" },
  { name: "NumPy", level: 90, category: "data-science" },
  { name: "Scikit-learn", level: 85, category: "data-science" },
  { name: "Streamlit", level: 85, category: "data-science" },
  { name: "Matplotlib", level: 85, category: "data-science" },
  { name: "Seaborn", level: 85, category: "data-science" },
  { name: "TensorFlow", level: 80, category: "data-science" },
  { name: "PyTorch", level: 80, category: "data-science" },

  // Frontend skills
  { name: "Flutter", level: 100, category: "frontend" },
  { name: "HTML", level: 90, category: "frontend" },
  { name: "CSS", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 50, category: "frontend" },
  { name: "React.js", level: 50, category: "frontend" },

  // Backend skills
  { name: "Flask ", level: 80, category: "backend" },
  { name: "FastAPI ", level: 75, category: "backend" },
  { name: "Django ", level: 70, category: "backend" },
  { name: "SQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },
  { name: "RESTful APIs", level: 60, category: "backend" },
  { name: "WebSockets ", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "AWS", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Jupyter Notebook", level: 95, category: "tools" },
  { name: "PowerBI", level: 70, category: "tools" },
  { name: "Tableau", level: 70, category: "tools" },
];

const categories = ["all", "data-science", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter skills based on selected category
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Category filter buttons - Pill style with icons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card border-2 border-border text-foreground hover:border-primary/50 hover:shadow-md"
              )}
            >
              {category === "all" ? "All Skills" : category.replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Skills grid - Card style with circular badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-2xl shadow-md border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center group"
            >
              {/* Skill name */}
              <h3 className="font-semibold text-sm mb-4 group-hover:text-primary transition-colors line-clamp-2">
                {skill.name}
              </h3>
              
              {/* Circular progress indicator */}
              <div className="relative w-20 h-20 mb-4">
                <svg className="transform -rotate-90 w-20 h-20">
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    className="text-secondary/30"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 36}`}
                    strokeDashoffset={`${2 * Math.PI * 36 * (1 - skill.level / 100)}`}
                    className="text-primary transition-all duration-1000"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

