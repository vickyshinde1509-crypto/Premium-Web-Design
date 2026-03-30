import { FadeIn } from "@/components/FadeIn";
import { CheckCircle2, Target, Eye, ShieldCheck, HeartHandshake, Globe } from "lucide-react";

export default function About() {
  return (
    <main className="w-full pt-20">

      {/* Page Banner — office photo */}
      <section className="relative overflow-hidden border-b border-[#2F80ED]/15" style={{ minHeight: "340px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/about-office.png)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-16 flex flex-col justify-center" style={{ minHeight: "340px" }}>
          <FadeIn>
            <p className="text-[#2F80ED] font-semibold tracking-widest uppercase text-xs mb-2">Company Profile</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 text-white leading-tight">
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
              <h2 className="text-3xl lg:text-4xl font-black mb-6 text-[#1D1D1F] leading-tight">Our Journey<br />&amp; Purpose</h2>
              <div className="space-y-5 text-lg text-[#6E6E73] leading-relaxed">
                <p>
                  Founded in Maharashtra, India, Arliven Medizyne Pvt Ltd emerged with a singular focus: to make high-quality, life-saving pharmaceutical products accessible to markets worldwide.
                </p>
                <p>
                  As a specialized Merchant Exporter, we don't just ship products; we build healthcare bridges. We partner exclusively with WHO-GMP certified manufacturers to ensure that every tablet, capsule, and surgical tool we export meets the highest international safety and efficacy standards.
                </p>
                <p>
                  Our expertise spans the entire export lifecycle — from rigorous vendor auditing and regulatory documentation to customized packaging and secure logistics.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative">
                <div className="absolute -inset-3 bg-[#EAF2FF] rounded-2xl transform -rotate-2" />
                <img
                  src={`${import.meta.env.BASE_URL}images/pharma-factory.png`}
                  alt="Arliven pharmaceutical facility"
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
            <h2 className="text-3xl lg:text-4xl font-black text-[#1D1D1F]">Our Mission &amp; Vision</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn>
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-[#2F80ED]/12 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-[#EAF2FF] rounded-xl flex items-center justify-center mb-7 border border-[#2F80ED]/15">
                  <Target className="w-7 h-7 text-[#2F80ED]" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-[#1D1D1F]">Our Mission</h3>
                <p className="text-[#6E6E73] text-lg leading-relaxed">
                  To consistently supply safe, effective, and affordable pharmaceutical products globally by maintaining robust supply chains, adhering to stringent quality compliances, and fostering enduring partnerships.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-[#2F80ED]/12 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-[#EAF2FF] rounded-xl flex items-center justify-center mb-7 border border-[#2F80ED]/15">
                  <Eye className="w-7 h-7 text-[#2F80ED]" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-[#1D1D1F]">Our Vision</h3>
                <p className="text-[#6E6E73] text-lg leading-relaxed">
                  To be recognized globally as the most reliable and transparent pharmaceutical merchant exporter from India, contributing significantly to a healthier world.
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
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-[#1D1D1F]">Our Leadership</h2>
            <p className="text-lg text-[#6E6E73] mb-14 max-w-2xl mx-auto">
              Guided by industry veterans dedicated to excellence in international pharmaceutical trade.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { initials: "GK", name: "Ganesh A Kute", role: "Founder & CEO", bio: "Steering Arliven Medizyne with strategic vision and a deep commitment to global healthcare accessibility and pharmaceutical excellence." },
              { initials: "NC", name: "Nitin B Choure", role: "Director", bio: "Ensuring operational excellence, rigorous quality compliance, and robust international partnerships across all markets." },
            ].map((person, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[#F4F8FF] p-8 rounded-2xl text-center hover:shadow-md border border-[#2F80ED]/12 transition-all">
                  <div className="w-24 h-24 rounded-full bg-[#2F80ED] mx-auto mb-6 flex items-center justify-center text-white border-4 border-white shadow-lg">
                    <span className="text-2xl font-black">{person.initials}</span>
                  </div>
                  <h3 className="text-xl font-black mb-1 text-[#1D1D1F]">{person.name}</h3>
                  <p className="text-[#2F80ED] font-semibold text-sm mb-4">{person.role}</p>
                  <p className="text-[#6E6E73] text-sm leading-relaxed">{person.bio}</p>
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
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-[#1D1D1F]">Our Core Values</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "Uncompromising Quality", desc: "Zero tolerance for subpar products. We ensure WHO-GMP compliance at every step of the supply chain." },
              { icon: HeartHandshake, title: "Integrity & Transparency", desc: "Honest dealings, clear documentation, and ethical business practices in every transaction." },
              { icon: Globe, title: "Customer Centricity", desc: "Tailoring our export services to meet the specific regulatory and market needs of each client." },
            ].map((value, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="text-center p-8 bg-[#F4F8FF] rounded-2xl border border-[#2F80ED]/12 hover:border-[#2F80ED]/40 hover:shadow-md transition-all">
                  <div className="w-16 h-16 bg-[#EAF2FF] mx-auto rounded-2xl flex items-center justify-center mb-6 border border-[#2F80ED]/15">
                    <value.icon className="w-8 h-8 text-[#2F80ED]" />
                  </div>
                  <h3 className="text-xl font-black mb-3 text-[#1D1D1F]">{value.title}</h3>
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
