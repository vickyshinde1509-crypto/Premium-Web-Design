import { FadeIn } from "@/components/FadeIn";
import { Globe, FileText, Package, Ship, CheckSquare, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const steps = [
  { icon: CheckSquare, title: "Requirement Analysis", desc: "Understanding client needs, regulatory requirements of the destination country, and product specifications." },
  { icon: FileText, title: "Sourcing & Documentation", desc: "Procuring from WHO-GMP units and preparing rigorous export documentation (COA, FSC, Dossiers)." },
  { icon: Package, title: "Custom Packaging", desc: "Ensuring packaging meets international transit standards and country-specific labeling laws." },
  { icon: Ship, title: "Secure Logistics", desc: "Partnering with trusted freight forwarders for secure, temperature-controlled transit worldwide." },
];

export default function Export() {
  return (
    <main className="w-full pt-20">

      {/* Hero with background image */}
      <section
        className="relative min-h-[60vh] flex items-center"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/pharma-export.png)`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#111]/80 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 py-24">
          <FadeIn>
            <p className="text-[#0071c5] font-bold tracking-widest uppercase text-sm mb-4">Global Logistics</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-7 text-white max-w-3xl leading-tight">
              Seamless Export Operations
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl leading-relaxed">
              Connecting Indian pharmaceutical manufacturing excellence to healthcare providers worldwide through robust, compliant supply chains.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Export Process Flow */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-5 text-gray-900">Our Export Process</h2>
            <p className="text-gray-600 text-xl">A systematic, transparent approach to guarantee reliable delivery.</p>
          </FadeIn>

          <div className="relative mt-20">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200" />
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, idx) => (
                <FadeIn key={idx} delay={idx * 0.15} className="text-center relative">
                  <div className="w-24 h-24 mx-auto bg-white border-4 border-gray-100 shadow-xl flex items-center justify-center mb-7 relative group hover:border-[#0071c5] transition-colors">
                    <step.icon className="w-10 h-10 text-[#0071c5] group-hover:scale-110 transition-transform" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-black text-sm shadow-lg">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-black mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{step.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations & Support */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn>
              <h2 className="text-4xl font-black mb-10 text-white">Global Destinations</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {["Asia", "Africa", "Middle East", "Southeast Asia", "CIS Countries", "Latin America"].map((region, i) => (
                  <div key={i} className="bg-[#222] p-6 border border-white/10 flex items-center gap-4 hover:border-[#0071c5]/50 transition-colors">
                    <Globe className="w-6 h-6 text-[#0071c5] opacity-70 shrink-0" />
                    <span className="text-white font-bold text-lg">{region}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-[#222] p-10 border border-white/10">
                <h2 className="text-3xl font-black mb-6 text-white">Export Support</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  We provide end-to-end support for all regulatory and logistical hurdles in international pharmaceutical trade.
                </p>
                <ul className="space-y-5">
                  {[
                    "Country-specific regulatory compliance",
                    "CTD/eCTD dossiers for product registration",
                    "Temperature-controlled supply chain (Cold Chain)",
                    "Certificate of Analysis (COA) & FSC provisions",
                    "Consolidation of diverse product categories",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckSquare className="w-6 h-6 text-[#0071c5] shrink-0 mt-0.5" />
                      <span className="text-gray-300 font-semibold text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0071c5] text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl lg:text-5xl font-black mb-7">Start Your Export Journey</h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Partner with Arliven Medizyne for reliable, compliant, and timely pharmaceutical supplies to any destination.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gray-900 text-white font-black text-base uppercase tracking-wider hover:bg-black transition-colors"
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
