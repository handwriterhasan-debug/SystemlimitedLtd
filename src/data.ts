export interface FinancialMetric {
  label: string;
  fy25: string | number;
  fy24: string | number;
  growth: string;
  isPositive: boolean;
}

export interface ChartDataYear {
  year: number;
  revenue: number; // in Millions PKR
  profit: number;  // in Millions PKR
  employees: number;
}

export interface SegmentContribution {
  name: string;
  revenue2025: number;
  revenue2024: number;
  growth: string;
  importance: string;
  highlight: string;
}

export interface GeographyPerformance {
  name: string;
  slug: string;
  revenue: string;
  percentage: number;
  growth: string;
  status: "Core leading" | "High growth" | "Turnaround" | "Accelerating" | "Stabilizing";
  description: string;
}

export interface AICaseStudy {
  title: string;
  clientCohort: string;
  domain: string;
  techStack: string[];
  impactMetric: string;
  summary: string;
}

export interface BoardMember {
  name: string;
  title: string;
  type: "Executive" | "Non-Executive" | "Independent";
  qualifications: string[];
  roleDescription: string;
}

export const FINANCIAL_HIGHLIGHTS_CONSOLIDATED: FinancialMetric[] = [
  { label: "Revenue", fy25: "80,391.88M", fy24: "67,473.02M", growth: "+19.1%", isPositive: true },
  { label: "Gross Profit", fy25: "22,409.26M", fy24: "16,157.70M", growth: "+38.7%", isPositive: true },
  { label: "Operating Profit", fy25: "12,006.34M", fy24: "8,271.97M", growth: "+45.1%", isPositive: true },
  { label: "Profit Before Tax", fy25: "12,448.25M", fy24: "8,291.30M", growth: "+50.1%", isPositive: true },
  { label: "Profit After Tax (PAT)", fy25: "11,040.58M", fy24: "7,460.01M", growth: "+48.0%", isPositive: true },
  { label: "Basic Earnings Per Share", fy25: "7.52 PKR", fy24: "5.11 PKR", growth: "+47.2%", isPositive: true },
  { label: "Diluted Earnings Per Share", fy25: "7.44 PKR", fy24: "5.07 PKR", growth: "+46.8%", isPositive: true },
];

export const FINANCIAL_HIGHLIGHTS_UNCONSOLIDATED: FinancialMetric[] = [
  { label: "Revenue", fy25: "44,230.61M", fy24: "38,526.98M", growth: "+14.8%", isPositive: true },
  { label: "Gross Profit", fy25: "11,840.00M", fy24: "9,683.31M", growth: "+22.3%", isPositive: true },
  { label: "Operating Profit", fy25: "7,650.78M", fy24: "5,720.38M", growth: "+33.7%", isPositive: true },
  { label: "Profit After Tax (PAT)", fy25: "8,019.01M", fy24: "6,115.30M", growth: "+31.1%", isPositive: true },
  { label: "Basic Earnings Per Share", fy25: "5.46 PKR", fy24: "4.19 PKR", growth: "+30.3%", isPositive: true },
];

export const HISTORICAL_CHART_DATA: ChartDataYear[] = [
  { year: 2021, revenue: 15304, profit: 4380, employees: 5500 },
  { year: 2022, revenue: 31760, profit: 6630, employees: 6500 },
  { year: 2023, revenue: 53435, profit: 8689, employees: 7398 },
  { year: 2024, revenue: 67473, profit: 7460, employees: 7967 },
  { year: 2025, revenue: 80392, profit: 11041, employees: 8271 },
];

export const REGIONAL_PERFORMANCE: GeographyPerformance[] = [
  {
    name: "Middle East & Africa (MEA)",
    slug: "mea",
    revenue: "47,110M",
    percentage: 59,
    growth: "+19.1%",
    status: "Core leading",
    description: "MEA remains the anchor of the Group's international expansion, contributing 59% of entire consolidated revenue. Trajectory is led by high-growth operations in UAE, KSA, and Bahrain.",
  },
  {
    name: "North America",
    slug: "na",
    revenue: "14,771M",
    percentage: 18,
    growth: "+6.3%",
    status: "High growth",
    description: "Represents a massive long-term opportunity. Strategy is heavily catalyzed by the recent structural acquisition of Confiz to cross-sell and up-sell to high-profile Fortune 500 enterprise clients.",
  },
  {
    name: "Pakistan (Domestic)",
    slug: "pk",
    revenue: "11,500M",
    percentage: 14,
    growth: "+32.0%",
    status: "Turnaround",
    description: "Outstanding domestic turnaround, converting a -6% operating loss in FY24 into a positive +7.3% operating profit in FY25 through streamlined cost containment and higher-quality USD indexation contracts.",
  },
  {
    name: "Europe",
    slug: "eu",
    revenue: "4,239M",
    percentage: 5,
    growth: "+40.3%",
    status: "Accelerating",
    description: "Focus is on scaling regional setups and establishing a robust UK entity to act as a crucial delivery and client-relations hub for broader European geographical expansions.",
  },
  {
    name: "Asia Pacific (APAC)",
    slug: "apac",
    revenue: "2,771M",
    percentage: 4,
    growth: "+20.5%",
    status: "Stabilizing",
    description: "Prior year strategic investments are yielding tangible pipelines across Vietnam, Malaysia, and Indonesia, anchored by key BFSI implementations and regional partner frameworks.",
  },
];

export const VERTICAL_SEGMENTS: SegmentContribution[] = [
  {
    name: "BFSI (Banking & Financial Services)",
    revenue2025: 23905,
    revenue2024: 20507,
    growth: "+16.6%",
    importance: "Core Pillar",
    highlight: "The largest revenue segment. Post-acquisition of Temenos regional partner license, Systems aggressively cross-sells core banking transformation to 150+ financial institutions globally.",
  },
  {
    name: "Telco (Telecommunications)",
    revenue2025: 20308,
    revenue2024: 15489,
    growth: "+31.1%",
    importance: "High growth",
    highlight: "Massive scale-up. Specialized digital orchestration and multiple production-grade Generative AI implementations delivered to 10+ major telecom operators, yielding 93% retention gains.",
  },
  {
    name: "Technology (Services & Solutions)",
    revenue2025: 9520,
    revenue2024: 8057,
    growth: "+18.2%",
    importance: "Technical core",
    highlight: "Includes pure software engineering, custom cloud modernizations, cyber risk services, and advanced system integrations subcontracted and executed internationally.",
  },
  {
    name: "Retail & CPG",
    revenue2025: 7762,
    revenue2024: 7676,
    growth: "+1.1%",
    importance: "High margin focus",
    highlight: "Primary customer density located in North America and Western Europe, yielding significantly higher operating margins due to deep specialization in commerce ecosystems.",
  },
  {
    name: "Others (Healthcare, Public, etc.)",
    revenue2025: 18897,
    revenue2024: 15744,
    growth: "+20.0%",
    importance: "Emerging domains",
    highlight: "Includes the fast-growing Healthcare vertical (anchored by 'Hami' AI assistant) and comprehensive cloud public sector modernization programs.",
  },
];

export const AI_ECOSYSTEM_CASES: AICaseStudy[] = [
  {
    title: "Project 'Hami' AI Physician Assistant",
    clientCohort: "Boston Health AI (USA / Global)",
    domain: "Healthcare / Generative AI",
    techStack: ["Gemini LLMs", "Google Cloud", "Speech-to-Text Clinical Scribing", "HIPAA Vaults"],
    impactMetric: "40% Scribing Overhead Reduction",
    summary: "A cutting-edge GenAI assistant capturing and parsing live patient-physician conversational dialogue into highly structured clinical charts with zero manual overhead.",
  },
  {
    title: "Autonomous Agentic Contact Centers",
    clientCohort: "Tier-1 Middle East Telecom Carrier",
    domain: "Customer Experience / Agents",
    techStack: ["Microsoft Dynamics 365", "Azure AI Services", "Copilot Studio", "Multilingual LLMs"],
    impactMetric: "50% Text Influx Automated",
    summary: "Consolidated voice/digital ticketing channels into an autonomous AI agent layer that securely self-resolves half of inbound textual customer queries without agent handover.",
  },
  {
    title: "Pharmacovigilance & Adverse Event Reporting",
    clientCohort: "Global Pharmaceutical Manufacturer",
    domain: "Healthcare & Compliance / GenAI",
    techStack: ["Document Intelligence", "Domain-Specific Language Models (DSLMs)", "SAP Dynamics"],
    impactMetric: "Noxious Report Processing cut by 70%",
    summary: "Automatically identifies, extracts, and reports potential high-risk adverse events directly from complex medical documents, reports, and forum data into regulatory portals.",
  },
  {
    title: "B2C AI Fashion Stylist",
    clientCohort: "Large-scale Global Retailer",
    domain: "E-Commerce / Vision & Recsys",
    techStack: ["Multimodal Image Processing", "Predictive Recommendations", "User Persona Mapping"],
    impactMetric: "14% Average Order Value (AOV) Boost",
    summary: "Interactive virtual recommendations system matching clothing items based on real-time visual prompts, user wardrobe matches, and historical purchases.",
  },
];

export const ACQUISITIONS_DATA = {
  confiz: {
    name: "Confiz Limited",
    date: "Completed Oct 2025 (Effective Jan 1, 2026)",
    strategicObjective: "North America & Europe Expansion",
    addedTalent: "700+ Engineers & Consultants",
    synergies: "Provides immediate and direct tier-1 access to large North American enterprise retail and CPG clients. Unlocks structural opportunities to cross-sell and up-sell the full Systems portfolio (AI, Data, Temenos, ERP) to Confiz's high-value client ecosystem.",
  },
  batGbs: {
    name: "BAT SAA Services (Private) Limited",
    date: "Completed October 2025",
    strategicObjective: "Global Business Services (GBS) Scaling",
    addedTalent: "450+ Shared Service Professionals",
    synergies: "Acquired through a major strategic joint venture and partnership with Accenture. Establishes a highly scaled, best-in-class Global Business Services (GBS) operation in Pakistan, servicing British American Tobacco's global markets.",
  }
};

export const ESG_HIGHLIGHTS = {
  environmental: [
    { metric: "Scope 2 Emissions Reduction", value: "8.4%", yearOverYear: "Decelerating carbon intensity" },
    { metric: "On-site Solar Capacity", value: "375 KW", yearOverYear: "+138% generation growth (1,158 GJ produced)" },
    { metric: "Renewable Energy Mix Share", value: "5.4%", yearOverYear: "Path to 80% renewable by 2035" },
    { metric: "E-Waste & General Waste Diversion", value: "99.0%", yearOverYear: "Fully verified municipal compliance" },
    { metric: "Per-Employee Water Consumption", value: "23.7% Ideal", yearOverYear: "Enhanced office-based conservation" },
  ],
  social: [
    { metric: "Community CSR Investment", value: "69.3M PKR", yearOverYear: "Direct education and healthcare funding" },
    { metric: "Specially-abled Employees Growth", value: "+67.0%", yearOverYear: "Enhanced physical and career accessibility" },
    { metric: "Average Training Hours (Technical)", value: "20 Hrs/Emp", yearOverYear: "Pioneered by AI.Now upskilling" },
    { metric: "IT Mustakbil Graduate Count", value: "111 Alumni", yearOverYear: "Free coding bootcamps for underprivileged youth" },
    { metric: "Employee Engagement Rate", value: "80.6% Score", yearOverYear: "Highest-ever score via regional town halls" },
  ],
  governance: [
    { metric: "Board Gender Diversity", value: "5:2", yearOverYear: "Exceeding SECP listed guidelines" },
    { metric: "Independent Directors", value: "4 of 7", yearOverYear: "Uncompromised stakeholder protection" },
    { metric: "Corruption/Compliance Incidents", value: "0 Cases", yearOverYear: "Verified by Independent Auditor Review" },
    { metric: "Audit Committee Oversight Status", value: "Verified", yearOverYear: "Quarterly reviews completed by PwC/Ferguson" },
  ]
};

export const RECOGNITIONS = [
  { award: "Microsoft Inner Circle", year: "2025 / 2026", details: "Five consecutive years inside Microsoft's top 1% global partners for AI Business Solutions." },
  { award: "Forbes Asia's Best Under A Billion", year: "5 Consecutive Times", details: "Ranked as premier global growth company in the Asia-Pacific region." },
  { award: "Asiamoney Most Outstanding Company", year: "Consistently Ranked", details: "Voted outstanding capital structure, financial performance, and executive leadership in Pakistan." },
  { award: "P@SHA Top IT Exporter Award", year: "Annual Winner", details: "Recognized as the primary driver of technology exports and workforce scaling in the region." },
  { award: "Temenos Sales Partner of the Year", year: "2025 MEA Region", details: "Top-tier regional banking execution with core and digital banks on Temenos Exchange." }
];

export const STRATEGIC_ROADMAP_2026 = {
  aiRoadmap: "Deploy domain-specific LLMs (DSLMs) for BFSI, Retail and Telecom to drive production-grade automated workflows. Secure first-to-market advantage in high-density corporate consulting.",
  naExpansion: "Scale recently integrated Confiz platforms, establish dedicated delivery hubs in region, and execute direct high-value US enterprise client expansions.",
  gbsScale: "Exponentially grow the BAT GBS Joint Venture, leveraging the joint collaboration with Accenture to onboard additional global corporate service clients.",
  financials: "Maintain margin discipline and cash flow efficiency, targeting a healthy USD-denominated cash reserve buffer to protect returns against PKR exchange fluctuations."
};

export const BOARD_MEMBERS: BoardMember[] = [
  {
    name: "Mr. Aezaz Hussain",
    title: "Chairman / Non-Executive Director",
    type: "Non-Executive",
    qualifications: ["Founder of Systems Limited", "Former CEO of Visionet Systems Inc.", "Economic Advisory Board Member"],
    roleDescription: "Founded Systems Limited in 1977 as Pakistan's first software house. He provides overall strategic direction and enterprise strategy, drawing on decades of experience in the USA and Pakistan."
  },
  {
    name: "Mr. Asif Peer",
    title: "Group CEO & Managing Director",
    type: "Executive",
    qualifications: ["30+ Years inside Systems Group", "Sitara-e-Imtiaz Recipient", "Tech Leadership Award Winner"],
    roleDescription: "Began his career inside Systems and grew with the organization to lead a global workforce of 8,271+ professionals, driving AI-first innovations and expanding operations in 16+ countries with a 36% CAGR profit growth."
  },
  {
    name: "Mr. Arshad Masood",
    title: "Non-Executive Director",
    type: "Non-Executive",
    qualifications: ["Ex-IBM Corporation (USA)", "Founder of Visionet Systems Inc.", "MBA Baruch College, NYC"],
    roleDescription: "Started his technology career at IBM in the US before co-founding several successful corporations, including Visionet Systems. Serves as a key strategy supervisor."
  },
  {
    name: "Ms. Romana Abdullah",
    title: "Independent Director & Sustainability Chairperson",
    type: "Independent",
    qualifications: ["CEO of Highpoint Ventures", "BSc Princeton Financial Engineering", "MBA Harvard Business School"],
    roleDescription: "Chairs the Sustainability Committee. Expert in financial planning and transformation, with previous executive planning experience at MCB, Soneri Bank, BCG, and Merrill Lynch."
  },
  {
    name: "Ms. Maheen Rehman",
    title: "Independent Director & Audit Member",
    type: "Independent",
    qualifications: ["CEO of InfraZamin Pakistan", "Former CEO of Alfalah GHP", "Fortune '40 Under 40' list"],
    roleDescription: "Serves on the Audit Committee, bringing over 20 years of premier investment banking, research, asset management, and corporate auditing experience."
  },
  {
    name: "Mr. Omar Saeed",
    title: "Independent Director & HRCC Chairman",
    type: "Independent",
    qualifications: ["CEO of Service Long March Tyres", "Brown University Graduate", "MBA Harvard Business School"],
    roleDescription: "Chairs the Human Resource & Compensation Committee. Serves on multiple prestigious boards including Servis Group, Nestle Pakistan, and the Hunar Foundation."
  },
  {
    name: "Mr. Zubyr Soomro",
    title: "Independent Director & Audit Chairman",
    type: "Independent",
    qualifications: ["30+ Years with Citibank Globally", "Former Chairman of NBP", "BSc Hons London School of Economics"],
    roleDescription: "Chairs the Audit Committee. Highly distinguished international banker, former Chairman of National Bank of Pakistan (NBP), recognized for financial inclusion and microfinance leadership."
  }
];
