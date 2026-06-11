import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { REGIONAL_PERFORMANCE, GeographyPerformance } from "../data";
import { Globe, Compass, ArrowUpRight, MapPin, Sparkles, HelpCircle } from "lucide-react";

interface CountryPin {
  name: string;
  x: number;
  y: number;
  region: string;
  isHQ?: boolean;
  desc: string;
}

const COUNTRIES_PINPOINTS: CountryPin[] = [
  // MEA (Middle East & Africa)
  { name: "Dubai, UAE", x: 615, y: 220, region: "mea", desc: "Regional export hub for BFSI and public sector." },
  { name: "Riyadh, Saudi Arabia", x: 595, y: 225, region: "mea", desc: "Rapidly expanding market under Vision 2030." },
  { name: "Doha, Qatar", x: 608, y: 218, region: "mea", desc: "Large enterprise telecom and financial integrations." },
  { name: "Manama, Bahrain", x: 604, y: 221, region: "mea", desc: "Key retail banking and digital core solutions." },
  { name: "Muscat, Oman", x: 622, y: 226, region: "mea", desc: "Strategic public sector platform deliveries." },
  { name: "Johannesburg, South Africa", x: 550, y: 390, region: "mea", desc: "Telecommunication and cloud modernization programs." },
  
  // North America
  { name: "Dallas, USA", x: 210, y: 190, region: "na", desc: "North America Corporate Headquarters." },
  { name: "Santa Clara, USA", x: 165, y: 180, region: "na", desc: "Silicon Valley Innovation & delivery center." },
  { name: "New Jersey, USA", x: 245, y: 175, region: "na", desc: "Financial services and telecom partner programs." },
  { name: "Toronto, Canada", x: 235, y: 155, region: "na", desc: "Advanced cloud and application modernizations." },

  // Pakistan (Domestic)
  { name: "Lahore, Pakistan (HQ)", x: 655, y: 198, region: "pk", isHQ: true, desc: "Global headquarters and primary development campus with 8,271+ staff." },
  { name: "Karachi, Pakistan", x: 648, y: 209, region: "pk", desc: "Major secondary tech development and operations hub." },
  { name: "Islamabad, Pakistan", x: 658, y: 191, region: "pk", desc: "Core cloud engineering and public delivery office." },

  // Europe
  { name: "London, UK", x: 470, y: 144, region: "eu", desc: "UK Entity - European market client relations hub." },
  { name: "Frankfurt, Germany", x: 495, y: 148, region: "eu", desc: "Central European digital transformation deliveries." },

  // APAC
  { name: "Kuala Lumpur, Malaysia", x: 748, y: 282, region: "apac", desc: "ASEAN delivery base and BFSI service hub." },
  { name: "Singapore", x: 751, y: 290, region: "apac", desc: "APAC partner relations and financial hub." },
  { name: "Sydney, Australia", x: 865, y: 400, region: "apac", desc: "Cloud & enterprise portal modernization." },
];

export default function GeographyFootprint() {
  const [selectedGeo, setSelectedGeo] = useState<GeographyPerformance>(REGIONAL_PERFORMANCE[0]); // Default to MEA
  const [hoveredPin, setHoveredPin] = useState<CountryPin | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  // Map slugs to beautiful Tailwind gradients and markers colors
  const REGION_STYLES: Record<string, { fill: string; stroke: string; dot: string; glow: string }> = {
    mea: {
      fill: "rgba(124, 58, 237, 0.08)", // Purple
      stroke: "rgba(124, 58, 237, 0.3)",
      dot: "#7C3AED",
      glow: "rgba(124, 58, 237, 0.4)",
    },
    na: {
      fill: "rgba(37, 99, 235, 0.08)", // Blue
      stroke: "rgba(37, 99, 235, 0.3)",
      dot: "#2563EB",
      glow: "rgba(37, 99, 235, 0.4)",
    },
    pk: {
      fill: "rgba(16, 185, 129, 0.12)", // Emerald / Pakistan Green
      stroke: "rgba(16, 185, 129, 0.5)",
      dot: "#10B981",
      glow: "rgba(16, 185, 129, 0.5)",
    },
    eu: {
      fill: "rgba(236, 72, 153, 0.08)", // Pink
      stroke: "rgba(236, 72, 153, 0.4)",
      dot: "#EC4899",
      glow: "rgba(236, 72, 153, 0.4)",
    },
    apac: {
      fill: "rgba(245, 158, 11, 0.08)", // Amber
      stroke: "rgba(245, 158, 11, 0.3)",
      dot: "#F59E0B",
      glow: "rgba(245, 158, 11, 0.4)",
    },
  };

  const handleRegionClick = (slug: string) => {
    const geo = REGIONAL_PERFORMANCE.find((g) => g.slug === slug);
    if (geo) {
      setSelectedGeo(geo);
    }
  };

  // HQ Coordinates: Lahore (655, 198)
  const hqX = 655;
  const hqY = 198;

  // Major global hubs disconnected from HQ by virtual data pipelines
  const hubPins = COUNTRIES_PINPOINTS.filter(p => !p.isHQ && ["Dallas, USA", "London, UK", "Dubai, UAE", "Singapore", "Sydney, Australia"].includes(p.name));

  return (
    <div className="space-y-8 select-none">
      
      {/* Title section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-neutral-200/50 pb-4 gap-3">
        <div className="space-y-1">
          <span className="text-[7.5px] sm:text-[10px] tracking-wider sm:tracking-[0.2em] font-mono text-neutral-400 uppercase font-bold block">Global Operating Footprint</span>
          <h2 className="text-base sm:text-lg font-display font-black text-neutral-850 uppercase tracking-tight">Interactive Geography Map</h2>
        </div>
        <div className="flex items-center space-x-1.5 font-mono text-[8px] sm:text-[10px] text-blue-650 font-extrabold bg-blue-50 border border-blue-100 px-2 py-1 rounded-lg sm:rounded-xl shrink-0">
          <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-500 animate-spin shrink-0" style={{ animationDuration: "12s" }} />
          <span>EXPORT REVENUE: 86% OF GROUP TOTAL</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
        
        {/* World Map Component Container (7 columns) */}
        <div className="lg:col-span-8 p-3 sm:p-4 rounded-xl sm:rounded-2xl border bg-white border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex flex-col justify-between">
          <div className="flex justify-between items-center mb-3 sm:mb-4 px-2">
            <div>
              <h3 className="text-[10px] sm:text-xs uppercase font-mono tracking-wider sm:tracking-widest text-neutral-500 font-bold">Systems Global Delivery Grid</h3>
              <p className="text-[8px] sm:text-[9px] text-neutral-400 font-mono">HOVER DOTS OR REGIONS TO EXPLORE SATELLITE TEAMS</p>
            </div>
            
            {/* Legend color pills */}
            <div className="hidden sm:flex items-center space-x-2.5 text-[8px] font-mono font-bold tracking-wider">
              {REGIONAL_PERFORMANCE.map((geo) => {
                const style = REGION_STYLES[geo.slug];
                const isSelected = selectedGeo.slug === geo.slug;
                return (
                  <button
                    key={geo.slug}
                    onClick={() => handleRegionClick(geo.slug)}
                    onMouseEnter={() => setHoveredRegion(geo.slug)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    className={`flex items-center space-x-1 px-2 py-1 rounded-lg border transition-all ${
                      isSelected 
                        ? "bg-neutral-50 border-neutral-300 text-neutral-800 scale-105" 
                        : "bg-transparent border-transparent text-neutral-500 hover:border-neutral-200"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: style?.dot }} />
                    <span className="uppercase">{geo.slug} ({geo.percentage}%)</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Clean Interactive Vector Map Container */}
          <div className="relative border border-neutral-50 bg-slate-50/40 rounded-xl overflow-hidden aspect-[2/1] w-full">
            
            <svg 
              viewBox="0 0 1000 480" 
              className="w-full h-full transition-all duration-300"
            >
              {/* Subtle Grid Background for high-tech digital atlas visual look */}
              <defs>
                <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(226, 232, 240, 0.4)" strokeWidth="0.5" />
                </pattern>
                
                {/* Visual gradients for regions */}
                {Object.entries(REGION_STYLES).map(([slug, s]) => (
                  <linearGradient id={`grad-${slug}`} x1="0%" y1="0%" x2="100%" y2="100%" key={slug}>
                    <stop offset="0%" stopColor={s.dot} stopOpacity={0.12} />
                    <stop offset="100%" stopColor={s.dot} stopOpacity={0.02} />
                  </linearGradient>
                ))}
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />

              {/* BACKGROUND WORLD CONTINENTS REPRESENTATION
                  Highly simplified, premium geometric SVG paths for global visibility */}
              <g className="opacity-90">
                {/* North America Shape */}
                <path
                  id="map-region-na"
                  d="M 60,90 L 120,60 L 250,55 L 290,90 L 290,130 L 270,160 L 290,180 L 250,210 L 220,250 L 205,270 L 190,240 L 170,190 L 120,180 Z"
                  fill={hoveredRegion === "na" || selectedGeo.slug === "na" ? "url(#grad-na)" : "rgba(226, 232, 240, 0.4)"}
                  stroke={hoveredRegion === "na" || selectedGeo.slug === "na" ? REGION_STYLES.na.stroke : "rgba(203, 213, 225, 0.5)"}
                  strokeWidth={hoveredRegion === "na" || selectedGeo.slug === "na" ? 1.5 : 1}
                  className="transition-all duration-300 cursor-pointer"
                  onClick={() => handleRegionClick("na")}
                  onMouseEnter={() => setHoveredRegion("na")}
                  onMouseLeave={() => setHoveredRegion(null)}
                />

                {/* Europe Shape */}
                <path
                  id="map-region-eu"
                  d="M 410,130 L 470,95 L 515,90 L 530,120 L 535,155 L 480,185 L 440,180 L 415,150 Z"
                  fill={hoveredRegion === "eu" || selectedGeo.slug === "eu" ? "url(#grad-eu)" : "rgba(226, 232, 240, 0.4)"}
                  stroke={hoveredRegion === "eu" || selectedGeo.slug === "eu" ? REGION_STYLES.eu.stroke : "rgba(203, 213, 225, 0.5)"}
                  strokeWidth={hoveredRegion === "eu" || selectedGeo.slug === "eu" ? 1.5 : 1}
                  className="transition-all duration-300 cursor-pointer"
                  onClick={() => handleRegionClick("eu")}
                  onMouseEnter={() => setHoveredRegion("eu")}
                  onMouseLeave={() => setHoveredRegion(null)}
                />

                {/* Africa & Middle East (MEA) Shape */}
                <path
                  id="map-region-mea"
                  d="M 425,220 L 465,200 L 520,215 L 540,255 L 595,275 L 615,250 L 610,210 L 570,195 L 545,210 L 525,230 L 500,285 L 470,290 Z M 470,290 L 510,380 L 560,390 L 585,300 M 545,210 L 575,230 L 625,235 L 610,280 L 545,250 Z"
                  fill={hoveredRegion === "mea" || selectedGeo.slug === "mea" ? "url(#grad-mea)" : "rgba(226, 232, 240, 0.4)"}
                  stroke={hoveredRegion === "mea" || selectedGeo.slug === "mea" ? REGION_STYLES.mea.stroke : "rgba(203, 213, 225, 0.5)"}
                  strokeWidth={hoveredRegion === "mea" || selectedGeo.slug === "mea" ? 1.5 : 1}
                  className="transition-all duration-300 cursor-pointer"
                  onClick={() => handleRegionClick("mea")}
                  onMouseEnter={() => setHoveredRegion("mea")}
                  onMouseLeave={() => setHoveredRegion(null)}
                />

                {/* Domestic Pakistan highlighted specifically as global delivery anchor */}
                <path
                  id="map-region-pk"
                  d="M 635,190 L 670,185 L 685,205 L 670,225 L 638,220 Z"
                  fill={hoveredRegion === "pk" || selectedGeo.slug === "pk" ? "url(#grad-pk)" : "rgba(16, 185, 129, 0.05)"}
                  stroke={hoveredRegion === "pk" || selectedGeo.slug === "pk" ? REGION_STYLES.pk.stroke : "rgba(16, 185, 129, 0.2)"}
                  strokeWidth={hoveredRegion === "pk" || selectedGeo.slug === "pk" ? 2 : 1}
                  className="transition-all duration-300 cursor-pointer"
                  onClick={() => handleRegionClick("pk")}
                  onMouseEnter={() => setHoveredRegion("pk")}
                  onMouseLeave={() => setHoveredRegion(null)}
                />

                {/* Rest of Asia / APAC Shape */}
                <path
                  id="map-region-apac"
                  d="M 685,130 L 730,110 L 820,115 L 850,175 L 820,250 L 775,270 L 710,240 M 710,240 L 730,310 L 778,310 Z M 780,350 L 830,335 L 890,360 L 900,410 L 840,430 L 795,400 Z"
                  fill={hoveredRegion === "apac" || selectedGeo.slug === "apac" ? "url(#grad-apac)" : "rgba(226, 232, 240, 0.4)"}
                  stroke={hoveredRegion === "apac" || selectedGeo.slug === "apac" ? REGION_STYLES.apac.stroke : "rgba(203, 213, 225, 0.5)"}
                  strokeWidth={hoveredRegion === "apac" || selectedGeo.slug === "apac" ? 1.5 : 1}
                  className="transition-all duration-300 cursor-pointer"
                  onClick={() => handleRegionClick("apac")}
                  onMouseEnter={() => setHoveredRegion("apac")}
                  onMouseLeave={() => setHoveredRegion(null)}
                />
              </g>

              {/* VIRTUAL SUBSEA FIBER CABLE PIPELINES (HQ outward export link flows) */}
              <g className="pointer-events-none">
                {hubPins.map((hub, idx) => {
                  const style = REGION_STYLES[hub.region];
                  return (
                    <g key={`cable-${idx}`} className="opacity-80">
                      {/* Curved vector path from Lahore HQ to country hubs */}
                      <path
                        d={`M ${hqX} ${hqY} Q ${(hqX + hub.x) / 2} ${Math.min(hqY, hub.y) - 50} ${hub.x} ${hub.y}`}
                        fill="none"
                        stroke={selectedGeo.slug === hub.region ? style.dot : "rgba(148, 163, 184, 0.3)"}
                        strokeWidth="1.5"
                        strokeDasharray={selectedGeo.slug === hub.region ? "5,5" : "3,8"}
                        className={selectedGeo.slug === hub.region ? "animate-[dash_25s_linear_infinite]" : ""}
                      />
                    </g>
                  );
                })}
              </g>

              {/* ACTIVE GLOWING COUNTRY PINPOINTS */}
              <g>
                {COUNTRIES_PINPOINTS.map((pin) => {
                  const rStyle = REGION_STYLES[pin.region] || { dot: "#64748B", glow: "rgba(100, 116, 139, 0.2)" };
                  const isHovered = hoveredPin?.name === pin.name;
                  const isRegionSelected = selectedGeo.slug === pin.region;
                  const isRegionHovered = hoveredRegion === pin.region;

                  // High-fidelity node sizing
                  const radius = pin.isHQ ? 6.5 : isHovered ? 5.5 : 4.5;

                  return (
                    <g
                      key={pin.name}
                      transform={`translate(${pin.x}, ${pin.y})`}
                      className="cursor-pointer group"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRegionClick(pin.region);
                      }}
                      onMouseEnter={() => {
                        setHoveredPin(pin);
                        setHoveredRegion(pin.region);
                      }}
                      onMouseLeave={() => {
                        setHoveredPin(null);
                        setHoveredRegion(null);
                      }}
                    >
                      {/* Interactive click helper target (invisible breathing box) */}
                      <circle r="16" fill="transparent" />

                      {/* Ripple pulsing outer waves */}
                      {(pin.isHQ || isHovered || isRegionSelected) && (
                        <circle
                          r={pin.isHQ ? 16 : 11}
                          fill="none"
                          stroke={rStyle.dot}
                          strokeWidth="1.5"
                          className="animate-ping opacity-60"
                          style={{ animationDuration: pin.isHQ ? "1.8s" : "2.4s" }}
                        />
                      )}

                      {/* Internal radar back-glow */}
                      <circle
                        r={radius * 1.8}
                        fill={rStyle.dot}
                        className="opacity-20 group-hover:scale-125 transition-transform duration-250"
                      />

                      {/* Perfect core dot */}
                      <circle
                        r={radius}
                        fill={pin.isHQ ? "#EF4444" : rStyle.dot} // HQ stands out as systems flagship corporate red
                        stroke="#FFF"
                        strokeWidth={1.5}
                        className="transition-all duration-200"
                      />

                      {/* Special tiny text labels for prominent operations to make the map look visually detailed */}
                      {(isHovered || pin.isHQ || (isRegionSelected && ["Dubai, UAE", "Dallas, USA", "London, UK", "Sydney, Australia"].includes(pin.name))) && (
                        <text
                          y={pin.isHQ ? -10 : -8}
                          textAnchor="middle"
                          className="font-mono text-[8px] font-black tracking-wider fill-neutral-850 stroke-white stroke-[2px] paint-order-stroke select-none pointer-events-none"
                        >
                          {pin.isHQ ? "SYSTEMS GLOBAL HQ" : pin.name.split(",")[0].toUpperCase()}
                        </text>
                      )}
                    </g>
                  );
                })}
              </g>

            </svg>

            {/* Float HUD Interactive Tooltip */}
            <AnimatePresence>
              {hoveredPin && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-4 left-4 right-4 sm:left-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md border border-neutral-200/80 p-2.5 sm:p-3 rounded-xl shadow-xl pointer-events-none font-sans text-[11px] sm:text-xs space-y-1.5 z-20"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-[8px] sm:text-[9px] uppercase text-neutral-400">
                      Sovereign Hub Located
                    </span>
                    <span className="text-[7.5px] sm:text-[8px] font-mono font-black uppercase text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 shrink-0">
                      SYS LIVE
                    </span>
                  </div>
                  <h5 className="font-display font-bold text-neutral-900 inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 shrink-0" />
                    {hoveredPin.name}
                  </h5>
                  <p className="text-[9.5px] sm:text-[10px] text-neutral-600 font-medium leading-relaxed">
                    {hoveredPin.desc}
                  </p>
                  <div className="pt-1.5 border-t border-neutral-100 flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-neutral-500 font-bold">
                    <span>SECTOR: {hoveredPin.region.toUpperCase()}</span>
                    <span className="text-blue-600">CLICK TO SELECT</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* User Guide Ticker line */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between text-[8px] sm:text-[9px] font-mono text-neutral-400 px-1 pt-2 border-t border-neutral-100/50 gap-2">
            <span className="flex items-center gap-1 font-semibold uppercase">
              <Sparkles className="w-3 h-3 text-purple-500 animate-pulse shrink-0" />
              16+ Countries interconnected across Middle East, North America, Europe, Domestic & APAC.
            </span>
            <span className="hidden md:inline uppercase text-neutral-450 font-bold">
              HQ Hub Coordinates: LAT 31.5204° N, LON 74.3587° E
            </span>
          </div>
        </div>

        {/* Selected Area Metrics Pane (5 columns) */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Segment Selection Quick Pills */}
          <div className="flex flex-wrap sm:grid sm:grid-cols-5 gap-1 p-1 rounded-lg sm:rounded-xl bg-neutral-100 border border-neutral-200/50 font-mono">
            {REGIONAL_PERFORMANCE.map((geo) => {
              const isSelected = selectedGeo.slug === geo.slug;
              return (
                <button
                  key={geo.slug}
                  onClick={() => handleRegionClick(geo.slug)}
                  className={`flex-1 min-w-[55px] min-h-[44px] flex items-center justify-center py-1.5 sm:py-2 text-[8.5px] sm:text-[10px] text-center font-bold tracking-wider rounded-md sm:rounded-lg transition-all cursor-pointer ${
                    isSelected
                      ? "bg-white text-blue-600 shadow-sm border border-neutral-200/50"
                      : "text-neutral-500 hover:text-neutral-800"
                  }`}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  {geo.slug.toUpperCase()}
                </button>
              );
            })}
          </div>

          {/* Details Financial Card */}
          <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border bg-white border-neutral-200/40 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex flex-col justify-between min-h-[260px] sm:min-h-[290px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-xl pointer-events-none"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedGeo.slug}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="space-y-4 font-sans"
              >
                <div className="flex justify-between items-start gap-2">
                  <div className="space-y-1">
                    <span className={`inline-flex items-center gap-1 text-[8px] sm:text-[9px] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-mono font-bold uppercase tracking-wider ${
                      selectedGeo.slug === "pk" 
                        ? "bg-emerald-50 text-emerald-600 border border-emerald-200" 
                        : "bg-blue-50 text-blue-600 border border-blue-200"
                    }`}>
                      <MapPin className="w-3 h-3 shrink-0" /> {selectedGeo.status}
                    </span>
                    <h3 className="text-base sm:text-lg font-display font-black text-neutral-850 uppercase tracking-tight leading-snug">
                      {selectedGeo.name}
                    </h3>
                  </div>
                  
                  <div className="text-right whitespace-nowrap">
                    <span className="text-[8px] sm:text-[9px] text-neutral-400 font-mono block font-bold">REVENUE CONTRIBUTED</span>
                    <span className="font-mono text-neutral-850 text-sm sm:text-base font-extrabold">{selectedGeo.revenue} PKR</span>
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs text-neutral-600 leading-relaxed font-sans font-medium">
                  {selectedGeo.description}
                </p>

                {/* Sub KPI regional metrics */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-3.5 sm:pt-4 border-t border-neutral-100">
                  <div className="space-y-0.5">
                    <span className="text-[8px] sm:text-[9px] text-neutral-400 font-mono block uppercase font-bold">Weight of Exports</span>
                    <span className="text-neutral-800 text-[11px] sm:text-sm font-sans font-extrabold">{selectedGeo.percentage}% of global group</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[8px] sm:text-[9px] text-neutral-400 font-mono block uppercase font-bold">Y/Y Growth Scale</span>
                    <span className="text-emerald-750 text-[11px] sm:text-sm font-sans font-extrabold inline-flex items-center">
                      {selectedGeo.growth}
                      <ArrowUpRight className="w-3.5 h-3.5 ml-0.5 shrink-0" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="mt-4 sm:mt-6 p-3 sm:p-3.5 bg-neutral-50 border border-neutral-200/50 rounded-xl flex items-start space-x-2 text-[8.5px] sm:text-[10px] font-sans text-neutral-500 font-bold uppercase tracking-normal sm:tracking-wider leading-relaxed">
              <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-purple-750 font-extrabold">Expansion Strategy:</span> Establishing Europe UK specialized delivery entities, and aggressively scaling the North America market via the Confiz technology consolidation models.
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
