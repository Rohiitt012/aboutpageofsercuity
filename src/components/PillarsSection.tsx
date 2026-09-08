'use client';

import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Eye, Flame, Check } from 'lucide-react';

export const PillarsSection: React.FC = () => {
  const values = [
    {
      title: "Client-Centric Integrity",
      description: "Ever since our start in 1990 at Bourke Street, Melbourne, our focus has stayed simple: understand the client's exact needs and deliver transparent, honest protection.",
      icon: HeartHandshake,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Continuous Innovation",
      description: "We bridge traditional physical security with futuristic electronic surveillance, AI camera analytics, biometric access control, and 24/7 cloud monitoring.",
      icon: Eye,
      color: "from-cyan-400 to-blue-600"
    },
    {
      title: "Empowered Personnel",
      description: "Our security officers and corporate concierges are our proudest asset—extensively vetted, continuously trained, and committed to representing your brand professionally.",
      icon: ShieldCheck,
      color: "from-emerald-400 to-teal-600"
    },
    {
      title: "Uncompromising Vigilance",
      description: "Security risks never sleep. Our 24/7 Grade-A central monitoring command center and mobile patrol fleet ensure round-the-clock protection 365 days a year.",
      icon: Flame,
      color: "from-amber-400 to-orange-600"
    }
  ];

  return (
    <section id="pillars" className="py-24 relative bg-slate-950/90 border-t border-slate-800">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>ETHOS & GOVERNANCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            The Pillars That Drive Our <br />
            <span className="text-gradient-blue">36+ Year Australian Heritage</span>
          </h2>
          <p className="text-slate-400 text-base">
            Long-term client relationships, professionalism, and dependable service are the core principles shaping our company culture.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {values.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="glass-panel glass-panel-hover p-8 rounded-3xl border border-slate-800/90 relative overflow-hidden group flex flex-col justify-between"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:border-blue-500/50 transition-all">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Advent Quality Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ISO & Governance Banner */}
        <div id="compliance" className="glass-panel p-8 rounded-2xl border border-slate-800 bg-slate-900/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Full Quality Accreditation & Governance</h4>
              <p className="text-xs text-slate-300">ISO 9001 Quality Management • ASIAL Member • ANZ Security Licensing Accredited</p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-bold text-slate-300 uppercase">
              100% Compliant
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-blue-950 border border-blue-500/30 text-xs font-bold text-blue-400 uppercase">
              AUDITED 2026
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
