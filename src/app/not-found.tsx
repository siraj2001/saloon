import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scissors, ArrowLeft, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Page Not Found | MALIK HAIR SALOON",
  description: "The page you are looking for does not exist.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#080809] text-[#F5EFEB] flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 rounded-full bg-[#14141A] border border-[#C8A97E]/30 flex items-center justify-center text-[#DFB982] shadow-[0_0_30px_rgba(200,169,126,0.2)]">
            <Scissors size={36} className="rotate-45" />
          </div>
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#C8A97E] animate-ping" />
        </div>

        <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#DFB982] block mb-3">
          Error 404 • Uncharted Path
        </span>

        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#F5EFEB] mb-4">
          The Grooming Suite <br />
          <span className="italic text-[#DFB982]">Cannot Be Found</span>
        </h1>

        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#DFB982] to-transparent mx-auto mb-6" />

        <p className="text-sm sm:text-base text-[#9E9991] font-light max-w-md mx-auto mb-10 leading-relaxed">
          The page or treatment you are seeking has retired or moved. Allow our concierge to guide you back to our master barbers.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm bg-[#16161B] border border-[#C8A97E]/40 text-xs font-semibold uppercase tracking-[0.18em] text-[#DFB982] hover:bg-[#C8A97E] hover:text-[#080809] transition-all"
          >
            <ArrowLeft size={14} />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/book"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm bg-gradient-to-r from-[#DFB982] to-[#C8A97E] text-[#080809] text-xs font-bold uppercase tracking-[0.18em] hover:brightness-110 transition-all shadow-[0_0_20px_rgba(200,169,126,0.3)]"
          >
            <Calendar size={14} />
            <span>Reserve Chair</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

