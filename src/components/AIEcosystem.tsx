import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AI_ECOSYSTEM_CASES, AICaseStudy } from "../data";
import { Cpu, CheckCircle2, Code2, Sparkles, Shield, BookmarkCheck } from "lucide-react";

export default function AIEcosystem() {
  const [selectedCase, setSelectedCase] = useState<AICaseStudy>(AI_ECOSYSTEM_CASES[0]);

  return (
    <div className="space-y-10">
      
      {/* section header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-neutral-200/50 dark:border-neutral-800/50 pb-4 gap-4">
        <div className="space-y-1">
          <span className="text-[10px] tracking-[0.2em] font-mono text-neutral-400 dark:text-neutral-500 uppercase font-bold block">Artificial Intelligence Mandate</span>
          <h2 className="text-lg font-display font-black text-neutral-850 dark:text-white uppercase tracking-tight">AI Transformation &amp; SAA Ecosystem</h2>
        </div>
        <div className="flex items-center space-x-2 font-mono text-[10px] text-purple-600 dark:text-purple-400 font-bold bg-purple-500/10 dark:bg-purple-500/20 px-2.5 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-purple-500 animate-pulse" />
          <span>Upskilling Status: AI.Now Curriculum Live</span>
        </div>
      </div>

      {/* Strategic pillars (Top Bento Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        <div className="p-6 rounded-2xl border bg-white/45 dark:bg-neutral-900/40 border-white/50 dark:border-white/10 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/20 flex items-center justify-center">
            <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <h4 className="text-xs font-mono tracking-widest text-neutral-750 dark:text-neutral-200 uppercase font-bold">AI Solutions &amp; Models</h4>
          <p className="text-[11px] text-neutral-600 dark:text-neutral-450 leading-relaxed font-sans font-medium">
            Delivering high-accuracy, HIPAA-compliant healthcare scripting models, automated billing engines, and multilingual customer-facing virtual assistants.
          </p>
        </div>

        <div className="p-6 rounded-2xl border bg-white/45 dark:bg-neutral-900/40 border-white/50 dark:border-white/10 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 border border-purple-500/20 flex items-center justify-center">
            <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <h4 className="text-xs font-mono tracking-widest text-neutral-750 dark:text-neutral-200 uppercase font-bold">Proprietary Accelerators</h4>
          <p className="text-[11px] text-neutral-600 dark:text-neutral-450 leading-relaxed font-sans font-medium">
            Building repeatable, domain-specific AI middleware blocks to dramatically accelerate software development cycle integrations by up to 40% with high precision.
          </p>
        </div>

        <div className="p-6 rounded-2xl border bg-white/45 dark:bg-neutral-900/40 border-white/50 dark:border-white/10 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-pink-500/10 dark:bg-pink-500/20 border border-pink-500/20 flex items-center justify-center">
            <Shield className="w-5 h-5 text-pink-600 dark:text-pink-400" />
          </div>
          <h4 className="text-xs font-mono tracking-widest text-neutral-750 dark:text-neutral-200 uppercase font-bold">Governance &amp; Guardrails</h4>
          <p className="text-[11px] text-neutral-600 dark:text-neutral-450 leading-relaxed font-sans font-medium">
            Enforcing strict data telemetry safety, zero LLM leak pipelines, compliance audits, and role-based clearance boundaries to earn institutional trust.
          </p>
        </div>
      </div>

      {/* Case studies split explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
        
        {/* Case selector column (4 columns) */}
        <div className="lg:col-span-4 flex flex-col space-y-3">
          <h3 className="text-[10px] text-neutral-400 dark:text-neutral-500 font-mono uppercase tracking-widest font-bold">Global Case Studies</h3>
          
          <div className="flex flex-col space-y-1.5">
            {AI_ECOSYSTEM_CASES.map((useCase) => {
              const isSelected = selectedCase.title === useCase.title;
              return (
                <button
                  key={useCase.title}
                  onClick={() => setSelectedCase(useCase)}
                  className={`flex flex-col p-4 text-left rounded-xl border focus:outline-none transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? "border-blue-500/30 bg-blue-500/5 dark:bg-blue-500/10 text-neutral-850 dark:text-white"
                      : "bg-white/45 dark:bg-transparent text-neutral-550 dark:text-neutral-400 border-neutral-200/50 dark:border-neutral-800/40 hover:border-neutral-300 dark:hover:border-neutral-700"
                  }`}
                >
                  <span className="text-[11px] font-sans font-semibold uppercase truncate max-w-[200px] tracking-tight">{useCase.title}</span>
                  <span className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase mt-1 tracking-wider font-bold">{useCase.domain}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected detailed study card view (8 columns) */}
        <div className="lg:col-span-8 p-6 rounded-2xl border bg-white/45 dark:bg-neutral-900/40 border-white/50 dark:border-white/10 shadow-sm relative min-h-[290px] flex flex-col justify-between">
          <div className="absolute top-4 right-4 font-mono text-[9px] text-neutral-400 dark:text-neutral-500">
            [ METRIC // STACK ]
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCase.title}
              initial={{ opacity: 0, x: 5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 5 }}
              transition={{ duration: 0.15 }}
              className="space-y-5"
            >
              <div>
                <span className="inline-flex items-center gap-1 text-[9px] px-2.5 py-1 rounded-full border border-purple-500/20 dark:border-purple-500/30 text-purple-650 dark:text-purple-400 font-mono font-bold uppercase tracking-wider mb-2">
                  Client Cohort: {selectedCase.clientCohort}
                </span>
                <h4 className="text-lg font-display font-black text-neutral-850 dark:text-white uppercase">{selectedCase.title}</h4>
              </div>

              <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-500/10 rounded-xl flex justify-between items-center">
                <span className="text-[10px] font-mono text-emerald-800 dark:text-emerald-450 font-bold uppercase tracking-wide">VERIFIED CLOUD IMPACT</span>
                <span className="text-emerald-700 dark:text-emerald-400 text-sm font-sans font-black inline-flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 animate-pulse" />
                  {selectedCase.impactMetric}
                </span>
              </div>

              <p className="text-xs text-neutral-650 dark:text-neutral-350 leading-relaxed font-sans font-medium pt-2 border-t border-neutral-150/40 dark:border-neutral-800/45">
                {selectedCase.summary}
              </p>

              <div className="space-y-2">
                <span className="text-[9px] text-neutral-400 dark:text-neutral-500 font-mono block uppercase font-bold">Cloud/Enterprise Tech Stack</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCase.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[10px] bg-neutral-200/50 dark:bg-neutral-800/50 border border-neutral-300/30 dark:border-neutral-700/30 text-neutral-600 dark:text-neutral-400 rounded-lg uppercase tracking-wider font-semibold font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
