"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Telepítés",
    desc: "Gyors, precíz és tiszta munkavégzés. Teljes körű klíma és hűtéstechnikai rendszerek professzionális kiépítése a legmagasabb szakmai elvárások szerint.",
    icon: "/images/Group-5.webp",
    accent: "from-sky-500/10 to-transparent",
    iconBg: "bg-sky-50",
  },
  {
    title: "Beüzemelés",
    desc: "Gyári szintű beüzemelés, finomhangolás és optimális paraméterezés a berendezések élettartamának és energiahatékonyságának maximalizálásáért.",
    icon: "/images/Group-7.webp",
    accent: "from-sky-500/10 to-transparent",
    iconBg: "bg-sky-50",
  },
  {
    title: "Szervizelés",
    desc: "NKVH által előírt szivárgásvizsgálatok, időszakos karbantartás, és gyors hibaelhárítás. Szervizünk kiemelt rendelkezésre állást biztosít.",
    icon: "/images/Group-9.webp",
    accent: "from-sky-500/10 to-transparent",
    iconBg: "bg-sky-50",
  },
];

export function Services() {
  return (
    <section id="szolgaltatasaink" className="py-24 md:py-32 bg-slate-50 relative z-10 border-t border-slate-200/50">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sky-500 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4 block"
          >
            Mindenre kiterjedő
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-black text-slate-900"
          >
            Szolgáltatásaink
          </motion.h2>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col"
            >
              <div className="p-8 lg:p-10 flex flex-col flex-1 gap-8">
                {/* Icon */}
                <div className={`w-20 h-20 relative rounded-2xl ring-1 ring-slate-100 flex items-center justify-center shrink-0 ${service.iconBg} group-hover:scale-110 transition-transform duration-500`}>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 80px, 80px"
                    className="object-contain p-4"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 gap-4">
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-sky-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm lg:text-base flex-1">
                    {service.desc}
                  </p>
                </div>

                {/* CTA - More prominent button style on hover */}
                <a
                  href="#kapcsolat"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-100 text-xs font-black tracking-widest text-slate-700 uppercase hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 group/btn"
                >
                  Árajánlat kérése
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

