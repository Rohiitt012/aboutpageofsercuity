'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Truck, Building2, HeartPulse, Landmark, Award, ShieldCheck, ChevronRight, Newspaper, Tv, Radio } from 'lucide-react';

interface MediaTrustSectorsProps {
  onOpenQuoteModal?: () => void;
}

export const MediaTrustSectors: React.FC<MediaTrustSectorsProps> = ({ onOpenQuoteModal }) => {
  const [activeSector, setActiveSector] = useState(0);

  const sectors = [
    {
      id: "logistics",
      name: "LOGISTICS",
      subtitle: "Supply Chain & Distribution Security",
      icon: Truck,
      color: "from-amber-500 to-yellow-600",
      accentBg: "bg-amber-500/10 border-amber-500/30 text-amber-400",
      badgeColor: "bg-amber-500 text-slate-950",
      description: "Comprehensive security coverage for warehousing hubs, freight forwarders, transport depots, and high-value cargo transit.",
      highlights: [
        "24/7 Gatehouse Access & Yard Control",
        "Thermal Perimeter CCTV Intrusion Detection",
        "High-Value Freight Escorts & GPS Tracking",
        "Tamper-Proof Seal Audits & Driver Verification"
      ]
    },
    {
      id: "corporate",
      name: "CORPORATE",
      subtitle: "Enterprise HQ & High-Rise Facilities",
      icon: Building2,
      color: "from-blue-500 to-indigo-600",
      accentBg: "bg-blue-500/10 border-blue-500/30 text-blue-400",
      badgeColor: "bg-blue-500 text-white",
      description: "First-class corporate concierge, visitor management, executive protection, and high-rise building security operations.",
      highlights: [
        "Premium Front-of-House Concierge Officers",
        "Speed Turnstile & Biometric Keycard Access",
        "After-Hours Security Patrols & Lockups",
        "VIP Executive Escort & Boardroom Defense"
      ]
    },
    {
      id: "health",
      name: "HEALTH",
      subtitle: "Hospitals & Medical Infrastructure",
      icon: HeartPulse,
      color: "from-emerald-500 to-teal-600",
      accentBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
      badgeColor: "bg-emerald-500 text-slate-950",
      description: "Specialised healthcare security personnel trained in de-escalation, emergency department triage protection, and pharmacy asset control.",
      highlights: [
        "Patient-Centric De-escalation & Code Black Response",
        "Restricted Medicine Pharmacy Access Locks",
        "Emergency Department Guarding 24/7",
        "Staff Escorts & Maternity Ward Safeguards"
      ]
    },
    {
      id: "government",
      name: "GOVERNMENT",
      subtitle: "Public Sector & Critical Infrastructure",
      icon: Landmark,
      color: "from-purple-500 to-violet-600",
      accentBg: "bg-purple-500/10 border-purple-500/30 text-purple-400",
      badgeColor: "bg-purple-500 text-white",
      description: "Vetted security personnel and Grade-A electronic defense for municipal council facilities, public venues, and government assets.",
      highlights: [
        "Vetted & Cleared Guarding Personnel",
        "Public Council Meeting & Event Security",
        "ISO 9001 Audited Quality Governance",
        "Rapid Dispatch & Mobile Alarm Patrol Response"
      ]
    }
  ];

  const mediaOutlets = [
    {
      name: "7 NEWS",
      image: "/images/seven_news.png",
      tag: "NATIONAL BROADCAST",
      detail: "Featured for Security Excellence & Incident Response Leadership"
    },
    {
      name: "MACQUARIE MEDIA LIMITED",
      image: "/images/macquarie_media.png",
      tag: "NATIONAL PRESS",
      detail: "Recognised across Australian Corporate Security Insights"
    },
    {
      name: "2GB 873 AM",
      image: "/images/2gb_news.png",
      tag: "TALK RADIO LEADERS",
      detail: "Broadcasted Commentary on Retail Loss Prevention & Public Safety"
    },
    {
      name: "HERALD SUN",
      image: "/images/herald_sun.png",
      tag: "VICTORIAN PRESS",
      detail: "Profiled Heritage as Australia's Premier Family-Owned Security Firm"
    }
  ];

  return (
    <section className="py-24 relative bg-slate-950/80 border-t border-slate-800 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Australian-Owned Seal & Heritage Banner */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-amber-500/30 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950 mb-20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/15 transition-all pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            
            {/* Seal Graphic */}
            <div className="flex items-center gap-6 shrink-0">
              <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 p-1 shadow-2xl shadow-amber-500/30 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-slate-950 border-2 border-amber-400/50 flex flex-col items-center justify-center text-center p-2">
                  <Award className="w-8 h-8 text-amber-400 mb-0.5" />
                  <span className="text-[9px] font-black tracking-widest text-amber-300 uppercase">AUSTRALIAN</span>
                  <span className="text-[9px] font-black tracking-widest text-amber-400 uppercase">OWNED</span>
                  <span className="text-[8px] font-mono text-slate-400">#01964</span>
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>100% AUSTRALIAN FAMILY HERITAGE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Australian Owned & NZ Certified
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                  Official License Accreditation #01964. Operating continuously across Australia and New Zealand for over 36 years with uncompromised integrity.
                </p>
              </div>
            </div>

            {/* Badges / CTA */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <div className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                <div className="text-xs font-bold text-slate-400 uppercase">Established</div>
                <div className="text-lg font-black text-amber-400">1990</div>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                <div className="text-xs font-bold text-slate-400 uppercase">Ownership</div>
                <div className="text-lg font-black text-white">100% Family</div>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                <div className="text-xs font-bold text-slate-400 uppercase">Coverage</div>
                <div className="text-lg font-black text-emerald-400">AUS & NZ</div>
              </div>
            </div>

          </div>
        </div>

        {/* Key Areas of Expertise Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>SECTOR MASTERY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Our Key Areas of <span className="text-gradient-amber">Expertise</span>
          </h2>
          <p className="text-slate-400 text-base">
            Tailored physical security, electronic intelligence, and risk consulting crafted for demanding enterprise environments across Australia.
          </p>
        </div>

        {/* 4 Golden Sector Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {sectors.map((sector, idx) => {
            const IconComponent = sector.icon;
            const isActive = activeSector === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveSector(idx)}
                className={`group flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? 'glass-panel border-amber-500 bg-slate-900 shadow-xl shadow-amber-500/20 scale-[1.03]'
                    : 'bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900/90'
                }`}
              >
                {/* Circular Gold Icon matching original site aesthetics */}
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                  isActive 
                    ? 'bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-950 shadow-amber-500/40 ring-4 ring-amber-400/20' 
                    : 'bg-amber-500/20 border border-amber-500/40 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950'
                }`}>
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h3 className={`text-base sm:text-lg font-black tracking-wider uppercase ${
                  isActive ? 'text-amber-400' : 'text-white group-hover:text-amber-400'
                }`}>
                  {sector.name}
                </h3>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-1 font-medium">
                  {sector.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Sector Showcase Card */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 relative overflow-hidden mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${sectors[activeSector].accentBg}`}>
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>SECTOR SPECIALISATION</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">
                {sectors[activeSector].name} SECURITY SOLUTIONS
              </h3>
              <p className="text-sm font-semibold text-amber-400 uppercase tracking-wide mb-4">
                {sectors[activeSector].subtitle}
              </p>

              <p className="text-slate-300 text-base leading-relaxed mb-6">
                {sectors[activeSector].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
                {sectors[activeSector].highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 glass-panel px-4 py-3 rounded-xl border border-slate-800 text-slate-200 text-xs sm:text-sm font-medium">
                    <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {onOpenQuoteModal && (
                <button
                  onClick={onOpenQuoteModal}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all flex items-center gap-2"
                >
                  <span>Request {sectors[activeSector].name} Consultation</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="lg:col-span-4 glass-panel p-6 rounded-2xl border border-amber-500/30 bg-amber-950/20 text-center flex flex-col items-center justify-center min-h-[260px]">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-3">
                {React.createElement(sectors[activeSector].icon, { className: "w-8 h-8" })}
              </div>
              <h4 className="text-lg font-bold text-white mb-1">Guaranteed Compliance</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Strict adherence to national security regulations, site-specific SOPs, and 24/7 command escalation.
              </p>
              <span className="text-[10px] font-extrabold text-amber-400 bg-amber-950/80 border border-amber-500/40 px-3 py-1 rounded-full uppercase">
                ISO 9001 ACCREDITED
              </span>
            </div>

          </div>
        </div>

        {/* Media Coverage "AS SEEN ON" Banner matching original site screenshot */}
        <div className="pt-12 border-t border-slate-800/80">
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl text-center">
            
            <h4 className="text-sm font-extrabold uppercase tracking-[0.25em] text-slate-900 mb-8">
              AS SEEN ON
            </h4>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 items-center justify-items-center">
              {mediaOutlets.map((media, idx) => (
                <div 
                  key={idx}
                  className="relative h-16 sm:h-20 w-full max-w-[200px] flex items-center justify-center p-2 group transition-transform duration-300 hover:scale-110"
                >
                  <Image
                    src={media.image}
                    alt={`${media.name} Logo`}
                    fill
                    sizes="(max-width: 768px) 100vw, 200px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
