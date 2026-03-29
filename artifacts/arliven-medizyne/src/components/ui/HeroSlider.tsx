import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const slides = [
  {
    id: 1,
    title: "Empowering Global Health Solutions",
    subtitle: "Reliable Pharmaceutical Merchant Exporter from India delivering high-quality pharmaceutical and surgical products worldwide.",
    highlight: "Health Solutions",
    image: "pharma-hero.png"
  },
  {
    id: 2,
    title: "Uncompromising Quality Standards",
    subtitle: "WHO-GMP compliant sourcing and rigorous quality control for every shipment, ensuring safety and efficacy.",
    highlight: "Quality Standards",
    image: "pharma-factory.png"
  },
  {
    id: 3,
    title: "Bridging Healthcare Worldwide",
    subtitle: "Extensive global reach across Asia, Africa, Middle East, and beyond with timely and secure logistics.",
    highlight: "Healthcare Worldwide",
    image: "pharma-export.png"
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const highlightText = (text: string, highlight: string) => {
    const parts = text.split(highlight);
    if (parts.length === 1) return text;
    return (
      <>
        {parts[0]}
        <span className="text-primary">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#1c2431] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-[#1c2431] via-[#1c2431]/90 to-transparent z-10" />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute right-0 top-0 w-full md:w-2/3 h-full bg-cover bg-center md:bg-right"
            style={{ 
              backgroundImage: `url(${import.meta.env.BASE_URL}images/${slides[currentSlide].image})`
            }}
          />
          {/* Subtle gradient overlay to blend image into background */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#1c2431]/50 to-[#1c2431]" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide + "-content"}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.15] mb-6">
                {highlightText(slides[currentSlide].title, slides[currentSlide].highlight)}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
                {slides[currentSlide].subtitle}
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link 
                  href="/products"
                  className="px-8 py-4 rounded bg-primary text-white font-bold text-lg hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/20"
                >
                  View Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/export"
                  className="px-8 py-4 rounded bg-transparent text-white border-2 border-white/50 font-bold text-lg hover:border-white hover:bg-white/10 transition-all duration-300"
                >
                  Export Inquiry
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 transition-all duration-500 rounded-full ${
              idx === currentSlide ? "w-12 bg-primary" : "w-4 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
