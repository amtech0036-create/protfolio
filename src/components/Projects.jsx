import { ExternalLink, Github, Sparkles, Globe, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import SectionTitle from "./SectionTitle";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background ambient motion glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -left-32 w-96 h-96 bg-primary-500/10 dark:bg-primary-500/15 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.1, 0.25, 0.1],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 -right-32 w-96 h-96 bg-primary-400/10 dark:bg-primary-400/15 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Featured Projects"
          subtitle="Selected business software and web projects"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-10"
        >
          {/* Project 1 - Prime Hisab (Featured ERP) */}
          {projects[0] && (
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
              className="group bg-white dark:bg-gray-800/40 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Project Visual Mockup */}
                <div className="lg:col-span-2 bg-gradient-to-br from-primary-50/80 via-primary-100/50 to-primary-200/30 dark:from-primary-950/60 dark:via-primary-900/40 dark:to-primary-950/60 p-6 sm:p-8 flex items-center justify-center min-h-[280px] relative overflow-hidden">
                  {/* Subtle radial light */}
                  <div className="absolute inset-0 bg-radial from-white/40 dark:from-white/5 to-transparent pointer-events-none" />

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 w-full max-w-sm border border-gray-200/80 dark:border-gray-700/80 relative z-10 backdrop-blur-sm"
                  >
                    {/* Window Bar */}
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      </div>
                      <span className="text-[10px] font-mono text-primary-600 dark:text-primary-400 flex items-center gap-1.5 font-semibold">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        Prime Hisab
                      </span>
                    </div>

                    {/* Dashboard Wireframe Content with animated metric cards */}
                    <div className="space-y-2.5">
                      <div className="h-2 bg-primary-200 dark:bg-primary-800 rounded w-3/4 animate-pulse" />
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
                      
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        <motion.div
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="h-14 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/40 dark:to-primary-800/40 rounded-lg p-2 flex flex-col justify-between border border-primary-200/60 dark:border-primary-800/60"
                        >
                          <div className="w-4 h-1.5 bg-primary-500 rounded-full" />
                          <span className="text-[10px] font-bold text-primary-700 dark:text-primary-300">Sales</span>
                        </motion.div>

                        <motion.div
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                          className="h-14 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/40 dark:to-emerald-900/40 rounded-lg p-2 flex flex-col justify-between border border-emerald-200/60 dark:border-emerald-800/60"
                        >
                          <div className="w-4 h-1.5 bg-emerald-500 rounded-full" />
                          <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300">Stock</span>
                        </motion.div>

                        <motion.div
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                          className="h-14 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/40 dark:to-indigo-900/40 rounded-lg p-2 flex flex-col justify-between border border-indigo-200/60 dark:border-indigo-800/60"
                        >
                          <div className="w-4 h-1.5 bg-indigo-500 rounded-full" />
                          <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-300">Ledger</span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-3 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50 rounded-full border border-primary-200/60 dark:border-primary-800/60">
                        <Sparkles size={12} className="text-primary-500" />
                        {projects[0].category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {projects[0].name}
                    </h3>
                    
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                      {projects[0].description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[0].technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05, y: -1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700/50 hover:bg-primary-50 dark:hover:bg-primary-950/50 hover:text-primary-600 dark:hover:text-primary-400 rounded-full transition-colors cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <motion.a
                      href={projects[0].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25 group/btn"
                    >
                      <span>View Project</span>
                      <ExternalLink
                        size={14}
                        className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
                      />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Project 2 - AMTech Solutions */}
          {projects[1] && (
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
              className="group bg-white dark:bg-gray-800/40 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Project Visual Mockup */}
                <div className="lg:col-span-2 bg-gradient-to-br from-blue-50/80 via-indigo-50/50 to-primary-100/40 dark:from-gray-900 dark:via-primary-950/40 dark:to-gray-900 p-6 sm:p-8 flex items-center justify-center min-h-[280px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-radial from-white/40 dark:from-white/5 to-transparent pointer-events-none" />

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 w-full max-w-sm border border-gray-200/80 dark:border-gray-700/80 relative z-10 backdrop-blur-sm"
                  >
                    {/* Browser Address Bar */}
                    <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-gray-100 dark:border-gray-700">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      <div className="ml-2 flex-1 bg-gray-100 dark:bg-gray-900/60 rounded px-2 py-0.5 text-[9px] font-mono text-gray-500 dark:text-gray-400 truncate">
                        amtechsolutionsbd.com
                      </div>
                    </div>

                    {/* Website Mockup Preview */}
                    <div className="space-y-2">
                      <div className="h-8 bg-gradient-to-r from-primary-600 to-indigo-600 rounded-lg p-1.5 flex items-center justify-between text-white">
                        <div className="w-12 h-2 bg-white/70 rounded-full" />
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-white/50 rounded-full" />
                          <div className="w-2 h-2 bg-white/50 rounded-full" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <motion.div
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="h-12 bg-gray-50 dark:bg-gray-700/40 rounded-lg p-2 border border-gray-100 dark:border-gray-700/50"
                        >
                          <div className="w-6 h-1.5 bg-primary-400 rounded-full mb-1" />
                          <div className="w-10 h-1 bg-gray-300 dark:bg-gray-600 rounded" />
                        </motion.div>
                        <motion.div
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                          className="h-12 bg-gray-50 dark:bg-gray-700/40 rounded-lg p-2 border border-gray-100 dark:border-gray-700/50"
                        >
                          <div className="w-6 h-1.5 bg-indigo-400 rounded-full mb-1" />
                          <div className="w-10 h-1 bg-gray-300 dark:bg-gray-600 rounded" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-3 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50 rounded-full border border-primary-200/60 dark:border-primary-800/60">
                        <Globe size={12} className="text-primary-500" />
                        {projects[1].category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {projects[1].name}
                    </h3>

                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                      {projects[1].description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[1].technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05, y: -1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700/50 hover:bg-primary-50 dark:hover:bg-primary-950/50 hover:text-primary-600 dark:hover:text-primary-400 rounded-full transition-colors cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <motion.a
                      href={projects[1].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25 group/btn"
                    >
                      <span>View Project</span>
                      <ExternalLink
                        size={14}
                        className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
                      />
                    </motion.a>

                    {projects[1].githubUrl && (
                      <motion.a
                        href={projects[1].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        <Github size={14} />
                        <span>GitHub</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
