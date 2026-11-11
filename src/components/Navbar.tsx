"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Clock, MapPin, Calendar, MessageCircle } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { SALON_INFO } from "@/lib/constants";

interface NavbarProps {
  theme?: "dark" | "light";
}

export default function Navbar({}: NavbarProps = {}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const desktopNavLinks = [
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Lookbook", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const mobileNavLinks = [
    { name: "Home", path: "/" },
    { name: "Services & Pricing", path: "/services" },
    { name: "About Atelier", path: "/about" },
    { name: "Lookbook Gallery", path: "/gallery" },
    { name: "Contact & Location", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#080809]/95 backdrop-blur-md py-4 sm:py-5 border-b border-[#C8A97E]/10 shadow-[0_12px_36px_rgba(0,0,0,0.8)]"
            : "bg-gradient-to-b from-[#080809]/80 via-[#080809]/30 to-transparent py-5 sm:py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex justify-between items-center gap-4">
          {/* Brand Logo with Generous Presence */}
          <div className="shrink-0 py-1 mr-2 xl:mr-6">
            <BrandLogo size="md" variant="gold" />
          </div>

          {/* Desktop Navigation Links with Generous Gaps & Single-Line Guarantee */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10" aria-label="Main Navigation">
            {desktopNavLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative py-2 text-xs uppercase tracking-[0.2em] font-medium whitespace-nowrap transition-colors duration-300 ${
                    isActive
                      ? "text-[#DFB982] font-semibold"
                      : "text-[#E8DFD5]/70 hover:text-[#DFB982]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C8A97E]"
                      transition={{ type: "spring", stiffness: 350, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs: Dial & Reserve with No-Wrap Guarantee */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7 shrink-0">
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="flex items-center gap-2 text-xs tracking-wider uppercase text-[#E8DFD5]/75 hover:text-[#C8A97E] transition-colors py-2 whitespace-nowrap shrink-0"
              aria-label="Call salon"
            >
              <Phone size={13} className="text-[#C8A97E] shrink-0" />
              <span className="font-mono text-xs tracking-widest">{SALON_INFO.phoneDisplay}</span>
            </a>

            <Link
              href="/book"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#080809] bg-[#C8A97E] hover:bg-[#DFB982] transition-all duration-300 active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              <span className="flex items-center gap-2">
                <Calendar size={13} />
                Reserve Chair
              </span>
            </Link>
          </div>

          {/* Mobile & Tablet Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-3 sm:gap-4 shrink-0">
            <Link
              href="/book"
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 text-[10px] uppercase tracking-wider font-semibold text-[#080809] bg-[#C8A97E] whitespace-nowrap shrink-0"
            >
              Book
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#F5EFEB] hover:text-[#C8A97E] focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Spacious Mobile & Tablet Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[76px] z-40 bg-[#080809]/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between px-6 sm:px-10 py-10 border-t border-[#C8A97E]/15 overflow-y-auto"
          >
            <div className="flex flex-col space-y-8 pt-2">
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#C8A97E] font-medium">
                Menu Directory
              </span>
              <div className="flex flex-col space-y-5">
                {mobileNavLinks.map((link, idx) => {
                  const isActive = pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-2xl font-serif tracking-wide py-2.5 border-b border-[#1E1E26] flex items-center justify-between transition-colors ${
                        isActive ? "text-[#DFB982] font-semibold" : "text-[#E8DFD5] hover:text-[#C8A97E]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <span className="text-xs font-mono text-[#7A766F]">0{idx + 1}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Booking CTAs with generous spacing */}
              <div className="pt-6 flex flex-col gap-4">
                <Link
                  href="/book"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-4 bg-[#C8A97E] hover:bg-[#DFB982] text-[#080809] font-bold text-xs uppercase tracking-[0.22em] text-center transition-colors"
                >
                  Reserve Your Appointment
                </Link>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href={`tel:${SALON_INFO.phone}`}
                    className="flex items-center justify-center gap-2 py-3.5 border border-[#C8A97E]/30 bg-[#121216] text-[#F5EFEB] text-xs font-medium uppercase tracking-wider"
                  >
                    <Phone size={13} className="text-[#C8A97E]" />
                    Direct Call
                  </a>
                  <a
                    href={`https://wa.me/${SALON_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3.5 border border-emerald-500/30 bg-[#121216] text-emerald-400 text-xs font-medium uppercase tracking-wider"
                  >
                    <MessageCircle size={13} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Salon Coordinates in Drawer */}
            <div className="pt-8 pb-4 text-xs text-[#7A766F] space-y-2.5 border-t border-[#1E1E26] mt-8">
              <div className="flex items-center gap-2 text-[#E8DFD5]/80">
                <Clock size={13} className="text-[#C8A97E]" />
                <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={13} className="text-[#C8A97E] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{SALON_INFO.address}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
