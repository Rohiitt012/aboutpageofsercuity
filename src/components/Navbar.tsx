'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black border-b-2 border-amber-500 shadow-2xl ${
      isScrolled ? 'py-2.5 shadow-black/80' : 'py-3.5'
    }`}>
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo Section */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-12 w-48 sm:h-14 sm:w-56 transition-transform group-hover:scale-105">
              <Image
                src="/images/logo.webp"
                alt="Advent Security Excellence In Security Logo"
                fill
                sizes="224px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Bar (Exact styling matching original site screenshot) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-extrabold tracking-wider uppercase text-white">
            <Link 
              href="/" 
              className="text-slate-300 hover:text-amber-400 transition-colors py-2"
            >
              HOME
            </Link>

            {/* ABOUT Active Tab with Gold Underline Bar */}
            <div className="relative flex flex-col items-center group">
              <Link 
                href="#our-story" 
                className="text-amber-400 font-black py-2 tracking-wider uppercase flex items-center gap-1"
              >
                <span>ABOUT</span>
                <ChevronDown className="w-3.5 h-3.5 text-amber-400" />
              </Link>
              {/* Active Gold Line Indicator below ABOUT */}
              <span className="w-full h-0.5 bg-amber-400 rounded-full"></span>

              {/* Hover Dropdown Sub-menu */}
              <div className="absolute top-full left-0 mt-1 w-48 rounded-xl bg-slate-950 p-2 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-slate-8 border-amber-500/30 text-left normal-case">
                <Link href="#our-story" className="block px-3 py-2 text-xs font-semibold text-slate-200 hover:bg-amber-500/20 hover:text-amber-400 rounded-lg transition-colors">
                  Our Story (1990 - 2026)
                </Link>
                <Link href="#leadership" className="block px-3 py-2 text-xs font-semibold text-slate-200 hover:bg-amber-500/20 hover:text-amber-400 rounded-lg transition-colors">
                  Leadership & Team
                </Link>
                <Link href="#compliance" className="block px-3 py-2 text-xs font-semibold text-slate-200 hover:bg-amber-500/20 hover:text-amber-400 rounded-lg transition-colors">
                  ISO 9001 Governance
                </Link>
              </div>
            </div>

            <Link 
              href="#services" 
              className="text-slate-200 hover:text-amber-400 transition-colors py-2"
            >
              SERVICES
            </Link>

            <Link 
              href="#pillars" 
              className="text-slate-200 hover:text-amber-400 transition-colors py-2"
            >
              EXPERTISE
            </Link>

            <Link 
              href="#timeline" 
              className="text-slate-200 hover:text-amber-400 transition-colors py-2"
            >
              SERVICE AREAS
            </Link>

            <Link 
              href="#our-story" 
              className="text-slate-200 hover:text-amber-400 transition-colors py-2"
            >
              INSIGHTS
            </Link>

            <button
              onClick={onOpenQuoteModal}
              className="text-slate-200 hover:text-amber-400 transition-colors py-2 uppercase"
            >
              CONTACT
            </button>
          </nav>

          {/* Right Section: Phone Number & Audit CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a 
              href="tel:1800464166" 
              className="flex items-center gap-2 group text-white font-extrabold text-xs sm:text-sm tracking-wider"
            >
              <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase font-bold tracking-widest text-amber-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  24/7 COMMAND
                </span>
                <span className="text-sm font-black text-white group-hover:text-amber-400 transition-colors">
                  1800 464 166
                </span>
              </div>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-2.5 text-xs font-black uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 rounded-xl shadow-lg shadow-amber-500/20 hover:scale-[1.03] active:scale-[0.98] transition-all border border-amber-300"
            >
              Request Audit
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-amber-500/40 text-amber-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-amber-500/40 px-6 py-6 mt-2 animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col gap-4 text-sm font-bold uppercase tracking-wider">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-amber-400 py-1"
            >
              HOME
            </Link>
            <Link 
              href="#our-story" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-amber-400 font-extrabold py-1 border-l-2 border-amber-400 pl-3"
            >
              ABOUT (36+ YEARS HERITAGE)
            </Link>
            <Link 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-amber-400 py-1"
            >
              SERVICES
            </Link>
            <Link 
              href="#pillars" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-amber-400 py-1"
            >
              EXPERTISE
            </Link>
            <Link 
              href="#timeline" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-amber-400 py-1"
            >
              SERVICE AREAS
            </Link>
            <Link 
              href="#our-story" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-amber-400 py-1"
            >
              INSIGHTS
            </Link>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a href="tel:1800464166" className="flex items-center gap-3 text-white py-2">
                <Phone className="w-5 h-5 text-amber-400" />
                <div>
                  <div className="text-xs text-slate-400">24/7 Command Station</div>
                  <div className="text-base font-black text-amber-400">1800 464 166</div>
                </div>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 text-center text-xs font-black uppercase tracking-wider text-slate-950 bg-amber-500 rounded-xl shadow-lg"
              >
                Request Security Audit
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
