import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Mail, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products & Services", href: "/products" },
  { name: "Export", href: "/export" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}images/arliven-logo.png`}
              alt="Arliven Medizyne"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav — centered */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-medium transition-colors relative py-1 ${
                  location === link.href
                    ? "text-[#0071c5]"
                    : "text-gray-700 hover:text-[#0071c5]"
                }`}
              >
                {link.name}
                {location === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#0071c5] rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
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
              className="ml-2 px-6 py-2.5 border-2 border-gray-800 text-gray-800 text-sm font-bold rounded hover:bg-gray-800 hover:text-white transition-all duration-200"
            >
              Send Inquiry
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-700"
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
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-medium py-2 px-3 rounded ${
                    location === link.href
                      ? "bg-blue-50 text-[#0071c5]"
                      : "text-gray-800"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-gray-100 my-1" />
              <div className="flex items-center gap-4 py-1">
                <a
                  href="https://wa.me/919049175132"
                  className="flex items-center gap-2 text-[#25D366] font-semibold"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </a>
                <a
                  href="mailto:info@arlivenmedizyne.com"
                  className="flex items-center gap-2 text-[#0071c5] font-semibold"
                >
                  <Mail className="w-5 h-5" /> Email
                </a>
              </div>
              <Link
                href="/contact"
                className="mt-1 text-center w-full py-3 border-2 border-gray-800 text-gray-800 font-bold rounded hover:bg-gray-800 hover:text-white transition-all"
              >
                Send Inquiry
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
