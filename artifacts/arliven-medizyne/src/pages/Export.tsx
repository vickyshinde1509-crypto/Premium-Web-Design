import { FadeIn } from "@/components/FadeIn";
import { Globe, FileText, Package, Ship, CheckSquare, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

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
        className="relative min-h-[55vh] flex items-center"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/pharma-export.png)`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#111]/75 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 py-20">
          <FadeIn>
            <p className="text-[#2F80ED] font-semibold tracking-widest uppercase text-xs mb-4">Global Logistics</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 text-white max-w-3xl leading-tight">
              Seamless Export Operations
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Connecting Indian pharmaceutical manufacturing excellence to healthcare providers worldwide through robust, compliant supply chains.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Export Process Flow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-[#1D1D1F]">Our Export Process</h2>
            <p className="text-[#6E6E73] text-lg">A systematic, transparent approach to guarantee reliable delivery.</p>
          </FadeIn>

          <div className="relative mt-16">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-[#2F80ED]/15" />
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, idx) => (
                <FadeIn key={idx} delay={idx * 0.15} className="text-center relative">
                  <div className="group w-24 h-24 mx-auto bg-[#EEF4FF] border-4 border-[#EEF4FF] shadow-xl rounded-2xl flex items-center justify-center mb-6 relative hover:bg-[#2F80ED] active:bg-[#2F80ED] hover:border-[#2F80ED] active:border-[#2F80ED] touch-manipulation transition-colors duration-100 cursor-pointer lift-card">
                    <step.icon className="w-9 h-9 text-[#2F80ED] group-hover:text-white group-hover:scale-110 group-active:text-white group-active:scale-110 transition-all duration-100" />
                    <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#2F80ED] text-white flex items-center justify-center font-black text-xs shadow-lg">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-black mb-2 text-[#1D1D1F]">{step.title}</h3>
                  <p className="text-sm text-[#6E6E73] leading-relaxed">{step.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations & Support */}
      <section className="py-20 bg-[#F4F8FF] border-y border-[#2F80ED]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeIn>
              <h2 className="text-3xl font-black mb-8 text-[#1D1D1F]">Global Destinations</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Asia", "Africa", "Middle East", "Southeast Asia", "CIS Countries", "Latin America"].map((region, i) => (
                  <div key={i} className="group bg-[#EEF4FF] rounded-xl px-5 py-4 border border-[#2F80ED]/10 flex items-center gap-3 hover:bg-[#2F80ED] active:bg-[#2F80ED] hover:border-[#2F80ED] active:border-[#2F80ED] touch-manipulation transition-colors duration-100 shadow-sm cursor-pointer lift-card">
                    <Globe className="w-5 h-5 text-[#2F80ED] shrink-0 group-hover:text-white group-active:text-white transition-colors duration-100" />
                    <span className="text-[#1D1D1F] font-semibold text-sm group-hover:text-white group-active:text-white transition-colors duration-100">{region}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-[#EEF4FF] rounded-2xl p-8 border border-[#2F80ED]/10 shadow-sm">
                <h2 className="text-2xl font-black mb-5 text-[#1D1D1F]">Export Support</h2>
                <p className="text-[#6E6E73] text-base mb-7 leading-relaxed">
                  We provide end-to-end support for all regulatory and logistical hurdles in international pharmaceutical trade.
                </p>
                <ul className="space-y-4">
                  {[
                    "Country-specific regulatory compliance",
                    "CTD/eCTD dossiers for product registration",
                    "Temperature-controlled supply chain (Cold Chain)",
                    "Certificate of Analysis (COA) & FSC provisions",
                    "Consolidation of diverse product categories",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EAF2FF] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckSquare className="w-3 h-3 text-[#2F80ED]" />
                      </div>
                      <span className="text-[#1D1D1F] font-medium text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#2F80ED] text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-black mb-5">Start Your Export Journey</h2>
            <p className="text-lg text-white/85 mb-10 leading-relaxed">
              Partner with Arliven Medizyne for reliable, compliant, and timely pharmaceutical supplies to any destination.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-9 py-3 bg-white text-[#2F80ED] font-bold text-sm rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Contact Export Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
