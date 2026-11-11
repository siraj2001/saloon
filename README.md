# MALIK HAIR SALOON — Luxury Men's Grooming Atelier

> A premium editorial digital experience for **MALIK HAIR SALOON (Malik Men's Hair Point)**, Chennai's distinguished barber atelier located in Urapakkam. Built with Next.js 16, React 19, and Tailwind CSS v4.

---

## ✂️ About the Project

**MALIK HAIR SALOON** is an established men's salon and grooming atelier founded in 2014 in Urapakkam, Chennai. This project elevates the brand's digital presence into a luxury editorial experience combining:
- **Visual Palette**: Matte Carbon Black (`#080809`), Champagne Gold (`#C8A97E`, `#DFB982`), and Warm Ivory (`#F5EFEB`).
- **Typography**: Classical display serif (*Playfair Display*, *Cormorant Garamond*) paired with razor-sharp modern sans (*Plus Jakarta Sans*).
- **Core Philosophy**: *"Less is more"*. Unhurried whitespace, generous section padding (`py-32 md:py-48`), disciplined layout proportions, and authentic barbershop photography.
- **Authentic Brand Identity**: Official brandmark with custom gold, ivory, and original vector assets.

---

## 🌟 Key Features & Architecture

### 1. Public Pages
* **Homepage (`/`)**: Atmospheric hero, master barber manifesto, curated services, 6 pillars of distinction, lookbook preview, Chennai client testimonials, priority concierge booking callout, and interactive location map.
* **Services & Pricing (`/services`)**: Full catalog of 17 individual grooming services and value combos (from ₹80 to ₹1,999) with filterable categories (*Individual*, *Essentials*, *Luxury*) and direct pre-selected booking links.
* **Lookbook Gallery (`/gallery`)**: Curated photo portfolio with category filtering, modal zoom view, and official in-store style reference charts ([`hair-styles.png`](file:///e:/Personal/Fiverr/malik-hair-point/public/gallery/hair-styles.png), [`beard-styles.png`](file:///e:/Personal/Fiverr/malik-hair-point/public/gallery/beard-styles.png)).
* **About Atelier (`/about`)**: 10-year founding journey, hospital-grade hygiene guarantee, and master barber profiles (**Mustafah**, **Farooq**, **Malik 3**).
* **Appointment Booking (`/book`)**: 5-step concierge flow (Service → Barber → Date & Time → Particulars → Summary) with Google Sheets backend synchronization and WhatsApp dispatch.
* **Contact & Location (`/contact`)**: Working inquiry form with WhatsApp submission, full Chennai coordinates, and interactive Google Maps embed.
* **Custom 404 (`/not-found`)**: Minimalist luxury error page guiding visitors smoothly back to the atelier.

### 2. Integrations & Functional Highlights
* **WhatsApp Concierge Dispatch**: Automatically formats client name, service, barber, date, and time into a reservation message sent directly to `+91 63984 74536`.
* **Google Apps Script Backend**: Asynchronously records appointment requests and contact submissions to Google Sheets.
* **Local Storage Persistence**: Stores offline booking snapshots (`malik_bookings`) as a resilient fallback.
* **Local SEO & Schema Markup**: Injected `LocalBusiness` / `HairSalon` JSON-LD schema with exact Chennai geo-coordinates for search discoverability.

---

## 🚀 Getting Started

### Prerequisites
* Node.js 18.x or 20.x
* npm / pnpm / yarn

### Installation
```bash
git clone <repository-url>
cd malik-hair-point
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
malik-hair-point/
├── public/
│   ├── gallery/          # Physical salon charts (Hair styles, Beard styles, Price chart)
│   ├── logo.png          # Official brandmark (Original)
│   ├── logo-gold.png     # Official brandmark (Champagne Gold)
│   └── logo-white.png    # Official brandmark (Warm Ivory)
├── src/
│   ├── app/
│   │   ├── about/        # About Atelier page
│   │   ├── book/         # Appointment booking concierge
│   │   ├── contact/      # Contact & interactive map
│   │   ├── gallery/      # Lookbook & style charts
│   │   ├── services/     # Full pricing & combos menu
│   │   ├── globals.css   # Tailwind CSS v4 design tokens & typography
│   │   ├── layout.tsx    # Root layout with SEO metadata & JSON-LD
│   │   ├── not-found.tsx # Luxury 404 page
│   │   └── page.tsx      # Main homepage
│   ├── components/
│   │   ├── BrandLogo.tsx # Responsive logo component
│   │   ├── FloatingContact.tsx # Floating WhatsApp & Phone concierge
│   │   ├── Footer.tsx    # Multi-column footer
│   │   ├── Hero.tsx      # Editorial hero with credentials
│   │   ├── Navbar.tsx    # Sticky navigation with mobile drawer
│   │   └── WhyChooseUs.tsx # Pillars of distinction
│   └── lib/
│       └── constants.ts  # Services, stylists, salon info & testimonials
└── package.json
```

---

## 🏆 Credits

Crafted with distinction for **MALIK HAIR SALOON (Malik Men's Hair Point)**.  
Designed & Developed by **[Build With Siraj](https://sirajksportfolio.netlify.app/)** (+91 91766 19665).
