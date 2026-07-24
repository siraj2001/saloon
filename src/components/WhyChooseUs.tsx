"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Heart, Sparkles, Clock, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Experienced Stylists",
      description: "Our team of professionals brings years of industry expertise to deliver the perfect look.",
      icon: <Award className="w-6 h-6 text-black" />,
    },
    {
      title: "Premium Products",
      description: "We use only top-tier, salon-grade products for all hair and skin treatments.",
      icon: <Sparkles className="w-6 h-6 text-black" />,
    },
    {
      title: "Hygienic Environment",
      description: "Your health and safety are our priority with strict sanitization protocols.",
      icon: <ShieldCheck className="w-6 h-6 text-black" />,
    },
    {
      title: "Customer Satisfaction",
      description: "We are committed to providing an exceptional and personalized experience.",
      icon: <Heart className="w-6 h-6 text-black" />,
    },
    {
      title: "Modern Equipment",
      description: "State-of-the-art grooming tools and salon chairs for your ultimate comfort.",
      icon: <CheckCircle2 className="w-6 h-6 text-black" />,
    },
    {
      title: "Easy Online Booking",
      description: "Book your appointment instantly with our hassle-free scheduling system.",
      icon: <Clock className="w-6 h-6 text-black" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 bg-[var(--color-brand-gray)] text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-[var(--color-brand-gold)] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We don't just cut hair; we craft confidence. Discover what makes MALIK Hair Point the premier choice for your grooming needs.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-[var(--color-brand-gold)] rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-serif mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
