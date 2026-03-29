import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";

const slides = [
  {
    id: 1,
    eyebrow: "ARLIVEN MEDIZYNE PVT LTD",
    title: "EMPOWERING\nGLOBAL HEALTH\nSOLUTIONS",
    subtitle: "Arliven Medizyne offers you high-quality pharmaceutical and surgical products for your healthcare needs. Our expert sourcing and export services are backed by WHO-GMP certified facilities, ensuring quality and compliance in every shipment.",
    cta: "View Products",
    ctaLink: "/products",
    images: [
      { src: "pharma-hero.png", cls: "absolute top-0 right-0 w-[70%] h-[55%] object-cover rounded-sm shadow-2xl z-20" },
      { src: "pharma-export.png", cls: "absolute bottom-0 right-[5%] w-[65%] h-[50%] object-cover rounded-sm shadow-2xl z-30" },
      { src: "pharma-factory.png", cls: "absolute top-[20%] right-[55%] w-[40%] h-[40%] object-cover rounded-sm shadow-xl z-10" },
    ]
  },
  {
    id: 2,
    eyebrow: "QUALITY ASSURED",
    title: "TRUSTED\nPHARMA EXPORT\nFROM INDIA",
    subtitle: "We process all pharmaceutical categories — Tablets, Capsules, Injections, Syrups and Surgical Products — with WHO-GMP certified compliance and rigorous quality control for every international shipment.",
    cta: "Export Inquiry",
    ctaLink: "/export",
    images: [
      { src: "pharma-tablets.png", cls: "absolute top-0 right-0 w-[70%] h-[55%] object-cover rounded-sm shadow-2xl z-20" },
      { src: "pharma-injections.png", cls: "absolute bottom-0 right-[5%] w-[65%] h-[50%] object-cover rounded-sm shadow-2xl z-30" },
      { src: "pharma-syrups.png", cls: "absolute top-[20%] right-[55%] w-[40%] h-[40%] object-cover rounded-sm shadow-xl z-10" },
    ]
  },
  {
    id: 3,
    eyebrow: "GLOBAL REACH",
    title: "BRIDGING\nHEALTHCARE\nWORLDWIDE",
    subtitle: "Our established export channels span Asia, Africa, Middle East, and Southeast Asia. We provide seamless regulatory compliance and robust pharmaceutical supply chain management.",
    cta: "Our Products",
    ctaLink: "/products",
    images: [
      { src: "pharma-export.png", cls: "absolute top-0 right-0 w-[70%] h-[55%] object-cover rounded-sm shadow-2xl z-20" },
      { src: "pharma-surgical.png", cls: "absolute bottom-0 right-[5%] w-[65%] h-[50%] object-cover rounded-sm shadow-2xl z-30" },
      { src: "pharma-hero.png", cls: "absolute top-[20%] right-[55%] w-[40%] h-[40%] object-cover rounded-sm shadow-xl z-10" },
    ]
  }
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <>
      {/* MAIN HERO — split layout matching reference */}
      <section className="w-full mt-20" style={{ background: "#d0d0d0", minHeight: "580px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[580px]">

            {/* LEFT: text panel — lighter grey */}
            <div
              className="flex flex-col justify-center px-10 lg:px-16 py-16"
              style={{ background: "#e0e0e0" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current + "-text"}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.55 }}
                >
                  <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">
                    {slide.eyebrow}
                  </p>
                  <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-[1.05] mb-7 whitespace-pre-line">
                    {slide.title}
                  </h1>
                  <p className="text-base text-gray-600 leading-relaxed mb-10 max-w-md">
                    {slide.subtitle}
                  </p>
                  <Link
                    href={slide.ctaLink}
                    className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-3 text-sm font-bold uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-all duration-200"
                  >
                    {slide.cta}
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* Slide indicators */}
              <div className="flex items-center gap-3 mt-12">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-400 ${
                      i === current ? "w-10 bg-gray-900" : "w-4 bg-gray-400"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT: image collage on darker grey */}
            <div
              className="relative hidden lg:block overflow-hidden"
              style={{ background: "#b8b8b8", minHeight: "580px" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current + "-images"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0"
                >
                  {slide.images.map((img, i) => (
                    <img
                      key={i}
                      src={`${import.meta.env.BASE_URL}images/${img.src}`}
                      alt=""
                      className={img.cls}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* BELOW HERO STRIP 1 — white with bold principle text */}
      <section className="bg-white py-10 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-base text-gray-500 mb-2">
            We source, document and deliver pharmaceutical products based on the
          </p>
          <p className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
            "QUALITY-FIRST PRINCIPLE."
          </p>
        </div>
      </section>

      {/* BELOW HERO STRIP 2 — grey CTA bar */}
      <section className="py-8" style={{ background: "#e8e8e8" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xl font-bold text-gray-800 tracking-wide uppercase">
            Need More Information?
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-gray-900 text-white text-sm font-bold uppercase tracking-wider hover:bg-[#0071c5] transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
