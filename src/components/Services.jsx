import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { services } from "../data/services";
import SectionTitle from "./SectionTitle";

export default function Services() {
  const [ref, isVisible] = useScrollAnimation(0.05);

  return (
    <section id="services" className="py-20 sm:py-28 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="What I Can Build"
          subtitle="Professional solutions for modern businesses"
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`group bg-white dark:bg-gray-800/30 rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-500 hover:-translate-y-1 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="p-3 bg-primary-50 dark:bg-primary-950/50 rounded-xl w-fit mb-4 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
                  <Icon
                    size={24}
                    className="text-primary-600 dark:text-primary-400"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
