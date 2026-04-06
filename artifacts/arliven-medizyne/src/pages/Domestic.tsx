import { FadeIn } from "@/components/FadeIn";
import { Hospital, Package, Pill, Building2, Users, CheckCircle2, ArrowRight, Truck } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const supplyTargets = [
  { icon: Hospital,   title: "Hospitals",                  desc: "Reliable pharmaceutical and surgical supply to hospitals and healthcare centres across India." },
  { icon: Package,    title: "Distributors",               desc: "Bulk pharmaceutical supply to domestic distributors with consistent stock availability." },
  { icon: Pill,       title: "Pharmacies & Medical Stores",desc: "Regular supply to retail pharmacies and medical stores with competitive pricing." },
  { icon: Building2,  title: "Healthcare Institutions",    desc: "Dedicated supply solutions for clinics, diagnostic labs, and healthcare institutions." },
  { icon: Users,      title: "Bulk Institutional Buyers",  desc: "Large-volume orders for corporate healthcare organisations and government institutions." },
];

const domesticServices = [
  { num: "01", title: "Bulk Supply",        desc: "Large-volume pharmaceutical supply with competitive pricing and consistent product availability." },
  { num: "02", title: "Regular Supply",     desc: "Scheduled and routine supply cycles to ensure zero stock-outs for your operations." },
  { num: "03", title: "Institution Supply", desc: "Tailored supply programmes designed for hospitals, clinics, and healthcare organisations." },
  { num: "04", title: "Distributor Supply", desc: "Professional distributor partnerships with flexible terms, delivery support and documentation." },
];

const whyChoose = [
  "Trusted Manufacturing Network",
  "Quality Assurance Focus",
  "Professional Business Approach",
  "Competitive Pricing",
  "Domestic Market Expertise",
  "Timely Delivery System",
  "Transparent Communication",
  "Long-Term Business Commitment",
];

const productRange = [
  "Tablets", "Capsules", "Syrups", "Injections",
  "Surgical Products", "Medical Consumables",
];

export default function Domestic() {
  return (
    <main className="w-full pt-20">

      {/* Hero */}
      <section
        className="relative min-h-[55vh] flex items-center page-banner-bg bg-[#111]"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/pharma-factory.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#111]/75 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 py-20">
          <FadeIn>
            <p className="text-[#2F80ED] font-semibold tracking-widest uppercase text-xs mb-4">India Domestic Supply</p>
            <h1 className="text-base md:text-lg lg:text-xl font-semibold mb-5 text-white max-w-3xl leading-tight">
              Reliable Pharmaceutical Supply Across India
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
              Arliven Medizyne provides trusted pharmaceutical and surgical product supply to hospitals, distributors, pharmacies, and healthcare institutions throughout India.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#2F80ED] text-white font-bold text-sm rounded-xl hover:bg-blue-600 transition-colors shadow-lg"
              >
                Get Domestic Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919049175132"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 border-2 border-white/50 text-white font-bold text-sm rounded-xl hover:bg-white/10 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* We Supply To */}
      <section className="py-20 bg-[#F4F8FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="text-center mb-14">
            <p className="text-[#2F80ED] font-semibold tracking-widest uppercase text-xs mb-3">Our Customers</p>
            <h2 className="text-xl lg:text-2xl font-bold text-[#1D1D1F] mb-4">We Supply To</h2>
            <p className="text-[#6E6E73] text-lg max-w-2xl mx-auto">Serving the full spectrum of domestic healthcare supply needs with professionalism and reliability.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supplyTargets.map((target, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 340, damping: 26, mass: 0.8 }}
                  className="bg-[#EEF4FF] rounded-2xl p-7 border border-[#2F80ED]/10 shadow-[0_2px_12px_rgba(47,128,237,0.07)] h-full"
                >
                  <div className="w-14 h-14 bg-[#EAF2FF] rounded-2xl flex items-center justify-center text-[#2F80ED] mb-5 border border-[#2F80ED]/15">
                    <target.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#1D1D1F] mb-3">{target.title}</h3>
                  <p className="text-[#6E6E73] text-sm leading-relaxed">{target.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Domestic Services */}
      <section className="py-20 bg-white border-t border-[#2F80ED]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="text-center mb-14">
            <p className="text-[#2F80ED] font-semibold tracking-widest uppercase text-xs mb-3">What We Offer</p>
            <h2 className="text-xl lg:text-2xl font-bold text-[#1D1D1F] mb-4">Domestic Supply Services</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {domesticServices.map((s, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-[#F4F8FF] rounded-2xl p-7 border border-[#2F80ED]/10 h-full lift-card">
                  <div className="text-2xl font-bold text-[#2F80ED]/20 mb-4 leading-none">{s.num}</div>
                  <h3 className="text-sm font-semibold text-[#1D1D1F] mb-3">{s.title}</h3>
                  <p className="text-[#6E6E73] text-sm leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-14 bg-[#2F80ED]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-2">Products We Supply</h2>
            <p className="text-white/75 text-sm">Sourced from certified manufacturing partners</p>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-3">
            {productRange.map((p, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white font-semibold text-sm">
                  {p}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-[#F4F8FF] border-t border-[#2F80ED]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-[#2F80ED] font-semibold tracking-widest uppercase text-xs mb-4">Why Partner With Us</p>
              <h2 className="text-xl lg:text-2xl font-bold text-[#1D1D1F] mb-8 leading-tight">
                Your Trusted<br />Domestic Pharma Partner
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {whyChoose.map((point, i) => (
                  <FadeIn key={i} delay={i * 0.06}>
                    <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-[#2F80ED]/10 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#2F80ED] shrink-0" />
                      <span className="text-sm font-semibold text-[#1D1D1F]">{point}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.15}>
              <img
                src={`${import.meta.env.BASE_URL}images/domestic-all-products.png`}
                alt="Domestic pharmaceutical supply India"
                loading="lazy"
                className="w-full h-[420px] object-cover shadow-xl rounded-2xl"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-[#2F80ED]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <Truck className="w-12 h-12 text-[#2F80ED] mx-auto mb-6 opacity-80" />
            <h2 className="text-xl lg:text-2xl font-bold text-[#1D1D1F] mb-5">Start Your Domestic Supply Partnership</h2>
            <p className="text-[#6E6E73] text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Contact us today for reliable pharmaceutical supply to your hospital, pharmacy, or distribution network anywhere in India.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#2F80ED] text-white font-bold text-sm rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200"
              >
                Contact Supply Team
              </Link>
              <a
                href="https://wa.me/919049175132"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 border-2 border-[#2F80ED] text-[#2F80ED] font-bold text-sm rounded-xl hover:bg-[#2F80ED] hover:text-white transition-colors"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
