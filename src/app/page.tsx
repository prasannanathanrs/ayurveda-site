import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Treatments } from "@/components/sections/Treatments";
import { Facilities } from "@/components/sections/Facilities";
import { Contact } from "@/components/sections/Contact";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Treatments />
      <Facilities />
      <Contact />
      <FloatingWhatsApp />
    </main>
  );
}
