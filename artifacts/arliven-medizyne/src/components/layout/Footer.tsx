import { Link } from "wouter";
import { Phone, Mail, MapPin, ArrowRight, Linkedin, Twitter, Facebook } from "lucide-react";

const MAPS_LINK = "https://maps.app.goo.gl/deb5VwkttGy3S7eH9";

const navLinks = [
  { name: "Home",                 href: "/" },
  { name: "About Us",             href: "/about" },
  { name: "Products & Services",  href: "/products" },
  { name: "Domestic Supply",      href: "/domestic" },
  { name: "International Export", href: "/export" },
  { name: "Certifications",       href: "/certifications" },
  { name: "Contact",              href: "/contact" },
];

const serviceLinks = [
  { label: "Domestic Pharmaceutical Supply", href: "/domestic" },
  { label: "International Pharma Export",    href: "/export" },
  { label: "Bulk & Institutional Supply",    href: "/products" },
  { label: "Merchant Export Solutions",      href: "/export" },
  { label: "Certifications & Compliance",    href: "/certifications" },
];

export function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand Col */}
          <div className="space-y-5">
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
              Empowering Global &amp; Domestic Healthcare Solutions
            </p>
            <p className="text-gray-500 text-xs leading-relaxed">
              Domestic Supply | International Export
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#2F80ED] transition-all duration-200">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#2F80ED] transition-all duration-200">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#2F80ED] transition-all duration-200">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-[#2F80ED] transition-colors flex items-center gap-2 text-sm font-medium group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#2F80ED]" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-base mb-5 text-white">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-gray-400 hover:text-[#2F80ED] transition-colors flex items-center gap-2 text-sm font-medium group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#2F80ED]" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-base mb-5 text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-[#2F80ED] transition-colors group"
                >
                  <MapPin className="w-4 h-4 text-[#2F80ED] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>
                    S-45, S.No 97, Apratim Park,<br />
                    Satara Parisar,<br />
                    Chhatrapati Sambhajinagar<br />
                    (Aurangabad) 431010,<br />
                    Maharashtra, India
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#2F80ED] shrink-0" />
                <a href="tel:+919049175132" className="hover:text-[#2F80ED] transition-colors">+91 90491 75132</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#2F80ED] shrink-0" />
                <a href="mailto:info@arlivenmedizyne.com" className="hover:text-[#2F80ED] transition-colors break-all">info@arlivenmedizyne.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-gray-500">
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
