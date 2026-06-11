import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ESG_HIGHLIGHTS } from "../data";
import { Leaf, Users, Shield, Award, Droplet, Heart, ChevronDown, CheckCircle } from "lucide-react";

export default function SustainabilityESG() {
  const [activeTab, setActiveTab] = useState<"environmental" | "social" | "governance">("environmental");

  const highlights = ESG_HIGHLIGHTS[activeTab];

  const getMetricIcon = (metric: string) => {
    if (metric.toLowerCase().includes("emissions") || metric.toLowerCase().includes("solar") || metric.toLowerCase().includes("energy")) {
      return <Leaf className="w-5 h-5 text-emerald-500" />;
    }
    if (metric.toLowerCase().includes("water")) {
      return <Droplet className="w-5 h-5 text-blue-500" />;
    }
    if (metric.toLowerCase().includes("gender") || metric.toLowerCase().includes("empowerment") || metric.toLowerCase().includes("csr") || metric.toLowerCase().includes("specially-abled") || metric.toLowerCase().includes("talent") || metric.toLowerCase().includes("employee")) {
      return <Users className="w-5 h-5 text-purple-500" />;
    }
    return <Shield className="w-5 h-5 text-pink-500" />;
  };

  return (
    <div className="space-y-10">
      
      {/* section header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-neutral-200/50 dark:border-neutral-800/50 pb-4 gap-3">
        <div className="space-y-1">
          <span className="text-[7.5px] sm:text-[10px] tracking-wider sm:tracking-[0.2em] font-mono text-neutral-400 dark:text-neutral-500 uppercase font-bold block">UN Sustainable Development Alignment</span>
          <h2 className="text-base sm:text-lg font-display font-black text-neutral-850 dark:text-white uppercase tracking-tight">Sustainability Architecture &amp; ESG Framework</h2>
        </div>
        <div className="flex items-center space-x-1.5 font-mono text-[8.5px] sm:text-[10px] text-pink-650 dark:text-pink-400 font-bold bg-pink-500/10 dark:bg-pink-500/20 px-2 py-1 rounded-full shrink-0">
          <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-pink-500 animate-pulse shrink-0" />
          <span>CSR Contribution: PKR 69.3M CASH &amp; DEVICES</span>
        </div>
      </div>

      {/* Segment controls */}
      <div className="grid grid-cols-3 p-1 rounded-xl sm:rounded-2xl bg-neutral-200/40 dark:bg-neutral-800/40 border border-neutral-300/30 dark:border-neutral-700/30 font-mono">
        <button
          onClick={() => setActiveTab("environmental")}
          className={`min-h-[44px] py-2 sm:py-3 px-1 text-[10px] sm:text-xs text-center uppercase font-extrabold tracking-wider rounded-lg sm:rounded-xl transition-all cursor-pointer ${
            activeTab === "environmental"
              ? "bg-white dark:bg-neutral-800 text-emerald-600 dark:text-emerald-400 shadow-sm border border-neutral-200/20"
              : "text-neutral-600 dark:text-neutral-350 hover:text-white"
          }`}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          [E] <span className="hidden xs:inline">Environmental</span><span className="xs:hidden">Envi</span>
        </button>
        <button
          onClick={() => setActiveTab("social")}
          className={`min-h-[44px] py-2 sm:py-3 px-1 text-[10px] sm:text-xs text-center uppercase font-extrabold tracking-wider rounded-lg sm:rounded-xl transition-all cursor-pointer ${
            activeTab === "social"
              ? "bg-white dark:bg-neutral-800 text-purple-650 dark:text-purple-400 shadow-sm border border-neutral-200/20"
              : "text-neutral-600 dark:text-neutral-350 hover:text-white"
          }`}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          [S] <span className="hidden xs:inline">Social</span><span className="xs:hidden">Social</span>
        </button>
        <button
          onClick={() => setActiveTab("governance")}
          className={`min-h-[44px] py-2 sm:py-3 px-1 text-[10px] sm:text-xs text-center uppercase font-extrabold tracking-wider rounded-lg sm:rounded-xl transition-all cursor-pointer ${
            activeTab === "governance"
              ? "bg-white dark:bg-neutral-800 text-pink-650 dark:text-pink-400 shadow-sm border border-neutral-200/20"
              : "text-neutral-600 dark:text-neutral-350 hover:text-white"
          }`}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          [G] <span className="hidden xs:inline">Governance</span><span className="xs:hidden">Gov</span>
        </button>
      </div>

      {/* ESG highlights cards list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        <AnimatePresence mode="wait">
          {highlights.map((item, idx) => (
            <motion.div
              key={`${activeTab}-${idx}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15, delay: idx * 0.04 }}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border bg-white/45 dark:bg-neutral-900/40 border-white/50 dark:border-white/10 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="flex justify-between items-start gap-1">
                <span className="text-[8.5px] sm:text-[10px] text-neutral-440 dark:text-neutral-550 font-mono uppercase font-bold tracking-wider truncate max-w-[150px]">
                  {item.metric}
                </span>
                <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-neutral-200/55 dark:bg-neutral-850/65 border border-white/50 dark:border-white/5 shrink-0">
                  {getMetricIcon(item.metric)}
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-display font-black text-neutral-855 dark:text-white block">
                  {item.value}
                </span>
                <span className="text-[8.5px] sm:text-[10px] font-mono text-neutral-400 dark:text-neutral-500 block pt-1.5 border-t border-neutral-150/40 dark:border-neutral-850/45 mt-2 font-bold uppercase">
                  {item.yearOverYear}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Supporting details grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        
        {/* Environment details panel */}
        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border bg-white/45 dark:bg-neutral-900/40 border-white/50 dark:border-white/10 shadow-sm space-y-3.5 sm:space-y-4">
          <h4 className="text-[10px] sm:text-xs uppercase font-mono text-neutral-500 dark:text-neutral-400 tracking-wider font-bold">Renewable and Resource Intensities</h4>
          <ul className="space-y-2.5 font-sans text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-350 font-medium">
            <li className="flex justify-between items-center py-1 sm:py-1.5 border-b border-neutral-150/40 dark:border-neutral-800/45 gap-2">
              <span className="truncate">SOLAR EXPANSION CAPACITY</span>
              <span className="text-neutral-850 dark:text-white font-bold font-mono shrink-0">375 KW CAPACITY</span>
            </li>
            <li className="flex justify-between items-center py-1 sm:py-1.5 border-b border-neutral-150/40 dark:border-neutral-800/45 gap-2">
              <span className="truncate">SOLAR ANNUAL ENERGY OUTPUT</span>
              <span className="text-neutral-850 dark:text-white font-bold font-mono shrink-0">1,158 GJ GENERATED</span>
            </li>
            <li className="flex justify-between items-center py-1 sm:py-1.5 border-b border-neutral-150/40 dark:border-neutral-800/45 gap-2">
              <span className="truncate">MUNICIPAL ENVI CLEAN INTENSITY</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0">99% LEVEL COMPLIED</span>
            </li>
            <li className="flex justify-between items-center py-1 sm:py-1.5 gap-2">
              <span className="truncate">PER HEAD WATER RATE SAVINGS</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0">SAVED BY 23.70% Y/Y</span>
            </li>
          </ul>
        </div>

        {/* Social details panel */}
        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border bg-white/45 dark:bg-neutral-900/40 border-white/50 dark:border-white/10 shadow-sm space-y-3.5 sm:space-y-4">
          <h4 className="text-[10px] sm:text-xs uppercase font-mono text-neutral-500 dark:text-neutral-400 tracking-wider font-bold">Inclusive Labor &amp; Community Indicators</h4>
          <ul className="space-y-2.5 font-sans text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-350 font-medium">
            <li className="flex justify-between items-center py-1 sm:py-1.5 border-b border-neutral-150/40 dark:border-neutral-800/45 gap-2">
              <span className="truncate">GENDER RATIO (M : F)</span>
              <span className="text-neutral-850 dark:text-white font-bold font-mono shrink-0">83 : 17 PROFILE</span>
            </li>
            <li className="flex justify-between items-center py-1 sm:py-1.5 border-b border-neutral-150/40 dark:border-neutral-800/45 gap-2">
              <span>UPupskilling Certifications</span>
              <span className="text-neutral-850 dark:text-white font-bold font-mono shrink-0">653 CREDENTIALS</span>
            </li>
            <li className="flex justify-between items-center py-1 sm:py-1.5 border-b border-neutral-150/40 dark:border-neutral-800/45 gap-2">
              <span className="truncate">SPECIALLY-ABLED INTEGRATIONS</span>
              <span className="text-purple-650 dark:text-purple-400 font-bold shrink-0">+67% TEAM ENHANCED</span>
            </li>
            <li className="flex justify-between items-center py-1 sm:py-1.5 gap-2">
              <span className="truncate font-sans">IT Mustakbil Grad Cohorts</span>
              <span className="text-purple-650 dark:text-purple-400 font-bold shrink-0">111 ALUMNI GRADUATED</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
