'use client';

import React, { useState } from 'react';
import { Calendar, Shield, Cpu, Award, Rocket, CheckCircle2, ChevronRight } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [activeEra, setActiveEra] = useState(0);

  const eras = [
    {
      year: "1990",
      title: "Genesis & First Client",
      subtitle: "Bourke Street, Melbourne",
      icon: Calendar,
      tag: "FOUNDATION",
      description: "Advent Security's journey began in 1990 with one client (Coles in Bourke Street, Melbourne) and a small team of casual security guards. Built on a simple focus: understand client needs and deliver dependable security.",
      highlights: [
        "First client: Coles Bourke Street",
        "Personalized client service model",
        "Australian family-owned values established"
      ]
    },
    {
      year: "2000s",
      title: "Enterprise Guarding Expansion",
      subtitle: "Nationwide Growth",
      icon: Shield,
      tag: "SCALE",
      description: "Over the decade, Advent built a formidable reputation for corporate concierge, mobile patrols, event security, and retail loss prevention across Victoria and interstate.",
      highlights: [
        "Expanded into corporate concierge & commercial office defense",
        "Trained officer deployment network",
        "Multi-sector industry partnerships"
      ]
    },
    {
      year: "2010s",
      title: "The Electronic Convergence",
      subtitle: "CCTV, Access Control & Monitoring",
      icon: Cpu,
      tag: "INNOVATION",
      description: "Recognizing that physical security alone was evolving, Advent established full electronic security capabilities—installing high-definition CCTV, biometric access control, and launching a 24/7 central monitoring station.",
      highlights: [
        "CCTV & IP Surveillance deployment",
        "Biometric & keycard access systems",
        "24/7/365 Central Alarm Monitoring Station"
      ]
    },
    {
      year: "2020s",
      title: "Integrated Risk Advisory",
      subtitle: "Aviation, Health & Government",
      icon: Award,
      tag: "EXCELLENCE",
      description: "Broadened services to include high-level security consulting, threat risk assessments, and specialized protective services for critical infrastructure, hospitals, and government facilities.",
      highlights: [
        "Security Risk Advisory & Auditing",
        "Aviation & Critical Infrastructure defense",
        "ISO 9001 Quality Accreditation"
      ]
    },
    {
      year: "2026+",
      title: "Next-Gen AI Command",
      subtitle: "Cyber-Physical Defense",
      icon: Rocket,
      tag: "FUTURE",
      description: "Combining 36+ years of operational experience with artificial intelligence, automated video analytics, and smart cloud monitoring to protect modern enterprise assets against emerging threat vectors.",
      highlights: [
        "AI-assisted video analytics & threat detection",
        "Integrated mobile incident response apps",
        "Autonomous security command center"
      ]
    }
  ];

  return (
    <section id="timeline" className="py-24 relative bg-slate-950/80 border-t border-slate-800">
      
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>36+ YEARS EVOLUTION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Our Interactive Journey <br />
            <span className="text-gradient-blue">(1990 — Present & Future)</span>
          </h2>
          <p className="text-slate-400 text-base">
            Click through the timeline milestones below to explore how Advent Security evolved from a local Melbourne operation into a nationwide security guardian.
          </p>
        </div>

        {/* Timeline Horizontal Stepper Controls */}
        <div className="relative mb-12">
          
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 relative z-10">
            {eras.map((era, idx) => {
              const IconComp = era.icon;
              const isActive = activeEra === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveEra(idx)}
                  className={`flex flex-col items-center p-4 rounded-2xl transition-all duration-300 ${
                    isActive 
                      ? 'glass-panel border-blue-500 shadow-xl shadow-blue-600/20 bg-blue-950/40 scale-105' 
                      : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                    isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40' : 'bg-slate-800 text-slate-400'
                  }`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className={`text-lg font-black ${isActive ? 'text-blue-400' : 'text-slate-300'}`}>
                    {era.year}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider text-center line-clamp-1">
                    {era.tag}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Era Detail Showcase Card */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 relative overflow-hidden transition-all duration-500">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-black text-blue-400">{eras[activeEra].year}</span>
                <span className="px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                  {eras[activeEra].tag} ERA
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">
                {eras[activeEra].title}
              </h3>
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-6">
                {eras[activeEra].subtitle}
              </p>

              <p className="text-slate-300 text-base leading-relaxed mb-8">
                {eras[activeEra].description}
              </p>

              <div className="space-y-3 w-full">
                {eras[activeEra].highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 glass-panel px-4 py-3 rounded-xl border border-slate-800 text-slate-200 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card / Interactive Navigation */}
            <div className="lg:col-span-5 glass-panel p-8 rounded-2xl border border-slate-700/80 bg-slate-900/90 text-center flex flex-col items-center justify-between min-h-[300px]">
              
              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-blue-400 mb-4">
                {React.createElement(eras[activeEra].icon, { className: "w-8 h-8" })}
              </div>

              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  ERA {activeEra + 1} OF 5
                </div>
                <div className="text-xl font-black text-white">
                  {eras[activeEra].title}
                </div>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-3 w-full">
                <button
                  onClick={() => setActiveEra((prev) => (prev > 0 ? prev - 1 : eras.length - 1))}
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold uppercase tracking-wider transition-colors border border-slate-700"
                >
                  ← Previous Era
                </button>
                <button
                  onClick={() => setActiveEra((prev) => (prev < eras.length - 1 ? prev + 1 : 0))}
                  className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-blue-600/30"
                >
                  Next Era →
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
