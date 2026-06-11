import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import {
  FINANCIAL_HIGHLIGHTS_CONSOLIDATED,
  FINANCIAL_HIGHLIGHTS_UNCONSOLIDATED,
  HISTORICAL_CHART_DATA
} from "../data";
import { Sliders, TrendingUp, BarChart4, Filter, Search, DownloadCloud, FileSpreadsheet } from "lucide-react";

export default function FinancialPerformance() {
  const [isConsolidated, setIsConsolidated] = useState<boolean>(true);
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [chartType, setChartType] = useState<"line" | "area">("line");

  const metrics = isConsolidated ? FINANCIAL_HIGHLIGHTS_CONSOLIDATED : FINANCIAL_HIGHLIGHTS_UNCONSOLIDATED;

  // CSV Generator function
  const downloadCsv = () => {
    const headers = ["Particulars", "FY 2025", "FY 2024", "Growth Y/Y"];
    const rows = metrics.map((row) => [
      `"${row.label.replace(/"/g, '""')}"`,
      row.fy25,
      row.fy24,
      `"${row.growth.replace(/"/g, '""')}"`
    ]);

    const title = isConsolidated ? "Systems Limited Consolidated Financial Highlights" : "Systems Limited Unconsolidated Financial Highlights";
    const csvContent = [
      [title],
      [],
      headers,
      ...rows,
      [],
      ["Historical 5-Year Cohort Data"],
      ["Year", "Revenue (PKR Millions)", "Net Profit (PKR Millions)"],
      ...HISTORICAL_CHART_DATA.map((d) => [d.year, d.revenue, d.profit])
    ]
      .map((e) => e.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `systems_limited_financials_${isConsolidated ? "consolidated" : "unconsolidated"}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Custom premium interactive tooltip matching iOS style
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/95 backdrop-blur-md border border-neutral-300/40 p-4 font-sans text-xs space-y-1.5 shadow-xl rounded-2xl">
          <p className="text-neutral-400 uppercase tracking-widest text-[9px] font-bold border-b border-neutral-100 pb-1">
            Fiscal Year {label}
          </p>
          <p className="text-neutral-700 font-bold">
            Revenue: <span className="text-blue-600">{payload[0].value.toLocaleString()}M PKR</span>
          </p>
          {payload[1] && (
            <p className="text-neutral-700 font-bold">
              Net Profit: <span className="text-purple-600">{payload[1].value.toLocaleString()}M PKR</span>
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-10">
      
      {/* Title block with selection buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-neutral-200/50 pb-4 gap-3">
        <div className="space-y-1">
          <span className="text-[7.5px] sm:text-[10px] tracking-wider sm:tracking-[0.2em] font-mono text-neutral-400 uppercase font-bold block">Financial Portal</span>
          <h2 className="text-base sm:text-lg font-display font-black text-neutral-850 uppercase tracking-tight">Financial Performance Matrix</h2>
        </div>
        
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between sm:justify-start">
          {/* Download CSV button */}
          <button
            onClick={downloadCsv}
            className="inline-flex items-center space-x-1.5 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-[10.5px] sm:text-xs px-3 py-2 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl transition duration-150 cursor-pointer shadow-md shadow-blue-500/10 active:scale-95"
            title="Download current financials data is CSV format"
          >
            <DownloadCloud className="w-3.5 h-3.5 shrink-0" />
            <span>Download Data</span>
          </button>

          {/* iOS style segmental controls */}
          <div className="flex bg-neutral-200/40 p-1 border border-neutral-300/30 rounded-xl sm:rounded-2xl shrink-0">
            <button
              onClick={() => setIsConsolidated(true)}
              className={`min-h-[44px] px-3.5 py-2 sm:px-4 sm:py-2 text-[10.5px] sm:text-xs font-extrabold rounded-lg sm:rounded-xl transition duration-150 cursor-pointer ${
                isConsolidated
                  ? "bg-white text-blue-650 shadow-sm border border-neutral-250/20"
                  : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-850"
              }`}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              Consolidated
            </button>
            <button
              onClick={() => setIsConsolidated(false)}
              className={`min-h-[44px] px-3.5 py-2 sm:px-4 sm:py-2 text-[10.5px] sm:text-xs font-extrabold rounded-lg sm:rounded-xl transition duration-150 cursor-pointer ${
                !isConsolidated
                  ? "bg-white text-blue-650 shadow-sm border border-neutral-250/20"
                  : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-850"
              }`}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              Unconsolidated
            </button>
          </div>
        </div>
      </div>

      {/* CAGR Track & 5-Year Area Chart Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
        
        {/* Recharts area and line chart */}
        <div className="lg:col-span-8 p-4 sm:p-6 rounded-xl sm:rounded-2xl border bg-white/45 border-white/50 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="space-y-0.5">
              <h3 className="text-[10px] sm:text-xs uppercase font-mono tracking-wider sm:tracking-widest text-neutral-400 font-bold">5-Year Growth Cohort</h3>
              <p className="text-[8.5px] sm:text-[10px] text-neutral-500 font-mono font-bold tracking-tight uppercase">
                {chartType === "line"
                  ? "Revenue Growth Trend (PKR Millions) // Line Chart"
                  : "Revenue Trajectory vs Net Income (PKR Millions) // Area Chart"}
              </p>
            </div>
            
            {/* Chart type segmented toggle */}
            <div className="flex bg-neutral-200/40 p-1 border border-neutral-300/20 rounded-lg sm:rounded-xl shrink-0 self-end sm:self-auto">
              <button
                onClick={() => setChartType("line")}
                className={`min-h-[40px] px-3.5 py-2 text-[9px] sm:text-[10px] uppercase font-extrabold font-mono rounded-md sm:rounded-lg transition duration-150 cursor-pointer ${
                  chartType === "line"
                    ? "bg-white text-purple-705 shadow-xs border border-neutral-250/20"
                    : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-850"
                }`}
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                Line View
              </button>
              <button
                onClick={() => setChartType("area")}
                className={`min-h-[40px] px-3.5 py-2 text-[9px] sm:text-[10px] uppercase font-extrabold font-mono rounded-md sm:rounded-lg transition duration-150 cursor-pointer ${
                  chartType === "area"
                    ? "bg-white text-blue-650 shadow-xs border border-neutral-250/20"
                    : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-850"
                }`}
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                Unified Area
              </button>
            </div>
          </div>

          <div className="h-[200px] sm:h-[250px] w-full mt-4 font-mono text-[9px]">
            {chartType === "line" ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={HISTORICAL_CHART_DATA} margin={{ top: 20, right: 15, left: -20, bottom: 0 }}>
                  <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="year" stroke="#9ca3af" tickLine={false} />
                  <YAxis stroke="#9ca3af" tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#5F2E95"
                    strokeWidth={3}
                    name="Revenue"
                    dot={{ r: 5, stroke: "#5F2E95", strokeWidth: 2, fill: "#fff" }}
                    activeDot={{ r: 7, stroke: "#5F2E95", strokeWidth: 2, fill: "#fff" }}
                    label={{ fill: '#4c2475', fontSize: 9, dy: -12, fontWeight: 'bold' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={HISTORICAL_CHART_DATA} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="financialRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.15}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.01}/>
                    </linearGradient>
                    <linearGradient id="financialProfit" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.25}/>
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.01}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="year" stroke="#9ca3af" tickLine={false} />
                  <YAxis stroke="#9ca3af" tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={2.5} fillOpacity={1} fill="url(#financialRevenue)" />
                  <Area type="monotone" dataKey="profit" stroke="#8B5CF6" strokeWidth={2} fillOpacity={1} fill="url(#financialProfit)" />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Compound CAGR Cards */}
        <div className="lg:col-span-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl border bg-white/45 border-white/50 shadow-sm flex flex-col justify-between space-y-4 sm:space-y-6">
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-[10px] sm:text-xs uppercase font-mono tracking-wider sm:tracking-widest text-neutral-400 font-bold">CAGR Engine Metrics</h3>
            
            <div className="space-y-3.5 sm:space-y-4">
              <div className="border-l-2 border-blue-500 pl-3 sm:pl-4 space-y-0.5 sm:space-y-1">
                <span className="text-[8px] sm:text-[10px] text-neutral-400 font-mono font-bold uppercase">REVENUE CAGR</span>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-800">51%</div>
                <p className="text-[10px] sm:text-[11px] text-neutral-500 font-sans font-medium">Compounded revenue scaling over 5 years.</p>
              </div>

              <div className="border-l-2 border-purple-500 pl-3 sm:pl-4 space-y-0.5 sm:space-y-1">
                <span className="text-[8px] sm:text-[10px] text-purple-500 font-mono font-bold uppercase">PROFIT CAGR</span>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-purple-600">36%</div>
                <p className="text-[10px] sm:text-[11px] text-neutral-500 font-sans font-medium">Compounded bottom-line profit expansion.</p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-100/55 p-3.5 border border-neutral-200/50 rounded-xl font-sans text-[8.5px] sm:text-[10px] text-neutral-500 leading-normal font-medium uppercase tracking-wide">
            <div className="flex items-center space-x-1.5 text-neutral-750 font-bold mb-1">
              <FileSpreadsheet className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 shrink-0" />
              <span>Independent Auditor Note</span>
            </div>
            FY25 accounts reviewed by A.F. Ferguson &amp; Co (PwC). Outstanding credit metrics confirmed by PACRA &amp; VIS.
          </div>
        </div>
      </div>

      {/* Structured data details table */}
      <div className="rounded-xl sm:rounded-2xl border bg-white/45 border-white/50 overflow-hidden shadow-sm">
        <div className="p-4 sm:p-5 border-b border-neutral-150/40 flex justify-between items-center gap-2">
          <span className="text-[10px] sm:text-xs font-sans text-neutral-700 font-bold uppercase">Statement of Profit or Loss (Y/Y Analysis)</span>
          <span className="text-[8px] sm:text-[9px] font-mono text-neutral-400 uppercase font-bold shrink-0">Amounts in Millions PKR</span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full font-sans text-[11px] sm:text-xs">
            <thead>
              <tr className="border-b border-neutral-150/40 text-neutral-450 uppercase text-[9px] sm:text-[10px] font-bold tracking-wider text-left bg-neutral-100/20">
                <th className="py-2.5 px-3 sm:py-3.5 sm:px-6 font-bold text-neutral-550">Particulars</th>
                <th className="py-2.5 px-3 sm:py-3.5 sm:px-6 font-bold text-right">FY 2025</th>
                <th className="py-2.5 px-3 sm:py-3.5 sm:px-6 font-bold text-right">FY 2024</th>
                <th className="py-2.5 px-3 sm:py-3.5 sm:px-6 font-bold text-right">Growth Y/Y</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-150/30">
              {metrics.map((row) => (
                <tr
                  key={row.label}
                  className="hover:bg-blue-500/5 transition-colors duration-150"
                >
                  <td className="py-3 px-3 sm:py-4 sm:px-6 text-neutral-700 font-bold uppercase text-[10.5px] sm:text-xs leading-normal">
                    {row.label}
                  </td>
                  <td className="py-3 px-3 sm:py-4 sm:px-6 text-right text-neutral-800 font-mono font-semibold text-[10.5px] sm:text-xs">
                    {row.fy25}
                  </td>
                  <td className="py-3 px-3 sm:py-4 sm:px-6 text-right text-neutral-500 font-mono text-[10.5px] sm:text-xs">
                    {row.fy24}
                  </td>
                  <td className="py-3 px-3 sm:py-4 sm:px-6 text-right">
                    <span className={`inline-block px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg text-[8.5px] sm:text-[10px] font-bold font-mono ${
                      row.isPositive 
                        ? "bg-emerald-100 text-emerald-600" 
                        : "bg-rose-100 text-rose-600"
                    }`}>
                      {row.growth}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
