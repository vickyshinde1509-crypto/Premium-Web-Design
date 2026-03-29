import { FadeIn } from "@/components/FadeIn";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Inquiry Sent Successfully!",
        description: "We will get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <main className="w-full pt-28">
      <section className="py-20 bg-secondary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start an export partnership? Contact us today for inquiries, quotes, or product catalogs.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            
            {/* Contact Info */}
            <FadeIn className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Corporate Office</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Maharashtra, India<br/>
                        (Registered Merchant Exporter)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Phone / WhatsApp</h4>
                      <a href="tel:+919049175132" className="text-muted-foreground hover:text-primary transition-colors block">+91 90491 75132</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email Address</h4>
                      <a href="mailto:info@arlivenmedizyne.com" className="text-muted-foreground hover:text-primary transition-colors block">info@arlivenmedizyne.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h4 className="font-bold mb-4">Direct Connect</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://wa.me/919049175132" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-semibold hover:bg-[#20bd5a] transition-colors shadow-lg shadow-green-500/20"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={0.2} className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-border shadow-xl p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-6">Send an Inquiry</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Full Name *</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Company Name</label>
                      <input 
                        type="text" 
                        placeholder="Your Company LLC"
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Email Address *</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Inquiry Details *</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Please specify the products you are looking for, target country, and required quantities..."
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-primary text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 active:translate-y-0 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                    {!isSubmitting && <Send className="w-5 h-5" />}
                  </button>
                </form>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] w-full bg-secondary grayscale hover:grayscale-0 transition-all duration-500">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3824056.248384218!2d73.86445582319208!3d18.917997397737877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcfc41e9c9cd6f9%3A0x1b2f22924be04fb6!2sMaharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Maharashtra, India Map"
        ></iframe>
      </section>
    </main>
  );
}
