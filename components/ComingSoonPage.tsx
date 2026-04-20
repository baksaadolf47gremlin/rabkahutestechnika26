"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Database,
  Mail,
  Star,
  Search,
  PhoneMissed,
  Users,
  Smartphone,
  LucideIcon,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// ── Icon Registry ──────────────────────────────────────────────────────────
const ICON_MAP: Record<string, LucideIcon> = {
  Database,
  Mail,
  Star,
  Search,
  PhoneMissed,
  Users,
  Smartphone,
};

export interface ComingSoonFeature {
  icon: keyof typeof ICON_MAP;
  title: string;
  desc: string;
}

interface ComingSoonPageProps {
  title: string;
  features: ComingSoonFeature[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: "easeOut" },
  }),
};

function FeatureCard({ f, i }: { f: ComingSoonFeature; i: number }) {
  const Icon = ICON_MAP[f.icon] ?? Database;
  return (
    <motion.div
      custom={i}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className="relative p-5 rounded-xl border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 group cursor-default"
    >
      <div className="w-9 h-9 rounded-lg bg-brand-500/90 flex items-center justify-center mb-4 text-white group-hover:scale-105 transition-transform shadow-md shadow-brand-500/20">
        <Icon size={17} />
      </div>
      <h3 className="text-white/90 font-semibold text-sm mb-1.5">{f.title}</h3>
      <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
    </motion.div>
  );
}

export function ComingSoonPage({ title, features }: ComingSoonPageProps) {
  const topRow = features.slice(0, 3);
  const bottomRow = features.slice(3, 6);

  return (
    <div className="min-h-screen flex flex-col font-body bg-[#0d1b2a]">
      <Navbar />

      <main className="flex-1 relative pt-32 pb-0">
        {/* Dot-grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(90,133,171,0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a] via-transparent to-[#0d1b2a] opacity-70 pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 xl:px-24 max-w-5xl relative z-10">

          {/* ── Heading ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-black font-heading text-white leading-[1.1] tracking-tight mb-4">
              Hamarosan{" "}
              <span className="text-sky-400">elérhető</span>
            </h1>
            <p className="text-slate-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              Ez az oldal fejlesztés alatt áll. A további tartalmak a{" "}
              <span className="text-slate-300">megbízásunk után</span> válnak
              elérhetővé — sok más izgalmas funkcióval együtt:
            </p>
          </motion.div>

          {/* ── Feature Cards — 3+3 ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
            {topRow.map((f, i) => (
              <FeatureCard key={i} f={f} i={i} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {bottomRow.map((f, i) => (
              <FeatureCard key={i} f={f} i={i + 3} />
            ))}
          </div>

          {/* ── Premium App Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.5 }}
            className="relative rounded-xl border border-white/[0.07] bg-white/[0.03] p-6 mb-12 overflow-hidden"
          >
            {/* Watermark */}
            <span className="absolute right-6 top-1/2 -translate-y-1/2 select-none hidden md:flex flex-col items-end pointer-events-none">
              <span className="text-white/[0.04] font-black text-[60px] leading-none">App</span>
              <span className="text-white/[0.04] font-black text-[10px] tracking-[0.3em] uppercase">iOS &amp; Android</span>
            </span>

            <div className="relative z-10 flex items-start gap-5">
              {/* Icon */}
              <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-500/90 flex items-center justify-center shadow-md shadow-brand-500/30">
                <Smartphone size={22} className="text-white" />
              </div>

              <div className="flex-1">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 mb-3">
                  <span className="w-1 h-1 rounded-full bg-sky-400 animate-pulse" />
                  <span className="text-sky-400/80 text-[9px] font-black tracking-[0.2em] uppercase">
                    Prémium Funkció
                  </span>
                </div>

                <h2 className="text-base md:text-lg font-black font-heading text-white mb-2">
                  Egyedi telefonos applikáció
                </h2>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-xl">
                  Kövesd nyomon céged fejlődését bárhonnan, valós időben. Saját
                  branded applikáció, amellyel átlátod az ajánlatokat, az
                  ügyfeleket és a bevételt —{" "}
                  <span className="text-slate-300">közvetlenül a zsebedből</span>.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Buttons ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 pb-20"
          >
            <Link
              href="/#kapcsolat"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-7 py-3 rounded-lg font-bold uppercase tracking-wider text-xs transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_16px_rgba(14,165,233,0.25)] hover:shadow-[0_0_28px_rgba(14,165,233,0.4)]"
            >
              Kapcsolat felvétel
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-transparent border border-white/15 text-white/70 px-7 py-3 rounded-lg font-bold uppercase tracking-wider text-xs hover:bg-white/5 hover:text-white transition-all duration-300"
            >
              Főoldal
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
