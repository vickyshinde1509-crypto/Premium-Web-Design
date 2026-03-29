import { Shield, Globe2, Truck, FileCheck, PackageOpen, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { HeroSlider } from "@/components/ui/HeroSlider";
import { FadeIn } from "@/components/FadeIn";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function CountUp({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const features = [
  { icon: Shield, title: "Trusted Quality", desc: "Sourcing only from WHO-GMP certified manufacturing facilities." },
  { icon: Globe2, title: "Global Reach", desc: "Exporting to Asia, Africa, Middle East and beyond." },
  { icon: FileCheck, title: "Regulatory Compliance", desc: "Expertise in complex international export documentation." },
  { icon: Truck, title: "Timely Delivery", desc: "Optimized logistics for secure and punctual shipping." },
  { icon: PackageOpen, title: "Reliable Sourcing", desc: "Strong network of premium WHO-GMP certified manufacturers." },
  { icon: Award, title: "Export Expertise", desc: "Years of specialized pharmaceutical merchant export experience." },
];

const productsPreview = [
  { name: "Tablets & Capsules", image: "pharma-tablets.png" },
  { name: "Injections & Ampoules", image: "pharma-injections.png" },
  { name: "Syrups & Suspensions", image: "pharma-syrups.png" },
  { name: "Surgical Products", image: "pharma-surgical.png" },
  { name: "Antibiotics Range", image: "pharma-tablets.png" },
  { name: "OTC Healthcare", image: "pharma-factory.png" },
];

const services = [
  { title: "Pharma Merchant Export", desc: "Seamless export of generic and branded pharmaceutical products worldwide." },
  { title: "Third Party Manufacturing", desc: "Contract manufacturing under strict WHO-GMP certified guidelines." },
  { title: "Surgical Supply", desc: "High-grade surgical instruments and medical consumables." },
  { title: "Regulatory Support", desc: "Complete dossier preparation and export compliance assistance." },
];

const stats = [
  { target: 500, suffix: "+", label: "Products Exported" },
  { target: 20,  suffix: "+", label: "Countries Served" },
  { target: 10,  suffix: "+", label: "Years Experience" },
  { target: 100, suffix: "%", label: "Quality Assurance" },
];

// Ticker images that auto-scroll horizontally
const tickerImages = [
  "pharma-hero-cinematic.png",
  "pharma-tablets.png",
  "pharma-injections.png",
  "pharma-air-cargo.png",
  "pharma-syrups.png",
  "pharma-port-mix.png",
  "pharma-surgical.png",
  "pharma-factory.png",
  "pharma-export.png",
];

function ImageTicker() {
  // Duplicate images for seamless loop
  const repeated = [...tickerImages, ...tickerImages];
  return (
    <div className="overflow-hidden bg-[#111] py-4">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-4"
        style={{ width: "max-content" }}
      >
        {repeated.map((img, i) => (
          <div
            key={i}
            className="w-72 h-44 flex-shrink-0 overflow-hidden"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/${img}`}
              alt=""
              className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="w-full">
      <HeroSlider />

      {/* Stats Bar */}
      <section className="bg-[#1a1a1a] py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} direction="up" className="text-center group">
                <div className="text-5xl lg:text-6xl font-black text-white mb-3 group-hover:text-[#0071c5] transition-colors duration-300 tabular-nums">
                  <CountUp target={stat.target} suffix={stat.suffix} duration={2200} />
                </div>
                <div className="text-gray-400 font-bold tracking-widest uppercase text-sm">
                  {stat.label}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AUTO-SCROLLING IMAGE TICKER */}
      <ImageTicker />

      {/* Company Overview */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <p className="text-[#0071c5] font-bold tracking-widest uppercase text-sm mb-4">
                About Arliven Medizyne
              </p>
              <h2 className="text-4xl lg:text-5xl font-black mb-7 leading-tight text-gray-900">
                Excellence in<br />
                <span className="text-[#0071c5]">Global Healthcare</span> Export
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed mb-8">
                Arliven Medizyne Pvt Ltd is a premier pharmaceutical merchant exporter based in Maharashtra, India. We bridge the gap in global healthcare by delivering high-quality pharmaceutical and surgical products across international borders with full compliance and safety.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {["WHO-GMP Certified Products", "Timely Global Shipping", "Comprehensive Product Range", "Strict Quality Control"].map((point, i) => (
                  <FadeIn key={i} delay={i * 0.08} direction="right">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#0071c5] shrink-0" />
                      <span className="font-semibold text-gray-800 text-base">{point}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 font-bold text-base hover:bg-[#0071c5] transition-colors duration-300"
              >
                Discover Our Story
                <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div className="relative">
                <motion.div
                  initial={{ rotate: 2, opacity: 0.6 }}
                  whileInView={{ rotate: 1.5, opacity: 1 }}
                  viewport={{ once: true }}
                  className="absolute -inset-3 bg-gray-200"
                />
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  src={`${import.meta.env.BASE_URL}images/pharma-factory.png`}
                  alt="Pharmaceutical manufacturing facility"
                  className="relative w-full h-[520px] object-cover shadow-2xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-5 text-gray-900">Why Choose Arliven?</h2>
            <p className="text-gray-600 text-xl">Unwavering commitment to quality, compliance, and reliable global delivery.</p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <FadeIn key={idx} delay={idx * 0.08} direction="up">
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-9 shadow-sm border border-gray-100 group cursor-default"
                >
                  <div className="w-16 h-16 bg-blue-50 flex items-center justify-center text-[#0071c5] mb-6 group-hover:bg-[#0071c5] group-hover:text-white transition-colors duration-300">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{feature.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Banner image — full-width cinematic */}
      <div className="relative h-64 overflow-hidden">
        <motion.div
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/pharma-hero-cinematic.png`}
            alt="Global pharma"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0071c5]/90 to-[#0071c5]/60" />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <FadeIn>
            <p className="text-3xl lg:text-4xl font-black text-white text-center tracking-wide uppercase">
              Delivering Healthcare Excellence Across Borders
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Products Preview */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <FadeIn>
              <p className="text-[#0071c5] font-bold tracking-widest uppercase text-sm mb-3">Our Portfolio</p>
              <h2 className="text-4xl lg:text-5xl font-black text-white">Premium Healthcare Products</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link
                href="/products"
                className="px-6 py-3 border-2 border-white/30 text-white font-bold text-base hover:bg-[#0071c5] hover:border-[#0071c5] transition-colors"
              >
                View Complete Range
              </Link>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsPreview.map((product, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <Link href="/products">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="group relative h-80 overflow-hidden cursor-pointer bg-[#2a2a2a]"
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}images/${product.image}`}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#0071c5] transition-colors flex items-center justify-between">
                        {product.name}
                        <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </h3>
                    </div>
                  </motion.div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width banner — air cargo */}
      <div className="relative h-72 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/pharma-air-cargo.png`}
            alt="Air cargo pharma"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 flex items-center z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <FadeIn direction="right">
              <p className="text-sm font-bold tracking-widest text-[#0071c5] uppercase mb-4">GET STARTED</p>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                CONNECT WITH US FOR<br />EXPORT INQUIRY AND ACHIEVE<br />RELIABLE SUPPLY CHAIN
              </h2>
              <p className="text-gray-400 text-lg mb-7">Arliven Medizyne offers you quality pharmaceutical solutions for your global healthcare supply chain.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-gray-900 font-black text-sm uppercase tracking-wider hover:bg-[#0071c5] hover:text-white transition-all duration-300"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="text-center mb-16">
            <p className="text-[#0071c5] font-bold tracking-widest uppercase text-sm mb-4">What We Do</p>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">Comprehensive Services</h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <motion.div
                  whileHover={{ borderColor: "#0071c5", y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="p-8 border-2 border-gray-200 h-full bg-gray-50 group cursor-default"
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#0071c5] transition-colors">{service.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{service.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach — with real image */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <p className="text-[#0071c5] font-bold tracking-widest uppercase text-sm mb-4">Export Markets</p>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-7 leading-tight">
                Connecting Indian<br />Excellence to<br />Global Markets
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed mb-10">
                Our established export channels span across multiple continents with seamless regulatory compliance and robust supply chain management.
              </p>
              <ul className="space-y-4">
                {["Southeast Asia", "African Nations", "Middle East / GCC", "CIS Countries"].map((region, i) => (
                  <FadeIn key={i} delay={i * 0.08} direction="right">
                    <div className="flex items-center gap-4 text-white font-semibold text-lg">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0071c5] shrink-0" />
                      {region}
                    </div>
                  </FadeIn>
                ))}
              </ul>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/pharma-port-mix.png`}
                  alt="Global pharmaceutical export"
                  className="w-full h-[460px] object-cover shadow-2xl"
                />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-[#0071c5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Ready to Partner<br />With Us?
            </h2>
            <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Contact us today to discuss your pharmaceutical sourcing and export requirements. Let's build a healthier future together.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link
                href="/contact"
                className="px-10 py-4 bg-white text-[#0071c5] font-black text-base uppercase tracking-wider hover:bg-gray-100 transition-all duration-200 shadow-lg"
              >
                Send Inquiry
              </Link>
              <Link
                href="/products"
                className="px-10 py-4 border-2 border-white text-white font-black text-base uppercase tracking-wider hover:bg-white/10 transition-all duration-200"
              >
                View Products
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
