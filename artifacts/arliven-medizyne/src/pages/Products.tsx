import { FadeIn } from "@/components/FadeIn";
import { Pill, Syringe, Activity, Stethoscope, BriefcaseMedical, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const products = [
  {
    category: "Tablets & Capsules",
    icon: Pill,
    image: "pharma-tablets.png",
    description: "Wide range of oral solid dosage forms manufactured under strict WHO-GMP guidelines.",
    items: ["Antibiotics", "Analgesics & Antipyretics", "Cardiovascular Drugs", "Anti-diabetics", "Vitamins & Supplements"],
  },
  {
    category: "Injections & Ampoules",
    icon: Syringe,
    image: "pharma-injections.png",
    description: "Sterile liquid and dry powder injectables ensuring rapid therapeutic action.",
    items: ["Dry Powder Injections", "Liquid Injections", "Lyophilized Injections", "Veterinary Injections"],
  },
  {
    category: "Syrups & Suspensions",
    icon: Activity,
    image: "pharma-syrups.png",
    description: "High-quality oral liquid formulations designed for optimal absorption and compliance.",
    items: ["Cough Syrups", "Antacid Suspensions", "Pediatric Drops", "Multivitamin Syrups"],
  },
  {
    category: "Surgical Products",
    icon: BriefcaseMedical,
    image: "pharma-surgical.png",
    description: "Essential medical and surgical consumables for hospital and clinical use.",
    items: ["Surgical Dressings", "Disposable Syringes", "IV Sets", "Surgical Gloves", "Face Masks"],
  },
  {
    category: "Antibiotics Range",
    icon: Shield,
    image: "pharma-tablets.png",
    description: "Broad-spectrum antibacterial formulations for effective infection control.",
    items: ["Penicillins", "Cephalosporins", "Macrolides", "Fluoroquinolones"],
  },
  {
    category: "OTC Healthcare",
    icon: Stethoscope,
    image: "pharma-factory.png",
    description: "Over-the-counter wellness and preventive healthcare products.",
    items: ["Nutraceuticals", "Herbal Supplements", "First Aid Essentials", "Hygiene Products"],
  },
];

const services = [
  "Pharma Merchant Export",
  "Domestic Pharma Supply",
  "Product Sourcing & Procurement",
  "Third Party Manufacturing",
  "Bulk Medicine Supply",
  "Private Label / Contract Manufacturing",
  "Export Documentation & Compliance",
  "Customs Clearance Assistance",
];

export default function Products() {
  return (
    <main className="w-full pt-20">

      {/* Header Banner */}
      <section
        className="relative overflow-hidden border-b border-[#2F80ED]/15"
        style={{ minHeight: "340px" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/pharma-hero-cinematic.png)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-16 flex flex-col justify-center" style={{ minHeight: "340px" }}>
          <FadeIn>
            <p className="text-[#2F80ED] font-semibold tracking-widest uppercase text-xs mb-3">What We Offer</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white leading-tight">
              Products &amp; Services
            </h1>
            <p className="text-base lg:text-lg text-gray-300 max-w-xl leading-relaxed">
              Comprehensive healthcare solutions encompassing a wide range of premium pharmaceutical formulations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-[#F4F8FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="text-center mb-12">
            <p className="text-[#2F80ED] font-semibold tracking-widest uppercase text-xs mb-3">Product Range</p>
            <h2 className="text-2xl lg:text-3xl font-black text-[#1D1D1F]">Our Product Categories</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 340, damping: 26, mass: 0.8 }}
                  className="bg-[#EEF4FF] rounded-2xl overflow-hidden border border-[#2F80ED]/10 h-full flex flex-col group shadow-[0_2px_12px_rgba(47,128,237,0.07)] hover:shadow-[0_14px_36px_rgba(47,128,237,0.14)] hover:bg-[#2F80ED] active:bg-[#2F80ED] touch-manipulation transition-colors duration-100"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${product.image}`}
                      alt={product.category}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent group-hover:from-[#2F80ED]/40" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#2F80ED] shadow-md group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                      <product.icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-black text-[#1D1D1F] mb-2 group-hover:text-white group-active:text-white transition-colors duration-100">{product.category}</h3>
                    <p className="text-[#6E6E73] text-sm mb-5 leading-relaxed group-hover:text-white/75 group-active:text-white/75 transition-colors duration-100">{product.description}</p>
                    <div className="space-y-2 mb-6 flex-grow">
                      {product.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm font-medium text-[#1D1D1F] group-hover:text-white/90 group-active:text-white/90 transition-colors duration-100">
                          <CheckCircle className="w-4 h-4 text-[#2F80ED] shrink-0 group-hover:text-white group-active:text-white transition-colors duration-100" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="w-full py-3 text-center rounded-xl border-2 border-[#2F80ED] text-[#2F80ED] font-bold text-sm hover:bg-[#2F80ED] hover:text-white group-hover:border-white group-hover:text-white group-hover:bg-white/20 transition-all duration-300 mt-auto"
                    >
                      Inquire Now
                    </Link>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white border-t border-[#2F80ED]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-[#2F80ED] font-semibold tracking-widest uppercase text-xs mb-4">What We Do</p>
              <h2 className="text-3xl lg:text-4xl font-black mb-6 text-[#1D1D1F] leading-tight">Our Export Services</h2>
              <p className="text-[#6E6E73] text-lg mb-8 leading-relaxed">
                Beyond just supplying products, Arliven Medizyne acts as your comprehensive partner in the pharmaceutical supply chain, handling the complexities of international trade, regulatory compliance, and logistics.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((service, idx) => (
                  <div key={idx} className="group flex items-center gap-3 bg-[#EEF4FF] rounded-xl px-4 py-3 border border-[#2F80ED]/10 hover:bg-[#2F80ED] active:bg-[#2F80ED] hover:border-[#2F80ED] active:border-[#2F80ED] touch-manipulation transition-colors duration-100 cursor-pointer lift-card">
                    <div className="w-2 h-2 rounded-full bg-[#2F80ED] shrink-0 group-hover:bg-white group-active:bg-white transition-colors duration-100" />
                    <span className="text-sm font-semibold text-[#1D1D1F] group-hover:text-white group-active:text-white transition-colors duration-100">{service}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#2F80ED] text-white px-7 py-3 rounded-xl font-semibold text-sm hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200"
                >
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <img
                src={`${import.meta.env.BASE_URL}images/pharma-export.png`}
                alt="Pharma export services"
                className="w-full h-auto shadow-xl rounded-2xl"
              />
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
