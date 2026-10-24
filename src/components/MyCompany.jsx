import { ExternalLink, Globe, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import SectionTitle from "./SectionTitle";

export default function MyCompany() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="My Company"
          subtitle="The business behind the work"
        />

        <div ref={ref} className="max-w-4xl mx-auto">
          <div
            className={`bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-950/30 dark:to-primary-900/20 rounded-2xl border border-primary-200/50 dark:border-primary-800/50 overflow-hidden transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left - Info */}
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                    <Globe size={20} className="text-white" />
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold text-primary-600 dark:text-primary-400 bg-white dark:bg-gray-800/50 rounded-full border border-primary-200 dark:border-primary-800">
                    Company
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  A&M Tech Solutions BD
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  A technology solutions company focused on building ERP systems,
                  business management software, and web applications for businesses
                  in Bangladesh and beyond.
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Active
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    ERP & Business Software
                  </div>
                </div>

                <a
                  href="https://amtechsolutionsbd.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25 group"
                >
                  Visit Website
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>

              {/* Right - Visual */}
              <div className="hidden md:flex items-center justify-center p-8 bg-primary-600/5 dark:bg-primary-950/20">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 w-full max-w-xs border border-gray-200/50 dark:border-gray-700/50">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-1.5 mb-3 pb-2 border-b border-gray-100 dark:border-gray-700">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>

                  {/* URL Bar */}
                  <div className="bg-gray-100 dark:bg-gray-900/50 rounded-lg px-3 py-1.5 mb-3">
                    <span className="text-[10px] text-gray-400 dark:text-gray-500 font-mono">
                      amtechsolutionsbd.com
                    </span>
                  </div>

                  {/* Mock Content */}
                  <div className="space-y-2">
                    <div className="h-3 bg-primary-200 dark:bg-primary-800 rounded w-3/4" />
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-full" />
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="h-12 bg-primary-100 dark:bg-primary-900/50 rounded" />
                      <div className="h-12 bg-primary-100 dark:bg-primary-900/50 rounded" />
                      <div className="h-12 bg-primary-100 dark:bg-primary-900/50 rounded" />
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
