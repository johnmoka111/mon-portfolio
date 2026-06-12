"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  key: string;
}

export default function Gallery() {
  const t = useTranslations("gallery");
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const images: GalleryImage[] = [
    { src: "/working.jpg", key: "working" },
    { src: "/service design.png", key: "serviceDesign" },
    { src: "/logo entreprise TAL.jpg", key: "talLogo" },
    { src: "/conception.png", key: "conception" },
    { src: "/portrait.png", key: "portrait" },
    { src: "/relax.jpg", key: "relax" },
  ];

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleSelect = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 260, damping: 26 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 150 : -150,
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 260, damping: 26 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
            className="text-lg text-gray-650 dark:text-gray-400"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Panel: Large Image Frame */}
          <div className="lg:col-span-7 relative overflow-hidden aspect-video lg:aspect-auto lg:h-[480px] w-full rounded-2xl bg-slate-950 border border-gray-200 dark:border-slate-800 shadow-md flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.img
                key={activeIndex}
                src={images[activeIndex].src}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full h-full object-cover object-center select-none"
                alt={t(`items.${images[activeIndex].key}.title`)}
              />
            </AnimatePresence>
            
            {/* Absolute badge for index count */}
            <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[10px] font-black tracking-widest text-white select-none">
              {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </div>
          </div>

          {/* Right Panel: Caption Details & Thumbnail controls */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            
            {/* Caption text */}
            <div className="space-y-4">
              <div className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-kivuBlue">
                {"John Moka's Portfolio"}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
                    {t(`items.${images[activeIndex].key}.title`)}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-650 dark:text-gray-400 font-normal leading-relaxed">
                    {t(`items.${images[activeIndex].key}.desc`)}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls Row and Thumbnails */}
            <div className="mt-8 space-y-6 pb-20 lg:pb-0">
              
              {/* Navigation Arrows & Bar */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-lg border border-gray-250 dark:border-slate-800 text-gray-750 dark:text-white bg-slate-50 dark:bg-slate-850 hover:bg-kivuBlue hover:text-white hover:border-kivuBlue transition-all duration-200"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Elegant active slide dots/pills */}
                <div className="flex justify-center items-center space-x-2 flex-1">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeIndex === idx
                          ? "w-6 bg-kivuBlue"
                          : "w-2 bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:bg-slate-700"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-lg border border-gray-250 dark:border-slate-800 text-gray-750 dark:text-white bg-slate-50 dark:bg-slate-850 hover:bg-kivuBlue hover:text-white hover:border-kivuBlue transition-all duration-200"
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Thumbnails Grid */}
              <div className="grid grid-cols-6 gap-2 pt-2">
                {images.map((img, idx) => (
                  <button
                    key={img.key}
                    onClick={() => handleSelect(idx)}
                    className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${
                      activeIndex === idx
                        ? "border-kivuBlue shadow-sm"
                        : "border-gray-200 dark:border-slate-800 opacity-60 hover:opacity-100"
                    }`}
                    aria-label={`Select photo ${idx + 1}`}
                  >
                    <img
                      src={img.src}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
