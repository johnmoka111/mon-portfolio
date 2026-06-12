"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Sun, Moon, Compass, Code2, Users, Image as ImageIcon, Mail, FolderGit2 } from "lucide-react";

interface HeaderProps {
  currentLocale: string;
}

export default function Header({ currentLocale }: HeaderProps) {
  const t = useTranslations("nav");
  const router = useRouter();
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("about");
  const [hideBottomNav, setHideBottomNav] = useState(false);
  const isHome = pathname === `/${currentLocale}` || pathname === `/${currentLocale}/` || pathname === "/";

  useEffect(() => {
    setMounted(true);
    const docClass = document.documentElement.classList;
    setIsDark(docClass.contains("dark"));

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section via scroll position
      const sections = ["about", "skills", "projects", "leadership", "gallery", "contact"];
      for (const sec of [...sections].reverse()) {
        const el = document.getElementById(sec);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveNav(sec);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Hide mobile bottom nav when typing
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
        setHideBottomNav(true);
      }
    };
    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
        setHideBottomNav(false);
      }
    };

    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusOut);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const changeLocale = (newLocale: string) => {
    if (newLocale === currentLocale) return;
    try {
      localStorage.setItem("locale", newLocale);
    } catch {
      // ignore
    }
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.push(newPath + hash);
  };

  const navItems = [
    { key: "about",      href: "#about",      Icon: Compass  },
    { key: "skills",     href: "#skills",     Icon: Code2    },
    { key: "projects",   href: "#projects",   Icon: FolderGit2 },
    { key: "leadership", href: "#leadership", Icon: Users    },
    { key: "gallery",    href: "#gallery",    Icon: ImageIcon },
    { key: "contact",    href: "#contact",    Icon: Mail     },
  ];

  const locales = [
    { code: "fr", flag: "🇫🇷" },
    { code: "en", flag: "🇬🇧" },
    { code: "sw", flag: "🇨🇩" },
  ];

  return (
    <>
      {/* ─── Top Header ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-gray-200/80 dark:border-slate-800/80 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo — text only, no icon */}
            <a
              href={isHome ? "#" : `/${currentLocale}`}
              className="text-xl font-black tracking-tight text-gray-900 dark:text-white"
            >
              John<span className="text-kivuBlue">.</span>Moka
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map(({ key, href }) => (
                <a
                  key={key}
                  href={isHome ? href : `/${currentLocale}${href}`}
                  className="text-sm font-medium text-gray-600 hover:text-kivuBlue dark:text-gray-300 dark:hover:text-kivuBlue transition-colors duration-200"
                >
                  {t(key)}
                </a>
              ))}
            </nav>

            {/* Desktop Controls */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Locale */}
              <div className="flex space-x-1 bg-gray-100 dark:bg-slate-800 p-1 rounded-full border border-gray-200 dark:border-slate-700">
                {locales.map((loc) => (
                  <button
                    key={loc.code}
                    onClick={() => changeLocale(loc.code)}
                    className={`text-base px-2.5 py-0.5 rounded-full transition-all duration-200 ${
                      currentLocale === loc.code
                        ? "bg-white dark:bg-slate-700 shadow-sm scale-110"
                        : "opacity-50 hover:opacity-90"
                    }`}
                    title={loc.code.toUpperCase()}
                  >
                    {loc.flag}
                  </button>
                ))}
              </div>
              {/* Theme */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {mounted && (isDark
                  ? <Sun className="h-4.5 w-4.5 text-kivuBlue" />
                  : <Moon className="h-4.5 w-4.5 text-kivuBlue" />
                )}
              </button>
            </div>

            {/* Mobile header right controls */}
            <div className="flex items-center space-x-2 md:hidden">
              {/* Locale pills */}
              <div className="flex space-x-0.5 bg-gray-100 dark:bg-slate-800 p-0.5 rounded-full border border-gray-200 dark:border-slate-700">
                {locales.map((loc) => (
                  <button
                    key={loc.code}
                    onClick={() => changeLocale(loc.code)}
                    className={`text-[10px] font-extrabold px-2 py-1 rounded-full transition-all ${
                      currentLocale === loc.code
                        ? "bg-white dark:bg-slate-700 text-kivuBlue shadow-sm"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {loc.code === "sw" ? "CD" : loc.code.toUpperCase()}
                  </button>
                ))}
              </div>
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-full bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
                aria-label="Toggle theme"
              >
                {mounted && (isDark
                  ? <Sun className="h-4 w-4 text-kivuBlue" />
                  : <Moon className="h-4 w-4 text-kivuBlue" />
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ─── Mobile Bottom Navigation ─── */}
      {!hideBottomNav && (
        <nav
          aria-label="Mobile navigation"
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          {/* Glass capsule container */}
          <div className="mx-4 mb-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border border-gray-200/50 dark:border-slate-800/50 rounded-full shadow-xl px-3 py-2 flex items-center justify-around">
            {navItems.map(({ key, href, Icon }) => {
              const isActive = activeNav === key;
              return (
                <a
                  key={key}
                  href={isHome ? href : `/${currentLocale}${href}`}
                  onClick={() => setActiveNav(key)}
                  className="relative flex flex-col items-center justify-center flex-1 py-1 group"
                  aria-current={isActive ? "page" : undefined}
                >
                  {/* Icon */}
                  <span className="relative z-10 flex items-center justify-center">
                    <Icon
                      className={`h-5 w-5 transition-all duration-300 ${
                        isActive
                          ? "text-kivuBlue dark:text-blue-400 scale-110"
                          : "text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                      }`}
                    />
                  </span>

                  {/* Label */}
                  <span
                    className={`relative z-10 text-[8px] font-extrabold mt-1.5 uppercase tracking-wider transition-colors duration-300 ${
                      isActive
                        ? "text-kivuBlue dark:text-blue-400"
                        : "text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                    }`}
                  >
                    {t(key)}
                  </span>

                  {/* Active Indicator Dot */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavDot"
                      className="absolute -bottom-1 w-1.5 h-1.5 bg-kivuBlue dark:bg-blue-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </>
  );
}
