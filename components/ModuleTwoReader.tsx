'use client';

import React, { useState } from 'react';
import { MODULE_2_SUBTOPICS } from '@/lib/course-data';
import { renderContentBlock } from '@/lib/content-renderer';
import { TrendingUp, CheckCircle2, ChevronRight, ChevronLeft, Eye, Activity, AlertTriangle, ArrowRight, Layers } from 'lucide-react';

interface ModuleTwoReaderProps {
  onGoToPractice: () => void;
}

export const ModuleTwoReader: React.FC<ModuleTwoReaderProps> = ({ onGoToPractice }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(MODULE_2_SUBTOPICS[0].id);

  // Interactive Chart Demonstration State
  const [chartMode, setChartMode] = useState<'uptrend' | 'downtrend' | 'sideways'>('uptrend');
  const [showPeaks, setShowPeaks] = useState<boolean>(true);
  const [showTroughs, setShowTroughs] = useState<boolean>(true);
  const [showTrendline, setShowTrendline] = useState<boolean>(true);

  const currentTopic = MODULE_2_SUBTOPICS.find(t => t.id === selectedTopicId) || MODULE_2_SUBTOPICS[0];
  const currentIndex = MODULE_2_SUBTOPICS.findIndex(t => t.id === selectedTopicId);

  // Data for the 3 visual simulation modes
  const chartData = {
    uptrend: {
      title: 'Simulasi Tren Naik (Uptrend)',
      badge: 'Higher High (HH) & Higher Low (HL)',
      desc: 'Perhatikan bagaimana setiap puncak (HH) terbentuk lebih tinggi dari puncak sebelumnya, dan setiap lembah (HL) memantul lebih tinggi dari lembah sebelumnya.',
      color: '#10b981', // emerald
      trendlineColor: '#34d399',
      points: [
        { x: 30, y: 190, label: 'L0', type: 'trough' },
        { x: 90, y: 130, label: 'H1', type: 'peak' },
        { x: 150, y: 160, label: 'HL1', type: 'trough' },
        { x: 230, y: 95, label: 'HH1', type: 'peak' },
        { x: 310, y: 130, label: 'HL2', type: 'trough' },
        { x: 400, y: 60, label: 'HH2', type: 'peak' },
        { x: 480, y: 100, label: 'HL3', type: 'trough' },
        { x: 570, y: 35, label: 'HH3', type: 'peak' },
      ],
      trendline: { x1: 30, y1: 190, x2: 570, y2: 85 }
    },
    downtrend: {
      title: 'Simulasi Tren Turun (Downtrend)',
      badge: 'Lower High (LH) & Lower Low (LL)',
      desc: 'Setiap kali harga mencoba memantul (LH), pantulan gagal melampaui puncak lama. Tekanan jual menembus lembah baru (LL).',
      color: '#ef4444', // red
      trendlineColor: '#f87171',
      points: [
        { x: 30, y: 40, label: 'H0', type: 'peak' },
        { x: 100, y: 110, label: 'L1', type: 'trough' },
        { x: 170, y: 75, label: 'LH1', type: 'peak' },
        { x: 250, y: 145, label: 'LL1', type: 'trough' },
        { x: 330, y: 110, label: 'LH2', type: 'peak' },
        { x: 410, y: 180, label: 'LL2', type: 'trough' },
        { x: 490, y: 150, label: 'LH3', type: 'peak' },
        { x: 570, y: 210, label: 'LL3', type: 'trough' },
      ],
      trendline: { x1: 30, y1: 40, x2: 570, y2: 170 }
    },
    sideways: {
      title: 'Simulasi Tren Mendatar (Sideways)',
      badge: 'Rentang Support & Resistance',
      desc: 'Harga berfluktuasi bolak-balik antara batas atas (resistance di level ~70) dan batas bawah (support di level ~170) tanpa arah dominan.',
      color: '#f59e0b', // amber
      trendlineColor: '#fbbf24',
      points: [
        { x: 30, y: 170, label: 'S1', type: 'trough' },
        { x: 100, y: 72, label: 'R1', type: 'peak' },
        { x: 180, y: 168, label: 'S2', type: 'trough' },
        { x: 260, y: 70, label: 'R2', type: 'peak' },
        { x: 340, y: 172, label: 'S3', type: 'trough' },
        { x: 420, y: 75, label: 'R3', type: 'peak' },
        { x: 500, y: 169, label: 'S4', type: 'trough' },
        { x: 570, y: 74, label: 'R4', type: 'peak' },
      ],
      trendline: { x1: 30, y1: 72, x2: 570, y2: 72, supportX1: 30, supportY1: 170, supportX2: 570, supportY2: 170 }
    }
  };

  const activeDemo = chartData[chartMode];

  return (
    <div className="py-8 md:py-14">
      {/* Module Header Banner */}
      <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent p-6 sm:p-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm font-mono text-emerald-400 uppercase tracking-widest">
              <TrendingUp className="h-4 w-4" />
              <span>Modul 2</span>
            </div>
            <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Membaca Tren Harga Saham
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Tujuan Pembelajaran: Pembaca mampu mengidentifikasi tren naik, tren turun, dan tren mendatar pada grafik harga sederhana melalui struktur puncak dan lembah, serta memahami batasannya secara objektif.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-right">
            <span className="text-xs text-slate-400 block">Progres Modul:</span>
            <span className="text-lg font-bold font-mono text-emerald-400">
              {currentIndex + 1} / {MODULE_2_SUBTOPICS.length} Subtopik
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Visual Trend Visualizer Studio */}
      <div className="mb-10 rounded-2xl border border-white/10 bg-[#0a0d12] p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <span className="text-sm font-mono text-emerald-400 uppercase tracking-widest block">
              Laboratorium Visual Interaktif
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-white mt-1">
              Visualisasi Anatomi Puncak & Lembah
            </h2>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-xl border border-white/10">
            <button
              onClick={() => setChartMode('uptrend')}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                chartMode === 'uptrend'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              1. Tren Naik (Uptrend)
            </button>
            <button
              onClick={() => setChartMode('downtrend')}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                chartMode === 'downtrend'
                  ? 'bg-red-500 text-white font-bold shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              2. Tren Turun (Downtrend)
            </button>
            <button
              onClick={() => setChartMode('sideways')}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                chartMode === 'sideways'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              3. Mendatar (Sideways)
            </button>
          </div>
        </div>

        {/* Chart Viewport & Description */}
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 bg-black/60 rounded-xl border border-white/10 p-4 relative overflow-hidden">
            <div className="flex items-center justify-between mb-3 text-sm text-slate-400">
              <span className="font-mono text-white font-medium">{activeDemo.title}</span>
              <span className="text-xs font-mono text-slate-400">Simulasi Edukatif (Data Ilustratif)</span>
            </div>

            {/* SVG Interactive Chart Canvas */}
            <div className="w-full aspect-[16/9] max-h-[300px]">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 600 240"
                role="img"
                aria-labelledby="chart-title-module2"
              >
                <title id="chart-title-module2">
                  Grafik ilustratif {activeDemo.title} untuk Modul 2
                </title>
                <defs>
                  {/* Grid Lines Pattern */}
                  <pattern id="chart-grid" width="60" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                  </pattern>
                </defs>

                <rect width="600" height="240" fill="url(#chart-grid)" />

                {/* Trendlines */}
                {showTrendline && chartMode !== 'sideways' && (
                  <line
                    x1={activeDemo.trendline.x1}
                    y1={activeDemo.trendline.y1}
                    x2={activeDemo.trendline.x2}
                    y2={activeDemo.trendline.y2}
                    stroke={activeDemo.trendlineColor}
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    opacity="0.75"
                  />
                )}

                {/* Support & Resistance Lines for Sideways */}
                {showTrendline && chartMode === 'sideways' && (
                  <>
                    <line x1="30" y1="72" x2="570" y2="72" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" opacity="0.8" />
                    <text x="50" y="65" fill="#ef4444" fontSize="10" fontFamily="monospace">Resistance (Batas Atas)</text>
                    <line x1="30" y1="170" x2="570" y2="170" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" opacity="0.8" />
                    <text x="50" y="185" fill="#10b981" fontSize="10" fontFamily="monospace">Support (Batas Bawah)</text>
                  </>
                )}

                {/* Price Wave Connecting Line */}
                <polyline
                  fill="none"
                  stroke={activeDemo.color}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points={activeDemo.points.map(p => `${p.x},${p.y}`).join(' ')}
                />

                {/* Nodes & Labels */}
                {activeDemo.points.map((pt, pIdx) => {
                  const isPeak = pt.type === 'peak';
                  const isTrough = pt.type === 'trough';
                  const isNeutral = pt.type === 'neutral';

                  if (isPeak && !showPeaks) return null;
                  if (isTrough && !showTroughs) return null;

                  return (
                    <g key={pIdx}>
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r="5"
                        fill={isPeak ? '#ef4444' : isTrough ? '#10b981' : '#f59e0b'}
                        stroke="#0c0f14"
                        strokeWidth="2"
                      />
                      <rect
                        x={pt.x - 18}
                        y={isPeak ? pt.y - 25 : pt.y + 10}
                        width="36"
                        height="18"
                        rx="4"
                        fill="#0c0f14"
                        stroke={isPeak ? '#ef4444' : isTrough ? '#10b981' : '#f59e0b'}
                        strokeWidth="1"
                      />
                      <text
                        x={pt.x}
                        y={isPeak ? pt.y - 13 : pt.y + 22}
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="10"
                        fontFamily="monospace"
                        fontWeight="bold"
                      >
                        {pt.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Chart Interactive Toggles */}
            <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <label className="flex items-center gap-1.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={showPeaks}
                  onChange={e => setShowPeaks(e.target.checked)}
                  className="rounded border-white/20 bg-black text-red-500 focus:ring-0"
                />
                <span className="text-red-400 font-medium">Titik Puncak (Peak)</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={showTroughs}
                  onChange={e => setShowTroughs(e.target.checked)}
                  className="rounded border-white/20 bg-black text-emerald-500 focus:ring-0"
                />
                <span className="text-emerald-400 font-medium">Titik Lembah (Trough)</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={showTrendline}
                  onChange={e => setShowTrendline(e.target.checked)}
                  className="rounded border-white/20 bg-black text-amber-400 focus:ring-0"
                />
                <span className="text-amber-400 font-medium">Garis Tren Acuan</span>
              </label>
            </div>
          </div>

          {/* Description of Current Mode */}
          <div className="lg:col-span-4 space-y-4">
            <span className="inline-block text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/30">
              {activeDemo.badge}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {activeDemo.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {activeDemo.desc}
            </p>
            <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3 text-sm text-slate-400 space-y-1.5">
              <div className="text-white font-medium">Kunci Pengamatan:</div>
              <div>• Jangan memprediksi masa depan; lihat fakta titik belok saat ini.</div>
              <div>• Tren naik membutuhkan Higher High & Higher Low.</div>
              <div>• Tren turun membutuhkan Lower High & Lower Low.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Subtopics Reader Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-4 rounded-xl border border-white/10 bg-[#0a0d12] p-4 lg:sticky lg:top-24">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Daftar Subtopik Modul 2
            </span>
            <span className="text-sm font-mono text-emerald-400">
              {MODULE_2_SUBTOPICS.length} subtopik
            </span>
          </div>

          <nav className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-1">
            {MODULE_2_SUBTOPICS.map((topic, idx) => {
              const isActive = topic.id === selectedTopicId;
              return (
                <button
                  key={topic.id}
                  onClick={() => {
                    setSelectedTopicId(topic.id);
                    window.scrollTo({ top: 580, behavior: 'smooth' });
                  }}
                  className={`w-full flex items-start gap-2.5 rounded-lg p-2.5 text-left text-sm transition-all cursor-pointer ${
                    isActive
                      ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-medium'
                      : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                  }`}
                >
                  <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-mono mt-0.5 ${
                    isActive ? 'bg-emerald-400 text-slate-950 font-bold' : 'bg-white/10 text-slate-400'
                  }`}>
                    {idx + 1}
                  </span>
                  <span className="line-clamp-2">{topic.title.replace(/^\d+\.\s*/, '')}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-8 rounded-2xl border border-white/10 bg-[#0a0d12] p-6 sm:p-8 shadow-xl">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 mb-6">
            <span className="text-sm font-mono text-emerald-400 uppercase tracking-widest">
              Subtopik {currentIndex + 1} dari {MODULE_2_SUBTOPICS.length}
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-white">
              {currentTopic.title}
            </h2>
            <div className="mt-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3.5 text-sm text-emerald-200/90 leading-relaxed">
              <strong className="text-emerald-400 font-semibold">Inti Pembahasan: </strong>
              {currentTopic.summary}
            </div>
          </div>

          {/* Body Content */}
          <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
            {currentTopic.content.split('\n\n').map((block, pIdx) => {
              return (
                <div
                  key={pIdx}
                  className="space-y-2"
                  dangerouslySetInnerHTML={{ __html: renderContentBlock(block, 'text-emerald-300/90') }}
                />
              );
            })}
          </div>

          {/* Key Takeaways */}
          <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <h3 className="text-xs uppercase font-mono tracking-wider text-emerald-400 font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              <span>Poin Kunci:</span>
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-slate-300">
              {currentTopic.keyPoints.map((point, kIdx) => (
                <li key={kIdx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold shrink-0">·</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-white/10 text-sm font-medium text-slate-400 italic">
              Kesimpulan: &ldquo;{currentTopic.takeaway}&rdquo;
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                if (currentIndex > 0) {
                  setSelectedTopicId(MODULE_2_SUBTOPICS[currentIndex - 1].id);
                  window.scrollTo({ top: 580, behavior: 'smooth' });
                }
              }}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Subtopik Sebelumnya</span>
            </button>

            {currentIndex < MODULE_2_SUBTOPICS.length - 1 ? (
              <button
                onClick={() => {
                  setSelectedTopicId(MODULE_2_SUBTOPICS[currentIndex + 1].id);
                  window.scrollTo({ top: 580, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-5 py-2 text-sm font-semibold text-white transition-all cursor-pointer"
              >
                <span>Subtopik Selanjutnya</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={onGoToPractice}
                className="flex items-center gap-2 rounded-full bg-emerald-400 hover:bg-emerald-300 px-6 py-2.5 text-sm font-semibold text-slate-950 transition-all cursor-pointer shadow-lg shadow-emerald-500/20"
              >
                <span>Mulai Latihan Mengenali Tren (5 Skenario)</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
