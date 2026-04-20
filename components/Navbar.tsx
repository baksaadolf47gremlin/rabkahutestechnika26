"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Snowflake } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Kezdőlap", href: "/" },
  { label: "Rólunk", href: "/rolunk" },
  { label: "Szolgáltatásaink", href: "/szolgaltatasaink" },
  { label: "Termékeink", href: "/termekeink" },
  { label: "Galéria", href: "/galeria" },
  { label: "Kapcsolat", href: "/kapcsolat" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-white/95 backdrop-blur-lg border-slate-200 shadow-sm py-3" : "bg-black/20 backdrop-blur-md py-4"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-3 group">
          <div className={cn("relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-105 rounded-lg", scrolled ? "bg-sky-50" : "bg-white/10 backdrop-blur-sm")}>
            <Snowflake className={cn("w-6 h-6 md:w-7 md:h-7", scrolled ? "text-sky-600" : "text-white")} />
          </div>
          <div className="flex flex-col">
            <span className={cn("font-heading font-black text-lg md:text-xl tracking-tight leading-none", scrolled ? "text-slate-900" : "text-white")}>
              RABKA
            </span>
            <span className={cn("text-[10px] md:text-xs font-bold tracking-widest uppercase", scrolled ? "text-sky-600" : "text-white/80")}>
              Hűtéstechnika
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5",
                scrolled 
                  ? "text-slate-700 hover:text-sky-600" 
                  : "text-white drop-shadow-md hover:text-sky-300"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#kapcsolat"
            className={cn(
              "px-6 py-2.5 rounded-xl text-sm font-black tracking-widest uppercase transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 border border-transparent",
              scrolled 
                ? "bg-sky-600 text-white hover:bg-sky-700" 
                : "bg-sky-500 text-white hover:bg-sky-400"
            )}
          >
            Árajánlatkérés
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden p-2", scrolled ? "text-slate-800" : "text-white")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "absolute top-full left-0 w-full bg-white border-t border-slate-200 flex flex-col p-6 gap-6 transition-all duration-300 origin-top md:hidden shadow-xl",
          mobileMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        )}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-bold uppercase tracking-wide text-slate-800 hover:text-sky-600 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
