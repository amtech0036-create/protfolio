import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { workProcessSteps } from "../data/workProcess";
import SectionTitle from "./SectionTitle";

export default function WorkProcess() {
  const [ref, isVisible] = useScrollAnimation(0.05);

  return (
    <section className="py-20 sm:py-28 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="How I Build Solutions" />

        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Desktop: Horizontal */}
          <div className="hidden md:grid grid-cols-6 gap-4">
            {workProcessSteps.map((item, i) => (
              <div
                key={item.step}
                className={`relative transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Step Number */}
                <div className="w-12 h-12 bg-primary-600 dark:bg-primary-400 rounded-xl flex items-center justify-center text-white font-bold text-sm mb-4 mx-auto">
                  {item.step}
                </div>

                {/* Connector Line */}
                {i < workProcessSteps.length - 1 && (
                  <div className="absolute top-6 left-[calc(50%+24px)] right-[-calc(50%-24px)] h-px bg-gray-200 dark:bg-gray-700" />
                )}

                <h3 className="text-sm font-semibold text-gray-900 dark:text-white text-center mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile: Vertical */}
          <div className="md:hidden space-y-6">
            {workProcessSteps.map((item, i) => (
              <div
                key={item.step}
                className={`flex items-start gap-4 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 bg-primary-600 dark:bg-primary-400 rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
