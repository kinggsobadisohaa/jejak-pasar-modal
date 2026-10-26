'use client';

import React, { useState } from 'react';
import { MODULE_1_SUBTOPICS, MODULE_1_QUIZ, SubTopic } from '@/lib/course-data';
import { renderContentBlock, renderInlineMarkdown } from '@/lib/content-renderer';
import { CheckCircle2, ChevronRight, ChevronLeft, HelpCircle, BookOpen, Layers, ShieldAlert, Award } from 'lucide-react';

interface ModuleOneReaderProps {
  onGoToNextModule: () => void;
}

export const ModuleOneReader: React.FC<ModuleOneReaderProps> = ({ onGoToNextModule }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(MODULE_1_SUBTOPICS[0].id);
  const [userAnswers, setUserAnswers] = useState<{ [qId: string]: number }>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  const currentTopic = MODULE_1_SUBTOPICS.find(t => t.id === selectedTopicId) || MODULE_1_SUBTOPICS[0];
  const currentIndex = MODULE_1_SUBTOPICS.findIndex(t => t.id === selectedTopicId);

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const calculateScore = () => {
    let score = 0;
    MODULE_1_QUIZ.forEach(q => {
      if (userAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <div className="py-8 md:py-14">
      {/* Module Header Banner */}
      <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent p-6 sm:p-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
              <BookOpen className="h-4 w-4" />
              <span>Modul 1</span>
            </div>
            <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Mengenal Pasar Modal & Saham
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Tujuan Pembelajaran: Pembaca mampu menjelaskan pengertian pasar modal dan saham dengan bahasa sendiri serta memahami fungsi dasar dan pihak-pihak yang terlibat.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-right">
            <span className="text-xs text-slate-400 block">Progres Modul:</span>
            <span className="text-lg font-bold font-mono text-amber-400">
              {currentIndex + 1} / {MODULE_1_SUBTOPICS.length} Subtopik
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Subtopic Navigation Drawer / Sidebar */}
        <div className="lg:col-span-4 rounded-xl border border-white/10 bg-[#0a0d12] p-4 lg:sticky lg:top-24">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Daftar Subtopik
            </span>
            <span className="text-xs font-mono text-amber-400">
              {MODULE_1_SUBTOPICS.length} subtopik
            </span>
          </div>

          <nav className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-1">
            {MODULE_1_SUBTOPICS.map((topic, idx) => {
              const isActive = topic.id === selectedTopicId;
              return (
                <button
                  key={topic.id}
                  onClick={() => {
                    setSelectedTopicId(topic.id);
                    window.scrollTo({ top: 180, behavior: 'smooth' });
                  }}
                  className={`w-full flex items-start gap-2.5 rounded-lg p-2.5 text-left text-sm transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30 font-medium'
                      : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                  }`}
                >
                  <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-mono mt-0.5 ${
                    isActive ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-white/10 text-slate-400'
                  }`}>
                    {idx + 1}
                  </span>
                  <span className="line-clamp-2">{topic.title.replace(/^\d+\.\s*/, '')}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Subtopic Main Content Area */}
        <div className="lg:col-span-8 rounded-2xl border border-white/10 bg-[#0a0d12] p-6 sm:p-8 shadow-xl">
          {/* Header of current subtopic */}
          <div className="border-b border-white/10 pb-6 mb-6">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
              Subtopik {currentIndex + 1} dari {MODULE_1_SUBTOPICS.length}
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-white">
              {currentTopic.title}
            </h2>
            <div className="mt-3 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3.5 text-sm text-amber-200/90 leading-relaxed">
              <strong className="text-amber-400 font-semibold">Inti Pembahasan: </strong>
              {currentTopic.summary}
            </div>
          </div>

          {/* Body Content */}
          <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
            {currentTopic.content.split('\n\n').map((block, pIdx) => {
              if (block.startsWith('|')) {
                // Render table
                const rows = block.split('\n').filter(r => !r.includes('---'));
                const headers = rows[0].split('|').filter(c => c.trim().length > 0);
                const dataRows = rows.slice(1).map(r => r.split('|').filter(c => c.trim().length > 0));

                return (
                  <div key={pIdx} className="overflow-x-auto my-6 rounded-lg border border-white/10">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-white/5 border-b border-white/10 text-white">
                        <tr>
                          {headers.map((h, hIdx) => (
                            <th
                              key={hIdx}
                              className="p-3 font-semibold"
                              dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(h.trim(), 'text-amber-300/90') }}
                            />
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-slate-300">
                        {dataRows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-white/[0.02]">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-3">
                                <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(cell.trim(), 'text-amber-300/90') }} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }

              return (
                <div
                  key={pIdx}
                  className="space-y-2"
                  dangerouslySetInnerHTML={{ __html: renderContentBlock(block, 'text-amber-300/90') }}
                />
              );
            })}
          </div>

          {/* Key Takeaways Card */}
          <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <h3 className="text-xs uppercase font-mono tracking-wider text-amber-400 font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              <span>Poin Kunci:</span>
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-slate-300">
              {currentTopic.keyPoints.map((point, kIdx) => (
                <li key={kIdx} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold shrink-0">·</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-white/10 text-sm font-medium text-slate-400 italic">
              Kesimpulan: &ldquo;{currentTopic.takeaway}&rdquo;
            </div>
          </div>

          {/* Quiz Section (Shows on the last subtopic: Subtopic 9) */}
          {currentTopic.id === 'rangkuman-materi-1' && (
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 text-amber-400 mb-2">
                <HelpCircle className="h-5 w-5" />
                <h3 className="text-lg font-bold text-white">
                  Kuis Pemahaman Modul 1
                </h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                Uji sejauh mana Anda memahami materi dasar pasar modal. Pilih jawaban yang paling tepat untuk masing-masing pertanyaan:
              </p>

              <div className="space-y-6">
                {MODULE_1_QUIZ.map((q, qIndex) => {
                  const selected = userAnswers[q.id];
                  const isAnswered = selected !== undefined;
                  const isCorrect = selected === q.correctIndex;

                  return (
                    <div key={q.id} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                      <div className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xs font-mono font-bold text-amber-400">
                          {qIndex + 1}
                        </span>
                        <div className="w-full">
                          <p className="text-sm font-semibold text-white mb-3">
                            {q.question}
                          </p>

                          <div className="space-y-2">
                            {q.options.map((opt, optIndex) => {
                              const isChoice = selected === optIndex;
                              let btnClass = 'border-white/10 hover:border-white/30 text-slate-300';

                              if (quizSubmitted) {
                                if (optIndex === q.correctIndex) {
                                  btnClass = 'border-emerald-500 bg-emerald-500/10 text-emerald-300 font-semibold';
                                } else if (isChoice && !isCorrect) {
                                  btnClass = 'border-red-500 bg-red-500/10 text-red-300';
                                }
                              } else if (isChoice) {
                                btnClass = 'border-amber-400 bg-amber-500/10 text-amber-300 font-medium';
                              }

                              return (
                                <button
                                  key={optIndex}
                                  onClick={() => handleSelectOption(q.id, optIndex)}
                                  className={`w-full flex items-center justify-between rounded-lg border p-3 text-left text-sm transition-all cursor-pointer ${btnClass}`}
                                >
                                  <span>{opt}</span>
                                  {quizSubmitted && optIndex === q.correctIndex && (
                                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 ml-2" />
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          {quizSubmitted && (
                            <div className={`mt-3 rounded-md p-3 text-sm leading-relaxed ${
                              isCorrect ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/30' : 'bg-red-950/40 text-red-300 border border-red-500/30'
                            }`}>
                              <strong>{isCorrect ? '✓ Benar! ' : '✗ Belum tepat. '}</strong>
                              {q.explanation}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quiz Submit Button & Score Display */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.03]">
                {!quizSubmitted ? (
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    disabled={Object.keys(userAnswers).length === 0}
                    className="rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-slate-950 transition-all hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    Periksa Jawaban Kuis
                  </button>
                ) : (
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-amber-400" />
                    <div>
                      <span className="text-sm text-slate-400">Skor Anda:</span>
                      <p className="text-sm font-bold text-white font-mono">
                        {calculateScore()} dari {MODULE_1_QUIZ.length} benar
                      </p>
                    </div>
                  </div>
                )}

                {quizSubmitted && (
                  <button
                    onClick={() => {
                      setQuizSubmitted(false);
                      setUserAnswers({});
                    }}
                    className="text-sm text-amber-300 hover:text-white underline cursor-pointer"
                  >
                    Ulangi Kuis
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Previous / Next Navigation Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                if (currentIndex > 0) {
                  setSelectedTopicId(MODULE_1_SUBTOPICS[currentIndex - 1].id);
                  window.scrollTo({ top: 180, behavior: 'smooth' });
                }
              }}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Subtopik Sebelumnya</span>
            </button>

            {currentIndex < MODULE_1_SUBTOPICS.length - 1 ? (
              <button
                onClick={() => {
                  setSelectedTopicId(MODULE_1_SUBTOPICS[currentIndex + 1].id);
                  window.scrollTo({ top: 180, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-5 py-2 text-sm font-semibold text-white transition-all cursor-pointer"
              >
                <span>Subtopik Selanjutnya</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={onGoToNextModule}
                className="flex items-center gap-2 rounded-full bg-amber-400 hover:bg-amber-300 px-6 py-2.5 text-sm font-semibold text-slate-950 transition-all cursor-pointer shadow-lg shadow-amber-500/20"
              >
                <span>Lanjut ke Modul 2: Membaca Tren</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
