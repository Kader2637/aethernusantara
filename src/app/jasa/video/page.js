"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function JasaVideoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState({ name: "", price: 0 });
  const [formData, setFormData] = useState({ name: "", desc: "", offer: "" });
  const [errorPrice, setErrorPrice] = useState(false);

  const services = [
    { id: 1, title: "Short Content", type: "Viral", icon: "📱", theme: "rose", price: 75000, desc: "Editing Reels, TikTok, atau Shorts dengan transisi trendy & subtitles menarik." },
    { id: 2, title: "Wedding Cinematic", type: "Event", icon: "💍", theme: "red", price: 500000, desc: "Grading warna premium & alur cerita romantis untuk momen sakral Anda." },
    { id: 3, title: "YouTube Editing", type: "Creator", icon: "🎥", theme: "orange", price: 200000, desc: "Editing vlog, review, atau edukasi dengan grafis dinamis & sound design." },
    { id: 4, title: "Company Profile", type: "Corporate", icon: "🏢", theme: "rose", price: 1000000, desc: "Presentasi bisnis profesional dengan narasi voice over & motion graphics kelas satu.", isFeatured: true },
    { id: 5, title: "Music Video Clip", type: "Art", icon: "🎵", theme: "purple", price: 750000, desc: "Sinkronisasi visual artistik dengan beat musik untuk karya orisinal Anda." },
    { id: 6, title: "Motion Graphics", type: "Animation", icon: "✨", theme: "orange", price: 300000, desc: "Animasi elemen grafis 2D untuk explainer video atau intro logo brand." },
    { id: 7, title: "Commercial Ads", type: "Sales", icon: "📺", theme: "red", price: 450000, desc: "Video iklan durasi pendek untuk kebutuhan promosi berbayar (IG/FB Ads)." },
    { id: 8, title: "Podcast Editing", type: "Talkshow", icon: "🎙️", theme: "amber", price: 250000, desc: "Multicam editing podcast, audio cleaning, & penambahan panel nama." },
    { id: 9, title: "Gaming Highlight", type: "Esports", icon: "🎮", theme: "orange", price: 150000, desc: "Editing montage gameplay dengan efek intens & sinkronisasi musik." },
    { id: 10, title: "Custom Project", type: "Idea", icon: "🎞️", theme: "slate", price: "Flexible", desc: "Ide video unik atau dokumenter? Kami bantu konsep dan eksekusinya." }
  ];

  const getIconStyle = (themeName, isFeatured) => {
    if (isFeatured) return "bg-white text-rose-600 shadow-md";
    if (themeName === "slate") return "bg-slate-800 text-white border border-slate-700";
    
    const styles = {
      rose: "bg-rose-50 text-rose-600 border border-rose-100",
      red: "bg-red-50 text-red-600 border border-red-100",
      orange: "bg-orange-50 text-orange-600 border border-orange-100",
      amber: "bg-amber-50 text-amber-600 border border-amber-100",
      purple: "bg-purple-50 text-purple-600 border border-purple-100"
    };
    return styles[themeName] || "bg-rose-50 text-rose-600 border border-rose-100";
  };

  const formatPrice = (price) => {
    if (price === "Flexible") return "Harga Menyesuaikan";
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
  };

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setFormData({ ...formData, offer: service.price !== "Flexible" ? service.price : "" });
    setErrorPrice(false);
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const offerValue = parseInt(formData.offer);

    if (offerValue < 75000 && selectedService.price !== "Flexible") {
      setErrorPrice(true); return;
    }

    const formattedOffer = formatPrice(offerValue);
    const waText = `Halo tim AETHER CODE! 👋\n\nSaya tertarik dengan jasa *${selectedService.title}*.\n\n👤 *Nama:* ${formData.name}\n📝 *Brief:* ${formData.desc}\n\n💰 *Tawaran:* ${formattedOffer}\n\nMohon info lanjutnya. Terima kasih!`;
    window.open(`https://wa.me/6281238193238?text=${encodeURIComponent(waText)}`, '_blank');
    setIsModalOpen(false);
  };

  return (
    <main className="bg-white min-h-screen font-['Plus_Jakarta_Sans',sans-serif] selection:bg-rose-500 selection:text-white">

      {/* 1. BACKGROUND GRID KOTAK-KOTAK (BLUEPRINT) */}
      <div className="fixed inset-0 z-0 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)', 
             backgroundSize: '60px 60px',
             opacity: 0.8
           }}>
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white"></div>
      </div>

      {/* AMBIENT GLOW ROSE DI TENGAH */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] bg-rose-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>


      {/* 2. HERO SECTION - CLEAN & BOLD */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden px-6">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} 
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} 
            className="inline-flex items-center justify-center gap-3 px-5 py-2 bg-slate-950 border border-slate-800 shadow-xl rounded-none text-[10px] font-black text-white uppercase tracking-[0.3em] mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            Katalog Video Studio
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }} 
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} 
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} 
            className="text-5xl md:text-[7rem] lg:text-[8.5rem] font-[900] text-slate-900 tracking-tighter leading-[0.85] mb-10 md:mb-14 uppercase italic"
          >
            KUALITAS <br /> 
            <span className="relative inline-block mt-2 md:mt-4">
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #0f172a' }}>VISUAL</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-500 to-orange-500 drop-shadow-sm">
                 {" "}SINEMATIK.
              </span>
              <motion.span 
                initial={{ scaleX: 0 }} 
                animate={{ scaleX: 1 }} 
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[4px] md:h-[8px] bg-gradient-to-r from-rose-600 to-orange-500 origin-left"
              ></motion.span>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3 }} 
            className="text-lg md:text-xl text-slate-500 font-bold leading-relaxed max-w-2xl mx-auto"
          >
            Dari konten viral TikTok hingga dokumenter perusahaan. Kami meramu setiap frame dengan storytelling yang kuat dan tajam.
          </motion.p>
        </div>
      </section>

      {/* 3. SERVICES GRID & MEGA CUSTOM BANNER */}
      <section className="pb-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {services.map((svc, i) => {
              const isDark = svc.color === "slate" || svc.isFeatured;
              const isCustom = svc.id === 10;

              // ========================================================
              // RENDER KHUSUS: KARTU CUSTOM PROJECT (MEGA BANNER)
              // ========================================================
              if (isCustom) {
                return (
                  <motion.div 
                    key={svc.id}
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                    onClick={() => handleOpenModal(svc)}
                    className="md:col-span-2 lg:col-span-3 group relative rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-slate-800 bg-slate-950 hover:bg-slate-900 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 cursor-pointer overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:border-rose-500"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(225,29,72,0.15),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-600 via-red-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700 z-10"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 flex-1">
                      <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-white/5 border border-white/10 text-rose-400 rounded-[1.5rem] flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                        {svc.icon}
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-black uppercase tracking-widest rounded-full mb-3">
                          💡 Visi Sinematik?
                        </span>
                        <h3 className="text-3xl md:text-4xl font-[900] text-white tracking-tight mb-2 group-hover:text-rose-400 transition-colors">
                          {svc.title}
                        </h3>
                        <p className="text-sm md:text-base font-medium text-slate-400 leading-relaxed max-w-xl">
                          {svc.desc}
                        </p>
                      </div>
                    </div>

                    <div className="relative z-10 shrink-0 w-full md:w-auto flex flex-col items-start md:items-end border-t border-slate-800 md:border-t-0 pt-6 md:pt-0">
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Estimasi Budget</p>
                      <p className="text-2xl md:text-3xl font-black text-white mb-4">Flexible</p>
                      <button className="w-full md:w-auto px-8 py-4 bg-rose-600 text-white font-bold rounded-xl flex items-center justify-center gap-3 group-hover:bg-white group-hover:text-slate-900 transition-all shadow-[0_10px_20px_rgba(225,29,72,0.3)]">
                        Diskusikan Konsep
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </button>
                    </div>
                  </motion.div>
                );
              }

              // ========================================================
              // RENDER REGULER: KARTU BIASA (ID 1-9)
              // ========================================================
              const cardBg = isDark ? "bg-slate-950 border-slate-800 shadow-[0_20px_40px_rgba(0,0,0,0.2)]" : "bg-white border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)]";
              const textTitle = isDark ? "text-white" : "text-slate-900";
              const textDesc = isDark ? "text-slate-400" : "text-slate-500";
              const borderDivider = isDark ? "border-slate-800" : "border-slate-100";

              return (
                <motion.div 
                  key={svc.id}
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                  onClick={() => handleOpenModal(svc)}
                  className={`group relative flex flex-col h-full rounded-[2rem] p-8 border hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden ${cardBg}`}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>

                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110 ${getIconStyle(svc.theme, isDark)}`}>
                      {svc.icon}
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${isDark ? 'bg-white/10 text-white' : 'bg-slate-50 text-slate-500 border border-slate-100'}`}>
                      {svc.isFeatured ? "👑 Premium" : svc.type}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className={`text-2xl font-[900] tracking-tight mb-3 group-hover:text-rose-600 transition-colors ${textTitle}`}>
                      {svc.title}
                    </h3>
                    <p className={`text-sm font-medium leading-relaxed ${textDesc}`}>
                      {svc.desc}
                    </p>
                  </div>

                  <div className={`mt-8 pt-6 border-t flex items-end justify-between ${borderDivider}`}>
                    <div>
                      <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Estimasi Harga</p>
                      <p className={`text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {formatPrice(svc.price)}
                      </p>
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isDark ? 'bg-white/10 text-white group-hover:bg-rose-600' : 'bg-slate-50 text-slate-400 group-hover:bg-rose-500 group-hover:text-white'}`}>
                      <svg className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </div>
                  </div>
                </motion.div>
              );
            })}

          </motion.div>
        </div>
      </section>

      {/* 4. MODAL POPUP - CYBERPUNK THEME */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg bg-white rounded-[2.5rem] p-6 md:p-8 shadow-2xl border border-slate-200 z-10 flex flex-col max-h-[90vh] overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-600 to-orange-500"></div>

              <div className="flex justify-between items-center mb-6 pb-6 border-b border-slate-100 shrink-0">
                <div>
                  <span className="inline-block px-3 py-1 bg-rose-50 text-rose-600 text-[9px] font-black uppercase tracking-widest rounded-full mb-3">
                    Project Request
                  </span>
                  <h3 className="text-3xl font-[900] text-slate-900 tracking-tight leading-none uppercase italic">Video <span className="text-transparent" style={{ WebkitTextStroke: '1px #0f172a' }}>Brief.</span></h3>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="w-10 h-10 bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-red-500 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>

              <div className="overflow-y-auto overflow-x-hidden pr-2 custom-scrollbar">
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Target Produksi</p>
                    <p className="font-black text-slate-900">{selectedService.title}</p>
                  </div>
                  <div className="text-3xl">{selectedService.icon}</div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">Nama Lengkap <span className="text-red-500">*</span></label>
                    <input type="text" required placeholder="Masukkan nama Anda..." 
                      value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-5 py-4 bg-white border-2 border-slate-200 rounded-2xl text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">Konsep & Referensi <span className="text-red-500">*</span></label>
                    <textarea required rows="3" placeholder="Sebutkan durasi, gaya editing, atau link referensi video yang Anda suka..." 
                      value={formData.desc} onChange={(e) => setFormData({...formData, desc: e.target.value})}
                      className="w-full px-5 py-4 bg-white border-2 border-slate-200 rounded-2xl text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 transition-all resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-rose-600 uppercase tracking-widest mb-2 ml-1">Penawaran Harga (Rp) <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <span className="absolute left-5 top-1/2 -translate-y-1/2 font-black text-slate-400">Rp</span>
                      <input type="number" required min="75000" placeholder="Minimal 75000"
                        value={formData.offer} onChange={(e) => setFormData({...formData, offer: e.target.value})}
                        className={`w-full pl-14 pr-5 py-4 bg-slate-50 border-2 rounded-2xl text-lg font-black text-slate-900 focus:outline-none transition-all
                          ${errorPrice ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' : 'border-slate-200 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 hover:border-slate-300'}
                        `}
                      />
                    </div>
                    {errorPrice && <p className="text-xs font-bold text-red-500 mt-2 ml-1">Maaf, penawaran minimal adalah Rp 75.000</p>}
                  </div>

                  <div className="pt-2 pb-1">
                    <button type="submit" className="w-full py-5 bg-slate-950 text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-rose-600 hover:shadow-[0_20px_40px_rgba(225,29,72,0.3)] hover:-translate-y-1 transition-all duration-300 flex justify-center items-center gap-2 group">
                      Kirim Brief Produksi
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                  </div>
                </form>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}} />
    </main>
  );
}