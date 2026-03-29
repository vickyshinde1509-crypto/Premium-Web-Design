import { Link } from "wouter";
import { Phone, Mail, MapPin, ArrowRight, Linkedin, Twitter, Facebook } from "lucide-react";

const MAPS_LINK = "https://maps.app.goo.gl/deb5VwkttGy3S7eH9";

const navLinks = [
  { name: "Home",                href: "/" },
  { name: "About Us",            href: "/about" },
  { name: "Products & Services", href: "/products" },
  { name: "Export",              href: "/export" },
  { name: "Contact",             href: "/contact" },
];

const serviceLinks = [
  "Pharma Merchant Export",
  "Domestic Pharma Supply",
  "Third Party Manufacturing",
  "Bulk Supply & Sourcing",
  "Private Label Support",
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-xl p-2 inline-block">
                <img
                  src={`${import.meta.env.BASE_URL}images/arliven-logo.png`}
                  alt="Arliven Medizyne"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Reliable Pharmaceutical Merchant Exporter from India delivering high-quality pharmaceutical and surgical products worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#0071c5] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#0071c5] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#0071c5] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links — fixed hrefs */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-[#0071c5] transition-colors flex items-center gap-2 text-sm font-medium group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services — linked to products page */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Our Services</h4>
            <ul className="space-y-4">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-[#0071c5] transition-colors flex items-center gap-2 text-sm font-medium group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              {/* Map link — tappable, opens Google Maps */}
              <li>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-[#0071c5] transition-colors group"
                >
                  <MapPin className="w-5 h-5 text-[#0071c5] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>Maharashtra, India<br /><span className="text-xs text-gray-500 group-hover:text-[#0071c5]">View on Google Maps ↗</span></span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0071c5] shrink-0" />
                <a href="tel:+919049175132" className="hover:text-[#0071c5] transition-colors">+91 90491 75132</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#0071c5] shrink-0" />
                <a href="mailto:info@arlivenmedizyne.com" className="hover:text-[#0071c5] transition-colors">info@arlivenmedizyne.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-gray-500">
          <p>© {new Date().getFullYear()} Arliven Medizyne Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
