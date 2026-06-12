"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Briefcase, Users, Trophy, ExternalLink, LucideIcon } from "lucide-react";

interface LeadershipCard {
  key: string;
  icon: LucideIcon;
  colorClass: string;
  badgeColor: string;
  link?: string;
}

export default function Leadership() {
  const t = useTranslations("leadership");

  const cards: LeadershipCard[] = [
    {
      key: "tal",
      icon: Briefcase,
      colorClass: "text-kivuBlue bg-kivuBlue/10 dark:bg-kivuBlue/20",
      badgeColor: "bg-kivuBlue/10 text-kivuBlue dark:bg-kivuBlue/20 dark:text-blue-300",
      link: "https://github.com/johnmoka111",
    },
    {
      key: "gdsc",
      icon: Users,
      colorClass: "text-kivuBlue bg-kivuBlue/10 dark:bg-kivuBlue/20",
      badgeColor: "bg-kivuBlue/10 text-kivuBlue dark:bg-kivuBlue/20 dark:text-blue-300",
      link: "https://github.com/johnmoka111",
    },
    {
      key: "innovate",
      icon: Trophy,
      colorClass: "text-kivuBlue bg-kivuBlue/10 dark:bg-kivuBlue/20",
      badgeColor: "bg-kivuBlue/10 text-kivuBlue dark:bg-kivuBlue/20 dark:text-blue-300",
      link: "https://github.com/johnmoka111",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 85,
        damping: 15,
      },
    },
  };

  return (
    <section id="leadership" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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

        {/* Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card) => {
            const IconComponent = card.icon;

            return (
              <motion.div
                key={card.key}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                className="flex flex-col bg-gray-50 dark:bg-slate-800/50 border border-gray-150 dark:border-slate-700/60 p-8 rounded-3xl shadow-md hover:shadow-2xl dark:hover:shadow-black/35 hover:border-kivuBlue dark:hover:border-kivuBlue transition-all duration-300 relative overflow-hidden group"
              >
                {/* Decorative absolute element */}
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-kivuBlue/5 rounded-full blur-xl group-hover:scale-150 transition-all duration-500" />

                {/* Card Icon */}
                <div className={`p-4 rounded-2xl w-fit ${card.colorClass} mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-7 w-7" />
                </div>

                {/* Role and Organization */}
                <span className={`inline-block px-3.5 py-1 text-xs font-bold rounded-full w-fit mb-4 ${card.badgeColor}`}>
                  {t(`cards.${card.key}.role`)}
                </span>

                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">
                  {t(`cards.${card.key}.org`)}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal flex-grow">
                  {t(`cards.${card.key}.desc`)}
                </p>

                {/* Bottom interactive link */}
                {card.link && (
                  <div className="mt-6 pt-4 border-t border-gray-200/50 dark:border-slate-700/50 flex items-center justify-between text-xs font-bold text-kivuBlue dark:text-white group-hover:underline cursor-pointer">
                    <span>En savoir plus</span>
                    <ExternalLink className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
