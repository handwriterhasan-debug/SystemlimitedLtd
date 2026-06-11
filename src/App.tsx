/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Globe,
  Award,
  Sparkles,
  HelpCircle,
  Keyboard,
  ChevronRight,
  Sun,
  Moon,
  TrendingUp,
  Activity,
  Layers,
  UserCheck
} from "lucide-react";

// Section Components
import KPIGrid from "./components/KPIGrid";
import HomeDashboard from "./components/HomeDashboard";
import ExecutiveOverview from "./components/ExecutiveOverview";
import FinancialPerformance from "./components/FinancialPerformance";
import GeographyFootprint from "./components/GeographyFootprint";
import BusinessVerticals from "./components/BusinessVerticals";
import AIEcosystem from "./components/AIEcosystem";
import SustainabilityESG from "./components/SustainabilityESG";
import AcquisitionsPeople from "./components/AcquisitionsPeople";
import FutureOutlook from "./components/FutureOutlook";

interface AppSection {
  id: number;
  label: string;
  tag: string;
  component: React.ReactNode;
}

export default function App() {
  const [activeSectionId, setActiveSectionId] = useState<number>(0);
  const isDarkMode = false;
  const [showHelpOverlay, setShowHelpOverlay] = useState<boolean>(false);
  const [lastKeyPressed, setLastKeyPressed] = useState<string>("NONE");
  const [timeStr, setTimeStr] = useState<string>("2026-06-09 19:48:17Z");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTimeStr(now.toISOString().replace("T", " ").substring(0, 19) + "Z");
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const sections: AppSection[] = [
    { id: 0, label: "Home Dashboard", tag: "SYS.DASHBOARD", component: <HomeDashboard onNavigate={(id) => setActiveSectionId(id)} /> },
    { id: 1, label: "Executive Summary", tag: "SYS.OVERVIEW", component: <ExecutiveOverview /> },
    { id: 2, label: "Financial Metrics", tag: "SYS.FINANCIALS", component: <FinancialPerformance /> },
    { id: 3, label: "Geography Footprint", tag: "SYS.GEOGRAPHY", component: <GeographyFootprint /> },
    { id: 4, label: "Business Divisions", tag: "SYS.SEGMENTS", component: <BusinessVerticals /> },
    { id: 5, label: "AI Transformation", tag: "SYS.AI_ECOSYSTEM", component: <AIEcosystem /> },
    { id: 6, label: "Inorganic M&A & Staff", tag: "SYS.INTEGRATION", component: <AcquisitionsPeople /> },
    { id: 7, label: "ESG / Sustainability", tag: "SYS.SUSTAINABILITY", component: <SustainabilityESG /> },
    { id: 8, label: "Strategic Outlook", tag: "SYS.OUTLOOK", component: <FutureOutlook /> },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      setLastKeyPressed(e.key === " " ? "SPACE" : key);

      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        setActiveSectionId((prev) => (prev < sections.length - 1 ? prev + 1 : 0));
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        setActiveSectionId((prev) => (prev > 0 ? prev - 1 : sections.length - 1));
      }

      const num = parseInt(e.key);
      if (num >= 1 && num <= 9) {
        e.preventDefault();
        setActiveSectionId(num - 1);
      }

      if (key === "H" || e.key === "?") {
        setShowHelpOverlay((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sections.length]);

  return (
    <div className="min-h-screen transition-colors duration-300 select-none overflow-x-hidden relative bg-ios-radial text-neutral-900">
      {/* Decorative Blur Spheres for Backdrop Glass Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[45%] h-[45%] bg-purple-400/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] bg-pink-400/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* iOS 17 Premium Sticky Glass Navigation Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md transition-colors duration-300 glass-navbar-light text-neutral-800">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-3 md:py-4 flex flex-row justify-between items-center gap-3">
          
          {/* Brand Logo & Identity */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            <div className="relative">
              <span className="text-white bg-gradient-to-r from-blue-600 to-purple-600 px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg sm:rounded-xl text-[10.5px] sm:text-[13px] font-bold tracking-tight shadow-md shadow-blue-500/10">
                systems
              </span>
            </div>
            <div className="flex items-center space-x-1.5 sm:space-x-2 border-l border-neutral-300/40 pl-2 sm:pl-3">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full inline-block animate-pulse shrink-0"></span>
              <span className="uppercase text-[7.5px] sm:text-[9px] tracking-wider sm:tracking-widest text-neutral-500 font-extrabold">
                Investor FY25
              </span>
            </div>
          </div>

          {/* Quick HUD Navigation & Action Triggers */}
          <div className="flex items-center space-x-3 sm:space-x-6 text-[8px] sm:text-[10px] uppercase font-mono tracking-wider sm:tracking-widest text-neutral-500">
            <div className="hidden lg:flex items-center space-x-2 pr-4 border-r border-neutral-300/40">
              <Keyboard className="w-4 h-4 text-blue-500" />
              <span>KEY VALUE:</span>
              <span className="text-neutral-800 font-bold bg-neutral-200/50 border border-neutral-300/40 px-1.5 py-0.5 rounded-md">
                {lastKeyPressed}
              </span>
            </div>

            <span className="hidden xs:inline text-neutral-505 font-mono tracking-tight font-medium text-[8px] sm:text-[10px]">{timeStr}</span>

            {/* Systems Stock Ticker / Status KPI */}
            <div className="flex items-center space-x-1 sm:space-x-2 bg-white/60 border border-neutral-300/30 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-lg sm:rounded-xl text-[7.5px] sm:text-[9px] font-mono font-bold tracking-wider text-neutral-600 shadow-xs hover:border-blue-500/30 transition-all">
              <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-500 shrink-0" />
              <span className="hidden sm:inline">PSX: SYS</span>
              <span className="text-emerald-600 font-black">+3.84%</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Interactive Stage Container */}
      <main className="max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-6 md:px-10 py-5 sm:py-8 relative z-10">
        
        {/* Mobile Navigation - Spacious and high contrast with 44px+ touch targets */}
        <div className="lg:hidden mb-6">
          <div className="flex justify-between items-center mb-2 px-1">
            <span className="text-[9px] tracking-[0.2em] font-mono text-neutral-500 font-extrabold uppercase">Report Navigation Menu</span>
            <button
              onClick={() => setShowHelpOverlay(true)}
              className="text-[9px] font-mono uppercase tracking-widest text-purple-700 font-black flex items-center gap-1 cursor-pointer min-h-[36px] px-2 rounded-lg bg-purple-50/70 border border-purple-200/40"
            >
              <span>Guides [?]</span>
            </button>
          </div>
          <div className="grid grid-cols-2 xs:grid-cols-3 gap-2">
            {sections.map((section, sIdx) => {
              const isActive = activeSectionId === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSectionId(section.id)}
                  className={`flex items-center space-x-2 px-3 py-2.5 min-h-[46px] rounded-xl text-[10px] sm:text-[11px] uppercase tracking-wider font-sans font-extrabold transition-all duration-150 cursor-pointer active:scale-95 text-left ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/10 border-transparent"
                      : "bg-white border border-neutral-200 text-neutral-705 hover:text-black hover:border-neutral-400"
                  }`}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <span className={`text-[9px] font-mono shrink-0 ${isActive ? "text-white/80" : "text-neutral-400"}`}>0{sIdx + 1}.</span>
                  <span className="truncate leading-tight">{section.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
          
          {/* LEFT LAYOUT: Sidebar Nav Panel (Desktop Sticky Sidebar) */}
          <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-24 space-y-6">
            <div className={`p-5 rounded-2xl transition-colors duration-300 ${
              isDarkMode ? "glass-dark" : "glass-light"
            } space-y-5 shadow-sm`}>
              
              <div className="flex justify-between items-center border-b border-neutral-200/40 dark:border-neutral-800 pb-3">
                <span className="text-[10px] tracking-[0.2em] font-mono text-neutral-500 font-bold uppercase">Report Navigation</span>
                <button
                  onClick={() => setShowHelpOverlay(true)}
                  className="text-neutral-450 hover:text-blue-500 transition-colors cursor-pointer"
                  title="Show shortcuts modal"
                >
                  <HelpCircle className="w-4 h-4" />
                </button>
              </div>

              {/* Sidebar List Links */}
              <nav className="flex flex-col space-y-1">
                {sections.map((section, sIdx) => {
                  const isActive = activeSectionId === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSectionId(section.id)}
                      className={`group flex items-center justify-between p-3 text-xs text-left uppercase transition-all duration-150 focus:outline-none rounded-xl cursor-pointer ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md shadow-blue-500/10"
                          : `text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white ${isDarkMode ? "hover:bg-neutral-850" : "hover:bg-neutral-200/40"}`
                      }`}
                    >
                      <div className="flex items-center space-x-3.5">
                        <span className={`text-[10px] font-mono ${isActive ? "text-white/80" : "text-neutral-405"}`}>
                          0{sIdx + 1}.
                        </span>
                        <span>{section.label}</span>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                        isActive ? "text-white translate-x-0" : "text-neutral-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                      }`} />
                    </button>
                  );
                })}
              </nav>

              {/* Shortcuts Box helper */}
              <div className="hidden lg:block pt-4 border-t border-neutral-250/20 dark:border-neutral-800 space-y-2">
                <span className="text-[9px] tracking-widest text-blue-500 font-mono uppercase block font-bold">
                  Keyboard Shortcuts
                </span>
                <div className="grid grid-cols-2 gap-1 text-[9px] font-mono uppercase text-neutral-400">
                  <div className={`p-1.5 border rounded-lg text-center ${isDarkMode ? "bg-black/30 border-neutral-800" : "bg-white/40 border-neutral-200"}`}>
                    <span className="text-blue-500 font-semibold text-[10px] block mb-0.5">[↑ / ↓]</span>
                    cycle
                  </div>
                  <div className={`p-1.5 border rounded-lg text-center ${isDarkMode ? "bg-black/30 border-neutral-800" : "bg-white/40 border-neutral-200"}`}>
                    <span className="text-blue-500 font-semibold text-[10px] block mb-0.5">[1 - 9]</span>
                    divisions
                  </div>
                </div>
              </div>

            </div>
          </aside>

          {/* RIGHT LAYOUT: Active Report Stage (9 Columns) */}
          <section className="lg:col-span-9 space-y-8">
            <KPIGrid />

            {/* Render the Active Dashboard Module */}
            <div className={`p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-sm transition-colors duration-300 ${
              isDarkMode ? "glass-dark" : "glass-light"
            }`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSectionId}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {sections[activeSectionId].component}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

        </div>
      </main>

      {/* Help Modal Overlay */}
      <AnimatePresence>
        {showHelpOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowHelpOverlay(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-light border border-neutral-200/50 p-8 max-w-sm w-full rounded-2xl font-mono text-xs space-y-6 shadow-2xl"
            >
              <div className="flex justify-between items-center border-b border-neutral-200 pb-4">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-800 inline-flex items-center">
                  Keyboard Shortcuts Map
                </h4>
                <span className="text-neutral-500 text-[9px] uppercase">ESC TO EXIT</span>
              </div>

              <div className="space-y-4 text-neutral-600 uppercase text-[10px] tracking-wider">
                <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                  <span>[↑] OR [↓] Arrow Keys</span>
                  <span className="text-neutral-800 font-bold">Cycle Categories</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-neutral-100">
                  <span>[1 - 9] Number Keys</span>
                  <span className="text-neutral-800 font-bold">Jump directly</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span>[H] OR [?] Toggle key</span>
                  <span className="text-neutral-800 font-bold">Show legend modal</span>
                </div>
              </div>

              <div className="text-[9px] text-neutral-400 uppercase leading-relaxed pt-2 border-t border-neutral-100">
                Click anywhere outside this cards overlay to return to reading mode.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
