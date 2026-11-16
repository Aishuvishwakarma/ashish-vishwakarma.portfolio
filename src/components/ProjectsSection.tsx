
import React, { useState } from "react";
import { projects, GsapAnimation, Iprojects } from "../constant/index";

type ProjectTab = "projects" | "GsapAnimation";

const ProjectsSection: React.FC = () => {
  const [projectTab, setProjectTab] = useState<ProjectTab>("projects");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const activeProjects =
    projectTab === "projects" ? projects : GsapAnimation;

  const handleToggleDescription = (index: number) => {
    const projectId = `${projectTab}-${index}`;

    setSelectedProject((prev) =>
      prev === projectId ? null : projectId
    );
  };

  const handleClick = (project: Iprojects) => {
    if (!project.link) return;

    window.open(project.link, "_blank", "noopener,noreferrer");
  };

  const handleClickTab = (tab: ProjectTab) => {
    setProjectTab(tab);
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 px-6 md:px-12 lg:px-20 bg-[#080b16] text-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-400 uppercase tracking-[4px] text-sm font-semibold mb-4">
            My Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            A collection of projects I've worked on throughout my
            professional journey, showcasing my experience in
            building scalable applications and modern digital solutions.
          </p>
        </div>

        {/* Project Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10">

            <button
              onClick={() => handleClickTab("projects")}
              className={`px-6 py-3 rounded-lg text-sm md:text-base font-semibold transition-all duration-300 ${
                projectTab === "projects"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Professional Projects
            </button>

            <button
              onClick={() => handleClickTab("GsapAnimation")}
              className={`px-6 py-3 rounded-lg text-sm md:text-base font-semibold transition-all duration-300 ${
                projectTab === "GsapAnimation"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              GSAP Animations
            </button>

          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {activeProjects.map((project: Iprojects, index: number) => {
            const projectId = `${projectTab}-${index}`;
            const isExpanded = selectedProject === projectId;

            return (
              <article
                key={projectId}
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-[#111827] border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20"
              >

                {/* Project Image */}
                <div className="relative h-52 overflow-hidden bg-gray-900">

                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />

                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md border border-white/10 text-blue-300">
                    {projectTab === "projects"
                      ? "Project"
                      : "Animation"}
                  </div>

                </div>

                {/* Project Content */}
                <div className="flex flex-col flex-1 p-6">

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-blue-400 text-sm font-medium mb-3">
                    {project.sub_title}
                  </p>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {isExpanded
                      ? project.description
                      : `${project.description.slice(0, 110)}${
                          project.description.length > 110 ? "..." : ""
                        }`}
                  </p>

                  {/* Technologies */}
                  <div className="mb-5">
                    <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-3">
                      Technologies Used
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technolodgy_used
                        .split(",")
                        .map((technology, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1.5 text-xs rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300"
                          >
                            {technology.trim()}
                          </span>
                        ))}
                    </div>
                  </div>

                  {/* Expanded Project Details */}
                  {isExpanded && (
                    <div className="mb-5 pt-4 border-t border-white/10 animate-fadeIn">

                      <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2">
                        Key Features
                      </p>

                      <p className="text-sm text-gray-400 leading-relaxed whitespace-pre-line">
                        {project.features}
                      </p>

                    </div>
                  )}

                  {/* Actions */}
                  <div className="mt-auto pt-5 border-t border-white/10 flex items-center justify-between gap-3">

                    <button
                      onClick={() => handleToggleDescription(index)}
                      className="text-sm font-semibold text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {isExpanded ? "Show Less ↑" : "View Details ↓"}
                    </button>

                    <button
                      onClick={() => handleClick(project)}
                      disabled={!project.link}
                      className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold transition-all duration-300"
                    >
                      View Project ↗
                    </button>

                  </div>

                </div>
              </article>
            );
          })}

        </div>

        {/* Empty State */}
        {activeProjects.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No projects available at the moment.
          </div>
        )}

        {/* Bottom Note */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            Always exploring new technologies and building something meaningful.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
