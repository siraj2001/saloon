import type { Metadata, Viewport } from "next";
import "./globals.css";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "MALIK HAIR SALOON | Premium Men's Grooming & Barber Atelier, Chennai",
  description:
    "Experience luxury haircuts, bespoke beard sculpting, skin treatments, and royal hot towel grooming at MALIK Hair Saloon, Urapakkam, Chennai. Crafted for the modern gentleman.",
  keywords: [
    "Malik Hair Saloon",
    "Malik Hair Point",
    "Men's salon Chennai",
    "Barbershop Urapakkam",
    "Luxury haircut Chennai",
    "Beard styling Chennai",
    "Men's grooming",
    "Keratin treatment Chennai"
  ],
  authors: [{ name: "MALIK Hair Saloon" }],
  openGraph: {
    title: "MALIK HAIR SALOON | Luxury Men's Grooming Atelier",
    description:
      "Crafted for the modern gentleman. Precision fades, bespoke beard grooming, and restorative skin treatments in Chennai.",
    url: "https://malikhairpoint.com",
    siteName: "MALIK Hair Saloon",
    images: [
      {
        url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "MALIK Hair Saloon Interior & Barber Chair",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#080809",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "name": "MALIK HAIR SALOON",
  "alternateName": "Malik Men's Hair Point",
  "image": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
  "telephone": "+916398474536",
  "email": "info@malikhairpoint.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "90 MG Nagar Part 2, Kalidasan Street West, Urapakkam",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "603211",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.8655338,
    "longitude": 80.0610722
  },
  "url": "https://malikhairpoint.com",
  "priceRange": "₹80 - ₹1999",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "10:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday"],
      "opens": "10:00",
      "closes": "14:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "39"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[#080809] text-[#F5EFEB] font-sans flex flex-col selection:bg-[#C8A97E] selection:text-[#080809]">
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
