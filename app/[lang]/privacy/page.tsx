"use client";

import { useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ShieldCheck, Cookie, KeyRound, Lock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  const locale = useLocale();

  const content = {
    fr: {
      title: "Politique de Confidentialité & Cookies",
      subtitle: "Dernière mise à jour : 12 juin 2026. Cette page détaille comment vos informations sont collectées, utilisées et protégées.",
      backHome: "Retour à l'accueil",
      sections: [
        {
          title: "1. Collecte de Données",
          icon: ShieldCheck,
          text: "Nous attachons une grande importance à la protection de vos données. Ce site n'enregistre aucune donnée utilisateur à des fins commerciales. Si vous utilisez le formulaire de contact, les informations fournies (Nom, Email, Message) sont uniquement utilisées pour répondre à vos messages et ne sont jamais vendues ou partagées avec des tiers."
        },
        {
          title: "2. Gestion des Cookies",
          icon: Cookie,
          text: "Ce site utilise uniquement des cookies techniques essentiels pour retenir vos préférences de navigation (telles que le choix de la langue). Aucun cookie de ciblage publicitaire ou traceur tiers intrusif n'est installé sans votre accord préalable."
        },
        {
          title: "3. Vos Droits (RGPD)",
          icon: KeyRound,
          text: "Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données personnelles. Vous pouvez exercer ce droit à tout moment en contactant John Moka via les e-mails professionnels fournis en bas de page."
        },
        {
          title: "4. Sécurité & Liens externes",
          icon: Lock,
          text: "Nous mettons en œuvre des mesures de sécurité rigoureuses pour protéger vos communications (protocole HTTPS sécurisé). Le site contient des liens vers des plateformes externes (GitHub, LinkedIn) qui disposent de leurs propres politiques de confidentialité."
        }
      ]
    },
    en: {
      title: "Privacy Policy & Cookies",
      subtitle: "Last updated: June 12, 2026. This page details how your information is collected, used, and protected.",
      backHome: "Back to Home",
      sections: [
        {
          title: "1. Data Collection",
          icon: ShieldCheck,
          text: "We value your privacy. This website does not store or process user data for commercial purposes. When you use the contact form, the information you provide (Name, Email, Message) is strictly used to reply to your inquiry and is never shared or sold to third parties."
        },
        {
          title: "2. Cookie Management",
          icon: Cookie,
          text: "This website only uses essential session cookies to remember your browsing preferences (such as language selection). No advertising or intrusive third-party tracking cookies are installed without your prior consent."
        },
        {
          title: "3. Your Rights (GDPR)",
          icon: KeyRound,
          text: "In accordance with General Data Protection Regulation (GDPR) standards, you hold the right to access, rectify, delete, or object to the processing of your personal data. You can exercise these rights at any time by contacting John Moka via the professional email addresses below."
        },
        {
          title: "4. Security & External Links",
          icon: Lock,
          text: "We enforce strict security protocols (HTTPS encryption) to ensure your message delivery is protected. This site contains links to external platforms (such as GitHub and LinkedIn) which maintain their own independent privacy policies."
        }
      ]
    },
    sw: {
      title: "Sera ya Faragha na Vidakuzi",
      subtitle: "Ilisasishwa mwisho: Juni 12, 2026. Ukurasa huu unaeleza jinsi maelezo yako yanavyokusanywa, kutumiwa na kulindwa.",
      backHome: "Rudi Nyumbani",
      sections: [
        {
          title: "1. Ukusanyaji wa Data",
          icon: ShieldCheck,
          text: "Tunalinda faragha yako kwa umakini mkubwa. Tovuti hii haihifadhi data ya mtumiaji kwa madhumuni ya kibiashara. Unapotumia fomu ya mawasiliano, maelezo unayotoa (Jina, Barua Pepe, Ujumbe) yanatumiwa tu kujibu ombi lako na hayashirikiwi wala kuuzwa kwa watu wengine."
        },
        {
          title: "2. Usimamizi wa Vidakuzi",
          icon: Cookie,
          text: "Tovuti hii inatumia tu vidakuzi vya lazima ili kukumbuka mapendeleo yako ya kuvinjari (kama vile kuchagua lugha). Hakuna vidakuzi vya matangazo au vya ufuatiliaji vinavyowekwa bila idhini yako."
        },
        {
          title: "3. Haki Zako (GDPR)",
          icon: KeyRound,
          text: "Kulingana na viwango vya Ulinzi wa Data (GDPR), una haki ya kufikia, kusahihisha, kufuta, au kupinga matumizi ya data yako ya kibinafsi. Unaweza kutumia haki hizi wakati wowote kwa kuwasiliana na John Moka kupitia barua pepe iliyotolewa chini ya ukurasa."
        },
        {
          title: "4. Usalama na Viungo vya Nje",
          icon: Lock,
          text: "Tunatumia itifaki thabiti za usalama (HTTPS) ili kulinda mawasiliano yako. Tovuti hii ina viungo vya mitandao ya kijamii (kama vile GitHub na LinkedIn) ambayo yana sera zao huru za faragha."
        }
      ]
    }
  };

  const activeContent = content[locale as "fr" | "en" | "sw"] || content.fr;

  return (
    <>
      <Header currentLocale={locale} />
      
      <main className="min-h-screen pt-28 pb-20 bg-gray-50 dark:bg-[#0f172a] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <div className="mb-8">
            <Link href={`/${locale}`} passHref legacyBehavior>
              <motion.a
                whileHover={{ x: -4 }}
                className="inline-flex items-center space-x-2 text-sm font-semibold text-kivuBlue hover:text-blue-500 cursor-pointer transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>{activeContent.backHome}</span>
              </motion.a>
            </Link>
          </div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
              {activeContent.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
              {activeContent.subtitle}
            </p>
            <div className="h-1 w-20 bg-kivuBlue rounded-full mt-6" />
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-8">
            {activeContent.sections.map((section, idx) => {
              const IconComponent = section.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800/80 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-kivuBlue/10 dark:bg-kivuBlue/5 text-kivuBlue rounded-xl">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed pl-1">
                    {section.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
