import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10 border-t border-zinc-900">
      <div className="max-w-[90rem] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-12 mb-16">
        
        {/* Brand */}
        <div className="lg:col-span-3">
          <h3 className="text-2xl font-bold font-serif mb-6 tracking-widest">
            MALIK <span className="text-[var(--color-brand-gold)]">Hair Point</span>
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Style. Confidence. Perfection. Experience premium grooming and beauty services.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-[var(--color-brand-gold)] hover:text-black transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2">
          <h4 className="text-xl font-serif font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link href="/" className="text-gray-400 hover:text-[var(--color-brand-gold)] transition-colors">Home</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-[var(--color-brand-gold)] transition-colors">Services</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-[var(--color-brand-gold)] transition-colors">About Us</Link></li>
            <li><Link href="/gallery" className="text-gray-400 hover:text-[var(--color-brand-gold)] transition-colors">Gallery</Link></li>
            <li><Link href="/book" className="text-[var(--color-brand-gold)] font-medium">Book Appointment</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="lg:col-span-2">
          <h4 className="text-xl font-serif font-semibold mb-6">Our Services</h4>
          <ul className="space-y-4">
            <li className="text-gray-400">Hair Styling</li>
            <li className="text-gray-400">Beard Grooming</li>
            <li className="text-gray-400">Hair Coloring</li>
            <li className="text-gray-400">Keratin Treatment</li>
            <li className="text-gray-400">Facial & Cleanup</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h4 className="text-xl font-serif font-semibold mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-400">
              <MapPin className="text-[var(--color-brand-gold)] shrink-0 mt-1" size={20} />
              <span>90 Mg nagar part 2, Kalidsan street, west, Urapakkam, Chennai, Tamil Nadu 603211</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <Phone className="text-[var(--color-brand-gold)] shrink-0" size={20} />
              <span>06398474536</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <Mail className="text-[var(--color-brand-gold)] shrink-0" size={20} />
              <span>info@malikhairpoint.com</span>
            </li>
          </ul>
        </div>

        {/* Location Map */}
        <div className="lg:col-span-2 rounded-xl overflow-hidden h-48 lg:h-full min-h-[200px] border border-zinc-800 shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6551824697967!2d80.06107227320747!3d12.865533817198664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f7c883401cdf%3A0x48f8712960d39a1a!2sMalik%20men&#39;s%20hair%20point!5e0!3m2!1sen!2sin!4v1784912811970!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, minHeight: "200px" }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 pt-8 border-t border-zinc-900 text-center text-gray-500 text-sm flex flex-col items-center gap-2">
        <p>&copy; {new Date().getFullYear()} MALIK Hair Point. All rights reserved.</p>
        <p>
          Built by <a href="https://sirajksportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[var(--color-brand-gold)] transition-colors underline underline-offset-4">buildwithsiraj</a> (9176619665)
        </p>
      </div>
    </footer>
  );
}
