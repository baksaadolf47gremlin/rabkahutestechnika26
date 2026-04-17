"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const GALLERY_IMAGES = [
  { src: "/images/gallery/klima-szereles.webp", title: "Klímaszerelés", category: "Lakossági & Ipari" },
  { src: "/images/gallery/hoszivattyu.webp", title: "Hőszivattyú", category: "Környezetbarát" },
  { src: "/images/gallery/ipari-huto-final.webp", title: "Hűtéstechnika", category: "Ipari Megoldások" },
  { src: "/images/gallery/villanyszereles.webp", title: "Villanyszerelés", category: "Elektromos Kivitelezés" },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-24 md:py-32 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sky-400 font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Munkásságunk
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white"
          >
            Referenciáink
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {GALLERY_IMAGES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1.5 rounded-lg bg-slate-950/60 backdrop-blur-xl border border-white/10 text-[10px] font-black uppercase tracking-[0.15em] text-white mb-4 shadow-xl">
                  {item.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">
                  {item.title}
                </h3>
                <div className="w-16 h-1.5 bg-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
