import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Clock, DollarSign } from "lucide-react";

export default function ServicesPage() {
  const categories = [
    {
      title: "Individual Services",
      services: [
        { name: "Hair Cut", description: "Precision cut tailored to your face shape.", duration: "30 mins", price: 120 },
        { name: "Beard Trim", description: "Precision trimming and edge lining.", duration: "20 mins", price: 80 }
      ]
    },
    {
      title: "Combo Packages",
      services: [
        { name: "Combo 1", description: "Hair Cut + Shave/trim + D.tan", duration: "60 mins", price: 399 },
        { name: "Combo 2", description: "Hair Cut + Shave/trim + hair color + face cleansing", duration: "90 mins", price: 499 },
        { name: "Combo 3", description: "Hair Cut + Shave/trim + D.tan + head massage", duration: "90 mins", price: 599 },
        { name: "Combo 4", description: "Hair Cut + Shave/trim + hair spa + face cleansing", duration: "120 mins", price: 599 },
        { name: "Combo 5", description: "Hair Cut + Shave/trim + hair color + D.tan", duration: "120 mins", price: 699 },
        { name: "Combo 6", description: "Hair Cut + Shave/trim + advance fruit facial", duration: "120 mins", price: 699 },
        { name: "Combo 7", description: "Hair Cut + Shave/trim + hair spa + D.tan", duration: "120 mins", price: 799 },
        { name: "Combo 8", description: "Hair Cut + Shave/trim + D.tan + advance fruit facial", duration: "120 mins", price: 899 },
        { name: "Combo 9", description: "Hair Cut + Shave/trim + papaya facial + D.tan", duration: "120 mins", price: 999 },
        { name: "Combo 10", description: "Hair Cut + Shave + D.tan + loreal amonia free hair", duration: "150 mins", price: 1099 },
        { name: "Combo 11", description: "Hair Cut + Shave + D.tan + fruit facial + amonia free color", duration: "150 mins", price: 1199 },
        { name: "Combo 12", description: "Hair Cut + Shave + papaya facial + advance hair spa", duration: "150 mins", price: 1299 },
        { name: "Combo 13", description: "Hair Cut + Shave + advance hair spa + Gold peel of mask", duration: "180 mins", price: 1599 },
        { name: "Combo 14", description: "Hair Cut + Shave + D.tan + advance hair spa + Gold facial", duration: "180 mins", price: 1799 },
        { name: "Combo 15", description: "Hair Cut + Shave + D.tan + Loreal amonia free hair + Gold facial", duration: "180 mins", price: 1999 },
      ]
    }
  ];

  return (
    <>
      <Navbar theme="light" />
      <main className="pt-32 pb-24 min-h-screen bg-[var(--color-brand-gray)] text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 text-black">Our Services</h1>
            <div className="w-24 h-1 bg-[var(--color-brand-gold)] mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Explore our comprehensive range of premium grooming services. From classic cuts to luxury spa treatments, we have everything you need.
            </p>
          </div>

          <div className="space-y-20">
            {categories.map((category, idx) => (
              <div key={idx}>
                <h2 className="text-3xl font-bold font-serif mb-10 pb-4 border-b-2 border-black inline-block">{category.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.services.map((service, sIdx) => (
                    <div key={sIdx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-bold font-serif">{service.name}</h3>
                          <span className="text-2xl font-bold text-[var(--color-brand-gold)] flex items-center">
                            ₹{service.price}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-6">{service.description}</p>
                      </div>
                      <div className="flex justify-between items-center border-t border-gray-100 pt-6">
                        <span className="flex items-center text-gray-500 font-medium">
                          <Clock size={18} className="mr-2" /> {service.duration}
                        </span>
                        <Link 
                          href="/book"
                          className="px-6 py-2 bg-black text-white font-semibold rounded hover:bg-[var(--color-brand-gold)] hover:text-black transition-colors"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  ))}
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
