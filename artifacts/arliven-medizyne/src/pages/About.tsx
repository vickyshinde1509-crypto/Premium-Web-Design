import { FadeIn } from "@/components/FadeIn";
import { CheckCircle2, Target, Eye, ShieldCheck, HeartHandshake, Globe } from "lucide-react";

export default function About() {
  return (
    <main className="w-full pt-20 bg-[#1a1a1a]">
      {/* Page Header */}
      <section className="py-24 bg-[#111] relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <h4 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Company Profile</h4>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
              About Arliven Medizyne
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              A trusted name in pharmaceutical exports, driven by quality and an unwavering commitment to global health.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a1a1a]">Our Journey & Purpose</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in Maharashtra, India, Arliven Medizyne Pvt Ltd emerged with a singular focus: to make high-quality, life-saving pharmaceutical products accessible to markets worldwide. 
                </p>
                <p>
                  As a specialized Merchant Exporter, we don't just ship products; we build healthcare bridges. We partner exclusively with WHO-GMP certified manufacturers to ensure that every tablet, capsule, and surgical tool we export meets the highest echelons of international safety and efficacy standards.
                </p>
                <p>
                  Our expertise spans the entire export lifecycle—from rigorous vendor auditing and regulatory documentation to customized packaging and secure logistics.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gray-100 rounded transform -rotate-2" />
                <img 
                  src={`${import.meta.env.BASE_URL}images/pharma-factory.png`} 
                  alt="Arliven Facility" 
                  className="relative w-full h-[400px] object-cover rounded shadow-xl" 
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn className="bg-white p-10 rounded shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded bg-blue-50 flex items-center justify-center mb-8 border border-blue-100">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a]">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To consistently supply safe, effective, and affordable pharmaceutical products globally by maintaining robust supply chains, adhering to stringent quality compliances, and fostering enduring partnerships.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2} className="bg-white p-10 rounded shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded bg-blue-50 flex items-center justify-center mb-8 border border-blue-100">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a]">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be recognized globally as the most reliable and transparent pharmaceutical merchant exporter from India, contributing significantly to a healthier world.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">Leadership</h2>
            <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto">Guided by industry veterans dedicated to excellence in international pharma trade.</p>
          </FadeIn>
          
          <div className="grid sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-[#1a1a1a] p-10 rounded text-center group hover:bg-[#222] transition-colors">
                <div className="w-24 h-24 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center text-white border-4 border-[#333]">
                   <span className="text-2xl font-bold">GK</span>
                </div>
                <h3 className="text-2xl font-bold mb-1 text-white">Ganesh A Kute</h3>
                <p className="text-primary font-bold mb-4">Founder & CEO</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Steering Arliven Medizyne with strategic vision and a deep commitment to global healthcare accessibility.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-[#1a1a1a] p-10 rounded text-center group hover:bg-[#222] transition-colors">
                <div className="w-24 h-24 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center text-white border-4 border-[#333]">
                   <span className="text-2xl font-bold">NC</span>
                </div>
                <h3 className="text-2xl font-bold mb-1 text-white">Nitin B Choure</h3>
                <p className="text-primary font-bold mb-4">Director</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Ensuring operational excellence, rigorous quality compliance, and robust international partnerships.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-[#111] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {["WHO-GMP Compliant", "ISO Certified", "Export Ready", "Quality Assured"].map((badge, i) => (
              <div key={i} className="flex items-center gap-3 text-white font-bold text-lg">
                <ShieldCheck className="w-6 h-6 text-primary" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">Our Core Values</h2>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Uncompromising Quality", desc: "Zero tolerance for subpar products. We ensure WHO-GMP compliance at every step." },
              { icon: HeartHandshake, title: "Integrity & Transparency", desc: "Honest dealings, clear documentation, and ethical business practices always." },
              { icon: Globe, title: "Customer Centricity", desc: "Tailoring our export services to meet the specific regulatory and market needs of our clients." }
            ].map((value, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="text-center p-8 rounded bg-gray-50 border border-gray-200">
                <div className="w-16 h-16 rounded-full bg-white mx-auto flex items-center justify-center shadow-sm mb-6 text-primary border border-gray-100">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1a1a1a]">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
