'use client';

import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, ArrowRight, Building, Lock, Radio, Phone, Mail, User, Send } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [sector, setSector] = useState('Commercial');
  const [selectedServices, setSelectedServices] = useState<string[]>(['Physical Guarding', 'CCTV & Analytics']);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const sectors = ['Commercial Real Estate', 'Retail & Shopping Centers', 'Healthcare & Hospitals', 'Government & Defense', 'Aviation & Logistics', 'Industrial & Warehousing'];

  const servicesList = [
    'Physical Guarding & Mobile Patrols',
    'Corporate Concierge & Reception',
    'CCTV & Video Analytics',
    'Access Control & Biometrics',
    '24/7 Alarm & Video Monitoring',
    'Strategic Security Audit & Advisory'
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter(s => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-2xl glass-panel rounded-3xl border border-slate-700/80 shadow-2xl p-6 sm:p-8 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">Request Security Consultation</h3>
                <p className="text-xs text-slate-400">Advent Security Australia • Est. 1990</p>
              </div>
            </div>

            {/* Stepper Progress Indicator */}
            <div className="flex items-center gap-2 mb-6">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 flex-1 rounded-full transition-all ${
                    step >= s ? 'bg-blue-500' : 'bg-slate-800'
                  }`}
                ></div>
              ))}
            </div>

            {/* Step 1: Industry Sector */}
            {step === 1 && (
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">
                  Step 1: Select Property / Facility Sector
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {sectors.map((sec, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSector(sec)}
                      className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${
                        sector === sec
                          ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span>{sec}</span>
                      {sector === sec && <CheckCircle2 className="w-4 h-4 text-blue-400" />}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
                >
                  <span>Continue to Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Step 2: Required Services */}
            {step === 2 && (
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">
                  Step 2: Select Security Requirements
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                  {servicesList.map((srv, idx) => {
                    const isSelected = selectedServices.includes(srv);
                    return (
                      <button
                        key={idx}
                        onClick={() => toggleService(srv)}
                        className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-blue-600/20 border-blue-500 text-white'
                            : 'bg-slate-900 border-slate-800 text-slate-400'
                        }`}
                      >
                        <span className="line-clamp-1">{srv}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="py-3 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider border border-slate-800"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Proceed to Contact Info</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Form */}
            {step === 3 && (
              <form onSubmit={handleSubmit}>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">
                  Step 3: Contact Details
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-400 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-400 block mb-1">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com.au"
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-400 block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0400 000 000"
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-400 block mb-1">Company / Organization</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Advent Enterprise"
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="text-[11px] font-semibold text-slate-400 block mb-1">Specific Security Notes</label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Briefly describe your site requirements..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500 resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="py-3 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider border border-slate-800"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Security Proposal Request</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Submission Success State */
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-2">Security Audit Request Received</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
              Thank you, <strong className="text-white">{formData.name || 'Valued Client'}</strong>. Our Advent Security advisory team will review your <span className="text-blue-400 font-semibold">{sector}</span> requirements and contact you within 24 business hours.
            </p>
            <div className="glass-panel p-4 rounded-xl border border-slate-800 text-xs text-slate-400 mb-6 w-full max-w-sm">
              <div>Reference Ticket: <strong className="text-blue-400">ADV-2026-{Math.floor(1000 + Math.random() * 9000)}</strong></div>
              <div>Direct Command Line: <strong className="text-white">1800 464 166</strong></div>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                onClose();
              }}
              className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
