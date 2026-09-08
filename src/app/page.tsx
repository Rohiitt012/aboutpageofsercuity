'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { KeyStats } from '@/components/KeyStats';
import { StoryDeepDive } from '@/components/StoryDeepDive';
import { TimelineSection } from '@/components/TimelineSection';
import { CapabilityMatrix } from '@/components/CapabilityMatrix';
import { PillarsSection } from '@/components/PillarsSection';
import { LeadershipSection } from '@/components/LeadershipSection';
import { QuoteModal } from '@/components/QuoteModal';
import { Footer } from '@/components/Footer';

import { HeroBanner } from '@/components/HeroBanner';
import { MediaTrustSectors } from '@/components/MediaTrustSectors';
import { TestimonialsSection } from '@/components/TestimonialsSection';

export default function AboutPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Fixed Navbar Header */}
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      {/* Skyscraper Hero Banner Overlay matching original site aesthetics */}
      <HeroBanner onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      {/* Deep-Dive Interactive Hero Details */}
      <Hero onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      {/* Key Stats Benchmarks Ticker */}
      <KeyStats />

      {/* Australian Owned Seal, Key Areas of Expertise (Logistics, Corporate, Health, Government) & As Seen On Media */}
      <MediaTrustSectors onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      {/* Client Testimonials Carousel (Geoff Harwood Australian Achiever Quote) */}
      <TestimonialsSection />

      {/* Chapter Narrative (Our Story, Humble Beginnings, Growing Capability) */}
      <StoryDeepDive />

      {/* Interactive 36+ Years Evolution Timeline */}
      <TimelineSection />

      {/* Capability Grid & Electronic Defense Architecture */}
      <CapabilityMatrix onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      {/* Ethos, Governance & Pillars */}
      <PillarsSection />

      {/* Leadership & Operational Culture */}
      <LeadershipSection />

      {/* Footer */}
      <Footer />

      {/* Interactive Security Proposal / Audit Request Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </main>
  );
}
