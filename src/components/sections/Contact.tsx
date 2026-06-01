"use client";

import { motion } from "framer-motion";
import { Send, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-cream border-t border-earth/20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-serif text-maroon mb-4"
            >
              Begin Your Healing Journey
            </motion.h2>
            <p className="text-lg text-text-light">
              Connect with our Vaidyas to schedule a consultation or learn more about our treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 border border-earth/20 rounded-sm shadow-sm relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-saffron to-maroon"></div>
              <h3 className="text-2xl font-serif text-maroon mb-6">Request a Consultation</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-1">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 bg-cream border border-earth/20 rounded-sm focus:outline-none focus:border-maroon transition-colors" placeholder="Shri / Smt..." />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text mb-1">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 bg-cream border border-earth/20 rounded-sm focus:outline-none focus:border-maroon transition-colors" placeholder="+91..." />
                </div>
                <div>
                  <label htmlFor="concern" className="block text-sm font-medium text-text mb-1">Primary Health Concern</label>
                  <textarea id="concern" rows={4} className="w-full px-4 py-3 bg-cream border border-earth/20 rounded-sm focus:outline-none focus:border-maroon transition-colors resize-none" placeholder="Briefly describe what you seek healing for..."></textarea>
                </div>
                <button type="button" className="w-full py-4 bg-maroon text-cream font-serif text-lg hover:bg-earth transition-colors flex items-center justify-center gap-2 rounded-sm shadow-md">
                  Submit Request <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center space-y-8"
            >
              <div>
                <h3 className="text-xl font-serif text-maroon mb-2">Location</h3>
                <p className="text-text-light leading-relaxed">
                  Shri Guha Khataksham Ayurvedasram<br/>
                  Outskirts Nature Reserve,<br/>
                  India
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-serif text-maroon mb-2">Direct Contact</h3>
                <div className="flex items-center gap-3 text-text-light mb-2">
                  <Phone className="w-5 h-5 text-saffron" />
                  <span>+91 XXXXX XXXXX</span>
                </div>
                <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 px-6 py-3 border border-forest text-forest hover:bg-forest hover:text-white transition-colors rounded-sm font-medium">
                  Chat on WhatsApp
                </a>
              </div>

              <div className="p-6 bg-earth/5 border border-earth/20 rounded-sm mt-4">
                <p className="text-sm text-text-light italic">
                  &quot;Health is not merely the absence of disease, but a state of perfect balance among the body, mind, and consciousness.&quot;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
