import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { User } from "lucide-react";
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen bg-[var(--color-brand-black)] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 text-[var(--color-brand-gold)]">About Us</h1>
            <div className="w-24 h-1 bg-[var(--color-brand-gold)] mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              MALIK Hair Point is a premium salon and grooming studio dedicated to providing unmatched style and sophistication. We blend traditional techniques with modern trends to craft the perfect look for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-zinc-800">
              <Image 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000&auto=format&fit=crop"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold font-serif mb-6 text-[var(--color-brand-gold)]">Our Story</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Founded with a passion for excellence, MALIK Hair Point started as a small local barbershop. Over the years, our commitment to quality, precision, and customer satisfaction has transformed us into a premier destination for luxury grooming.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our master stylists bring decades of combined experience, ensuring that every haircut, shave, and treatment is a masterpiece. We don't just cut hair; we sculpt confidence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-24">
            <div className="bg-zinc-900 p-10 rounded-2xl border border-zinc-800">
              <h3 className="text-2xl font-bold font-serif mb-4 text-[var(--color-brand-gold)]">Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To elevate personal grooming through unparalleled craftsmanship, premium products, and a relaxing, luxurious atmosphere.
              </p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-zinc-800">
              <h3 className="text-2xl font-bold font-serif mb-4 text-[var(--color-brand-gold)]">Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To be the gold standard in hair and beauty services, setting new trends and empowering individuals to look and feel their absolute best.
              </p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-zinc-800">
              <h3 className="text-2xl font-bold font-serif mb-4 text-[var(--color-brand-gold)]">Values</h3>
              <p className="text-gray-400 leading-relaxed">
                Excellence, Hygiene, Customer Satisfaction, and Continuous Innovation in styling techniques.
              </p>
            </div>
          </div>
          
          <div className="bg-[var(--color-brand-gold)] text-black rounded-2xl p-12 text-center mb-24">
            <h2 className="text-3xl font-bold font-serif mb-4">10+ Years of Experience</h2>
            <p className="max-w-2xl mx-auto text-lg font-medium">
              A decade of perfecting our craft. Thousands of satisfied clients. One unmatched experience.
            </p>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif mb-4 text-[var(--color-brand-gold)]">Meet Our Stylists</h2>
            <div className="w-16 h-1 bg-[var(--color-brand-gold)] mx-auto mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Stylist 1 */}
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 text-center hover:border-[var(--color-brand-gold)] transition-colors group">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[var(--color-brand-gold)] bg-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <User size={48} className="text-zinc-600" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-2 text-white">Mustafah</h3>
                <p className="text-[var(--color-brand-gold)] font-medium mb-4">Master Stylist</p>
                <p className="text-gray-400">Over 15 years of experience crafting signature looks.</p>
              </div>
              {/* Stylist 2 */}
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 text-center hover:border-[var(--color-brand-gold)] transition-colors group">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[var(--color-brand-gold)] bg-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <User size={48} className="text-zinc-600" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-2 text-white">Farooq</h3>
                <p className="text-[var(--color-brand-gold)] font-medium mb-4">Color Expert</p>
                <p className="text-gray-400">Specializes in creative coloring and advanced hair spa treatments.</p>
              </div>
              {/* Stylist 3 */}
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 text-center hover:border-[var(--color-brand-gold)] transition-colors group">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[var(--color-brand-gold)] bg-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <User size={48} className="text-zinc-600" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-2 text-white">Malik 3</h3>
                <p className="text-[var(--color-brand-gold)] font-medium mb-4">Senior Barber</p>
                <p className="text-gray-400">Master of classic fades and luxury hot towel shaves.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
