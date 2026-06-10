import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ACQUISITIONS_DATA } from "../data";
import { Briefcase, Building, ChevronLeft, ChevronRight, UserPlus, Users, Sparkles } from "lucide-react";

export default function AcquisitionsPeople() {
  const [activeAcq, setActiveAcq] = useState<"confiz" | "batGbs">("confiz");

  const acq = ACQUISITIONS_DATA[activeAcq];

  return (
    <div className="space-y-10">
      
      {/* section header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-neutral-200/50 dark:border-neutral-800/50 pb-4 gap-4">
        <div className="space-y-1">
          <span className="text-[10px] tracking-[0.2em] font-mono text-neutral-400 dark:text-neutral-500 uppercase font-bold block">Inorganic Growth &amp; HR Metrics</span>
          <h2 className="text-lg font-display font-black text-neutral-850 dark:text-white uppercase tracking-tight">Strategic M&amp;A &amp; Workforce Analytics</h2>
        </div>
        <span className="text-[10px] font-mono text-blue-650 dark:text-blue-400 font-bold uppercase tracking-wider">
          8,271+ Global Engineers // +1,000 Experts Added In FY25
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Acquisitions panel (7 columns) */}
        <div className="lg:col-span-7 p-6 rounded-2xl border bg-white/45 dark:bg-neutral-900/40 border-white/50 dark:border-white/10 shadow-sm space-y-5 flex flex-col justify-between">
          <div className="space-y-1">
            <h3 className="text-xs uppercase font-mono tracking-widest text-neutral-400 dark:text-neutral-500 font-bold">Strategic Acquisitions Portal</h3>
            <p className="text-[10px] text-neutral-550 dark:text-neutral-400 font-mono font-semibold">INORGANIC ROADMAP &amp; CAPABILITY SYNERGIES</p>
          </div>

          {/* Dynamic tabs */}
          <div className="flex bg-neutral-200/40 dark:bg-neutral-800/40 p-1 border border-neutral-300/30 dark:border-neutral-700/30 rounded-2xl font-mono">
            <button
              onClick={() => setActiveAcq("confiz")}
              className={`flex-1 py-2 text-[10px] text-center rounded-xl transition-all cursor-pointer font-bold uppercase ${
                activeAcq === "confiz"
                  ? "bg-white dark:bg-neutral-800 text-blue-650 dark:text-blue-400 shadow-sm border border-neutral-200/20"
                  : "text-neutral-550 dark:text-neutral-450 hover:text-white"
              }`}
            >
              Confiz (Retail Tech)
            </button>
            <button
              onClick={() => setActiveAcq("batGbs")}
              className={`flex-1 py-2 text-[10px] text-center rounded-xl transition-all cursor-pointer font-bold uppercase ${
                activeAcq === "batGbs"
                  ? "bg-white dark:bg-neutral-800 text-purple-650 dark:text-purple-400 shadow-sm border border-neutral-200/20"
                  : "text-neutral-550 dark:text-neutral-450 hover:text-white"
              }`}
            >
              BAT Shared Services
            </button>
          </div>

          <div className="space-y-4 pt-4 border-t border-neutral-150/40 dark:border-neutral-800/45 flex-grow flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAcq}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -5 }}
                transition={{ duration: 0.15 }}
                className="space-y-4"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-display font-black text-neutral-850 dark:text-white uppercase">{acq.name}</h4>
                    <span className="text-[10px] text-neutral-400 dark:text-neutral-500 font-mono font-bold block">DATE: {acq.date}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 text-blue-650 dark:text-blue-400 font-bold uppercase tracking-wide">
                    Active Acquisition
                  </span>
                </div>

                <div className="pt-1">
                  <span className="text-[9px] text-neutral-450 dark:text-neutral-500 font-mono uppercase block font-bold">Primary Strategic Objective</span>
                  <span className="text-neutral-800 dark:text-white text-xs font-semibold uppercase">{acq.strategicObjective}</span>
                </div>

                <div className="pt-1 text-xs font-sans text-neutral-600 dark:text-neutral-350 leading-relaxed font-medium space-y-1">
                  <span className="text-[9px] text-neutral-450 dark:text-neutral-500 font-mono uppercase block font-bold">Capability + Market Synergies Unlocked</span>
                  <p>{acq.synergies}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Human Capital metrics (5 columns) */}
        <div className="lg:col-span-5 p-6 rounded-2xl border bg-white/45 dark:bg-neutral-900/40 border-white/50 dark:border-white/10 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-1">
            <h3 className="text-xs uppercase font-mono tracking-widest text-purple-600 dark:text-purple-400 font-bold">Human Capital Scaling</h3>
            <p className="text-[10px] text-neutral-550 dark:text-neutral-450 font-mono font-semibold">PEOPLE STRATEGY &amp; TALENT METRICS</p>
          </div>

          <div className="space-y-5 flex-grow justify-center flex flex-col">
            
            <div className="border-l-2 border-blue-500 pl-4 space-y-1">
              <span className="text-[9px] text-neutral-450 dark:text-neutral-500 font-mono uppercase font-bold">TOTAL PERSONNEL</span>
              <div className="text-3xl font-display font-extrabold text-neutral-805 dark:text-white">8,271+</div>
              <p className="text-[11px] text-neutral-550 dark:text-neutral-400 font-sans font-medium">Top-tier software architects and strategic consultants.</p>
            </div>

            <div className="border-l-2 border-purple-500 pl-4 space-y-1">
              <span className="text-[9px] text-neutral-450 dark:text-neutral-500 font-mono uppercase font-bold">UPSKILLING STUDY HOURS</span>
              <div className="text-3xl font-display font-extrabold text-purple-650 dark:text-purple-400">18,924+ Hrs</div>
              <p className="text-[11px] text-neutral-550 dark:text-neutral-400 font-sans font-medium">GenAI developer curriculum, cloud platforms, and SAP upskilling.</p>
            </div>

            <div className="border-l-2 border-pink-500 pl-4 space-y-1">
              <span className="text-[9px] text-pink-500 font-mono uppercase font-bold">LUMS EXECUTIVE BOOTCAMP</span>
              <div className="text-3xl font-display font-extrabold text-pink-600 dark:text-pink-400">SysVisTech Univ</div>
              <p className="text-[11px] text-neutral-550 dark:text-neutral-400 font-sans font-medium">On-campus residency programs to build outstanding future leaders.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
