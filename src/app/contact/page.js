"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [activeService, setActiveService] = useState("Web Development");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const services = ["Web Development", "Video Editing", "UI/UX Design", "PPT Design", "Document", "Lainnya"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const waText = `Halo AETHER CODE! 👋\n\n*NEW PROJECT INQUIRY*\n--------------------------\n👤 *Nama:* ${formData.name}\n📧 *Email:* ${formData.email}\n🛠️ *Layanan:* ${activeService}\n\n*PESAN:* \n${formData.message}\n--------------------------\nMohon feedback-nya. Terima kasih!`;
    
    // Nomor WA sesuai request lo
    window.open(`https://wa.me/6281238193238?text=${encodeURIComponent(waText)}`, '_blank');
  };

  return (
    <main className="bg-white min-h-screen font-['Plus_Jakarta_Sans',sans-serif] text-slate-900 overflow-hidden">
      
      {/* 1. BACKGROUND ARSITEKTUR */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.4]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-brand-500/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <section className="relative z-10 pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* HEADER - BOLD & CENTERED */}
          <div className="text-center mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-5 py-2 bg-slate-950 text-white text-[10px] font-black uppercase tracking-[0.5em] mb-8 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse inline-block mr-2" />
              Get In Touch
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-6xl md:text-[8rem] font-[900] tracking-tighter leading-[0.8] uppercase italic mb-8"
            >
              MARI <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #0f172a' }}>KOLABORASI.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-slate-500 font-bold max-w-2xl mx-auto leading-relaxed">
              Punya ide besar yang ingin dieksekusi? Kirim pesan dan biarkan tim AETHER CODE merancang solusinya untuk Anda.
            </motion.p>
          </div>

          {/* FORM AREA - CENTERED & MINIMALIST */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
            className="bg-white/40 backdrop-blur-2xl border-2 border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-[0_50px_100px_rgba(0,0,0,0.04)] relative overflow-hidden"
          >
            {/* Aksen Garis Blueprint di Form */}
            <div className="absolute top-0 left-0 w-20 h-1 bg-brand-600" />
            <div className="absolute top-0 left-0 w-1 h-20 bg-brand-600" />

            <form onSubmit={handleSubmit} className="space-y-12">
              
              {/* INPUT NAMA & EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Nama Lengkap</label>
                  <input 
                    type="text" required placeholder="Budi Pratama"
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b-2 border-slate-200 py-4 text-xl font-bold focus:outline-none focus:border-brand-600 transition-all placeholder:text-slate-200"
                  />
                </div>
                <div className="relative group">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Alamat Email</label>
                  <input 
                    type="email" required placeholder="budi@email.com"
                    value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-b-2 border-slate-200 py-4 text-xl font-bold focus:outline-none focus:border-brand-600 transition-all placeholder:text-slate-200"
                  />
                </div>
              </div>

              {/* SELEKSI LAYANAN - CHIPS */}
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 ml-1">Pilih Layanan Utama</label>
                <div className="flex flex-wrap gap-3">
                  {services.map((s) => (
                    <button
                      key={s} type="button"
                      onClick={() => setActiveService(s)}
                      className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 border-2
                        ${activeService === s 
                          ? "bg-slate-950 border-slate-950 text-white shadow-xl scale-105" 
                          : "bg-white border-slate-200 text-slate-500 hover:border-brand-600 hover:text-brand-600"
                        }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* PESAN */}
              <div className="relative group">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Detail Proyek / Pesan</label>
                <textarea 
                  required rows="3" placeholder="Ceritakan ide atau masalah yang ingin Anda pecahkan..."
                  value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-transparent border-b-2 border-slate-200 py-4 text-xl font-bold focus:outline-none focus:border-brand-600 transition-all resize-none placeholder:text-slate-200"
                />
              </div>

              {/* TOMBOL SUBMIT */}
              <div className="flex justify-center pt-6">
                <button 
                  type="submit"
                  className="group relative w-full md:w-auto px-16 py-6 bg-slate-950 text-white rounded-2xl font-black text-xs uppercase tracking-[0.4em] overflow-hidden transition-all hover:shadow-[0_30px_60px_rgba(14,165,233,0.3)] active:scale-95"
                >
                  <div className="absolute inset-0 bg-brand-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 flex items-center justify-center gap-4">
                    Kirim Data via WhatsApp
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </motion.div>

          {/* QUICK INFO CARDS - AT BOTTOM */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "WhatsApp Chat", val: "+62 812 3819 3238", icon: "📱" },
              { label: "Email Support", val: "hello@aethercode.com", icon: "✉️" },
              { label: "Studio Location", val: "Malang, Indonesia", icon: "📍" }
            ].map((info, idx) => (
              <motion.div 
                key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + (idx * 0.1) }}
                className="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {info.icon}
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{info.label}</p>
                <p className="font-bold text-slate-900 leading-tight">{info.val}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}