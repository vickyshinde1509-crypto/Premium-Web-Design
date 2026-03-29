import { FadeIn } from "@/components/FadeIn";
import { Globe, FileText, Package, Ship, CheckSquare } from "lucide-react";

const steps = [
  { icon: CheckSquare, title: "Requirement Analysis", desc: "Understanding client needs, regulatory requirements of the destination country, and product specifications." },
  { icon: FileText, title: "Sourcing & Documentation", desc: "Procuring from WHO-GMP units and preparing rigorous export documentation (COA, FSC, Dossiers)." },
  { icon: Package, title: "Customized Packaging", desc: "Ensuring packaging meets international transit standards and country-specific labeling laws." },
  { icon: Ship, title: "Logistics & Shipping", desc: "Partnering with trusted freight forwarders for secure, temperature-controlled transit via sea or air." }
];

export default function Export() {
  return (
    <main className="w-full pt-28">
      <section className="py-20 bg-secondary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Global <span className="text-primary">Export Operations</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connecting Indian pharmaceutical manufacturing excellence to healthcare providers worldwide.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Export Capabilities & Map */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">Our Export Expertise</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Exporting pharmaceuticals requires deep knowledge of international trade laws, regulatory affairs, and logistics. Arliven Medizyne excels in navigating these complexities to deliver products safely and on time.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Expertise in country-specific regulatory compliance.",
                  "Provision of CTD/eCTD dossiers for product registration.",
                  "Temperature-controlled supply chain management (Cold Chain).",
                  "Consolidation of diverse product categories in single shipments."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckSquare className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span className="text-foreground/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2} className="relative">
              {/* CSS Map Visualization representation using our generated image */}
              <div className="relative rounded-3xl overflow-hidden bg-secondary border border-border shadow-lg p-2">
                <img 
                  src={`${import.meta.env.BASE_URL}images/hero-bg-3.png`}
                  alt="Global Reach Map" 
                  className="w-full h-auto rounded-2xl mix-blend-multiply"
                />
                {/* Floating tags */}
                <div className="absolute top-[30%] left-[60%] bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">Asia</div>
                <div className="absolute top-[40%] left-[30%] bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce" style={{ animationDelay: "0.5s" }}>Africa</div>
                <div className="absolute top-[35%] left-[45%] bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce" style={{ animationDelay: "1s" }}>Middle East</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Export Process Flow */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Seamless Export Process</h2>
            <p className="text-muted-foreground text-lg">A systematic approach to guarantee reliable delivery.</p>
          </FadeIn>

          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-border" />
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, idx) => (
                <FadeIn key={idx} delay={idx * 0.15} className="text-center relative">
                  <div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-secondary shadow-lg flex items-center justify-center mb-6 relative">
                    <step.icon className="w-10 h-10 text-primary" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
