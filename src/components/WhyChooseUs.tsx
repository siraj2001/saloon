import { Scissors, ShieldCheck, Sparkles, Flame, Clock, Award } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      num: "01",
      title: "Master Barbering & Tailored Consultation",
      description:
        "Every session begins with facial bone structure and hair grain analysis. We cut to complement your natural contours, rejecting generic template clippers.",
      icon: <Scissors size={18} className="text-[#DFB982]" />,
    },
    {
      num: "02",
      title: "Hospital-Grade Hygiene Standards",
      description:
        "Medical-grade autoclave sterilization, disposable single-use neck strips, fresh surgical blades for every guest, and continuous sanitization protocols.",
      icon: <ShieldCheck size={18} className="text-[#DFB982]" />,
    },
    {
      num: "03",
      title: "L'Oréal & Botanical Formulations",
      description:
        "Zero compromises on hair and scalp health. We exclusively utilize ammonia-free L'Oréal professional color systems and restorative organic hair spa creams.",
      icon: <Sparkles size={18} className="text-[#DFB982]" />,
    },
    {
      num: "04",
      title: "The Royal Hot Towel Ritual",
      description:
        "Experience the therapeutic luxury of infused steamed towels, warm shaving lather, traditional single-edge blade gliding, and a pore-closing cold compress.",
      icon: <Flame size={18} className="text-[#DFB982]" />,
    },
    {
      num: "05",
      title: "17 Transparent Curated Packages",
      description:
        "Complete clarity from ₹80 to ₹1,999. Enjoy precision haircuts, beard sculpting, de-tanning, and 24K gold facials with crystal clear inclusive pricing.",
      icon: <Award size={18} className="text-[#DFB982]" />,
    },
    {
      num: "06",
      title: "Effortless Digital & WhatsApp Booking",
      description:
        "Eliminate waiting. Reserve your preferred chair and master stylist online in 60 seconds with instant WhatsApp concierge confirmation.",
      icon: <Clock size={18} className="text-[#DFB982]" />,
    },
  ];

  return (
    <section className="py-20 sm:py-28 md:py-36 lg:py-40 bg-[#0A0A0D] text-[#F5EFEB] relative overflow-hidden border-t border-[#C8A97E]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Editorial Section Header with Generous Whitespace */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 md:mb-24 pb-8 sm:pb-10 border-b border-[#C8A97E]/10 gap-6 sm:gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-medium text-[#DFB982] block mb-3 sm:mb-4">
              The Atelier Standard
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#F5EFEB] tracking-tight leading-[1.15]">
              Pillars of <span className="italic text-[#DFB982]">Distinction</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#9E9991] max-w-md font-light leading-[1.8]">
            We reject the hurried pace of everyday salons. Every ritual is calibrated to deliver unhurried excellence and restorative comfort.
          </p>
        </div>

        {/* Pillars Grid with Generous Gaps and Internal Breathing Room */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 lg:p-10 bg-[#101015] border border-[#C8A97E]/10 hover:border-[#C8A97E]/40 transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Number and Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs text-[#DFB982] tracking-[0.25em]">
                    {item.num}
                  </span>
                  <div className="w-9 h-9 border border-[#C8A97E]/20 flex items-center justify-center text-[#DFB982] group-hover:border-[#DFB982] transition-colors">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#F5EFEB] mb-4 group-hover:text-[#DFB982] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-[#9E9991] leading-[1.8] font-light">
                  {item.description}
                </p>
              </div>

              {/* Minimal Bottom Accent */}
              <div className="mt-8 pt-6 border-t border-[#1C1C24] flex items-center justify-between text-[10px] text-[#7A766F] uppercase tracking-[0.2em]">
                <span>The Malik Standard</span>
                <span className="w-5 h-[1px] bg-[#C8A97E]/20 group-hover:w-9 group-hover:bg-[#DFB982] transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
