import { Briefcase } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { experiences, education } from "../data/experience";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  const [ref, isVisible] = useScrollAnimation(0.05);
  const [ref2, isVisible2] = useScrollAnimation(0.05);

  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Professional Experience" />

        {/* Timeline */}
        <div ref={ref} className="relative max-w-4xl mx-auto mb-20">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                className={`relative pl-12 sm:pl-16 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 sm:left-4 top-1 w-4 h-4 rounded-full border-2 border-primary-600 dark:border-primary-400 bg-white dark:bg-gray-950 z-10">
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-primary-600 dark:bg-primary-400 animate-ping opacity-50" />
                  )}
                </div>

                <div className="bg-white dark:bg-gray-800/30 rounded-xl p-5 sm:p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full ${
                        exp.current
                          ? "bg-green-50 dark:bg-green-950/50 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      <Briefcase size={12} />
                      {exp.period}
                    </span>
                  </div>

                  {exp.responsibilities && (
                    <ul className="mt-3 space-y-1.5">
                      {exp.responsibilities.map((resp, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <SectionTitle title="Education" />

        <div ref={ref2} className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {education.map((edu, i) => (
              <div
                key={edu.id}
                className={`bg-white dark:bg-gray-800/30 rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-500 ${
                  isVisible2
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-primary-600 dark:text-primary-400 font-bold text-lg mb-1">
                  {edu.gpa}
                </div>
                <h3 className="text-gray-900 dark:text-white font-semibold mb-1">
                  {edu.degree}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {edu.institution}
                </p>
                <p className="text-gray-400 dark:text-gray-500 text-xs mt-2">
                  {edu.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
