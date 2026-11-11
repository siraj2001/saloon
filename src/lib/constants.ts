export interface ServiceItem {
  id: string;
  name: string;
  price: number;
  duration: string;
  category: "Individual" | "Essentials" | "Luxury";
  description: string;
  popular?: boolean;
  features?: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "S-1",
    name: "Classic Precision Haircut",
    price: 120,
    duration: "30 min",
    category: "Individual",
    description: "Custom consultation, precision scissor and clipper work tailored to your face shape, neck taper, and styling finish.",
    popular: true,
    features: ["Bespoke consultation", "Precision scissors & clippers", "Neck clean-up", "Matte paste styling"]
  },
  {
    id: "S-2",
    name: "Artisanal Beard Trim & Sculpt",
    price: 80,
    duration: "20 min",
    category: "Individual",
    description: "Architectural line work, length trimming, mustache shaping, and nourishing beard oil finish.",
    popular: true,
    features: ["Beard contouring", "Length balance", "Cheek line definition", "Hydrating beard oil"]
  },
  {
    id: "S-3",
    name: "Combo 1 (Hair Cut + Shave + D-Tan)",
    price: 399,
    duration: "45 min",
    category: "Essentials",
    description: "Essential grooming trio: signature haircut, clean shave/beard trim, and instant brightening anti-tan treatment.",
    popular: true,
    features: ["Signature Haircut", "Clean Shave / Trim", "Anti-Tan Face Pack"]
  },
  {
    id: "S-4",
    name: "Combo 2 (Hair Cut + Shave + Color + Cleansing)",
    price: 499,
    duration: "60 min",
    category: "Essentials",
    description: "Complete refresh including haircut, clean shave, rich natural hair coloring, and deep pore face cleansing.",
    features: ["Signature Haircut", "Clean Shave / Trim", "Natural Hair Color", "Deep Face Cleansing"]
  },
  {
    id: "S-5",
    name: "Combo 3 (Hair Cut + Shave + D-Tan + Head Massage)",
    price: 599,
    duration: "60 min",
    category: "Essentials",
    description: "Ultimate stress-relief combo featuring grooming essentials, de-tan application, and invigorating scalp acupressure massage.",
    popular: true,
    features: ["Signature Haircut", "Clean Shave / Trim", "D-Tan Treatment", "Aromatherapy Head Massage"]
  },
  {
    id: "S-6",
    name: "Combo 4 (Hair Cut + Shave + Hair Spa + Cleansing)",
    price: 599,
    duration: "75 min",
    category: "Essentials",
    description: "Intense hair moisture therapy with customized spa cream, face cleansing, haircut, and beard detailing.",
    features: ["Signature Haircut", "Clean Shave / Trim", "Restorative Hair Spa", "Face Cleansing"]
  },
  {
    id: "S-7",
    name: "Combo 5 (Hair Cut + Shave + Color + D-Tan)",
    price: 699,
    duration: "60 min",
    category: "Essentials",
    description: "Grooming, color restoration, and skin brightening package designed for immediate confidence.",
    features: ["Signature Haircut", "Clean Shave / Trim", "Rich Hair Coloring", "D-Tan Brightening"]
  },
  {
    id: "S-8",
    name: "Combo 6 (Hair Cut + Shave + Advance Fruit Facial)",
    price: 699,
    duration: "60 min",
    category: "Essentials",
    description: "Full haircut, beard detailing, and a multi-step organic fruit facial for luminous skin renewal.",
    features: ["Signature Haircut", "Clean Shave / Trim", "Advance Fruit Facial", "Steam & Cleanse"]
  },
  {
    id: "S-9",
    name: "Combo 7 (Hair Cut + Shave + Hair Spa + D-Tan)",
    price: 799,
    duration: "75 min",
    category: "Essentials",
    description: "High-performance combination of hair revitalization spa, de-tanning pack, and precision grooming.",
    popular: true,
    features: ["Signature Haircut", "Clean Shave / Trim", "Advance Hair Spa", "D-Tan Face Therapy"]
  },
  {
    id: "S-10",
    name: "Combo 8 (Hair Cut + Shave + D-Tan + Fruit Facial)",
    price: 899,
    duration: "90 min",
    category: "Luxury",
    description: "Dual skin revival: de-tan and herbal fruit facial combined with master haircut and luxury shave.",
    features: ["Signature Haircut", "Clean Shave / Trim", "De-Tan Therapy", "Botanical Fruit Facial"]
  },
  {
    id: "S-11",
    name: "Combo 9 (Hair Cut + Shave + Papaya Facial + D-Tan)",
    price: 999,
    duration: "90 min",
    category: "Luxury",
    description: "Papaya enzyme therapy for pigmentation and glow, paired with de-tan and master barber grooming.",
    popular: true,
    features: ["Signature Haircut", "Clean Shave / Trim", "Papaya Glow Facial", "D-Tan Brightening"]
  },
  {
    id: "S-12",
    name: "Combo 10 (Hair Cut + Shave + D-Tan + Ammonia-Free Hair Color)",
    price: 1099,
    duration: "90 min",
    category: "Luxury",
    description: "Gentle scalp-safe ammonia-free premium hair coloring, de-tan treatment, and signature styling.",
    features: ["Signature Haircut", "Clean Shave / Trim", "Ammonia-Free Hair Color", "D-Tan Therapy"]
  },
  {
    id: "S-13",
    name: "Combo 11 (Hair Cut + Shave + D-Tan + Fruit Facial + Color)",
    price: 1199,
    duration: "120 min",
    category: "Luxury",
    description: "Comprehensive 5-in-1 transformation: color, fruit facial, anti-tan, haircut, and beard treatment.",
    features: ["Haircut & Styling", "Clean Shave / Trim", "Ammonia-Free Color", "Fruit Facial", "D-Tan Therapy"]
  },
  {
    id: "S-14",
    name: "Combo 12 (Hair Cut + Shave + Papaya Facial + Advance Hair Spa)",
    price: 1299,
    duration: "120 min",
    category: "Luxury",
    description: "Executive wellness package featuring intensive hair repair spa and enzymatic papaya facial.",
    features: ["Haircut & Styling", "Clean Shave / Trim", "Advance Deep Hair Spa", "Papaya Glow Facial"]
  },
  {
    id: "S-15",
    name: "Combo 13 (Hair Cut + Shave + Advance Hair Spa + Gold Peel-Off Mask)",
    price: 1599,
    duration: "120 min",
    category: "Luxury",
    description: "Luxury 24K Gold peel-off mask ritual, deep nourishing hair spa, haircut, and warm lather shave.",
    features: ["Signature Haircut", "Clean Shave / Trim", "Advance Hair Spa", "24K Gold Peel-Off Mask"]
  },
  {
    id: "S-16",
    name: "Combo 14 (Hair Cut + Shave + D-Tan + Advance Hair Spa + Gold Facial)",
    price: 1799,
    duration: "150 min",
    category: "Luxury",
    description: "The Royal Treatment: 2.5-hour immersion including Gold Facial, deep hair spa, de-tan, and bespoke styling.",
    popular: true,
    features: ["Signature Haircut", "Clean Shave / Trim", "D-Tan Therapy", "Advance Hair Spa", "Imperial Gold Facial"]
  },
  {
    id: "S-17",
    name: "Combo 15 (Hair Cut + Shave + D-Tan + L'Oréal Ammonia-Free + Gold Facial)",
    price: 1999,
    duration: "150 min",
    category: "Luxury",
    description: "The Sovereign Experience: L'Oréal professional ammonia-free coloring, imperial Gold facial, de-tan, and master styling.",
    popular: true,
    features: ["Signature Haircut", "Clean Shave / Trim", "L'Oréal Ammonia-Free Color", "Imperial Gold Facial", "D-Tan Brightening"]
  }
];

export interface StylistItem {
  id: string;
  name: string;
  role: string;
  specialization: string;
  availability: "Available" | "Busy" | "By Appointment";
  rating: number;
  reviewsCount?: number;
  experienceYears?: number;
  image?: string;
}

export const STYLISTS: StylistItem[] = [
  {
    id: "ST-1",
    name: "Mustafah",
    role: "Master Stylist & Founder",
    specialization: "Over 5 years of experience crafting signature fades, bespoke scissor cuts, precision styling, and executive transformations.",
    availability: "Available",
    rating: 5.0,
    reviewsCount: 39,
    experienceYears: 5
  },
  {
    id: "ST-2",
    name: "Farooq",
    role: "Master Colorist & Spa Specialist",
    specialization: "Over 5 years of experience specializing in creative hair coloring, L'Oréal ammonia-free formulations, and restorative scalp therapy.",
    availability: "Available",
    rating: 5.0,
    reviewsCount: 39,
    experienceYears: 5
  },
  {
    id: "ST-3",
    name: "Malik",
    role: "Senior Barber & Shave Specialist",
    specialization: "Over 5 years of experience mastering classic skin fades, traditional straight-razor hot towel shaves, and precision beard styling.",
    availability: "Available",
    rating: 5.0,
    reviewsCount: 39,
    experienceYears: 5
  }
];

export const SALON_INFO = {
  name: "MALIK HAIR SALOON",
  shortName: "MALIK",
  subName: "Hair Point",
  headline: "Craftsmanship & Masculine Distinction",
  tagline: "Chennai's Premier Men's Grooming Atelier & Salon",
  address: "90 MG Nagar Part 2, Kalidasan Street West, Urapakkam, Chennai, Tamil Nadu 603211",
  landmark: "Near Urapakkam West, Chennai",
  phone: "06398474536",
  phoneDisplay: "+91 63984 74536",
  whatsappNumber: "916398474536",
  email: "info@malikhairpoint.com",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6552634822483!2d80.06164042679704!3d12.86552859237143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f7c883401cdf%3A0x48f8712960d39a1a!2sMalik%20men%27s%20hair%20point!5e0!3m2!1sen!2sin!4v1794217958735!5m2!1sen!2sin",
  directionsUrl: "https://maps.google.com/?q=Malik+men's+hair+point+Urapakkam+Chennai",
  hours: [
    { days: "Monday - Friday", hours: "9:00 AM – 8:00 PM" },
    { days: "Saturday", hours: "10:00 AM – 9:00 PM" },
    { days: "Sunday", hours: "10:00 AM – 2:00 PM (Appointments Preferred)" }
  ],
  googleRating: 5.0,
  reviewsCount: "39",
  category: "Hairdresser",
  yearsOfExcellence: "3+",
  establishedYear: 2021,
  developer: {
    name: "Build With Siraj",
    url: "https://sirajksportfolio.netlify.app/",
    phone: "9176619665"
  }
};

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Arunachalam S.",
    role: "Corporate Executive, OMR Chennai",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    service: "Combo 14 (Royal Gold Facial & Hair Spa)",
    rating: 5,
    date: "October 2024",
    text: "MALIK Hair Saloon is without question the finest men's grooming destination around Urapakkam and South Chennai. Mustafah's precision fade is flawless, and the gold facial therapy left my skin genuinely refreshed. Truly royal treatment."
  },
  {
    id: 2,
    name: "Karthik Venkatesh",
    role: "Tech Consultant, Chennai",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop",
    service: "Classic Haircut & Beard Sculpt",
    rating: 5,
    date: "November 2024",
    text: "The hygiene standards and attention to detail are what set this atelier apart. Malik 3 took the time to understand my beard growth pattern and sculpted a sharp, natural jawline. The hot towel finish is pure relaxation."
  },
  {
    id: 3,
    name: "Mohammed Rizwan",
    role: "Architect, Tambaram",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    service: "Combo 10 (Ammonia-Free Hair Color & D-Tan)",
    rating: 5,
    date: "December 2024",
    text: "Finding a salon that uses authentic ammonia-free L'Oréal products without irritating sensitive scalps was difficult until I visited MALIK. Farooq is a genuine expert in hair care. Premium ambiance at very honest pricing."
  },
  {
    id: 4,
    name: "Dinesh Kumar",
    role: "Creative Director, Chennai",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    service: "Combo 15 (The Sovereign Transformation)",
    rating: 5,
    date: "January 2025",
    text: "Booked Combo 15 before my wedding reception. From the warm reception to the customized facial massage and haircut, it was an elevated experience. WhatsApp booking is instant and smooth. Highly recommended."
  }
];
