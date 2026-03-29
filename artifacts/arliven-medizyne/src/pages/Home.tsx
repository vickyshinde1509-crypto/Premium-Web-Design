import { Shield, Globe2, Truck, FileCheck, PackageOpen, Award, CheckCircle2, ArrowRight } from "lucide-react";
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

const productsPreview = [
  { name: "Tablets & Capsules", image: "pharma-tablets.png" },
  { name: "Injections", image: "pharma-injections.png" },
  { name: "Syrups & Liquids", image: "pharma-syrups.png" },
  { name: "Surgical Products", image: "pharma-surgical.png" },
  { name: "Antibiotics", image: "pharma-tablets.png" }, // Reusing an image
  { name: "OTC Healthcare", image: "pharma-factory.png" }, // Reusing an image
];

const services = [
  { title: "Pharma Merchant Export", desc: "Seamless export of generic and branded pharma products worldwide." },
  { title: "Third Party Manufacturing", desc: "Contract manufacturing under strict WHO-GMP guidelines." },
  { title: "Surgical Supply", desc: "High-grade surgical instruments and medical consumables." },
  { title: "Regulatory Support", desc: "Complete dossier preparation and export compliance assistance." }
];

const stats = [
  { value: "500+", label: "Products Exported" },
  { value: "20+", label: "Countries Served" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Quality Assurance" },
];

export default function Home() {
  return (
    <main className="w-full bg-[#1a1a1a]">
      <HeroSlider />

      {/* Stats Bar */}
      <section className="bg-[#111] py-12 border-b border-white/10 relative z-20 -mt-1 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="text-center group">
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">{stat.value}</div>
                <div className="text-gray-400 font-medium tracking-wide uppercase text-sm">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <h4 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">About Arliven Medizyne</h4>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-[#1a1a1a]">
                  Excellence in <br/><span className="text-primary">Global Healthcare</span> Export
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Arliven Medizyne Pvt Ltd is a premier pharmaceutical merchant exporter based in Maharashtra, India. We bridge the gap in global healthcare by delivering high-quality pharmaceutical and surgical products across international borders, ensuring compliance, safety, and efficacy at every step.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {["WHO-GMP Certified Products", "Timely Global Shipping", "Comprehensive Product Range", "Strict Quality Control"].map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <span className="font-semibold text-[#1a1a1a]">{point}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-8 py-3.5 rounded font-bold hover:bg-primary transition-colors"
                >
                  Discover Our Story
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gray-200 rounded-lg transform rotate-3" />
                <img 
                  src={`${import.meta.env.BASE_URL}images/pharma-factory.png`}
                  alt="Arliven Manufacturing Quality" 
                  className="relative rounded shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">Why Choose Arliven?</h2>
            <p className="text-gray-600 text-lg">Unwavering commitment to quality, compliance, and reliable global delivery.</p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} direction="up">
                <div className="bg-white p-8 rounded shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded bg-blue-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#1a1a1a]">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview (Dark Section) */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <FadeIn>
              <h4 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Our Portfolio</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Premium Healthcare Products</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link 
                href="/products"
                className="px-6 py-3 rounded border border-white/20 text-white font-bold hover:bg-primary hover:border-primary transition-colors"
              >
                View Complete Range
              </Link>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsPreview.map((product, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <Link href="/products">
                  <div className="group relative h-80 rounded overflow-hidden cursor-pointer bg-[#222]">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/${product.image}`}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors flex items-center justify-between">
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

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">Comprehensive Services</h2>
          </FadeIn>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="p-8 border border-gray-200 rounded h-full hover:border-primary transition-colors bg-gray-50">
                  <h3 className="text-xl font-bold mb-3 text-[#1a1a1a]">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-24 bg-[#222] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Connecting Indian Excellence to Global Markets</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Our established export channels span across multiple continents. We ensure seamless regulatory compliance and robust supply chain management for our clients in Asia, Africa, the Middle East, and emerging markets.
              </p>
              <ul className="space-y-4">
                {["Southeast Asia", "African Nations", "Middle East / GCC", "CIS Countries"].map((region, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-semibold">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {region}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.2} className="relative h-[400px]">
              <div className="absolute inset-0 rounded bg-[#1a1a1a] border border-white/10 flex items-center justify-center overflow-hidden">
                <Globe2 className="w-64 h-64 text-white/5 animate-pulse" />
                {/* Visual map indicators */}
                <div className="absolute top-[30%] right-[30%] w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_rgba(0,123,255,1)] animate-ping" />
                <div className="absolute top-[50%] right-[40%] w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)] animate-ping" style={{animationDelay: '0.5s'}} />
                <div className="absolute top-[40%] right-[20%] w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(0,123,255,1)] animate-ping" style={{animationDelay: '1s'}} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              Contact us today to discuss your pharmaceutical sourcing requirements. Let's build a healthier future together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="px-8 py-4 rounded bg-white text-primary font-bold text-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
              >
                Send Inquiry
              </Link>
              <Link 
                href="/products"
                className="px-8 py-4 rounded border-2 border-white/50 text-white font-bold text-lg hover:border-white hover:bg-white/10 transition-all duration-300"
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
