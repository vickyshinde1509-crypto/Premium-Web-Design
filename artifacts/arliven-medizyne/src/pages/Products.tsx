import { FadeIn } from "@/components/FadeIn";
import { Pill, Syringe, Activity, Stethoscope, BriefcaseMedical, Shield, CheckCircle } from "lucide-react";

const products = [
  {
    category: "Tablets & Capsules",
    icon: Pill,
    description: "A wide range of oral solid dosage forms manufactured under strict WHO-GMP guidelines.",
    items: ["Antibiotics", "Analgesics & Antipyretics", "Cardiovascular Drugs", "Anti-diabetics", "Vitamins & Supplements"]
  },
  {
    category: "Injections & Ampoules",
    icon: Syringe,
    description: "Sterile liquid and dry powder injectables ensuring rapid therapeutic action.",
    items: ["Dry Powder Injections", "Liquid Injections", "Lyophilized Injections", "Veterinary Injections"]
  },
  {
    category: "Syrups & Suspensions",
    icon: Activity,
    description: "High-quality oral liquid formulations designed for optimal absorption and compliance.",
    items: ["Cough Syrups", "Antacid Suspensions", "Pediatric Drops", "Multivitamin Syrups"]
  },
  {
    category: "Ointments & Creams",
    icon: Shield,
    description: "Topical applications formulated for effective dermal penetration and treatment.",
    items: ["Antifungal Creams", "Antibacterial Ointments", "Analgesic Gels", "Dermatological Lotions"]
  },
  {
    category: "Surgical Products",
    icon: BriefcaseMedical,
    description: "Essential medical and surgical consumables for hospital and clinical use.",
    items: ["Surgical Dressings", "Disposable Syringes", "IV Sets", "Surgical Gloves", "Face Masks"]
  },
  {
    category: "OTC Healthcare",
    icon: Stethoscope,
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
  "Export Documentation & Compliance"
];

export default function Products() {
  return (
    <main className="w-full pt-28">
      {/* Header */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Products & <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare solutions encompassing a wide range of pharmaceutical formulations and export services.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Product Portfolio</h2>
            <p className="text-lg text-muted-foreground">Sourced exclusively from certified manufacturing units ensuring absolute quality.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 h-full flex flex-col group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <product.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold">{product.category}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">{product.description}</p>
                  <div className="space-y-2">
                    {product.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm font-medium text-foreground/80">
                        <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6 font-display">Our Services</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Beyond just supplying products, Arliven Medizyne acts as your comprehensive partner in the pharmaceutical supply chain. We handle the complexities so you can focus on healthcare delivery.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
               {/* abstract pharma factory technology */}
              <img 
                src="https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&q=80&auto=format&fit=crop" 
                alt="Pharma Manufacturing" 
                className="rounded-3xl shadow-2xl"
              />
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
