"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface SkillItem {
  key: string;
  svgIcon: React.ReactNode;
}

// Real SVG tech logos as inline components
const FlutterIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zm.159 11.786L9.1 17.16l5.373 5.372L21.7 15.3l-7.227-3.514z"/>
  </svg>
);

const DartIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789L0 14.211V9.948l4.105-5.843zM.97 13.948l9.868 9.868h8.957v-4.27H23.03V10.04L13.978 1.02a2.069 2.069 0 0 0-1-.526 2.06 2.06 0 0 0-.978.214C9.521 1.977 4.5 4.47 4.5 4.47L.97 9.948v4z"/>
  </svg>
);

const DjangoIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 0 0-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.143zM21.314 6.06v11.666c0 4.027-.3 5.967-1.172 7.637-.815 1.61-1.886 2.624-4.105 3.745l-3.66-1.73c2.22-1.046 3.29-1.986 3.95-3.418.668-1.459.89-3.196.89-7.153V6.061h4.097zm-4.077-5.97h4.077V4.12h-4.077V.09z"/>
  </svg>
);

const LaravelIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M23.642 5.43a.364.364 0 0 1 .014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 0 1-.188.326L9.93 23.949a.316.316 0 0 1-.066.027.29.29 0 0 1-.076.024.348.348 0 0 1-.156-.025.309.309 0 0 1-.064-.026L.534 18.755a.375.375 0 0 1-.189-.326V3.644a.366.366 0 0 1 .014-.1.358.358 0 0 1 .037-.092l.013-.02a.379.379 0 0 1 .05-.063l.014-.012a.375.375 0 0 1 .064-.038L5.28.094a.378.378 0 0 1 .378 0l4.274 2.468a.379.379 0 0 1 .189.326v4.933l3.94-2.27v-4.92a.378.378 0 0 1 .189-.326L18.523.094a.378.378 0 0 1 .378 0l4.74 2.735a.382.382 0 0 1 .065.038l.013.012a.376.376 0 0 1 .05.063l.013.02a.354.354 0 0 1 .038.092zm-.74 5.11V6.255l-1.655.955-2.286 1.32v4.285zm-4.323 7.387V13.64l-2.248 1.266-6.419 3.649v4.356zM1.12 4.219v14.214l8.567 4.938v-4.356l-4.478-2.514-.013-.009-.013-.009c-.018-.013-.036-.026-.052-.041l-.012-.013a.378.378 0 0 1-.039-.058l-.009-.016a.337.337 0 0 1-.028-.072l-.008-.018v-.015a.366.366 0 0 1-.008-.082V8.73L2.92 7.413zm4.6-3.424L1.717 3.424l3.995 2.308 3.995-2.308zm1.92 11.428 2.287-1.319V6.255l-1.656.956-2.286 1.32v4.284zm8.526-9.119L11.16 5.42l3.994 2.308 3.994-2.308zm-.188 4.712-2.287-1.32-1.656-.955v4.285l2.287 1.32 1.656.955zm-8.715 3.987 5.843-3.292 2.917-1.643-3.986-2.302-4.774 2.754-3.76 2.17z"/>
  </svg>
);

const JasprIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789L0 14.211V9.948l4.105-5.843z"/>
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.02s-1.354-3.02-3.019-3.02h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.587v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.02s1.354 3.02 3.019 3.02h3.117V1.471zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.587v8.98zM8.148 10.97c-1.665 0-3.019 1.355-3.019 3.02s1.354 3.019 3.019 3.019h3.117v-6.04zm3.117 4.49h.001c0 2.476 2.014 4.49 4.49 4.49 2.476 0 4.49-2.014 4.49-4.49s-2.014-4.49-4.49-4.49c-2.476 0-4.49 2.014-4.49 4.49z"/>
  </svg>
);

const XdIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M21.686 0H2.314C1.045 0 0 1.045 0 2.314v19.371C0 22.955 1.045 24 2.314 24h19.371c1.269 0 2.315-1.045 2.315-2.315V2.314C24 1.045 22.955 0 21.686 0zm-6.97 16.657l-2.2-3.93-2.336 3.93H7.757l3.613-6.025-3.474-5.984h2.52l2.056 3.74 2.111-3.74h2.357l-3.485 5.92 3.68 6.09h-2.42z"/>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.1zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
  </svg>
);

export default function Skills() {
  const t = useTranslations("skills");

  const skillGroups: { label: string; items: SkillItem[] }[] = [
    {
      label: t("groupMobile"),
      items: [
        { key: "flutter", svgIcon: <FlutterIcon /> },
        { key: "dart", svgIcon: <DartIcon /> },
      ],
    },
    {
      label: t("groupWeb"),
      items: [
        { key: "react", svgIcon: <ReactIcon /> },
        { key: "django", svgIcon: <DjangoIcon /> },
        { key: "laravel", svgIcon: <LaravelIcon /> },
        { key: "jaspr", svgIcon: <JasprIcon /> },
      ],
    },
    {
      label: t("groupTools"),
      items: [
        { key: "figma", svgIcon: <FigmaIcon /> },
        { key: "xd", svgIcon: <XdIcon /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-gray-500 dark:text-gray-500 leading-relaxed mt-4"
          >
            {t("subtitleTwo")}
          </motion.p>
        </div>

        {/* Skill Groups */}
        <div className="space-y-12">
          {skillGroups.map((group, gIdx) => (
            <div key={gIdx}>
              {/* Group label */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-3 mb-6"
              >
                <div className="h-px flex-1 bg-gray-200 dark:bg-slate-800" />
                <span className="text-xs font-black uppercase tracking-widest text-kivuBlue px-3 py-1 border border-kivuBlue/30 rounded-full">
                  {group.label}
                </span>
                <div className="h-px flex-1 bg-gray-200 dark:bg-slate-800" />
              </motion.div>

              {/* Skills grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {group.items.map((skill, sIdx) => (
                  <motion.div
                    key={skill.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ type: "spring" as const, stiffness: 80, damping: 12, delay: sIdx * 0.05 }}
                    whileHover={{ scale: 1.05, translateY: -4 }}
                    className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-kivuBlue/5 dark:hover:shadow-kivuBlue/10 hover:border-kivuBlue dark:hover:border-kivuBlue transition-all duration-300 group flex items-center space-x-4 cursor-default"
                  >
                    {/* Icon Container */}
                    <div className="p-3 bg-gray-100 dark:bg-slate-800 rounded-xl text-kivuBlue group-hover:bg-kivuBlue group-hover:text-white transition-all duration-300 shrink-0">
                      {skill.svgIcon}
                    </div>
                    {/* Name */}
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-kivuBlue dark:group-hover:text-kivuBlue transition-colors duration-200 leading-tight">
                        {t(`list.${skill.key}`)}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
