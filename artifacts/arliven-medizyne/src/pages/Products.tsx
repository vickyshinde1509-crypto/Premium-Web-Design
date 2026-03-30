import { FadeIn } from "@/components/FadeIn";
import { Pill, Syringe, Activity, Stethoscope, BriefcaseMedical, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";

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
        className="relative overflow-hidden border-b border-white/10"
        style={{ minHeight: "340px" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/pharma-hero-cinematic.png)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/65 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-16 flex flex-col justify-center" style={{ minHeight: "340px" }}>
          <FadeIn>
            <p className="text-[#0071c5] font-bold tracking-widest uppercase text-xs mb-3">What We Offer</p>
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
      <section className="py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <div className="bg-[#222] overflow-hidden border border-white/10 hover:border-[#0071c5]/50 transition-all duration-300 h-full flex flex-col group shadow-lg">
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${product.image}`}
                      alt={product.category}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#222] to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#222] flex items-center justify-center text-[#0071c5] border border-white/20 group-hover:bg-[#0071c5] group-hover:text-white transition-colors">
                      <product.icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-lg font-black text-white mb-3">{product.category}</h3>
                    <p className="text-gray-400 text-base mb-6 leading-relaxed">{product.description}</p>
                    <div className="space-y-3 mb-8 flex-grow">
                      {product.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-base font-medium text-gray-300">
                          <CheckCircle className="w-5 h-5 text-[#0071c5] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="w-full py-3 text-center border-2 border-white/20 text-white font-bold text-base hover:bg-[#0071c5] hover:border-[#0071c5] transition-colors mt-auto"
                    >
                      Inquire Now
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-[#0071c5] font-bold tracking-widest uppercase text-sm mb-4">What We Do</p>
              <h2 className="text-3xl lg:text-4xl font-black mb-6 text-gray-900 leading-tight">Our Export Services</h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Beyond just supplying products, Arliven Medizyne acts as your comprehensive partner in the pharmaceutical supply chain, handling the complexities of international trade, regulatory compliance, and logistics.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 border border-gray-200 hover:border-[#0071c5] transition-colors">
                    <div className="w-2 h-2 rounded-full bg-[#0071c5] shrink-0" />
                    <span className="text-base font-bold text-gray-900">{service}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 font-black text-base hover:bg-[#0071c5] transition-colors"
                >
                  Get a Quote <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <img
                src={`${import.meta.env.BASE_URL}images/pharma-export.png`}
                alt="Pharma export services"
                className="w-full h-auto shadow-xl"
              />
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
