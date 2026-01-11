// Projects section - showcase your work
import { ArrowRight, Code, ExternalLink, Github } from "lucide-react";

// Your featured projects
// Add your project images to public/projects/ folder
const projects = [
  {
    id: 5,
    title: "SG Jobs Market Analysis Dashboard",
    description:
      "Comprehensive Singapore tech job market analysis dashboard analyzing 2025 market trends. Features major data cleaning and engineering, job clustering using SentenceTransformers and KMeans, and interactive visualizations.",
    image: "/projects/sgjobs.png", // Add your image here
    tags: [
      "Python",
      "Streamlit",
      "SentenceTransformers",
      "KMeans",
      "Data Engineering",
    ],
    demoUrl: "https://sgjobsdashboard.streamlit.app/",
    githubUrl: "https://github.com/WaiYanMinMin/sg_jobs_streamlit",
    colabUrl:
      "https://colab.research.google.com/drive/119D2mXFM0RQbC2gbcgl4GGqWV_kO5kDP?usp=sharing",
  },
  {
    id: 4,
    title: "Resume Screening Backend",
    description:
      "FastAPI backend for automated resume screening using NLP, ML embeddings, and clustering. Features PDF text extraction, similarity scoring against job descriptions, skill extraction, and candidate ranking.",
    image: "/projects/resumescreening.png", // Add your image here
    tags: ["Python", "FastAPI", "NLP", "Clustering", "ML Embeddings"],
    demoUrl: "https://golden-blancmange-c1cfb0.netlify.app/",
    githubUrl: "https://github.com/WaiYanMinMin/resume_screening_backend",
  },
  {
    id: 1,
    title: "TimeWorld - Watch Collectors App",
    description:
      "Ultimate watch collectors application for iOS and Android. A beautifully designed app for watch enthusiasts to manage and showcase their timepiece collections.",
    image: "/projects/timeworld.jpg", // Add your image here
    tags: ["Flutter", "iOS", "Android", "Mobile App"],
    demoUrl: "https://apps.apple.com/sg/app/timeworld/id6615080537",
    // No GitHub link for this project
  },
  {
    id: 2,
    title: "Computer Vision - CIFAR-10",
    description:
      "Computer vision project using CIFAR-10 dataset to classify and label animals using machine learning and deep learning techniques. Includes object detection capabilities.",
    image: "/projects/colab.png", // Add your image here
    tags: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
    
    githubUrl: "https://github.com/WaiYanMinMin/ComputerVision_CIFAR-10",
    colabUrl:
      "https://colab.research.google.com/drive/1r02RIS73NVzVD08zveSm3W3h11DByEKA",
  },
  {
    id: 3,
    title: "Airbnb Melbourne Price Prediction",
    description:
      "Machine learning project for predicting Airbnb prices in Melbourne. Uses regression analysis with Python to forecast rental prices based on various features.",
    image: "/projects/colab.png", // Add your image here
    tags: ["Python", "Scikit-learn", "Pandas", "ML"],
    colabUrl:
      "https://drive.google.com/file/d/13ZvpZMmOc5mkOyAuozU04xvJdbhGNWvN/view",
    githubUrl:
      "https://github.com/WaiYanMinMin/Airbnb_Melbourne_price_prediction",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my featured projects showcasing my work in data science,
            machine learning, and mobile app development. Each project demonstrates
            my skills in solving real-world problems with innovative solutions.
          </p>
        </div>

        {/* Projects - Alternating layout */}
        <div className="space-y-12">
          {projects.map((project, key) => {
            const isEven = key % 2 === 0;
            return (
              <div
                key={key}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-stretch bg-card rounded-3xl overflow-hidden shadow-lg border border-border/50 hover:shadow-2xl transition-all duration-300`}
              >
                {/* Project image - Half width */}
                <div className="w-full md:w-1/2 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                {/* Project content - Half width */}
                <div className="w-full md:w-1/2 p-8 md:p-12 space-y-6">
                  {/* Project number badge */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg">
                    {key + 1}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagKey) => (
                      <span
                        key={tagKey}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Project links */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 text-sm sm:text-base"
                        aria-label={`View ${project.title} demo`}
                      >
                        <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full border-2 border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 text-sm sm:text-base"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.colabUrl && (
                      <a
                        href={project.colabUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full border-2 border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 text-sm sm:text-base"
                        aria-label={`View ${project.title} on Colab`}
                      >
                        <Code size={16} className="sm:w-[18px] sm:h-[18px]" />
                        <span>Colab</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub link button */}
        <div className="text-center mt-16">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/WaiYanMinMin"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

