import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { erpFeatures, erpShowcaseText } from "../data/erpFeatures";
import {
  ShoppingCart,
  Users,
  Package,
  BarChart3,
  Warehouse,
  CreditCard,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const featureIcons = [
  ShoppingCart,
  Package,
  Warehouse,
  BarChart3,
  Users,
  CreditCard,
  ShoppingCart,
  Users,
  Package,
  BarChart3,
  Users,
  CreditCard,
];

export default function ErpShowcase() {
  const [ref, isVisible] = useScrollAnimation(0.05);

  return (
    <section className="py-20 sm:py-28 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="ERP Solutions I Build"
          subtitle={erpShowcaseText}
        />

        <div ref={ref} className="mt-12">
          {/* ERP Dashboard Mockup */}
          <div
            className={`bg-white dark:bg-gray-800/30 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Dashboard Header */}
            <div className="bg-gray-50 dark:bg-gray-800/50 px-6 py-4 border-b border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                    <Package size={16} className="text-white" />
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Prime Hisab
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    System Active
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {erpFeatures.map((feature, i) => {
                  const Icon = featureIcons[i % featureIcons.length];
                  return (
                    <div
                      key={feature}
                      className={`p-3 sm:p-4 rounded-xl border border-gray-100 dark:border-gray-700/50 hover:border-primary-200 dark:hover:border-primary-800 hover:bg-primary-50/50 dark:hover:bg-primary-950/20 transition-all duration-300 cursor-default group ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: `${i * 50 + 200}ms` }}
                    >
                      <Icon
                        size={20}
                        className="text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform"
                      />
                      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 block">
                        {feature}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
