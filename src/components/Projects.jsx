import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { projects } from "../data/projects";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  const [ref, isVisible] = useScrollAnimation(0.05);

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured Projects"
          subtitle="Selected business software and web projects"
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-8">
          {/* Featured Project - AMTech ERP */}
          <div
            className={`lg:col-span-2 bg-white dark:bg-gray-800/30 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Project Visual */}
              <div className="lg:col-span-2 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950/50 dark:to-primary-900/50 p-8 flex items-center justify-center min-h-[250px]">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 w-full max-w-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-1.5 mb-3 pb-2 border-b border-gray-100 dark:border-gray-700">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-primary-200 dark:bg-primary-800 rounded w-3/4" />
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="h-12 bg-primary-100 dark:bg-primary-900/50 rounded" />
                      <div className="h-12 bg-primary-100 dark:bg-primary-900/50 rounded" />
                      <div className="h-12 bg-primary-100 dark:bg-primary-900/50 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:col-span-3 p-6 sm:p-8">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50 rounded-full mb-3">
                  {projects[0].category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {projects[0].name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                  {projects[0].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[0].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700/50 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={projects[0].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25"
                >
                  <ExternalLink size={14} />
                  View Project
                </a>
              </div>
            </div>
          </div>

          {/* Other Projects */}
          {projects.slice(1).map((project, i) => (
            <div
              key={project.id}
              className={`bg-white dark:bg-gray-800/30 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 sm:p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50 rounded-full mb-3">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {project.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700/50 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25"
                >
                  <ExternalLink size={14} />
                  View Project
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
