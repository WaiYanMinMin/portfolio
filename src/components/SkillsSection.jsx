// Skills section - showcase your technical skills with sliding marquee
import { useState } from "react";
import { cn } from "@/lib/utils";

// Customize these skills with your own!
const skills = [
  // Data Science skills
  { name: "Python", category: "data-science" },
  { name: "Machine Learning", category: "data-science" },
  { name: "Deep Learning", category: "data-science" },
  { name: "LLMs", category: "data-science" },
  { name: "Langchain", category: "data-science" },
  { name: "RAG", category: "data-science" },
  { name: "Pandas", category: "data-science" },
  { name: "NumPy", category: "data-science" },
  { name: "Scikit-learn", category: "data-science" },
  { name: "Streamlit", category: "data-science" },
  { name: "Matplotlib", category: "data-science" },
  { name: "Seaborn", category: "data-science" },
  { name: "TensorFlow", category: "data-science" },
  { name: "PyTorch", category: "data-science" },

  // Frontend skills
  { name: "Flutter", category: "frontend" },
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "React.js", category: "frontend" },

  // Backend skills
  { name: "Flask", category: "backend" },
  { name: "FastAPI", category: "backend" },
  { name: "Django", category: "backend" },
  { name: "SQL", category: "backend" },
  { name: "GraphQL", category: "backend" },
  { name: "RESTful APIs", category: "backend" },
  { name: "WebSockets", category: "backend" },

  // Deployment
  { name: "AWS", category: "deployment" },
  { name: "Google Cloud", category: "deployment" },
  { name: "Azure", category: "deployment" },
  { name: "Docker", category: "deployment" },
  { name: "Kubernetes", category: "deployment" },
  { name: "Terraform", category: "deployment" },
  { name: "Vercel", category: "deployment" },
  { name: "Netlify", category: "deployment" },
  { name: "GitHub Actions", category: "deployment" },
  { name: "Railway", category: "deployment" },
  { name: "Heroku", category: "deployment" },

  // Tools
  { name: "Git/GitHub", category: "tools" },
  { name: "n8n", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Jupyter Notebook", category: "tools" },
  { name: "PowerBI", category: "tools" },
  { name: "Tableau", category: "tools" },
];

const categories = ["all", "data-science", "frontend", "backend", "deployment", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter skills based on selected category
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  // Split into 3 rows (round-robin). For small sets, repeat more so marquee feels full
  const row0 = filteredSkills.filter((_, i) => i % 3 === 0);
  const row1 = filteredSkills.filter((_, i) => i % 3 === 1);
  const row2 = filteredSkills.filter((_, i) => i % 3 === 2);
  const rows = [row0, row1, row2];

  // Build display array: repeat until at least 18 items per row (avoids sparse look)
  const minItems = 18;
  const getDisplaySkills = (rowSkills) => {
    if (rowSkills.length === 0) return [];
    const reps = Math.max(2, Math.ceil(minItems / rowSkills.length));
    return Array(reps)
      .fill(rowSkills)
      .flat();
  };

  // Stagger start, vary speed & alternate direction so rows never all look empty on one side
  const getRowStyle = (rowSkills, rowIndex) => {
    const baseDuration = Math.max(rowSkills.length * 2, 20);
    const durationVariants = [1, 1.15, 0.92];
    return {
      width: "max-content",
      animationDuration: baseDuration * durationVariants[rowIndex] + "s",
      animationDelay: `-${rowIndex * 7}s`,
      animationDirection: rowIndex === 1 ? "reverse" : "normal",
    };
  };

  return (
    <section id="skills" className="py-28 md:py-36 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Category filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
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

        {/* Sliding marquee - 3 rows, text fades to transparent at edges */}
        <div
          key={activeCategory}
          className="relative w-full overflow-hidden py-8 min-h-[280px] md:min-h-[340px]"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="overflow-hidden space-y-6 md:space-y-8">
            {rows.map((rowSkills, rowIndex) => (
              <div key={rowIndex} className="overflow-hidden">
                <div
                  className="flex animate-marquee-right gap-8 md:gap-12 py-3"
                  style={getRowStyle(rowSkills, rowIndex)}
                >
                  {[...getDisplaySkills(rowSkills), ...getDisplaySkills(rowSkills)].map((skill, key) => (
                    <span
                      key={key}
                      className="flex-shrink-0 font-semibold text-lg md:text-xl text-foreground/90 hover:text-primary transition-colors whitespace-nowrap"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

