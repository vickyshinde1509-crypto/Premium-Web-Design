import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Mail, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home",                href: "/" },
  { name: "About",               href: "/about" },
  { name: "Products",            href: "/products" },
  { name: "Domestic Supply",     href: "/domestic" },
  { name: "International Export",href: "/export" },
  { name: "Certifications",      href: "/certifications" },
  { name: "Contact",             href: "/contact" },
];

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}images/arliven-logo.png`}
              alt="Arliven Medizyne"
              className="w-auto object-contain"
              style={{ height: "52px" }}
            />
          </Link>

          {/* Desktop Nav — 7 items, compact */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors relative py-1 whitespace-nowrap ${
                  location === link.href
                    ? "text-[#2F80ED]"
                    : "text-gray-700 hover:text-[#2F80ED]"
                }`}
              >
                {link.name}
                {location === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-[#2F80ED]"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/919049175132"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all"
              title="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@arlivenmedizyne.com"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-all"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="ml-1 px-5 py-2.5 text-sm font-bold bg-[#2F80ED] text-white rounded-xl hover:bg-blue-600 transition-colors shadow-md shadow-blue-200"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile quick-action icons — visible below lg, hidden on desktop */}
          <div className="flex lg:hidden items-center gap-2 mr-1">
            <a
              href="https://wa.me/919049175132"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all"
              title="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="mailto:info@arlivenmedizyne.com"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition-all"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-gray-700 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-5 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base font-semibold py-2.5 px-4 rounded-xl ${
                    location === link.href
                      ? "bg-blue-50 text-[#2F80ED]"
                      : "text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-gray-100 my-2" />
              <div className="flex items-center gap-4 py-1 px-2">
                <a href="https://wa.me/919049175132" className="flex items-center gap-2 text-[#25D366] font-semibold text-sm">
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </a>
                <a href="mailto:info@arlivenmedizyne.com" className="flex items-center gap-2 text-[#2F80ED] font-semibold text-sm">
                  <Mail className="w-5 h-5" /> Email
                </a>
              </div>
              <Link
                href="/contact"
                className="mt-1 text-center w-full py-3 bg-[#2F80ED] text-white font-bold rounded-xl hover:bg-blue-600 transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
