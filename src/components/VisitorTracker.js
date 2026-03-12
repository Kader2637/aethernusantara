"use client";
import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function VisitorTracker() {
  useEffect(() => {
    const trackUniqueDaily = async () => {
      const today = new Date().toLocaleDateString('en-CA'); 
      const lastTracked = localStorage.getItem("aether_last_tracked");

      if (lastTracked === today) {
        console.log("🔒 Device sudah terdata hari ini.");
        return; 
      }

      console.log("🚀 Mencoba mengirim data ke Supabase...");
      
      const { data, error } = await supabase.from("visitors").insert([
        { 
          path: window.location.pathname,
          is_unique: true 
        }
      ]);

      if (error) {
        // LIHAT ERROR DI SINI
        console.error("❌ Gagal Create Data:", error.message);
        console.error("Detail Error:", error);
      } else {
        console.log("✅ Data Berhasil Masuk!");
        localStorage.setItem("aether_last_tracked", today);
      }
    };

    trackUniqueDaily();
  }, []);

  return null;
}