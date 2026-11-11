import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, ShieldCheck, Clock, MapPin, Star } from "lucide-react";
import { SALON_INFO } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden pt-36 pb-24 md:pt-44 md:pb-28 bg-[#080809]">
      {/* Background with Atmospheric Depth */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=75&auto=format&fit=crop&w=1920"
          alt="MALIK Hair Saloon Atelier Interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.28] contrast-[1.08]"
        />
        {/* Soft Vignette and Gentle Darkening */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080809] via-[#080809]/50 to-[#080809]/80" />
      </div>

      {/* Main Editorial Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 w-full flex flex-col items-center text-center animate-in fade-in duration-700">
        {/* Editorial Eyebrow */}
        <div className="mb-6 md:mb-8">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-medium text-[#DFB982]">
            Men&apos;s Grooming Atelier • Chennai
          </span>
        </div>

        {/* Master Headline with Breathing Room */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-[#F5EFEB] tracking-tight leading-[1.12] mb-6 sm:mb-8 max-w-4xl">
          Crafting The Modern <br className="hidden sm:inline" />
          <span className="italic text-[#DFB982]">Gentleman&apos;s</span> Standard.
        </h1>

        {/* Relaxed Narrative Prose */}
        <p className="text-sm sm:text-base md:text-lg text-[#E8DFD5]/70 max-w-2xl mx-auto font-light leading-[1.8] mb-10 sm:mb-12">
          Bespoke scissor work, architectural beard sculpting, and restorative hot towel therapies. Tailored for individuals who value craftsmanship and unhurried distinction.
        </p>

        {/* Action Group */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto mb-12 sm:mb-14">
          <Link
            href="/book"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-9 py-3.5 sm:py-4 text-xs uppercase tracking-[0.22em] font-semibold text-[#080809] bg-[#C8A97E] hover:bg-[#DFB982] transition-all duration-300"
          >
            <Calendar size={14} />
            <span>Reserve Appointment</span>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-9 py-3.5 sm:py-4 text-xs uppercase tracking-[0.22em] font-medium text-[#F5EFEB] border border-[#C8A97E]/30 hover:border-[#DFB982] hover:bg-[#121217]/50 transition-all duration-300"
          >
            <span>View 17 Packages</span>
            <ArrowRight size={13} className="text-[#DFB982]" />
          </Link>
        </div>

        {/* Minimal Salon Coordinates Footnote */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-[#7A766F] tracking-wide mb-12 sm:mb-16">
          <span className="flex items-center gap-2">
            <MapPin size={12} className="text-[#C8A97E]" />
            Urapakkam, Chennai
          </span>
          <span className="text-[#3A3834] hidden sm:inline">•</span>
          <span className="flex items-center gap-2">
            <Clock size={12} className="text-[#C8A97E]" />
            Mon – Sat: 9:00 AM – 8:00 PM
          </span>
          <span className="text-[#3A3834] hidden sm:inline">•</span>
          <span className="text-[#DFB982]">Appointments & Walk-ins</span>
        </div>

        {/* Architectural Credentials Strip: Clean & Spacious */}
        <div className="w-full pt-8 sm:pt-10 md:pt-12 border-t border-[#C8A97E]/15 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl md:text-3xl font-serif text-[#DFB982] font-normal mb-1">3+ Years</span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#7A766F]">Mastery in Chennai</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl md:text-3xl font-serif text-[#DFB982] font-normal mb-1">17 Packages</span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#7A766F]">From ₹80 to ₹1,999</span>
          </div>

          <a
            href={SALON_INFO.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group cursor-pointer transition-transform hover:scale-[1.03]"
            aria-label="View 5.0 rated Google Reviews for MALIK Hair Saloon"
          >
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-xl sm:text-2xl md:text-3xl font-serif text-[#DFB982] font-normal">5.0</span>
              <div className="flex items-center text-[#DFB982]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-[#DFB982] text-[#DFB982]" />
                ))}
              </div>
            </div>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#7A766F] group-hover:text-[#DFB982] transition-colors">
              (39) Google Reviews
            </span>
          </a>

          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl md:text-3xl font-serif text-[#DFB982] font-normal mb-1 flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-[#DFB982]" /> Clinical
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#7A766F]">Sterilized Hygiene</span>
          </div>
        </div>
      </div>
    </section>
  );
}
