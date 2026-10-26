'use client';

import React, { useState } from 'react';
import { TREND_EXERCISES, TrendExercise } from '@/lib/course-data';
import { Award, CheckCircle2, XCircle, RotateCcw, ChevronRight, ChevronLeft, HelpCircle, TrendingUp, Sparkles } from 'lucide-react';

export const InteractiveTrendPractice: React.FC = () => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState<number>(0);
  const [userSelection, setUserSelection] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [history, setHistory] = useState<{ [id: string]: boolean }>({});

  const exercise = TREND_EXERCISES[currentScenarioIndex];
  const isCorrect = userSelection === exercise.chartType;

  const handleSelectOption = (type: 'uptrend' | 'downtrend' | 'sideways') => {
    if (hasSubmitted) return;
    setUserSelection(type);
  };

  const handleSubmit = () => {
    if (!userSelection) return;
    setHasSubmitted(true);
    if (userSelection === exercise.chartType && !history[exercise.id]) {
      setScore(prev => prev + 1);
      setHistory(prev => ({ ...prev, [exercise.id]: true }));
    }
  };

  const handleNext = () => {
    if (currentScenarioIndex < TREND_EXERCISES.length - 1) {
      setCurrentScenarioIndex(prev => prev + 1);
      setUserSelection(null);
      setHasSubmitted(false);
    }
  };

  const handlePrev = () => {
    if (currentScenarioIndex > 0) {
      setCurrentScenarioIndex(prev => prev - 1);
      setUserSelection(null);
      setHasSubmitted(false);
    }
  };

  const handleReset = () => {
    setCurrentScenarioIndex(0);
    setUserSelection(null);
    setHasSubmitted(false);
    setScore(0);
    setHistory({});
  };

  // Convert exercise data points to SVG coordinate space
  // x: 1 to 18 -> map to 40 to 560
  // y: 60 to 220 -> map to 200 to 40
  const mapX = (x: number) => 40 + ((x - 1) / 17) * 520;
  const minY = 60;
  const maxY = 220;
  const mapY = (y: number) => 210 - ((y - minY) / (maxY - minY)) * 170;

  const svgPoints = exercise.points.map(pt => ({
    ...pt,
    svgX: mapX(pt.x),
    svgY: mapY(pt.y)
  }));

  const polylineStr = svgPoints.map(p => `${p.svgX},${p.svgY}`).join(' ');

  return (
    <div className="py-8 md:py-14">
      {/* Header Banner */}
      <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-transparent p-6 sm:p-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest">
              <Sparkles className="h-4 w-4" />
              <span>Simulasi Mandiri</span>
            </div>
            <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Latihan Interaktif Mengenali Tren
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Uji ketajaman analisis visual Anda. Amati rangkaian gelombang harga di bawah ini dan tentukan apakah struktur tersebut mencerminkan Tren Naik, Tren Turun, atau Tren Mendatar.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-right">
              <span className="text-xs text-slate-400 block">Skor Latihan:</span>
              <span className="text-lg font-bold font-mono text-amber-400">
                {score} / {TREND_EXERCISES.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Exercise Card */}
      <div className="rounded-2xl border border-white/10 bg-[#0a0d12] p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">
              Skenario {currentScenarioIndex + 1} dari {TREND_EXERCISES.length}
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-white mt-1">
              {exercise.title}
            </h2>
          </div>
          <span className="text-sm text-slate-400 font-mono">
            {exercise.description}
          </span>
        </div>

        {/* Chart Viewport */}
        <div className="bg-black/70 rounded-xl border border-white/10 p-4 sm:p-6 my-6 relative overflow-hidden">
          <div className="flex items-center justify-between text-sm text-slate-400 mb-2">
            <span className="font-mono text-slate-300">Grafik Ilustratif Periode 1–18</span>
            <span className="text-xs font-mono text-slate-400">Amati titik belok (High/Low)</span>
          </div>

          <div className="w-full aspect-[16/8] max-h-[320px]">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 600 240"
              role="img"
              aria-labelledby="chart-title-practice"
            >
              <title id="chart-title-practice">
                Grafik ilustratif skenario {currentScenarioIndex + 1}: {exercise.title}
              </title>
              <defs>
                <pattern id="grid-pattern-practice" width="50" height="35" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 35" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
                </pattern>
              </defs>

              <rect width="600" height="240" fill="url(#grid-pattern-practice)" />

              {/* Price Wave line */}
              <polyline
                fill="none"
                stroke={hasSubmitted ? (exercise.chartType === 'uptrend' ? '#10b981' : exercise.chartType === 'downtrend' ? '#ef4444' : '#f59e0b') : '#38bdf8'}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={polylineStr}
              />

              {/* Point Markers */}
              {svgPoints.map((pt, idx) => {
                const isPeak = pt.type === 'peak';
                const isTrough = pt.type === 'trough';

                return (
                  <g key={idx}>
                    <circle
                      cx={pt.svgX}
                      cy={pt.svgY}
                      r={hasSubmitted ? "6" : "4.5"}
                      fill={hasSubmitted ? (isPeak ? '#ef4444' : isTrough ? '#10b981' : '#f59e0b') : '#38bdf8'}
                      stroke="#0c0f14"
                      strokeWidth="2"
                    />

                    {/* Show label upon submission */}
                    {hasSubmitted && pt.label && (
                      <g>
                        <rect
                          x={pt.svgX - 18}
                          y={isPeak ? pt.svgY - 24 : pt.svgY + 9}
                          width="36"
                          height="18"
                          rx="4"
                          fill="#0c0f14"
                          stroke={isPeak ? '#ef4444' : isTrough ? '#10b981' : '#f59e0b'}
                          strokeWidth="1"
                        />
                        <text
                          x={pt.svgX}
                          y={isPeak ? pt.svgY - 12 : pt.svgY + 21}
                          textAnchor="middle"
                          fill="#ffffff"
                          fontSize="9"
                          fontFamily="monospace"
                          fontWeight="bold"
                        >
                          {pt.label}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          {!hasSubmitted && (
            <p className="mt-3 text-sm text-center text-slate-400 italic">
              💡 Tip: Perhatikan apakah setiap puncak baru lebih tinggi atau lebih rendah dari puncak sebelumnya.
            </p>
          )}
        </div>

        {/* User Choice Selection */}
        {!hasSubmitted ? (
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">
              Pilih Arah Tren yang Paling Tepat:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { type: 'uptrend' as const, label: 'Tren Naik (Uptrend)', desc: 'Puncak & lembah cenderung meninggi' },
                { type: 'downtrend' as const, label: 'Tren Turun (Downtrend)', desc: 'Puncak & lembah cenderung menurun' },
                { type: 'sideways' as const, label: 'Tren Mendatar (Sideways)', desc: 'Harga tertahan dalam rentang serupa' },
              ].map((opt) => {
                const isSelected = userSelection === opt.type;
                return (
                  <button
                    key={opt.type}
                    onClick={() => handleSelectOption(opt.type)}
                    className={`rounded-xl border p-4 text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-blue-400 bg-blue-500/15 text-white shadow-md'
                        : 'border-white/10 bg-white/[0.02] text-slate-300 hover:border-white/20 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="font-semibold text-sm">{opt.label}</div>
                    <div className="text-sm text-slate-400 mt-1">{opt.desc}</div>
                  </button>
                );
              })}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={handleSubmit}
                disabled={!userSelection}
                className="rounded-full bg-blue-500 hover:bg-blue-400 disabled:opacity-40 disabled:cursor-not-allowed px-7 py-2.5 text-sm font-semibold text-slate-950 transition-all cursor-pointer"
              >
                Konfirmasi Jawaban
              </button>
            </div>
          </div>
        ) : (
          /* Result & Explanation Feedback */
          <div className="space-y-4">
            <div className={`rounded-xl border p-5 ${
              isCorrect
                ? 'border-emerald-500/40 bg-emerald-950/20 text-emerald-200'
                : 'border-red-500/40 bg-red-950/20 text-red-200'
            }`}>
              <div className="flex items-center gap-3">
                {isCorrect ? (
                  <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0" />
                ) : (
                  <XCircle className="h-6 w-6 text-red-400 shrink-0" />
                )}
                <div>
                  <h3 className="font-bold text-base text-white">
                    {isCorrect ? 'Jawaban Anda tepat.' : 'Jawaban kurang tepat.'}
                  </h3>
                  <p className="text-sm text-slate-300 mt-0.5">
                    Grafik di atas adalah struktur{' '}
                    <strong className="text-white uppercase font-mono">
                      {exercise.chartType === 'uptrend' ? 'Tren Naik (Uptrend)' :
                       exercise.chartType === 'downtrend' ? 'Tren Turun (Downtrend)' : 'Tren Mendatar (Sideways)'}
                    </strong>
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 text-sm text-slate-200 leading-relaxed">
                <strong>Analisis objektif: </strong>
                {exercise.explanation}
              </div>

              <div className="mt-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  Kriteria jawaban:
                </span>
                <ul className="space-y-1 text-sm text-slate-300">
                  {exercise.criteria.map((c, cIdx) => (
                    <li key={cIdx} className="flex items-center gap-1.5">
                      <span className="text-amber-400">✓</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Next / Previous Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <button
                onClick={handlePrev}
                disabled={currentScenarioIndex === 0}
                className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Skenario Sebelumnya</span>
              </button>

              <div className="flex items-center gap-3">
                {currentScenarioIndex < TREND_EXERCISES.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 rounded-full bg-blue-500 hover:bg-blue-400 px-6 py-2.5 text-sm font-semibold text-slate-950 transition-all cursor-pointer"
                  >
                    <span>Lanjut ke Skenario Berikutnya</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-all cursor-pointer"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Ulangi Semua Latihan</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
