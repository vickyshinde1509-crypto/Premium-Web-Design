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
    <main className="w-full pt-20">

      {/* Header */}
      <section className="py-24 bg-[#111] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <FadeIn>
            <p className="text-[#0071c5] font-bold tracking-widest uppercase text-sm mb-4">Reach Out</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight">
              Get In Touch
            </h1>
            <p className="text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Ready to start an export partnership? Contact us today for inquiries, quotes, or product catalogs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-16">

            {/* Contact Info */}
            <FadeIn className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-4xl font-black mb-10 text-gray-900">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-blue-50 flex items-center justify-center text-[#0071c5] shrink-0 border border-blue-100">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-black text-xl mb-1 text-gray-900">Corporate Office</h4>
                      <p className="text-gray-600 leading-relaxed text-base font-medium">
                        Maharashtra, India<br />
                        (Registered Merchant Exporter)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-blue-50 flex items-center justify-center text-[#0071c5] shrink-0 border border-blue-100">
                      <Phone className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-black text-xl mb-1 text-gray-900">Phone / WhatsApp</h4>
                      <a href="tel:+919049175132" className="text-gray-600 hover:text-[#0071c5] transition-colors block text-base font-semibold">
                        +91 90491 75132
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-blue-50 flex items-center justify-center text-[#0071c5] shrink-0 border border-blue-100">
                      <Mail className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-black text-xl mb-1 text-gray-900">Email Address</h4>
                      <a href="mailto:info@arlivenmedizyne.com" className="text-gray-600 hover:text-[#0071c5] transition-colors block text-base font-semibold">
                        info@arlivenmedizyne.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <h4 className="font-black text-lg mb-5 text-gray-900">Direct Connect</h4>
                <a
                  href="https://wa.me/919049175132"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 font-black text-base hover:bg-[#20bd5a] transition-colors shadow-lg shadow-green-500/20"
                >
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp Us
                </a>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={0.2} className="lg:col-span-3">
              <div className="bg-[#1a1a1a] p-10 border border-[#333] shadow-2xl">
                <h3 className="text-3xl font-black mb-8 text-white">Send an Inquiry</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-300 uppercase tracking-wide">Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-4 bg-[#222] text-white border border-[#333] focus:outline-none focus:border-[#0071c5] focus:ring-1 focus:ring-[#0071c5] transition-all placeholder:text-gray-600 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-300 uppercase tracking-wide">Company Name</label>
                      <input
                        type="text"
                        placeholder="Your Company"
                        className="w-full px-4 py-4 bg-[#222] text-white border border-[#333] focus:outline-none focus:border-[#0071c5] focus:ring-1 focus:ring-[#0071c5] transition-all placeholder:text-gray-600 text-base"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-300 uppercase tracking-wide">Email Address *</label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-4 bg-[#222] text-white border border-[#333] focus:outline-none focus:border-[#0071c5] focus:ring-1 focus:ring-[#0071c5] transition-all placeholder:text-gray-600 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-300 uppercase tracking-wide">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-4 bg-[#222] text-white border border-[#333] focus:outline-none focus:border-[#0071c5] focus:ring-1 focus:ring-[#0071c5] transition-all placeholder:text-gray-600 text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-300 uppercase tracking-wide">Inquiry Details *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please specify the products you are looking for, target country, and required quantities..."
                      className="w-full px-4 py-4 bg-[#222] text-white border border-[#333] focus:outline-none focus:border-[#0071c5] focus:ring-1 focus:ring-[#0071c5] transition-all resize-none placeholder:text-gray-600 text-base"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#0071c5] text-white font-black text-base uppercase tracking-wider hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
      <section className="h-[400px] w-full bg-[#111] border-t border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3824056.248384218!2d73.86445582319208!3d18.917997397737877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcfc41e9c9cd6f9%3A0x1b2f22924be04fb6!2sMaharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Maharashtra, India Map"
        />
      </section>
    </main>
  );
}
