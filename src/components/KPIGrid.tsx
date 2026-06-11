import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Info, Sparkles, X, TrendingUp, DollarSign, Globe, Award, Users, MapPin } from "lucide-react";

interface KPICardProps {
  label: string;
  value: string;
  sublabel: string;
  change?: string;
  isPositive?: boolean;
  metricDetails: string;
  icon: React.ReactNode;
}

export const heroKPIs = [
  { 
    label: "REVENUE", 
    value: "80.39B", 
    sublabel: "PKR CONSOLIDATED", 
    change: "+19.1% YOY", 
    isPositive: true, 
    metricDetails: "Grown from 67.47B PKR in FY24, showing strong resilient core technology demand worldwide. Strongest growth sectors include Banking & Financial Services.",
    icon: <DollarSign className="w-5 h-5 text-blue-500" />
  },
  { 
    label: "NET PROFIT", 
    value: "11.04B", 
    sublabel: "PKR NET INCOME", 
    change: "+48.0% YOY", 
    isPositive: true, 
    metricDetails: "PAT accelerated to 11.04B PKR from 7.46B PKR, fueled by supreme operational cost efficiencies and global delivery optimization.",
    icon: <TrendingUp className="w-5 h-5 text-purple-500" />
  },
  { 
    label: "EXPORT REVENUE", 
    value: "86%", 
    sublabel: "FOREIGN EXCHANGE", 
    change: "91% USD CONTRACTS", 
    isPositive: true, 
    metricDetails: "Systems generates the vast majority of its revenues in foreign currency, providing a superior hedge against domestic inflation and shocks.",
    icon: <Globe className="w-5 h-5 text-pink-500" />
  },
  { 
    label: "5-YEAR CAGR", 
    value: "51%", 
    sublabel: "ANNUAL REVENUE CAGR", 
    change: "+36% PROFIT CAGR", 
    isPositive: true, 
    metricDetails: "Unprecedented 51% compounded revenue growth over 5 years. Leading the entire Pakistan tech export and IT services sector.",
    icon: <Award className="w-5 h-5 text-indigo-500" />
  },
  { 
    label: "PEOPLE CAPABILITY", 
    value: "8,271+", 
    sublabel: "AI-READY STAFF", 
    change: "+3.8% NET ADDITIONS", 
    isPositive: true, 
    metricDetails: "Highly upskilled engineering team with extensive certifications in Azure, AWS, SAP, and Salesforce. Scaled with custom AI bootcamps.",
    icon: <Users className="w-5 h-5 text-emerald-500" />
  },
  { 
    label: "GEOGRAPHIC REACH", 
    value: "16+", 
    sublabel: "SOVEREIGN COUNTRIES", 
    change: "GLOBAL OUTPOSTS", 
    isPositive: true, 
    metricDetails: "Active global delivery hubs spanning Pakistan, UAE, Saudi Arabia, Qatar, Europe, USA, UK, Egypt, and Australia.",
    icon: <MapPin className="w-5 h-5 text-orange-500" />
  },
];

export default function KPIGrid() {
  const [selectedKpi, setSelectedKpi] = useState<typeof heroKPIs[0] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-4">
      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden p-4 sm:p-6 rounded-xl sm:rounded-2xl border bg-white/90 border-white/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)] pointer-events-none select-none"
            >
              {/* Soft decorative ambient glow in top-right */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-xl pointer-events-none"></div>

              <div className="flex justify-between items-start mb-3 sm:mb-4">
                <div className="h-8 w-8 sm:h-9 sm:w-9 bg-neutral-200 animate-pulse rounded-lg sm:rounded-xl" />
                <div className="h-4.5 w-16 sm:h-5 sm:w-20 bg-neutral-200 animate-pulse rounded-md sm:rounded-lg" />
              </div>

              <div className="space-y-2 mb-3.5 sm:mb-4">
                <div className="h-2.5 w-12 sm:h-3 sm:w-16 bg-neutral-150 animate-pulse rounded" />
                <div className="h-7 w-20 sm:h-8.5 sm:w-28 bg-neutral-200 animate-pulse rounded-md" />
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-neutral-100">
                <div className="h-3 w-20 bg-neutral-150 animate-pulse rounded" />
                <div className="h-3 w-8 bg-neutral-200 animate-pulse rounded" />
              </div>
            </div>
          ))
        ) : (
          heroKPIs.map((kpi, idx) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              whileHover={{ y: -4, scale: 1.01 }}
              onClick={() => setSelectedKpi(kpi)}
              className="relative cursor-pointer overflow-hidden p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300
                /* Premium crisp white design styling */
                bg-white/90 backdrop-blur-md 
                border-white/90
                hover:border-blue-500/50
                hover:bg-white
                shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.06)]"
            >
              {/* Soft decorative ambient glow in top-right */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl pointer-events-none"></div>

              <div className="flex justify-between items-start mb-3 sm:mb-4 relative z-10">
                <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-neutral-100/80 backdrop-blur-sm border border-neutral-200/50 text-neutral-650">
                  {React.cloneElement(kpi.icon as React.ReactElement, { className: "w-4 h-4 sm:w-5 sm:h-5 text-neutral-600" })}
                </div>
                <span className={`text-[8px] sm:text-[10px] uppercase font-mono font-bold tracking-normal sm:tracking-wider px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md sm:rounded-lg ${
                  kpi.isPositive 
                    ? "bg-emerald-50 text-emerald-600 border border-emerald-500/10" 
                    : "bg-rose-50 text-rose-600"
                }`}>
                  {kpi.change}
                </span>
              </div>

              <div className="space-y-0.5 sm:space-y-1 mb-2 sm:mb-3 relative z-10">
                <span className="text-[8px] sm:text-[10px] tracking-wider sm:tracking-widest font-mono text-neutral-400 uppercase font-extrabold pb-0.5 block">
                  {kpi.label}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black tracking-tight text-neutral-850">
                  {kpi.value}
                </h3>
              </div>

              <div className="flex justify-between items-center text-[8px] sm:text-[10px] text-neutral-500 font-extrabold uppercase tracking-normal sm:tracking-widest pt-2.5 border-t border-neutral-100 relative z-10">
                <span>{kpi.sublabel}</span>
                <span className="text-blue-650 group-hover:text-purple-600 flex items-center gap-1 font-bold">
                  More <Info className="w-3 h-3 sm:w-3.5 sm:h-3.5 inline" />
                </span>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Interactive KPI Details Glass Sheet */}
      <AnimatePresence>
        {selectedKpi && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 25 }}
            className="overflow-hidden"
          >
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border bg-white border-blue-500/15 relative shadow-xs">
              <button 
                onClick={() => setSelectedKpi(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer text-neutral-400"
              >
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              
              <div className="flex items-center space-x-2 sm:space-x-3 mb-1.5 sm:mb-2">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-500 animate-pulse shrink-0" />
                <span className="text-[8px] sm:text-[10px] tracking-wider sm:tracking-widest font-mono text-purple-600 uppercase font-extrabold">
                  Telemetry Insights: {selectedKpi.label}
                </span>
              </div>

              <h4 className="text-sm sm:text-lg font-display font-black text-neutral-850 mb-1">
                {selectedKpi.label} &mdash; {selectedKpi.value} ({selectedKpi.change})
              </h4>
              <p className="text-[11px] sm:text-xs text-neutral-500 leading-relaxed font-sans max-w-4xl font-medium">
                {selectedKpi.metricDetails}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export type { KPICardProps };
