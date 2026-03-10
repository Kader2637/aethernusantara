"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ========================================================
// COMPONENT 1: SKELETON CARD (UNTUK LOADING STATE)
// ========================================================
const PortfolioSkeleton = () => {
  return (
    <div className="border-2 border-slate-200 bg-white rounded-[2rem] p-6 flex flex-col h-full animate-pulse shadow-sm">
      <div className="aspect-video bg-slate-200 rounded-xl mb-6 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
          style={{ 
            animation: 'shimmer 1.5s infinite',
            transform: 'translateX(-100%)'
          }}
        />
      </div>
      <div className="space-y-3 flex-1">
        <div className="h-4 bg-slate-200 rounded w-1/3" />
        <div className="h-7 bg-slate-300 rounded w-3/4" />
        <div className="h-4 bg-slate-200 rounded w-full" />
        <div className="h-4 bg-slate-200 rounded w-5/6" />
      </div>
      <div className="h-12 bg-slate-200 rounded-xl mt-8" />
    </div>
  );
};

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const filters = [
    { id: "all", label: "Semua Karya", icon: "🌐" },
    { id: "innovation", label: "Inovasi", icon: "💡" },
    { id: "dijual", label: "Template Dijual", icon: "🛒" }
  ];

  const projects = [
    {
      id: 1, title: "Innovate OS", category: "innovation", tag: "Web Intelligence", color: "brand",
      image: "/project/innovateos.png", link: "https://innovate-os.vercel.app/",
      desc: "Platform kecerdasan lingkungan & disaster simulation untuk edukasi karbon.", price: null
    },
    {
      id: 2, title: "TaniTrade", category: "innovation", tag: "Agriculture App", color: "emerald",
      image: "/project/tanitrade.png", link: "https://tanitrade.netlify.app/",
      desc: "Marketplace modern yang menghubungkan rantai pasok hasil tani Indonesia.", price: null
    },
    {
      id: 3, title: "Green Guard", category: "innovation", tag: "Eco Tech", color: "cyan",
      image: "/project/greenguard.png", link: "https://green-guard-one.vercel.app/",
      desc: "Sistem monitoring keberlanjutan alam untuk perlindungan lingkungan digital.", price: null
    },
    {
      id: 4, title: "Aurora Travel", category: "dijual", tag: "Premium Template", color: "brand",
      image: "/project/auroratravel.png", link: "https://skypathtravel.netlify.app/",
      desc: "Website Agency Travel eksklusif dengan sistem booking terintegrasi.", price: 850000
    },
    {
      id: 5, title: "IT Solutions", category: "dijual", tag: "Agency Template", color: "indigo",
      image: "/project/itdevsolutions.png", link: "https://it-dev-solutions.vercel.app/",
      desc: "Website landing page profesional untuk perusahaan IT atau Software House.", price: 650000
    },
    {
      id: 6, title: "EcoHacks UI", category: "dijual", tag: "Hackathon UI", color: "emerald",
      image: "/project/ecohacks.png", link: "https://ecohacksgreen.vercel.app/",
      desc: "Desain antarmuka bersih bertema lingkungan untuk event sustainability.", price: 550000
    }
  ];

  const getBadgeStyle = (color) => {
    const styles = {
      brand: "bg-brand-100 text-brand-700",
      emerald: "bg-emerald-100 text-emerald-700",
      cyan: "bg-cyan-100 text-cyan-700",
      indigo: "bg-indigo-100 text-indigo-700",
    };
    return styles[color] || "bg-slate-200 text-slate-700";
  };

  const handleBuy = (templateName, price) => {
    const formattedPrice = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
    const waText = `Halo AETHER CODE! 👋\n\nSaya tertarik untuk membeli template website berikut:\n\n📂 Item: ${templateName}\n💰 Harga: ${formattedPrice}\n\nMohon instruksi selanjutnya. Terima kasih!`;
    window.open(`https://wa.me/6281238193238?text=${encodeURIComponent(waText)}`, '_blank');
  };

  const filteredProjects = projects.filter(p => activeFilter === "all" || p.category === activeFilter);

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    hover: {
      y: -10,
      scale: 1.02,
      rotateX: 2,
      rotateY: -2,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <main className="bg-white min-h-screen font-['Plus_Jakarta_Sans',sans-serif] selection:bg-brand-500 selection:text-white overflow-hidden text-slate-900">
      
      {/* 1. ANIMATION STYLES */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes shimmer {
            100% { transform: translateX(100%); }
          }
        `
      }} />

      {/* 2. BACKGROUND BLUEPRINT */}
      <div className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          opacity: 0.4
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/95 to-white" />
      </div>
      
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-brand-500/10 blur-[130px] rounded-full pointer-events-none z-0" />

      {/* 3. HERO SECTION */}
      <section className="relative pt-40 pb-12 md:pt-48 md:pb-20 overflow-hidden px-6 z-10">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center gap-3 px-6 py-2.5 bg-slate-950 text-white text-[10px] font-black uppercase tracking-[0.4em] mb-10 shadow-xl"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-pulse" />
            Showcase & Produk
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-[6.5rem] lg:text-[8.5rem] font-[900] text-slate-900 tracking-tighter leading-[0.8] mb-10 uppercase italic"
          >
            KARYA & <br />
            <span className="relative inline-block mt-3">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-500 to-brand-500 drop-shadow-sm"> KAMI.</span>
              <span 
                className="absolute -inset-0.5 z-0 text-transparent uppercase opacity-30 select-none animate-pulse"
                style={{ WebkitTextStroke: '2px #0f172a' }}
              >
                {" "}KAMI.
              </span>
              <motion.span 
                initial={{ scaleX: 0 }} 
                animate={{ scaleX: 1 }} 
                transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[6px] md:h-[12px] bg-slate-950 origin-left"
              />
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.4 }} 
            className="text-xl text-slate-500 font-bold leading-relaxed max-w-3xl mx-auto"
          >
            Eksplorasi portofolio proyek kami atau miliki <i>source code</i> template premium buatan AETHER CODE untuk mempercepat bisnis Anda.
          </motion.p>
        </div>
      </section>

      {/* 4. FILTER BUTTONS */}
      <div className="sticky top-[70px] md:top-[90px] z-40 py-5 bg-white/70 backdrop-blur-2xl border-y border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 bg-slate-100/80 p-1.5 rounded-2xl w-fit mx-auto border border-slate-200/60 relative">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`relative px-7 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-colors duration-300 flex items-center gap-2 z-10 ${isActive ? "text-white" : "text-slate-500 hover:text-slate-900"}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterBg"
                      className="absolute inset-0 bg-slate-950 rounded-xl -z-10 shadow-lg"
                      transition={{ type: "spring", stiffness: 300, damping: 28 }}
                    />
                  )}
                  <span className="text-lg leading-none">{filter.icon}</span> {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 5. GRID SECTION */}
      <section className="py-16 md:py-24 relative z-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10" style={{ perspective: "1000px" }}>
            <AnimatePresence mode="popLayout">
              {isLoading ? (
                [...Array(6)].map((_, index) => (
                  <PortfolioSkeleton key={`skeleton-${index}`} />
                ))
              ) : (
                filteredProjects.map((project) => {
                  const isDijual = project.category === "dijual";
                  return (
                    <motion.div
                      key={project.id}
                      layout
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      whileHover="hover"
                      className={`group bg-white rounded-[2rem] overflow-hidden flex flex-col cursor-pointer transition-shadow duration-300 ${isDijual ? 'border-2 border-brand-500 shadow-xl shadow-brand-500/15' : 'border-2 border-slate-200 shadow-md hover:border-slate-300 hover:shadow-2xl'}`}
                    >
                      <div className="aspect-[4/3] md:aspect-video relative bg-slate-100 overflow-hidden border-b-2 border-slate-100">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 ease-[0.16, 1, 0.3, 1] group-hover:scale-110" 
                        />
                        {isDijual && (
                          <div className="absolute top-4 left-4 px-4 py-2 bg-brand-600 text-white text-[10px] font-black rounded-lg shadow-lg uppercase tracking-widest animate-pulse border border-white/20 z-10">
                            🔥 Template Dijual
                          </div>
                        )}
                      </div>

                      <div className="p-6 md:p-8 flex flex-col flex-1">
                        <div className="mb-4">
                          <span className={`inline-block px-3 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-md ${getBadgeStyle(project.color)}`}>
                            {project.tag}
                          </span>
                        </div>

                        <h3 className="text-2xl font-[900] text-slate-900 mb-3 tracking-tight group-hover:text-brand-600 transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-sm text-slate-500 font-bold leading-relaxed mb-8 flex-1">
                          {project.desc}
                        </p>

                        <div className="pt-6 mt-auto border-t-2 border-slate-100">
                          {isDijual ? (
                            <div className="flex flex-col gap-4">
                              <div className="flex items-center justify-between">
                                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Harga Source Code</p>
                                <p className="text-2xl font-black text-brand-600 animate-pulse">
                                  {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(project.price)}
                                </p>
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="py-3.5 bg-slate-100 text-slate-700 rounded-xl font-black text-[11px] uppercase tracking-wider text-center hover:bg-slate-200 transition-colors border-2 border-slate-200 flex items-center justify-center gap-1.5">
                                  Live Demo
                                </a>
                                <button onClick={() => handleBuy(project.title, project.price)} className="py-3.5 bg-slate-950 text-white rounded-xl font-black text-[11px] uppercase tracking-wider text-center hover:bg-brand-600 transition-all shadow-md active:scale-95">
                                  Beli Sekarang
                                </button>
                              </div>
                            </div>
                          ) : (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-slate-100 text-slate-900 rounded-xl font-black text-xs uppercase tracking-widest flex justify-center items-center gap-2 border-2 border-slate-200 group-hover:border-slate-950 active:scale-95">
                              Kunjungi Website
                              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </AnimatePresence>
          </div>

          {!isLoading && filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24 bg-slate-50 rounded-3xl border-2 border-slate-100 border-dashed">
              <p className="text-3xl mb-4">🤷‍♂️</p>
              <p className="text-slate-500 font-bold text-lg">Belum ada karya di kategori ini.</p>
              <button onClick={() => setActiveFilter("all")} className="mt-6 text-sm font-bold text-brand-600 hover:text-brand-700">Tampilkan Semua Karya</button>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}