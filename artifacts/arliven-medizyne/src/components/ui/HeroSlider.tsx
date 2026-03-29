import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import { Link } from "wouter";

const slides = [
  {
    id: 1,
    image: "hero-bg-1.png",
    title: "Empowering Global Health Solutions",
    subtitle: "Reliable Pharmaceutical Merchant Exporter from India delivering high-quality pharmaceutical and surgical products worldwide.",
    primaryCta: "View Products",
    primaryLink: "/products",
    secondaryCta: "Export Inquiry",
    secondaryLink: "/export",
  },
  {
    id: 2,
    image: "hero-bg-2.png",
    title: "Uncompromising Quality Standards",
    subtitle: "WHO-GMP compliant sourcing and rigorous quality control for every shipment, ensuring safety and efficacy.",
    primaryCta: "Our Process",
    primaryLink: "/export",
    secondaryCta: "Contact Us",
    secondaryLink: "/contact",
  },
  {
    id: 3,
    image: "hero-bg-3.png",
    title: "Bridging Healthcare Worldwide",
    subtitle: "Extensive global reach across Asia, Africa, Middle East, and beyond with timely and secure logistics.",
    primaryCta: "Global Reach",
    primaryLink: "/about",
    secondaryCta: "Partner With Us",
    secondaryLink: "/contact",
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

  return (
    <div className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-secondary">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${import.meta.env.BASE_URL}images/${slides[currentSlide].image})`
            }}
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide + "-content"}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                <Globe className="w-4 h-4" />
                <span>India's Premium Pharma Exporter</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] mb-6">
                {slides[currentSlide].title.split(' ').map((word, i) => (
                  <span key={i} className={i === 1 || i === 2 ? "text-gradient block sm:inline" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
                {slides[currentSlide].subtitle}
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link 
                  href={slides[currentSlide].primaryLink}
                  className="px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
                >
                  {slides[currentSlide].primaryCta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href={slides[currentSlide].secondaryLink}
                  className="px-8 py-4 rounded-full bg-white text-foreground border-2 border-border font-semibold text-lg hover:border-primary hover:text-primary transition-all duration-300"
                >
                  {slides[currentSlide].secondaryCta}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-500 ${
              idx === currentSlide ? "w-8 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
