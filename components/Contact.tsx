"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Facebook,
  Linkedin,
  Twitter,
  Github,
  Pin,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export default function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();

  const interestOptions = {
    fr: {
      label: "Quel projet ou service vous intéresse ?",
      placeholderSelect: "Sélectionnez un domaine...",
      specifyPlaceholder: "Veuillez préciser votre besoin...",
      options: [
        { value: "creation_web", label: "Création de site web" },
        { value: "app_gestion", label: "Développement d'application de gestion" },
        { value: "app_mobile", label: "Application mobile" },
        { value: "maintenance", label: "Maintenance" },
        { value: "decodage", label: "Décodage smartphone" },
        { value: "installation", label: "Installation système" },
        { value: "autre", label: "Autre (à préciser)" }
      ]
    },
    en: {
      label: "What project or service are you interested in?",
      placeholderSelect: "Select an option...",
      specifyPlaceholder: "Please specify your need...",
      options: [
        { value: "creation_web", label: "Website creation" },
        { value: "app_gestion", label: "Management app development" },
        { value: "app_mobile", label: "Mobile app" },
        { value: "maintenance", label: "Maintenance" },
        { value: "decodage", label: "Smartphone decoding" },
        { value: "installation", label: "System installation" },
        { value: "autre", label: "Other (please specify)" }
      ]
    },
    sw: {
      label: "Je, ni mradi au huduma gani unayopendelea?",
      placeholderSelect: "Chagua chaguo...",
      specifyPlaceholder: "Tafadhali fafanua mahitaji yako...",
      options: [
        { value: "creation_web", label: "Uundaji wa tovuti" },
        { value: "app_gestion", label: "Uundaji wa programu ya usimamizi" },
        { value: "app_mobile", label: "Programu ya simu" },
        { value: "maintenance", label: "Matengenezo" },
        { value: "decodage", label: "Kufungua simu (decoding)" },
        { value: "installation", label: "Ufungaji wa mfumo" },
        { value: "autre", label: "Nyingine (fafanua)" }
      ]
    }
  };

  const activeIntProps = interestOptions[locale as "fr" | "en" | "sw"] || interestOptions.fr;

  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    interest: "",
    customInterest: "",
    message: "" 
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Formspree submission (using John Moka's professional email route or default placeholder)
      // Users can swap 'xkdnyyvq' with their actual Formspree form ID
      const response = await fetch("https://formspree.io/f/xkdnyyvq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          interest: formData.interest === "autre" ? `Autre: ${formData.customInterest}` : formData.interest,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", interest: "", customInterest: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const socials = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/243981430687",
      colorClass: "hover:bg-green-500 hover:text-white dark:hover:bg-green-600 border-green-200 dark:border-green-900/30 text-green-600 dark:text-green-400 bg-green-50/50 dark:bg-green-950/10",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:johnmoka2024@gmail.com",
      colorClass: "hover:bg-blue-600 hover:text-white dark:hover:bg-blue-700 border-blue-200 dark:border-blue-900/30 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/10",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/johnmoka111",
      colorClass: "hover:bg-gray-800 hover:text-white dark:hover:bg-gray-700 border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-300 bg-gray-50/50 dark:bg-gray-900/20",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/tal-communities-b86055416",
      colorClass: "hover:bg-blue-700 hover:text-white dark:hover:bg-blue-800 border-blue-200 dark:border-blue-900/30 text-blue-750 dark:text-blue-300 bg-blue-50/50 dark:bg-blue-950/10",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61575994382181",
      colorClass: "hover:bg-blue-600 hover:text-white dark:hover:bg-blue-700 border-blue-250 dark:border-blue-900/30 text-blue-650 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/10",
    },
    {
      name: "Twitter / X",
      icon: Twitter,
      href: "https://x.com/JohnMoka2024",
      colorClass: "hover:bg-black hover:text-white dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-900/20",
    },
    {
      name: "Pinterest",
      icon: Pin,
      href: "https://pin.it/2a9EyaLEN",
      colorClass: "hover:bg-red-600 hover:text-white dark:hover:bg-red-700 border-red-200 dark:border-red-900/30 text-red-600 dark:text-red-400 bg-red-50/50 dark:bg-red-950/10",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative">
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

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800/80 p-8 sm:p-10 rounded-3xl shadow-lg"
          >
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Coordonnées
              </h3>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-kivuBlue/10 dark:bg-kivuBlue/20 rounded-xl text-kivuBlue dark:text-blue-300">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                      {t("info.addressTitle")}
                    </h4>
                    <p className="mt-1 text-base font-semibold text-gray-800 dark:text-gray-200">
                      {t("info.addressValue")}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-kivuBlue/10 rounded-xl text-kivuBlue">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                      {t("info.emailTitle")}
                    </h4>
                    <p className="mt-1 text-base font-semibold text-gray-800 dark:text-gray-200">
                      <a href="mailto:johnmoka2024@gmail.com" className="hover:underline hover:text-kivuBlue transition-colors">
                        johnmoka2024@gmail.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-450 mt-0.5">
                      <a href="mailto:tal.communities@gmail.com" className="hover:underline">
                        tal.communities@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-500/10 dark:bg-green-500/20 rounded-xl text-green-600 dark:text-green-400">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                      {t("info.whatsappTitle")}
                    </h4>
                    <div className="mt-1 space-y-1">
                      <p className="text-base font-semibold text-gray-800 dark:text-gray-200">
                        <a href="https://wa.me/243981430687" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-green-500 transition-colors">
                          +243 981 430 687
                        </a>
                      </p>
                      <p className="text-base font-semibold text-gray-800 dark:text-gray-200">
                        <a href="https://wa.me/243999164465" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-green-500 transition-colors">
                          +243 999 164 465
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="mt-12 pt-8 border-t border-gray-150 dark:border-slate-800">
              <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
                Retrouvez-moi sur les réseaux
              </h4>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full border border-gray-200 dark:border-slate-800 transition-all duration-300 hover:scale-110 shadow-sm ${social.colorClass}`}
                      title={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800/80 p-8 sm:p-10 rounded-3xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Status Alert Messages */}
              {status === "success" && (
                <div className="flex items-center space-x-2 bg-kivuBlue/10 border border-kivuBlue/35 p-4 rounded-xl text-kivuBlue dark:text-blue-300">
                  <CheckCircle className="h-5 w-5 shrink-0" />
                  <p className="text-sm font-semibold">{t("form.success")}</p>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center space-x-2 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 p-4 rounded-xl text-rose-800 dark:text-rose-350">
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  <p className="text-sm font-semibold">{t("form.error")}</p>
                </div>
              )}

              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-gray-700 dark:text-gray-300">
                  {t("form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-950 border border-gray-250 dark:border-slate-850 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-kivuBlue dark:focus:ring-kivuBlue disabled:opacity-50 transition-all"
                  placeholder="John Moka"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-gray-700 dark:text-gray-300">
                  {t("form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-950 border border-gray-250 dark:border-slate-850 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-kivuBlue dark:focus:ring-kivuBlue disabled:opacity-50 transition-all"
                  placeholder="johnmoka@example.com"
                />
              </div>

              {/* Interest / Project Domain */}
              <div className="space-y-2">
                <label htmlFor="interest" className="text-sm font-bold text-gray-700 dark:text-gray-300">
                  {activeIntProps.label}
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-950 border border-gray-250 dark:border-slate-850 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-kivuBlue dark:focus:ring-kivuBlue disabled:opacity-50 transition-all cursor-pointer"
                >
                  <option value="" disabled hidden>
                    {activeIntProps.placeholderSelect}
                  </option>
                  {activeIntProps.options.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Specify Custom Interest */}
              {formData.interest === "autre" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-2 overflow-hidden"
                >
                  <input
                    type="text"
                    name="customInterest"
                    required
                    value={formData.customInterest}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-950 border border-gray-250 dark:border-slate-850 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-kivuBlue dark:focus:ring-kivuBlue disabled:opacity-50 transition-all"
                    placeholder={activeIntProps.specifyPlaceholder}
                  />
                </motion.div>
              )}

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-700 dark:text-gray-300">
                  {t("form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-950 border border-gray-250 dark:border-slate-850 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-kivuBlue dark:focus:ring-kivuBlue disabled:opacity-50 transition-all resize-none"
                  placeholder="Votre message ici..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-kivuBlue hover:bg-slate-900 dark:hover:bg-slate-800 disabled:bg-gray-400 dark:disabled:bg-slate-850 text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] disabled:scale-100 disabled:hover:scale-100"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2.5 animate-spin" />
                    <span>{t("form.sending")}</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2.5" />
                    <span>{t("form.send")}</span>
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
