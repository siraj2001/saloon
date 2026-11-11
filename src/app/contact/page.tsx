"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, Navigation } from "lucide-react";
import { SALON_INFO } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceInterested: "General Inquiry",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const waText = encodeURIComponent(
      `*New Message from Website* ✉️\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email || "Not provided"}\n*Interest:* ${formData.serviceInterested}\n*Message:* ${formData.message}`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(`https://wa.me/${SALON_INFO.whatsappNumber}?text=${waText}`, "_blank");
    }, 500);
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 sm:pt-36 md:pt-44 pb-24 sm:pb-32 min-h-screen bg-[#080809] text-[#F5EFEB]">
        {/* Editorial Header */}
        <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto mb-16 sm:mb-20 md:mb-24">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-medium text-[#DFB982] block mb-3 sm:mb-4">
              Concierge & Atelier
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-[#F5EFEB] tracking-tight leading-[1.15] mb-5 sm:mb-6">
              Connect With <span className="italic text-[#DFB982]">Our Salon</span>
            </h1>
            <p className="text-sm md:text-base text-[#9E9991] font-light leading-[1.85]">
              Have a question regarding our grooming combos, styling packages, or location in Urapakkam? Our concierge team is at your service.
            </p>
          </div>
        </section>

        {/* Content Grid: Form + Contact Cards with Generous Gaps */}
        <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            {/* Contact Form (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 bg-[#101015] border border-[#C8A97E]/15">
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#DFB982] block mb-2">
                Direct Inquiry
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#F5EFEB] mb-8">
                Send Us a Note
              </h2>

              {isSubmitted ? (
                <div className="p-10 text-center bg-[#14141C] border border-emerald-500/30">
                  <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={30} />
                  </div>
                  <h3 className="text-2xl font-serif font-normal text-[#F5EFEB] mb-2">Message Dispatched</h3>
                  <p className="text-sm text-[#9E9991] mb-8 max-w-md mx-auto leading-[1.8] font-light">
                    Thank you, {formData.name}. We have forwarded your message to our WhatsApp concierge for prompt assistance.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 border border-[#C8A97E]/30 text-xs font-semibold uppercase tracking-[0.2em] text-[#DFB982] hover:border-[#DFB982]"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#9E9991] font-medium mb-2.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand Sundaram"
                        className="w-full py-4 px-5 bg-[#14141A] border border-[#1E1E26] text-[#F5EFEB] placeholder-[#5A5752] text-sm focus:outline-none focus:border-[#C8A97E] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#9E9991] font-medium mb-2.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full py-4 px-5 bg-[#14141A] border border-[#1E1E26] text-[#F5EFEB] placeholder-[#5A5752] text-sm focus:outline-none focus:border-[#C8A97E] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#9E9991] font-medium mb-2.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. anand@domain.com"
                        className="w-full py-4 px-5 bg-[#14141A] border border-[#1E1E26] text-[#F5EFEB] placeholder-[#5A5752] text-sm focus:outline-none focus:border-[#C8A97E] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#9E9991] font-medium mb-2.5">
                        Service of Interest
                      </label>
                      <select
                        value={formData.serviceInterested}
                        onChange={(e) => setFormData({ ...formData, serviceInterested: e.target.value })}
                        className="w-full py-4 px-5 bg-[#14141A] border border-[#1E1E26] text-[#F5EFEB] text-sm focus:outline-none focus:border-[#C8A97E] transition-colors"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Haircut & Styling">Signature Haircut & Styling</option>
                        <option value="Beard Trim & Sculpt">Beard Trim & Sculpt</option>
                        <option value="Combos (₹399 - ₹799)">Essential Combos (₹399 - ₹799)</option>
                        <option value="Luxury Combos (₹899 - ₹1,999)">Royal & Luxury Combos (₹899 - ₹1,999)</option>
                        <option value="L'Oréal Ammonia-Free Hair Color">L&apos;Oréal Ammonia-Free Hair Color</option>
                        <option value="Wedding / Groom Package">Wedding / Groom Package</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#9E9991] font-medium mb-2.5">
                      Your Message or Inquiry *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you're looking for or mention your preferred timing..."
                      className="w-full py-4 px-5 bg-[#14141A] border border-[#1E1E26] text-[#F5EFEB] placeholder-[#5A5752] text-sm focus:outline-none focus:border-[#C8A97E] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#C8A97E] hover:bg-[#DFB982] text-[#080809] font-bold text-xs uppercase tracking-[0.22em] transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={14} />
                    <span>{isSubmitting ? "Dispatching..." : "Submit & Connect via WhatsApp"}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Atelier Information (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Coordinates Card */}
              <div className="p-6 sm:p-8 lg:p-10 bg-[#101015] border border-[#C8A97E]/15 space-y-6 sm:space-y-8">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#DFB982] block mb-2">
                    Coordinates
                  </span>
                  <h3 className="text-2xl font-serif font-normal text-[#F5EFEB]">Atelier Location</h3>
                </div>

                <div className="space-y-6 text-sm text-[#9E9991] font-light leading-[1.8]">
                  <div className="flex items-start gap-4">
                    <MapPin size={18} className="text-[#DFB982] shrink-0 mt-1" />
                    <div>
                      <p className="font-normal text-[#F5EFEB] mb-1">Physical Address</p>
                      <p>{SALON_INFO.address}</p>
                      <p className="text-xs text-[#DFB982] mt-1 font-mono">{SALON_INFO.landmark}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone size={18} className="text-[#DFB982] shrink-0 mt-1" />
                    <div>
                      <p className="font-normal text-[#F5EFEB] mb-1">Telephone</p>
                      <a href={`tel:${SALON_INFO.phone}`} className="hover:text-[#DFB982] transition-colors font-mono">
                        {SALON_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MessageCircle size={18} className="text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <p className="font-normal text-[#F5EFEB] mb-1">WhatsApp Concierge</p>
                      <a
                        href={`https://wa.me/${SALON_INFO.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 transition-colors font-mono"
                      >
                        +91 63984 74536 (Instant Chat)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail size={18} className="text-[#DFB982] shrink-0 mt-1" />
                    <div>
                      <p className="font-normal text-[#F5EFEB] mb-1">Electronic Mail</p>
                      <a href={`mailto:${SALON_INFO.email}`} className="hover:text-[#DFB982] transition-colors">
                        {SALON_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="p-6 sm:p-8 lg:p-10 bg-[#101015] border border-[#C8A97E]/15">
                <div className="flex items-center gap-3 mb-6">
                  <Clock size={18} className="text-[#DFB982]" />
                  <h3 className="text-xl font-serif font-normal text-[#F5EFEB]">Operational Hours</h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  {SALON_INFO.hours.map((item, idx) => (
                    <div key={idx} className="flex justify-between border-b border-[#1C1C24] pb-3 last:border-0 last:pb-0">
                      <span className="text-[#7A766F]">{item.days}</span>
                      <span className="text-[#F5EFEB] font-light">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Embedded Interactive Map */}
        <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
          <div className="p-6 sm:p-8 lg:p-10 bg-[#101015] border border-[#C8A97E]/15">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-[#1E1E26] gap-4">
              <div>
                <h3 className="text-2xl font-serif font-normal text-[#F5EFEB]">Atelier Location Map</h3>
                <p className="text-xs text-[#7A766F] mt-1">Urapakkam West, Chennai, Tamil Nadu</p>
              </div>
              <a
                href={SALON_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#C8A97E]/30 text-[#DFB982] text-xs font-semibold uppercase tracking-[0.2em] hover:border-[#DFB982] transition-colors"
              >
                <Navigation size={13} />
                <span>Navigate in Google Maps</span>
              </a>
            </div>

            <div className="h-[420px] w-full bg-black overflow-hidden relative">
              <iframe
                src={SALON_INFO.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Google Maps Location for MALIK Hair Saloon"
                className="filter grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
