import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  TrendingUp,
  Globe,
  Award,
  Users,
  Cpu,
  Bookmark,
  Building2,
  FileSpreadsheet,
  Zap,
  Leaf,
  Layers,
  Sparkles,
  DollarSign,
  Cloud,
  Database,
  Laptop,
  CheckCircle2,
  Briefcase
} from "lucide-react";
import { HISTORICAL_CHART_DATA } from "../data";

interface HomeDashboardProps {
  onNavigate: (sectionId: number) => void;
}

export default function HomeDashboard({ onNavigate }: HomeDashboardProps) {
  const [activeIndustry, setActiveIndustry] = useState<string>("bfsi");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "Pakistan",
    message: ""
  });

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const triggerLiveFetch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.email) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          country: "Pakistan",
          message: ""
        });
      }, 5000);
    }
  };

  const industries = [
    {
      id: "bfsi",
      title: "Banking & Financial Services",
      desc: "Accelerating modern banking architectures. We partner with Temenos and top-tier vendors to deliver secure digital wallets, core banking migrations, and AI-led risk scoring ledger portals.",
      stat: "PKR 23.9B Contribution",
      metric: "59% total BFSI growth weight"
    },
    {
      id: "telco",
      title: "Telecommunications & Media",
      desc: "Architecting high-performance operations support systems (OSS/BSS) and cloud integrations that streamline subscriber customer lifecycles and real-time ledger records.",
      stat: "PKR 14.8B Active Volume",
      metric: "99.99% carrier uptime engineered"
    },
    {
      id: "hospitality",
      title: "Hospitality & Retail",
      desc: "Empowering hyper-personalized retail checkouts, loyalty platforms, dynamic inventory systems, and predictive supply margins powered by custom LLM solutions.",
      stat: "PKR 11.2B Sector Size",
      metric: "40% conversion boost for clients"
    },
    {
      id: "public",
      title: "Public Sector & Sovereigns",
      desc: "Supporting complex digital citizen identities, public ledger audit workflows, cloud infrastructure, and national database modernization agendas securely.",
      stat: "National-Scale Systems",
      metric: "Trusted by tier-1 state enterprises"
    }
  ];

  const services = [
    {
      title: "AI Transformation",
      icon: Cpu,
      desc: "Drive measurable business value with scalable AI capabilities across GenAI, Predictive AI, ML, and automation to enhance decisions, productivity, and operational agility.",
      badge: "Production Ready AI",
      navId: 5 // AI section
    },
    {
      title: "Data and Analytics",
      icon: Database,
      desc: "Organise, analyse, and activate your data to uncover insights faster, make better decisions, and stay competitive in constantly changing markets.",
      badge: "PwC Audited Workflows",
      navId: 2 // Financials section
    },
    {
      title: "Cloud",
      icon: Cloud,
      desc: "From cloud migration to optimisation, we create secure, scalable environments that improve agility, reduce complexity, and support continuous innovation across your enterprise.",
      badge: "Multi-Cloud certified",
      navId: 3 // Geography section
    },
    {
      title: "Digital",
      icon: Laptop,
      desc: "We bring strategy, design, and technology together through a unified approach, helping you modernise systems, improve customer journeys, and deliver meaningful business outcomes.",
      badge: "UX & Core Architecture",
      navId: 4 // Verticals section
    }
  ];

  const alliances = [
    { name: "Microsoft", role: "AI & Business Inner Circle" },
    { name: "Temenos", role: "Core Banking Integrator" },
    { name: "SAP", role: "Gold Implementation Partner" },
    { name: "IBM", role: "Cloud & Infrastructure" },
    { name: "Salesforce", role: "CRM & Multi-Channel CX" },
    { name: "Oracle", role: "ERP Systems & Cloud Databases" },
    { name: "Red Hat", role: "Enterprise Kubernetes" },
    { name: "Sprinklr", role: "Modern Customer Experience" },
    { name: "AWS", role: "Worldwide Consulting Partner" }
  ];

  const accolades = [
    {
      title: "Forbes Asia",
      subtitle: "BEST UNDER A BILLION",
      year: "2023 Recipient",
      desc: "Fastest growing technology enterprise in the Asia-Pacific territory."
    },
    {
      title: "Microsoft Business Solutions",
      subtitle: "INNER CIRCLE AWARD",
      year: "2025 - 2026",
      desc: "Ranked among top global Microsoft technology partners fifth time in a row."
    },
    {
      title: "Everest Group",
      subtitle: "PEAK MATRIX ASSESSMENT",
      year: "BFSI IT Services 2025",
      desc: "Recognized as an elite 'Aspirant' for breakthrough financial implementations."
    },
    {
      title: "Global BankTech Awards",
      subtitle: "EXCELLENCE IN BANKING",
      year: "FY25 Award Winner",
      desc: "Recognized for Outstanding Financial Technology Execution & Security."
    }
  ];

  return (
    <div className="space-y-16 py-4">
      
      {/* Simulation Controls Banner */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-white/70 backdrop-blur-md rounded-2xl border border-neutral-200/60 shadow-xs gap-3">
        <div className="flex items-center space-x-2.5">
          <div className="flex items-center justify-center">
            <span className="relative flex h-2.5 w-2.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isLoading ? "bg-amber-400" : "bg-emerald-400"}`}></span>
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isLoading ? "bg-amber-500" : "bg-emerald-500"}`}></span>
            </span>
          </div>
          <div className="space-y-0.5">
            <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-neutral-800">
              Systems Limited Connection Engine
            </span>
            <p className="text-[10px] text-neutral-500 font-mono">
              {isLoading ? "STREAMING AUDITED CORPORATE BLUEPRINTS & METRICS FROM INGRESS PROXIES..." : "STATUS: LIVE CACHED SECURELY (2026-06-10)"}
            </p>
          </div>
        </div>

        <button
          onClick={triggerLiveFetch}
          disabled={isLoading}
          className={`px-4 py-2 font-mono text-[10px] font-bold rounded-xl border transition-all pointer-events-auto cursor-pointer flex items-center gap-1.5 uppercase ${
            isLoading
              ? "bg-neutral-100 text-neutral-400 border-neutral-200 cursor-not-allowed"
              : "bg-purple-50 text-purple-750 border-purple-200 hover:bg-purple-100/80 active:scale-95 text-purple-700"
          }`}
        >
          <Zap className={`w-3.5 h-3.5 ${isLoading ? "animate-bounce" : "text-purple-600"}`} />
          {isLoading ? "Fetching Assets..." : "Simulate Refresh API Call"}
        </button>
      </div>

      {/* 1. HERO BANNER - MATCHING SYSTEMS LIMITED WEB COVERAGE */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#4c2475] via-[#5F2E95] to-[#802D96] text-white p-8 md:p-14 shadow-xl border border-purple-500/20">
        {/* Animated design waves in background mimicking official wave graphics */}
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100 Q 360 300, 720 100 T 1440 100 L 1440 800 L 0 800 Z" fill="url(#wave-gradient)" />
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl space-y-6">
          <span className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md rounded-full px-3 py-1 text-[10px] font-mono font-bold tracking-widest uppercase text-purple-200">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>GLOBAL SYSTEMS ENGAGEMENT & AI INTEGRATIONS</span>
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-tight uppercase font-black">
            IT consulting and <br />
            AI transformation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300">
              built for tomorrow
            </span>
          </h1>

          <p className="text-sm md:text-base text-purple-100 max-w-2xl leading-relaxed font-sans font-medium">
            Helping enterprises modernize, scale, and lead through world-class technology delivery. Systems Limited represents an unmatched engine of digital export services and custom AI architectures spanning 5 global regions.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate(2)} // Navigate to Financial Metrics (id 2 matches app.tsx list)
              className="inline-flex items-center space-x-2.5 bg-white text-purple-900 hover:bg-neutral-100 transition-all font-sans font-extrabold text-xs px-6 py-3.5 rounded-full shadow-lg active:scale-95 cursor-pointer"
            >
              <span>EXPLORE FY25 PERFORMANCE MATRIX</span>
              <ArrowRight className="w-4 h-4 text-purple-900" />
            </button>
            <button
              onClick={() => {
                const formEl = document.getElementById("contact-section");
                formEl?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center space-x-2 bg-transparent hover:bg-white/10 text-white font-mono font-bold text-xs px-5 py-3 rounded-full border border-white/20 transition-colors uppercase cursor-pointer"
            >
              <span>Build the future now</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. STATS OVERVIEW - "FROM DIGITAL CHANGE TO AI-POWERED ADVANTAGE" */}
      <div className="bg-white border border-neutral-150 rounded-3xl p-8 md:p-10 shadow-sm space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] tracking-[0.25em] font-mono text-purple-600 font-bold uppercase block">
              Systems Limited Advantage
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-black text-neutral-850 uppercase leading-tight">
              From digital change to AI-powered advantage
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-sans font-medium">
              We help enterprises reimagine how they work, serve, and grow with AI-led transformation that turns complexity into clarity and ambition into measurable corporate success. Systems Limited continuously delivers tier-1 software blueprints internationally.
            </p>
          </div>
        </div>

        {/* Triple Numerical Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-neutral-150">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-3 pointer-events-none select-none">
                <div className="h-10 w-28 bg-neutral-200 animate-pulse rounded-lg" />
                <div className="h-4.5 w-3/4 bg-neutral-200 animate-pulse rounded" />
                <div className="space-y-1.5 pt-1">
                  <div className="h-3 w-full bg-neutral-150 animate-pulse rounded" />
                  <div className="h-3 w-5/6 bg-neutral-150 animate-pulse rounded" />
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="space-y-2">
                <div className="text-5xl font-display font-black tracking-tight text-purple-700">49+</div>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                  Years of continual success
                </p>
                <p className="text-xs text-neutral-500 font-sans leading-relaxed">
                  Serving global partners since 1977 as an enterprise engineering pillar with persistent market authority.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-5xl font-display font-black tracking-tight text-purple-700">8,500+</div>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                  Change makers driving digital change
                </p>
                <p className="text-xs text-neutral-500 font-sans leading-relaxed">
                  Highly specialized technical engineers, cloud practitioners, and custom Generative AI product experts.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-5xl font-display font-black tracking-tight text-purple-700">16+</div>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                  Countries of global presence
                </p>
                <p className="text-xs text-neutral-500 font-sans leading-relaxed">
                  Scalable delivery channels in North America, Europe, United Kingdom, MEA, and across APAC.
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* 3. RECOGNITIONS & ACCOLADES CARDS */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] tracking-[0.2em] font-mono text-purple-600 font-bold uppercase">
            Global Standing
          </span>
          <h2 className="text-xl md:text-2xl font-display font-black text-neutral-850 uppercase tracking-tight">
            Awards & Recognized Influence
          </h2>
          <p className="text-xs text-neutral-500 font-sans">
            Our audited growth models and world-class product integrations receive constant global validation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-neutral-200/60 bg-white/70 shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="h-5 w-24 bg-neutral-200 animate-pulse rounded-full" />
                  <div className="h-4.5 w-11/12 bg-neutral-200 animate-pulse rounded-lg" />
                  <div className="h-3 w-1/2 bg-neutral-200 animate-pulse rounded-md" />
                  <div className="space-y-1.5 pt-1">
                    <div className="h-3 w-full bg-neutral-150 animate-pulse rounded" />
                    <div className="h-3 w-4/5 bg-neutral-150 animate-pulse rounded" />
                  </div>
                </div>
                <div className="pt-3 border-t border-neutral-100 flex items-center space-x-1.5">
                  <div className="h-3.5 w-3.5 bg-neutral-200 animate-pulse rounded-full" />
                  <div className="h-3 w-1/2 bg-neutral-150 animate-pulse rounded" />
                </div>
              </div>
            ))
          ) : (
            accolades.map((award, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-neutral-200/60 bg-white/70 shadow-sm space-y-3 flex flex-col justify-between hover:border-purple-300 transition-all duration-200"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full w-max">
                    {award.year}
                  </div>
                  <h3 className="text-sm font-display font-extrabold text-neutral-805 uppercase leading-tight">
                    {award.title}
                  </h3>
                  <h4 className="text-[9px] font-mono font-black text-neutral-400 uppercase tracking-widest block">
                    {award.subtitle}
                  </h4>
                  <p className="text-xs text-neutral-500 font-sans leading-relaxed">
                    {award.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-100 flex items-center space-x-1.5 text-neutral-400 font-mono text-[9px] font-bold uppercase">
                  <Award className="w-3.5 h-3.5 text-yellow-500" />
                  <span>Audited Accolade</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* 4. OUR SERVICES - MATCHING THE EXQUISITE SVG SHAPES OF THE WEBSITE COVERAGE */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-neutral-150 pb-4">
          <div className="space-y-1">
            <span className="text-[10px] tracking-[0.2em] font-mono text-purple-600 font-bold uppercase block">
              Core Capabilities
            </span>
            <h2 className="text-xl md:text-2xl font-display font-black text-neutral-850 uppercase tracking-tight">
              Our Certified Services
            </h2>
          </div>
          <button
            onClick={() => onNavigate(4)} // Navigate to business divisions
            className="text-xs font-mono font-bold text-purple-600 hover:text-purple-800 flex items-center gap-1 uppercase"
          >
            <span>DISCOVER OUR FULL CAPABILITIES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200/70 rounded-2xl p-6 min-h-[290px] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4 shadow-sm">
                  <div className="h-11 w-11 bg-neutral-200 animate-pulse rounded-xl" />
                  <div className="space-y-2">
                    <div className="h-3.5 w-1/3 bg-neutral-200 animate-pulse rounded-full" />
                    <div className="h-4.5 w-2/3 bg-neutral-200 animate-pulse rounded-lg" />
                    <div className="space-y-1.5 pt-1">
                      <div className="h-3 w-full bg-neutral-150 animate-pulse rounded" />
                      <div className="h-3 w-11/12 bg-neutral-150 animate-pulse rounded" />
                      <div className="h-3 w-4/5 bg-neutral-150 animate-pulse rounded" />
                    </div>
                  </div>
                </div>
                <div className="h-4 w-20 bg-neutral-200 animate-pulse rounded" />
              </div>
            ))
          ) : (
            services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white border border-neutral-200/70 rounded-2xl shadow-sm flex flex-col justify-between overflow-hidden hover:shadow-md transition-all duration-300 min-h-[290px] hover:border-purple-300"
                >
                  <div className="p-6 space-y-4">
                    <div className="p-3 bg-purple-50 rounded-xl w-max group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 text-purple-600 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono font-extrabold text-[#802D96]/80 tracking-widest uppercase block">
                        {service.badge}
                      </span>
                      <h3 className="text-sm font-sans font-extrabold text-neutral-800 leading-snug group-hover:text-purple-700 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[11px] text-neutral-500 leading-relaxed font-sans font-medium">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  {/* Aesthetic purple wavy decorative pattern at bottom resembling the original print */}
                  <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-[#5F2E95] via-[#802D96]/30 to-[#4c2475] opacity-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"></div>

                  <div className="px-6 pb-6 pt-2 flex items-center justify-between z-10">
                    <button
                      onClick={() => onNavigate(service.navId)}
                      className="inline-flex items-center space-x-1 text-[11px] font-sans font-black text-[#5F2E95] hover:text-[#802D96] uppercase"
                    >
                      <span>LEARN MORE</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* 5. INDUSTRIES WE SERVE - MOCKING ORIGINAL SWITCHER INTERACTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-neutral-50/50 border border-neutral-150 rounded-3xl p-8 md:p-10 shadow-sm items-center">
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-1.5">
            <span className="text-[10px] tracking-[0.2em] font-mono text-purple-600 font-bold uppercase block">
              Global Scale
            </span>
            <h2 className="text-2xl font-display font-black text-neutral-850 uppercase tracking-tight">
              Industries we serve
            </h2>
            <p className="text-xs text-neutral-500 font-sans">
              We partner with global enterprises across industries to solve complex challenges through practical, scalable technology services.
            </p>
          </div>

          {/* Interactive Industrial lists */}
          <div className="flex flex-col space-y-2">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveIndustry(ind.id)}
                className={`w-full text-left p-3.5 rounded-xl transition-all duration-150 flex items-center justify-between text-xs font-bold uppercase cursor-pointer border ${
                  activeIndustry === ind.id
                    ? "bg-white border-purple-300 text-purple-700 shadow-sm font-extrabold scale-1.02 pl-5"
                    : "bg-transparent border-transparent text-neutral-500 hover:text-neutral-850 hover:bg-white/50"
                }`}
              >
                <span>{ind.title}</span>
                <ArrowRight className={`w-3.5 h-3.5 text-purple-600 transition-transform ${
                  activeIndustry === ind.id ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0"
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic industry detail block */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-neutral-150 p-6 md:p-8 space-y-6 shadow-sm flex flex-col justify-between min-h-[300px]">
          {isLoading ? (
            <div className="space-y-6 flex flex-col justify-between h-full pointer-events-none select-none">
              <div className="space-y-4">
                <div className="h-5 w-44 bg-neutral-200 animate-pulse rounded-full" />
                <div className="h-6 w-3/4 bg-neutral-200 animate-pulse rounded-lg" />
                <div className="space-y-2 pt-1">
                  <div className="h-3 w-full bg-neutral-150 animate-pulse rounded" />
                  <div className="h-3 w-11/12 bg-neutral-150 animate-pulse rounded" />
                  <div className="h-3 w-5/6 bg-neutral-150 animate-pulse rounded" />
                </div>
              </div>
              <div className="pt-6 border-t border-neutral-150 grid grid-cols-2 gap-4">
                <div className="space-y-2 border-l-2 border-neutral-200 pl-3">
                  <div className="h-3 w-16 bg-neutral-100 animate-pulse rounded" />
                  <div className="h-4.5 w-24 bg-neutral-200 animate-pulse rounded" />
                </div>
                <div className="space-y-2 border-l-2 border-neutral-200 pl-3">
                  <div className="h-3 w-16 bg-neutral-100 animate-pulse rounded" />
                  <div className="h-4.5 w-24 bg-neutral-200 animate-pulse rounded" />
                </div>
              </div>
            </div>
          ) : (
            industries.map((ind) => {
              if (ind.id !== activeIndustry) return null;
              return (
                <div key={ind.id} className="space-y-6 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="inline-flex items-center space-x-1.5 text-[#802D96] font-display font-extrabold text-xs uppercase bg-purple-50 px-3 py-1 rounded-full">
                      <Briefcase className="w-3.5 h-3.5 text-purple-600" />
                      <span>Sector Active Blueprints</span>
                    </div>
                    <h3 className="text-lg font-display font-black text-neutral-850 uppercase tracking-tight leading-snug">
                      {ind.title} Solutions Portfolio
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-sans font-medium">
                      {ind.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-neutral-150 grid grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1 border-l-2 border-purple-500 pl-3">
                      <span className="text-[10px] text-neutral-400 font-mono font-bold uppercase">AUDITED METRIC</span>
                      <div className="text-sm font-display font-extrabold text-neutral-800">{ind.stat}</div>
                    </div>
                    <div className="space-y-1 border-l-2 border-pink-500 pl-3">
                      <span className="text-[10px] text-neutral-400 font-mono font-bold uppercase">DOMAIN WEIGHT</span>
                      <div className="text-sm font-display font-extrabold text-neutral-800">{ind.metric}</div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* 6. TECHNOLOGY ALLIANCES GRID */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] tracking-[0.2em] font-mono text-purple-600 font-bold uppercase">
            Global Ecosystem
          </span>
          <h2 className="text-xl md:text-2xl font-display font-black text-neutral-850 uppercase tracking-tight">
            Built on strong technology alliances
          </h2>
          <p className="text-xs text-neutral-500 font-sans">
            We partner with the world's leading technology creators to deliver high-impact certified service delivery.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3">
          {isLoading ? (
            Array.from({ length: 9 }).map((_, idx) => (
              <div
                key={idx}
                className="p-3 bg-neutral-50/70 border border-neutral-200/50 rounded-xl space-y-2 animate-pulse text-center select-none"
              >
                <div className="h-3 w-3/4 mx-auto bg-neutral-200 rounded" />
                <div className="h-2.5 w-1/2 mx-auto bg-neutral-150 rounded" />
              </div>
            ))
          ) : (
            alliances.map((partner, idx) => (
              <div
                key={idx}
                className="p-3 bg-white border border-neutral-200/60 rounded-xl text-center space-y-1 shadow-xs hover:border-purple-300 hover:shadow-sm transition-all text-xs"
                title={`${partner.name} - ${partner.role}`}
              >
                <div className="font-display font-black text-neutral-800 text-xs md:text-[13px] tracking-tight truncate">
                  {partner.name}
                </div>
                <div className="text-[8px] font-mono text-neutral-400 uppercase truncate leading-none">
                  {partner.role}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="text-center">
          <button
            onClick={() => onNavigate(6)} // Navigate to Inorganic M&A & Staff / Partners (id 6)
            className="inline-flex items-center space-x-2 bg-neutral-100/80 hover:bg-neutral-200/50 text-neutral-700 font-mono font-bold text-[10px] px-4 py-2 rounded-xl transition-all border border-neutral-200/50 cursor-pointer"
          >
            <span>VIEW ALL PARTNERS & ALLIANCES</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* 7. WHERE CAREERS TAKE SHAPE BANNER */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-8 md:p-10 shadow-lg border border-purple-800/25">
        <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2.5 max-w-xl">
            <span className="inline-block text-[10px] tracking-[0.25em] font-mono text-pink-300 font-extrabold uppercase bg-pink-500/15 px-3 py-1 rounded">
              Systems Limited Careers
            </span>
            <h3 className="text-xl md:text-3xl font-display font-black text-white uppercase tracking-tight">
              Where careers take shape
            </h3>
            <p className="text-xs text-purple-100 font-sans leading-relaxed">
              Build meaningful work with a team that values continuous upskilling program methodologies, genuine developer community residencies, and impactful digital deployments.
            </p>
          </div>

          <button
            onClick={() => onNavigate(7)} // Navigate to Acquisitions / HR section
            className="inline-flex items-center space-x-1.5 bg-white text-purple-900 hover:bg-neutral-100 font-sans font-extrabold text-xs px-5 py-3 rounded-full shadow-md active:scale-95 cursor-pointer uppercase shrink-0"
          >
            <span>EXPLORE CAREERS</span>
            <ArrowRight className="w-3.5 h-3.5 text-purple-900" />
          </button>
        </div>
      </div>

      {/* 8. LET'S BUILD TOGETHER INTERACTIVE CONTACT FORM */}
      <div id="contact-section" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-neutral-200 pt-12">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-[10px] tracking-[0.2em] font-mono text-purple-600 font-bold uppercase block">
            Initiate Contact
          </span>
          <h2 className="text-3xl font-display font-black text-neutral-850 uppercase tracking-tight leading-none">
            Let's build <br />
            what's next, <br />
            together.
          </h2>
          <p className="text-xs text-neutral-500 font-sans leading-relaxed pr-6 font-medium">
            Contact Systems Limited's certified consultancy experts. Submit your corporate inquiry to run simulated analytics, request customized Generative AI deployment packages, or access detailed auditing reports.
          </p>
          
          <div className="space-y-2 text-xs font-mono text-neutral-400">
            <p className="text-[9px] font-bold tracking-widest uppercase">OFFICIAL REGISTRY ADDRESS</p>
            <p className="leading-relaxed font-sans text-neutral-600">
              SYS House, 152-A, Sector DD, Phase IV, DHA, Lahore, Pakistan.
            </p>
            <p className="font-sans text-neutral-600">
              UAN: +92 42 111-SYSTEM (797-836)
            </p>
          </div>
        </div>

        {/* Stateful interactive form */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-neutral-150 p-6 md:p-8 shadow-sm relative">
          {formSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="inline-flex bg-emerald-50 text-emerald-600 p-4 rounded-full border border-emerald-150">
                <CheckCircle2 className="w-8 h-8 animate-bounce" />
              </div>
              <h3 className="text-lg font-display font-black text-neutral-800 uppercase tracking-tight">
                Inquiry Logged Successfully
              </h3>
              <p className="text-xs text-neutral-500 font-sans max-w-sm mx-auto leading-relaxed">
                Thank you. Your corporate inquiry has been validated securely by client proxy services. We will coordinate with Asif Peer's executive scheduling engine.
              </p>
              <div className="pt-2">
                <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest bg-neutral-100 px-3 py-1 rounded-full">
                  Status: PENDING EXECUTIVE DISPATCH
                </span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] text-neutral-400 font-extrabold uppercase">
                    First Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="Enter first name"
                    className="w-full text-xs font-sans p-3 border border-neutral-200 rounded-xl focus:border-purple-500 focus:outline-none bg-neutral-50/50"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-neutral-400 font-extrabold uppercase">
                    Last Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Enter last name"
                    className="w-full text-xs font-sans p-3 border border-neutral-200 rounded-xl focus:border-purple-500 focus:outline-none bg-neutral-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] text-neutral-400 font-extrabold uppercase">
                    Corporate Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full text-xs font-sans p-3 border border-neutral-200 rounded-xl focus:border-purple-500 focus:outline-none bg-neutral-50/50"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-neutral-400 font-extrabold uppercase">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Systems Limited"
                    className="w-full text-xs font-sans p-3 border border-neutral-200 rounded-xl focus:border-purple-500 focus:outline-none bg-neutral-50/50"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] text-neutral-400 font-extrabold uppercase">
                  Country / Sovereign Territory
                </label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full text-xs font-sans p-3 border border-neutral-200 rounded-xl focus:border-purple-500 focus:outline-none bg-neutral-50/50"
                >
                  <option value="Pakistan">Pakistan</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] text-neutral-400 font-extrabold uppercase">
                  Statement or Inquiry Details
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify services requested..."
                  className="w-full text-xs font-sans p-3 border border-neutral-200 rounded-xl focus:border-purple-500 focus:outline-none bg-neutral-50/50"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex justify-center items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white font-sans font-extrabold text-xs px-5 py-3.5 rounded-xl transition duration-150 active:scale-99 shadow-md shadow-purple-500/15 cursor-pointer uppercase"
              >
                <span>SEND INQUIRY TO SYSTEMS LIMITED</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
