import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RECOGNITIONS, STRATEGIC_ROADMAP_2026 } from "../data";
import { Award, Target, Compass, Sparkles, TrendingUp, ShieldAlert, Star } from "lucide-react";

export default function FutureOutlook() {
  const [selectedAward, setSelectedAward] = useState<any>(RECOGNITIONS[0]);

  const risks = [
    { title: "Exchange Rate Risk", severity: "Medium-High", mitigation: "Prioritizing collections, executing selective USD-indexed domestic contracts, and maintaining a robust basket of foreign currency accounts." },
    { title: "Workforce Turnover", severity: "Medium", mitigation: "Embedding high-level LUMS developmental bootcamps, performance cash grants, and modern 'AI.Now' educational upskill certifications." },
    { title: "Geopolitical Tensions", severity: "Low-Medium", mitigation: "Leveraging distributed delivery centers across Egypt, UAE, Pakistan, and Saudi Arabia to guarantee continuous operations and secure uptime." },
  ];

  return (
    <div className="space-y-10">
      
      {/* section header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-neutral-200/50 dark:border-neutral-800/50 pb-4 gap-4">
        <div className="space-y-1">
          <span className="text-[10px] tracking-[0.2em] font-mono text-neutral-400 dark:text-neutral-500 uppercase font-bold block">FY26 Corporate Strategy</span>
          <h2 className="text-lg font-display font-black text-neutral-850 dark:text-white uppercase tracking-tight">Awards, Recognitions &amp; Strategic Outlook</h2>
        </div>
        <span className="text-[10px] font-mono text-purple-650 dark:text-purple-400 font-bold uppercase tracking-wider">
          Microsoft Inner Circle Partner // Forbes Best Under A Billion 5 Times
        </span>
      </div>

      {/* Awards section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* selector column (4 Columns) */}
        <div className="lg:col-span-4 flex flex-col space-y-3">
          <span className="text-[10px] text-neutral-400 dark:text-neutral-500 font-mono uppercase tracking-widest font-bold pl-1">Sovereign Accolades</span>
          <div className="flex flex-col space-y-1.5 p-1 rounded-2xl bg-neutral-200/40 dark:bg-neutral-800/40 border border-neutral-300/30 dark:border-neutral-700/30">
            {RECOGNITIONS.map((rec) => {
              const isSelected = selectedAward.award === rec.award;
              return (
                <button
                  key={rec.award}
                  onClick={() => setSelectedAward(rec)}
                  className={`p-3 text-left rounded-xl transition-all duration-150 text-xs font-sans focus:outline-none cursor-pointer border ${
                    isSelected
                      ? "bg-white dark:bg-neutral-800 text-blue-650 dark:text-blue-400 shadow-sm border-neutral-200/20"
                      : "bg-transparent border-transparent hover:bg-white/40 dark:hover:bg-neutral-700/20 text-neutral-550 dark:text-neutral-400 hover:text-neutral-850"
                  }`}
                >
                  <span className="font-bold block truncate max-w-[200px]">{rec.award}</span>
                  <span className="text-[9px] text-neutral-400 dark:text-neutral-500 block mt-0.5 font-bold font-mono">{rec.year}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected View (8 Columns) */}
        <div className="lg:col-span-8 p-6 rounded-2xl border bg-white/45 dark:bg-neutral-900/40 border-white/50 dark:border-white/10 shadow-sm flex flex-col justify-between min-h-[170px]">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1 text-[9px] px-2.5 py-1 rounded-full border border-blue-500/20 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 font-mono font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-current" /> Industry Credentials
            </span>
            <h4 className="text-lg font-display font-black text-neutral-850 dark:text-white uppercase leading-tight">{selectedAward.award}</h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-350 leading-relaxed font-sans font-medium">
              {selectedAward.details}
            </p>
          </div>
          <span className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase pt-2.5 border-t border-neutral-150/40 dark:border-neutral-850/45 mt-4 block font-bold">
            Verified Via Systems Limited Official Audited Annual Reports 2025.
          </span>
        </div>
      </div>

      {/* Strategic Goals & Risks Bento Splits */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Strategic targets */}
        <div className="p-6 rounded-2xl border bg-white/45 dark:bg-neutral-900/40 border-white/50 dark:border-white/10 shadow-sm space-y-6">
          <div className="flex items-center space-x-2.5">
            <Target className="w-5 h-5 text-blue-500" />
            <h3 className="text-xs uppercase font-mono tracking-widest text-neutral-750 dark:text-neutral-200 font-bold">2026 Strategic Mandates</h3>
          </div>

          <div className="space-y-4 text-xs font-sans">
            <div className="space-y-1">
              <span className="text-[9px] text-blue-500 font-mono uppercase block font-bold">// AI Action Roadmap Target</span>
              <p className="text-neutral-600 dark:text-neutral-350 font-medium pr-4">{STRATEGIC_ROADMAP_2026.aiRoadmap}</p>
            </div>
            <div className="space-y-1 pt-3 border-t border-neutral-150/40 dark:border-neutral-850/45">
              <span className="text-[9px] text-purple-500 font-mono uppercase block font-bold">// North America &amp; Europe Expansion</span>
              <p className="text-neutral-600 dark:text-neutral-350 font-medium pr-4">{STRATEGIC_ROADMAP_2026.naExpansion}</p>
            </div>
            <div className="space-y-1 pt-3 border-t border-neutral-150/40 dark:border-neutral-850/45">
              <span className="text-[9px] text-pink-500 font-mono uppercase block font-bold">// Joint Shared Services Integration</span>
              <p className="text-neutral-600 dark:text-neutral-350 font-medium pr-4">{STRATEGIC_ROADMAP_2026.gbsScale}</p>
            </div>
          </div>
        </div>

        {/* Risk profile map */}
        <div className="p-6 rounded-2xl border bg-white/45 dark:bg-neutral-900/40 border-white/50 dark:border-white/10 shadow-sm space-y-6">
          <div className="flex items-center space-x-2.5">
            <ShieldAlert className="w-5 h-5 text-purple-500" />
            <h3 className="text-xs uppercase font-mono tracking-widest text-neutral-750 dark:text-neutral-200 font-bold">Active Quality Risk Ledger</h3>
          </div>

          <div className="space-y-3">
            {risks.map((risk) => (
              <div key={risk.title} className="p-3 bg-neutral-100/40 dark:bg-neutral-900/40 border border-neutral-200/40 dark:border-neutral-800/40 rounded-xl space-y-1.5 font-sans text-xs">
                <div className="flex justify-between items-center border-b border-neutral-150/40 dark:border-neutral-805/45 pb-1">
                  <span className="font-bold text-neutral-750 dark:text-neutral-200">{risk.title}</span>
                  <span className={`text-[9px] px-2 py-0.5 rounded-lg uppercase font-bold font-mono ${
                    risk.severity.includes("High") 
                      ? "bg-rose-100 dark:bg-rose-955/30 text-rose-600 dark:text-rose-400" 
                      : "bg-neutral-200/50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
                  }`}>
                    {risk.severity} Severity
                  </span>
                </div>
                <p className="text-[10px] text-neutral-500 dark:text-neutral-400 font-medium leading-relaxed">
                  Mitigation: {risk.mitigation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* McKinsey-Grade investment quality takeway */}
      <div className="rounded-3xl border bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 border-blue-500/20 dark:border-purple-500/20 p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm">
        <div className="space-y-1.5 max-w-2xl">
          <span className="inline-block text-[10px] tracking-[0.2em] font-mono text-blue-600 dark:text-blue-400 uppercase font-bold">
            Institutional Takeaway
          </span>
          <h4 className="text-lg font-display font-black text-neutral-850 dark:text-white uppercase tracking-tight">Summary of Investment Quality</h4>
          <p className="text-xs text-neutral-600 dark:text-neutral-350 leading-relaxed font-sans font-medium">
            Systems Limited stands out as an exceptionally premium, debt-free, dynamic, and high-profitability technology giant. Armed with a 51% revenue compound growth rate, deep execution capabilities in AI engineering, and strategic acquisitions (Confiz, BAT), Systems delivers massive sustainable capital returns while sheltering localized risks with solid 86% foreign exchange export earnings.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end justify-between self-center shrink-0">
          <span className="text-[9px] text-neutral-400 dark:text-neutral-500 font-mono uppercase tracking-widest font-bold">Ticker Code: (SYS/PSX)</span>
          <div className="text-emerald-650 dark:text-emerald-400 text-xl font-display font-black tracking-tight flex items-center mt-1.5 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/15">
            +48.0% PAT Growth
            <TrendingUp className="w-5 h-5 ml-1.5 animate-pulse" />
          </div>
        </div>
      </div>

    </div>
  );
}
