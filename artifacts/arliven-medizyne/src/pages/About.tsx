import { FadeIn } from "@/components/FadeIn";

import { CheckCircle2, Target, Eye, ShieldCheck, HeartHandshake, Globe } from "lucide-react";

export default function About() {
  return (
    <main className="w-full pt-20">

      {/* Page Banner — office photo */}
      <section className="relative overflow-hidden border-b border-[#2F80ED]/15" style={{ minHeight: "340px" }}>
        <div
          className="absolute inset-0 page-banner-bg bg-[#111]"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/about-office.png)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-16 flex flex-col justify-center" style={{ minHeight: "340px" }}>
          <FadeIn>
            <p className="text-[#2F80ED] font-semibold tracking-widest uppercase text-xs mb-2">Company Profile</p>
            <h1 className="text-base md:text-lg lg:text-xl font-semibold mb-3 text-white leading-tight">
              About Arliven Medizyne
            </h1>
            <p className="text-sm lg:text-base text-gray-200 max-w-lg leading-relaxed">
              A trusted name in pharmaceutical exports, driven by quality and an unwavering commitment to global health.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-xl lg:text-2xl font-bold mb-6 text-[#1D1D1F] leading-tight">Our Journey &amp; Purpose</h2>
              <div className="space-y-5 text-base text-[#6E6E73] leading-relaxed mb-8">
                <p>
                  Arliven Medizyne Pvt Ltd is an India-based pharmaceutical merchant exporter and domestic supplier committed to delivering high-quality pharmaceutical and surgical products to domestic and global healthcare markets.
                </p>
                <p>
                  We collaborate with trusted and certified manufacturing partners to ensure quality, reliability, and consistent supply for hospitals, distributors, and international buyers.
                </p>
                <p>
                  Our mission is to build long-term pharmaceutical partnerships by maintaining professionalism, transparency, and ethical business practices.
                </p>
                <p>
                  Reliable Pharmaceutical Merchant Exporter &amp; Domestic Supplier from India delivering quality pharmaceutical and surgical products to hospitals, distributors, institutions, and global buyers.
                </p>
                <p>
                  We connect trusted Indian pharmaceutical manufacturers with domestic and international markets through professional sourcing, transparent communication, and timely supply.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  "Domestic Pharmaceutical Supply",
                  "International Pharmaceutical Export",
                  "Bulk & Institutional Supply",
                  "Trusted Pharma Business Partner",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2F80ED] shrink-0" />
                    <span className="text-[#1D1D1F] font-semibold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
              <div className="relative">
                <div className="absolute -inset-3 bg-[#EAF2FF] rounded-2xl transform -rotate-2" />
                <img
                  src={`${import.meta.env.BASE_URL}images/pharma-factory.png`}
                  alt="Arliven pharmaceutical facility"
                  loading="lazy"
                  className="relative w-full h-[420px] object-cover shadow-xl rounded-2xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F4F8FF] border-y border-[#2F80ED]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="text-center mb-14">
            <h2 className="text-xl lg:text-2xl font-bold text-[#1D1D1F]">Our Mission &amp; Vision</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn>
              <div className="bg-[#EEF4FF] p-10 rounded-2xl shadow-sm border border-[#2F80ED]/10 cursor-default lift-card">
                <div className="w-14 h-14 bg-[#EAF2FF] rounded-xl flex items-center justify-center mb-7 border border-[#2F80ED]/15">
                  <Target className="w-7 h-7 text-[#2F80ED]" />
                </div>
                <h3 className="text-lg font-bold mb-4 text-[#1D1D1F]">Our Mission</h3>
                <p className="text-[#6E6E73] text-lg leading-relaxed">
                  To deliver reliable pharmaceutical and surgical products to domestic and international markets with professionalism and quality focus.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-[#EEF4FF] p-10 rounded-2xl shadow-sm border border-[#2F80ED]/10 cursor-default lift-card">
                <div className="w-14 h-14 bg-[#EAF2FF] rounded-xl flex items-center justify-center mb-7 border border-[#2F80ED]/15">
                  <Eye className="w-7 h-7 text-[#2F80ED]" />
                </div>
                <h3 className="text-lg font-bold mb-4 text-[#1D1D1F]">Our Vision</h3>
                <p className="text-[#6E6E73] text-lg leading-relaxed">
                  To become a trusted pharmaceutical supply and export company globally.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <FadeIn>
            <h2 className="text-xl lg:text-2xl font-bold mb-4 text-[#1D1D1F]">Our Leadership</h2>
            <p className="text-lg text-[#6E6E73] mb-14 max-w-2xl mx-auto">
              Guided by industry veterans dedicated to excellence in international pharmaceutical trade.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { initials: "GK", name: "Ganesh A Kute", role: "Founder & CEO", bio: "Ganesh A Kute leads Arliven Medizyne Pvt Ltd with a vision to build a strong pharmaceutical supply and export company connecting Indian manufacturers with domestic and global markets. Committed to delivering reliable healthcare products through professionalism, trust, and long-term business relationships." },
              { initials: "NC", name: "Nitin B Choure", role: "Director", bio: "Nitin B Choure supports the company's operations and business development by strengthening domestic supply and international business coordination. He focuses on building strong partnerships and ensuring smooth pharmaceutical supply operations." },
            ].map((person, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[#EEF4FF] p-8 rounded-2xl text-center border border-[#2F80ED]/10 cursor-default lift-card">
                  <div className="w-24 h-24 rounded-full bg-[#2F80ED] mx-auto mb-6 flex items-center justify-center text-white border-4 border-white shadow-lg">
                    <span className="text-xl font-bold">{person.initials}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-[#1D1D1F]">{person.name}</h3>
                  <p className="text-[#2F80ED] font-semibold text-sm mb-4">{person.role}</p>
                  <p className="text-[#6E6E73] text-sm leading-relaxed">{person.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 bg-white border-t border-[#2F80ED]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="text-center mb-14">
            <p className="text-[#2F80ED] font-semibold tracking-widest uppercase text-xs mb-3">How We Operate</p>
            <h2 className="text-xl lg:text-2xl font-bold text-[#1D1D1F] mb-4">Our Business Model</h2>
            <p className="text-[#6E6E73] text-lg max-w-2xl mx-auto">Connecting trusted Indian manufacturers with domestic and international healthcare markets.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Pharmaceutical Merchant Exporter", desc: "Facilitating professional export of quality pharmaceutical products to global markets with full documentation and compliance." },
              { num: "02", title: "Domestic Supply Partner",          desc: "Reliable supply of pharmaceutical and surgical products to hospitals, distributors, and institutions across India." },
              { num: "03", title: "International Pharma Export",      desc: "End-to-end export solutions covering sourcing, quotation, documentation, packing, shipping, and delivery." },
              { num: "04", title: "Bulk Supply Solutions",            desc: "Large-volume pharmaceutical supply tailored for institutional buyers, distributors, and global healthcare organizations." },
            ].map((model, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-[#EEF4FF] rounded-2xl p-7 border border-[#2F80ED]/10 h-full lift-card shadow-[0_2px_12px_rgba(47,128,237,0.07)]">
                  <div className="text-3xl font-bold text-[#2F80ED]/15 mb-4 leading-none">{model.num}</div>
                  <h3 className="text-base font-semibold text-[#1D1D1F] mb-3">{model.title}</h3>
                  <p className="text-[#6E6E73] text-sm leading-relaxed">{model.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-[#2F80ED]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {["WHO-GMP Compliant", "ISO Certified", "Export Ready", "Quality Assured"].map((badge, i) => (
              <div key={i} className="flex items-center gap-3 text-white font-semibold text-base">
                <ShieldCheck className="w-6 h-6 text-white/80" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="text-center mb-14">
            <h2 className="text-xl lg:text-2xl font-bold mb-4 text-[#1D1D1F]">Our Core Values</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "Uncompromising Quality", desc: "Zero tolerance for subpar products. We ensure WHO-GMP compliance at every step of the supply chain." },
              { icon: HeartHandshake, title: "Integrity & Transparency", desc: "Honest dealings, clear documentation, and ethical business practices in every transaction." },
              { icon: Globe, title: "Customer Centricity", desc: "Tailoring our export services to meet the specific regulatory and market needs of each client." },
            ].map((value, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="text-center p-8 bg-[#EEF4FF] rounded-2xl border border-[#2F80ED]/10 cursor-default lift-card">
                  <div className="w-16 h-16 bg-[#EAF2FF] mx-auto rounded-2xl flex items-center justify-center mb-6 border border-[#2F80ED]/15">
                    <value.icon className="w-8 h-8 text-[#2F80ED]" />
                  </div>
                  <h3 className="text-base font-semibold mb-3 text-[#1D1D1F]">{value.title}</h3>
                  <p className="text-[#6E6E73] text-base leading-relaxed">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
