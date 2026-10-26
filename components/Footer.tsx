'use client';

import React from 'react';
import { TrendingUp, AlertTriangle, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="border-t border-white/10 bg-[#080b0f] text-slate-400">
      {/* Prominent Mandatory PRD Disclaimer Banner */}
      <div className="border-b border-white/10 bg-amber-500/5 py-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex items-center justify-center gap-2.5 text-center text-sm text-amber-300/90">
          <AlertTriangle className="h-4 w-4 shrink-0 text-amber-400" />
          <span>
            <strong>Pemberitahuan Wajib:</strong> Konten pada website ini ditujukan semata-mata untuk tujuan edukasi dan literasi, bukan merupakan rekomendasi investasi, ajakan, atau sinyal transaksi efek.
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-white">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <TrendingUp className="h-4 w-4" />
              </div>
              <span className="font-bold text-base tracking-tight">JEJAK PASAR MODAL</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Panduan belajar pasar modal dan analisis arah tren harga saham yang terstruktur, tenang, dan ramah pemula.
            </p>
            <div className="text-xs text-slate-400">
              Diperbarui: Oktober 2026
            </div>
          </div>

          {/* Nav Links Column 1 */}
          <div className="md:col-span-3 space-y-2 text-sm">
            <span className="font-semibold text-white uppercase tracking-wider block mb-2 font-mono text-xs">
              Jalur Belajar
            </span>
            <div>
              <button
                onClick={() => {
                  onSelectTab('materi-1');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-amber-300 transition-colors cursor-pointer text-left py-0.5"
              >
                Modul 1: Mengenal Pasar Modal &amp; Saham (9 subtopik)
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  onSelectTab('materi-2');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-amber-300 transition-colors cursor-pointer text-left py-0.5"
              >
                Modul 2: Membaca Tren Harga Saham (10 subtopik)
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  onSelectTab('latihan');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-amber-300 transition-colors cursor-pointer text-left py-0.5"
              >
                Simulasi Latihan Mengenali Tren
              </button>
            </div>
          </div>

          {/* Nav Links Column 2 */}
          <div className="md:col-span-4 space-y-2 text-sm">
            <span className="font-semibold text-white uppercase tracking-wider block mb-2 font-mono text-xs">
              Referensi & Informasi
            </span>
            <div>
              <button
                onClick={() => {
                  onSelectTab('glosarium');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-amber-300 transition-colors cursor-pointer text-left py-0.5"
              >
                Glosarium Istilah (28 istilah)
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  onSelectTab('tentang');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-amber-300 transition-colors cursor-pointer text-left py-0.5"
              >
                Tentang Jejak Pasar Modal & Etika Edukasi
              </button>
            </div>
            <div className="pt-2 text-xs text-slate-400">
              Referensi Otoritas: OJK (ojk.go.id) · BEI (idx.co.id) · KSEI (ksei.co.id)
            </div>
          </div>
        </div>

        {/* Bottom bar matching reference image footer style */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <span>© 2026 Jejak Pasar Modal. Seluruh materi disajikan untuk kepentingan edukasi publik.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                onSelectTab('tentang');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Tentang
            </button>
            <button
              onClick={() => {
                onSelectTab('glosarium');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Glosarium
            </button>
            <button
              onClick={() => {
                onSelectTab('beranda');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Kembali ke Beranda
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
