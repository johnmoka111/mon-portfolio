"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Github, Globe, Lock, Users, FolderGit2, ExternalLink } from "lucide-react";

interface Project {
  key: string;
  title: string;
  desc: string;
  objectives?: string;
  collaborators: string;
  visibility: "public" | "private";
  githubUrl: string;
  tech: string[];
  slogan?: string;
}

export default function Projects() {
  const locale = useLocale();

  const content = {
    fr: {
      title: "Projets Réalisés",
      subtitle: "Découvrez les solutions et systèmes d'information phares que j'ai conçus et développés.",
      collaboratorsLabel: "Collaboration :",
      visibilityLabel: "Dépôt :",
      viewCode: "Voir le code",
      objectivesLabel: "Objectifs du Projet",
      solo: "Réalisé individuellement (Solo)",
      public: "Public",
      private: "Privé",
      projects: [
        {
          key: "tal-news",
          title: "TAL Actus",
          desc: "Plateforme d'Information Professionnelle du Sud-Kivu. TAL Actus est une solution numérique de pointe dédiée à la collecte, au traitement et à la diffusion d'informations vérifiées. Conçue pour offrir une interface premium alliant performance technique et esthétique moderne, répondant aux standards élevés du journalisme numérique.",
          objectives: "Démocratiser l'accès à une information locale de qualité, offrir aux entreprises un canal de diffusion structuré et garantir une expérience fluide même sous connectivité limitée.",
          collaborators: "Réalisé individuellement (Solo)",
          visibility: "public",
          githubUrl: "https://github.com/johnmoka111/TAL-news",
          tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "next-intl"]
        },
        {
          key: "coacki",
          title: "COACKI V2",
          desc: "Plateforme numérique dédiée à la gestion de la production, de la traçabilité et de la valorisation du café Bourbon de haute qualité pour la Coopérative Agricole du Kivu au Sud-Kivu, RDC.",
          slogan: "« Le café est notre vie. »",
          collaborators: "Développé en collaboration avec Lucien Amani",
          visibility: "public",
          githubUrl: "https://github.com/johnmoka111/COACKI-V2",
          tech: ["React", "JavaScript", "Tailwind CSS", "Node.js", "REST API"]
        },
        {
          key: "amka",
          title: "AMKA Café (AmkaApp)",
          desc: "Système ERP de Gestion Intégré conçu sur mesure pour la coopérative agricole AMKA en République Démocratique du Congo (RDC). Ce logiciel gère l'ensemble de la chaîne de valeur du café, de la pesée des lots à l'exportation internationale.",
          objectives: "Assurer la gestion rigoureuse de la pesée, de la transformation, de la paie locale aux normes de la RDC et intégrer une comptabilité analytique conforme aux standards SYSCOHADA révisés.",
          collaborators: "Réalisé individuellement (Solo)",
          visibility: "public",
          githubUrl: "https://github.com/johnmoka111/AmkaApp",
          tech: [".NET Desktop", "C#", "WPF", "SQL Server", "SYSCOHADA"]
        },
        {
          key: "mediateque",
          title: "Médiathèque ECKA",
          desc: "Système de Gestion de Bibliothèque Électronique (E-Library). Une plateforme intégrée permettant la gestion physique et le stockage numérique sécurisé d'ouvrages littéraires et académiques.",
          collaborators: "Réalisé individuellement (Solo)",
          visibility: "public",
          githubUrl: "https://github.com/johnmoka111/mediateque-elibrary",
          tech: ["PHP Natif", "Architecture MVC", "MySQL", "CSS3", "JavaScript"]
        }
      ] as Project[]
    },
    en: {
      title: "Developed Projects",
      subtitle: "Explore the core software systems and information architectures I have designed and engineered.",
      collaboratorsLabel: "Collaboration:",
      visibilityLabel: "Repository:",
      viewCode: "View Code",
      objectivesLabel: "Project Objectives",
      solo: "Developed individually (Solo)",
      public: "Public",
      private: "Private",
      projects: [
        {
          key: "tal-news",
          title: "TAL Actus",
          desc: "Professional Information Platform of South Kivu. TAL Actus is a cutting-edge digital solution dedicated to gathering, processing, and distributing verified news. Built with a premium interface combining performance and modern aesthetics according to high journalism standards.",
          objectives: "Democratize access to quality local news, provide businesses with a structured broadcast channel, and ensure a fluid user experience even with low bandwidth.",
          collaborators: "Developed individually (Solo)",
          visibility: "public",
          githubUrl: "https://github.com/johnmoka111/TAL-news",
          tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "next-intl"]
        },
        {
          key: "coacki",
          title: "COACKI V2",
          desc: "Advanced digital platform dedicated to production management, traceability, and promotion of high-quality Bourbon coffee for the Kivu Agricultural Cooperative in South Kivu, DRC.",
          slogan: "\"Coffee is our life.\"",
          collaborators: "Developed in collaboration with Lucien Amani",
          visibility: "public",
          githubUrl: "https://github.com/johnmoka111/COACKI-V2",
          tech: ["React", "JavaScript", "Tailwind CSS", "Node.js", "REST API"]
        },
        {
          key: "amka",
          title: "AMKA Café (AmkaApp)",
          desc: "Integrated ERP Management System custom-built for the AMKA agricultural cooperative in the Democratic Republic of the Congo (DRC). This software runs the entire coffee supply chain from batch weighing to global export.",
          objectives: "Enable precise tracking of weighing, processing stages, local payroll compliant with DRC regulations, and analytical accounting following updated SYSCOHADA standards.",
          collaborators: "Developed individually (Solo)",
          visibility: "public",
          githubUrl: "https://github.com/johnmoka111/AmkaApp",
          tech: [".NET Desktop", "C#", "WPF", "SQL Server", "SYSCOHADA"]
        },
        {
          key: "mediateque",
          title: "ECKA Mediatheque",
          desc: "Electronic Library Management System (E-Library). An integrated platform ensuring physical inventory tracking and secure digital storage of academic and literary books.",
          collaborators: "Developed individually (Solo)",
          visibility: "public",
          githubUrl: "https://github.com/johnmoka111/mediateque-elibrary",
          tech: ["Native PHP", "MVC Architecture", "MySQL", "CSS3", "JavaScript"]
        }
      ] as Project[]
    },
    sw: {
      title: "Miradi Iliyotekelezwa",
      subtitle: "Gundua mifumo mikuu ya programu na miundo ya habari niliyounda na kuitengeneza.",
      collaboratorsLabel: "Ushirikiano:",
      visibilityLabel: "Hifadhi:",
      viewCode: "Tazama Code",
      objectivesLabel: "Malengo ya Mradi",
      solo: "Imefanywa peke yangu (Solo)",
      public: "Wazi (Public)",
      private: "Binafsi (Private)",
      projects: [
        {
          key: "tal-news",
          title: "TAL Actus",
          desc: "Jukwaa la Habari za Kitaalamu la Kivu Kusini. TAL Actus ni suluhisho la kisasa la kidijitali lililowekwa kwa ajili ya kukusanya, kusindika na kusambaza habari zilizothibitishwa. Imeundwa kwa kiolesura cha hali ya juu kinachochanganya utendaji na urembo wa kisasa.",
          objectives: "Kuwezesha kila mtu kupata habari bora za eneo hilo, kutoa njia iliyoratibiwa ya utangazaji kwa biashara, na kuhakikisha uzoefu mzuri hata kwenye mtandao hafifu.",
          collaborators: "Imefanywa peke yangu (Solo)",
          visibility: "public",
          githubUrl: "https://github.com/johnmoka111/TAL-news",
          tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "next-intl"]
        },
        {
          key: "coacki",
          title: "COACKI V2",
          desc: "Jukwaa la kidijitali lililowekwa kwa ajili ya usimamizi wa uzalishaji, ufuatiliaji, na utangazaji wa kahawa bora ya Bourbon kwa Ushirika wa Kilimo wa Kivu huko Kivu Kusini, DRC.",
          slogan: "\"Kahawa ni maisha yetu.\"",
          collaborators: "Imeundwa kwa ushirikiano na Lucien Amani",
          visibility: "public",
          githubUrl: "https://github.com/johnmoka111/COACKI-V2",
          tech: ["React", "JavaScript", "Tailwind CSS", "Node.js", "REST API"]
        },
        {
          key: "amka",
          title: "AMKA Café (AmkaApp)",
          desc: "Mfumo wa Usimamizi wa ERP ulioundwa maalum kwa ushirika wa kilimo wa AMKA katika Jamhuri ya Kidemokrasia ya Kongo (DRC). Programu hii inasimamia mnyororo mzima wa thamani ya kahawa kutoka kwa uzani hadi usafirishaji wa kimataifa.",
          objectives: "Kuhakikisha usimamizi sahihi wa uzani, usindikaji, malipo ya ndani kulingana na sheria za DRC, na uhasibu wa uchambuzi kulingana na viwango vipya vya SYSCOHADA.",
          collaborators: "Imefanywa peke yangu (Solo)",
          visibility: "public",
          githubUrl: "https://github.com/johnmoka111/AmkaApp",
          tech: [".NET Desktop", "C#", "WPF", "SQL Server", "SYSCOHADA"]
        },
        {
          key: "mediateque",
          title: "ECKA Mediatheque",
          desc: "Mfumo wa Usimamizi wa Maktaba ya Kielektroniki (E-Library). Jukwaa lililojumuishwa linalowezesha ufuatiliaji wa vitabu na uhifadhi salama wa kidijitali wa vitabu vya kitaaluma.",
          collaborators: "Imefanywa peke yangu (Solo)",
          visibility: "public",
          githubUrl: "https://github.com/johnmoka111/mediateque-elibrary",
          tech: ["PHP ya Asili", "Muundo wa MVC", "MySQL", "CSS3", "JavaScript"]
        }
      ] as Project[]
    }
  };

  const activeContent = content[locale as "fr" | "en" | "sw"] || content.fr;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative">
      {/* Dynamic Background Accents */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-kivuBlue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

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
            {activeContent.title}
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
            {activeContent.subtitle}
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
        >
          {activeContent.projects.map((project) => (
            <motion.div
              key={project.key}
              variants={cardVariants}
              className="group flex flex-col justify-between bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top border decoration */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-kivuBlue via-blue-500 to-indigo-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-kivuBlue/10 text-kivuBlue rounded-2xl group-hover:bg-kivuBlue group-hover:text-white transition-colors duration-300">
                    <FolderGit2 className="h-6 w-6" />
                  </div>
                  
                  {/* Repo Visibility status */}
                  <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold select-none border ${
                    project.visibility === "public"
                      ? "bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-900/30"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-650 dark:text-slate-400 border-slate-200 dark:border-slate-700"
                  }`}>
                    {project.visibility === "public" ? (
                      <>
                        <Globe className="h-3 w-3" />
                        <span>{activeContent.public}</span>
                      </>
                    ) : (
                      <>
                        <Lock className="h-3 w-3" />
                        <span>{activeContent.private}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Slogan (if present) */}
                {project.slogan && (
                  <p className="text-xs font-black tracking-widest text-kivuBlue uppercase mb-2">
                    {project.slogan}
                  </p>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-kivuBlue transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-650 dark:text-gray-400 leading-relaxed font-normal mb-5">
                  {project.desc}
                </p>

                {/* Project Objectives (if present) */}
                {project.objectives && (
                  <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-150/40 dark:border-slate-800/40">
                    <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1.5">
                      {activeContent.objectivesLabel}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-normal">
                      {project.objectives}
                    </p>
                  </div>
                )}

                {/* Meta details (Collaborators) */}
                <div className="flex items-center space-x-2 text-xs text-gray-450 dark:text-gray-500 mb-6">
                  <Users className="h-4 w-4 shrink-0 text-slate-400" />
                  <span>
                    <strong className="text-gray-600 dark:text-gray-400 font-semibold">{activeContent.collaboratorsLabel}</strong>{" "}
                    {project.collaborators}
                  </span>
                </div>
              </div>

              {/* Action and Tech stack footer */}
              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span 
                      key={t}
                      className="px-2.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-gray-600 dark:text-gray-300 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub link button */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-5 py-3 border border-gray-200 dark:border-slate-800 hover:border-kivuBlue dark:hover:border-kivuBlue bg-slate-50 hover:bg-kivuBlue text-gray-800 dark:text-gray-200 hover:text-white dark:hover:text-white font-bold rounded-2xl transition-all duration-300 text-sm shadow-sm"
                >
                  <Github className="h-4.5 w-4.5 mr-2" />
                  <span>{activeContent.viewCode}</span>
                  <ExternalLink className="h-3.5 w-3.5 ml-1.5 opacity-60" />
                </a>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
