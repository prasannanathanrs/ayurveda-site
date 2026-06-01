"use client";

import { motion } from "framer-motion";
import { Leaf, Sun, Wind } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-cream border-y border-earth/20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif text-maroon mb-6"
          >
            The Sanctuary of Healing
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-transparent via-saffron to-transparent mx-auto mb-8"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-text-light leading-relaxed"
          >
            Nestled in the serene outskirts away from the chaos of modern life, Shri Guha Khataksham Ayurvedasram offers a tranquil haven for holistic healing. We faithfully preserve the ancient Sanatana wisdom of Ayurveda, providing deeply authentic Panchakarma treatments designed to cleanse the body, balance the mind, and elevate the spirit.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {[
            {
              icon: <Leaf className="w-10 h-10 text-forest" />,
              title: "Rooted in Nature",
              desc: "Our location in the outskirts surrounds you with natural tranquility, essential for true deep healing.",
            },
            {
              icon: <Sun className="w-10 h-10 text-saffron" />,
              title: "Authentic Wisdom",
              desc: "Treatments are meticulously guided by ancient Vedic texts, ensuring an uncompromised healing experience.",
            },
            {
              icon: <Wind className="w-10 h-10 text-earth" />,
              title: "Holistic Balance",
              desc: "We focus on realigning your Vata, Pitta, and Kapha doshas to restore your natural state of wellness.",
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="bg-white/50 p-8 border border-earth/20 rounded-sm shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 rounded-full bg-cream border border-earth/20 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif text-maroon mb-4">{item.title}</h3>
              <p className="text-text-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
