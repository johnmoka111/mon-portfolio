"use client";

import { useTranslations, useLocale } from "next-intl";
import { ArrowUp, Code } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-100 dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 transition-colors duration-300 pt-12 pb-28 md:py-12 relative overflow-hidden">
      {/* Decorative light reflection */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-kivuBlue/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo Signature */}
          <div className="flex items-center space-x-2">
            <Code className="h-5 w-5 text-kivuBlue" />
            <span className="font-bold text-gray-800 dark:text-white">
              John Moka
            </span>
          </div>

          {/* Copyright Texts */}
          <div className="text-center md:text-left space-y-1">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("rights")}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              {t("designedBy")}
            </p>
            <div className="mt-1 text-xs text-gray-450 dark:text-gray-500 flex justify-center md:justify-start gap-4">
              <a 
                href={`/${locale}/privacy`} 
                className="hover:text-kivuBlue hover:underline transition-colors duration-200 font-medium"
              >
                {locale === "fr" ? "Confidentialité & Cookies" : locale === "sw" ? "Faragha na Vidakuzi" : "Privacy & Cookies"}
              </a>
            </div>
          </div>

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white hover:bg-gray-55 dark:bg-slate-900 dark:hover:bg-slate-800 border border-gray-200 dark:border-slate-800 text-kivuBlue dark:text-kivuBlue rounded-full shadow-md transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
