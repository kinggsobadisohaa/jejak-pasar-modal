'use client';

import React from 'react';
import { ShieldCheck, Info, HeartHandshake, Eye, AlertCircle, FileCheck2, UserCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <div className="py-8 md:py-14">
      {/* Header Banner */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-6 sm:p-8 mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">
          <Info className="h-4 w-4" />
          <span>Informasi & Prinsip Edukasi</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
          Tentang Jejak Pasar Modal
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
          Membangun literasi pasar modal yang tenang, objektif, dan membumi untuk masyarakat Indonesia.
        </p>
      </div>

      <div className="space-y-8">
        {/* Core Vision & Mission */}
        <div className="rounded-2xl border border-white/10 bg-[#0a0d12] p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4">
            Latar Belakang & Tujuan Produk
          </h2>
          <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              Dunia investasi dan pasar modal di Indonesia sering kali diselimuti dua kutub ekstrem. Di satu sisi, istilah teknis berbahasa Inggris dan teori rumit membuat orang awam enggan mendekat. Di sisi lain, klaim keuntungan kilat yang menyesatkan memicu spekulasi berbahaya.
            </p>
            <p>
              <strong className="text-white">Jejak Pasar Modal</strong> hadir sebagai jembatan tengah: sebuah ruang belajar terbuka yang menyajikan konsep pasar modal dan cara membaca pergerakan harga saham dengan bahasa yang jernih, terstruktur, dan objektif.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
                Sasaran Pembaca
              </span>
              <h3 className="font-bold text-white text-base">Masyarakat Umum & Pemula</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Siapa saja yang ingin memahami dunia saham dari dasar tanpa rasa takut atau cemas akan istilah asing.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                Fokus Materi
              </span>
              <h3 className="font-bold text-white text-base">Dasar Pasar & Membaca Tren</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Fondasi ekosistem bursa efek serta teknik membaca struktur Higher High, Lower Low, dan konsolidasi harga.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block mb-1">
                Pemilik Produk
              </span>
              <h3 className="font-bold text-white text-base">Investor Ritel</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Diinisiasi oleh praktisi investor ritel independen dengan komitmen berbagi wawasan berbasis integritas.
              </p>
            </div>
          </div>
        </div>

        {/* Batasan Konten & Komitmen Etika */}
        <div className="rounded-2xl border border-white/10 bg-[#0a0d12] p-6 sm:p-8">
          <div className="flex items-center gap-2 text-amber-400 mb-3">
            <ShieldCheck className="h-5 w-5" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              Batasan Konten & Komitmen Etika Edukasi
            </h2>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Untuk menjaga kemurnian tujuan pembelajaran dan melindungi pembaca pemula, Jejak Pasar Modal memegang teguh batasan ketat berikut:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-5">
              <h3 className="text-sm font-bold text-emerald-300 mb-2 flex items-center gap-2">
                <FileCheck2 className="h-4 w-4" />
                <span>Yang Kami Sediakan:</span>
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Penjelasan konsep dasar dengan analogi sehari-hari yang tepat.</li>
                <li>• Panduan objektif mengenali struktur puncak (<em lang="en">peak</em>) dan lembah (<em lang="en">trough</em>).</li>
                <li>• Simulasi visual interaktif dengan keterangan data ilustratif yang transparan.</li>
                <li>• Edukasi mengenai risiko penurunan modal dan pentingnya kehati-hatian.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-red-500/20 bg-red-950/10 p-5">
              <h3 className="text-sm font-bold text-red-300 mb-2 flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                <span>Yang Tidak Kami Sediakan:</span>
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Rekomendasi ajakan membeli atau menjual saham tertentu.</li>
                <li>• Sinyal beli/jual otomatis (<em lang="en">stock signals</em> / <em lang="en">call buy</em>).</li>
                <li>• Janji imbal hasil atau ramalan pasti pergerakan harga esok hari.</li>
                <li>• Layanan titip dana, pengelolaan portofolio, atau grup berbayar.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal & Educational Disclaimer Notice */}
        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
              <AlertCircle className="h-5 w-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white">
                Pernyataan Sangkalan (Disclaimer) Resmi
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Seluruh materi tulisan, tabel, ilustrasi grafik, dan simulasi yang termuat di dalam website <strong className="text-white">Jejak Pasar Modal</strong> disusun semata-mata untuk keperluan edukasi dan literasi publik. Konten ini bukan merupakan saran investasi profesional, nasihat keuangan legal, rekomendasi efek, atau ajakan untuk melakukan transaksi surat berharga tertentu.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                Investasi di pasar modal mengandung risiko penurunan nilai modal hingga kehilangan seluruh modal. Keputusan untuk membeli atau menjual instrumen pasar modal sepenuhnya merupakan tanggung jawab independen masing-masing individu setelah melakukan riset mandiri (<em lang="en">Do Your Own Research</em>).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
