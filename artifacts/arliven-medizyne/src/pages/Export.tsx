import { FadeIn } from "@/components/FadeIn";

import { Globe, FileText, Package, Ship, CheckSquare, ArrowRight, MessageSquare, ClipboardList, BadgeCheck, Box } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const steps = [
  { icon: MessageSquare, title: "Buyer Inquiry",      desc: "Receiving and understanding the buyer's product requirements, market, and quantity details." },
  { icon: Package,       title: "Product Selection",  desc: "Identifying suitable products from our certified manufacturing network to match buyer specifications." },
  { icon: ClipboardList, title: "Quotation",          desc: "Providing transparent and competitive pricing with clear quotation including all applicable costs." },
  { icon: FileText,      title: "Documentation",      desc: "Preparing all export documents — COA, FSC, invoices, and regulatory compliance papers." },
  { icon: Box,           title: "Packing",            desc: "Custom packaging meeting international transit standards and destination-country labelling requirements." },
  { icon: Ship,          title: "Shipping",           desc: "Partnering with trusted freight forwarders for secure, temperature-controlled transit worldwide." },
  { icon: BadgeCheck,    title: "Delivery",           desc: "Confirmed delivery at destination with complete documentation handover and post-shipment support." },
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
            <p className="text-[#2F80ED] font-semibold tracking-widest uppercase text-xs mb-4">International Export</p>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-5 text-white max-w-3xl leading-tight">
              Pharmaceutical Export
            </h1>
            <p className="text-base text-gray-300 max-w-2xl leading-relaxed">
              Arliven Medizyne Pvt Ltd provides professional pharmaceutical export solutions to global markets with proper documentation and reliable supply.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Export Process Flow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="text-center mb-14">
            <h2 className="text-xl lg:text-2xl font-bold mb-4 text-[#1D1D1F]">Our Export Process</h2>
            <p className="text-[#6E6E73] text-lg">A systematic, transparent approach to guarantee reliable delivery.</p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.09} className="relative">
                <div className="bg-[#EEF4FF] rounded-2xl p-6 border border-[#2F80ED]/10 h-full shadow-[0_2px_12px_rgba(47,128,237,0.07)] lift-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#2F80ED] shadow-sm border border-[#2F80ED]/15 shrink-0">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-bold text-[#2F80ED]/15 leading-none">{String(idx + 1).padStart(2, "0")}</div>
                  </div>
                  <h3 className="text-sm font-semibold mb-2 text-[#1D1D1F]">{step.title}</h3>
                  <p className="text-sm text-[#6E6E73] leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations & Support */}
      <section className="py-20 bg-[#F4F8FF] border-y border-[#2F80ED]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeIn>
              <h2 className="text-xl font-bold mb-8 text-[#1D1D1F]">Global Destinations</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Asia", "Africa", "Middle East", "CIS Countries", "Global Markets", "Latin America"].map((region, i) => (
                  <FadeIn key={i} delay={i * 0.07}>
                    <div className="bg-[#EEF4FF] rounded-xl px-5 py-4 border border-[#2F80ED]/10 flex items-center gap-3 shadow-sm lift-card">
                      <Globe className="w-5 h-5 text-[#2F80ED] shrink-0" />
                      <span className="text-[#1D1D1F] font-semibold text-sm">{region}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-[#EEF4FF] rounded-2xl p-8 border border-[#2F80ED]/10 shadow-sm">
                <h2 className="text-lg font-semibold mb-5 text-[#1D1D1F]">Export Support</h2>
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
      <section className="relative py-24 text-white text-center overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}images/export-journey-cta.png`}
          alt="International pharmaceutical export"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a4fa0]/88 via-[#2F80ED]/75 to-[#1a3a6e]/90" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-xl lg:text-2xl font-bold mb-5 drop-shadow-lg">Start Your Export Journey</h2>
            <p className="text-base text-white/90 mb-10 leading-relaxed drop-shadow">
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
