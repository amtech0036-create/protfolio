import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { skillCategories } from "../data/skills";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation(0.05);

  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Technical Skills" />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`bg-white dark:bg-gray-800/30 rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary-50 dark:bg-primary-950/50 rounded-lg">
                    <Icon
                      size={20}
                      className="text-primary-600 dark:text-primary-400"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700/50 rounded-lg hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-950/50 dark:hover:text-primary-400 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
