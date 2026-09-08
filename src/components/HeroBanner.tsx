'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronRight, ShieldCheck, Sparkles, Lock } from 'lucide-react';

interface HeroBannerProps {
  onOpenQuoteModal: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative pt-20 bg-slate-950 overflow-hidden">
      
      {/* Skyscraper Banner Container matching user Image 1 */}
      <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[520px] overflow-hidden border-b border-amber-500/30 shadow-2xl group">
        
        {/* Architectural Glass Skyscraper Background */}
        <Image
          src="/images/australian_skyscraper.jpg"
          alt="Advent Security Corporate Headquarters Skyscraper"
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 brightness-75 contrast-125"
          priority
        />
        
        {/* Dark Vignette & Amber Radial Lighting Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,transparent_70%)]"></div>

        {/* Centered Content Matching Image 1 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
          
          {/* Badge indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-xl backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>36+ YEARS OF EVOLUTION • EST. 1990</span>
          </div>

          {/* Main Title matching Image 1: Our Story */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-none drop-shadow-2xl mb-4">
            Our Story
          </h1>
          
          {/* Breadcrumb Navigation matching Image 1: Advent Security > Our Story */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-300">
            <span className="text-slate-200 font-bold hover:text-amber-400 cursor-pointer transition-colors">Advent Security</span>
            <ChevronRight className="w-4 h-4 text-amber-500" />
            <span className="text-amber-400 font-black uppercase tracking-wider">Our Story</span>
          </div>

          {/* Quick Quote / Audit Action */}
          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <Lock className="w-4 h-4 text-slate-950" />
              <span>Request Security Consultation</span>
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};
