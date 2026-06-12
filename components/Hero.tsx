"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Terminal } from "lucide-react";

export default function Hero() {
  const t = useTranslations("hero");
  const [imgError, setImgError] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Decorative background blurs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-kivuBlue/20 rounded-full blur-3xl dark:bg-kivuBlue/35" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-kivuBlue/10 rounded-full blur-3xl dark:bg-kivuBlue/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Hero text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left"
          >
            {/* Tag / Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-kivuBlue/10 dark:bg-kivuBlue/25 border border-kivuBlue/25 px-4 py-1.5 rounded-full text-xs font-semibold text-kivuBlue dark:text-blue-300 w-fit mx-auto lg:mx-0 shadow-sm"
            >
              <Terminal className="h-4 w-4 text-kivuBlue" />
              <span>UI/UX Designer &amp; Co-fondateur</span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                <span className="block text-gray-900 dark:text-white">
                  {t("title")}
                </span>
                <span className="block text-3xl sm:text-4xl md:text-5xl text-kivuBlue mt-1">
                  {t("fullName")}
                </span>
              </h1>
            </motion.div>

            {/* Subtitle / Bio */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0"
            >
              {t("subtitle")}
            </motion.p>

            {/* Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <a
                href="#about"
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-kivuBlue hover:bg-blue-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-kivuBlue/35 dark:shadow-kivuBlue/20 hover:scale-105 active:scale-95"
              >
                <span>{t("ctaAbout")}</span>
                <ArrowRight className="ml-2.5 h-5 w-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-kivuBlue dark:hover:border-kivuBlue text-gray-800 dark:text-gray-200 font-semibold rounded-xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-750 hover:scale-105 active:scale-95"
              >
                <MessageSquare className="mr-2.5 h-5 w-5 text-kivuBlue" />
                <span>{t("ctaContact")}</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Profile photo container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 1.5 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
              {/* Outer glowing border frames */}
              <div className="absolute inset-0 bg-kivuBlue/10 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-500 scale-95" />
              <div className="absolute inset-0 border border-kivuBlue/30 rounded-3xl opacity-20 group-hover:rotate-6 transition-transform duration-500" />
              <div className="absolute inset-0 border border-kivuBlue/30 rounded-3xl opacity-20 group-hover:-rotate-6 transition-transform duration-500" />

              {/* Image Frame */}
              <div className="relative w-full h-full bg-white dark:bg-slate-900 border-2 border-gray-150 dark:border-gray-800 rounded-3xl overflow-hidden p-3 shadow-2xl flex items-center justify-center">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  {!imgError ? (
                    <img
                      src="/john.png"
                      alt="John Moka"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center text-white p-6 text-center select-none">
                      <span className="text-6xl font-black tracking-tight mb-2">JM</span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-kivuBlue">John Moka</span>
                      <span className="text-[10px] text-gray-400 mt-1 opacity-75">Bukavu, DRC</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
