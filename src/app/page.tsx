'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroBanner } from '@/components/HeroBanner';
import { StoryDeepDive } from '@/components/StoryDeepDive';
import { QuoteModal } from '@/components/QuoteModal';
import { Footer } from '@/components/Footer';

export default function AboutPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      {/* Sticky Navbar Header */}
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      {/* Skyscraper Hero Banner Overlay matching original site aesthetics (Advent Security > Our Story) */}
      <HeroBanner onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      {/* Main Our Story Deep-Dive Narrative (Chapters 1-5 from User Images) */}
      <StoryDeepDive onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      {/* Comprehensive Industry Footer matching Image 4 */}
      <Footer />

      {/* Interactive Security Proposal / Audit Request Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </main>
  );
}
