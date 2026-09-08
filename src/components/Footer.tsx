'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Calendar, MapPin, ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-slate-300 border-t border-amber-500/30 relative pt-16 pb-8 overflow-hidden">
      
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Footer Row: Logo & Social Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-12 border-b border-slate-800 gap-6">
          
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-52">
              <Image
                src="/images/logo.webp"
                alt="Advent Security Excellence In Security Logo"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/50 transition-all"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </a>
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/50 transition-all"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg>
            </a>
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/50 transition-all"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
              title="Back to top"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* 6 Column Navigation Grid matching exact columns in Image 4 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-12 border-b border-slate-800 text-xs">
          
          {/* Column 1: THE ADVENT GROUP */}
          <div>
            <h4 className="text-xs font-black text-amber-400 uppercase tracking-widest mb-4">THE ADVENT GROUP</h4>
            <ul className="space-y-2.5 text-slate-300">
              <li><Link href="#our-story" className="hover:text-amber-400 transition-colors">About Advent</Link></li>
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">Our Businesses</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">Our Partners</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">Careers</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">Leadership Team</span></li>
            </ul>
          </div>

          {/* Column 2: SECURITY SERVICES */}
          <div>
            <h4 className="text-xs font-black text-amber-400 uppercase tracking-widest mb-4">SECURITY SERVICES</h4>
            <ul className="space-y-2.5 text-slate-300">
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">Security Guard</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">Corporate Concierge</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">Electronic Security</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">Security Consulting</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">Alarm Monitoring</span></li>
            </ul>
          </div>

          {/* Column 3: ELECTRONIC SECURITY */}
          <div>
            <h4 className="text-xs font-black text-amber-400 uppercase tracking-widest mb-4">ELECTRONIC SECURITY</h4>
            <ul className="space-y-2.5 text-slate-300">
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">CCTV Systems</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">Access Control</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">Alarm Systems</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">Intercom Systems</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">Cloud Monitoring</span></li>
            </ul>
          </div>

          {/* Column 4: INDUSTRIES */}
          <div>
            <h4 className="text-xs font-black text-amber-400 uppercase tracking-widest mb-4">INDUSTRIES</h4>
            <ul className="space-y-2.5 text-slate-300">
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">Commercial</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">Government</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">Healthcare</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">Retail</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">Aviation</span></li>
            </ul>
          </div>

          {/* Column 5: RESOURCES */}
          <div>
            <h4 className="text-xs font-black text-amber-400 uppercase tracking-widest mb-4">RESOURCES</h4>
            <ul className="space-y-2.5 text-slate-300">
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">News & Insights</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">Case Studies</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">Brochures</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">Downloads</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">FAQs</span></li>
            </ul>
          </div>

          {/* Column 6: QUICK CONTACT */}
          <div>
            <h4 className="text-xs font-black text-amber-400 uppercase tracking-widest mb-4">QUICK CONTACT</h4>
            <div className="space-y-3 text-slate-300">
              <span className="block hover:text-amber-400 cursor-pointer transition-colors">Our Locations</span>
              <a href="tel:1800464166" className="flex items-center gap-2 text-white hover:text-amber-400 font-extrabold transition-colors">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>1800 464 166</span>
              </a>
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                <span>24/7 365 Days</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright matching Image 4 */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-slate-400 gap-4">
          <p>© 2026 Advent Security. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <span className="hover:text-slate-200 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-slate-700">|</span>
            <span className="hover:text-slate-200 cursor-pointer transition-colors">Terms & Conditions</span>
            <span className="text-slate-700">|</span>
            <span className="hover:text-slate-200 cursor-pointer transition-colors">Website Policy</span>
            <span className="text-slate-700">|</span>
            <span className="hover:text-slate-200 cursor-pointer transition-colors">Sitemap</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
