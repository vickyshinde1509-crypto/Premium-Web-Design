import { Link } from "wouter";
import { Phone, Mail, MapPin, ArrowRight, Linkedin, Twitter, Facebook } from "lucide-react";

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
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Products & Services', 'Export', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                    className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Our Services</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li>Pharma Merchant Export</li>
              <li>Domestic Pharma Supply</li>
              <li>Third Party Manufacturing</li>
              <li>Bulk Supply & Sourcing</li>
              <li>Private Label Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+919049175132" className="hover:text-primary transition-colors">+91 90491 75132</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@arlivenmedizyne.com" className="hover:text-primary transition-colors">info@arlivenmedizyne.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-gray-500">
          <p>© {new Date().getFullYear()} Arliven Medizyne Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
