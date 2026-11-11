import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ExternalLink, Calendar, MessageCircle, ArrowUpRight, Star } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { SALON_INFO } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050507] text-[#F5EFEB] border-t border-[#C8A97E]/10 pt-20 sm:pt-28 md:pt-36 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Main Footer Grid with Generous Gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 pb-16 border-b border-[#181820]">
          {/* Col 1: Brand & Manifesto (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="mb-8">
                <BrandLogo size="lg" variant="gold" />
              </div>

              <p className="text-sm text-[#9E9991] font-light leading-[1.85] mb-8 max-w-sm">
                Chennai&apos;s sanctuary for the modern gentleman. Delivering precision haircuts, architectural beard grooming, and restorative rituals with 3+ years of dedicated mastery.
              </p>

              <a
                href={SALON_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#0E0E12] border border-[#C8A97E]/15 text-xs text-[#DFB982] hover:border-[#DFB982]/50 transition-colors group"
                aria-label="Google Rating: 5.0 out of 5 stars with 39 reviews"
              >
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-sm">5.0</span>
                  <div className="flex text-[#DFB982]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} className="fill-[#DFB982] text-[#DFB982]" />
                    ))}
                  </div>
                </div>
                <span className="text-[#6B6760]">|</span>
                <span className="text-[#E8DFD5]/80 group-hover:text-[#F5EFEB]">(39) Reviews · Hairdresser</span>
              </a>
            </div>

            <div className="mt-10">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C8A97E] hover:bg-[#DFB982] text-[#080809] text-xs font-semibold uppercase tracking-[0.2em] transition-colors"
              >
                <Calendar size={13} />
                <span>Reserve An Appointment</span>
              </Link>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#DFB982] mb-8">
              Directory
            </h4>
            <ul className="space-y-4 text-xs tracking-[0.18em] uppercase">
              <li>
                <Link href="/" className="text-[#9E9991] hover:text-[#DFB982] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#9E9991] hover:text-[#DFB982] transition-colors">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#9E9991] hover:text-[#DFB982] transition-colors">
                  About Atelier
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-[#9E9991] hover:text-[#DFB982] transition-colors">
                  Lookbook Gallery
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-[#DFB982] flex items-center gap-1">
                  Book Appointment <ArrowUpRight size={12} />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#9E9991] hover:text-[#DFB982] transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Combos (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#DFB982] mb-8">
              Popular Combos
            </h4>
            <ul className="space-y-4 text-xs text-[#9E9991] font-light">
              <li className="flex justify-between border-b border-[#14141A] pb-3">
                <span>Hair Cut & Precision Trim</span>
                <span className="text-[#DFB982] font-mono">₹120 / ₹80</span>
              </li>
              <li className="flex justify-between border-b border-[#14141A] pb-3">
                <span>Combo 1 (Haircut + Shave + D-Tan)</span>
                <span className="text-[#DFB982] font-mono">₹399</span>
              </li>
              <li className="flex justify-between border-b border-[#14141A] pb-3">
                <span>Combo 3 (Head Massage + D-Tan)</span>
                <span className="text-[#DFB982] font-mono">₹599</span>
              </li>
              <li className="flex justify-between border-b border-[#14141A] pb-3">
                <span>Combo 10 (Ammonia-Free Color)</span>
                <span className="text-[#DFB982] font-mono">₹1,099</span>
              </li>
              <li className="flex justify-between pb-1">
                <span>Combo 15 (Sovereign Gold Facial)</span>
                <span className="text-[#DFB982] font-mono">₹1,999</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#DFB982] mb-8">
              Visit The Atelier
            </h4>
            <div className="space-y-5 text-xs text-[#9E9991] font-light leading-[1.8]">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-[#DFB982] shrink-0 mt-1" />
                <span>{SALON_INFO.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={14} className="text-[#DFB982] shrink-0" />
                <a href={`tel:${SALON_INFO.phone}`} className="hover:text-[#DFB982] transition-colors font-mono">
                  {SALON_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle size={14} className="text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${SALON_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 text-emerald-400 transition-colors font-mono"
                >
                  WhatsApp: +91 63984 74536
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={14} className="text-[#DFB982] shrink-0" />
                <a href={`mailto:${SALON_INFO.email}`} className="hover:text-[#DFB982] transition-colors">
                  {SALON_INFO.email}
                </a>
              </div>

              <div className="pt-3 border-t border-[#14141A] flex items-start gap-3">
                <Clock size={14} className="text-[#DFB982] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#F5EFEB]">Mon – Sat: 9:00 AM – 8:00 PM</p>
                  <p className="text-[#7A766F]">Sun: 10:00 AM – 2:00 PM (Appointments)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Directions Strip with Comfortable Padding */}
        <div className="my-12 p-6 sm:p-8 bg-[#0A0A0D] border border-[#C8A97E]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-xs text-[#E8DFD5]">
            <div className="w-9 h-9 border border-[#C8A97E]/20 flex items-center justify-center shrink-0 text-[#DFB982]">
              <MapPin size={16} />
            </div>
            <div>
              <p className="font-normal text-sm">Located in Urapakkam, Chennai</p>
              <p className="text-[#7A766F] text-xs mt-0.5">Minutes from GST Road & Urapakkam Railway Station</p>
            </div>
          </div>

          <a
            href={SALON_INFO.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#C8A97E]/30 text-[#DFB982] text-xs font-semibold uppercase tracking-[0.2em] hover:border-[#DFB982] transition-colors"
          >
            <span>Navigate in Google Maps</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5A5752] font-light">
          <p>© {currentYear} MALIK HAIR SALOON (Malik Men&apos;s Hair Point). All rights reserved.</p>

          <p className="flex items-center gap-1.5">
            <span>Crafted by</span>
            <a
              href={SALON_INFO.developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9E9991] font-normal hover:text-[#DFB982] transition-colors underline underline-offset-4"
            >
              {SALON_INFO.developer.name}
            </a>
            <span className="text-[#5A5752]">({SALON_INFO.developer.phone})</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
