"use client";

import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function ContactCTA() {
  return (

    <section id="kapcsolat" className="py-24 md:py-32 bg-slate-50 relative z-10 border-t border-slate-200 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-slate-200 opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 opacity-80 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 xl:px-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-16 xl:p-20 rounded-[3rem] border border-slate-200 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Accent Stripe */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-600 via-sky-500 to-brand-400" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
            
            <div className="flex-1 text-center lg:text-left">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-brand-600 font-bold tracking-[0.3em] uppercase text-xs mb-6 block"
              >
                Kapcsolatfelvétel
              </motion.span>
              
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black font-heading mb-8 text-slate-900 leading-[1.1] text-balance">
                Kérjen professzionális <span className="text-brand-600">árajánlatot!</span>
              </h2>
              
              <p className="text-slate-500 text-base md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10">
                Gépészeti megoldások tervezése, kivitelezése és karbantartása. Szakértő csapatunk 24 órán belül felveszi Önnel a kapcsolatot.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                 <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100 text-xs font-bold text-slate-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Hétfő - Péntek: 08:00 - 17:00
                 </div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg space-y-4">
              {/* Phone Line */}
              <div className="grid grid-cols-1 gap-3">
                <a 
                  href="tel:+36706276382" 
                  className="flex items-center gap-5 p-4 md:p-5 rounded-2xl bg-slate-50/50 border border-slate-100 hover:border-brand-300 hover:bg-white transition-all duration-500 group shadow-sm hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shrink-0 flex items-center justify-center border border-slate-100 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.1em] text-slate-400 mb-0.5 uppercase">Elsődleges telefonszámunk</p>
                    <span className="text-base md:text-lg font-bold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">+36 70 627 6382</span>
                  </div>
                </a>

                <a 
                  href="tel:+36703919748" 
                  className="flex items-center gap-5 p-4 md:p-5 rounded-2xl bg-slate-50/50 border border-slate-100 hover:border-brand-300 hover:bg-white transition-all duration-500 group shadow-sm hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shrink-0 flex items-center justify-center border border-slate-100 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.1em] text-slate-400 mb-0.5 uppercase">Másodlagos telefonszámunk</p>
                    <span className="text-base md:text-lg font-bold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">+36 70 391 9748</span>
                  </div>
                </a>
              </div>

              {/* Email Line */}
              <a 
                href="mailto:rabkakft@gmail.com" 
                className="flex items-center gap-5 p-4 md:p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:bg-brand-700 transition-all duration-500 group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 shrink-0 flex items-center justify-center border border-white/10 text-white group-hover:bg-white group-hover:text-brand-900 transition-all duration-500 shadow-sm">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 mb-0.5 uppercase">E-mail küldése</p>
                  <span className="text-base md:text-lg font-bold text-white tracking-tight">rabkakft@gmail.com</span>
                </div>
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
