import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { Gallery } from "@/components/Gallery";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-body">
      <Navbar />
      
      <main className="flex-1 bg-white">
        <Hero />
        <Features />
        
        {/* Subtle separator gradients between sections */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        
        <Services />
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent shadow-sm" />
        
        <Products />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        
        <Gallery />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
        
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
