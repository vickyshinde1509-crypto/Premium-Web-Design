import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";

const slides = [
  {
    id: 1,
    eyebrow: "ARLIVEN MEDIZYNE PVT LTD",
    title: "EMPOWERING\nGLOBAL HEALTH\nSOLUTIONS",
    subtitle: "Your trusted pharmaceutical merchant exporter from India — WHO-GMP certified products delivered to 20+ countries with precision and care.",
    cta: "View Products",
    ctaLink: "/products",
    cta2: "Export Inquiry",
    cta2Link: "/export",
    image: "pharma-hero-cinematic.png",
  },
  {
    id: 2,
    eyebrow: "AIR FREIGHT & PHARMA EXPORT",
    title: "TRUSTED\nPHARMA CARGO\nWORLDWIDE",
    subtitle: "Seamless air and sea freight for pharmaceutical products — ensuring cold chain integrity and regulatory compliance at every destination.",
    cta: "Export Services",
    ctaLink: "/export",
    cta2: "Contact Us",
    cta2Link: "/contact",
    image: "pharma-air-cargo.png",
  },
  {
    id: 3,
    eyebrow: "GLOBAL PORT OPERATIONS",
    title: "BRIDGING\nINDIAN PHARMA\nTO THE WORLD",
    subtitle: "From sea freight to port logistics — we deliver quality medicines to Asia, Africa, Middle East and beyond with complete documentation support.",
    cta: "Our Products",
    ctaLink: "/products",
    cta2: "About Us",
    cta2Link: "/about",
    image: "pharma-port-mix.png",
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

  const goTo = (i: number) => {
    setCurrent(i);
    resetTimer();
  };

  const slide = slides[current];

  return (
    <>
      {/* FULL-SCREEN CINEMATIC HERO */}
      <section className="relative w-full overflow-hidden" style={{ height: "100vh", minHeight: "680px" }}>

        {/* Background Images with smooth cross-fade */}
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

        {/* Gradient overlays — dark on left for text, image shows on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10" />

        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <div className="max-w-2xl pt-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current + "-text"}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  {/* Eyebrow */}
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-sm font-bold tracking-widest text-white/70 uppercase mb-5"
                  >
                    {slide.eyebrow}
                  </motion.p>

                  {/* Main heading */}
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.2 }}
                    className="text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] mb-7 whitespace-pre-line"
                  >
                    {slide.title}
                  </motion.h1>

                  {/* Accent line */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="h-1 bg-[#0071c5] mb-7"
                  />

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-lg text-white/80 leading-relaxed mb-10 max-w-lg"
                  >
                    {slide.subtitle}
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.65 }}
                    className="flex flex-wrap gap-4"
                  >
                    <Link
                      href={slide.ctaLink}
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0071c5] text-white font-bold text-base hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-900/30"
                    >
                      {slide.cta} <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                      href={slide.cta2Link}
                      className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/60 text-white font-bold text-base hover:bg-white/10 hover:border-white transition-all duration-200"
                    >
                      {slide.cta2}
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Slide indicators — bottom left */}
        <div className="absolute bottom-10 left-0 right-0 z-30">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center gap-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-500 rounded-full ${
                  i === current
                    ? "w-12 h-2 bg-[#0071c5]"
                    : "w-3 h-3 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
            <div className="ml-4 text-white/40 text-sm font-mono">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </div>
          </div>
        </div>

        {/* Scroll down cue */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 z-30 text-white/50 hidden md:block"
        >
          <ChevronDown className="w-7 h-7" />
        </motion.div>
      </section>

      {/* BELOW HERO STRIP 1 — white with bold principle */}
      <section className="bg-white py-10 border-b border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <p className="text-base text-gray-500 mb-2">
            We source, document and deliver pharmaceutical products based on the
          </p>
          <p className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
            "QUALITY-FIRST PRINCIPLE."
          </p>
        </motion.div>
      </section>

      {/* BELOW HERO STRIP 2 — grey CTA bar */}
      <section className="py-8" style={{ background: "#e8e8e8" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xl font-black text-gray-800 tracking-widest uppercase">
            Need More Information?
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-gray-900 text-white text-sm font-bold uppercase tracking-wider hover:bg-[#0071c5] transition-colors duration-200"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </>
  );
}
