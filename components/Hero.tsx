"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Snowflake, Droplets, Wrench, ShieldCheck } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      id="kezdolap" 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-brand-900 shadow-2xl"
    >
      {/* Cinematic Dark Parallax Background - Dark gradient reversed to left to shade the right side */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-brand-900/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
        <Image
          src="/images/AdobeStock_139582673-scaled.webp"
          alt="Prémium Hűtéstechnika"
          fill
          priority
          className="object-cover object-center select-none"
        />
      </motion.div>

      <div className="container relative z-20 mx-auto px-6 md:px-12 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Empty left column */}
          <div className="hidden lg:block"></div>

          {/* Main Hero Hook - Cinematic Typography Moved to Right */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8 max-w-2xl lg:ml-auto"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border border-white/10 bg-black/30 backdrop-blur-md w-fit">
              <span className="w-1.5 h-6 bg-brand-500 shadow-[0_0_12px_rgba(90,133,171,0.6)]" />
              <span className="text-xs font-black tracking-[0.2em] uppercase text-white">
                Professzionális Kivitelezés
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black font-heading leading-[1.05] tracking-tight text-white drop-shadow-2xl">
              Épületgépészet <br />
              <span>és</span> <span className="text-brand-300 drop-shadow-[0_0_25px_rgba(147,197,253,0.4)]">Hűtéstechnika</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed drop-shadow-md">
              Vállaljuk <span className="text-white font-bold">országosan</span> lakossági és vállalati ügyfeleinknek klíma- és hűtéstechnikai rendszerek kompromisszummentes kivitelezését. 
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#szolgaltatasaink"
                className="group relative inline-flex items-center justify-center bg-sky-500 text-white px-8 md:px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all duration-300 hover:bg-sky-400 hover:-translate-y-1 hover:scale-[1.02] shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_35px_rgba(14,165,233,0.5)] overflow-hidden"
              >
                {/* Shine Sweep Effect */}
                <span className="absolute inset-0 -translate-x-[150%] skew-x-[30deg] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-[150%] transition-transform duration-700 ease-out z-0" />
                
                <span className="relative z-10 flex items-center gap-2">
                  Kezdjük el
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="#kapcsolat"
                className="inline-flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/20 text-white px-8 md:px-10 py-4 rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-white/10 transition-all hover:-translate-y-0.5"
              >
                Kapcsolatfelvétel
              </Link>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Görgessen</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
