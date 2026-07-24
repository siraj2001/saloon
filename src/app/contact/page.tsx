import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar theme="light" />
      <main className="pt-32 pb-24 min-h-screen bg-[var(--color-brand-gray)] text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 text-black">Contact Us</h1>
            <div className="w-24 h-1 bg-[var(--color-brand-gold)] mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Have a question or want to book a special session? Get in touch with us using the form below or drop by our salon.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold font-serif mb-8 text-black">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-gold)] focus:border-transparent outline-none transition" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-gold)] focus:border-transparent outline-none transition" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-gold)] focus:border-transparent outline-none transition" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full py-4 bg-black text-white font-bold rounded-lg hover:bg-[var(--color-brand-gold)] hover:text-black transition-colors uppercase tracking-widest">
                  Submit Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-10">
              <div className="bg-black text-white p-10 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold font-serif mb-8 text-[var(--color-brand-gold)]">Contact Info</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-[var(--color-brand-gold)] mt-1" size={28} />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Address</h4>
                      <p className="text-gray-400 leading-relaxed">90 Mg nagar part 2, Kalidsan street, west,<br />Urapakkam, Chennai, Tamil Nadu 603211</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-[var(--color-brand-gold)] mt-1" size={28} />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Phone</h4>
                      <p className="text-gray-400">06398474536</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-[var(--color-brand-gold)] mt-1" size={28} />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email</h4>
                      <p className="text-gray-400">info@malikhairpoint.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold font-serif mb-6 text-black flex items-center gap-3">
                  <Clock className="text-[var(--color-brand-gold)]" size={28} /> Business Hours
                </h2>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex justify-between border-b pb-2"><span>Monday - Friday</span> <span>9:00 AM - 8:00 PM</span></li>
                  <li className="flex justify-between border-b pb-2"><span>Saturday</span> <span>10:00 AM - 9:00 PM</span></li>
                  <li className="flex justify-between text-[var(--color-brand-gold)] font-bold"><span>Sunday</span> <span>Closed</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-16 bg-white p-2 rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6551824697967!2d80.06107227320747!3d12.865533817198664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f7c883401cdf%3A0x48f8712960d39a1a!2sMalik%20men&#39;s%20hair%20point!5e0!3m2!1sen!2sin!4v1784912811970!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: "12px" }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
