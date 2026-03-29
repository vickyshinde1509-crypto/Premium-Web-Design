import { FadeIn } from "@/components/FadeIn";
import { CheckCircle2, Target, Eye, ShieldCheck, HeartHandshake, Globe2 } from "lucide-react";

export default function About() {
  return (
    <main className="w-full pt-28">
      {/* Page Header */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2000&auto=format&fit=crop')] opacity-5 bg-cover bg-center mix-blend-multiply" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
              About <span className="text-primary">Arliven Medizyne</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A trusted name in pharmaceutical exports, driven by quality and a commitment to global health.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">Our Journey & Purpose</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in Maharashtra, India, Arliven Medizyne Pvt Ltd emerged with a singular focus: to make high-quality, life-saving pharmaceutical products accessible to markets worldwide. 
                </p>
                <p>
                  As a specialized Merchant Exporter, we don't just ship products; we build healthcare bridges. We partner exclusively with WHO-GMP certified manufacturers to ensure that every tablet, capsule, and surgical tool we export meets the highest echelons of international safety and efficacy standards.
                </p>
                <p>
                  Our expertise spans the entire export lifecycle—from rigorous vendor auditing and regulatory documentation to customized packaging and secure logistics. We serve clients across Asia, Africa, the Middle East, and emerging markets.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="grid grid-cols-2 gap-4">
                 {/* Unsplash abstract pharma/business images */}
                {/* medicine sorting facility clean */}
                <img src="https://pixabay.com/get/gc2dedf3417349958a264373469ade302f2fe23a0649e4afceffa33c65b3df2e5c68d97a5ec049817d6a157fa4c16a65bbbdf54408ca8fd54790dd1bbf85c006c_1280.jpg" alt="Pharma Export" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
                {/* global logistics shipping clean */}
                <img src="https://pixabay.com/get/g2ee25fb6668c27d410a02c0dfec16a100dec4dc0f2001192503e482c12e7c80bf28c42feb9cc3274e707c9ddac3ea3722d0a3323a4f1b0d11bd1ccacf92a6490_1280.jpg" alt="Global Shipping" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To consistently supply safe, effective, and affordable pharmaceutical products globally by maintaining robust supply chains, adhering to stringent quality compliances, and fostering enduring partnerships.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2} className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-8">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be recognized globally as the most reliable and transparent pharmaceutical merchant exporter from India, contributing significantly to a healthier world.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">The principles that guide our business decisions and partnerships.</p>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Uncompromising Quality", desc: "Zero tolerance for subpar products. We ensure WHO-GMP compliance at every step." },
              { icon: HeartHandshake, title: "Integrity & Transparency", desc: "Honest dealings, clear documentation, and ethical business practices always." },
              { icon: Globe2, title: "Customer Centricity", desc: "Tailoring our export services to meet the specific regulatory and market needs of our clients." }
            ].map((value, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="text-center p-8 rounded-2xl bg-secondary/50">
                <div className="w-16 h-16 rounded-full bg-white mx-auto flex items-center justify-center shadow-sm mb-6 text-primary">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
