import { useState } from "react";
import { cn } from "../lib/utills";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaDocker, FaFigma, FaCode 
} from "react-icons/fa";
import { 
  SiTypescript, SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiGraphql 
} from "react-icons/si";

const skills = [
  // Frontend
  { name: "HTML", level: 95, category: "frontend", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
  { name: "CSS", level: 95, category: "frontend", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
  { name: "JavaScript", level: 90, category: "frontend", icon: <FaJs className="text-yellow-400 text-2xl" /> },
  { name: "React", level: 90, category: "frontend", icon: <FaReact className="text-blue-400 text-2xl" /> },
  { name: "TypeScript", level: 85, category: "frontend", icon: <SiTypescript className="text-blue-600 text-2xl" /> },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: <SiTailwindcss className="text-sky-400 text-2xl" /> },
  { name: "Next.js", level: 80, category: "frontend", icon: <SiNextdotjs className="text-black dark:text-white text-2xl" /> },

  // Backend
  { name: "Node.js", level: 80, category: "backend", icon: <FaNodeJs className="text-green-500 text-2xl" /> },
  { name: "Express", level: 75, category: "backend", icon: <SiExpress className="text-gray-600 text-2xl" /> },
  { name: "MongoDB", level: 70, category: "backend", icon: <SiMongodb className="text-green-600 text-2xl" /> },
  { name: "PostgreSQL", level: 65, category: "backend", icon: <SiPostgresql className="text-blue-700 text-2xl" /> },
  { name: "GraphQL", level: 60, category: "backend", icon: <SiGraphql className="text-pink-500 text-2xl" /> },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", icon: <FaGithub className="text-gray-800 dark:text-white text-2xl" /> },
  { name: "Docker", level: 70, category: "tools", icon: <FaDocker className="text-sky-500 text-2xl" /> },
  { name: "Figma", level: 85, category: "tools", icon: <FaFigma className="text-pink-500 text-2xl" /> },
  { name: "VS Code", level: 95, category: "tools", icon: <FaCode className="text-blue-500 text-2xl" /> },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize cursor-pointer hover:scale-105 hover:bg-primary/80",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {skill.icon}
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
