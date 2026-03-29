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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-white py-5 border-b border-border/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src={`${import.meta.env.BASE_URL}images/arliven-logo.png`} 
              alt="Arliven Medizyne" 
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-primary relative py-1 ${
                  location === link.href ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.name}
                {location === link.href && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 mr-2">
              <a 
                href="https://wa.me/919049175132" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white hover:scale-110 transition-all"
                title="WhatsApp Us"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="mailto:info@arlivenmedizyne.com" 
                className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white hover:scale-110 transition-all"
                title="Email Us"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <Link 
              href="/contact"
              className="px-6 py-2.5 rounded-full bg-primary text-white text-sm font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Send Inquiry
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`text-lg font-semibold p-2 rounded-lg ${
                    location === link.href ? "bg-primary/10 text-primary" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              <div className="flex items-center gap-4 p-2">
                <a href="https://wa.me/919049175132" className="flex items-center gap-2 text-[#25D366] font-semibold">
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </a>
                <a href="mailto:info@arlivenmedizyne.com" className="flex items-center gap-2 text-primary font-semibold">
                  <Mail className="w-5 h-5" /> Email
                </a>
              </div>
              <Link 
                href="/contact"
                className="mt-2 text-center w-full py-3 rounded-xl bg-primary text-white font-bold"
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
