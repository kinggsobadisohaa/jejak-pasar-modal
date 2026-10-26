'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { LearningPathSection } from '@/components/LearningPathSection';
import { WhatsIncludedSection } from '@/components/WhatsIncludedSection';
import { ModuleOneReader } from '@/components/ModuleOneReader';
import { ModuleTwoReader } from '@/components/ModuleTwoReader';
import { InteractiveTrendPractice } from '@/components/InteractiveTrendPractice';
import { GlossarySection } from '@/components/GlossarySection';
import { AboutSection } from '@/components/AboutSection';
import { InquiryFormSection } from '@/components/InquiryFormSection';
import { Footer } from '@/components/Footer';
import { ArrowLeft, BookOpen, TrendingUp, Sparkles, BookMarked, Info } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('beranda');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c0f14] text-[#e2e8f0]">
      {/* Top Navigation Bar */}
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'beranda' && (
          <div>
            {/* Hero Section matching the course image style */}
            <HeroSection onSelectTab={handleTabChange} />

            {/* Learning Path Section matching — ABOUT THE TOUR — vertical connected timeline */}
            <LearningPathSection onSelectTab={handleTabChange} />

            {/* What's Included Section matching — WHAT'S INCLUDED — 4 cards grid */}
            <WhatsIncludedSection onSelectTab={handleTabChange} />

            {/* Bottom Contact / Inquiry Form matching "Want to join us?" */}
            <InquiryFormSection />
          </div>
        )}

        {activeTab !== 'beranda' && (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            {/* Breadcrumb Back Button */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <button
                onClick={() => handleTabChange('beranda')}
                className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Kembali ke Beranda</span>
              </button>

              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
                <span>Jalur Belajar</span>
                <span>/</span>
                <span className="text-amber-400 font-medium capitalize">
                  {activeTab === 'materi-1' ? 'Mengenal Pasar Modal & Saham' :
                   activeTab === 'materi-2' ? 'Membaca Tren Harga Saham' :
                   activeTab === 'latihan' ? 'Latihan Interaktif' :
                   activeTab === 'glosarium' ? 'Glosarium' : 'Tentang'}
                </span>
              </div>
            </div>

            {/* Render selected view */}
            {activeTab === 'materi-1' && (
              <ModuleOneReader onGoToNextModule={() => handleTabChange('materi-2')} />
            )}

            {activeTab === 'materi-2' && (
              <ModuleTwoReader onGoToPractice={() => handleTabChange('latihan')} />
            )}

            {activeTab === 'latihan' && (
              <InteractiveTrendPractice />
            )}

            {activeTab === 'glosarium' && (
              <GlossarySection />
            )}

            {activeTab === 'tentang' && (
              <AboutSection />
            )}
          </div>
        )}
      </main>

      {/* Global Footer with Mandatory PRD Disclaimer */}
      <Footer onSelectTab={handleTabChange} />
    </div>
  );
}
