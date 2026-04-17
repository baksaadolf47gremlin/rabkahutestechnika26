"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Products() {
  return (
    <section id="termekeink" className="py-16 md:py-24 bg-white relative z-10">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
           <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-sky-500 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4 block">
              Termékportfólió
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-black font-heading leading-tight text-slate-900">
              Széleskörű Megoldások
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:max-w-md pb-1"
          >
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              A legkisebb otthoni rezsicsökkentő split klímáktól a komplett ipari csarnokok hűtéséig minden területen otthon vagyunk.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Lakossági */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative bg-white flex flex-col p-8 md:p-10 rounded-[2rem] border border-slate-200/50 hover:border-slate-300 hover:bg-slate-50/30 transition-all duration-500 shadow-sm hover:shadow-xl overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl group-hover:bg-sky-500/10 transition-colors duration-700" />
            
            <div className="flex flex-col gap-6 relative z-10 h-full">
              <div className="relative w-20 h-20 shrink-0 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center p-4 shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-500 group-hover:bg-sky-50/50">
                <Image
                  src="/images/Group-11.webp"
                  alt="Lakossági klímák"
                  fill
                  sizes="80px"
                  className="object-contain p-3 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-heading font-black mb-3 text-slate-900 leading-tight group-hover:text-sky-600 transition-colors duration-300">
                  Lakossági klímák
                </h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 flex-1">
                  Energiahatékony, csendes hűtő-fűtő klímaberendezések, amelyek hosszú távon biztosítják otthona tökéletes klímáját.
                </p>
                <Link href="#kapcsolat" className="inline-flex items-center gap-3 text-sm font-black tracking-widest text-slate-900 uppercase hover:text-sky-600 transition-colors group/link mt-auto w-fit">
                  Részletek megtekintése
                  <ArrowRight size={18} className="group-hover/link:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Ipari */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.15 }}
            className="group relative bg-white flex flex-col p-8 md:p-10 rounded-[2rem] border border-slate-200/50 hover:border-slate-300 hover:bg-slate-50/30 transition-all duration-500 shadow-sm hover:shadow-xl overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl group-hover:bg-sky-500/10 transition-colors duration-700" />

            <div className="flex flex-col gap-6 relative z-10 h-full">
              <div className="relative w-20 h-20 shrink-0 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center p-4 shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-500 group-hover:bg-sky-50/50">
                <Image
                  src="/images/Group-13.webp"
                  alt="Ipari és kereskedelmi berendezések"
                  fill
                  sizes="80px"
                  className="object-contain p-3 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-heading font-black mb-3 text-slate-900 leading-tight group-hover:text-sky-600 transition-colors duration-300">
                  Ipari hűtéstechnika
                </h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 flex-1">
                  Komplex folyadékhűtők, VRF-VRV hálózatok és robosztus hűtőkamrák professzionális- és ipari igényekre tervezve.
                </p>
                <Link href="#kapcsolat" className="inline-flex items-center gap-3 text-sm font-black tracking-widest text-slate-900 uppercase hover:text-sky-600 transition-colors group/link mt-auto w-fit">
                  Műszaki megoldások
                  <ArrowRight size={18} className="group-hover/link:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
