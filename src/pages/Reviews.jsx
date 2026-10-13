import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, CheckCircle, Quote } from "lucide-react";
import { Eyebrow, MaskLine } from "../components/Reveal";
import { INDUSTRIES } from "../data/content";
const DEFAULT_REVIEWS = [
  {
    id: "rev-1",
    name: "Vikram Malhotra",
    business: "Malhotra Diamond House",
    role: "Managing Director",
    industry: "RETAIL & D2C",
    rating: 5,
    date: "March 2026",
    quote: "Every agency before them proposed vanity billboard impressions. The Internet Ads mapped our actual bridal buyers and generated high-intent walk-ins within three weeks.",
    metric: "4.8x Return on Ad Spend"
  },
  {
    id: "rev-2",
    name: "Dr. Sunita Rao",
    business: "Aura Smile Clinics",
    role: "Clinical Founder",
    industry: "HEALTHCARE",
    rating: 5,
    date: "February 2026",
    quote: "Our appointment calendar used to be completely unpredictable. Their local search and targeted video reels made us the definitive premium choice in our district.",
    metric: "+190% Monthly Appointments"
  },
  {
    id: "rev-3",
    name: "Karan Singhal",
    business: "BrewCraft Artisan Cafe",
    role: "Co-Owner",
    industry: "FOOD & HOSPITALITY",
    rating: 5,
    date: "January 2026",
    quote: "The ad film they produced captured our space and menu with stunning craft. We didn't just get views; people walked in with their phones asking for the exact items shown.",
    metric: "12,000+ Footfalls in Month 1"
  },
  {
    id: "rev-4",
    name: "Meera Krishnan",
    business: "Veritas Logistics & Freight",
    role: "Director of Operations",
    industry: "MANUFACTURING",
    rating: 5,
    date: "December 2025",
    quote: "B2B manufacturing demands precision. They refused to run broad campaigns and instead reached commercial procurement directors directly on LinkedIn with zero waste.",
    metric: "34 Enterprise RFQs Closed"
  },
  {
    id: "rev-5",
    name: "Rajesh Varma",
    business: "Varma Signature Estates",
    role: "Principal Developer",
    industry: "REAL ESTATE",
    rating: 5,
    date: "November 2025",
    quote: "Honest, direct, and hyper-focused on qualified site visits. They told us what wouldn't work before we spent a rupee on dead channels.",
    metric: "82% Luxury Inventory Sold"
  },
  {
    id: "rev-6",
    name: "Neha Batra",
    business: "Studio Luxe Hair Lounge",
    role: "Founder & Creative Lead",
    industry: "PROFESSIONAL SERVICES",
    rating: 5,
    date: "October 2025",
    quote: "Their salon engine is unmatched. The combination of WhatsApp automation and local video targeting keeps our stylists booked 6 days a week.",
    metric: "94% Re-booking Retention"
  }
];
function Reviews() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? DEFAULT_REVIEWS : DEFAULT_REVIEWS.filter((r) => r.industry === filter);
  return /* @__PURE__ */ jsx("main", { className: "pt-36 pb-24 min-h-screen", "data-testid": "reviews-page", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-10 items-end", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "Client reviews" }),
        /* @__PURE__ */ jsxs(
          "h1",
          {
            className: "font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.05]",
            "data-testid": "reviews-heading",
            children: [
              /* @__PURE__ */ jsx(MaskLine, { delay: 0.1, children: "What business owners say" }),
              /* @__PURE__ */ jsx(MaskLine, { delay: 0.22, children: /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "when the campaign runs." }) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-white/[0.08] bg-[#14161C] p-6 sm:p-7 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1.5 text-brand-accent mb-1.5", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { size: 18, fill: "#FF4D00" }, i)) }),
          /* @__PURE__ */ jsx("p", { className: "font-display font-bold text-3xl text-white", children: "5.0 / 5.0" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 font-mono2 uppercase tracking-wider mt-0.5", children: "Verified client ratings" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-white/[0.04] flex items-center justify-center text-brand-accent", children: /* @__PURE__ */ jsx(Quote, { size: 22 }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 flex flex-wrap gap-2.5", children: ["All", ...INDUSTRIES].map((ind) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setFilter(ind),
        className: `px-4 py-2 rounded-full text-xs font-mono2 uppercase tracking-wider transition-all cursor-pointer ${filter === ind ? "bg-brand-accent text-white font-semibold" : "bg-[#14161C] text-gray-400 hover:text-white border border-white/[0.08]"}`,
        children: ind
      },
      ind
    )) }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: /* @__PURE__ */ jsx(AnimatePresence, { children: visible.map((r) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        layout: true,
        initial: { opacity: 0, y: 26 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95 },
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        className: "rounded-3xl border border-white/[0.08] bg-[#14161C] p-7 flex flex-col justify-between hover:border-brand-accent/30 transition-colors duration-500",
        "data-testid": `review-card-${r.id}`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("div", { className: "flex gap-1 text-brand-accent", children: [...Array(r.rating)].map((_, i) => /* @__PURE__ */ jsx(Star, { size: 15, fill: "#FF4D00" }, i)) }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] font-mono2 text-gray-500 uppercase", children: r.date })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm sm:text-base text-gray-300 leading-relaxed italic", children: [
              "\u201C",
              r.quote,
              "\u201D"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-white/[0.06] mt-6 space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-display font-semibold text-white text-base", children: r.name }),
                /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500 mt-0.5", children: [
                  r.role,
                  ", ",
                  r.business
                ] })
              ] }),
              /* @__PURE__ */ jsx(CheckCircle, { size: 16, className: "text-emerald-400 shrink-0" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-accent/[0.08] border border-brand-accent/20 text-brand-accent text-xs font-mono2", children: [
              /* @__PURE__ */ jsx("span", { children: "Result:" }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-white", children: r.metric })
            ] })
          ] })
        ]
      },
      r.id
    )) }) })
  ] }) });
}
export {
  Reviews as default
};
