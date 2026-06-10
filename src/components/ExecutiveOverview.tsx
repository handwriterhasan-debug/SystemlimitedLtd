import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BOARD_MEMBERS, BoardMember } from "../data";
import { Sparkles, Trophy, Quote, ArrowRight, ArrowUpRight, UserCheck } from "lucide-react";

export default function ExecutiveOverview() {
  const [selectedLeader, setSelectedLeader] = useState<BoardMember>(BOARD_MEMBERS[1]); // Default to CEO Asif Peer
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);

  // Filter or augment Board Members logic
  return (
    <div className="space-y-10">
      
      {/* Opening Cinematic Headline */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4 max-w-4xl"
      >
        <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-mono font-bold bg-blue-500/10 dark:bg-blue-500/20 px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></span>
          <span>Core Positioning Statement [FY25]</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-display font-black tracking-tight text-neutral-800 dark:text-white leading-none">
          AI at the Core, <br />
          <span className="gradient-text">Impact at Scale.</span>
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-350 leading-relaxed font-sans max-w-3xl">
          Systems Limited has successfully completed its evolution from Pakistan&apos;s pioneering software house into a multi-billion dollar, high-profitability global AI-first powerhouse. Integrating deep industry domain engineering with production-grade Generative AI execution across 16+ countries.
        </p>
      </motion.div>

      {/* CEO Strategic Vision split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* CEO Vision Card */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative p-6 rounded-2xl border bg-white/45 dark:bg-neutral-900/40 border-white/50 dark:border-white/10 shadow-sm space-y-5"
        >
          <div className="absolute top-4 right-4 font-mono text-[9px] text-neutral-400 dark:text-neutral-500">
            [ SEC 1.A // CEO ]
          </div>
          <div className="flex items-center space-x-2.5 text-neutral-700 dark:text-neutral-200">
            <Quote className="w-5 h-5 text-blue-500" />
            <h3 className="text-xs uppercase font-mono tracking-widest font-bold">CEO Strategic Action Mandate</h3>
          </div>
          
          <div className="space-y-3">
            <p className="text-sm italic text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
              &quot;The defining shift of our industry today is the transition from AI experimentation to AI execution. Enterprises are no longer exploring AI in isolation — they seek delivery partners who can navigate complex, regulated environments. We have embedded AI across our entire delivery pipeline to augment human intelligence.&quot;
            </p>
            <footer className="text-neutral-500 dark:text-neutral-450 font-mono text-[10px] tracking-wide uppercase font-bold pt-1">
              &mdash; ASIF PEER, GROUP CEO &amp; MANAGING DIRECTOR
            </footer>
          </div>
          
          <div className="pt-4 border-t border-neutral-150/40 dark:border-neutral-800/45 grid grid-cols-2 gap-4 text-xs font-sans">
            <div>
              <span className="block text-neutral-400 dark:text-neutral-500 text-[10px] font-mono font-bold uppercase">SUPPLY EDGE</span>
              <span className="text-neutral-700 dark:text-neutral-300 font-semibold">8,200+ global workforce</span>
            </div>
            <div>
              <span className="block text-neutral-400 dark:text-neutral-500 text-[10px] font-mono font-bold uppercase">AI EXECUTION</span>
              <span className="text-neutral-700 dark:text-neutral-300 font-semibold">Domain-led custom models</span>
            </div>
          </div>
        </motion.div>

        {/* Chairman Governance Card */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative p-6 rounded-2xl border bg-white/45 dark:bg-neutral-900/40 border-white/50 dark:border-white/10 shadow-sm space-y-5"
        >
          <div className="absolute top-4 right-4 font-mono text-[9px] text-neutral-400 dark:text-neutral-500">
            [ SEC 1.B // CHAIRMAN ]
          </div>
          <div className="flex items-center space-x-2.5 text-neutral-700 dark:text-neutral-200">
            <Trophy className="w-5 h-5 text-purple-500" />
            <h3 className="text-xs uppercase font-mono tracking-widest font-bold">Chairman Governance Statement</h3>
          </div>
          
          <div className="space-y-3">
            <p className="text-sm italic text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
              &quot;Achieved stellar +48% net profit growth, reflecting the absolute robustness of our globalized business model, M&amp;A integration capabilities, and strict cost containment frameworks. Adding over 1,000 top-tier skilled professionals through Confiz and BAT acquisitions will serve as a strong engine for future expansion.&quot;
            </p>
            <footer className="text-neutral-500 dark:text-neutral-450 font-mono text-[10px] tracking-wide uppercase font-bold pt-1">
              &mdash; AEZAZ HUSSAIN, CHAIRMAN OF THE BOARD
            </footer>
          </div>

          <div className="pt-4 border-t border-neutral-150/40 dark:border-neutral-800/45 grid grid-cols-2 gap-4 text-xs font-sans">
            <div>
              <span className="block text-neutral-400 dark:text-neutral-500 text-[10px] font-mono font-bold uppercase">GROWTH VALUE</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">+48% Net Income YoY</span>
            </div>
            <div>
              <span className="block text-neutral-400 dark:text-neutral-500 text-[10px] font-mono font-bold uppercase">INORGANIC SCALE</span>
              <span className="text-neutral-700 dark:text-neutral-300 font-semibold">Confiz &amp; BAT Portfolio</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Leadership Directory Detail Glass Portal */}
      <div className="rounded-2xl border bg-neutral-100/30 dark:bg-neutral-950/20 border-neutral-250/30 dark:border-neutral-800/40 p-6 space-y-5">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-neutral-200/50 dark:border-neutral-800/50 pb-4">
          <div className="space-y-1">
            <span className="text-[9px] tracking-[0.2em] font-mono text-neutral-400 dark:text-neutral-500 uppercase font-bold block">Governance Framework</span>
            <h2 className="text-lg font-display font-black text-neutral-800 dark:text-white uppercase tracking-tight">Executive Leadership Board</h2>
          </div>
          <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-semibold px-2.5 py-1 rounded-lg bg-blue-500/10 dark:bg-blue-500/20">
            BOARD MEMBERS: 7 // EXECUTIVE TEAM
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Leaders left column list (4 columns) */}
          <div className="lg:col-span-4 flex flex-col space-y-2">
            {BOARD_MEMBERS.map((leader) => {
              const isActive = selectedLeader.name === leader.name;
              return (
                <button
                  key={leader.name}
                  onClick={() => setSelectedLeader(leader)}
                  onMouseEnter={() => setHoveredBadge(leader.name)}
                  onMouseLeave={() => setHoveredBadge(null)}
                  className={`flex flex-col p-4 text-left transition-all duration-200 rounded-xl border focus:outline-none cursor-pointer ${
                    isActive
                      ? "border-blue-500/30 bg-blue-500/5 dark:bg-blue-500/10 text-neutral-850 dark:text-white shadow-sm"
                      : "border-neutral-200/50 dark:border-neutral-800/40 hover:border-neutral-300 dark:hover:border-neutral-700 bg-white/10 dark:bg-transparent text-neutral-500 hover:text-neutral-750"
                  }`}
                >
                  <div className="flex justify-between items-center w-full">
                    <span className="text-xs uppercase font-bold tracking-tight font-sans">{leader.name}</span>
                    {isActive ? (
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                    ) : (
                      <ArrowUpRight className="w-3 h-3 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    )}
                  </div>
                  <span className="text-[10px] text-neutral-400 dark:text-neutral-500 mt-1 uppercase font-mono tracking-wider font-semibold">
                    {leader.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active profile detail view card (8 columns) */}
          <div className="lg:col-span-8 p-6 rounded-2xl border bg-white/50 dark:bg-neutral-900/40 border-white/60 dark:border-white/5 shadow-inner min-h-[280px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedLeader.name}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.15 }}
                className="space-y-5"
              >
                <div>
                  <span className="inline-flex items-center gap-1 text-[9px] px-2.5 py-1 rounded-full border border-blue-500/20 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 font-mono font-bold uppercase tracking-wider mb-2">
                    <UserCheck className="w-3.5 h-3.5" /> {selectedLeader.type}
                  </span>
                  <h3 className="text-2xl font-display font-black text-neutral-850 dark:text-white leading-tight">
                    {selectedLeader.name}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono tracking-wide mt-1 font-bold">
                    {selectedLeader.title}
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-neutral-150/40 dark:border-neutral-800/45">
                  <h4 className="text-[10px] text-neutral-400 dark:text-neutral-500 font-mono uppercase font-bold tracking-wider">Strategic Mission Scope</h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-350 leading-relaxed font-sans font-medium">
                    {selectedLeader.roleDescription}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <h4 className="text-[10px] text-neutral-400 dark:text-neutral-500 font-mono uppercase font-bold tracking-wider">Credentials &amp; Domain Expertise</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedLeader.qualifications.map((qual, qIdx) => (
                      <div key={qIdx} className="flex items-center space-x-2 bg-neutral-200/30 dark:bg-neutral-800/30 px-3 py-2 rounded-xl border border-neutral-300/20 dark:border-neutral-700/30 text-[10px] font-sans font-semibold text-neutral-650 dark:text-neutral-300">
                        <span className="text-blue-500 font-black">//</span>
                        <span>{qual}</span>
                      </div>
                    ))}
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
