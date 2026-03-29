import { FadeIn } from "@/components/FadeIn";
import { CheckCircle2, Target, Eye, ShieldCheck, HeartHandshake, Globe } from "lucide-react";

export default function About() {
  return (
    <main className="w-full pt-20">

      {/* Page Header — office banner, no overlay */}
      <section className="relative overflow-hidden border-b border-gray-200" style={{ minHeight: "380px" }}>
        {/* Office background image — fully clear, no overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/about-office.png)` }}
        />
        {/* Bottom gradient only to ensure text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        {/* Text content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-16 flex flex-col justify-center" style={{ minHeight: "380px" }}>
          <FadeIn>
            <p className="text-[#0071c5] font-bold tracking-widest uppercase text-xs mb-2">Company Profile</p>
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-4xl lg:text-5xl font-black mb-7 text-gray-900 leading-tight">Our Journey<br />& Purpose</h2>
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
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
                <div className="absolute -inset-3 bg-gray-100 transform -rotate-2" />
                <img
                  src={`${import.meta.env.BASE_URL}images/pharma-factory.png`}
                  alt="Arliven pharmaceutical facility"
                  className="relative w-full h-[460px] object-cover shadow-xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">Our Mission & Vision</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn className="bg-white p-10 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-50 flex items-center justify-center mb-8 border border-blue-100">
                <Target className="w-8 h-8 text-[#0071c5]" />
              </div>
              <h3 className="text-3xl font-black mb-5 text-gray-900">Our Mission</h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                To consistently supply safe, effective, and affordable pharmaceutical products globally by maintaining robust supply chains, adhering to stringent quality compliances, and fostering enduring partnerships.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-white p-10 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-50 flex items-center justify-center mb-8 border border-blue-100">
                <Eye className="w-8 h-8 text-[#0071c5]" />
              </div>
              <h3 className="text-3xl font-black mb-5 text-gray-900">Our Vision</h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                To be recognized globally as the most reliable and transparent pharmaceutical merchant exporter from India, contributing significantly to a healthier world.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <FadeIn>
            <h2 className="text-4xl lg:text-5xl font-black mb-5 text-gray-900">Our Leadership</h2>
            <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
              Guided by industry veterans dedicated to excellence in international pharmaceutical trade.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              { initials: "GK", name: "Ganesh A Kute", role: "Founder & CEO", bio: "Steering Arliven Medizyne with strategic vision and a deep commitment to global healthcare accessibility and pharmaceutical excellence." },
              { initials: "NC", name: "Nitin B Choure", role: "Director", bio: "Ensuring operational excellence, rigorous quality compliance, and robust international partnerships across all markets." },
            ].map((person, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[#1a1a1a] p-10 text-center hover:bg-[#222] transition-colors">
                  <div className="w-28 h-28 rounded-full bg-[#0071c5] mx-auto mb-7 flex items-center justify-center text-white border-4 border-[#333]">
                    <span className="text-3xl font-black">{person.initials}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-2 text-white">{person.name}</h3>
                  <p className="text-[#0071c5] font-bold text-base mb-5">{person.role}</p>
                  <p className="text-gray-400 text-base leading-relaxed">{person.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-[#0071c5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            {["WHO-GMP Compliant", "ISO Certified", "Export Ready", "Quality Assured"].map((badge, i) => (
              <div key={i} className="flex items-center gap-3 text-white font-bold text-xl">
                <ShieldCheck className="w-7 h-7 text-white/80" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-5 text-gray-900">Our Core Values</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Uncompromising Quality", desc: "Zero tolerance for subpar products. We ensure WHO-GMP compliance at every step of the supply chain." },
              { icon: HeartHandshake, title: "Integrity & Transparency", desc: "Honest dealings, clear documentation, and ethical business practices in every transaction." },
              { icon: Globe, title: "Customer Centricity", desc: "Tailoring our export services to meet the specific regulatory and market needs of each client." },
            ].map((value, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="text-center p-10 bg-gray-50 border border-gray-200 hover:border-[#0071c5] transition-colors">
                <div className="w-20 h-20 bg-blue-50 mx-auto flex items-center justify-center mb-7 border border-blue-100">
                  <value.icon className="w-10 h-10 text-[#0071c5]" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{value.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
