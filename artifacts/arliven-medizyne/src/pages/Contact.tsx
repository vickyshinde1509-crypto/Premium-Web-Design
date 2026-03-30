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

      {/* Header — handshake banner, image fully visible */}
      <section className="relative overflow-hidden border-b border-gray-200" style={{ minHeight: "360px" }}>
        {/* Full background image — no overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/contact-banner.jpg)` }}
        />
        {/* Left-side gradient only so right side of image is 100% clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
        {/* Text — left aligned, small size */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-16 flex flex-col justify-center" style={{ minHeight: "360px" }}>
          <FadeIn>
            <p className="text-[#0071c5] font-bold tracking-widest uppercase text-xs mb-2">Reach Out</p>
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

      {/* Map — clickable, opens Google Maps */}
      <section className="w-full bg-[#111] border-t border-white/10">
        {/* Open in Maps button */}
        <div className="flex items-center justify-between px-6 lg:px-10 py-4 bg-[#0071c5]">
          <div className="flex items-center gap-3 text-white">
            <MapPin className="w-5 h-5 shrink-0" />
            <span className="font-semibold text-sm">Arliven Medizyne Pvt Ltd — Maharashtra, India</span>
          </div>
          <a
            href="https://maps.app.goo.gl/deb5VwkttGy3S7eH9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-[#0071c5] font-black text-xs px-4 py-2 hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            Open in Maps ↗
          </a>
        </div>
        {/* Embedded map — tap to open full map */}
        <a
          href="https://maps.app.goo.gl/deb5VwkttGy3S7eH9"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative h-[380px] cursor-pointer"
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
          {/* Tap overlay hint */}
          <div className="absolute bottom-4 right-4 bg-white shadow-lg px-3 py-2 flex items-center gap-2 text-xs font-bold text-gray-800">
            <MapPin className="w-4 h-4 text-[#0071c5]" />
            Tap to open map
          </div>
        </a>
      </section>
    </main>
  );
}
