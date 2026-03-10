"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Footer() {
  const pathname = usePathname();

  const FooterLink = ({ href, children }) => {
    const isActive = pathname === href;
    return (
      <li>
        <Link 
          href={href} 
          className={`group flex items-center gap-3 transition-all duration-300 ${
            isActive ? 'text-brand-600 font-black' : 'text-slate-500 font-bold hover:text-slate-900'
          }`}
        >
          <span className={`h-1 bg-brand-500 transition-all duration-500 rounded-full ${
            isActive ? 'w-4' : 'w-0 group-hover:w-2'
          }`}></span>
          <span className={`${isActive ? 'translate-x-0' : 'group-hover:translate-x-1'} transition-transform duration-300`}>
            {children}
          </span>
        </Link>
      </li>
    );
  };

  return (
    <footer className="bg-white border-t border-slate-100 font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden">
      
    

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
        
        {/* 2. MAIN FOOTER CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <img src="/logo.png" alt="Logo" className="w-12 h-12 group-hover:rotate-[15deg] transition-transform duration-500" />
              <span className="text-2xl font-[950] text-slate-900 uppercase tracking-tighter">
                AETHER<span className="text-brand-600">CODE</span>
              </span>
            </Link>
            
            <div className="space-y-4">
              <h3 className="text-4xl md:text-5xl font-[900] text-slate-900 leading-[0.9] tracking-tighter uppercase italic">
                Presisi di setiap piksel, <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px #0f172a' }}>Keunggulan di setiap baris.</span>
              </h3>
              <p className="text-slate-500 text-sm font-bold max-w-sm leading-relaxed">
                Kami bukan sekadar agensi IT. Kami adalah arsitek digital yang meramu kode menjadi solusi bisnis yang mematikan.
              </p>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-black text-slate-950 mb-8 uppercase text-[11px] tracking-[0.4em] border-l-4 border-brand-500 pl-4">Layanan Utama</h4>
            <ul className="space-y-4 text-sm">
              <FooterLink href="/jasa/web">Web Development</FooterLink>
              <FooterLink href="/jasa/video">Video Editing</FooterLink>
              <FooterLink href="/jasa/uiux">UI/UX Design</FooterLink>
              <FooterLink href="/jasa/ppt">PPT Design</FooterLink>
              <FooterLink href="/jasa/dokumen">Document Service</FooterLink>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-black text-slate-950 mb-8 uppercase text-[11px] tracking-[0.4em] border-l-4 border-slate-200 pl-4">Perusahaan</h4>
            <ul className="space-y-4 text-sm">
              <FooterLink href="/">Beranda</FooterLink>
              <FooterLink href="/about">Tentang Kami</FooterLink>
              <FooterLink href="/portfolio">Karya & Inovasi</FooterLink>
              <FooterLink href="/contact">Hubungi Tim</FooterLink>
              <FooterLink href="#">Syarat & Ketentuan</FooterLink>
            </ul>
          </div>

        </div>
        
        {/* 3. BOTTOM BAR */}
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              &copy; 2026 Aether Code Studio. Malang, Indonesia.
            </p>
          </div>

          {/* Development Status Badge */}
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-3 bg-slate-50 px-5 py-2.5 rounded-full border border-slate-200 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span className="tracking-[0.1em] uppercase text-[10px] font-black text-slate-600">AETHER CODE STUDIO OS: v2.0 Live Build</span>
            </div>
            {/* Social Icons Placeholder */}
            <div className="flex gap-4 ml-2">
               <div className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-950 hover:text-white transition-all flex items-center justify-center cursor-pointer text-xs font-black">IG</div>
               <div className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-950 hover:text-white transition-all flex items-center justify-center cursor-pointer text-xs font-black">LI</div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}