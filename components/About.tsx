"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Calendar, Award, Compass, Code2, Users, Briefcase, ChevronRight, LucideIcon } from "lucide-react";

interface TimelineEvent {
  year: string;
  key: string;
  icon: LucideIcon;
}

export default function About() {
  const t = useTranslations("about");

  const events: TimelineEvent[] = [
    { year: "2003", key: "2003", icon: Calendar },
    { year: "2019 - 2022", key: "2019_2022", icon: Award },
    { year: "2022 - 2023", key: "2022_2023", icon: Compass },
    { year: "2023", key: "2023_immersion", icon: Code2 },
    { year: "2023", key: "2023_community", icon: Users },
    { year: "2024", key: "2024", icon: Briefcase },
    { year: "2025 - 2026", key: "2025_2026", icon: Code2 },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white"
          >
            {t("title")}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-kivuBlue mx-auto my-4 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        {/* Timeline grid structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Sticky Summary Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="bg-gray-50 dark:bg-slate-800/40 border border-gray-150 dark:border-slate-700/60 p-8 rounded-3xl">
              <span className="text-xs font-black uppercase tracking-widest text-kivuBlue bg-kivuBlue/10 dark:bg-kivuBlue/20 px-3.5 py-1.5 rounded-full">
                {t("history")}
              </span>
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mt-5">
                {t("historyTitle")}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 leading-relaxed font-normal">
                {t("historyDesc")}
              </p>
            </div>
          </div>

          {/* Right Linear Left-Aligned Timeline */}
          <div className="lg:col-span-8 relative pl-8 md:pl-12">
            {/* Timeline Left Vertical Line Track */}
            <div className="absolute left-0 top-3 bottom-3 w-0.5 bg-gray-200 dark:bg-slate-800" />

            <div className="space-y-10">
              {events.map((event) => {
                const IconComponent = event.icon;
                
                return (
                  <div key={event.key} className="relative group">
                    {/* Circle Bullet Anchor */}
                    <div className="absolute -left-[48px] md:-left-[65px] top-1.5 z-20 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ type: "spring", stiffness: 150 }}
                        className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white dark:bg-slate-900 border-2 border-kivuBlue flex items-center justify-center text-kivuBlue shadow-sm group-hover:bg-kivuBlue group-hover:text-white transition-colors duration-300"
                      >
                        <IconComponent className="h-4.5 w-4.5" />
                      </motion.div>
                    </div>

                    {/* Timeline Event Content Card */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 100, damping: 15 }}
                      whileHover={{ scale: 1.01 }}
                      className="bg-gray-50 dark:bg-slate-800/40 border border-gray-150 dark:border-slate-700/50 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-kivuBlue dark:hover:border-kivuBlue transition-all duration-300"
                    >
                      {/* Year & Badge */}
                      <span className="inline-block px-3 py-1 bg-kivuBlue/10 dark:bg-kivuBlue/20 text-kivuBlue dark:text-blue-300 text-xs font-bold rounded-full mb-3">
                        {event.year}
                      </span>

                      {/* Header */}
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center group-hover:text-kivuBlue transition-colors duration-200">
                        {t(`events.${event.key}.title`)}
                        <ChevronRight className="h-4 w-4 ml-1.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </h4>

                      {/* Description */}
                      <p className="mt-2.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                        {t(`events.${event.key}.description`)}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
