'use client';

import React, { useState } from 'react';
import { GLOSSARY_ITEMS, GlossaryItem } from '@/lib/course-data';
import { Search, BookMarked, Sparkles, Tag, ChevronDown } from 'lucide-react';

export const GlossarySection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<'semua' | 'dasar' | 'pelaku' | 'tren'>('semua');
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  const filteredItems = GLOSSARY_ITEMS.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.shortDef.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.fullDef.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'semua' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'semua' as const, label: 'Semua Istilah', count: GLOSSARY_ITEMS.length },
    { id: 'dasar' as const, label: 'Dasar', count: GLOSSARY_ITEMS.filter(i => i.category === 'dasar').length },
    { id: 'pelaku' as const, label: 'Pelaku', count: GLOSSARY_ITEMS.filter(i => i.category === 'pelaku').length },
    { id: 'tren' as const, label: 'Tren', count: GLOSSARY_ITEMS.filter(i => i.category === 'tren').length },
  ];

  return (
    <div className="py-8 md:py-14">
      {/* Header Banner */}
      <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-transparent p-6 sm:p-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
              <BookMarked className="h-4 w-4" />
              <span>Kamus Edukasi Pasar Modal</span>
            </div>
            <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Glosarium Istilah Dasar
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Kamus istilah penting yang muncul dalam materi mengenal pasar modal dan membaca tren. Disajikan dengan definisi ringkas dan analogi kehidupan sehari-hari.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-right">
            <span className="text-sm text-slate-400 block">Total Istilah:</span>
            <span className="text-lg font-bold font-mono text-amber-400">
              {GLOSSARY_ITEMS.length}
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="rounded-2xl border border-white/10 bg-[#0a0d12] p-5 sm:p-6 mb-8 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Input */}
          <div className="md:col-span-5 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="search"
              aria-label="Cari istilah glosarium"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari istilah, misalnya 'Uptrend', 'Lot', 'OJK'..."
              className="w-full rounded-xl border border-white/10 bg-black/40 pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors"
            />
          </div>

          {/* Category Filter Tabs */}
          <div className="md:col-span-7 flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                      : 'border border-white/10 bg-white/[0.02] text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`ml-1.5 font-mono text-xs ${isActive ? 'text-slate-900' : 'text-slate-400'}`}>
                    ({cat.count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Glossary Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, idx) => {
            const isExpanded = expandedTerm === item.term;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-[#0a0d12] p-5 transition-all duration-200 hover:border-amber-400/30 hover:bg-white/[0.02]"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {item.term}
                  </h3>
                  <span className={`px-2 py-0.5 rounded text-xs font-mono uppercase tracking-wider shrink-0 ${
                    item.category === 'dasar' ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20' :
                    item.category === 'pelaku' ? 'bg-blue-500/10 text-blue-300 border border-blue-500/20' :
                    'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                  }`}>
                    {item.category}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  {item.shortDef}
                </p>

                {item.analogy && (
                  <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3 text-sm text-amber-300/90 leading-relaxed flex items-start gap-2">
                    <Sparkles className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
                    <div>
                      <strong className="text-amber-400">Analogi Praktis: </strong>
                      {item.analogy}
                    </div>
                  </div>
                )}

                {item.fullDef && (
                  <div className="mt-3 pt-3 border-t border-white/5 text-sm text-slate-400 leading-relaxed">
                    {item.fullDef}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="md:col-span-2 text-center py-12 rounded-xl border border-dashed border-white/10 p-8">
            <p className="text-sm text-slate-400">
              Tidak ada istilah yang cocok dengan kata kunci &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('semua');
              }}
              className="mt-3 text-sm text-amber-400 hover:text-white underline cursor-pointer"
            >
              Reset Pencarian
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
