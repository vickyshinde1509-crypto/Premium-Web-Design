import { FadeIn } from "@/components/FadeIn";
import { Pill, Syringe, Activity, Stethoscope, BriefcaseMedical, Shield, CheckCircle } from "lucide-react";
import { Link } from "wouter";

const products = [
  {
    category: "Tablets & Capsules",
    icon: Pill,
    image: "pharma-tablets.png",
    description: "A wide range of oral solid dosage forms manufactured under strict WHO-GMP guidelines.",
    items: ["Antibiotics", "Analgesics & Antipyretics", "Cardiovascular Drugs", "Anti-diabetics", "Vitamins"]
  },
  {
    category: "Injections & Ampoules",
    icon: Syringe,
    image: "pharma-injections.png",
    description: "Sterile liquid and dry powder injectables ensuring rapid therapeutic action.",
    items: ["Dry Powder Injections", "Liquid Injections", "Lyophilized Injections", "Veterinary Injections"]
  },
  {
    category: "Syrups & Suspensions",
    icon: Activity,
    image: "pharma-syrups.png",
    description: "High-quality oral liquid formulations designed for optimal absorption and compliance.",
    items: ["Cough Syrups", "Antacid Suspensions", "Pediatric Drops", "Multivitamin Syrups"]
  },
  {
    category: "Surgical Products",
    icon: BriefcaseMedical,
    image: "pharma-surgical.png",
    description: "Essential medical and surgical consumables for hospital and clinical use.",
    items: ["Surgical Dressings", "Disposable Syringes", "IV Sets", "Surgical Gloves", "Face Masks"]
  },
  {
    category: "Antibiotics",
    icon: Shield,
    image: "pharma-tablets.png", // Reuse
    description: "Broad-spectrum antibacterial formulations for effective infection control.",
    items: ["Penicillins", "Cephalosporins", "Macrolides", "Fluoroquinolones"]
  },
  {
    category: "OTC Healthcare",
    icon: Stethoscope,
    image: "pharma-factory.png", // Reuse
    description: "Over-the-counter wellness and preventive healthcare products.",
    items: ["Nutraceuticals", "Herbal Supplements", "First Aid Essentials", "Hygiene Products"]
  }
];

const services = [
  "Pharma Merchant Export",
  "Domestic Pharma Supply",
  "Product Sourcing & Procurement",
  "Third Party Manufacturing",
  "Bulk Medicine Supply",
  "Private Label / Contract Manufacturing",
  "Export Documentation & Compliance",
  "Customs Clearance Assistance"
];

export default function Products() {
  return (
    <main className="w-full pt-20 bg-[#1a1a1a]">
      {/* Header */}
      <section className="py-24 bg-[#111] relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <h4 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">What We Offer</h4>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
              Products & Services
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Comprehensive healthcare solutions encompassing a wide range of premium pharmaceutical formulations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-[#222] rounded overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 h-full flex flex-col group shadow-lg">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/${product.image}`}
                      alt={product.category}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#222] to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#222] rounded flex items-center justify-center text-primary shadow-lg border border-white/10 group-hover:bg-primary group-hover:text-white transition-colors">
                      <product.icon className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-3">{product.category}</h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">{product.description}</p>
                    <div className="space-y-3 mb-8 flex-grow">
                      {product.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm font-medium text-gray-300">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link 
                      href="/contact"
                      className="w-full py-3 text-center border border-white/20 rounded text-white font-bold hover:bg-primary hover:border-primary transition-colors mt-auto"
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

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a1a1a]">Our Export Services</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Beyond just supplying products, Arliven Medizyne acts as your comprehensive partner in the pharmaceutical supply chain. We handle the complexities of international trade, regulatory compliance, and logistics.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded border border-gray-200">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-sm font-bold text-[#1a1a1a]">{service}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="relative p-2 bg-gray-100 rounded">
                <img 
                  src={`${import.meta.env.BASE_URL}images/pharma-export.png`} 
                  alt="Pharma Export Services" 
                  className="rounded shadow-md w-full h-auto"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
