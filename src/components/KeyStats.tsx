'use client';

import React from 'react';
import { Calendar, Shield, Building, Clock, Award, Users } from 'lucide-react';

export const KeyStats: React.FC = () => {
  const stats = [
    {
      icon: Calendar,
      value: "1990",
      label: "Foundation Year",
      subtext: "Started in Bourke Street, Melbourne",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Clock,
      value: "36+ Yrs",
      label: "Proven Heritage",
      subtext: "Evolving alongside security risks & tech",
      color: "from-cyan-400 to-blue-600"
    },
    {
      icon: Building,
      value: "1,200+",
      label: "Protected Facilities",
      subtext: "Retail, Healthcare, Aviation & Gov",
      color: "from-emerald-400 to-teal-600"
    },
    {
      icon: Shield,
      value: "24/7/365",
      label: "Central Command",
      subtext: "Instant emergency dispatch & monitoring",
      color: "from-amber-400 to-orange-600"
    }
  ];

  return (
    <section className="py-16 relative bg-slate-950/60 border-y border-slate-800/80">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800/90 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Background Accent Gradient */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity`}></div>

                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:border-blue-500/50 transition-all`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-2 py-1 rounded bg-slate-900 border border-slate-800">
                    BENCHMARK
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1 group-hover:text-blue-400 transition-colors">
                    {item.value}
                  </h3>
                  <div className="text-sm font-bold text-slate-200 uppercase tracking-wide mb-1">
                    {item.label}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
