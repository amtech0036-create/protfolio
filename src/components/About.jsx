import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { aboutContent, stats } from "../data/profile";
import SectionTitle from "./SectionTitle";

export default function About() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-20 sm:py-28 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-4">
              {aboutContent.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800/50 rounded-xl p-6 text-center border border-gray-100 dark:border-gray-700/50 hover:shadow-lg hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300 group"
              >
                <div className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
