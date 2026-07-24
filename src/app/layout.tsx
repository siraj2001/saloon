import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "MALIK Hair Point | Premium Salon & Grooming",
  description: "Experience premium haircuts, styling, grooming, beard care, hair treatments, and beauty services at MALIK Hair Point.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen bg-black text-white font-sans flex flex-col">
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
