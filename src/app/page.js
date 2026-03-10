"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [heroTyped, setHeroTyped] = useState("");

  useEffect(() => {
    AOS.init({ once: false, mirror: true, offset: 50, duration: 800 });

    // Typewriter Original Logic
    const texts = ["YOUR BRAND", "YOUR PROJECT", "YOUR FUTURE", "YOUR VISION"];
    let textIndex = 0; let charIndex = 0; let isDeleting = false;
    let typeTimer;

    function type() {
      const full = texts[textIndex];
      setHeroTyped(isDeleting ? full.substring(0, charIndex - 1) : full.substring(0, charIndex + 1));

      let speed = isDeleting ? 50 : 150;
      if (!isDeleting && charIndex === full.length) { speed = 2000; isDeleting = true; }
      else if (isDeleting && charIndex === 0) { speed = 500; isDeleting = false; textIndex = (textIndex + 1) % texts.length; }
      charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
      typeTimer = setTimeout(type, speed);
    }
    type();
    return () => clearTimeout(typeTimer);
  }, []);

  return (
    <main>
      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center bg-white overflow-hidden pt-32 pb-20 md:pt-52 md:pb-32">

        {/* BACKGROUND TEXT ANIMATION (MARQUEE) */}
        <div className="absolute inset-0 flex flex-col justify-center pointer-events-none opacity-[0.03] md:opacity-[0.05] select-none z-0">
          <div className="flex whitespace-nowrap animate-marquee-slow text-[6rem] md:text-[15rem] font-black uppercase leading-none tracking-tighter">
            <span>AETHER CODE &nbsp; WEB &nbsp; UI/UX &nbsp; VIDEO &nbsp; INNOVATION &nbsp;</span>
            <span>AETHER CODE &nbsp; WEB &nbsp; UI/UX &nbsp; VIDEO &nbsp; INNOVATION &nbsp;</span>
          </div>
          <div className="flex whitespace-nowrap animate-marquee-reverse-slow text-[6rem] md:text-[15rem] font-black uppercase leading-none tracking-tighter mt-[-1rem] md:mt-[-4rem]">
            <span> &nbsp; CREATIVE &nbsp; STUDIO &nbsp; DIGITAL &nbsp; IMPACT &nbsp;</span>
            <span> &nbsp; CREATIVE &nbsp; STUDIO &nbsp; DIGITAL &nbsp; IMPACT &nbsp;</span>
          </div>
        </div>

        {/* BLUR DECORATION */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-brand-400/20 rounded-full blur-[80px] md:blur-[120px] -z-10 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
          <div className="flex flex-col items-center text-center">

            {/* BADGE */}
            <div className="mb-8 md:mb-10" data-aos="fade-down">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-50 border border-slate-200 shadow-sm transition-all hover:border-brand-400 cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
                </span>
                <span className="text-[10px] md:text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] md:tracking-[0.3em]">
                  Aether Code Studio
                </span>
              </div>
            </div>

            {/* MAIN HEADLINE */}
            <h1 className="text-5xl md:text-8xl lg:text-[8.5rem] font-black text-slate-900 tracking-tighter leading-[0.95] md:leading-[0.85] mb-10 flex flex-col items-center" data-aos="zoom-in">
              <span className="block">LEVEL UP</span>
              <span className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-blue-600 to-indigo-700 min-h-[1.1em] py-2">
                {heroTyped}
                <span className="w-[4px] md:w-[8px] h-[0.7em] bg-brand-600 ml-2 md:ml-4 animate-pulse"></span>
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-base md:text-2xl text-slate-500 max-w-2xl font-medium leading-relaxed mb-12 px-4" data-aos="fade-up" data-aos-delay="200">
              Kami mentransformasi visi menjadi <span className="text-slate-900 font-bold border-b-2 border-brand-400">Karya Digital</span> yang memikat hati penonton dan memudahkan pengguna.
            </p>

            {/* CTA BUTTON */}
            <div className="flex flex-col sm:flex-row items-center gap-6" data-aos="fade-up" data-aos-delay="400">
              <Link href="/contact" className="group relative px-10 py-5 md:px-14 md:py-6 bg-slate-900 text-white font-bold rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl transition-all duration-500 hover:shadow-brand-500/40 hover:-translate-y-1.5 active:scale-95">
                <div className="absolute inset-0 bg-brand-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                <span className="relative z-10 flex items-center gap-4 text-lg md:text-xl tracking-tight">
                  Mulai Kolaborasi
                  <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </Link>
            </div>

            {/* MOCKUP PREVIEW */}
            <div className="mt-24 md:mt-32 relative w-full max-w-5xl" data-aos="fade-up" data-aos-delay="600">
              <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-2 md:p-4 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden">
                <div className="aspect-video bg-slate-50 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative group">
                  <img src="/innovate-os.png" alt="Creative Space" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>

              {/* FLOATING ICONS (HIDDEN ON SMALL MOBILE OR SCALED) */}
              <div className="absolute -top-6 -right-2 md:-top-12 md:-right-6 w-16 h-16 md:w-24 md:h-24 bg-white rounded-xl md:rounded-[2rem] shadow-2xl flex items-center justify-center text-2xl md:text-4xl animate-float border border-slate-50">🎬</div>
              <div className="absolute -bottom-4 -left-2 md:-bottom-8 md:-left-8 w-16 h-16 md:w-24 md:h-24 bg-white rounded-xl md:rounded-[2rem] shadow-2xl flex items-center justify-center text-2xl md:text-4xl animate-float border border-slate-50" style={{ animationDelay: '2s' }}>💎</div>
            </div>

          </div>
        </div>
      </section>


      {/* MARQUEE TOOLS - RUNNING TEXT */}
      <div className="py-6 bg-white border-b border-slate-200 overflow-hidden flex relative shadow-sm">
        {/* Fade effect di sisi kiri dan kanan */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Kontainer yang dianimasikan */}
        <div className="flex animate-marquee whitespace-nowrap items-center opacity-70">

          {/* SET PERTAMA */}
          <div className="flex items-center space-x-12 px-6">
            <span className="text-xl font-extrabold text-slate-300 uppercase tracking-widest">PREMIERE PRO</span>
            <span className="text-slate-200">&bull;</span>
            <span className="text-xl font-extrabold text-slate-300 uppercase tracking-widest">AFTER EFFECTS</span>
            <span className="text-slate-200">&bull;</span>
            <span className="text-xl font-extrabold text-slate-300 uppercase tracking-widest">HTML5 & TAILWIND</span>
            <span className="text-slate-200">&bull;</span>
            <span className="text-xl font-extrabold text-slate-300 uppercase tracking-widest">FIGMA UI/UX</span>
            <span className="text-slate-200">&bull;</span>
            <span className="text-xl font-extrabold text-slate-300 uppercase tracking-widest">CAPCUT PRO</span>
            <span className="text-slate-200">&bull;</span>
          </div>

          {/* SET KEDUA (Duplikat persis untuk efek seamless) */}
          <div className="flex items-center space-x-12 px-6">
            <span className="text-xl font-extrabold text-slate-300 uppercase tracking-widest">PREMIERE PRO</span>
            <span className="text-slate-200">&bull;</span>
            <span className="text-xl font-extrabold text-slate-300 uppercase tracking-widest">AFTER EFFECTS</span>
            <span className="text-slate-200">&bull;</span>
            <span className="text-xl font-extrabold text-slate-300 uppercase tracking-widest">HTML5 & TAILWIND</span>
            <span className="text-slate-200">&bull;</span>
            <span className="text-xl font-extrabold text-slate-300 uppercase tracking-widest">FIGMA UI/UX</span>
            <span className="text-slate-200">&bull;</span>
            <span className="text-xl font-extrabold text-slate-300 uppercase tracking-widest">CAPCUT PRO</span>
            <span className="text-slate-200">&bull;</span>
          </div>

        </div>
      </div>

      {/* ABOUT SECTION */}
      {/* SECTION: ABOUT - CLEAN COMMUNITY VERSION */}
      <section id="about" className="py-32 bg-white relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
        {/* Latar Belakang - Hanya Glow Halus Tanpa Kotak-kotak */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-100/30 rounded-full blur-[120px] -z-10 animate-float"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Kiri: Visual Logo Centerpiece */}
            <div className="relative group" data-aos="fade-right">
              <div className="relative z-10 p-12 bg-slate-50 border border-slate-100 rounded-[3rem] flex items-center justify-center overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-brand-500/5">
                {/* Efek Cahaya Fokus */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <img
                  src="/logo.png"
                  alt="AETHER CODE Logo"
                  className="w-full h-auto object-contain max-w-[340px] relative z-10 transform group-hover:scale-105 group-hover:rotate-2 transition-transform duration-700"
                />
              </div>

              {/* Floating Card - Core Philosophy */}
              <div className="absolute -bottom-6 -right-6 p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-2xl z-20 max-w-[260px] border border-slate-800" data-aos="zoom-in" data-aos-delay="300">
                <div className="w-8 h-1 bg-brand-500 mb-4 rounded-full"></div>
                <p className="text-sm font-bold leading-relaxed text-slate-200 uppercase tracking-tight">
                  Mendorong batasan logika untuk menciptakan dampak digital nyata.
                </p>
              </div>
            </div>

            {/* Kanan: Content & Mission */}
            <div className="space-y-12" data-aos="fade-left">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-brand-600 font-black tracking-[0.5em] uppercase text-[10px]">Eksosistem IT</span>
                </div>
                <h3 className="text-5xl md:text-7xl font-[900] text-slate-900 tracking-tighter leading-[0.9] uppercase">
                  LEBIH DARI <br /> <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #0f172a' }}>KOMUNITAS.</span>
                </h3>
                <p className="mt-8 text-xl text-slate-500 font-bold leading-relaxed">
                  AETHER CODE adalah wadah kolaboratif bagi para pengembang, desainer, dan inovator muda untuk tumbuh bersama.
                </p>
              </div>

              {/* Filosofi Singkat */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:border-brand-500/20">
                  <span className="text-3xl mb-4 block">🚀</span>
                  <h4 className="text-lg font-[900] text-slate-900 mb-2 uppercase tracking-tight">Visi Sinergi</h4>
                  <p className="text-xs text-slate-500 font-bold leading-relaxed">Menyatukan berbagai potensi teknologi dalam satu jaringan yang solid dan terintegrasi.</p>
                </div>
                <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:border-brand-500/20">
                  <span className="text-3xl mb-4 block">💡</span>
                  <h4 className="text-lg font-[900] text-slate-900 mb-2 uppercase tracking-tight">Inovasi Terukur</h4>
                  <p className="text-xs text-slate-500 font-bold leading-relaxed">Fokus pada hasil karya yang tidak hanya fungsional secara teknis, tapi juga estetis.</p>
                </div>
              </div>

              {/* List Poin Identitas */}
              <div className="space-y-4 pt-6 border-t border-slate-100">
                {[
                  "Pusat Pengembangan Talenta Digital",
                  "Kolaborasi Projek Lintas Disiplin",
                  "Membangun Standar Baru Inovasi"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-brand-600 group-hover:scale-150 transition-transform"></div>
                    <span className="text-sm font-black text-slate-800 uppercase tracking-tighter transition-colors group-hover:text-brand-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-32 bg-white relative overflow-hidden border-t border-slate-100">

        {/* BACKGROUND DECORATION - KOTAK-KOTAK MINIMALIS */}
        <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '80px 80px' }}>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-100/30 rounded-full blur-[120px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 font-['Plus_Jakarta_Sans',sans-serif]">

          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8" data-aos="fade-up">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[3px] bg-brand-600 rounded-full"></span>
                <span className="text-brand-600 font-extrabold tracking-[0.4em] uppercase text-[10px]">Ekspertise Kami</span>
              </div>
              <h3 className="text-6xl md:text-8xl font-[900] text-slate-900 tracking-tighter leading-[0.85] uppercase italic">
                Layanan <br /> <span className="text-transparent" style={{ WebkitTextStroke: '2px #0ea5e9' }}>Unggulan.</span>
              </h3>
            </div>
            <p className="text-slate-500 font-bold text-sm max-w-[280px] leading-relaxed border-l-4 border-brand-500 pl-6 py-2">
              Solusi modern dengan standar industri global untuk transformasi digital bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Web Development", icon: "🌐", tag: "TECH", href: "/jasa-web", desc: "Website kustom, Landing Page, hingga Web Apps yang responsif dan super cepat." },
              { title: "UI/UX Design", icon: "💎", tag: "DESIGN", href: "/jasa-uiux", desc: "Antarmuka modern dengan pengalaman pengguna yang intuitif dan interaktif di Figma." },
              { title: "Video Production", icon: "🎬", tag: "MEDIA", href: "/jasa-video", desc: "Editing konten cinematic untuk brand awareness, reels, hingga iklan produk premium." },
              { title: "PPT Presentation", icon: "📊", tag: "BUSINESS", href: "/jasa-ppt", desc: "Slide premium untuk kebutuhan pitching investor, seminar, dan presentasi bisnis." },
              { title: "Document Service", icon: "📄", tag: "ADMIN", href: "/jasa-dokumen", desc: "Pengolahan data, penulisan laporan, dan administrasi dokumen profesional." }
            ].map((s, i) => (
              <Link
                href={s.href}
                key={i}
                className="group relative bg-white p-10 rounded-[2rem] border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(14,165,233,0.2)] hover:border-brand-500/30 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col justify-between h-full"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                {/* Hover Glow Effect */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-500/5 rounded-full blur-3xl group-hover:bg-brand-500/10 transition-all duration-500"></div>

                <div>
                  <div className="flex justify-between items-center mb-12">
                    <div className="w-14 h-14 bg-slate-50 text-brand-600 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm border border-slate-100">
                      {s.icon}
                    </div>
                    <span className="text-[10px] font-black text-slate-300 tracking-[0.3em] group-hover:text-brand-500 transition-colors uppercase">
                      0{i + 1}
                    </span>
                  </div>

                  <h4 className="text-2xl font-[900] text-slate-900 mb-4 uppercase tracking-tight leading-tight transition-all">
                    {s.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium mb-12">
                    {s.desc}
                  </p>
                </div>

                {/* Bottom Action Area */}
                <div className="flex items-center justify-between border-t border-slate-50 pt-8 mt-auto">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-black text-slate-400 group-hover:text-slate-900 uppercase tracking-widest transition-all">Lihat Detail</span>
                    <div className="w-0 h-[2px] bg-brand-600 group-hover:w-12 transition-all duration-500"></div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    <svg className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}

            {/* CUSTOM CTA CARD - DARK THEME */}
            <Link href="/contact" className="bg-slate-950 p-10 rounded-[2rem] flex flex-col justify-between items-start relative group overflow-hidden border border-slate-800 shadow-2xl hover:border-brand-500 transition-all duration-500 transform hover:-translate-y-2" data-aos="fade-up">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h4 className="text-3xl font-[900] text-white mb-4 uppercase tracking-tight italic">
                    Projek <br /> <span className="text-brand-500 underline underline-offset-8 decoration-2">Khusus?</span>
                  </h4>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">Punya ide gila? Diskusikan langsung dengan tim expert kami untuk solusi custom.</p>
                </div>

                <div className="mt-12 flex items-center gap-4 w-full">
                  <span className="flex-1 py-4 bg-brand-600 text-white font-black uppercase tracking-[0.2em] text-[10px] text-center rounded-xl group-hover:bg-white group-hover:text-slate-900 transition-all duration-500">
                    HUBUNGI KAMI
                  </span>
                  <div className="w-12 h-12 rounded-xl border border-slate-800 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path></svg>
                  </div>
                </div>
              </div>

              {/* Background Dekorasi */}
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-brand-600/10 blur-[80px] group-hover:bg-brand-600/20 transition-all"></div>
            </Link>

          </div>
        </div>
      </section>

      {/* ACADEMY SECTION */}
      {/* SECTION: ACADEMY - FULL RESPONSIVE FIX */}
      <section id="academy" className="py-24 md:py-40 bg-[#020617] relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">

        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-600/10 rounded-full blur-[80px] md:blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Header Section - RESPONSIVE FIX */}
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 md:mb-24 gap-6 text-center md:text-left" data-aos="fade-up">
            <div className="max-w-3xl w-full">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4 md:mb-6">
                <span className="w-8 md:w-10 h-[2px] bg-brand-500"></span>
                <span className="text-brand-500 font-black tracking-[0.3em] md:tracking-[0.5em] uppercase text-[9px] md:text-[10px]">Development Hub</span>
              </div>
              <h3 className="text-5xl md:text-8xl font-[900] text-white tracking-tighter leading-[0.9] md:leading-[0.8] uppercase">
                AETHER <br className="hidden md:block" />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px #f8fafc' }}>ACADEMY.</span>
              </h3>
            </div>
            <div className="w-full md:max-w-[300px] pt-2 md:pt-4">
              <p className="text-slate-400 font-bold text-xs md:text-sm leading-relaxed border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
                Kurikulum berbasis industri yang dirancang untuk mencetak talenta digital kompetitif.
              </p>
            </div>
          </div>

          {/* Grid Modul - Responsive Grid 1 Col (Mobile) to 3 Col (Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800/30 border border-slate-800/50">
            {[
              { title: "Laravel Backend", icon: "󰴐", desc: "Arsitektur server-side modern dengan skalabilitas tinggi." },
              { title: "Modern UI/UX", icon: "🎨", desc: "Seni antarmuka yang mengutamakan psikologi pengguna." },
              { title: "Utility-First CSS", icon: "⚡", desc: "Membangun sistem desain cepat dengan Tailwind CSS." },
              { title: "JS Logic & DOM", icon: "JS", desc: "Logika pemrograman fundamental untuk web interaktif." },
              { title: "SQL & Database", icon: "🗄️", desc: "Manajemen data efisien dan optimasi query tingkat lanjut." },
              { title: "Git & GitHub", icon: "🌳", desc: "Standardisasi workflow kolaborasi tim koding profesional." }
            ].map((course, i) => (
              <div
                key={i}
                className="group relative bg-[#020617] p-8 md:p-12 transition-all duration-500 cursor-default hover:bg-slate-900/80"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-brand-500 group-hover:w-full transition-all duration-700"></div>

                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl text-slate-600 group-hover:text-brand-400 group-hover:scale-110 transition-all duration-500 mb-6 md:mb-10 inline-block font-mono">
                    {course.icon}
                  </div>

                  <h4 className="text-xl md:text-2xl font-[900] text-white mb-3 md:mb-4 uppercase tracking-tight group-hover:text-brand-400 transition-colors">
                    {course.title}
                  </h4>

                  <p className="text-slate-500 text-[11px] md:text-sm leading-relaxed font-bold mb-8 md:mb-10 group-hover:text-slate-200 transition-colors">
                    {course.desc}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-[8px] md:text-[9px] font-black text-slate-700 group-hover:text-brand-500 uppercase tracking-[0.2em] transition-colors">Industry Standard</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-brand-500 transition-all duration-500"></div>
                  </div>
                </div>

                <span className="absolute bottom-4 md:bottom-6 right-6 md:right-8 text-lg md:text-xl font-black text-slate-900 group-hover:text-brand-900/40 transition-colors pointer-events-none">
                  0{i + 1}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-12 md:mt-20 flex justify-center" data-aos="zoom-in">
            <Link
              href="#"
              className="group relative w-full md:w-auto px-10 md:px-14 py-5 md:py-6 bg-white overflow-hidden rounded-none transition-all duration-500 text-center"
            >
              <div className="absolute inset-0 bg-brand-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 text-black group-hover:text-black font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-[11px] transition-colors duration-500">
                Eksplorasi Modul
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION: PORTFOLIO & MARKETPLACE (4 DATA LENGKAP) */}
      <section id="portfolio" className="py-24 md:py-32 bg-white relative overflow-hidden border-b border-slate-100 font-['Plus_Jakarta_Sans',sans-serif]">

        {/* Background Decorative */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none -z-10"
          style={{ backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`, backgroundSize: '30px 30px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Header Section - FIX RESPONSIVE ALIGNMENT */}
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 md:mb-20 gap-6 text-center md:text-left" data-aos="fade-up">
            <div className="max-w-2xl w-full">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4 md:mb-6">
                <span className="w-8 md:w-12 h-[2px] bg-brand-600"></span>
                <span className="text-brand-600 font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-[9px] md:text-[10px]">Showcase & Marketplace</span>
              </div>
              <h3 className="text-4xl md:text-7xl font-[900] text-slate-900 tracking-tighter leading-[0.9] md:leading-none uppercase italic">
                Karya & <br className="hidden md:block" /> <span className="text-slate-400">Inovasi.</span>
              </h3>
            </div>
            <div className="w-full md:max-w-[300px] pt-4 border-t md:border-t-0 md:border-l-4 border-brand-500 md:pl-6">
              <p className="text-slate-500 font-bold text-xs md:text-sm leading-relaxed">
                Eksplorasi ekosistem AETHER CODE: Dari riset lingkungan hingga produk digital siap pakai.
              </p>
            </div>
          </div>

          {/* MAIN PROJECTS (INNOVATION) - RESPONSIVE 1 to 2 COLS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20 md:mb-24">
            {/* 1. INNOVATE OS */}
            <div className="group relative" data-aos="fade-up">
              <div className="relative h-[350px] md:h-[450px] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-xl transition-all duration-700 group-hover:shadow-brand-500/20">
                <img src="project/innovateos.png" alt="Innovate OS" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-90 transition-opacity"></div>

                <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                  <span className="inline-block px-3 py-1 bg-brand-600 text-white text-[8px] font-black uppercase tracking-widest rounded-full mb-3">Flagship</span>
                  <h4 className="text-2xl md:text-3xl font-black text-white mb-2 md:mb-4 uppercase">INNOVATE OS</h4>
                  <p className="text-slate-300 text-[11px] md:text-sm font-medium mb-6 md:mb-8 max-w-xs">Platform kecerdasan lingkungan & edukasi karbon.</p>
                  <Link href="https://innovate-os.vercel.app/" target="_blank" className="inline-flex items-center gap-3 text-white font-black text-[9px] md:text-[10px] uppercase tracking-widest group/btn">
                    <span className="border-b-2 border-brand-500 pb-1">Lihat Project</span>
                    <svg className="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* 2. TANITRADE */}
            <div className="group relative" data-aos="fade-up" data-aos-delay="100">
              <div className="relative h-[350px] md:h-[450px] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-xl transition-all duration-700 group-hover:shadow-emerald-500/20">
                <img src="project/tanitrade.png" alt="Tani Trade" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-90 transition-opacity"></div>

                <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                  <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-[8px] font-black uppercase tracking-widest rounded-full mb-3">Sustainability</span>
                  <h4 className="text-2xl md:text-3xl font-black text-white mb-2 md:mb-4 uppercase">TaniTrade</h4>
                  <p className="text-slate-300 text-[11px] md:text-sm font-medium mb-6 md:mb-8 max-w-xs">Marketplace agrikultur untuk petani lokal.</p>
                  <Link href="https://tanitrade.netlify.app/" target="_blank" className="inline-flex items-center gap-3 text-white font-black text-[9px] md:text-[10px] uppercase tracking-widest group/btn">
                    <span className="border-b-2 border-emerald-500 pb-1">Lihat Project</span>
                    <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* MARKETPLACE SECTION - RESPONSIVE CARDS */}
          <div className="mb-10 flex items-center gap-4">
            <h5 className="text-[9px] md:text-xs font-black text-slate-400 uppercase tracking-[0.3em] whitespace-nowrap">Ready to Use Templates</h5>
            <div className="flex-1 h-[1px] bg-slate-100"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* 3. AURORA TRAVEL */}
            <div className="bg-slate-50 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500" data-aos="fade-up">
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-full sm:w-40 md:w-56 h-40 md:h-48 rounded-xl md:rounded-[1.5rem] overflow-hidden shrink-0">
                  <img src="project/auroratravel.png" className="w-full h-full object-cover" alt="Aurora" />
                </div>
                <div className="flex-1 w-full text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-4 gap-2">
                    <h4 className="text-lg md:text-xl font-black text-slate-900 uppercase">Aurora Travel</h4>
                    <span className="text-[10px] font-black text-brand-600 bg-brand-50 px-3 py-1 rounded-full uppercase">Rp 500k</span>
                  </div>
                  <p className="text-slate-500 text-[11px] font-bold leading-relaxed mb-6">Premium Travel Agency template with WhatsApp & Tour Packages.</p>
                  <button className="w-full py-3 bg-slate-900 text-white font-black text-[9px] uppercase tracking-widest rounded-xl hover:bg-brand-600 transition-all">Beli Template</button>
                </div>
              </div>
            </div>

            {/* 4. IT SOLUTIONS */}
            <div className="bg-slate-50 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500" data-aos="fade-up" data-aos-delay="100">
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-full sm:w-40 md:w-56 h-40 md:h-48 rounded-xl md:rounded-[1.5rem] overflow-hidden shrink-0">
                  <img src="project/itdevsolutions.png" className="w-full h-full object-cover" alt="IT Sol" />
                </div>
                <div className="flex-1 w-full text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-4 gap-2">
                    <h4 className="text-lg md:text-xl font-black text-slate-900 uppercase">IT SOLUTIONS</h4>
                    <span className="text-[10px] font-black text-brand-600 bg-brand-50 px-3 py-1 rounded-full uppercase">Rp 650k</span>
                  </div>
                  <p className="text-slate-500 text-[11px] font-bold leading-relaxed mb-6">Professional Software House Landing Page with Modern UI.</p>
                  <button className="w-full py-3 bg-slate-900 text-white font-black text-[9px] uppercase tracking-widest rounded-xl hover:bg-brand-600 transition-all">Beli Template</button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Link */}
          <div className="mt-16 md:mt-20 flex justify-center">
            <Link href="/portfolio" className="inline-flex items-center gap-3 text-slate-900 font-black text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:text-brand-600 transition-all group">
              Lihat Katalog Lengkap
              <span className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-black transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      {/* SECTION: CTA - HIGH-CONTRAST TECH CALL */}
      <section className="py-32 bg-white relative overflow-hidden border-t border-slate-100 font-['Plus_Jakarta_Sans',sans-serif]">
        {/* Background Grid (Konsisten dengan Services & About) */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '80px 80px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-[10px] font-black uppercase tracking-[0.3em] mb-10" data-aos="fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
            </span>
            Ayo Kolaborasi
          </div>

          <h2 className="text-5xl md:text-[7rem] font-[900] text-slate-900 tracking-tighter leading-[0.85] uppercase italic mb-12" data-aos="zoom-in">
            SIAP <br className="md:hidden" /> <span className="text-transparent" style={{ WebkitTextStroke: '2px #0f172a' }}>EKSEKUSI</span> <br /> IDE KAMU?
          </h2>

          <p className="text-slate-500 text-lg md:text-xl font-bold max-w-2xl mx-auto mb-16 leading-relaxed px-4" data-aos="fade-up" data-aos-delay="100">
            Wujudkan website, desain UI/UX, atau video cinematic impianmu bersama tim expert AETHER CODE.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6" data-aos="fade-up" data-aos-delay="200">
            <Link
              href="https://wa.me/yournumber"
              className="group relative w-full md:w-auto px-12 py-6 bg-slate-900 text-white font-black uppercase tracking-[0.2em] text-[11px] overflow-hidden rounded-none hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-500 text-center"
            >
              <div className="absolute inset-0 bg-brand-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                Diskusi di WhatsApp
              </span>
            </Link>

            <Link
              href="/portfolio"
              className="w-full md:w-auto px-12 py-6 border-2 border-slate-900 text-slate-900 font-black uppercase tracking-[0.2em] text-[11px] rounded-none hover:bg-slate-900 hover:text-white transition-all duration-500 text-center"
            >
              Lihat Katalog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}