import Link from "next/link";
import { Snowflake, Phone, Mail, MapPin, Globe, MessageSquare, Info } from "lucide-react";

const NAV_LINKS = [
  { label: "Kezdőlap", href: "/" },
  { label: "Rólunk", href: "/rolunk" },
  { label: "Szolgáltatások", href: "/szolgaltatasaink" },
  { label: "Termékek", href: "/termekeink" },
  { label: "Galéria", href: "/galeria" },
  { label: "Kapcsolat", href: "/kapcsolat" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#020617] pt-24 pb-12 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center gap-12 mb-20">
          
          {/* Logo & Description */}
          <div className="flex flex-col items-center gap-6 max-w-2xl px-4">
            <Link href="#" className="flex items-center gap-4 group">
              <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-brand-500/20 rounded-2xl border border-brand-500/30 transition-all duration-500 group-hover:border-brand-500 group-hover:bg-brand-500/30 shadow-2xl">
                <Snowflake className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:rotate-12 transition-transform duration-500" />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-heading font-black text-2xl md:text-3xl tracking-tighter text-white leading-none">
                  RABKA
                </span>
                <span className="text-xs font-black text-brand-400 tracking-[0.3em] uppercase">
                  Hűtéstechnika
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed text-balance">
              Ipari és kereskedelmi hűtőberendezések, hőszivattyús rendszerek és professzionális klímák országos szakértője. Minőség, precizitás és megbízhatóság minden projektben.
            </p>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-slate-400 hover:text-white transition-all duration-300 text-sm font-black uppercase tracking-widest hover:-translate-y-0.5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Bar */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 py-8 px-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm w-full max-w-4xl shadow-2xl">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center text-white border border-brand-500/30 group-hover:bg-brand-500 group-hover:scale-110 transition-all duration-300">
                <Phone size={18} />
              </div>
              <span className="text-white font-bold tracking-tight text-sm md:text-base">+36 70 627 6382</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center text-white border border-brand-500/30 group-hover:bg-brand-500 group-hover:scale-110 transition-all duration-300">
                <Mail size={18} />
              </div>
              <span className="text-white font-bold tracking-tight text-sm md:text-base">rabkakft@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center text-white border border-brand-500/30 group-hover:bg-brand-500 group-hover:scale-110 transition-all duration-300">
                <MapPin size={18} />
              </div>
              <span className="text-white font-bold tracking-tight text-sm md:text-base">Magyarország, Országos</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-slate-400 text-sm font-medium">
              &copy; {currentYear} <span className="text-white">Rabka Hűtéstechnika Kft.</span> Minden jog fenntartva.
            </p>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
              Design & Development by Antigravity
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link href="#" className="flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300 group">
              <Globe size={18} className="group-hover:rotate-12 transition-transform text-brand-400" />
              <span className="text-xs font-bold uppercase tracking-wider">Web</span>
            </Link>
            <div className="w-px h-4 bg-white/10 hidden md:block" />
            <Link href="#" className="flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300 group">
              <MessageSquare size={18} className="text-brand-400" />
              <span className="text-xs font-bold uppercase tracking-wider">Social</span>
            </Link>
          </div>

          <div className="flex gap-10">
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-2 group">
              <Info size={14} className="text-brand-400" />
              Adatvédelem
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-2 group">
              <Info size={14} className="text-brand-400" />
              Impresszum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
