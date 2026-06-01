"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with parallax */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-center"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="w-[800px] h-[800px] rounded-full border-[1px] border-earth/30 flex items-center justify-center"
        >
          <div className="w-[600px] h-[600px] rounded-full border-[1px] border-earth/40 flex items-center justify-center">
            <div className="w-[400px] h-[400px] rounded-full border-[1px] border-earth/50"></div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-6 flex flex-col items-center"
        >
          <div className="text-saffron mb-4 text-sm md:text-base tracking-[0.3em] uppercase font-bold">
            Authentic Sanatana Healing
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-maroon font-bold leading-tight drop-shadow-sm mb-4">
            Shri Guha Khataksham <br /> Ayurvedasram
          </h1>
          <p className="text-xl md:text-2xl text-earth italic mb-8 max-w-2xl font-serif">
            &quot;Sarve Bhavantu Sukhinah, Sarve Santu Niramayah&quot;
          </p>
          <p className="text-lg text-text-light max-w-3xl leading-relaxed mb-12">
            Experience the profound healing of ancient Panchakarma therapies in a serene outskirt sanctuary. Reconnect with nature, restore your doshas, and revive your spirit through our authentic Mini OPD and IPD setups.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a href="#booking" className="group relative px-8 py-4 bg-maroon text-cream font-serif text-lg tracking-wider overflow-hidden rounded-sm transition-all hover:bg-earth shadow-xl hover:shadow-2xl">
            <span className="relative z-10">Book a Consultation</span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          </a>
          <a href="#treatments" className="px-8 py-4 border border-earth text-earth font-serif text-lg tracking-wider hover:bg-earth hover:text-cream transition-all rounded-sm">
            Explore Treatments
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-earth/60"
      >
        <span className="text-sm tracking-widest uppercase mb-2">Scroll to discover</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
