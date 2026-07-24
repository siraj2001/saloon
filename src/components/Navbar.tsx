"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  theme?: "dark" | "light";
}

export default function Navbar({ theme = "dark" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  // Determine text colors based on scroll state and theme
  const isLightMode = theme === "light" && !isScrolled;
  const logoTextColor = isLightMode ? "text-black" : "text-white";
  const linkTextColor = isLightMode ? "text-gray-800 hover:text-black" : "text-gray-300 hover:text-white";
  const menuIconColor = isLightMode ? "text-black" : "text-white";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-md py-4 shadow-xl" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className={`text-2xl font-bold ${logoTextColor} tracking-wider font-serif transition-colors`}>
          MALIK <span className="text-[var(--color-brand-gold)]">Hair Point</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`${linkTextColor} transition-colors text-sm font-bold tracking-widest uppercase`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/book"
            className="px-5 py-2.5 bg-[var(--color-brand-gold)] text-black font-bold rounded hover:bg-yellow-500 transition-colors text-sm uppercase tracking-wider"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${menuIconColor} focus:outline-none transition-colors`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg flex flex-col items-center py-8 gap-6 shadow-xl border-t border-gray-800"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-[var(--color-brand-gold)] text-lg uppercase tracking-widest font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 bg-[var(--color-brand-gold)] text-black font-bold rounded hover:bg-yellow-500 transition-colors w-10/12 text-center uppercase tracking-wider"
          >
            Book Appointment
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
