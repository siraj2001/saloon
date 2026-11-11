import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  Scissors,
  Sparkles,
  Droplets,
  Star,
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Calendar,
  Quote
} from "lucide-react";
import { TESTIMONIALS, SALON_INFO } from "@/lib/constants";

export default function Home() {
  const featuredServices = [
    {
      title: "Signature Haircut & Styling",
      tagline: "Precision Scissor & Fade Mastery",
      description: "Custom facial bone consultation, precision shears, taper or skin fades, hot lather neck cleanup, and matte pomade styling.",
      price: "From ₹120",
      duration: "30-45 mins",
      icon: <Scissors size={18} className="text-[#DFB982]" />,
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop",
      badge: "Classic Standard",
    },
    {
      title: "Royal Beard Sculpt & Shave",
      tagline: "Architectural Contouring & Hot Towel",
      description: "Straight-razor precision edging, cheekbone & neckline alignment, infused steaming towels, and nourishing sandalwood beard oil.",
      price: "From ₹80",
      duration: "20-30 mins",
      icon: <Sparkles size={18} className="text-[#DFB982]" />,
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop",
      badge: "Grooming Essential",
    },
    {
      title: "Restorative Spa & D-Tan Combos",
      tagline: "Deep Scalp Renewal & Facial Glow",
      description: "Intensive moisture hair spa creams, anti-tan herbal packs, papaya enzyme treatments, and imperial 24K gold peel-off mask rituals.",
      price: "From ₹399",
      duration: "45-150 mins",
      icon: <Droplets size={18} className="text-[#DFB982]" />,
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop",
      badge: "15+ Curated Combos",
    },
  ];

  const lookbookPreview = [
    {
      src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop",
      title: "Atelier Barber Station",
      category: "Ambiance",
      aspect: "aspect-[3/4]"
    },
    {
      src: "/gallery/hair-styles.webp",
      title: "Signature Haircut Guide",
      category: "Style Chart",
      aspect: "aspect-[3/4]"
    },
    {
      src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=800&auto=format&fit=crop",
      title: "Straight-Razor Ritual",
      category: "Traditional Shave",
      aspect: "aspect-[3/4]"
    },
    {
      src: "/gallery/beard-styles.png",
      title: "Beard Contouring Formats",
      category: "Style Chart",
      aspect: "aspect-[3/4]"
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full bg-[#080809] text-[#F5EFEB]">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Atelier Philosophy / About Narrative */}
        <section className="py-20 sm:py-28 md:py-36 lg:py-40 relative overflow-hidden bg-[#0A0A0D] border-t border-[#C8A97E]/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              {/* Editorial Photography */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/5] w-full border border-[#C8A97E]/15 overflow-hidden bg-[#121217]">
                  <Image
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop"
                    alt="Master Barber at work in MALIK Hair Saloon"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center filter brightness-[0.82] contrast-[1.05]"
                  />
                </div>
              </div>

              {/* Editorial Narrative */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-medium text-[#DFB982] mb-4">
                  The Atelier Philosophy
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#F5EFEB] leading-[1.18] mb-8">
                  Where Traditional Barbering Meets <span className="italic text-[#DFB982]">Modern Precision</span>.
                </h2>

                <div className="space-y-6 text-sm sm:text-base text-[#9E9991] font-light leading-[1.85]">
                  <p>
                    Nestled in Urapakkam, Chennai, <strong className="text-[#F5EFEB] font-normal">MALIK HAIR SALOON</strong> was founded on a simple ethos: men&apos;s grooming is an art of individuality, self-respect, and restorative focus.
                  </p>
                  <p>
                    From our signature scissor fades and straight-razor hot towel rituals to scalp therapies and skin de-tanning, each treatment is executed by seasoned barbers with over a decade of mastery.
                  </p>
                  <p>
                    We reject factory-line haircuts. When you take a seat in our chair, your features are analyzed, your time is respected, and you emerge with effortless confidence.
                  </p>
                </div>

                <div className="pt-10 mt-10 border-t border-[#C8A97E]/10 flex flex-wrap items-center gap-6">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#080809] bg-[#C8A97E] hover:bg-[#DFB982] transition-colors"
                  >
                    <span>Read Our Story</span>
                    <ArrowRight size={13} />
                  </Link>
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-[#F5EFEB] border border-[#C8A97E]/30 hover:border-[#DFB982] transition-colors"
                  >
                    <Calendar size={13} className="text-[#C8A97E]" />
                    <span>Reserve Chair</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Featured Services Preview */}
        <section className="py-20 sm:py-28 md:py-36 lg:py-40 bg-[#080809] text-[#F5EFEB]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 md:mb-24 pb-8 sm:pb-10 border-b border-[#C8A97E]/10 gap-6 sm:gap-8">
              <div className="max-w-xl">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-medium text-[#DFB982] block mb-3 sm:mb-4">
                  Signature Portfolio
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#F5EFEB] tracking-tight leading-[1.15]">
                  Crafted Services & <span className="italic text-[#DFB982]">Combos</span>
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-medium text-[#DFB982] hover:text-[#F5EFEB] transition-colors"
              >
                <span>View All 17 Packages</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {featuredServices.map((service, idx) => (
                <div
                  key={idx}
                  className="group bg-[#101015] border border-[#C8A97E]/10 hover:border-[#C8A97E]/40 transition-all duration-500 flex flex-col justify-between"
                >
                  {/* Clean Photography Frame */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-black">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.78] contrast-[1.05]"
                    />
                  </div>

                  {/* Body Content with Proportional Padding */}
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#7A766F] font-mono mb-4">
                        <span className="flex items-center gap-1.5">
                          <Clock size={12} className="text-[#C8A97E]" />
                          {service.duration}
                        </span>
                        <span className="text-[#DFB982] font-serif text-lg font-normal">{service.price}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#F5EFEB] mb-2 group-hover:text-[#DFB982] transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-[11px] text-[#DFB982] uppercase tracking-[0.18em] mb-4 font-medium">
                        {service.tagline}
                      </p>

                      <p className="text-sm text-[#9E9991] font-light leading-[1.8] mb-8">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-[#1C1C24] flex items-center justify-between">
                      <Link
                        href="/services"
                        className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#E8DFD5] group-hover:text-[#DFB982] transition-colors flex items-center gap-1.5"
                      >
                        <span>Details</span>
                        <ArrowRight size={12} />
                      </Link>

                      <Link
                        href="/book"
                        className="px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#080809] bg-[#C8A97E] hover:bg-[#DFB982] transition-colors"
                      >
                        Book Chair
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* In-Store Combo Spotlight Banner */}
            <div className="mt-16 sm:mt-20 md:mt-24 p-6 sm:p-10 lg:p-14 bg-[#0E0E13] border border-[#C8A97E]/15 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
              <div className="max-w-2xl">
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#DFB982] block mb-2">
                  Complete Grooming Transparency
                </span>
                <h4 className="text-2xl sm:text-3xl font-serif font-normal text-[#F5EFEB] mb-3">
                  15+ Curated Combo Packages from ₹399 to ₹1,999
                </h4>
                <p className="text-sm text-[#9E9991] font-light leading-[1.8]">
                  From essential haircuts with anti-tan face therapy to royal gold facials and L&apos;Oréal ammonia-free coloring.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
                <Link
                  href="/services"
                  className="w-full sm:w-auto text-center px-8 py-4 bg-[#C8A97E] hover:bg-[#DFB982] text-[#080809] text-xs font-semibold uppercase tracking-[0.22em] transition-colors"
                >
                  View All Combos
                </Link>
                <Link
                  href="/book"
                  className="w-full sm:w-auto text-center px-8 py-4 border border-[#C8A97E]/30 text-[#DFB982] text-xs font-medium uppercase tracking-[0.22em] hover:border-[#DFB982] transition-colors"
                >
                  Reserve Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us (Pillars of Distinction) */}
        <WhyChooseUs />

        {/* 5. Lookbook Gallery Preview */}
        <section className="py-20 sm:py-28 md:py-36 lg:py-40 bg-[#080809] text-[#F5EFEB] border-t border-[#C8A97E]/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 md:mb-24 pb-8 sm:pb-10 border-b border-[#C8A97E]/10 gap-6 sm:gap-8">
              <div className="max-w-xl">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-medium text-[#DFB982] block mb-3 sm:mb-4">
                  Visual Mastery
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#F5EFEB] tracking-tight leading-[1.15]">
                  The Gentleman&apos;s <span className="italic text-[#DFB982]">Lookbook</span>
                </h2>
              </div>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-medium text-[#DFB982] hover:text-[#F5EFEB] transition-colors"
              >
                <span>Open Full Gallery & Charts</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Lookbook 4-Column Grid with Consistent Aspect Ratios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
              {lookbookPreview.map((item, idx) => (
                <Link
                  key={idx}
                  href="/gallery"
                  className="group block"
                >
                  <div className="relative aspect-[3/4] w-full border border-[#C8A97E]/15 overflow-hidden bg-[#101015] mb-4 sm:mb-5">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.85] contrast-[1.05]"
                    />
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#DFB982] block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-base font-serif font-normal text-[#F5EFEB] group-hover:text-[#DFB982] transition-colors">
                    {item.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Customer Testimonials: Spacious 2-Column Luxury Layout */}
        <section className="py-20 sm:py-28 md:py-36 lg:py-40 bg-[#0A0A0D] text-[#F5EFEB] border-t border-[#C8A97E]/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 md:mb-24">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-medium text-[#DFB982] block mb-3 sm:mb-4">
                Client Accolades
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#F5EFEB] tracking-tight leading-[1.15] mb-5 sm:mb-6">
                Voices of <span className="italic text-[#DFB982]">Distinction</span>
              </h2>
              <p className="text-sm md:text-base text-[#9E9991] font-light leading-[1.8]">
                Discover why discerning gentlemen across Chennai choose MALIK Hair Saloon for their appearance.
              </p>

              {/* Verified Google Review Trust Badge */}
              <div className="mt-8 flex justify-center">
                <a
                  href={SALON_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#121217] border border-[#C8A97E]/20 hover:border-[#DFB982]/50 transition-all duration-300 group"
                  aria-label="Google Reviews: 5.0 out of 5 stars with 39 reviews"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-sm text-[#F5EFEB]">5.0</span>
                    <div className="flex text-[#DFB982]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={13} className="fill-[#DFB982] text-[#DFB982]" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[#55524E]">|</span>
                  <span className="text-xs text-[#9E9991] group-hover:text-[#F5EFEB] transition-colors">
                    (39) Google Reviews
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#C8A97E] font-medium border-l border-[#262630] pl-3">
                    Hairdresser
                  </span>
                </a>
              </div>
            </div>

            {/* Testimonials 2-Column Spacious Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  className="p-6 sm:p-10 lg:p-12 bg-[#101015] border border-[#C8A97E]/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6 sm:mb-8">
                      <Quote size={28} className="text-[#C8A97E]/30" />
                      <div className="flex items-center gap-1 text-[#DFB982]">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={13} className="fill-[#DFB982]" />
                        ))}
                      </div>
                    </div>

                    <p className="text-base sm:text-lg text-[#E8DFD5] font-light leading-[1.85] mb-8 sm:mb-10 italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#1C1C24] flex items-center justify-between gap-4">
                    <div>
                      <h4 className="text-base font-serif font-medium text-[#F5EFEB]">{t.name}</h4>
                      <p className="text-xs text-[#7A766F] font-light">{t.role}</p>
                    </div>
                    <span className="text-[10px] text-[#DFB982] uppercase tracking-[0.2em] font-mono">
                      {t.service}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Appointment Booking Concierge Banner */}
        <section className="py-16 sm:py-24 md:py-32 bg-[#0E0E13] border-t border-b border-[#C8A97E]/15">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.35em] font-medium text-[#DFB982] block mb-3">
                Priority Concierge
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#F5EFEB] tracking-tight leading-[1.18] mb-4 sm:mb-5">
                Ready For Your Signature <br className="hidden sm:inline" />
                <span className="italic text-[#DFB982]">Transformation?</span>
              </h2>
              <p className="text-sm md:text-base text-[#9E9991] font-light leading-[1.8]">
                Reserve your appointment online with our interactive booking system or connect instantly via WhatsApp.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full lg:w-auto shrink-0">
              <Link
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-9 py-3.5 sm:py-4 bg-[#C8A97E] hover:bg-[#DFB982] text-[#080809] text-xs font-semibold uppercase tracking-[0.22em] transition-colors"
              >
                <Calendar size={14} />
                <span>Reserve Appointment</span>
              </Link>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent("Hello MALIK Hair Saloon, I would like to book an appointment.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-9 py-3.5 sm:py-4 border border-emerald-500/30 text-emerald-400 text-xs font-medium uppercase tracking-[0.2em] hover:bg-emerald-950/20 transition-colors"
              >
                <MessageCircle size={14} />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </section>

        {/* 8. Contact & Location Section */}
        <section className="py-20 sm:py-28 md:py-36 lg:py-40 bg-[#080809] text-[#F5EFEB]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              {/* Location Particulars */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.35em] font-medium text-[#DFB982] block mb-3">
                    Location & Hours
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#F5EFEB] leading-snug">
                    Visit Our <span className="italic text-[#DFB982]">Chennai Atelier</span>
                  </h2>
                </div>

                <div className="space-y-6 text-sm text-[#9E9991] font-light leading-[1.8]">
                  <div className="flex items-start gap-4">
                    <MapPin size={18} className="text-[#DFB982] shrink-0 mt-1" />
                    <div>
                      <p className="font-normal text-[#F5EFEB] mb-1">Physical Address</p>
                      <p>{SALON_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone size={18} className="text-[#DFB982] shrink-0 mt-1" />
                    <div>
                      <p className="font-normal text-[#F5EFEB] mb-1">Direct Reservations</p>
                      <a href={`tel:${SALON_INFO.phone}`} className="hover:text-[#DFB982] transition-colors">
                        {SALON_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock size={18} className="text-[#DFB982] shrink-0 mt-1" />
                    <div>
                      <p className="font-normal text-[#F5EFEB] mb-1">Hours of Craft</p>
                      <p>Monday – Friday: 9:00 AM – 8:00 PM</p>
                      <p>Saturday: 10:00 AM – 9:00 PM</p>
                      <p>Sunday: 10:00 AM – 2:00 PM (Appointments Preferred)</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={SALON_INFO.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#C8A97E]/30 text-xs font-semibold uppercase tracking-[0.2em] text-[#DFB982] hover:border-[#DFB982] transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>

              {/* Real Embedded Google Map */}
              <div className="lg:col-span-7 h-[420px] lg:h-[480px] w-full border border-[#C8A97E]/15 overflow-hidden relative">
                <iframe
                  src={SALON_INFO.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="MALIK Hair Saloon Location Map"
                  className="filter grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
