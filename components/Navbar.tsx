'use client';

import React, { useState } from 'react';
import { TrendingUp, BookOpen, BarChart3, HelpCircle, FileText, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'materi-1', label: 'Mengenal Pasar Modal' },
    { id: 'materi-2', label: 'Membaca Tren Saham' },
    { id: 'latihan', label: 'Latihan Tren' },
    { id: 'glosarium', label: 'Glosarium' },
    { id: 'tentang', label: 'Tentang' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    // Smooth scroll to top of content
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0c0f14]/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand wordmark */}
        <button
          onClick={() => handleNavClick('beranda')}
          className="group flex items-center gap-2.5 text-left transition-opacity hover:opacity-90 shrink-0 cursor-pointer"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 group-hover:bg-amber-500/20 transition-colors">
            <TrendingUp className="h-5 w-5" />
          </div>
          <span className="font-semibold text-base sm:text-lg tracking-tight text-white whitespace-nowrap">
            JEJAK PASAR MODAL
          </span>
        </button>

        {/* Zone 2: Navigation Links (single line, unboxed, subtle hover) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer relative py-1 ${
                  isActive
                    ? 'text-amber-400 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-amber-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('materi-1')}
            className="flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-300 transition-all hover:bg-amber-400 hover:text-slate-950 hover:shadow-lg hover:shadow-amber-500/20 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Mulai Belajar</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="lg:hidden border-b border-white/10 bg-[#0c0f14] px-4 pt-3 pb-6 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-left ${
                    isActive
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />}
                </button>
              );
            })}
            <div className="pt-2">
              <button
                onClick={() => handleNavClick('materi-1')}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-opacity hover:opacity-95"
              >
                <span>Mulai Belajar</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
