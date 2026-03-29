import { FadeIn } from "@/components/FadeIn";
import { Globe, FileText, Package, Ship, CheckSquare, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const steps = [
  { icon: CheckSquare, title: "Requirement Analysis", desc: "Understanding client needs, regulatory requirements of the destination country, and product specifications." },
  { icon: FileText, title: "Sourcing & Docs", desc: "Procuring from WHO-GMP units and preparing rigorous export documentation (COA, FSC, Dossiers)." },
  { icon: Package, title: "Custom Packaging", desc: "Ensuring packaging meets international transit standards and country-specific labeling laws." },
  { icon: Ship, title: "Secure Logistics", desc: "Partnering with trusted freight forwarders for secure, temperature-controlled transit." }
];

export default function Export() {
  return (
    <main className="w-full pt-20 bg-[#1a1a1a]">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center border-b border-white/10">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/pharma-export.png)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/80 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <FadeIn>
            <h4 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Global Logistics</h4>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white max-w-2xl">
              Seamless Export Operations
            </h1>
            <p className="text-xl text-gray-300 max-w-xl">
              Connecting Indian pharmaceutical manufacturing excellence to healthcare providers worldwide through robust, compliant supply chains.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Export Process Flow */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">Our Export Process</h2>
            <p className="text-gray-600 text-lg">A systematic, transparent approach to guarantee reliable delivery.</p>
          </FadeIn>

          <div className="relative mt-20">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200" />
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, idx) => (
                <FadeIn key={idx} delay={idx * 0.15} className="text-center relative">
                  <div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-gray-100 shadow-xl flex items-center justify-center mb-6 relative group hover:border-primary transition-colors">
                    <step.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center font-bold text-sm shadow-lg">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#1a1a1a]">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid & Support */}
      <section className="py-24 bg-[#1a1a1a] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8 text-white">Global Destinations</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {["Asia", "Africa", "Middle East", "Southeast Asia", "CIS Countries", "Latin America"].map((region, i) => (
                  <div key={i} className="bg-[#222] p-6 rounded border border-white/5 flex items-center gap-4 hover:border-primary/50 transition-colors">
                    <Globe className="w-6 h-6 text-primary opacity-70" />
                    <span className="text-white font-bold">{region}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-[#222] p-8 rounded border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white">Export Support & Compliance</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Navigating international trade laws requires expertise. We provide end-to-end support for all regulatory and logistical hurdles.
                </p>
                <ul className="space-y-4">
                  {[
                    "Country-specific regulatory compliance",
                    "CTD/eCTD dossiers for product registration",
                    "Temperature-controlled supply chain (Cold Chain)",
                    "Consolidation of diverse product categories",
                    "Certificate of Analysis (COA) & FSC provisions"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckSquare className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Import Journey</h2>
            <p className="text-xl text-white/90 mb-8">Partner with Arliven Medizyne for reliable, compliant, and timely pharmaceutical supplies.</p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded bg-[#1a1a1a] text-white font-bold text-lg hover:bg-black transition-colors"
            >
              Contact Export Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
