import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function GalleryPage() {
  const images = [
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop", // Salon chair/mirror
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop", // Haircut in progress
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop", // Barber tools
    "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop", // Classic Barber chair
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop", // Barbershop interior
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop", // Barbershop setting
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=800&auto=format&fit=crop", // Beard trimming
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop"  // Hair cutting closeup
  ];

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen bg-[var(--color-brand-black)] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 text-[var(--color-brand-gold)]">Gallery</h1>
            <div className="w-24 h-1 bg-[var(--color-brand-gold)] mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Take a look inside our premium salon and browse through some of our finest transformations.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img, idx) => (
              <div key={idx} className="relative w-full rounded-xl overflow-hidden break-inside-avoid group border border-zinc-800">
                <Image 
                  src={img} 
                  alt={`Gallery Image ${idx + 1}`} 
                  width={800} 
                  height={800} 
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-[var(--color-brand-gold)] border border-[var(--color-brand-gold)] px-6 py-2 uppercase tracking-widest font-semibold backdrop-blur-sm">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
