import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://github.com/Himanshu-Gupta0007",
    githubUrl: "https://github.com/Himanshu-Gupta0007",
  },
  {
    id: 2,
    title: "Orbit Analytics Dashboard",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "https://github.com/Himanshu-Gupta0007",
    githubUrl: "https://github.com/Himanshu-Gupta0007",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "https://github.com/Himanshu-Gupta0007",
    githubUrl: "https://github.com/Himanshu-Gupta0007", 
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-gradient-to-b from-secondary/10 to-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project is colorful, interactive, and built with attention to detail.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-gradient-to-tr from-white/30 via-primary/10 to-white/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={tag + index}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-white hover:scale-110 transition-transform duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-secondary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 group-hover:text-foreground/90 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Github Button */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 cursor-pointer hover:scale-105 transition-transform duration-300"
            target="_blank"
            href="https://github.com/Himanshu-Gupta0007"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
