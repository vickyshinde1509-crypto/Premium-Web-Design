import { Shield, Globe2, Truck, FileCheck, PackageOpen, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { HeroSlider } from "@/components/ui/HeroSlider";
import { FadeIn } from "@/components/FadeIn";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
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
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function ParallaxBanner({ src, alt, height = "h-80", children }: { src: string; alt: string; height?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  return (
    <div ref={ref} className={`relative ${height} overflow-hidden`}>
      <motion.div style={{ y }} className="absolute inset-0 scale-125 will-change-transform">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </motion.div>
      {children}
    </div>
  );
}

const features = [
  { icon: Shield,      image: "feature-quality.png",     title: "Trusted Quality",        desc: "Sourcing only from WHO-GMP certified manufacturing facilities." },
  { icon: Globe2,      image: "feature-global.png",      title: "Global Reach",           desc: "Exporting to Asia, Africa, Middle East and beyond." },
  { icon: FileCheck,   image: "feature-compliance.png",  title: "Regulatory Compliance",  desc: "Expertise in complex international export documentation." },
  { icon: Truck,       image: "feature-delivery.png",    title: "Timely Delivery",        desc: "Optimized logistics for secure and punctual shipping." },
  { icon: PackageOpen, image: "feature-sourcing.png",    title: "Reliable Sourcing",      desc: "Strong network of premium WHO-GMP certified manufacturers." },
  { icon: Award,       image: "feature-expertise.png",   title: "Export Expertise",       desc: "Years of specialized pharmaceutical merchant export experience." },
];

const productsPreview = [
  { name: "Tablets & Capsules",   image: "pharma-tablets.png" },
  { name: "Injections & Ampoules", image: "pharma-injections.png" },
  { name: "Syrups & Suspensions", image: "pharma-syrups.png" },
  { name: "Surgical Products",    image: "pharma-surgical.png" },
  { name: "Antibiotics Range",    image: "pharma-tablets.png" },
  { name: "OTC Healthcare",       image: "pharma-factory.png" },
];

const services = [
  { image: "service-export.png",         title: "Pharma Merchant Export",     desc: "Seamless export of generic and branded pharmaceutical products worldwide." },
  { image: "service-manufacturing.png",  title: "Third Party Manufacturing",  desc: "Contract manufacturing under strict WHO-GMP certified guidelines." },
  { image: "service-surgical.png",       title: "Surgical Supply",            desc: "High-grade surgical instruments and medical consumables." },
  { image: "service-regulatory.png",     title: "Regulatory Support",         desc: "Complete dossier preparation and export compliance assistance." },
];

const stats = [
  { target: 500, suffix: "+", label: "Products Exported" },
  { target: 20,  suffix: "+", label: "Countries Served" },
  { target: 10,  suffix: "+", label: "Years Experience" },
  { target: 100, suffix: "%", label: "Quality Assurance" },
];

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
  const repeated = [...tickerImages, ...tickerImages];
  return (
    <div className="overflow-hidden bg-[#F4F8FF] py-4 border-y border-[#2F80ED]/10">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-4"
        style={{ width: "max-content" }}
      >
        {repeated.map((img, i) => (
          <div key={i} className="w-64 h-40 flex-shrink-0 overflow-hidden rounded-xl">
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
      <section className="bg-white py-12 border-b border-[#2F80ED]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} direction="up" className="text-center group">
                <div className="text-4xl lg:text-5xl font-black text-[#2F80ED] mb-2 tabular-nums">
                  <CountUp target={stat.target} suffix={stat.suffix} duration={2200} />
                </div>
                <div className="text-[#6E6E73] font-semibold tracking-widest uppercase text-xs">
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
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <p className="text-[#2F80ED] font-semibold tracking-widest uppercase text-xs mb-4">
                About Arliven Medizyne
              </p>
              <h2 className="text-3xl lg:text-4xl font-black mb-6 leading-tight text-[#1D1D1F]">
                Excellence in<br />
                <span className="text-[#2F80ED]">Global Healthcare</span> Export
              </h2>
              <p className="text-[#6E6E73] text-lg leading-relaxed mb-8">
                Arliven Medizyne Pvt Ltd is a premier pharmaceutical merchant exporter based in Maharashtra, India. We bridge the gap in global healthcare by delivering high-quality pharmaceutical and surgical products across international borders with full compliance and safety.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {["WHO-GMP Certified Products", "Timely Global Shipping", "Comprehensive Product Range", "Strict Quality Control"].map((point, i) => (
                  <FadeIn key={i} delay={i * 0.08} direction="right">
                    <div className="flex items-center gap-3 bg-[#EAF2FF] rounded-xl px-4 py-3 border border-[#2F80ED]/15">
                      <CheckCircle2 className="w-5 h-5 text-[#2F80ED] shrink-0" />
                      <span className="font-medium text-[#1D1D1F] text-sm">{point}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#2F80ED] text-white px-7 py-3 rounded-xl font-semibold text-sm hover:bg-blue-600 transition-colors duration-200 shadow-lg shadow-blue-200"
              >
                Discover Our Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div className="relative">
                <motion.div
                  initial={{ rotate: 2, opacity: 0.4 }}
                  whileInView={{ rotate: 1.5, opacity: 1 }}
                  viewport={{ once: true }}
                  className="absolute -inset-3 bg-[#EAF2FF] rounded-2xl"
                />
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  src={`${import.meta.env.BASE_URL}images/pharma-factory.png`}
                  alt="Pharmaceutical manufacturing facility"
                  className="relative w-full h-[460px] object-cover rounded-2xl shadow-xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-20 bg-[#F4F8FF] border-t border-[#2F80ED]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-[#1D1D1F]">Why Choose Arliven?</h2>
            <p className="text-[#6E6E73] text-lg">Unwavering commitment to quality, compliance, and reliable global delivery.</p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <FadeIn key={idx} delay={idx * 0.08} direction="up">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 340, damping: 26, mass: 0.8 }}
                  className="bg-[#EEF4FF] rounded-2xl border border-[#2F80ED]/10 group cursor-default overflow-hidden shadow-[0_2px_12px_rgba(47,128,237,0.07)] hover:shadow-[0_14px_36px_rgba(47,128,237,0.14)] hover:bg-[#2F80ED] active:bg-[#2F80ED] touch-manipulation transition-colors duration-100"
                >
                  <div className="h-44 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.04 }}
                      transition={{ type: "spring", stiffness: 260, damping: 28, mass: 0.9 }}
                      src={`${import.meta.env.BASE_URL}images/${feature.image}`}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-10 h-10 bg-white/60 rounded-xl flex items-center justify-center text-[#2F80ED] mb-4 group-hover:bg-white/20 group-hover:text-white group-active:bg-white/20 group-active:text-white transition-all duration-100">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-[#1D1D1F] group-hover:text-white group-active:text-white transition-colors duration-100">{feature.title}</h3>
                    <p className="text-[#6E6E73] text-sm leading-relaxed group-hover:text-white/75 group-active:text-white/75 transition-colors duration-100">{feature.desc}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Banner 1 — parallax */}
      <ParallaxBanner
        src={`${import.meta.env.BASE_URL}images/banner-supply-chain.png`}
        alt="Global pharmaceutical supply chain"
        height="h-64"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
        <div className="absolute inset-0 flex items-end justify-center z-10 pb-10">
          <FadeIn>
            <p className="text-xl lg:text-2xl font-black text-white text-center tracking-wide uppercase drop-shadow-lg">
              Delivering Healthcare Excellence Across Borders
            </p>
          </FadeIn>
        </div>
      </ParallaxBanner>

      {/* Products Preview */}
      <section className="py-20 bg-[#F4F8FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <FadeIn>
              <p className="text-[#2F80ED] font-semibold tracking-widest uppercase text-xs mb-3">Our Portfolio</p>
              <h2 className="text-3xl lg:text-4xl font-black text-[#1D1D1F]">Premium Healthcare Products</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link
                href="/products"
                className="px-6 py-3 rounded-xl border-2 border-[#2F80ED] text-[#2F80ED] font-semibold text-sm hover:bg-[#2F80ED] hover:text-white transition-colors"
              >
                View Complete Range
              </Link>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {productsPreview.map((product, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <Link href="/products">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="group relative h-72 overflow-hidden cursor-pointer rounded-2xl bg-[#EAF2FF] shadow-sm"
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}images/${product.image}`}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-2xl" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                      <h3 className="text-base font-bold text-white group-hover:text-[#2F80ED] transition-colors flex items-center justify-between">
                        {product.name}
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </h3>
                    </div>
                  </motion.div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Banner 2 — parallax */}
      <ParallaxBanner
        src={`${import.meta.env.BASE_URL}images/banner-connect.png`}
        alt="Pharmaceutical supply chain connect"
        height="h-auto"
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-14 lg:py-18">
          <FadeIn direction="right">
            <p className="text-xs font-semibold tracking-widest text-[#2F80ED] uppercase mb-3">GET STARTED</p>
            <h2 className="text-2xl lg:text-3xl font-black text-white mb-3 leading-snug">
              Connect With Us For Export Inquiry<br className="hidden lg:block" /> &amp; Achieve Reliable Supply Chain
            </h2>
            <p className="text-gray-300 text-base mb-6 max-w-xl">Arliven Medizyne offers quality pharmaceutical solutions for your global healthcare supply chain.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#2F80ED] text-white font-semibold text-sm rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </ParallaxBanner>

      {/* Services */}
      <section className="py-20 bg-white border-t border-[#2F80ED]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="text-center mb-12">
            <p className="text-[#2F80ED] font-semibold tracking-widest uppercase text-xs mb-4">What We Do</p>
            <h2 className="text-3xl lg:text-4xl font-black text-[#1D1D1F]">Comprehensive Services</h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 340, damping: 26, mass: 0.8 }}
                  className="bg-[#EEF4FF] border border-[#2F80ED]/10 rounded-2xl overflow-hidden group cursor-default h-full flex flex-col shadow-[0_2px_12px_rgba(47,128,237,0.07)] hover:shadow-[0_14px_36px_rgba(47,128,237,0.14)] hover:bg-[#2F80ED] active:bg-[#2F80ED] touch-manipulation transition-colors duration-100"
                >
                  <div className="h-40 overflow-hidden shrink-0">
                    <motion.img
                      whileHover={{ scale: 1.04 }}
                      transition={{ type: "spring", stiffness: 260, damping: 28, mass: 0.9 }}
                      src={`${import.meta.env.BASE_URL}images/${service.image}`}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 flex-1">
                    <div className="w-1 h-6 bg-[#2F80ED] mb-3 rounded-full group-hover:bg-white group-active:bg-white transition-colors duration-100" />
                    <h3 className="text-sm font-bold mb-2 text-[#1D1D1F] group-hover:text-white group-active:text-white transition-colors duration-100 leading-snug">{service.title}</h3>
                    <p className="text-[#6E6E73] text-xs leading-relaxed group-hover:text-white/75 group-active:text-white/75 transition-colors duration-100">{service.desc}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 bg-[#F4F8FF] border-t border-[#2F80ED]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <p className="text-[#2F80ED] font-semibold tracking-widest uppercase text-xs mb-4">Export Markets</p>
              <h2 className="text-3xl lg:text-4xl font-black text-[#1D1D1F] mb-6 leading-tight">
                Connecting Indian<br />Excellence to<br />Global Markets
              </h2>
              <p className="text-[#6E6E73] text-lg leading-relaxed mb-8">
                Our established export channels span across multiple continents with seamless regulatory compliance and robust supply chain management.
              </p>
              <ul className="space-y-3">
                {["Southeast Asia", "African Nations", "Middle East / GCC", "CIS Countries"].map((region, i) => (
                  <FadeIn key={i} delay={i * 0.08} direction="right">
                    <div className="group flex items-center gap-3 bg-[#EEF4FF] rounded-xl px-4 py-3 border border-[#2F80ED]/10 shadow-sm hover:bg-[#2F80ED] active:bg-[#2F80ED] hover:border-[#2F80ED] active:border-[#2F80ED] touch-manipulation transition-all duration-100 cursor-pointer">
                      <div className="w-2 h-2 rounded-full bg-[#2F80ED] shrink-0 group-hover:bg-white group-active:bg-white transition-colors duration-100" />
                      <span className="font-semibold text-[#1D1D1F] text-sm group-hover:text-white group-active:text-white transition-colors duration-100">{region}</span>
                    </div>
                  </FadeIn>
                ))}
              </ul>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-2xl"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/pharma-port-mix.png`}
                  alt="Global pharmaceutical export"
                  className="w-full h-[420px] object-cover shadow-xl"
                />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#2F80ED]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-5 leading-tight">
              Ready to Partner<br />With Us?
            </h2>
            <p className="text-white/85 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact us today to discuss your pharmaceutical sourcing and export requirements. Let's build a healthier future together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-[#2F80ED] font-bold text-sm rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg"
              >
                Send Inquiry
              </Link>
              <Link
                href="/products"
                className="px-8 py-3 border-2 border-white/50 text-white font-bold text-sm rounded-xl hover:bg-white/10 transition-all duration-200"
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
