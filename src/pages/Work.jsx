import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Clock, TrendingUp, X } from "lucide-react";
import { Eyebrow, MaskLine } from "../components/Reveal";
const FILTERS = ["All", "Salon Growth", "Ad Films", "Performance Ads", "Branding", "Market Analysis"];
const DEFAULT_PROJECTS = [
  {
    id: "aura-salon",
    title: "Aura Luxury Hair Lounge",
    category: "Salon Growth",
    client: "Aura Salon Studios",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
    metric: "+280%",
    metricLabel: "Monthly Booking Revenue",
    summary: "Transformed seasonal booking lulls into steady recurring appointment volume using hyper-local geo-fencing and offer positioning.",
    duration: "4 Months",
    solution: "Re-engineered booking funnel with automated WhatsApp calendar reminders and local social video creative showing actual stylists in action.",
    results: ["1,420 new client appointments booked", "Average ticket value increased by \u20B91,850", "4.9x return on ad spend within 90 days"]
  },
  {
    id: "zenith-coffee",
    title: "Zenith Single Origin Films",
    category: "Ad Films",
    client: "Zenith Coffee Roasters",
    image: "/src/assets/images/zenith_coffee_film_1791823737010.jpg",
    metric: "4.2M",
    metricLabel: "Organic & Paid Views",
    summary: "Cinematic commercial films highlighting small-batch ethical farming to drive direct-to-consumer subscription adoption.",
    duration: "6 Weeks",
    solution: "Shot on location in Coorg with ARRI cinema cameras, emphasizing organic origin stories and sensory sound design.",
    results: ["32% lift in subscription conversion rate", "Over 18,000 bags shipped in initial launch week", "Winner of regional commercial craft award"]
  },
  {
    id: "urban-denim",
    title: "Urban Denim Brand Rebirth",
    category: "Branding",
    client: "Urban Denim Mills",
    image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=1000&q=80",
    metric: "3.4x",
    metricLabel: "Brand Search Growth",
    summary: "Complete visual identity overhaul from heritage wholesale manufacturer to modern direct-to-consumer lifestyle staple.",
    duration: "3 Months",
    solution: "Designed monolithic typography, tactile recycled unboxing packaging, and comprehensive tone of voice guidelines.",
    results: ["Successfully entered 40+ premier retail outlets", "Reduced customer acquisition cost by 44%", "Featured in GQ and Rolling Stone India"]
  },
  {
    id: "fintech-scale",
    title: "PayPulse Acquisition Engine",
    category: "Performance Ads",
    client: "PayPulse Technologies",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    metric: "\u20B918.4Cr",
    metricLabel: "Originated Loan Volume",
    summary: "High-precision search and paid social campaigns targeting Tier-2 small business merchants needing invoice financing.",
    duration: "Ongoing",
    solution: "Built dynamic landing pages tailored by specific industry keyword intent with seamless instant KYC pre-qualification.",
    results: ["Customer acquisition cost lowered by 38%", "Daily active merchant origination grew 5x", "Zero wasted ad spend across negative keywords"]
  },
  {
    id: "health-insights",
    title: "Veda Health Market Map",
    category: "Market Analysis",
    client: "Veda Diagnostics",
    image: "/src/assets/images/market_strategy_map_1791823762043.jpg",
    metric: "100%",
    metricLabel: "GTM Budget Efficiency",
    summary: "Exhaustive competitor audit and consumer price elasticity analysis before launching an at-home preventive testing panel.",
    duration: "4 Weeks",
    solution: "Interviewed 400+ target consumers and analyzed 12 regional competitors to identify unaddressed package pricing gaps.",
    results: ["Clear 12-month positioning playbook", "Identified 3 underserved regional micro-markets", "Guided optimal \u20B91,499 pricing tier"]
  }
];
function Work() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const visible = filter === "All" ? DEFAULT_PROJECTS : DEFAULT_PROJECTS.filter((p) => p.category === filter);
  return /* @__PURE__ */ jsxs("main", { className: "pt-36 pb-24 min-h-screen", "data-testid": "work-page", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 sm:px-8", children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "Work & case studies" }),
      /* @__PURE__ */ jsxs(
        "h1",
        {
          className: "font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl",
          "data-testid": "work-heading",
          children: [
            /* @__PURE__ */ jsx(MaskLine, { delay: 0.1, children: "Work that moved numbers," }),
            /* @__PURE__ */ jsx(MaskLine, { delay: 0.22, children: /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "not just impressions." }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.4 },
          className: "mt-6 text-gray-400 max-w-2xl leading-relaxed",
          children: "Every project below started with market analysis, not a guess. Open any card for the approach and the numbers it produced."
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mt-10 flex flex-wrap gap-2.5", children: FILTERS.map((f) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setFilter(f),
          className: `px-4 py-2 rounded-full text-xs font-mono2 uppercase tracking-wider transition-all cursor-pointer ${filter === f ? "bg-brand-accent text-white font-semibold" : "bg-[#14161C] text-gray-400 hover:text-white border border-white/[0.08]"}`,
          children: f
        },
        f
      )) }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: /* @__PURE__ */ jsx(AnimatePresence, { children: visible.map((p) => /* @__PURE__ */ jsxs(
        motion.button,
        {
          layout: true,
          initial: { opacity: 0, scale: 0.94 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.94 },
          transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
          onClick: () => setActive(p),
          "data-testid": `work-card-${p.id}`,
          className: "group text-left rounded-3xl overflow-hidden border border-white/[0.08] bg-[#14161C] hover:border-brand-accent/40 transition-colors duration-500 cursor-pointer flex flex-col justify-between",
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden h-60 bg-[#0B0C0F]", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: p.image,
                    alt: p.title,
                    loading: "lazy",
                    referrerPolicy: "no-referrer",
                    onError: (e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes("ad_films_craft")) {
                        target.src = "/src/assets/images/ad_films_craft_1791823725669.jpg";
                      }
                    },
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 bg-[#0D0E11]/80 backdrop-blur px-3 py-1 rounded-full text-[11px] font-mono2 text-brand-accent uppercase tracking-wider border border-white/10", children: p.category })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "p-7 space-y-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs text-gray-500 font-mono2 uppercase", children: [
                  /* @__PURE__ */ jsx("span", { children: p.client }),
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx(Clock, { size: 12 }),
                    " ",
                    p.duration
                  ] })
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-xl group-hover:text-brand-accent transition-colors", children: p.title }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 leading-relaxed line-clamp-2", children: p.summary })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-7 pt-0 border-t border-white/[0.06] mt-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "font-display font-bold text-2xl text-white", children: p.metric }),
                /* @__PURE__ */ jsx("span", { className: "block text-[11px] font-mono2 text-gray-500 uppercase tracking-wider", children: p.metricLabel })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full bg-white/[0.05] group-hover:bg-brand-accent group-hover:text-white flex items-center justify-center transition-all text-gray-400", children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 }) })
            ] })
          ]
        },
        p.id
      )) }) })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: active && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 overflow-y-auto",
        children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-2xl bg-[#14161C] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl my-8 text-white", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setActive(null),
              className: "absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer",
              children: /* @__PURE__ */ jsx(X, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("span", { className: "text-xs font-mono2 uppercase tracking-widest text-brand-accent block mb-2", children: [
                active.category,
                " \xB7 ",
                active.client
              ] }),
              /* @__PURE__ */ jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl", children: active.title })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "relative h-64 rounded-2xl overflow-hidden bg-black/40", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: active.image,
                alt: active.title,
                referrerPolicy: "no-referrer",
                onError: (e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes("ad_films_craft")) {
                    target.src = "/src/assets/images/ad_films_craft_1791823725669.jpg";
                  }
                },
                className: "w-full h-full object-cover"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 bg-brand-accent/[0.08] border border-brand-accent/20 rounded-2xl flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-display font-bold text-3xl text-brand-accent", children: active.metric }),
                /* @__PURE__ */ jsx("p", { className: "text-xs font-mono2 text-gray-400 uppercase tracking-widest", children: active.metricLabel })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs text-gray-400 font-mono2", children: [
                /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-brand-accent" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  "Timeline: ",
                  active.duration
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-sm text-gray-300 leading-relaxed", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-display font-semibold text-white text-base mb-1", children: "The Challenge & Approach" }),
                /* @__PURE__ */ jsx("p", { children: active.solution })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "font-display font-semibold text-white text-base mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(TrendingUp, { size: 16, className: "text-brand-accent" }),
                  "Key Business Outcomes"
                ] }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-2 list-disc list-inside text-gray-400", children: active.results.map((r, i) => /* @__PURE__ */ jsx("li", { children: r }, i)) })
              ] })
            ] })
          ] })
        ] })
      }
    ) })
  ] });
}
export {
  Work as default
};
