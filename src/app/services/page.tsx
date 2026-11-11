import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import ServiceCatalog from "@/components/ServiceCatalog";
import { SERVICES, SALON_INFO } from "@/lib/constants";

export const metadata = {
  title: "Services & Curated Combos | MALIK Hair Saloon Chennai",
  description: "Explore 17 transparent grooming packages and bespoke haircut services at MALIK Hair Saloon in Urapakkam, Chennai.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 sm:pt-36 md:pt-44 pb-24 sm:pb-32 min-h-screen bg-[#080809] text-[#F5EFEB]">
        {/* Page Editorial Header with Generous Whitespace */}
        <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto mb-10 sm:mb-14">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-medium text-[#DFB982] block mb-3 sm:mb-4">
              The Grooming Menu
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-[#F5EFEB] tracking-tight leading-[1.15] mb-5 sm:mb-6">
              Services & <span className="italic text-[#DFB982]">Curated Combos</span>
            </h1>
            <p className="text-sm md:text-base text-[#9E9991] font-light leading-[1.85]">
              Every haircut, shave, and restorative treatment is performed with hospital-grade hygiene, premium L&apos;Oréal formulations, and master craftsmanship.
            </p>
          </div>

          <ServiceCatalog services={SERVICES} />
        </section>

        {/* Real Salon Price Chart Showcase: Spacious Split */}
        <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
          <div className="p-6 sm:p-10 lg:p-14 bg-[#0E0E13] border border-[#C8A97E]/15 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.35em] font-medium text-[#DFB982] block">
                Official In-Store Rate Card
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#F5EFEB] leading-snug">
                Authentic Transparent <span className="italic text-[#DFB982]">Pricing</span>
              </h2>
              <p className="text-sm text-[#9E9991] font-light leading-[1.85]">
                As displayed on our studio wall in Urapakkam, Chennai. We take pride in delivering master barber services with complete integrity and zero hidden fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2 sm:pt-4 w-full sm:w-auto">
                <Link
                  href="/book"
                  className="w-full sm:w-auto text-center px-8 py-3.5 sm:py-4 bg-[#C8A97E] hover:bg-[#DFB982] text-[#080809] text-xs font-semibold uppercase tracking-[0.22em] transition-colors"
                >
                  Schedule Appointment
                </Link>
                <a
                  href={`tel:${SALON_INFO.phone}`}
                  className="w-full sm:w-auto text-center px-8 py-3.5 sm:py-4 border border-[#C8A97E]/30 text-[#DFB982] hover:border-[#DFB982] text-xs font-semibold uppercase tracking-[0.22em] transition-colors"
                >
                  Call: +91 63984 74536
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] w-full border border-[#C8A97E]/20 bg-black overflow-hidden">
              <Image
                src="/gallery/price-chart.webp"
                alt="MALIK Hair Saloon Official Price Chart"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-4"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
