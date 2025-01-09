import { Link } from "react-router-dom";
import { SocialLinks } from "@/components/ui/social-links";
import Logo from "@/components/ui/assets/logo.svg";

export function Projects() {
  const projects = [
    {
      title: "Beyoutique - Business",
      description: "A personal website and blog built with React, TypeScript, and Tailwind CSS",
      link: "https://github.com/damonk3y/the-jungle-book",
      tags: ["React", "TypeScript", "Tailwind"],
      status: "In Progress"
    },
    {
      title: "Beyoutique - Fashion Social Network",
      description: "A code splitting and optimization tool for React applications",
      link: "https://github.com/damonk3y/banana-split", 
      tags: ["React", "Performance", "Tooling"],
      status: "Planning"
    }
  ];

  return (
    <section className="w-full h-full flex flex-col items-center justify-center mx-auto max-w-[900px] px-4 pb-12 pt-4 md:py-12">
      <Link to="/" className="self-center mb-8 flex flex-col items-center">
        <img src={Logo} alt="damonk3ys logo" className="size-20" />
        <h1 className="text-blue-400 text-sm">da monkey</h1>
      </Link>
      
      <h1 className="text-3xl font-bold text-blue-400 mb-8">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full relative">
        {projects.map((project) => (
          <a 
            key={project.title}
            href={project.link}
            target="_blank"
            className="block p-6 rounded-xl border-2 border-white/20 backdrop-blur-sm hover:scale-105 transition-all"
          >
            <div className="">
              <h2 className="text-xl font-bold text-pink-500">{project.title}</h2>
              <span className={`absolute -top-4 -right-3 text-xs px-2 py-1 rounded-full ${
                project.status === "Active" ? "bg-green-500 text-black" :
                project.status === "In Progress" ? "bg-yellow-500 text-black" :
                "bg-purple-500 text-black"
              }`}>
                {project.status}
              </span>
            </div>
            
            <p className="text-gray-400 mb-4">{project.description}</p>
            
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="text-sm px-3 py-1 rounded-full bg-blue-500/20 text-blue-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <SocialLinks className="mt-12" />
    </section>
  );
}
