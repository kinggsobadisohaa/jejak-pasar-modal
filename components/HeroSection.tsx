'use client';

import React from 'react';
import { ArrowRight, Compass, TrendingUp, Layers, Award, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onSelectTab: (tab: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectTab }) => {
  const highlights = [
    {
      id: 'materi-1',
      tag: 'Modul 1',
      title: 'Dasar Pasar Modal',
      subtitle: 'Pengertian, BEI, & Saham',
      color: 'from-amber-500/20 to-orange-500/5',
      borderColor: 'group-hover:border-amber-400/50',
      icon: Compass,
    },
    {
      id: 'materi-1',
      tag: 'Struktur',
      title: 'Mekanisme & Pelaku',
      subtitle: 'OJK, Sekuritas, & Order Book',
      color: 'from-orange-500/20 to-amber-500/5',
      borderColor: 'group-hover:border-orange-400/50',
      icon: Layers,
    },
    {
      id: 'materi-2',
      tag: 'Modul 2',
      title: 'Membaca 3 Tren',
      subtitle: 'Uptrend, Downtrend, Sideways',
      color: 'from-emerald-500/20 to-teal-500/5',
      borderColor: 'group-hover:border-emerald-400/50',
      icon: TrendingUp,
    },
    {
      id: 'materi-2',
      tag: 'Metode',
      title: 'Puncak & Lembah',
      subtitle: 'Higher High & Lower Low',
      color: 'from-blue-500/20 to-indigo-500/5',
      borderColor: 'group-hover:border-blue-400/50',
      icon: Sparkles,
    },
    {
      id: 'latihan',
      tag: 'Simulasi',
      title: 'Latihan Interaktif',
      subtitle: '5 Skenario Uji Pemahaman',
      color: 'from-amber-500/20 to-yellow-500/5',
      borderColor: 'group-hover:border-amber-300/50',
      icon: Award,
    },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:pt-14 md:pb-28">
      {/* Background atmospheric scenery with warm sunset glow and majestic mountain/candle gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Warm golden sunset sky gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[580px] bg-gradient-to-b from-amber-600/15 via-orange-500/10 to-transparent blur-3xl opacity-80" />
        
        {/* Soft radial glow points */}
        <div className="absolute top-16 left-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-[100px]" />
        <div className="absolute top-32 right-1/4 w-80 h-80 rounded-full bg-orange-500/10 blur-[90px]" />

        {/* Elegant mountain ridge / trendline backdrop silhouette */}
        <svg
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-full opacity-15 text-amber-500/30"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,181.3C672,171,768,117,864,112C960,107,1056,149,1152,149.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="currentColor"
          />
        </svg>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Giant ambient typographic brand watermark (like JAPAN in the reference image) */}
        <div className="relative text-center select-none pt-4">
          <span aria-hidden="true" className="block font-black tracking-widest text-[clamp(3.5rem,11vw,8.5rem)] text-white/[0.04] uppercase leading-none font-sans scale-y-110">
            PASAR MODAL
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-amber-400/90 bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20">
              Edukasi Terstruktur untuk Pemula
            </span>
          </div>
        </div>

        {/* Main headline and subtitle */}
        <div className="mx-auto max-w-3xl text-center mt-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight sm:leading-tight">
            Langkah Tenang Memahami Pasar Modal & Cara Membaca Tren Saham
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            Istilah teknis dijelaskan saat muncul, tanpa janji keuntungan instan. Dirancang langkah demi langkah agar masyarakat awam dapat mengenali dunia saham serta mengidentifikasi tren naik, turun, dan mendatar secara objektif.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onSelectTab('materi-1')}
              className="flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-500/25 cursor-pointer whitespace-nowrap"
            >
              <span>Buka Modul 1</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => onSelectTab('materi-2')}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30 cursor-pointer whitespace-nowrap"
            >
              <span>Buka Modul 2</span>
            </button>
            <button
              onClick={() => onSelectTab('latihan')}
              className="flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-5 py-3 text-sm font-medium text-amber-300 transition-all hover:bg-amber-500/20 cursor-pointer whitespace-nowrap"
            >
              <span>Mulai Latihan</span>
            </button>
          </div>

          {/* Quick trust reassurance badge */}
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Konten edukasi murni · Tanpa rekomendasi jual/beli saham</span>
          </div>
        </div>

        {/* 5 Preview Cards Row (Directly matching the 5 cards in the reference image) */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={() => onSelectTab(item.id)}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b ${item.color} p-4 text-left transition-all duration-200 hover:-translate-y-1 hover:border-white/30 hover:shadow-xl cursor-pointer`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 group-hover:text-amber-300 transition-colors">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-3 flex items-center gap-1 text-xs font-medium text-slate-400 group-hover:text-white transition-colors">
                  <span>Pelajari</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
