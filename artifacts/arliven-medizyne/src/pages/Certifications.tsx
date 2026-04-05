import { FadeIn } from "@/components/FadeIn";
import { ShieldCheck, FileCheck, Award, Globe2, Building2, ClipboardCheck, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const certifications = [
  {
    icon: Globe2,
    code: "IEC",
    title: "Import Export Code",
    badge: "DGFT Registered",
    color: "#2F80ED",
    image: "cert-ie-license.jpg",
    desc: "Registered with the Directorate General of Foreign Trade (DGFT) of India. Our IEC registration authorizes Arliven Medizyne to legally conduct pharmaceutical import and export operations worldwide.",
  },
  {
    icon: FileCheck,
    code: "GST",
    title: "GST Registration",
    badge: "Tax Compliant",
    color: "#1a9e6e",
    image: "cert-gst.jpg",
    desc: "Fully GST-compliant business with valid Goods and Services Tax registration, ensuring transparent and lawful financial transactions across all domestic and international operations.",
  },
  {
    icon: Building2,
    code: "CIN",
    title: "Company Registration",
    badge: "MCA Registered",
    color: "#7c3aed",
    image: "cert-registration.jpg",
    desc: "Arliven Medizyne Pvt Ltd is a legally registered private limited company under the Companies Act of India, ensuring full corporate accountability and legal compliance.",
  },
  {
    icon: ShieldCheck,
    code: "WHO-GMP",
    title: "WHO-GMP Manufacturers",
    badge: "Quality Assured",
    color: "#2F80ED",
    image: "cert-badge-whogmp.png",
    desc: "We source exclusively from WHO-GMP certified manufacturing partners, guaranteeing the highest quality and safety standards for every product.",
  },
  {
    icon: Award,
    code: "ISO",
    title: "ISO Certification",
    badge: "ISO Standard",
    color: "#d97706",
    image: "cert-iso-new.jpg",
    desc: "Our manufacturing partners hold ISO certification reflecting adherence to internationally recognized quality management standards for pharmaceutical production and supply.",
  },
  {
    icon: ClipboardCheck,
    code: "COA",
    title: "Certificate of Analysis",
    badge: "Product Verified",
    color: "#0891b2",
    image: "cert-coa.jpg",
    desc: "Every product shipment is accompanied by a Certificate of Analysis (COA) confirming that products meet the required pharmaceutical quality specifications and international standards.",
  },
];

const qualityPillars = ["Quality", "Compliance", "Reliability", "Transparency"];

const statsRow = [
  { label: "WHO-GMP Partners", value: "Certified" },
  { label: "Quality Checks",    value: "100%" },
  { label: "Export Compliance", value: "Full" },
  { label: "COA Provided",      value: "Every Lot" },
];

export default function Certifications() {
  return (
    <main className="w-full pt-20">

      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-center"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/certifications-banner.png)`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 py-20">
          <FadeIn>
            <p className="text-[#2F80ED] font-semibold tracking-widest uppercase text-xs mb-4">Compliance & Trust</p>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-5 text-white max-w-3xl leading-tight">
              Certifications & Compliance
            </h1>
            <p className="text-base text-gray-300 max-w-2xl leading-relaxed">
              Our credentials and manufacturing partner certifications that underpin our commitment to quality, regulatory safety, and professional pharmaceutical supply.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 bg-[#F4F8FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="text-center mb-14">
            <h2 className="text-xl lg:text-2xl font-bold text-[#1D1D1F] mb-4">Our Credentials</h2>
            <p className="text-[#6E6E73] text-base max-w-2xl mx-auto">
              Every certificate and compliance credential represents our promise — reliable, safe, and legally compliant pharmaceutical supply.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 340, damping: 26, mass: 0.8 }}
                  className="bg-white rounded-2xl p-8 border border-[#2F80ED]/10 shadow-[0_2px_12px_rgba(47,128,237,0.07)] h-full flex flex-col"
                >
                  <div className="flex items-start justify-between mb-6">
                    {/* Premium badge logo area */}
                    {cert.image ? (
                      <div className="w-20 h-20 rounded-2xl overflow-hidden border border-[#2F80ED]/15 shadow-md shrink-0 bg-white flex items-center justify-center p-2">
                        <img
                          src={`${import.meta.env.BASE_URL}images/${cert.image}`}
                          alt={cert.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div
                        className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center shrink-0 border shadow-md"
                        style={{ background: `linear-gradient(135deg, ${cert.color}18, ${cert.color}30)`, borderColor: `${cert.color}25` }}
                      >
                        <cert.icon className="w-7 h-7 mb-1" style={{ color: cert.color }} />
                        <span className="text-[9px] font-black tracking-widest uppercase" style={{ color: cert.color }}>{cert.code}</span>
                      </div>
                    )}
                    <span className="text-xs font-bold bg-[#EEF4FF] text-[#2F80ED] px-3 py-1.5 rounded-full border border-[#2F80ED]/20 ml-3 shrink-0">
                      {cert.badge}
                    </span>
                  </div>
                  <p className="text-xs font-black tracking-widest text-[#2F80ED] uppercase mb-2">{cert.code}</p>
                  <h3 className="text-base font-bold text-[#1D1D1F] mb-4">{cert.title}</h3>
                  <p className="text-[#6E6E73] text-sm leading-relaxed flex-grow">{cert.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-16 bg-white border-t border-[#2F80ED]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="bg-[#EEF4FF] rounded-3xl p-10 border border-[#2F80ED]/15">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <h2 className="text-xl lg:text-2xl font-bold text-[#1D1D1F] mb-5">Commitment to Quality</h2>
                <p className="text-[#6E6E73] text-base leading-relaxed mb-6">
                  We work exclusively with trusted and certified manufacturers to ensure reliable pharmaceutical supply for domestic and international markets while maintaining professional sourcing and the highest quality standards in every transaction.
                </p>
                <div className="flex flex-wrap gap-3">
                  {qualityPillars.map((tag, i) => (
                    <span key={i} className="bg-[#2F80ED] text-white text-xs font-bold px-4 py-2 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {statsRow.map((stat, i) => (
                    <div key={i} className="bg-white rounded-xl p-5 border border-[#2F80ED]/10 text-center shadow-sm">
                      <div className="text-lg font-bold text-[#2F80ED] mb-1">{stat.value}</div>
                      <div className="text-xs font-semibold text-[#6E6E73] uppercase tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-14 bg-[#2F80ED]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-2">Industries We Serve</h2>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-4">
            {["Hospitals", "Distributors", "Pharmacies", "Healthcare Institutions", "Global Buyers"].map((ind, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="bg-white/10 border border-white/20 rounded-xl px-6 py-3 text-white font-semibold text-sm">
                  {ind}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F4F8FF] border-t border-[#2F80ED]/10 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-xl lg:text-2xl font-bold text-[#1D1D1F] mb-5">Need Compliance Documentation?</h2>
            <p className="text-[#6E6E73] text-base mb-8 leading-relaxed">
              Contact us for product-specific COA, FSC, or regulatory documentation required for your import market or institutional buyer.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-9 py-3 bg-[#2F80ED] text-white font-bold text-sm rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200"
            >
              Request Documents <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
