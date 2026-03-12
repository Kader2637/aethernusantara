"use client";
import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, TrendingUp, Calendar, ArrowUpRight, Zap, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function VisitorPage() {
  const [filter, setFilter] = useState(7);
  const [chartData, setChartData] = useState([]);
  const [totalUnique, setTotalUnique] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getRealData = async () => {
      setIsLoading(true);
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - filter);
      
      const { data, error } = await supabase
        .from("visitors")
        .select("created_at")
        .gte("created_at", startDate.toISOString())
        .order("created_at", { ascending: true });

      if (!error && data) {
        const groupedData = {};
        for (let i = filter - 1; i >= 0; i--) {
          const d = new Date();
          d.setDate(d.getDate() - i);
          const dateStr = d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short' });
          groupedData[dateStr] = { name: dateStr, value: 0 };
        }
        data.forEach(item => {
          const dateStr = new Date(item.created_at).toLocaleDateString('id-ID', { day: '2-digit', month: 'short' });
          if (groupedData[dateStr]) groupedData[dateStr].value += 1;
        });
        setChartData(Object.values(groupedData));
        setTotalUnique(data.length);
      }
      setIsLoading(false);
    };
    getRealData();
  }, [filter]);

  return (
    <div className="min-h-screen bg-[#FBFBFE] text-[#1A1A1A] pt-40 pb-24 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* TOP HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-gray-200 pb-10">
          <div>
            <h1 className="text-4xl font-black tracking-tight mb-2">
              ANALYTICS <span className="text-blue-600 italic">CORE</span>
            </h1>
            <div className="flex items-center gap-3 text-sm text-gray-500 font-medium uppercase tracking-widest">
              <ShieldCheck size={14} className="text-green-500" />
              <span>Unique Device Security Active</span>
            </div>
          </div>
          
          <div className="flex bg-gray-100 p-1.5 rounded-2xl mt-6 md:mt-0 shadow-inner">
            {[7, 30, 90].map((d) => (
              <button 
                key={d} onClick={() => setFilter(d)}
                className={`px-8 py-2.5 text-[11px] font-black rounded-xl transition-all ${filter === d ? 'bg-white text-blue-600 shadow-md scale-105' : 'text-gray-400 hover:text-gray-900'}`}
              >
                {d === 90 ? '90D' : `${d}D`}
              </button>
            ))}
          </div>
        </div>

        {/* BENTO GRID STATS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {/* Card Utama */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="md:col-span-3 bg-[#0F172A] rounded-[2.5rem] p-10 text-white relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <span className="bg-blue-600 text-[10px] font-black px-4 py-1.5 rounded-full tracking-[0.2em] mb-6 inline-block uppercase">
                  Audience Metrics
                </span>
                <p className="text-gray-400 text-sm font-medium mb-2">Total Unique Visitors ({filter} Days)</p>
                <div className="flex items-baseline gap-4">
                  <h2 className="text-8xl font-black tracking-tighter leading-none">{totalUnique}</h2>
                  <div className="flex items-center text-green-400 gap-1 text-sm font-bold bg-green-400/10 px-3 py-1 rounded-lg">
                    <TrendingUp size={14} />
                    <span>Real-Time</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full -mr-32 -mt-32" />
          </motion.div>

          {/* Card Info Kecil */}
          <div className="grid grid-rows-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
              className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-sm flex flex-col justify-between hover:border-blue-400 transition-colors cursor-default"
            >
              <Zap className="text-blue-600" size={24} />
              <div>
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">Status</p>
                <h3 className="text-xl font-black">ACTIVE</h3>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-sm flex flex-col justify-between hover:border-blue-400 transition-colors cursor-default"
            >
              <Calendar className="text-gray-400" size={24} />
              <div>
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">Timeframe</p>
                <h3 className="text-xl font-black text-gray-900">{filter} Days</h3>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CHART SECTION */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 rounded-[3rem] border border-gray-200 shadow-sm relative"
        >
          <div className="flex justify-between items-center mb-16">
            <h4 className="text-xs font-black tracking-[0.3em] text-gray-400 uppercase">Traffic Distribution Flow</h4>
            <div className="h-px bg-gray-100 flex-1 mx-8" />
            <ArrowUpRight size={20} className="text-gray-300" />
          </div>

          <div className="h-[400px] w-full">
            {isLoading ? (
              <div className="h-full flex items-center justify-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-100 italic text-gray-300">
                Syncing Database...
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="mainGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.15}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="0 0" vertical={false} stroke="#F1F5F9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 10, fontWeight: 800}} dy={15} />
                  <YAxis hide domain={['dataMin - 5', 'dataMax + 10']} />
                  <Tooltip 
                    cursor={{ stroke: '#2563eb', strokeWidth: 1.5 }}
                    contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', padding: '20px' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#2563eb" 
                    strokeWidth={5} 
                    fill="url(#mainGrad)" 
                    animationDuration={2000}
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}