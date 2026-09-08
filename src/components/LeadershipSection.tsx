'use client';

import React from 'react';
import Image from 'next/image';
import { Users, Shield, Award, CheckCircle } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  const leadershipPoints = [
    {
      title: "Family-Owned Heritage",
      desc: "Founded in 1990 in Victoria, maintaining personal executive oversight across every client deployment."
    },
    {
      title: "Vetted & Licensed Officers",
      desc: "Rigorously background-checked, security licensed, and trained in first aid, customer service, and de-escalation."
    },
    {
      title: "National Operations Command",
      desc: "Centralized command structure ensuring rapid incident response and seamless escalation nationwide."
    }
  ];

  return (
    <section id="leadership" className="py-24 relative bg-slate-950">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>PEOPLE & CULTURE</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Driven by People, <br />
              <span className="text-gradient-blue">Defined by Professionalism</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed mb-8">
              At Advent Security, technology is only half the equation. Our true strength lies in the dedicated men and women who represent the Advent name on front lines, corporate lobbies, patrol vehicles, and monitoring desks every single day.
            </p>

            <div className="space-y-4 w-full mb-8">
              {leadershipPoints.map((point, idx) => (
                <div key={idx} className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold shrink-0 mt-0.5">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">{point.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-blue-600 flex items-center justify-center text-xs font-bold text-white">AS</div>
                <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-cyan-600 flex items-center justify-center text-xs font-bold text-white">VIC</div>
                <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-emerald-600 flex items-center justify-center text-xs font-bold text-white">NSW</div>
              </div>
              <div>
                <div className="text-xs font-bold text-white">36+ Years Collective Leadership</div>
                <div className="text-[11px] text-slate-400">Serving Melbourne, Sydney, Brisbane & ANZ</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Feature Box */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] sm:h-[500px] w-full rounded-3xl overflow-hidden glass-panel border border-slate-800 shadow-2xl p-2 group">
              <Image
                src="/images/security_guard.jpg"
                alt="Advent Security Leadership & Corporate Officer"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 glass-panel p-6 rounded-2xl border border-slate-700/80">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">AUSTRALIAN SECURITY LEADER</span>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">VERIFIED</span>
                </div>
                <h3 className="text-xl font-extrabold text-white mb-1">Corporate Concierge & Guarding</h3>
                <p className="text-xs text-slate-300">Representing world-class commercial real estate and retail brands across Australia with distinction.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
