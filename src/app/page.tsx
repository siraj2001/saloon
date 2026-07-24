import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Scissors, Sparkles, Droplets } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Hair Styling",
      description: "Premium haircuts and styling tailored to your persona.",
      icon: <Scissors className="w-8 h-8 text-[var(--color-brand-gold)]" />,
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Beard Grooming",
      description: "Expert beard trimming, shaping, and hot towel shaves.",
      icon: <Sparkles className="w-8 h-8 text-[var(--color-brand-gold)]" />,
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Hair Treatments",
      description: "Keratin, hair spa, coloring, and revitalizing treatments.",
      icon: <Droplets className="w-8 h-8 text-[var(--color-brand-gold)]" />,
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full">
        <Hero />
        
        {/* Services Preview Section */}
        <section className="py-24 bg-[var(--color-brand-black)] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">Our Services</h2>
              <div className="w-20 h-1 bg-[var(--color-brand-gold)] mx-auto mb-6"></div>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Discover our range of premium grooming and styling services designed to bring out the best in you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {services.map((service, idx) => (
                <div key={idx} className="group bg-zinc-900 rounded-lg overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-lg">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                  </div>
                  <div className="p-8 flex flex-col items-center text-center">
                    <div className="bg-black p-4 rounded-full -mt-16 mb-4 relative z-10 border-4 border-zinc-900">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-serif font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <Link href="/services" className="text-[var(--color-brand-gold)] uppercase tracking-wider font-semibold text-sm hover:text-white transition-colors">
                      Explore More &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}
