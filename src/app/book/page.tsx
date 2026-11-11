"use client";

import { useState, useSyncExternalStore, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Calendar as CalendarIcon,
  Clock,
  User,
  Scissors,
  Star,
  MessageCircle,
  ShieldCheck,
  X
} from "lucide-react";
import { SERVICES, STYLISTS, SALON_INFO } from "@/lib/constants";

type BookingData = {
  service: string;
  stylist: string;
  date: string;
  time: string;
  customerDetails: {
    name: string;
    phone: string;
    email: string;
    notes: string;
  };
};

const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

function BookingContent() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";
  const preselectedStylist = searchParams.get("stylist") || "";

  const [step, setStep] = useState(1);
  const isClient = useIsClient();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [whatsappShareUrl, setWhatsappShareUrl] = useState("");

  const [bookingData, setBookingData] = useState<BookingData>({
    service: preselectedService,
    stylist: preselectedStylist,
    date: "",
    time: "11:00 AM",
    customerDetails: { name: "", phone: "", email: "", notes: "" },
  });

  const [prevParams, setPrevParams] = useState({ service: preselectedService, stylist: preselectedStylist });
  if (prevParams.service !== preselectedService || prevParams.stylist !== preselectedStylist) {
    setPrevParams({ service: preselectedService, stylist: preselectedStylist });
    setBookingData((prev) => ({
      ...prev,
      service: preselectedService || prev.service,
      stylist: preselectedStylist || prev.stylist,
    }));
  }

  const timeSlots = [
    { period: "Morning", slots: ["09:30 AM", "10:15 AM", "11:00 AM", "11:45 AM"] },
    { period: "Afternoon", slots: ["12:30 PM", "01:15 PM", "02:30 PM", "03:15 PM"] },
    { period: "Evening", slots: ["04:00 PM", "04:45 PM", "05:30 PM", "06:15 PM", "07:00 PM"] },
  ];

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);

  const confirmBooking = () => {
    setIsSubmitting(true);
    const bookingId = "MB-" + Date.now().toString().slice(-6);

    const message = `*New Appointment Request* ✂️
━━━━━━━━━━━━━━━━━━━
*Booking ID:* ${bookingId}
*Salon:* MALIK Hair Saloon, Chennai

*Service:* ${bookingData.service}
*Barber:* ${bookingData.stylist || "First Available Master Barber"}
*Date:* ${bookingData.date}
*Time Slot:* ${bookingData.time}

*Client Particulars:*
*Name:* ${bookingData.customerDetails.name}
*Phone:* ${bookingData.customerDetails.phone}
*Email:* ${bookingData.customerDetails.email || "N/A"}
*Notes:* ${bookingData.customerDetails.notes || "None"}
━━━━━━━━━━━━━━━━━━━
Please confirm my appointment.`;

    const newBooking = {
      ...bookingData,
      id: bookingId,
      status: "Pending Confirmation",
    };

    // 1. Immediately dispatch to WhatsApp synchronously from click event
    const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    setWhatsappShareUrl(whatsappUrl);
    window.open(whatsappUrl, "_blank");

    // 2. Local Storage Persistence
    try {
      const existingBookings = JSON.parse(localStorage.getItem("malik_bookings") || "[]");
      localStorage.setItem("malik_bookings", JSON.stringify([...existingBookings, newBooking]));
    } catch (e) {
      console.error("Local storage error", e);
    }

    // 3. Google Sheets Backend Integration (non-blocking background sync)
    fetch(
      "https://script.google.com/macros/s/AKfycbxEJkZmtzAFTzECOQoBUgsxLjVxr9lEF5ythyNRtbBJ6MZYmQob7OV2EaexKoTXaPpUhg/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          id: newBooking.id,
          customerName: newBooking.customerDetails.name,
          phone: newBooking.customerDetails.phone,
          email: newBooking.customerDetails.email,
          service: newBooking.service,
          stylist: newBooking.stylist,
          date: `${newBooking.date} at ${newBooking.time}`,
          status: newBooking.status,
          sheetName: "Bookings",
        }),
      }
    ).catch((error) => {
      console.error("Failed to save booking to Google Sheets", error);
    });

    setIsSubmitting(false);
    setShowConfirmationPopup(true);
    setStep(6);
  };

  if (!isClient) return null;

  const filteredServicesList = selectedCategory === "All"
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
      {/* Editorial Title */}
      <div className="text-center mb-16 md:mb-20">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-medium text-[#DFB982] block mb-4">
          Concierge Reservation
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#F5EFEB] tracking-tight mb-4">
          Reserve Your <span className="italic text-[#DFB982]">Barber Chair</span>
        </h1>
        <p className="text-sm text-[#9E9991] font-light max-w-lg mx-auto leading-[1.8]">
          Select your desired treatment, master barber, and preferred timing. Verified instantly via our WhatsApp concierge.
        </p>
      </div>

      {/* Stepper with Generous Breathing Room */}
      {step < 6 && (
        <div className="mb-14 relative">
          <div className="flex justify-between items-center relative z-10">
            {[
              { num: 1, label: "Service" },
              { num: 2, label: "Barber" },
              { num: 3, label: "Date & Time" },
              { num: 4, label: "Particulars" },
              { num: 5, label: "Summary" },
            ].map((s) => {
              const isPassed = step > s.num;
              const isCurrent = step === s.num;
              return (
                <div key={s.num} className="flex flex-col items-center">
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 border ${
                      isCurrent
                        ? "bg-[#C8A97E] border-[#DFB982] text-[#080809]"
                        : isPassed
                        ? "bg-[#181820] border-[#C8A97E]/60 text-[#DFB982]"
                        : "bg-[#101015] border-[#222228] text-[#5A5752]"
                    }`}
                  >
                    {isPassed ? <CheckCircle2 size={16} /> : s.num}
                  </div>
                  <span
                    className={`text-[10px] uppercase tracking-wider mt-2.5 hidden sm:block ${
                      isCurrent ? "text-[#DFB982] font-semibold" : "text-[#7A766F]"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
          {/* Subtle Track Bar */}
          <div className="absolute top-4 sm:top-5 left-4 right-4 h-[1px] bg-[#222228] z-0">
            <div
              className="h-full bg-[#C8A97E] transition-all duration-500"
              style={{ width: `${((step - 1) / 4) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Spacious Main Booking Card */}
      <div className="bg-[#101015] border border-[#C8A97E]/15 p-5 sm:p-10 lg:p-14">
        {/* Step 1: Select Service */}
        {step === 1 && (
          <div className="animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#1E1E26] mb-6 sm:mb-8 gap-4">
              <h2 className="text-xl sm:text-2xl font-serif font-normal text-[#F5EFEB] flex items-center gap-2.5 sm:gap-3">
                <Scissors size={20} className="text-[#DFB982]" />
                <span>Select Grooming Service</span>
              </h2>

              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0">
                {["All", "Individual", "Essentials", "Luxury"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 sm:px-3.5 sm:py-1.5 text-[10px] uppercase tracking-wider font-semibold transition-colors shrink-0 ${
                      selectedCategory === cat
                        ? "bg-[#C8A97E] text-[#080809]"
                        : "bg-[#181820] text-[#9E9991] hover:text-[#F5EFEB]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 max-h-[480px] overflow-y-auto pr-1 sm:pr-2">
              {filteredServicesList.map((service) => {
                const serviceLabel = `${service.name} - ₹${service.price}`;
                const isSelected = bookingData.service === serviceLabel;
                return (
                  <div
                    key={service.id}
                    onClick={() => setBookingData({ ...bookingData, service: serviceLabel })}
                    className={`p-4 sm:p-6 border cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 ${
                      isSelected
                        ? "bg-[#161620] border-[#C8A97E]"
                        : "bg-[#121217] border-[#1E1E26] hover:border-[#C8A97E]/30"
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2.5 sm:gap-3 mb-1">
                        <span className="text-[10px] font-mono text-[#7A766F] uppercase">
                          {service.id}
                        </span>
                        <h3 className="font-serif font-normal text-base sm:text-xl text-[#F5EFEB]">
                          {service.name}
                        </h3>
                      </div>
                      <p className="text-xs text-[#9E9991] font-light line-clamp-1 mb-2">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-3 text-[11px] text-[#7A766F] font-mono">
                        <span className="flex items-center gap-1">
                          <Clock size={11} className="text-[#C8A97E]" /> {service.duration}
                        </span>
                        <span>•</span>
                        <span className="text-[#DFB982] uppercase">{service.category}</span>
                      </div>
                    </div>

                    <div className="flex sm:block items-center justify-between sm:text-right shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#1C1C24]">
                      <span className="text-[10px] sm:hidden uppercase tracking-wider text-[#7A766F] font-mono">Price</span>
                      <span className="font-serif text-xl sm:text-2xl font-normal text-[#DFB982]">
                        ₹{service.price}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2: Choose Stylist */}
        {step === 2 && (
          <div className="animate-in fade-in duration-300">
            <h2 className="text-2xl font-serif font-normal text-[#F5EFEB] mb-2 flex items-center gap-3">
              <User size={20} className="text-[#DFB982]" />
              <span>Select Master Barber</span>
            </h2>
            <p className="text-xs text-[#9E9991] mb-8 font-light">
              Choose your preferred craftsman or select First Available for priority scheduling.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Option: Any Master Barber */}
              <div
                onClick={() => setBookingData({ ...bookingData, stylist: "Any Available Master Barber" })}
                className={`p-8 border cursor-pointer transition-all flex flex-col justify-between ${
                  bookingData.stylist === "Any Available Master Barber"
                    ? "bg-[#161620] border-[#C8A97E]"
                    : "bg-[#121217] border-[#1E1E26] hover:border-[#C8A97E]/30"
                }`}
              >
                <div>
                  <span className="text-[10px] text-[#DFB982] uppercase tracking-[0.2em] font-medium block mb-2">
                    Priority Schedule
                  </span>
                  <h3 className="font-serif font-normal text-xl text-[#F5EFEB] mb-2">
                    First Available Master Barber
                  </h3>
                  <p className="text-xs text-[#9E9991] font-light leading-[1.8]">
                    We will pair you with the best available craftsman at your requested time. Ideal for quick or flexible appointments.
                  </p>
                </div>
                <span className="mt-6 text-[10px] text-emerald-400 uppercase tracking-wider font-semibold">
                  ● Maximum Availability
                </span>
              </div>

              {/* Individual Stylists */}
              {STYLISTS.map((stylist) => {
                const isSelected = bookingData.stylist === stylist.name;
                return (
                  <div
                    key={stylist.id}
                    onClick={() => setBookingData({ ...bookingData, stylist: stylist.name })}
                    className={`p-8 border cursor-pointer transition-all flex flex-col justify-between ${
                      isSelected
                        ? "bg-[#161620] border-[#C8A97E]"
                        : "bg-[#121217] border-[#1E1E26] hover:border-[#C8A97E]/30"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] text-[#DFB982] uppercase tracking-[0.2em] font-medium">
                          {stylist.role}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-[#DFB982]">
                          <Star size={11} className="fill-[#DFB982]" />
                          <span className="font-mono">{stylist.rating}</span>
                        </div>
                      </div>

                      <h3 className="font-serif font-normal text-xl text-[#F5EFEB] mb-2">
                        {stylist.name}
                      </h3>

                      <p className="text-xs text-[#9E9991] font-light leading-[1.8] line-clamp-2">
                        {stylist.specialization}
                      </p>
                    </div>

                    <span className="mt-6 text-[10px] text-[#7A766F] uppercase tracking-wider font-mono">
                      {stylist.experienceYears}+ Yrs Mastery
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 3: Date & Time */}
        {step === 3 && (
          <div className="animate-in fade-in duration-300">
            <h2 className="text-2xl font-serif font-normal text-[#F5EFEB] mb-2 flex items-center gap-3">
              <CalendarIcon size={20} className="text-[#DFB982]" />
              <span>Select Date & Preferred Time</span>
            </h2>
            <p className="text-xs text-[#9E9991] mb-8 font-light">
              Salon Operational Hours: Mon – Fri (9 AM – 8 PM), Sat (10 AM – 9 PM), Sun (10 AM – 2 PM).
            </p>

            <div className="space-y-8">
              {/* Date Input with Comfortable Height */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9E9991] font-medium mb-3">
                  Appointment Date *
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={bookingData.date}
                  onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                  className="w-full py-4 px-5 text-base bg-[#121217] border border-[#1E1E26] text-[#F5EFEB] focus:outline-none focus:border-[#C8A97E] transition-colors"
                />
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9E9991] font-medium mb-4">
                  Select Time Slot *
                </label>
                <div className="space-y-4 sm:space-y-5">
                  {timeSlots.map((group, gIdx) => (
                    <div key={gIdx} className="p-4 sm:p-6 bg-[#121217] border border-[#1E1E26]">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#DFB982] font-semibold block mb-3 sm:mb-4">
                        {group.period}
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                        {group.slots.map((slot) => {
                          const isSelected = bookingData.time === slot;
                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setBookingData({ ...bookingData, time: slot })}
                              className={`py-2.5 sm:py-3 px-2 sm:px-4 text-[11px] sm:text-xs font-mono whitespace-nowrap transition-all ${
                                isSelected
                                  ? "bg-[#C8A97E] text-[#080809] font-bold"
                                  : "bg-[#181820] text-[#E8DFD5] hover:bg-[#22222C]"
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Particulars */}
        {step === 4 && (
          <div className="animate-in fade-in duration-300">
            <h2 className="text-2xl font-serif font-normal text-[#F5EFEB] mb-2">
              Gentleman&apos;s Particulars
            </h2>
            <p className="text-xs text-[#9E9991] mb-8 font-light">
              Please provide your contact details for appointment confirmation.
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9E9991] font-medium mb-2.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vignesh Ramanathan"
                  value={bookingData.customerDetails.name}
                  onChange={(e) =>
                    setBookingData({
                      ...bookingData,
                      customerDetails: { ...bookingData.customerDetails, name: e.target.value },
                    })
                  }
                  className="w-full py-4 px-5 bg-[#121217] border border-[#1E1E26] text-[#F5EFEB] text-sm focus:outline-none focus:border-[#C8A97E]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#9E9991] font-medium mb-2.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={bookingData.customerDetails.phone}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        customerDetails: { ...bookingData.customerDetails, phone: e.target.value },
                      })
                    }
                    className="w-full py-4 px-5 bg-[#121217] border border-[#1E1E26] text-[#F5EFEB] text-sm focus:outline-none focus:border-[#C8A97E]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#9E9991] font-medium mb-2.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. vignesh@domain.com"
                    value={bookingData.customerDetails.email}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        customerDetails: { ...bookingData.customerDetails, email: e.target.value },
                      })
                    }
                    className="w-full py-4 px-5 bg-[#121217] border border-[#1E1E26] text-[#F5EFEB] text-sm focus:outline-none focus:border-[#C8A97E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9E9991] font-medium mb-2.5">
                  Special Notes or Style References (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Skin fade with low taper, sensitive skin on neck, pre-wedding grooming..."
                  value={bookingData.customerDetails.notes}
                  onChange={(e) =>
                    setBookingData({
                      ...bookingData,
                      customerDetails: { ...bookingData.customerDetails, notes: e.target.value },
                    })
                  }
                  className="w-full py-4 px-5 bg-[#121217] border border-[#1E1E26] text-[#F5EFEB] text-sm focus:outline-none focus:border-[#C8A97E] resize-none"
                ></textarea>
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Summary */}
        {step === 5 && (
          <div className="animate-in fade-in duration-300">
            <h2 className="text-2xl font-serif font-normal text-[#F5EFEB] mb-2">
              Appointment Summary
            </h2>
            <p className="text-xs text-[#9E9991] mb-8 font-light">
              Review your appointment reservation before dispatching confirmation.
            </p>

            <div className="p-5 sm:p-7 lg:p-8 bg-[#121217] border border-[#C8A97E]/20 space-y-4 sm:space-y-5 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#1E1E26] pb-3 sm:pb-4 gap-1 sm:gap-0">
                <span className="text-xs text-[#9E9991] uppercase tracking-wider">Service</span>
                <span className="font-serif text-[#DFB982] text-left sm:text-right font-medium">{bookingData.service}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#1E1E26] pb-3 sm:pb-4 gap-1 sm:gap-0">
                <span className="text-xs text-[#9E9991] uppercase tracking-wider">Master Barber</span>
                <span className="font-serif text-[#F5EFEB]">
                  {bookingData.stylist || "First Available Master Barber"}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#1E1E26] pb-3 sm:pb-4 gap-1 sm:gap-0">
                <span className="text-xs text-[#9E9991] uppercase tracking-wider">Date & Time</span>
                <span className="font-mono text-[#F5EFEB]">
                  {bookingData.date} at {bookingData.time}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#1E1E26] pb-3 sm:pb-4 gap-1 sm:gap-0">
                <span className="text-xs text-[#9E9991] uppercase tracking-wider">Client Name</span>
                <span className="text-[#F5EFEB]">{bookingData.customerDetails.name}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-0">
                <span className="text-xs text-[#9E9991] uppercase tracking-wider">Phone</span>
                <span className="font-mono text-[#DFB982]">{bookingData.customerDetails.phone}</span>
              </div>
            </div>

            <div className="p-6 bg-[#16161D] border border-[#1E1E26] flex items-center gap-4 text-xs text-[#9E9991] leading-[1.8]">
              <ShieldCheck size={22} className="text-emerald-400 shrink-0" />
              <span>
                Your booking details will be registered directly in our atelier system and forwarded to our official WhatsApp (+91 63984 74536) for immediate concierge confirmation.
              </span>
            </div>
          </div>
        )}

        {/* Step 6: Confirmation State */}
        {step === 6 && (
          <div className="py-12 text-center animate-in zoom-in duration-500">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={32} />
            </div>

            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#DFB982] block mb-3">
              Reservation Dispatched
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#F5EFEB] mb-4">
              Thank You, {bookingData.customerDetails.name}
            </h2>
            <p className="text-sm text-[#9E9991] max-w-md mx-auto mb-8 leading-[1.8] font-light">
              Your appointment request for <strong className="text-[#DFB982]">{bookingData.service}</strong> on{" "}
              <strong className="text-[#F5EFEB]">{bookingData.date} at {bookingData.time}</strong> has been transmitted to WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href={whatsappShareUrl || `https://wa.me/${SALON_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-[0.2em] transition-colors"
              >
                <MessageCircle size={15} />
                <span>Open WhatsApp Chat</span>
              </a>

              <button
                onClick={() => (window.location.href = "/")}
                className="w-full sm:w-auto px-8 py-4 border border-[#C8A97E]/30 text-[#DFB982] text-xs font-semibold uppercase tracking-[0.2em] hover:border-[#DFB982] transition-colors"
              >
                Return to Home
              </button>
            </div>
          </div>
        )}

        {/* Navigation Actions */}
        {step < 6 && (
          <div className="mt-12 pt-8 border-t border-[#1C1C24] flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={step === 1}
              className={`flex items-center gap-2 px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] transition-colors ${
                step === 1
                  ? "opacity-0 cursor-default pointer-events-none"
                  : "text-[#9E9991] hover:text-[#F5EFEB]"
              }`}
            >
              <ChevronLeft size={16} />
              <span>Back</span>
            </button>

            {step < 5 ? (
              <button
                onClick={handleNext}
                disabled={
                  (step === 1 && !bookingData.service) ||
                  (step === 3 && (!bookingData.date || !bookingData.time)) ||
                  (step === 4 && (!bookingData.customerDetails.name || !bookingData.customerDetails.phone))
                }
                className="flex items-center gap-2 px-8 py-3.5 bg-[#C8A97E] hover:bg-[#DFB982] text-[#080809] font-semibold text-xs uppercase tracking-[0.2em] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <span>Continue</span>
                <ChevronRight size={16} />
              </button>
            ) : (
              <button
                onClick={confirmBooking}
                disabled={isSubmitting}
                className="flex items-center gap-2 px-9 py-4 bg-[#C8A97E] hover:bg-[#DFB982] text-[#080809] font-bold text-xs uppercase tracking-[0.22em] transition-colors"
              >
                <CalendarIcon size={14} />
                <span>{isSubmitting ? "Confirming..." : "Confirm & Send to WhatsApp"}</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Luxury Confirmation Modal Popup */}
      <AnimatePresence>
        {showConfirmationPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#101015] border border-[#C8A97E]/30 w-full max-w-lg p-6 sm:p-10 shadow-[0_24px_64px_rgba(0,0,0,0.9)] text-center relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowConfirmationPopup(false)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 text-[#7A766F] hover:text-[#F5EFEB] transition-colors"
                aria-label="Close confirmation popup"
              >
                <X size={20} />
              </button>

              {/* Glowing Emerald Checkmark */}
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-[0_0_24px_rgba(16,185,129,0.25)]">
                <CheckCircle2 size={32} />
              </div>

              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#DFB982] block mb-2">
                Reservation Dispatched
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#F5EFEB] mb-3">
                Thank You, {bookingData.customerDetails.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#9E9991] max-w-md mx-auto mb-6 leading-[1.8] font-light">
                Your appointment request for <strong className="text-[#DFB982]">{bookingData.service}</strong> on{" "}
                <strong className="text-[#F5EFEB]">{bookingData.date} at {bookingData.time}</strong> has been transmitted to WhatsApp.
              </p>

              {/* Booking Summary Box */}
              <div className="bg-[#16161D] border border-[#1E1E26] p-4 sm:p-5 mb-8 text-left space-y-2.5 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-[#23232E]">
                  <span className="text-[#7A766F] uppercase tracking-wider text-[10px]">Barber</span>
                  <span className="text-[#F5EFEB] font-medium">{bookingData.stylist || "First Available Master Barber"}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#23232E]">
                  <span className="text-[#7A766F] uppercase tracking-wider text-[10px]">Client Phone</span>
                  <span className="text-[#DFB982] font-mono">{bookingData.customerDetails.phone}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#7A766F] uppercase tracking-wider text-[10px]">Concierge Status</span>
                  <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Dispatched to WhatsApp
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <a
                  href={whatsappShareUrl || `https://wa.me/${SALON_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-[0.2em] transition-colors"
                >
                  <MessageCircle size={15} />
                  <span>Open WhatsApp Chat</span>
                </a>

                <button
                  onClick={() => (window.location.href = "/")}
                  className="w-full sm:w-auto px-6 py-3.5 border border-[#C8A97E]/30 text-[#DFB982] text-xs font-semibold uppercase tracking-[0.2em] hover:border-[#DFB982] hover:bg-[#C8A97E]/10 transition-colors"
                >
                  Return to Home
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BookPage() {
  return (
    <>
      <Navbar />
      <main className="pt-36 md:pt-44 pb-32 min-h-screen bg-[#080809] text-[#F5EFEB]">
        <Suspense fallback={<div className="text-center py-20 text-[#DFB982] text-xs uppercase tracking-widest">Loading Concierge...</div>}>
          <BookingContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
