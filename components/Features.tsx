"use client";

import { Snowflake, Droplets, Wrench, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  return (
    <section id="rolunk" className="py-20 bg-slate-900 border-t border-white/10 relative z-20">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Card 1 */}
          <div className="group relative p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-500/20 transition-colors" />
             <div className="text-sky-400 mb-6 p-4 bg-white/5 rounded-xl inline-flex border border-white/5 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 shadow-lg relative z-10">
                <Snowflake size={28} className="group-hover:animate-snow-spin" />
             </div>
             <h3 className="text-white font-bold text-xl mb-3 tracking-wide relative z-10">Hűtés & Klíma</h3>
             <p className="text-white/60 text-sm leading-relaxed relative z-10">Folyadékhűtők, VRF-VRV rendszerek, hűtőkamrák és minőségi lakossági klímák forgalmazása és szakszerű telepítése magas hatékonysággal.</p>
          </div>

          {/* Card 2 */}
          <div className="group relative p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl group-hover:bg-brand-500/20 transition-colors" />
             <div className="text-sky-400 mb-6 p-4 bg-white/5 rounded-xl inline-flex border border-white/5 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-lg relative z-10">
                {/* Custom Droplets SVG – inner small drop falls on hover */}
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {/* Small inner drop – falls on hover */}
                  <path
                    d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"
                    className="group-hover:animate-inner-drop origin-center"
                  />
                  {/* Large outer drop – static */}
                  <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
                </svg>
             </div>
             <h3 className="text-white font-bold text-xl mb-3 tracking-wide relative z-10">Épületgépészet</h3>
             <p className="text-white/60 text-sm leading-relaxed relative z-10">Komplett hőszivattyús rendszerek, valamint ipari és lakossági víz- és fűtésszerelési kivitelezések gyorsan és precízen.</p>
          </div>

          {/* Card 3 */}
          <div className="group relative p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-500/20 transition-colors" />
             <div className="text-sky-400 mb-6 p-4 bg-white/5 rounded-xl inline-flex border border-white/5 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 shadow-lg relative z-10">
                <Wrench size={28} className="group-hover:animate-wrench-turn" />
             </div>
             <h3 className="text-white font-bold text-xl mb-3 tracking-wide relative z-10">Villanyszerelés</h3>
             <p className="text-white/60 text-sm leading-relaxed relative z-10">Gépészeti berendezések és irányító rendszerek precíz villamos kiépítése, illetve létesítmények teljeskörű üzemeltetése.</p>
          </div>

          {/* Card 4 */}
          <div className="group relative p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl group-hover:bg-brand-500/20 transition-colors" />
             <div className="text-sky-400 mb-6 p-4 bg-white/5 rounded-xl inline-flex border border-white/5 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-lg relative z-10">
                <ShieldCheck size={28} className="group-hover:animate-shield-pulse" />
             </div>
             <h3 className="text-white font-bold text-xl mb-3 tracking-wide relative z-10">Hatósági Vizsgálatok</h3>
             <p className="text-white/60 text-sm leading-relaxed relative z-10">NKVH által előírt kötelező gáztömörségi és szivárgásvizsgálatok lefolytatása, szerviz dokumentációk pontos vezetése.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
