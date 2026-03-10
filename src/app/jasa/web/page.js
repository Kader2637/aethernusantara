"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function JasaWebPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState({ name: "", price: 0 });
    const [formData, setFormData] = useState({ name: "", desc: "", offer: "" });
    const [errorPrice, setErrorPrice] = useState(false);

    const services = [
        { id: 1, title: "Undangan Digital", type: "Event", icon: "💌", theme: "pink", price: 75000, desc: "Web undangan pernikahan modern dengan fitur RSVP, galeri foto, & musik otomatis." },
        { id: 2, title: "Landing Page", type: "Sales", icon: "🚀", theme: "orange", price: 150000, desc: "Halaman tunggal optimasi konversi tinggi untuk kampanye iklan atau produk baru." },
        { id: 3, title: "Web Portfolio", type: "Personal", icon: "👨‍💻", theme: "purple", price: 100000, desc: "Tingkatkan personal branding dan karir Anda dengan CV digital interaktif nan elegan." },
        { id: 4, title: "Company Profile", type: "Corporate", icon: "🏢", theme: "brand", price: 350000, desc: "Kredibilitas perusahaan dengan web multi-halaman profesional & Form Kontak dinamis.", isFeatured: true },
        { id: 5, title: "Web Katalog", type: "F&B", icon: "🍔", theme: "yellow", price: 250000, desc: "Katalog digital estetik untuk produk/menu, terhubung langsung ke order WhatsApp." },
        { id: 6, title: "Blog & Artikel", type: "Media", icon: "📝", theme: "teal", price: 400000, desc: "Platform berita/blog dilengkapi panel admin untuk manajemen konten mandiri." },
        { id: 7, title: "E-Commerce", type: "Store", icon: "🛒", theme: "indigo", price: 800000, desc: "Toko online dengan keranjang belanja, kalkulasi ongkir, & checkout otomatis." },
        { id: 8, title: "Sistem Reservasi", type: "System", icon: "📅", theme: "cyan", price: 1000000, desc: "Website booking jadwal jasa, hotel, tiket, atau klinik dengan fitur kalender." },
        { id: 9, title: "Web App Dashboard", type: "Complex", icon: "📈", theme: "emerald", price: 1500000, desc: "Sistem Informasi Manajemen, Aplikasi Kasir (POS), atau Pendataan Database.", isFeatured: true },
        { id: 10, title: "Custom Project", type: "Idea", icon: "⚙️", theme: "slate", price: "Flexible", desc: "Punya ide aplikasi luar biasa? Mari diskusikan fitur dan harganya bersama kami." }
    ];

    // Helper untuk styling Icon yang aman dari PurgeCSS
    const getIconStyle = (themeName, isFeatured) => {
        if (isFeatured) return "bg-white text-slate-900 shadow-md";
        if (themeName === "slate") return "bg-slate-800 text-white";

        const styles = {
            pink: "bg-pink-50 text-pink-600 border border-pink-100",
            orange: "bg-orange-50 text-orange-600 border border-orange-100",
            purple: "bg-purple-50 text-purple-600 border border-purple-100",
            brand: "bg-blue-50 text-blue-600 border border-blue-100",
            yellow: "bg-yellow-50 text-yellow-600 border border-yellow-100",
            teal: "bg-teal-50 text-teal-600 border border-teal-100",
            indigo: "bg-indigo-50 text-indigo-600 border border-indigo-100",
            cyan: "bg-cyan-50 text-cyan-600 border border-cyan-100",
            emerald: "bg-emerald-50 text-emerald-600 border border-emerald-100"
        };
        return styles[themeName] || "bg-slate-50 text-slate-600";
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
        const waText = `Halo tim AETHER CODE! 👋\n\nSaya tertarik mengajukan penawaran untuk jasa *${selectedService.title}*.\n\n👤 *Nama/Instansi:* ${formData.name}\n📝 *Deskripsi Request:*\n${formData.desc}\n\n💰 *Penawaran Harga:* ${formattedOffer}\n\nApakah project ini memungkinkan untuk didiskusikan lebih lanjut?`;
        window.open(`https://wa.me/6281238193238?text=${encodeURIComponent(waText)}`, '_blank');
        setIsModalOpen(false);
    };

    return (
        <main className="bg-[#f8fafc] min-h-screen font-['Plus_Jakarta_Sans',sans-serif] selection:bg-brand-500 selection:text-white">
            <div className="fixed inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                    opacity: 0.3
                }}>
                {/* Masking: Kotak-kotak memudar perlahan ke bagian bawah halaman */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white"></div>
            </div>

            {/* AMBIENT GLOW BIRU DI TENGAH */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] bg-brand-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
            {/* 1. HERO SECTION - CLEAN & CENTERED */}
            <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden px-6">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-brand-400/20 blur-[100px] rounded-full pointer-events-none z-0"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 shadow-sm rounded-full text-xs font-bold text-slate-600 mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                        </span>
                        Katalog Layanan Web
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-[7rem] lg:text-[8.5rem] font-[900] text-slate-900 tracking-tighter leading-[0.85] mb-10 md:mb-14 uppercase italic"
                    >
                        ARSITEKTUR <br />
                        <span className="relative inline-block mt-2 md:mt-4">
                            {/* Teks Outline "WEB" */}
                            <span className="text-transparent" style={{ WebkitTextStroke: '2px #0f172a' }}>WEB</span>

                            {/* Teks Gradient "MODERN." */}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-indigo-500 to-cyan-400 drop-shadow-sm">
                                {" "}MODERN.
                            </span>

                            {/* Garis Bawah Animasi */}
                            <motion.span
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                                className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[4px] md:h-[8px] bg-gradient-to-r from-brand-500 to-cyan-400 origin-left"
                            ></motion.span>
                        </span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        Dari landing page interaktif hingga sistem manajemen kompleks. Kami merancang arsitektur kode modern dengan performa tinggi.
                    </motion.p>
                </div>
            </section>

            {/* 2. SERVICES GRID - PERFECTLY RESPONSIVE & SYMMETRICAL */}
            {/* 3. SERVICES GRID - PERFECTLY RESPONSIVE & SYMMETRICAL + MEGA CUSTOM BANNER */}
            <section className="pb-32 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                        {services.map((svc, i) => {
                            const isDark = svc.color === "slate" || svc.isFeatured;
                            const isCustom = svc.id === 10; // Cek apakah ini kartu Custom Project

                            // ========================================================
                            // RENDER KHUSUS: KARTU CUSTOM PROJECT (MEGA BANNER)
                            // ========================================================
                            if (isCustom) {
                                return (
                                    <motion.div
                                        key={svc.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: i * 0.05 }}
                                        onClick={() => handleOpenModal(svc)}
                                        className="md:col-span-2 lg:col-span-3 group relative rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-slate-800 bg-slate-950 hover:bg-slate-900 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 cursor-pointer overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:border-brand-500"
                                    >
                                        {/* Background Tech Effects */}
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(14,165,233,0.15),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-600 via-indigo-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700 z-10"></div>

                                        {/* Kiri: Info */}
                                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 flex-1">
                                            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-white/5 border border-white/10 text-brand-400 rounded-[1.5rem] flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                                                {svc.icon}
                                            </div>
                                            <div>
                                                <span className="inline-block px-3 py-1 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-[10px] font-black uppercase tracking-widest rounded-full mb-3">
                                                    💡 Punya Visi Lain?
                                                </span>
                                                <h3 className="text-3xl md:text-4xl font-[900] text-white tracking-tight mb-2 group-hover:text-brand-400 transition-colors">
                                                    {svc.title}
                                                </h3>
                                                <p className="text-sm md:text-base font-medium text-slate-400 leading-relaxed max-w-xl">
                                                    {svc.desc}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Kanan: Action Button */}
                                        <div className="relative z-10 shrink-0 w-full md:w-auto flex flex-col items-start md:items-end border-t border-slate-800 md:border-t-0 pt-6 md:pt-0">
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Estimasi Budget</p>
                                            <p className="text-2xl md:text-3xl font-black text-white mb-4">Flexible</p>
                                            <button className="w-full md:w-auto px-8 py-4 bg-brand-600 text-white font-bold rounded-xl flex items-center justify-center gap-3 group-hover:bg-white group-hover:text-slate-900 transition-all shadow-[0_10px_20px_rgba(14,165,233,0.3)]">
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
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: i * 0.05 }}
                                    onClick={() => handleOpenModal(svc)}
                                    className={`group relative flex flex-col h-full rounded-[2rem] p-8 border hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden ${cardBg}`}
                                >
                                    {/* Subtle Top Accent Line on Hover */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>

                                    {/* Top Section: Icon & Category */}
                                    <div className="flex justify-between items-start mb-8">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110 ${getIconStyle(svc.theme, isDark)}`}>
                                            {svc.icon}
                                        </div>
                                        <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${isDark ? 'bg-white/10 text-white' : 'bg-slate-50 text-slate-500 border border-slate-100'}`}>
                                            {svc.isFeatured ? "👑 Premium" : svc.type}
                                        </span>
                                    </div>

                                    {/* Middle Section: Content */}
                                    <div className="flex-1">
                                        <h3 className={`text-2xl font-[900] tracking-tight mb-3 group-hover:text-brand-500 transition-colors ${textTitle}`}>
                                            {svc.title}
                                        </h3>
                                        <p className={`text-sm font-medium leading-relaxed ${textDesc}`}>
                                            {svc.desc}
                                        </p>
                                    </div>

                                    {/* Bottom Section: Price & Action */}
                                    <div className={`mt-8 pt-6 border-t flex items-end justify-between ${borderDivider}`}>
                                        <div>
                                            <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Estimasi Harga</p>
                                            <p className={`text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                                {formatPrice(svc.price)}
                                            </p>
                                        </div>
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isDark ? 'bg-white/10 text-white group-hover:bg-brand-500' : 'bg-slate-50 text-slate-400 group-hover:bg-brand-500 group-hover:text-white'}`}>
                                            <svg className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}

                    </div>
                </div>
            </section>

            {/* 3. MODAL POPUP - CLEAN & HIGH CONVERTING */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[300] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md cursor-pointer"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.3 }}
                            className="relative w-full max-w-lg bg-white rounded-[2rem] p-6 md:p-8 shadow-2xl border border-slate-100 z-10 flex flex-col max-h-[90vh]"
                        >
                            {/* Header Modal */}
                            <div className="flex justify-between items-center mb-6 pb-6 border-b border-slate-100 shrink-0">
                                <div>
                                    <h3 className="text-2xl font-[900] text-slate-900 tracking-tight">Formulir Order</h3>
                                    <p className="text-sm font-medium text-slate-500 mt-1">Diskusikan proyek Anda bersama kami.</p>
                                </div>
                                <button onClick={() => setIsModalOpen(false)} className="w-10 h-10 bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-900 rounded-full flex items-center justify-center transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </button>
                            </div>

                            {/* Scrollable Form Area */}
                            <div className="overflow-y-auto overflow-x-hidden pr-2 custom-scrollbar">
                                {/* Card Target */}
                                <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl mb-6 flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Layanan Terpilih</p>
                                        <p className="font-black text-slate-900">{selectedService.title}</p>
                                    </div>
                                    <div className="text-3xl">{selectedService.icon}</div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-2">Nama Klien / Instansi <span className="text-red-500">*</span></label>
                                        <input type="text" required placeholder="Masukkan nama Anda..."
                                            value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-2">Penjelasan Proyek <span className="text-red-500">*</span></label>
                                        <textarea required rows="3" placeholder="Ceritakan fitur atau referensi web yang Anda inginkan..."
                                            value={formData.desc} onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                                            className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-2">Ajukan Anggaran (Rp) <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">Rp</span>
                                            <input type="number" required min="75000" placeholder="Minimal 75000"
                                                value={formData.offer} onChange={(e) => setFormData({ ...formData, offer: e.target.value })}
                                                className={`w-full pl-12 pr-4 py-3.5 bg-white border rounded-xl text-base font-black text-slate-900 focus:outline-none transition-all
                          ${errorPrice ? 'border-red-500 focus:ring-4 focus:ring-red-500/10' : 'border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10'}
                        `}
                                            />
                                        </div>
                                        {errorPrice && <p className="text-xs font-bold text-red-500 mt-2">Maaf, penawaran minimal adalah Rp 75.000</p>}
                                    </div>

                                    {/* Sticky Button di bawah */}
                                    <div className="pt-2 pb-1">
                                        <button type="submit" className="w-full py-4 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-brand-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex justify-center items-center gap-2 group">
                                            Kirim via WhatsApp
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Custom CSS untuk scrollbar modal biar rapi */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}} />
        </main>
    );
}