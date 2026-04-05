import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";

const slides = [
  {
    id: 1,
    eyebrow: "Arliven Medizyne Pvt Ltd",
    title: "Empowering Global & Domestic\nHealthcare Solutions",
    image: "transport-mix1-new.jpg",
  },
  {
    id: 2,
    eyebrow: "Arliven Medizyne Pvt Ltd",
    title: "Domestic Pharmaceutical\nSupply",
    image: "transport-mix2.png",
  },
  {
    id: 3,
    eyebrow: "Arliven Medizyne Pvt Ltd",
    title: "International Pharmaceutical\nMerchant Export Solutions",
    image: "hero-slide3-export.png",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (i: number) => { setCurrent(i); resetTimer(); };
  const slide = slides[current];

  return (
    <>
      {/* HERO — starts below the header bar */}
      <section className="relative w-full overflow-hidden mt-20" style={{ height: "72vh", minHeight: "480px" }}>

        {/* Background Images */}
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/${slide.image})` }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/25 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 z-10" />

        {/* ONLY: eyebrow + heading */}
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <div className="max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current + "-text"}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                >
                  {/* Eyebrow — company name in logo blue */}
                  <motion.p
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-sm font-semibold tracking-wider text-[#2F80ED] mb-3"
                  >
                    {slide.eyebrow}
                  </motion.p>

                  {/* Heading — medium weight, comfortable size */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl lg:text-2xl font-medium text-white leading-[1.2] whitespace-pre-line"
                  >
                    {slide.title}
                  </motion.h1>

                  {/* Blue accent line */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "64px" }}
                    transition={{ duration: 0.55, delay: 0.4 }}
                    className="h-1 bg-[#2F80ED] mt-6"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-7 left-0 right-0 z-30">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-500 rounded-full ${
                  i === current ? "w-10 h-2 bg-[#2F80ED]" : "w-3 h-3 bg-white/35 hover:bg-white/60"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
            <span className="ml-3 text-white/40 text-xs font-mono">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-7 right-8 z-30 text-white/40 hidden md:block"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Strip 1 — white principle quote */}
      <section className="bg-white py-10 border-b border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <p className="text-base text-gray-500 mb-2">
            We source, document and deliver pharmaceutical products based on the
          </p>
          <p className="text-xl lg:text-2xl font-bold text-gray-900 tracking-tight">
            "QUALITY-FIRST PRINCIPLE."
          </p>
        </motion.div>
      </section>

      {/* Strip 2 — grey CTA */}
      <section className="py-7 bg-[#EEF4FF] border-b border-[#2F80ED]/15">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-base font-bold text-[#1D1D1F] tracking-widest uppercase">
            Need More Information?
          </p>
          <Link
            href="/contact"
            className="px-7 py-2.5 bg-[#2F80ED] text-white text-sm font-bold rounded-xl hover:bg-blue-600 transition-colors duration-200 shadow-md"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </>
  );
}
