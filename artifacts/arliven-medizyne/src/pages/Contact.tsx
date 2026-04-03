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

      {/* Header — handshake banner */}
      <section className="relative overflow-hidden border-b border-[#2F80ED]/15" style={{ minHeight: "340px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/contact-banner.png)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-16 flex flex-col justify-center" style={{ minHeight: "340px" }}>
          <FadeIn>
            <p className="text-[#2F80ED] font-semibold tracking-widest uppercase text-xs mb-2">Reach Out</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 text-white leading-tight">
              Get In Touch
            </h1>
            <p className="text-sm lg:text-base text-gray-200 max-w-sm leading-relaxed">
              Ready to start an export partnership? Contact us for inquiries, quotes, or product catalogs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-14">

            {/* Contact Info */}
            <FadeIn className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-black mb-8 text-[#1D1D1F]">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#EAF2FF] rounded-xl flex items-center justify-center text-[#2F80ED] shrink-0 border border-[#2F80ED]/15">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1 text-[#1D1D1F]">Corporate Office</h4>
                      <p className="text-[#6E6E73] leading-relaxed text-sm">
                        Maharashtra, India<br />
                        (Registered Merchant Exporter)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#EAF2FF] rounded-xl flex items-center justify-center text-[#2F80ED] shrink-0 border border-[#2F80ED]/15">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1 text-[#1D1D1F]">Phone / WhatsApp</h4>
                      <a href="tel:+919049175132" className="text-[#6E6E73] hover:text-[#2F80ED] transition-colors text-sm font-medium">
                        +91 90491 75132
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#EAF2FF] rounded-xl flex items-center justify-center text-[#2F80ED] shrink-0 border border-[#2F80ED]/15">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1 text-[#1D1D1F]">Email Address</h4>
                      <a href="mailto:info@arlivenmedizyne.com" className="text-[#6E6E73] hover:text-[#2F80ED] transition-colors text-sm font-medium">
                        info@arlivenmedizyne.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#2F80ED]/15">
                <h4 className="font-bold text-sm mb-4 text-[#1D1D1F]">Direct Connect</h4>
                <a
                  href="https://wa.me/919049175132"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#20bd5a] transition-colors shadow-md shadow-green-500/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={0.2} className="lg:col-span-3">
              <div className="bg-[#F4F8FF] p-8 rounded-2xl border border-[#2F80ED]/15 shadow-sm">
                <h3 className="text-xl font-black mb-6 text-[#1D1D1F]">Send an Inquiry</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#6E6E73] uppercase tracking-wide">Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-white text-[#1D1D1F] border border-[#2F80ED]/20 rounded-xl focus:outline-none focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED]/15 transition-all placeholder:text-gray-400 text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#6E6E73] uppercase tracking-wide">Company Name</label>
                      <input
                        type="text"
                        placeholder="Your Company"
                        className="w-full px-4 py-3 bg-white text-[#1D1D1F] border border-[#2F80ED]/20 rounded-xl focus:outline-none focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED]/15 transition-all placeholder:text-gray-400 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#6E6E73] uppercase tracking-wide">Email Address *</label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-white text-[#1D1D1F] border border-[#2F80ED]/20 rounded-xl focus:outline-none focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED]/15 transition-all placeholder:text-gray-400 text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#6E6E73] uppercase tracking-wide">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-3 bg-white text-[#1D1D1F] border border-[#2F80ED]/20 rounded-xl focus:outline-none focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED]/15 transition-all placeholder:text-gray-400 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#6E6E73] uppercase tracking-wide">Inquiry Details *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please specify the products you are looking for, target country, and required quantities..."
                      className="w-full px-4 py-3 bg-white text-[#1D1D1F] border border-[#2F80ED]/20 rounded-xl focus:outline-none focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED]/15 transition-all resize-none placeholder:text-gray-400 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#2F80ED] text-white font-bold text-sm rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-200"
                  >
                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                    {!isSubmitting && <Send className="w-4 h-4" />}
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full bg-white border-t border-[#2F80ED]/15">
        <div className="flex items-center justify-between px-6 lg:px-10 py-4 bg-[#2F80ED]">
          <div className="flex items-center gap-3 text-white">
            <MapPin className="w-5 h-5 shrink-0" />
            <span className="font-semibold text-sm">Arliven Medizyne Pvt Ltd — Maharashtra, India</span>
          </div>
          <a
            href="https://maps.app.goo.gl/deb5VwkttGy3S7eH9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-[#2F80ED] font-bold text-xs px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            Open in Maps ↗
          </a>
        </div>
        <a
          href="https://maps.app.goo.gl/deb5VwkttGy3S7eH9"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative h-[360px] cursor-pointer"
          title="Open in Google Maps"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4792834.843267928!2d75.7139!3d19.7515!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcfc41e9c9cd6f9%3A0x1b2f22924be04fb6!2sMaharashtra%2C+India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, pointerEvents: "none" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Arliven Medizyne Location — Maharashtra, India"
          />
          <div className="absolute bottom-4 right-4 bg-white shadow-lg rounded-xl px-3 py-2 flex items-center gap-2 text-xs font-bold text-[#1D1D1F]">
            <MapPin className="w-3.5 h-3.5 text-[#2F80ED]" />
            Tap to open map
          </div>
        </a>
      </section>
    </main>
  );
}
