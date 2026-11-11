import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Scissors, ShieldCheck, Star, Calendar, Award } from "lucide-react";
import { STYLISTS } from "@/lib/constants";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 sm:pt-36 md:pt-44 pb-24 sm:pb-32 min-h-screen bg-[#080809] text-[#F5EFEB]">
        {/* Editorial Header */}
        <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto mb-16 sm:mb-20 md:mb-24">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-medium text-[#DFB982] block mb-3 sm:mb-4">
              The Atelier Heritage
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-[#F5EFEB] tracking-tight leading-[1.15] mb-5 sm:mb-6">
              The Art of <span className="italic text-[#DFB982]">Masculine Distinction</span>
            </h1>
            <p className="text-sm md:text-base text-[#9E9991] font-light leading-[1.85]">
              With 3+ years of dedicated artistry in Chennai, MALIK HAIR SALOON has elevated men&apos;s grooming into an experience where precision technique, uncompromised hygiene, and personal attention converge.
            </p>
          </div>
        </section>

        {/* Narrative & Story Split Section with Generous Whitespace */}
        <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28 md:mb-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
            {/* Clean Photographic Frame */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] w-full border border-[#C8A97E]/15 overflow-hidden bg-[#121217]">
                <Image
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop"
                  alt="Traditional grooming ritual at MALIK Hair Saloon"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center filter brightness-[0.82] contrast-[1.05]"
                />
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-medium text-[#DFB982] block mb-4">
                Our Genesis
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#F5EFEB] leading-snug mb-8">
                From a Single Chair to <br className="hidden sm:inline" />
                <span className="italic text-[#DFB982]">Chennai&apos;s Benchmark</span> for Men
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-[#9E9991] font-light leading-[1.85]">
                <p>
                  MALIK Hair Saloon began with a clear mission: to step away from the hurried, transactional atmosphere of conventional neighborhood salons and establish a genuine grooming sanctuary for Chennai&apos;s gentlemen.
                </p>
                <p>
                  Over the past decade, our Urapakkam studio has built a steadfast reputation across South Chennai. We believe every guest deserves an unhurried consultation, surgical precision, and restorative scalp and skin care.
                </p>
                <p>
                  Today, we continue to blend time-honored barber traditions—such as herbal hot towel compresses and single-blade lather shaves—with contemporary styling techniques and premium ammonia-free L&apos;Oréal color treatments.
                </p>
              </div>

              {/* Minimal Numbers */}
              <div className="pt-10 mt-10 grid grid-cols-2 gap-8 border-t border-[#C8A97E]/10">
                <div>
                  <p className="text-3xl font-serif font-normal text-[#DFB982]">3+ Years</p>
                  <p className="text-[10px] text-[#7A766F] uppercase tracking-[0.2em] mt-1">Mastery in Chennai</p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-3xl font-serif font-normal text-[#DFB982]">5.0</p>
                    <div className="flex text-[#DFB982]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={13} className="fill-[#DFB982] text-[#DFB982]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[10px] text-[#7A766F] uppercase tracking-[0.2em] mt-1">(39) Google Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Master Stylists & Barbers Showcase */}
        <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28 md:mb-36">
          <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 md:mb-24">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-medium text-[#DFB982] block mb-3 sm:mb-4">
              The Craftsmen
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#F5EFEB] tracking-tight leading-[1.15] mb-5 sm:mb-6">
              Meet Our <span className="italic text-[#DFB982]">Master Barbers</span>
            </h2>
            <p className="text-sm md:text-base text-[#9E9991] font-light leading-[1.8]">
              Dedicated specialists in precision scissor craft, modern fades, and therapeutic scalp care. Select your craftsman when reserving your chair.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {STYLISTS.map((stylist) => (
              <div
                key={stylist.id}
                className="bg-[#101015] border border-[#C8A97E]/15 hover:border-[#DFB982]/40 transition-all duration-500 p-8 sm:p-10 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Craftsman Monogram Crest & Star Rating */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#1E1E26]">
                    <div className="w-10 h-10 border border-[#C8A97E]/30 bg-[#0B0B0E] flex items-center justify-center text-[#DFB982] font-serif font-semibold text-base group-hover:border-[#DFB982] transition-colors">
                      {stylist.name.charAt(0)}
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-[#080809] border border-[#C8A97E]/20 text-xs text-[#DFB982]">
                      <Star size={11} className="fill-[#DFB982]" />
                      <span className="font-semibold">{stylist.rating}</span>
                    </div>
                  </div>

                  {/* Stylist Name & Role */}
                  <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#F5EFEB] mb-2 group-hover:text-[#DFB982] transition-colors">
                    {stylist.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.16em] text-[#DFB982] font-medium mb-6">
                    {stylist.role} • 5 Years Experience
                  </p>

                  {/* Bio Description */}
                  <p className="text-sm text-[#9E9991] font-light leading-[1.85] mb-8">
                    {stylist.specialization}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-6 border-t border-[#1C1C24] flex items-center justify-between">
                  <span className="text-[10px] text-[#7A766F] uppercase tracking-[0.2em]">
                    Urapakkam Studio
                  </span>
                  <Link
                    href={`/book?stylist=${encodeURIComponent(stylist.name)}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C8A97E] hover:bg-[#DFB982] text-[#080809] text-xs font-semibold uppercase tracking-[0.18em] transition-colors"
                  >
                    <Calendar size={12} />
                    <span>Book Chair</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3 Core Pillars with Proportional Padding */}
        <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <div className="p-6 sm:p-10 lg:p-12 bg-[#101015] border border-[#C8A97E]/10">
              <div className="w-9 h-9 border border-[#C8A97E]/20 flex items-center justify-center mb-6 sm:mb-8 text-[#DFB982]">
                <Scissors size={18} />
              </div>
              <h3 className="text-2xl font-serif font-normal text-[#F5EFEB] mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-sm text-[#9E9991] font-light leading-[1.85]">
                To elevate personal grooming into a ritual of self-respect. Delivering master scissor craftsmanship, bespoke beard architecture, and restorative wellness in an ambiance of understated luxury.
              </p>
            </div>

            <div className="p-6 sm:p-10 lg:p-12 bg-[#101015] border border-[#C8A97E]/10">
              <div className="w-9 h-9 border border-[#C8A97E]/20 flex items-center justify-center mb-6 sm:mb-8 text-[#DFB982]">
                <Award size={18} />
              </div>
              <h3 className="text-2xl font-serif font-normal text-[#F5EFEB] mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-sm text-[#9E9991] font-light leading-[1.85]">
                To stand as Chennai&apos;s benchmark for authentic gentleman barbering—fostering lasting client relationships built on unyielding quality, ethical pricing, and continuous technical refinement.
              </p>
            </div>

            <div className="p-6 sm:p-10 lg:p-12 bg-[#101015] border border-[#C8A97E]/10">
              <div className="w-9 h-9 border border-[#C8A97E]/20 flex items-center justify-center mb-6 sm:mb-8 text-[#DFB982]">
                <ShieldCheck size={18} />
              </div>
              <h3 className="text-2xl font-serif font-normal text-[#F5EFEB] mb-3 sm:mb-4">Hygiene Guarantee</h3>
              <p className="text-sm text-[#9E9991] font-light leading-[1.85]">
                Hospital-grade autoclave sterilization, disposable single-use neck strips, fresh surgical razor blades for every guest, and organic skincare formulations that protect scalp integrity.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
