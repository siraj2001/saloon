"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, Star, Calendar } from "lucide-react";
import { ServiceItem, SALON_INFO } from "@/lib/constants";

interface ServiceCatalogProps {
  services: ServiceItem[];
}

export default function ServiceCatalog({ services }: ServiceCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    { id: "All", label: "All 17 Offerings" },
    { id: "Individual", label: "Individual Cuts" },
    { id: "Essentials", label: "Essentials (₹399 – ₹799)" },
    { id: "Luxury", label: "Imperial & Spa (₹899 – ₹1,999)" },
  ];

  const filteredServices = activeCategory === "All"
    ? services
    : services.filter((s) => s.category === activeCategory);

  return (
    <>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 mt-8 sm:mt-12 md:mt-16">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 sm:px-6 sm:py-3 text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] font-medium transition-all duration-300 ${
              activeCategory === cat.id
                ? "bg-[#C8A97E] text-[#080809] font-semibold"
                : "bg-[#101015] text-[#9E9991] border border-[#C8A97E]/15 hover:border-[#C8A97E]/40 hover:text-[#F5EFEB]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 2-Column Services Grid */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto my-16 sm:my-20 md:my-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="p-6 sm:p-8 lg:p-10 bg-[#101015] border border-[#C8A97E]/10 hover:border-[#C8A97E]/40 transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                {/* Top Line: Duration, ID, and Pick */}
                <div className="flex items-center justify-between text-xs text-[#7A766F] font-mono mb-6">
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} className="text-[#C8A97E]" />
                    {service.duration}
                  </span>
                  <div className="flex items-center gap-3">
                    {service.popular && (
                      <span className="flex items-center gap-1 text-[10px] text-[#DFB982] uppercase tracking-wider font-semibold">
                        <Star size={10} className="fill-[#DFB982]" /> Selected Pick
                      </span>
                    )}
                    <span className="text-[#3A3834]">•</span>
                    <span className="text-[#7A766F]">{service.id}</span>
                  </div>
                </div>

                {/* Title and Price */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-4">
                  <h3 className="text-2xl font-serif font-normal text-[#F5EFEB] group-hover:text-[#DFB982] transition-colors leading-snug">
                    {service.name}
                  </h3>
                  <span className="font-serif text-3xl font-normal text-[#DFB982] shrink-0">
                    ₹{service.price}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-[#9E9991] font-light leading-[1.8] mb-8">
                  {service.description}
                </p>

                {/* Features List */}
                {service.features && (
                  <div className="space-y-2.5 mb-10 pt-6 border-t border-[#1C1C24]">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 text-xs text-[#E8DFD5]/80 font-light">
                        <span className="w-1 h-1 rounded-full bg-[#C8A97E]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Bottom CTA */}
              <div className="pt-6 border-t border-[#1C1C24] flex items-center justify-between gap-6">
                <a
                  href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Hello MALIK Hair Saloon, I would like to inquire about ${service.name} (₹${service.price}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.18em] text-[#7A766F] hover:text-[#DFB982] transition-colors"
                >
                  Quick WhatsApp
                </a>

                <Link
                  href={`/book?service=${encodeURIComponent(`${service.name} - ₹${service.price}`)}`}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#080809] bg-[#C8A97E] hover:bg-[#DFB982] transition-colors"
                >
                  <Calendar size={13} />
                  <span>Book Service</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
