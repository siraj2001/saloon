"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop')" }}
      />
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
        >
          Your Style, <span className="text-[var(--color-brand-gold)]">Our Passion</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light"
        >
          Experience premium haircuts, styling, grooming, beard care, hair treatments, and beauty services at MALIK Hair Point.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link 
            href="/book"
            className="px-8 py-4 bg-[var(--color-brand-gold)] text-black font-semibold rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            Book Appointment
          </Link>
          <Link 
            href="/services"
            className="px-8 py-4 bg-transparent border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1"
          >
            View Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
