'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Building2, BarChart2 } from 'lucide-react';

interface LearningPathSectionProps {
  onSelectTab: (tab: string) => void;
}

export const LearningPathSection: React.FC<LearningPathSectionProps> = ({ onSelectTab }) => {
  const steps = [
    {
      id: 'materi-1',
      badge: 'Fase 1 · Modul Dasar',
      title: 'Mengenal Pasar Modal & Saham',
      subtopics: '9 Subtopik · Pengertian, Fungsi, BEI/OJK, Transaksi & Risiko',
      desc: 'Membangun pemahaman kokoh apa itu pasar modal, bagaimana perusahaan menerbitkan saham, hak pemegang saham, dan mekanisme order book tanpa jargon rumit.',
      icon: Building2,
      accent: 'amber',
      accentColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      statLabel: '9 Subtopik',
    },
    {
      id: 'materi-2',
      badge: 'Fase 2 · Analisis Tren',
      title: 'Membaca Tren Harga Saham',
      subtopics: '10 subtopik · Uptrend, Downtrend, Sideways, Puncak & Lembah',
      desc: 'Membiasakan mata mengenali struktur gelombang harga melalui Higher High (HH), Higher Low (HL), Lower High (LH), dan Lower Low (LL) pada grafik visual.',
      icon: TrendingUp,
      accent: 'emerald',
      accentColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      statLabel: '3 Pola Utama',
    },
    {
      id: 'latihan',
      badge: 'Fase 3 · Pengujian Mandiri',
      title: 'Simulasi & Latihan Interaktif',
      subtopics: '5 Skenario · Uji Kemampuan Mengidentifikasi Tren',
      desc: 'Latihan mandiri mengenali arah harga pada contoh grafik interaktif. Uji pemahaman Anda dengan umpan balik dan penjelasan langkah demi langkah.',
      icon: BarChart2,
      accent: 'blue',
      accentColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
      statLabel: 'Interaktif',
    },
  ];

  return (
    <section className="relative py-16 md:py-24 border-t border-white/5 bg-[#0a0d12]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section title styled like — ABOUT THE TOUR — in reference image */}
        <div className="flex items-center justify-center gap-4 text-center">
          <div className="h-[1px] flex-1 max-w-[120px] sm:max-w-[200px] bg-gradient-to-r from-transparent to-white/20" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider uppercase text-white/90">
            JALUR BELAJAR
          </h2>
          <div className="h-[1px] flex-1 max-w-[120px] sm:max-w-[200px] bg-gradient-to-l from-transparent to-white/20" />
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Editorial description text matching the reference image layout */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:sticky lg:top-24">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-amber-400">
                Tahapan Terstruktur
              </span>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Kami merancang jalur belajar terstruktur dan ramah bagi pemula. Anda akan mempelajari tiga fase terarah: dari mengenali fondasi bursa, memahami anatomi tren harga, hingga mempraktikkannya pada simulasi mandiri.
              </p>
              <div className="pt-2">
                <span className="inline-block text-xs font-mono text-amber-300/80 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-md">
                  Maksimal 2 Klik Menuju Materi Inti
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm space-y-3">
              <h3 className="text-sm font-semibold text-white">Prinsip Belajar Jejak Pasar Modal:</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Definisi bahasa sehari-hari tanpa istilah membingungkan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Grafik sederhana dengan penanda puncak & lembah yang jelas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Menjelaskan risiko dan fakta apa adanya tanpa janji muluk.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2 text-sm text-slate-400">
              <p className="leading-relaxed">
                Tidak perlu khawatir tersesat dalam kebingungan grafik teknikal. Kami memandu langkah demi langkah agar Anda dapat menikmati proses belajar dengan rasa tenang dan percaya diri.
              </p>
            </div>
          </div>

          {/* Right Column: Connected timeline path with nodes matching the reference image */}
          <div className="lg:col-span-7 relative pl-6 sm:pl-10">
            {/* The vertical timeline spine line */}
            <div className="absolute left-[23px] sm:left-[39px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-amber-500/50 via-emerald-500/40 to-blue-500/30" />

            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className="relative group">
                    {/* The timeline milestone dot */}
                    <div className="absolute -left-[23px] sm:-left-[39px] top-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#0a0d12] bg-slate-900 group-hover:scale-110 transition-transform shadow-lg">
                      <div className={`h-3 w-3 rounded-full ${
                        step.accent === 'amber' ? 'bg-amber-400' :
                        step.accent === 'emerald' ? 'bg-emerald-400' : 'bg-blue-400'
                      }`} />
                    </div>

                    {/* Step Card */}
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-5 sm:p-6 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-xl">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border ${step.accentColor}`}>
                          <Icon className="h-3.5 w-3.5" />
                          <span>{step.badge}</span>
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {step.statLabel}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        {step.title}
                      </h3>
                      
                      <p className="mt-1 text-sm font-medium text-slate-400">
                        {step.subtopics}
                      </p>

                      <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                        {step.desc}
                      </p>

                      <div className="mt-5 flex items-center justify-between pt-4 border-t border-white/10">
                        <span className="text-sm text-slate-400">
                          Langkah {index + 1} dari 3
                        </span>
                        <button
                          onClick={() => onSelectTab(step.id)}
                          className="flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-white transition-colors cursor-pointer group/btn"
                        >
                          <span>
                            {step.id === 'latihan'
                              ? 'Mulai Latihan'
                              : step.id === 'materi-1'
                                ? 'Buka Modul 1'
                                : 'Buka Modul 2'}
                          </span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
