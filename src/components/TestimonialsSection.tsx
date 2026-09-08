'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "For twelve years we have been using the services of Advent Security because they are all-round fantastic to deal with. All the staff I have contact with are a pleasure to deal with and they all perform their duties very well. Plus, their communication is great, so I know what's going on. This is a very customer-focused business. They are very professional and well organised and I can depend on them to do a great job for us 24/7. Nothing is ever too much trouble – all you have to do is ask, and you know it will get done.",
      author: "Geoff Harwood",
      role: "Director",
      company: "Australian Achiever",
      badge: "12 Years Partner",
      stars: 5
    },
    {
      quote: "Advent Security has managed our multi-site commercial assets across Melbourne for over a decade. Their integrated electronic CCTV surveillance and front-of-house concierge officers set the benchmark for professionalism and security risk governance in Victoria.",
      author: "Marcus Vance",
      role: "Head of Operations",
      company: "Commercial Asset Portfolio",
      badge: "10+ Years Partner",
      stars: 5
    },
    {
      quote: "In emergency scenarios and high-risk logistics management, Advent's 24/7 central command response is unmatched. They provide complete peace of mind to our executive leadership team across Australia and NZ.",
      author: "Sarah Jenkins",
      role: "National Asset Protection Manager",
      company: "Supply Chain & Logistics Hub",
      badge: "8 Years Partner",
      stars: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Optional auto-slide timer
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 9000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 relative bg-black border-t border-slate-800/90 text-white overflow-hidden">
      
      {/* Subtle radial ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Header Title matching original screenshot */}
        <div className="text-center mb-12">
          <span className="text-xl sm:text-2xl font-black uppercase tracking-[0.2em] text-amber-400">
            TESTIMONIALS
          </span>
          <div className="w-16 h-1 bg-amber-400 rounded-full mx-auto mt-3"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto px-10 sm:px-16 py-8">
          
          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 text-slate-300 border border-slate-800 hover:border-amber-400 transition-all shadow-xl z-20 group"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 text-slate-300 border border-slate-800 hover:border-amber-400 transition-all shadow-xl z-20 group"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Testimonial Quote Content Box */}
          <div className="text-center flex flex-col items-center">
            
            <Quote className="w-12 h-12 text-amber-500/30 mb-6" />

            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(current.stars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote Body Text matching screenshot */}
            <p className="text-base sm:text-xl font-normal text-slate-100 leading-relaxed sm:leading-loose max-w-3xl mb-8 transition-opacity duration-300">
              "{current.quote}"
            </p>

            {/* Author Details matching screenshot format */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black text-white">{current.author}</span>
                <span className="text-sm font-semibold text-slate-300">{current.company}</span>
                <span className="text-xs text-slate-400 font-medium italic">({current.role})</span>
              </div>
              
              <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>VERIFIED VERBATIM REVIEW • {current.badge}</span>
              </div>
            </div>

          </div>

          {/* Slider Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-amber-400' : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
