import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { VERTICAL_SEGMENTS, SegmentContribution } from "../data";
import { Server, Layers, Radio, ShoppingBag, PlusCircle, ArrowUpRight, TrendingUp } from "lucide-react";

export default function BusinessVerticals() {
  const [selectedSegment, setSelectedSegment] = useState<SegmentContribution>(VERTICAL_SEGMENTS[0]); // Default BFSI

  const chartData = VERTICAL_SEGMENTS.map((seg) => ({
    name: seg.name.split(" ")[0], // short name
    "FY2025 Revenue": seg.revenue2025,
    "FY2024 Revenue": seg.revenue2024,
  }));

  const CustomBarTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-neutral-300/40 dark:border-neutral-800 p-4 font-sans text-xs space-y-1.5 shadow-xl rounded-2xl">
          <p className="text-neutral-800 dark:text-neutral-100 font-extrabold uppercase text-[10px] tracking-wider border-b border-neutral-100 dark:border-neutral-850 pb-1">
            {payload[0].name} performance
          </p>
          <p className="text-neutral-600 dark:text-neutral-300 font-medium">
            FY25: <span className="font-bold text-blue-650 dark:text-blue-400">{payload[0].value.toLocaleString()}M PKR</span>
          </p>
          <p className="text-neutral-500 dark:text-neutral-400 font-medium">
            FY24: <span className="font-bold">{payload[1].value.toLocaleString()}M PKR</span>
          </p>
        </div>
      );
    }
    return null;
  };

  const getSegmentIcon = (name: string) => {
    if (name.includes("BFSI")) return <Layers className="w-4 h-4 text-blue-500" />;
    if (name.includes("Telco")) return <Radio className="w-4 h-4 text-purple-500" />;
    if (name.includes("Retail")) return <ShoppingBag className="w-4 h-4 text-pink-500" />;
    if (name.includes("Technology")) return <Server className="w-4 h-4 text-indigo-500" />;
    return <PlusCircle className="w-4 h-4 text-teal-500" />;
  };

  return (
    <div className="space-y-10">
      
      {/* Title */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-neutral-200/50 dark:border-neutral-800/50 pb-4 gap-3">
        <div className="space-y-1">
          <span className="text-[7.5px] sm:text-[10px] tracking-wider sm:tracking-[0.2em] font-mono text-neutral-400 dark:text-neutral-500 uppercase font-bold block">Enterprise Segmentation Matrix</span>
          <h2 className="text-base sm:text-lg font-display font-black text-neutral-850 dark:text-white uppercase tracking-tight">Business Divisions &amp; Industry Verticals</h2>
        </div>
        <span className="text-[8px] sm:text-[10px] font-mono text-blue-650 dark:text-blue-400 uppercase font-bold tracking-normal sm:tracking-wider">
          BFSI &amp; Telco constitute over 55% of global group volume
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
        
        {/* Recharts chart comparing vertical performance (7 columns) */}
        <div className="lg:col-span-7 p-4 sm:p-6 rounded-xl sm:rounded-2xl border bg-white/45 dark:bg-neutral-900/40 border-white/50 dark:border-white/10 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <div className="space-y-0.5">
              <h3 className="text-[10px] sm:text-xs uppercase font-mono tracking-wider sm:tracking-widest text-blue-600 dark:text-blue-400 font-bold">Vertical revenue comparison</h3>
              <p className="text-[8.5px] sm:text-[10px] text-neutral-500 dark:text-neutral-400 font-mono font-semibold">FY25 VS FY24 IN MILLIONS PKR</p>
            </div>
            <TrendingUp className="w-4 h-4 text-blue-600 animate-bounce shrink-0" />
          </div>

          <div className="h-[210px] sm:h-[250px] w-full mt-4 font-mono text-[9px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" stroke="#9ca3af" tickLine={false} />
                <YAxis stroke="#9ca3af" tickLine={false} />
                <Tooltip content={<CustomBarTooltip />} />
                <Legend iconSize={10} iconType="circle" wrapperStyle={{ paddingTop: 10 }} />
                <Bar dataKey="FY2025 Revenue" fill="#2563EB" radius={[6, 6, 0, 0]} />
                <Bar dataKey="FY2024 Revenue" fill="#93C5FD" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Dynamic description & detail module selector (5 columns) */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          
          {/* Vertical Menu Buttons */}
          <div className="flex flex-col space-y-1.5">
            {VERTICAL_SEGMENTS.map((seg) => {
              const isSelected = selectedSegment.name === seg.name;
              return (
                <button
                  key={seg.name}
                  onClick={() => setSelectedSegment(seg)}
                  className={`flex items-center justify-between min-h-[46px] p-2.5 sm:p-3 text-[11px] sm:text-xs text-left uppercase transition-all duration-150 rounded-xl border cursor-pointer focus:outline-none ${
                    isSelected
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-md shadow-blue-500/10 border-transparent"
                      : "bg-white/40 dark:bg-neutral-900/10 hover:bg-white/60 dark:hover:bg-neutral-900/30 text-neutral-500 dark:text-neutral-450 border-neutral-200/50 dark:border-neutral-800/40"
                  }`}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <div className="flex items-center space-x-3">
                    {getSegmentIcon(seg.name)}
                    <span className="truncate max-w-[170px] font-sans font-semibold text-[10px] sm:text-[11px]"> {seg.name.split(" ")[0]} Division</span>
                  </div>
                  <span className={`text-[8px] sm:text-[9px] font-mono font-bold shrink-0 ${isSelected ? "text-white/80" : "text-neutral-450 dark:text-neutral-500"}`}>
                    {seg.growth}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Detail Display */}
          <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl border bg-white/45 dark:bg-neutral-900/40 border-white/50 dark:border-white/10 shadow-sm flex-grow relative flex flex-col justify-between min-h-[160px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSegment.name}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.15 }}
                className="space-y-3"
              >
                <div>
                  <span className="inline-block text-[8px] sm:text-[9px] px-2 py-0.5 rounded-full border border-blue-500/20 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 font-mono font-bold uppercase tracking-wider mb-2">
                    {selectedSegment.importance} Segment
                  </span>
                  <h4 className="text-sm sm:text-base font-display font-black text-neutral-850 dark:text-white uppercase leading-tight">{selectedSegment.name}</h4>
                </div>

                <p className="text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-350 leading-relaxed font-sans font-medium">
                  {selectedSegment.highlight}
                </p>

                <div className="pt-3.5 border-t border-neutral-150/40 dark:border-neutral-800/45 grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <span className="block text-neutral-400 dark:text-neutral-500 font-mono text-[8px] sm:text-[9px] uppercase font-bold">FY25 Revenue Volume</span>
                    <span className="text-neutral-850 dark:text-white text-[12px] sm:text-sm font-extrabold font-mono">
                      {selectedSegment.revenue2025.toLocaleString()}M PKR
                    </span>
                  </div>
                  <div>
                    <span className="block text-neutral-400 dark:text-neutral-500 font-mono text-[8px] sm:text-[9px] uppercase font-bold">Yearly Expansion</span>
                    <span className="text-emerald-600 dark:text-emerald-400 text-[12px] sm:text-sm font-extrabold font-mono inline-flex items-center">
                      {selectedSegment.growth}
                      <ArrowUpRight className="w-3.5 h-3.5 ml-0.5 shrink-0" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
