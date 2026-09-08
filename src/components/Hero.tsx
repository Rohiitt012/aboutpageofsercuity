'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Play, ArrowRight, Activity, Lock, Users, Building2, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-cyber-grid">
      {/* Ambient Radial Background */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>36+ YEARS OF AUSTRALIAN SECURITY EXCELLENCE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6">
              Safeguard Today. <br />
              <span className="text-gradient-blue">Secure Tomorrow.</span>
            </h1>

            {/* Narrative Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
              Founded in <strong className="text-white">1990</strong> in Bourke Street, Melbourne with just one client, Advent Security has spent over <strong className="text-blue-400">36+ years</strong> pioneering integrated physical guarding, electronic surveillance, and corporate risk management across Australia.
            </p>

            {/* Quick Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 w-full max-w-xl">
              {[
                "100% Australian Family-Owned",
                "24/7/365 Central Command Station",
                "ISO 9001 & ANZIA Compliant",
                "Integrated Electronic & Guarding Defense"
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 rounded-xl shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 border border-blue-400/40"
              >
                <span>Request Security Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#our-story"
                className="w-full sm:w-auto px-7 py-4 text-sm font-bold uppercase tracking-wider text-slate-200 bg-slate-900/80 hover:bg-slate-800 rounded-xl border border-slate-700/80 hover:border-blue-500/50 transition-all flex items-center justify-center gap-2"
              >
                <span>Discover Our Story</span>
              </a>
            </div>

          </div>

          {/* Right Column: High Tech Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-slate-700/60 shadow-2xl p-2 group">
              
              {/* Main Command Center Image */}
              <div className="relative h-[380px] sm:h-[450px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/command_center.jpg"
                  alt="Advent Security 24/7 Command Center"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                {/* Overlaid Live Operational Badge */}
                <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-lg border border-emerald-500/40 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wide">
                    Live Security Grid: ACTIVE
                  </span>
                </div>

                {/* Overlaid Historic Badge */}
                <div className="absolute top-4 right-4 glass-panel px-3 py-1.5 rounded-lg border border-blue-500/40 text-blue-300 text-[11px] font-bold uppercase">
                  EST. 1990 • MELBOURNE
                </div>

                {/* Bottom Overlay Card Details */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-4 rounded-xl border border-slate-700/80">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Operational Footprint
                    </span>
                    <span className="text-xs font-bold text-blue-400">36+ Years Legacy</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-center">
                    <div>
                      <div className="text-lg font-black text-white">1990</div>
                      <div className="text-[10px] text-slate-400 font-medium">Founded</div>
                    </div>
                    <div className="border-x border-slate-800">
                      <div className="text-lg font-black text-blue-400">1,200+</div>
                      <div className="text-[10px] text-slate-400 font-medium">Clients</div>
                    </div>
                    <div>
                      <div className="text-lg font-black text-emerald-400">24/7</div>
                      <div className="text-[10px] text-slate-400 font-medium">Vigilance</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Background Floating Decorative Glass Card */}
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-4 rounded-2xl glass-panel border border-blue-500/30 shadow-xl max-w-xs animate-bounce-slow">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/40 flex items-center justify-center text-blue-400 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase">Coles Melbourne (1990)</h4>
                <p className="text-[11px] text-slate-400">First client trust that built an Australian security powerhouse.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
