"use client";

import { motion } from "framer-motion";
import { Bed, Stethoscope } from "lucide-react";

export function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-maroon text-cream relative overflow-hidden">
      {/* Decorative mandala pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0C77.6 0 100 22.4 100 50C100 77.6 77.6 100 50 100C22.4 100 0 77.6 0 50C0 22.4 22.4 0 50 0ZM50 2C23.5 2 2 23.5 2 50C2 76.5 23.5 98 50 98C76.5 98 98 76.5 98 50C98 23.5 76.5 2 50 2Z' fill='%23FFD700' fill-rule='evenodd'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif text-gold mb-4"
          >
            Our Facilities
          </motion.h2>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Designed to support your healing journey with comfort and authentic care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Mini OPD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative bg-white/5 backdrop-blur-sm p-10 border border-gold/20 rounded-sm hover:border-gold/50 transition-colors"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-maroon rounded-full border border-gold/30 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
              <Stethoscope className="w-10 h-10 text-gold" />
            </div>
            <div className="mt-8">
              <h3 className="text-3xl font-serif text-gold mb-4">Mini OPD</h3>
              <p className="text-cream/80 leading-relaxed mb-6">
                Our Out-Patient Department is equipped to handle thorough Nadi Pariksha (pulse diagnosis) and initial consultations. Here, our Vaidyas carefully assess your Prakriti and Vikriti to craft a personalized healing protocol.
              </p>
              <ul className="space-y-3 text-cream/90">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-saffron rounded-full"></span> Expert Consultations</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-saffron rounded-full"></span> Pulse Diagnosis</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-saffron rounded-full"></span> Custom Diet Planning</li>
              </ul>
            </div>
          </motion.div>

          {/* IPD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative bg-white/5 backdrop-blur-sm p-10 border border-gold/20 rounded-sm hover:border-gold/50 transition-colors"
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-maroon rounded-full border border-gold/30 flex items-center justify-center group-hover:-rotate-12 transition-transform duration-500">
              <Bed className="w-10 h-10 text-gold" />
            </div>
            <div className="mt-8">
              <h3 className="text-3xl font-serif text-gold mb-4">IPD Setup</h3>
              <p className="text-cream/80 leading-relaxed mb-6">
                For profound healing requiring constant care, our In-Patient Department offers serene, nature-facing rooms. We ensure a tranquil environment essential for the deep rest required during and after Panchakarma.
              </p>
              <ul className="space-y-3 text-cream/90">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-saffron rounded-full"></span> Nature-Facing Rooms</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-saffron rounded-full"></span> 24/7 Care</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-saffron rounded-full"></span> Sattvic Meals</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
