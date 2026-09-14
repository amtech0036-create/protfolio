import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { profile, heroHeadline, heroSubheadline } from "../data/profile";

function DashboardCard({ label, value, color, className }) {
  return (
    <div
      className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100 dark:border-gray-700/50 ${className}`}
    >
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{label}</p>
      <p className={`text-sm sm:text-base font-bold ${color}`}>{value}</p>
    </div>
  );
}

export default function Hero() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-400/5 dark:bg-primary-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={ref}>
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50 rounded-full mb-6 border border-primary-100 dark:border-primary-900/50">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                Available for Projects
              </span>
            </div>

            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {heroHeadline.split("ERP").map((part, i) =>
                i === 0 ? (
                  <span key={i}>
                    {part}
                    <span className="text-primary-600 dark:text-primary-400">
                      ERP
                    </span>
                  </span>
                ) : (
                  <span key={i}>
                    {part.split("&").map((sub, j) =>
                      j === 0 ? (
                        <span key={j}>{sub}</span>
                      ) : (
                        <span key={j}>
                          &amp;
                          <span className="text-primary-600 dark:text-primary-400">
                            {sub.replace("Business Solutions", "")}
                          </span>
                          Business Solutions
                        </span>
                      )
                    )}
                  </span>
                )
              )}
            </h1>

            <p
              className={`text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-xl transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {heroSubheadline}
            </p>

            <div
              className={`flex flex-wrap gap-4 mb-8 transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25"
              >
                View My Projects
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
              >
                Contact Me
              </a>
            </div>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <Download size={14} />
              Download Resume
            </a>
          </div>

          {/* Right Side - ERP Dashboard Mockup */}
          <div
            className={`relative transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* Main Dashboard Frame */}
              <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-800/50 p-4 sm:p-6 shadow-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-gray-400 ml-2 font-mono">
                    ERP Dashboard
                  </span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <DashboardCard
                    label="Sales"
                    value="৳ 125,450"
                    color="text-green-600 dark:text-green-400"
                    className="animate-float"
                  />
                  <DashboardCard
                    label="Inventory"
                    value="1,248 Items"
                    color="text-blue-600 dark:text-blue-400"
                    className="animate-float-delay"
                  />
                  <DashboardCard
                    label="Customers"
                    value="486"
                    color="text-purple-600 dark:text-purple-400"
                    className="animate-float-delay"
                  />
                  <DashboardCard
                    label="Pending Due"
                    value="৳ 84,200"
                    color="text-orange-600 dark:text-orange-400"
                    className="animate-float"
                  />
                </div>

                {/* Mini Chart Area */}
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      Revenue Overview
                    </span>
                    <span className="text-xs text-green-500 font-medium">
                      +12.5%
                    </span>
                  </div>
                  <div className="flex items-end gap-1 h-20">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-primary-500/20 dark:bg-primary-400/20 rounded-t-sm relative group"
                          style={{ height: `${h}%` }}
                        >
                          <div
                            className="absolute bottom-0 left-0 right-0 bg-primary-500 dark:bg-primary-400 rounded-t-sm transition-all duration-300 group-hover:bg-primary-600 dark:group-hover:bg-primary-300"
                            style={{ height: `${h}%` }}
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/10 rounded-full blur-xl animate-pulse-slow" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary-400/10 rounded-full blur-xl animate-pulse-slow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
