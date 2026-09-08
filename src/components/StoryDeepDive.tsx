'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Building2, 
  Layers, 
  Handshake, 
  Sparkles, 
  ArrowUpRight, 
  Lock, 
  Cpu, 
  CheckCircle,
  Clock,
  MapPin,
  TrendingUp,
  ChevronRight
} from 'lucide-react';

interface StoryDeepDiveProps {
  onOpenQuoteModal: () => void;
}

export const StoryDeepDive: React.FC<StoryDeepDiveProps> = ({ onOpenQuoteModal }) => {
  const [activeCapability, setActiveCapability] = useState(0);

  const capabilitiesList = [
    {
      title: "Traditional Guarding",
      desc: "Licensed security guards, corporate concierge, and physical asset protection personnel.",
      icon: ShieldCheck
    },
    {
      title: "Electronic Security",
      desc: "State-of-the-art electronic perimeter defense and integrated security hardware.",
      icon: Cpu
    },
    {
      title: "CCTV & Surveillance",
      desc: "High-definition video surveillance analytics and 24/7 video monitoring feeds.",
      icon: Layers
    },
    {
      title: "Access Control",
      desc: "Biometric and smart credential access control systems for high-security facilities.",
      icon: Lock
    },
    {
      title: "Alarm Monitoring",
      desc: "Round-the-clock grade A1 alarm monitoring and rapid incident dispatch.",
      icon: Clock
    },
    {
      title: "Security Consulting & Risk Management",
      desc: "Strategic risk assessments, regulatory compliance advisory, and vulnerability auditing.",
      icon: TrendingUp
    }
  ];

  return (
    <section id="our-story" className="py-20 relative overflow-hidden bg-slate-950 text-slate-100">
      
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none"></div>
      
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 space-y-24">
        
        {/* SECTION 1: OUR STORY (Matching Image 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Image with Callout Banner */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden glass-card border border-amber-500/30 shadow-2xl group">
              <div className="relative h-[340px] sm:h-[420px] w-full">
                <Image
                  src="/images/command_center.jpg"
                  alt="Advent Security EST 1990 Operations Command Center"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              </div>

              {/* Exact Callout Text Overlay matching Image 1: EST. 1990. ONE CLIENT. A FEW GUARDS. 36+ YEARS OF EVOLUTION. */}
              <div className="p-6 bg-slate-900/95 border-t border-amber-500/30">
                <h3 className="text-lg sm:text-xl font-black uppercase text-white tracking-wider leading-snug">
                  EST. 1990. ONE CLIENT. A FEW GUARDS.<br />
                  <span className="text-amber-400">36+ YEARS OF EVOLUTION.</span>
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Content from Image 1 */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CHAPTER 01 • ESTABLISHED 1990</span>
            </div>

            {/* Exact Header matching Image 1 */}
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-amber-400 uppercase leading-none">
              OUR STORY
            </h2>

            {/* Exact Body Paragraph matching Image 1 */}
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
              Advent Security&apos;s story began in 1990 with one client and a couple of casual security guards. Over 36+ years, the business has grown and evolved alongside changing client needs, security risks and technology.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-2xl border border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-amber-400">1990</div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">Founding Year</div>
              </div>
              <div className="glass-card p-4 rounded-2xl border border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-amber-400">36+ Years</div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">Continuous Evolution</div>
              </div>
            </div>
          </div>

        </div>

        {/* SECTION 2: FROM HUMBLE BEGINNINGS (Matching Image 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Exact Content from Image 2 */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5" />
              <span>CHAPTER 02 • MELBOURNE ORIGINS</span>
            </div>

            {/* Exact Header matching Image 2 */}
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-amber-400 uppercase leading-none">
              FROM HUMBLE BEGINNINGS
            </h2>

            {/* Exact Body Paragraph matching Image 2 */}
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
              Advent Security was founded in 1990. Its first client was Coles in Bourke Street, Melbourne. In the early years, the business was built around a simple focus: understand the client&apos;s needs, provide capable people and deliver security support clients could rely on.
            </p>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Landmark Enterprise Partner</h4>
                <p className="text-xs text-slate-300 mt-1">Coles, Bourke Street, Melbourne — setting the standard for dependable Australian security.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Image matching Image 2 */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden glass-card border border-amber-500/30 shadow-2xl group">
              <div className="relative h-[340px] sm:h-[420px] w-full">
                <Image
                  src="/images/humble_beginnings.jpg"
                  alt="Advent Security Founded in 1990 Coles Bourke Street Melbourne"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              </div>
              <div className="p-6 bg-slate-900/90 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400">MELBOURNE HERITAGE</span>
                  <span className="text-xs text-slate-400 font-medium">Est. Bourke Street, 1990</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* SECTION 3: GROWING OUR CAPABILITY (Matching Image 3) */}
        <div className="space-y-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-widest">
                <Layers className="w-3.5 h-3.5" />
                <span>CHAPTER 03 • INTEGRATED DEFENSE</span>
              </div>

              {/* Exact Header matching Image 3 */}
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-amber-400 uppercase leading-none">
                GROWING OUR CAPABILITY
              </h2>

              {/* Exact Body Paragraph matching Image 3 */}
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                As the business grew, so did the security requirements of its clients. Advent&apos;s journey expanded from traditional guarding into electronic security, CCTV and surveillance, access control, alarm monitoring, security consulting and risk management. This evolution reflected broader changes in how organisations manage security.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden glass-card border border-amber-500/30 shadow-2xl group">
                <div className="relative h-[300px] sm:h-[360px] w-full">
                  <Image
                    src="/images/cctv_tech.jpg"
                    alt="Growing Security Capability CCTV Surveillance Electronic Security"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Capabilities Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {capabilitiesList.map((item, idx) => {
              const IconComp = item.icon;
              const isSelected = activeCapability === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => setActiveCapability(idx)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected 
                      ? 'bg-amber-500/10 border-amber-500 shadow-xl shadow-amber-500/10 scale-[1.02]' 
                      : 'bg-slate-900/60 border-slate-800 hover:border-amber-500/40 hover:bg-slate-900/90'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-amber-400'
                    }`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">0{idx + 1}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>

        {/* SECTION 4: BUILT BY PEOPLE AND PARTNERSHIPS (Matching Image 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden glass-card border border-amber-500/30 shadow-2xl group">
              <div className="relative h-[340px] sm:h-[420px] w-full">
                <Image
                  src="/images/corporate_handshake.jpg"
                  alt="Built By People And Partnerships Long Term Client Trust"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              </div>
              <div className="p-6 bg-slate-900/90 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400">FAMILY-OWNED AUSTRALIAN BUSINESS</span>
                  <span className="text-xs text-slate-400 font-medium">Trust & Integrity</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Content from Image 3 */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-widest">
              <Handshake className="w-3.5 h-3.5" />
              <span>CHAPTER 04 • TRUST & INTEGRITY</span>
            </div>

            {/* Exact Header matching Image 3 */}
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-amber-400 uppercase leading-none">
              BUILT BY PEOPLE AND PARTNERSHIPS
            </h2>

            {/* Exact Body Paragraph matching Image 3 */}
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
              Advent&apos;s growth has been shaped by the clients who placed their trust in the business and the people who represented the Advent name. Long-term relationships, professionalism, communication and dependable service have remained important throughout the company&apos;s development as a family-owned Australian business.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Family-owned Australian business heritage",
                "Built on long-term client trust & dependable service",
                "Professionalism & transparent communication across all operational levels"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-200">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* SECTION 5: LOOKING AHEAD (Matching Image 4) */}
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-amber-500/40 text-center max-w-4xl mx-auto shadow-2xl overflow-hidden group">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-amber-500/15 rounded-full blur-3xl group-hover:bg-amber-500/25 transition-all"></div>

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-400 text-xs font-black uppercase tracking-widest">
              <TrendingUp className="w-4 h-4" />
              <span>CHAPTER 05 • THE FUTURE OF SECURITY</span>
            </div>

            {/* Exact Header matching Image 4 */}
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-amber-400 uppercase leading-none">
              LOOKING AHEAD
            </h2>

            {/* Exact Body Paragraph matching Image 4 */}
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal max-w-3xl mx-auto">
              The Advent story continues to evolve. As security risks, technology and operating environments change, the company continues to build on more than 36 years of experience by combining experienced people, integrated technology and practical advice to help clients meet new challenges.
            </p>

            <div className="pt-6">
              <button
                onClick={onOpenQuoteModal}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 text-xs font-black uppercase tracking-widest shadow-xl shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-3"
              >
                <span>Schedule a Strategic Risk Advisory Session</span>
                <ChevronRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
