'use client';

import React from 'react';
import { BookOpen, LineChart, BookMarked, HelpCircle, ArrowRight } from 'lucide-react';

interface WhatsIncludedSectionProps {
  onSelectTab: (tab: string) => void;
}

export const WhatsIncludedSection: React.FC<WhatsIncludedSectionProps> = ({ onSelectTab }) => {
  const items = [
    {
      id: 'materi-1',
      title: 'Panduan Terstruktur',
      category: '2 Modul Lengkap',
      desc: 'Materi langkah demi langkah dari nol tanpa asumsi pengetahuan awal. Bahasa sehari-hari yang mudah dipahami orang awam.',
      icon: BookOpen,
      action: 'Buka Modul 1',
    },
    {
      id: 'materi-2',
      title: 'Visual Grafik Tren',
      category: 'Ilustratif & Edukatif',
      desc: 'Contoh grafik visual teranotasi jelas dengan pembeda tren naik (Uptrend), tren turun (Downtrend), dan mendatar (Sideways).',
      icon: LineChart,
      action: 'Buka Modul 2',
    },
    {
      id: 'glosarium',
      title: 'Glosarium',
      category: '28 Istilah Praktis',
      desc: 'Penjelasan istilah teknis pasar modal langsung di tempat dengan analogi kehidupan sehari-hari dan fitur pencarian cepat.',
      icon: BookMarked,
      action: 'Buka Glosarium',
    },
    {
      id: 'latihan',
      title: 'Evaluasi & Simulasi',
      category: 'Latihan Mandiri',
      desc: 'Kuis pemeriksaan pemahaman dan 5 skenario grafik interaktif untuk menguji kemampuan membaca arah pasar tanpa risiko.',
      icon: HelpCircle,
      action: 'Mulai Latihan',
    },
  ];

  return (
    <section className="relative py-16 md:py-24 border-t border-white/5 bg-[#0c0f14]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section title styled like — WHAT'S INCLUDED — in reference image */}
        <div className="flex items-center justify-center gap-4 text-center">
          <div className="h-[1px] flex-1 max-w-[120px] sm:max-w-[200px] bg-gradient-to-r from-transparent to-white/20" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider uppercase text-white/90">
            FASILITAS PEMBELAJARAN
          </h2>
          <div className="h-[1px] flex-1 max-w-[120px] sm:max-w-[200px] bg-gradient-to-l from-transparent to-white/20" />
        </div>

        <p className="mt-4 text-center text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
          Semua materi diakses secara gratis dan terbuka untuk umum demi mendukung peningkatan literasi keuangan masyarakat Indonesia.
        </p>

        {/* 4 Cards Grid matching reference image layout */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-white/[0.05] hover:shadow-2xl"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="mt-4 inline-block text-xs font-mono uppercase tracking-wider text-amber-400/80">
                    {item.category}
                  </span>

                  <h3 className="mt-1 text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <button
                    onClick={() => onSelectTab(item.id)}
                    className="flex items-center gap-1.5 text-sm font-semibold text-slate-300 group-hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <span>{item.action}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
