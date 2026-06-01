"use client";

import { motion } from "framer-motion";
import { Droplet, Flower2, Hand } from "lucide-react";

const treatments = [
  {
    id: "vamana",
    title: "Vamana",
    sanskrit: "वमन",
    desc: "Therapeutic emesis for Kapha disorders. Clears respiratory tract and balances the upper body.",
    icon: <Droplet className="w-8 h-8 text-saffron" />
  },
  {
    id: "virechana",
    title: "Virechana",
    sanskrit: "विरेचन",
    desc: "Purgation therapy for Pitta dominance. Detoxifies the liver, gallbladder, and digestive tract.",
    icon: <Flower2 className="w-8 h-8 text-maroon" />
  },
  {
    id: "basti",
    title: "Basti",
    sanskrit: "बस्ति",
    desc: "Herbal enema for Vata disorders. Deeply nourishes the colon and nervous system.",
    icon: <Hand className="w-8 h-8 text-earth" />
  },
  {
    id: "nasya",
    title: "Nasya",
    sanskrit: "नस्य",
    desc: "Nasal administration of herbal oils. Clears the head, neck, and enhances mental clarity.",
    icon: <Droplet className="w-8 h-8 text-forest" />
  },
  {
    id: "raktamokshana",
    title: "Raktamokshana",
    sanskrit: "रक्तमोक्षण",
    desc: "Bloodletting therapy for complex Pitta and blood-related toxicity. Purifies the bloodstream.",
    icon: <Flower2 className="w-8 h-8 text-maroon" />
  },
];

export function Treatments() {
  return (
    <section id="treatments" className="py-24 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif text-maroon mb-4"
          >
            Panchakarma Therapies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-text-light max-w-2xl mx-auto"
          >
            The five-fold purification process, the cornerstone of true Ayurvedic healing.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-cream p-8 border border-earth/20 rounded-sm overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl font-serif text-maroon">{t.sanskrit}</span>
              </div>
              <div className="relative z-10">
                <div className="mb-6 inline-block p-3 rounded-full bg-white border border-earth/20">
                  {t.icon}
                </div>
                <h3 className="text-2xl font-serif text-maroon mb-2 flex items-center gap-3">
                  {t.title}
                  <span className="text-sm text-earth/60 font-sans tracking-widest">{t.sanskrit}</span>
                </h3>
                <p className="text-text-light leading-relaxed">
                  {t.desc}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-saffron transition-all duration-500 group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
