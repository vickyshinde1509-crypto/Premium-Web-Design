import { Shield, Globe2, Truck, FileCheck, PackageOpen, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { HeroSlider } from "@/components/ui/HeroSlider";
import { FadeIn } from "@/components/FadeIn";

const features = [
  { icon: Shield, title: "Trusted Quality", desc: "Sourcing only from WHO-GMP certified manufacturing facilities worldwide." },
  { icon: Globe2, title: "Global Reach", desc: "Exporting to Asia, Africa, Middle East and beyond — 20+ countries served." },
  { icon: FileCheck, title: "Regulatory Compliance", desc: "Expertise in complex international export documentation and dossiers." },
  { icon: Truck, title: "Timely Delivery", desc: "Optimized logistics networks for secure and punctual pharmaceutical shipping." },
  { icon: PackageOpen, title: "Reliable Sourcing", desc: "Strong partnerships with premium WHO-GMP certified manufacturers." },
  { icon: Award, title: "Export Expertise", desc: "Years of specialized pharmaceutical merchant export experience." },
];

const productsPreview = [
  { name: "Tablets & Capsules", image: "pharma-tablets.png" },
  { name: "Injections & Ampoules", image: "pharma-injections.png" },
  { name: "Syrups & Suspensions", image: "pharma-syrups.png" },
  { name: "Surgical Products", image: "pharma-surgical.png" },
  { name: "Antibiotics Range", image: "pharma-tablets.png" },
  { name: "OTC Healthcare", image: "pharma-factory.png" },
];

const services = [
  { title: "Pharma Merchant Export", desc: "Seamless export of generic and branded pharmaceutical products worldwide." },
  { title: "Third Party Manufacturing", desc: "Contract manufacturing under strict WHO-GMP certified guidelines." },
  { title: "Surgical Supply", desc: "High-grade surgical instruments and medical consumables supply." },
  { title: "Regulatory Support", desc: "Complete dossier preparation and export compliance assistance." },
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

      {/* Stats Bar */}
      <section className="bg-[#1a1a1a] py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="text-center group">
                <div className="text-5xl lg:text-6xl font-black text-white mb-3 group-hover:text-[#0071c5] transition-colors">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-semibold tracking-widest uppercase text-sm">
                  {stat.label}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <p className="text-[#0071c5] font-bold tracking-widest uppercase text-sm mb-4">
                  About Arliven Medizyne
                </p>
                <h2 className="text-4xl lg:text-5xl font-black mb-7 leading-tight text-gray-900">
                  Excellence in<br />
                  <span className="text-[#0071c5]">Global Healthcare</span> Export
                </h2>
                <p className="text-gray-600 text-xl leading-relaxed mb-8">
                  Arliven Medizyne Pvt Ltd is a premier pharmaceutical merchant exporter based in Maharashtra, India. We bridge the gap in global healthcare by delivering high-quality pharmaceutical and surgical products across international borders with full compliance and safety.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {["WHO-GMP Certified Products", "Timely Global Shipping", "Comprehensive Product Range", "Strict Quality Control"].map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#0071c5] shrink-0" />
                      <span className="font-semibold text-gray-800 text-base">{point}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 font-bold text-base hover:bg-[#0071c5] transition-colors"
                >
                  Discover Our Story
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-3 bg-gray-200 rounded transform rotate-2" />
                <img
                  src={`${import.meta.env.BASE_URL}images/pharma-factory.png`}
                  alt="Pharmaceutical manufacturing facility"
                  className="relative w-full h-[520px] object-cover shadow-2xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-5 text-gray-900">Why Choose Arliven?</h2>
            <p className="text-gray-600 text-xl">Unwavering commitment to quality, compliance, and reliable global delivery.</p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <FadeIn key={idx} delay={idx * 0.08} direction="up">
                <div className="bg-white p-9 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-blue-50 flex items-center justify-center text-[#0071c5] mb-6 group-hover:bg-[#0071c5] group-hover:text-white transition-colors duration-300">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview — dark section */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <FadeIn>
              <p className="text-[#0071c5] font-bold tracking-widest uppercase text-sm mb-3">Our Portfolio</p>
              <h2 className="text-4xl lg:text-5xl font-black text-white">Premium Healthcare Products</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link
                href="/products"
                className="px-6 py-3 border-2 border-white/30 text-white font-bold text-base hover:bg-[#0071c5] hover:border-[#0071c5] transition-colors"
              >
                View Complete Range
              </Link>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsPreview.map((product, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <Link href="/products">
                  <div className="group relative h-80 overflow-hidden cursor-pointer bg-[#2a2a2a]">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${product.image}`}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#0071c5] transition-colors flex items-center justify-between">
                        {product.name}
                        <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </h3>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services — white section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="text-center mb-16">
            <p className="text-[#0071c5] font-bold tracking-widest uppercase text-sm mb-4">What We Do</p>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">Comprehensive Services</h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <div className="p-8 border-2 border-gray-200 h-full hover:border-[#0071c5] transition-colors bg-gray-50 group">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#0071c5] transition-colors">{service.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{service.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach — dark section */}
      <section className="py-24 bg-[#222]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-[#0071c5] font-bold tracking-widest uppercase text-sm mb-4">Export Markets</p>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-7 leading-tight">
                Connecting Indian Excellence<br />to Global Markets
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed mb-10">
                Our established export channels span across multiple continents. We ensure seamless regulatory compliance and robust supply chain management for clients worldwide.
              </p>
              <ul className="space-y-4">
                {["Southeast Asia", "African Nations", "Middle East / GCC", "CIS Countries"].map((region, i) => (
                  <li key={i} className="flex items-center gap-4 text-white font-semibold text-lg">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0071c5] shrink-0" />
                    {region}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.2}>
              <img
                src={`${import.meta.env.BASE_URL}images/pharma-export.png`}
                alt="Global pharmaceutical export"
                className="w-full h-[440px] object-cover shadow-2xl"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-[#0071c5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Ready to Partner<br />With Us?
            </h2>
            <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Contact us today to discuss your pharmaceutical sourcing and export requirements. Let's build a healthier future together.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link
                href="/contact"
                className="px-10 py-4 bg-white text-[#0071c5] font-black text-base uppercase tracking-wider hover:bg-gray-100 transition-all duration-200 shadow-lg"
              >
                Send Inquiry
              </Link>
              <Link
                href="/products"
                className="px-10 py-4 border-2 border-white text-white font-black text-base uppercase tracking-wider hover:bg-white/10 transition-all duration-200"
              >
                View Products
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
