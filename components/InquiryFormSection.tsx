'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

export const InquiryFormSection: React.FC = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="relative py-16 md:py-24 border-t border-white/5 bg-[#0a0d12] overflow-hidden">
      {/* Background soft glow */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[400px] bg-gradient-to-tl from-amber-500/10 via-orange-500/5 to-transparent blur-3xl opacity-60" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-amber-400 bg-amber-500/10 border border-amber-500/20">
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Tanya Jawab Pemula</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ingin mulai belajar, tetapi masih ada materi yang membingungkan?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Formulir ini masih berupa demo. Anda tetap dapat membaca materi dan glosarium untuk menjawab pertanyaan dasar tentang pasar modal atau pembacaan tren harga.
            </p>

            <div className="pt-2 text-sm text-slate-400">
              ✓ Formulir demo · Tidak ada data yang dikirim ke server.
            </div>
          </div>

          {/* Right Column: Form matching reference image layout */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 sm:p-8 shadow-2xl relative">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-sm uppercase tracking-wider font-semibold text-amber-400 font-mono mb-4">
                    Contoh Formulir Pertanyaan
                  </h3>

                  <div>
                    <label htmlFor="inquiry-name" className="block text-sm font-medium text-slate-300 mb-1.5">
                      Nama Anda
                    </label>
                    <input
                      id="inquiry-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry-contact" className="block text-sm font-medium text-slate-300 mb-1.5">
                      Email atau Nomor WhatsApp
                    </label>
                    <input
                      id="inquiry-contact"
                      name="contact"
                      type="text"
                      autoComplete="email"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="Contoh: budi@gmail.com atau 0812xxxx"
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry-message" className="block text-sm font-medium text-slate-300 mb-1.5">
                      Pertanyaan atau Topik yang Ingin Dijelaskan
                    </label>
                    <textarea
                      id="inquiry-message"
                      name="message"
                      required
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tuliskan pertanyaan Anda, misalnya: 'Bagaimana cara membedakan pantulan sementara dengan awal tren naik baru?'"
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-400 hover:bg-amber-300 py-3 text-sm font-bold text-slate-950 transition-all cursor-pointer shadow-lg shadow-amber-500/20"
                    >
                      <span>Kirim (Demo)</span>
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-8 text-center space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Terima kasih, {name}.
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Formulir ini masih berupa demo, jadi pesan Anda belum terkirim ke mana pun. Gunakan materi dan glosarium yang tersedia sebagai rujukan belajar.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setContact('');
                      setMessage('');
                    }}
                    className="mt-4 text-sm font-medium text-amber-400 hover:text-white underline cursor-pointer"
                  >
                    Kirim Pertanyaan Lain
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
