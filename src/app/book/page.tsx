"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ChevronRight, Calendar as CalendarIcon, Clock, User, Scissors } from "lucide-react";

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

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData>({
    service: "",
    stylist: "",
    date: "",
    time: "",
    customerDetails: { name: "", phone: "", email: "", notes: "" }
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const services = [
    "Hair Cut - ₹120", 
    "Beard Trim - ₹80", 
    "Combo 1 (Hair Cut + Shave + D.tan) - ₹399",
    "Combo 2 (Hair Cut + Shave + color + face cleansing) - ₹499",
    "Combo 3 (Hair Cut + Shave + D.tan + head massage) - ₹599",
    "Combo 4 (Hair Cut + Shave + hair spa + face cleansing) - ₹599",
    "Combo 5 (Hair Cut + Shave + color + D.tan) - ₹699",
    "Combo 6 (Hair Cut + Shave + advance fruit facial) - ₹699",
    "Combo 7 (Hair Cut + Shave + hair spa + D.tan) - ₹799",
    "Combo 8 (Hair Cut + Shave + D.tan + advance fruit facial) - ₹899",
    "Combo 9 (Hair Cut + Shave + papaya facial + D.tan) - ₹999",
    "Combo 10 (Hair Cut + Shave + D.tan + amonia free hair) - ₹1099",
    "Combo 11 (Hair Cut + Shave + D.tan + fruit facial + color) - ₹1199",
    "Combo 12 (Hair Cut + Shave + papaya facial + advance hair spa) - ₹1299",
    "Combo 13 (Hair Cut + Shave + advance hair spa + Gold peel of mask) - ₹1599",
    "Combo 14 (Hair Cut + Shave + D.tan + advance hair spa + Gold facial) - ₹1799",
    "Combo 15 (Hair Cut + Shave + D.tan + Loreal amonia free hair + Gold facial) - ₹1999"
  ];
  const stylists = [
    { 
      name: "Mustafah", 
      role: "Master Stylist",
      brief: "Over 15 years of experience crafting signature looks."
    },
    { 
      name: "Farooq", 
      role: "Color Expert",
      brief: "Specializes in creative coloring and advanced hair spa treatments."
    },
    { 
      name: "Malik 3", 
      role: "Senior Barber",
      brief: "Master of classic fades and luxury hot towel shaves."
    }
  ];
  const timeSlots = ["10:00 AM", "11:00 AM", "12:30 PM", "2:00 PM", "3:30 PM", "5:00 PM"];

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const confirmBooking = () => {
    // Save to local storage
    const existingBookings = JSON.parse(localStorage.getItem("malik_bookings") || "[]");
    const newBooking = { ...bookingData, id: Date.now().toString(), status: "Confirmed" };
    localStorage.setItem("malik_bookings", JSON.stringify([...existingBookings, newBooking]));
    setStep(7); // Success step
  };

  if (!isClient) return null;

  return (
    <>
      <Navbar theme="light" />
      <main className="pt-32 pb-24 min-h-screen bg-[var(--color-brand-gray)] text-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-black">Book Appointment</h1>
            <p className="text-gray-600">Reserve your premium grooming session.</p>
          </div>

          {/* Progress Bar */}
          {step < 7 && (
            <div className="flex justify-between items-center mb-12 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 z-0"></div>
              <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[var(--color-brand-gold)] z-0 transition-all duration-300" 
                style={{ width: `${((step - 1) / 5) * 100}%` }}
              ></div>
              
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 ${
                  step >= num ? "bg-[var(--color-brand-gold)] border-[var(--color-brand-gold)] text-black" : "bg-white border-gray-200 text-gray-400"
                }`}>
                  {num < step ? <CheckCircle2 size={20} /> : num}
                </div>
              ))}
            </div>
          )}

          {/* Steps */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
            
            {/* Step 1: Service */}
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl font-bold font-serif mb-6 flex items-center gap-3"><Scissors className="text-[var(--color-brand-gold)]" /> Select Service</h2>
                <div className="space-y-4">
                  {services.map((service, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setBookingData({...bookingData, service})}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        bookingData.service === service ? "border-[var(--color-brand-gold)] bg-yellow-50/50" : "border-gray-100 hover:border-gray-300"
                      }`}
                    >
                      <h3 className="font-bold text-lg">{service}</h3>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Stylist */}
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl font-bold font-serif mb-6 flex items-center gap-3"><User className="text-[var(--color-brand-gold)]" /> Choose Stylist</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {stylists.map((stylist, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setBookingData({...bookingData, stylist: stylist.name})}
                      className={`p-6 text-center rounded-xl border-2 cursor-pointer transition-all ${
                        bookingData.stylist === stylist.name ? "border-[var(--color-brand-gold)] bg-yellow-50/50" : "border-gray-100 hover:border-gray-300"
                      }`}
                    >
                      <div className="relative w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-[var(--color-brand-gold)] bg-gray-100 flex items-center justify-center">
                        <User size={36} className="text-gray-400" />
                      </div>
                      <h3 className="font-bold text-xl mb-1">{stylist.name}</h3>
                      <p className="text-[var(--color-brand-gold)] font-medium text-sm mb-3">{stylist.role}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{stylist.brief}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Date */}
            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl font-bold font-serif mb-6 flex items-center gap-3"><CalendarIcon className="text-[var(--color-brand-gold)]" /> Select Date</h2>
                <input 
                  type="date" 
                  min={new Date().toISOString().split('T')[0]}
                  value={bookingData.date}
                  onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                  className="w-full p-4 text-xl border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[var(--color-brand-gold)]"
                />
              </div>
            )}

            {/* Step 4: Time */}
            {step === 4 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl font-bold font-serif mb-6 flex items-center gap-3"><Clock className="text-[var(--color-brand-gold)]" /> Choose Time</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {timeSlots.map((time, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setBookingData({...bookingData, time})}
                      className={`p-4 text-center rounded-xl border-2 cursor-pointer transition-all font-semibold ${
                        bookingData.time === time ? "border-[var(--color-brand-gold)] bg-[var(--color-brand-gold)] text-black" : "border-gray-200 hover:border-[var(--color-brand-gold)]"
                      }`}
                    >
                      {time}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Details */}
            {step === 5 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl font-bold font-serif mb-6">Your Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <input type="text" value={bookingData.customerDetails.name} onChange={(e) => setBookingData({...bookingData, customerDetails: {...bookingData.customerDetails, name: e.target.value}})} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[var(--color-brand-gold)] outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone Number</label>
                    <input type="tel" value={bookingData.customerDetails.phone} onChange={(e) => setBookingData({...bookingData, customerDetails: {...bookingData.customerDetails, phone: e.target.value}})} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[var(--color-brand-gold)] outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" value={bookingData.customerDetails.email} onChange={(e) => setBookingData({...bookingData, customerDetails: {...bookingData.customerDetails, email: e.target.value}})} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[var(--color-brand-gold)] outline-none" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Summary */}
            {step === 6 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl font-bold font-serif mb-6">Booking Summary</h2>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4 text-lg">
                  <div className="flex justify-between border-b pb-4">
                    <span className="text-gray-600">Service</span>
                    <span className="font-bold">{bookingData.service}</span>
                  </div>
                  <div className="flex justify-between border-b pb-4">
                    <span className="text-gray-600">Stylist</span>
                    <span className="font-bold">{bookingData.stylist}</span>
                  </div>
                  <div className="flex justify-between border-b pb-4">
                    <span className="text-gray-600">Date & Time</span>
                    <span className="font-bold">{bookingData.date} at {bookingData.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Name</span>
                    <span className="font-bold">{bookingData.customerDetails.name}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 7: Success */}
            {step === 7 && (
              <div className="text-center py-10 animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-green-500 w-12 h-12" />
                </div>
                <h2 className="text-4xl font-bold font-serif mb-4">Booking Confirmed!</h2>
                <p className="text-gray-600 mb-8 text-lg">Thank you, {bookingData.customerDetails.name}. Your appointment is booked for {bookingData.date} at {bookingData.time}.</p>
                <button onClick={() => window.location.href = '/'} className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-[var(--color-brand-gold)] hover:text-black transition-colors">
                  Return to Home
                </button>
              </div>
            )}

            {/* Navigation Buttons */}
            {step < 7 && (
              <div className="mt-10 pt-6 border-t border-gray-100 flex justify-between">
                <button 
                  onClick={handlePrev} 
                  disabled={step === 1}
                  className={`px-6 py-3 font-semibold rounded-lg transition-colors ${step === 1 ? "opacity-0 cursor-default" : "bg-gray-100 text-black hover:bg-gray-200"}`}
                >
                  Back
                </button>
                
                {step < 6 ? (
                  <button 
                    onClick={handleNext}
                    disabled={
                      (step === 1 && !bookingData.service) ||
                      (step === 2 && !bookingData.stylist) ||
                      (step === 3 && !bookingData.date) ||
                      (step === 4 && !bookingData.time) ||
                      (step === 5 && (!bookingData.customerDetails.name || !bookingData.customerDetails.phone))
                    }
                    className="flex items-center gap-2 px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-[var(--color-brand-gold)] hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next <ChevronRight size={18} />
                  </button>
                ) : (
                  <button 
                    onClick={confirmBooking}
                    className="px-8 py-3 bg-[var(--color-brand-gold)] text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors uppercase tracking-wider"
                  >
                    Confirm Appointment
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
