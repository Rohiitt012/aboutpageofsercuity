'use client';

import React, { useState } from 'react';
import { Shield, Eye, Lock, Radio, FileText, UserCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CapabilityMatrixProps {
  onOpenQuoteModal: () => void;
}

export const CapabilityMatrix: React.FC<CapabilityMatrixProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState(0);

  const capabilities = [
    {
      id: "guarding",
      title: "Security Guards & Patrols",
      icon: Shield,
      tag: "HUMAN INTELLIGENCE",
      subtitle: "Uniformed & Corporate Officers",
      description: "Trained, licensed, and highly professional security personnel providing visible deterrence, access verification, mobile patrols, and rapid emergency response.",
      features: [
        "24/7 Static Guarding & Mobile Patrol Fleet",
        "Retail Loss Prevention & Asset Safeguarding",
        "Crowd Control & Public Sector Security",
        "Crisis Management & De-escalation Expertise"
      ]
    },
    {
      id: "concierge",
      title: "Corporate Concierge",
      icon: UserCheck,
      tag: "FRONT OF HOUSE",
      subtitle: "First Impressions & Reception Security",
      description: "Seamlessly combining warm hospitality with uncompromising front-of-house security for corporate headquarters, high-rise office towers, and luxury residential complexes.",
      features: [
        "Visitor Verification & Badge Issuance",
        "VIP Executive Handling & Escalation",
        "Mailroom & Contractor Screening",
        "Emergency Evacuation Coordination"
      ]
    },
    {
      id: "cctv",
      title: "CCTV & Video Analytics",
      icon: Eye,
      tag: "ELECTRONIC SURVEILLANCE",
      subtitle: "Smart Optical Intelligence",
      description: "High-definition camera infrastructure backed by AI video analytics for automated perimeter intrusion detection, license plate recognition, and thermal monitoring.",
      features: [
        "4K HD & Thermal Camera Networks",
        "AI Perimeter Intrusion & Analytics",
        "License Plate Recognition (ANPR)",
        "Remote Cloud Storage & Forensic Export"
      ]
    },
    {
      id: "access",
      title: "Access Control & Biometrics",
      icon: Lock,
      tag: "PERIMETER DEFENSE",
      subtitle: "Identity & Entry Management",
      description: "State-of-the-art access control turnstiles, biometric door readers, smartphone keyless access, and centralized privilege management.",
      features: [
        "Biometric Facial & Fingerprint Scanners",
        "Smart Card & Mobile Keyless Entry",
        "Speed Gates & Turnstile Systems",
        "Multi-site Centralized Permissions"
      ]
    },
    {
      id: "monitoring",
      title: "24/7 Central Alarm Station",
      icon: Radio,
      tag: "COMMAND CENTER",
      subtitle: "Vigilant Round-the-Clock Monitoring",
      description: "A Grade-A Central Monitoring Station operating 24 hours a day, 365 days a year to dispatch mobile patrols and emergency services in seconds.",
      features: [
        "Instant Alarm & Video Verification",
        "Duress & Lone-Worker Protection",
        "Mobile Patrol Dispatch Grid",
        "Direct Police & First Responder Escalation"
      ]
    },
    {
      id: "consulting",
      title: "Security Risk Advisory",
      icon: FileText,
      tag: "STRATEGIC AUDIT",
      subtitle: "Governance & Risk Mitigation",
      description: "In-depth physical security audits, compliance evaluations, threat vulnerability assessments, and strategic risk advisory for enterprise executives.",
      features: [
        "Physical Security Risk Assessments",
        "AS/NZS & ISO 9001 Compliance Audits",
        "Emergency Management Planning",
        "Executive & High-Net-Worth Protection"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-slate-950">
      
      {/* Background Accent Lines */}
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>FULL SPECTRUM CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Integrated Guarding & <br />
            <span className="text-gradient-blue">Electronic Defense Architecture</span>
          </h2>
          <p className="text-slate-400 text-base">
            From humble beginnings in traditional guarding to Australia's premier provider of electronic security and strategic risk management.
          </p>
        </div>

        {/* Capability Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {capabilities.map((item, idx) => {
            const IconComp = item.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-start gap-4 p-5 rounded-2xl text-left transition-all duration-300 ${
                  isActive
                    ? 'glass-panel border-blue-500 bg-blue-950/40 shadow-xl shadow-blue-600/20 scale-[1.02]'
                    : 'bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 opacity-70 hover:opacity-100'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40' : 'bg-slate-800 text-slate-400'
                }`}>
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 block mb-1">
                    {item.tag}
                  </span>
                  <h3 className={`text-base font-bold ${isActive ? 'text-white' : 'text-slate-200'}`}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Capability Deep-Dive Card */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
                {capabilities[activeTab].tag}
              </div>
              
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">
                {capabilities[activeTab].title}
              </h3>
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-6">
                {capabilities[activeTab].subtitle}
              </p>
              
              <p className="text-slate-300 text-base leading-relaxed mb-8">
                {capabilities[activeTab].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
                {capabilities[activeTab].features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 glass-panel px-4 py-3 rounded-xl border border-slate-800 text-slate-200 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2"
              >
                <span>Request {capabilities[activeTab].title} Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Graphic Box */}
            <div className="lg:col-span-4 glass-panel p-8 rounded-2xl border border-slate-700/80 bg-slate-900/90 text-center flex flex-col items-center justify-center min-h-[280px]">
              <div className="w-20 h-20 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-4 animate-pulse-slow">
                {React.createElement(capabilities[activeTab].icon, { className: "w-10 h-10" })}
              </div>
              <h4 className="text-lg font-bold text-white mb-1">Grade-A Certified</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Tested against rigorous Australian regulatory standards & ISO quality frameworks.
              </p>
              <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full uppercase">
                OPERATIONAL 24/7
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
