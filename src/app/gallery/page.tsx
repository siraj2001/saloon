"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { X, ZoomIn, Calendar, MessageCircle } from "lucide-react";
import { SALON_INFO } from "@/lib/constants";

interface GalleryImage {
  src: string;
  title: string;
  category: "Haircuts" | "Beards" | "Charts" | "Atelier";
  description: string;
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeTab, setActiveTab] = useState<string>("All");

  const images: GalleryImage[] = [
    {
      src: "/gallery/hair-styles.webp",
      title: "Signature Haircut Guide",
      category: "Charts",
      description: "Official salon reference chart featuring classic fades, pompadours, textured crops, and executive tapers."
    },
    {
      src: "/gallery/beard-styles.webp",
      title: "Beard Contouring Formats",
      category: "Charts",
      description: "Architectural jawline contours, stubble tapers, full beard sculpting, and mustache detailing."
    },
    {
      src: "/gallery/price-chart.webp",
      title: "Official Salon Price Matrix",
      category: "Charts",
      description: "Full in-store rate card of individual haircuts and 15+ comprehensive grooming combos."
    },
    {
      src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1000&auto=format&fit=crop",
      title: "Textured Crop & Low Skin Fade",
      category: "Haircuts",
      description: "Seamless graduation from skin to textured crown volume, finished with matte styling paste."
    },
    {
      src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop",
      title: "Architectural Beard Sculpting",
      category: "Beards",
      description: "Razor cheekbone definition, mustache alignment, and organic sandalwood beard oil."
    },
    {
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop",
      title: "The Atelier Barber Station",
      category: "Atelier",
      description: "Equipped with vintage leather hydraulic chairs, hot towel steamers, and UV tool sterilizers."
    },
    {
      src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000&auto=format&fit=crop",
      title: "Traditional Straight-Razor Ritual",
      category: "Beards",
      description: "Warm shaving cream application followed by traditional single-blade shaving and cold compress."
    },
    {
      src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1000&auto=format&fit=crop",
      title: "Master Styling Chair Suite",
      category: "Atelier",
      description: "Dedicated grooming station crafted for focused, unhurried gentleman appointments."
    },
    {
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1000&auto=format&fit=crop",
      title: "Precision Scissor Over Comb",
      category: "Haircuts",
      description: "Natural organic graduation and weight distribution tailored to natural crown whorls."
    }
  ];

  const tabs = [
    { id: "All", label: "All Works" },
    { id: "Haircuts", label: "Haircuts & Fades" },
    { id: "Beards", label: "Beard Architecture" },
    { id: "Charts", label: "Official Charts" },
    { id: "Atelier", label: "Atelier Ambiance" },
  ];

  const filteredImages = activeTab === "All"
    ? images
    : images.filter((img) => img.category === activeTab);

  return (
    <>
      <Navbar />
      <main className="pt-32 sm:pt-36 md:pt-44 pb-24 sm:pb-32 min-h-screen bg-[#080809] text-[#F5EFEB]">
        {/* Editorial Header */}
        <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto mb-16 sm:mb-20 md:mb-24">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-medium text-[#DFB982] block mb-3 sm:mb-4">
              Portfolio of Craft
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-[#F5EFEB] tracking-tight leading-[1.15] mb-5 sm:mb-6">
              The Gentleman&apos;s <span className="italic text-[#DFB982]">Lookbook</span>
            </h1>
            <p className="text-sm md:text-base text-[#9E9991] font-light leading-[1.85]">
              Explore signature scissor cuts, architectural fades, hot towel straight-razor shaves, and our official in-store style reference charts.
            </p>
          </div>

          {/* Minimal Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 mt-8 sm:mt-12 md:mt-16">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 sm:px-6 sm:py-3 text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#C8A97E] text-[#080809] font-semibold"
                    : "bg-[#101015] text-[#9E9991] border border-[#C8A97E]/15 hover:border-[#C8A97E]/40 hover:text-[#F5EFEB]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* Spacious 3-Column Gallery Grid */}
        <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {filteredImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(img)}
                className="group cursor-pointer block"
              >
                {/* Photo Frame with Consistent Aspect Ratio */}
                <div className="relative aspect-[3/4] w-full border border-[#C8A97E]/15 overflow-hidden bg-[#101015] mb-6">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.85] contrast-[1.05]"
                  />
                  <div className="absolute top-4 right-4 w-9 h-9 bg-[#080809]/80 border border-[#C8A97E]/20 flex items-center justify-center text-[#DFB982] opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={16} />
                  </div>
                </div>

                {/* Clean Captions Below Photo with Ample Breathing Room */}
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#DFB982] block mb-1">
                    {img.category}
                  </span>
                  <h3 className="text-xl font-serif font-normal text-[#F5EFEB] group-hover:text-[#DFB982] transition-colors mb-2 leading-snug">
                    {img.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9E9991] font-light leading-[1.8]">
                    {img.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#101015] border border-[#C8A97E]/25 overflow-hidden flex flex-col shadow-2xl max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="p-4 sm:p-6 border-b border-[#1E1E26] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#DFB982] block mb-1">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#F5EFEB]">{selectedImage.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 text-[#9E9991] hover:text-[#F5EFEB] transition-colors"
                  aria-label="Close dialog"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Modal Image View */}
              <div className="relative h-[45vh] sm:h-[58vh] max-h-[520px] w-full bg-black flex items-center justify-center p-2 sm:p-4">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {/* Modal Actions */}
              <div className="p-4 sm:p-6 border-t border-[#1E1E26] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                <p className="text-xs sm:text-sm text-[#9E9991] font-light leading-[1.8] max-w-md text-center sm:text-left">
                  {selectedImage.description}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Hello MALIK Hair Saloon, I would like to inquire about this style: ${selectedImage.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 border border-emerald-500/30 text-emerald-400 text-xs font-medium uppercase tracking-[0.18em] hover:bg-emerald-950/20 transition-colors"
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp Inquiry</span>
                  </a>

                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-[#C8A97E] hover:bg-[#DFB982] text-[#080809] text-xs font-semibold uppercase tracking-[0.18em] transition-colors"
                  >
                    <Calendar size={14} />
                    <span>Reserve Chair</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
