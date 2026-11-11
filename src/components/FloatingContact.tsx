"use client";

import { useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { SALON_INFO, SERVICES } from "@/lib/constants";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedService, setSelectedService] = useState(
    SERVICES[0]?.name ? `${SERVICES[0].name} - ₹${SERVICES[0].price}` : "Signature Haircut & Styling - ₹120"
  );

  // Default to today's date formatted as YYYY-MM-DD for min attribute
  const today = new Date().toISOString().split("T")[0];

  const handleStartWhatsApp = () => {
    const dateFormatted = selectedDate
      ? new Date(selectedDate).toLocaleDateString("en-IN", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "Flexible / Today";

    const message = `Hello MALIK Hair Saloon, ✂️
I would like to inquire about booking an appointment:
• Service: ${selectedService}
• Preferred Date: ${dateFormatted}

Please let me know chair availability and timings!`;

    const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <aside
      aria-label="WhatsApp Concierge"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end select-none"
    >
      {/* WhatsApp Chat Popover Card */}
      {isOpen && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 w-[310px] sm:w-[350px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#C8A97E]/30 mb-3 bg-[#F9F7F4] text-[#1E1E24]">
          {/* Header Bar */}
          <div className="bg-[#141419] px-4 py-3.5 sm:px-5 sm:py-4 flex items-center justify-between border-b border-[#252530]">
            <div className="flex items-center gap-3">
              {/* Monogram Avatar with Online Dot */}
              <div className="relative shrink-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#C8A97E] text-[#080809] flex items-center justify-center font-serif font-bold text-base sm:text-lg shadow-inner">
                  M
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-[#141419] rounded-full" />
              </div>

              {/* Title & Reply Status */}
              <div>
                <h4 className="font-serif text-sm sm:text-base font-medium text-[#F5EFEB] leading-tight">
                  MALIK Hair Saloon
                </h4>
                <p className="text-[11px] text-[#DFB982] flex items-center gap-1 mt-0.5">
                  <Sparkles size={11} className="text-[#DFB982] shrink-0" />
                  <span>Typically replies in 15 mins</span>
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#9E9991] hover:text-[#F5EFEB] p-1.5 transition-colors rounded-full hover:bg-white/10"
              aria-label="Close WhatsApp concierge"
            >
              <X size={18} />
            </button>
          </div>

          {/* Card Body */}
          <div className="p-4 sm:p-5 space-y-4">
            {/* Welcome Chat Bubble */}
            <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#E8E4DE] shadow-sm">
              <p className="font-semibold text-xs sm:text-sm text-[#141419] flex items-center gap-1.5 mb-1">
                <span>Hello Gentleman!</span>
                <span className="text-amber-500">✨</span>
              </p>
              <p className="text-xs text-[#55524E] leading-relaxed font-light">
                Welcome to MALIK Hair Saloon. Let us know your preferred date or service to check chair availability instantly!
              </p>
            </div>

            {/* Event / Preferred Date Input */}
            <div>
              <label
                htmlFor="wa-date-picker"
                className="block text-xs font-medium text-[#444] mb-1.5"
              >
                Preferred Date (Optional)
              </label>
              <input
                id="wa-date-picker"
                type="date"
                min={today}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-white border border-[#DCD7D0] focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366] rounded-xl px-3.5 py-2.5 text-xs text-[#222] focus:outline-none transition-all shadow-sm"
              />
            </div>

            {/* Service Required Dropdown */}
            <div>
              <label
                htmlFor="wa-service-select"
                className="block text-xs font-medium text-[#444] mb-1.5"
              >
                Service Required
              </label>
              <select
                id="wa-service-select"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-white border border-[#DCD7D0] focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366] rounded-xl px-3.5 py-2.5 text-xs text-[#222] focus:outline-none transition-all shadow-sm cursor-pointer"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={`${s.name} - ₹${s.price}`}>
                    {s.name} (₹{s.price})
                  </option>
                ))}
                <option value="Consultation & Custom Styling">
                  Consultation & Custom Styling
                </option>
              </select>
            </div>

            {/* Green Action Button */}
            <button
              onClick={handleStartWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#25D366] hover:bg-[#20BA5A] active:scale-[0.98] text-white font-semibold text-xs rounded-xl shadow-[0_4px_16px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_22px_rgba(37,211,102,0.5)] transition-all duration-300"
            >
              <Send size={14} className="fill-white" />
              <span>Start WhatsApp Inquiry</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-[0_6px_26px_rgba(37,211,102,0.5)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.7)] transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Toggle WhatsApp concierge chat"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X size={26} className="text-white" />
        ) : (
          <>
            <MessageCircle size={30} className="fill-current text-white" />
            {/* Pulsing Online Status Ring */}
            <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white" />
            </span>
          </>
        )}
      </button>
    </aside>
  );
}
