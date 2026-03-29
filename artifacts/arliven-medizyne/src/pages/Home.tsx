import { Shield, Globe2, Truck, FileCheck, PackageOpen, Award, Pill, Syringe, Activity, Stethoscope, BriefcaseMedical, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { HeroSlider } from "@/components/ui/HeroSlider";
import { FadeIn } from "@/components/FadeIn";

const features = [
  { icon: Shield, title: "Trusted Quality", desc: "Sourcing only from WHO-GMP certified facilities." },
  { icon: Globe2, title: "Global Reach", desc: "Exporting to Asia, Africa, Middle East & beyond." },
  { icon: FileCheck, title: "Regulatory Compliance", desc: "Expertise in complex export documentation." },
  { icon: Truck, title: "Timely Delivery", desc: "Optimized logistics for secure & fast shipping." },
  { icon: PackageOpen, title: "Reliable Sourcing", desc: "Strong network of premium manufacturers." },
  { icon: Award, title: "Export Expertise", desc: "Years of specialized pharma merchant experience." },
];

const productCategories = [
  { icon: Pill, name: "Tablets & Capsules", count: "150+ Products" },
  { icon: Syringe, name: "Injections", count: "80+ Products" },
  { icon: Activity, name: "Syrups & Liquids", count: "60+ Products" },
  { icon: Stethoscope, name: "Antibiotics", count: "100+ Products" },
  { icon: BriefcaseMedical, name: "Surgical Products", count: "50+ Products" },
  { icon: Shield, name: "OTC Healthcare", count: "90+ Products" },
];

const stats = [
  { value: "500+", label: "Products Exported" },
  { value: "20+", label: "Countries Served" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Quality Assurance" },
];

export default function Home() {
  return (
    <main className="w-full">
      <HeroSlider />

      {/* Company Overview Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/50 rounded-l-[100px] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
                {/* Clean medical abstract representation */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white">
                   {/* Unsplash abstract medical/lab image */}
                  {/* laboratory abstract clean bright */}
                  <img 
                    src="https://pixabay.com/get/g266caf37860cf77f353fe08ae26224f7777530d57b4c361136b736a8d1f1fef89bca7a161aa79e046843f12459811ac7662198294e0cc46b14dc573c92d96497_1280.jpg" 
                    alt="Pharmaceutical Quality" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-white shadow-lg">
                    <p className="font-display font-bold text-xl text-primary mb-1">Arliven Medizyne</p>
                    <p className="text-sm font-medium text-foreground">Excellence in Global Healthcare</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div>
                <h4 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">About The Company</h4>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Your Reliable Partner in <span className="text-gradient">Pharmaceutical Export</span>
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
                  <p>
                    Arliven Medizyne Pvt Ltd is a premier pharmaceutical merchant exporter based in Maharashtra, India. We are dedicated to bridging the gap in global healthcare by delivering high-quality pharmaceutical and surgical products across international borders.
                  </p>
                  <p>
                    Our core strength lies in sourcing from state-of-the-art, WHO-GMP certified manufacturing facilities, ensuring that every product meets stringent global quality standards.
                  </p>
                </div>
                <Link 
                  href="/about"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 group"
                >
                  Discover Our Story
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-24 bg-secondary/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Arliven?</h2>
            <p className="text-muted-foreground text-lg">We deliver excellence through a robust process, unwavering quality commitment, and deep export expertise.</p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} direction="up">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Counters */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/20">
            {stats.map((stat, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="text-center px-4">
                <div className="text-4xl md:text-5xl font-display font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80 font-medium">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <FadeIn>
              <h4 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Our Portfolio</h4>
              <h2 className="text-3xl md:text-4xl font-bold">Premium Healthcare Products</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link 
                href="/products"
                className="px-6 py-3 rounded-full bg-secondary text-foreground font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                View Complete Range
              </Link>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <Link href="/products">
                  <div className="group relative overflow-hidden bg-secondary/30 rounded-2xl p-8 border border-border/50 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                      <category.icon className="w-32 h-32" />
                    </div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                        <category.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{category.name}</h3>
                      <p className="text-sm text-muted-foreground font-medium">{category.count}</p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-16">Driven by Visionary Leadership</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-6 flex items-center justify-center border-4 border-white shadow-md">
                   <span className="text-2xl font-bold text-primary">GK</span>
                </div>
                <h3 className="text-2xl font-bold mb-1">Ganesh A Kute</h3>
                <p className="text-primary font-medium mb-4">Founder & CEO</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Steering Arliven Medizyne with strategic vision and a deep commitment to global healthcare accessibility.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-6 flex items-center justify-center border-4 border-white shadow-md">
                   <span className="text-2xl font-bold text-primary">NC</span>
                </div>
                <h3 className="text-2xl font-bold mb-1">Nitin B Choure</h3>
                <p className="text-primary font-medium mb-4">Director</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ensuring operational excellence, rigorous quality compliance, and robust international partnerships.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
