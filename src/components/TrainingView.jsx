import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { CircleCheck, CalendarDays, Users, ShieldCheck, ArrowRight, ChevronDown } from "lucide-react";
import { TextReveal } from "./TextReveal";
const TrainingView = ({ onContact }) => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const tracks = [
    {
      id: "ai-eng",
      title: "AI Product Design & Engineering",
      duration: "12 Weeks",
      schedule: "Evenings & Weekends",
      level: "Advanced",
      desc: "Master the principles of generative UI, model orchestration, latency reduction, and humane computing architectures.",
      tags: ["Generative UI", "Frontier Models", "Interaction Physics"]
    },
    {
      id: "brand-creative",
      title: "Executive Creative Direction",
      duration: "8 Weeks",
      schedule: "Intensive Salon",
      level: "Senior / Lead",
      desc: "Formulate cultural point-of-view, direct cinematic brand systems, and lead high-conviction creative organizations.",
      tags: ["Film & Motion", "Brand Identity", "Studio Leadership"]
    },
    {
      id: "design-systems",
      title: "Staff Systems & Craft Architecture",
      duration: "10 Weeks",
      schedule: "Hybrid Practicum",
      level: "Staff / Principal",
      desc: "Architect resilient multi-platform component ecosystems, token pipelines, and uncompromising micro-interaction standards.",
      tags: ["Systems Scale", "Token Pipelines", "60fps Polish"]
    }
  ];
  const faqs = [
    {
      q: "Do I need prior experience?",
      a: "Yes. Offsite Academy is designed for practicing senior designers and technologists looking to elevate to principal and executive tiers."
    },
    {
      q: "How does the placement commitment work?",
      a: "Our executive search directors represent fellows directly to our network of partner tier-1 startups and venture firms."
    },
    {
      q: "Can I participate while working full-time?",
      a: "Yes. All live salons and critiques are scheduled during evening and weekend hours to accommodate active practitioners."
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "w-full bg-[#FAF9F6] text-[#121212] pt-28 pb-24 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-4 max-w-4xl mb-16", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-500 block", children: "OFFSITE ACADEMY" }),
      /* @__PURE__ */ jsx(
        TextReveal,
        {
          as: "h1",
          splitBy: "lines",
          className: "font-editorial-serif text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-black",
          style: { fontFamily: "'Cinzel', serif" },
          children: `EXECUTIVE MASTERY
FOR CREATIVE PRACTITIONERS`
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "font-editorial-body text-lg sm:text-xl text-neutral-700 leading-relaxed max-w-2xl pt-2", children: "Rigorous, instructor-led fellowships for designers, brand directors, and design technologists ready to operate at the top 1% of the discipline." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-20", children: tracks.map((track) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "p-8 bg-white border border-black/10 rounded-xl flex flex-col justify-between hover:shadow-lg transition-shadow",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-[11px] font-mono text-neutral-500", children: [
              /* @__PURE__ */ jsx("span", { children: track.duration }),
              /* @__PURE__ */ jsx("span", { children: track.level })
            ] }),
            /* @__PURE__ */ jsx(
              "h3",
              {
                className: "font-editorial-serif text-2xl uppercase tracking-tight text-black",
                style: { fontFamily: "'Cinzel', serif" },
                children: track.title
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-600 leading-relaxed font-sans", children: track.desc }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 pt-2", children: track.tags.map((t) => /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded", children: t }, t)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pt-8 border-t border-black/5 mt-8 flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[11px] font-mono text-neutral-500", children: track.schedule }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: onContact,
                className: "inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-black hover:translate-x-1 transition-transform cursor-pointer",
                children: [
                  "Inquire ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                ]
              }
            )
          ] })
        ]
      },
      track.id
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "p-8 sm:p-12 bg-neutral-900 text-white rounded-2xl mb-20 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-2", children: "FELLOWSHIP CORE" }),
        /* @__PURE__ */ jsx(
          "h3",
          {
            className: "font-editorial-serif text-3xl uppercase tracking-tight",
            style: { fontFamily: "'Cinzel', serif" },
            children: "The Offsite Standard"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs text-neutral-300", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CircleCheck, { className: "w-4 h-4 text-white shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { children: "Direct 1:1 mentorship with seasoned design executives" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CalendarDays, { className: "w-4 h-4 text-white shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { children: "Real partner studio briefs with tangible portfolio credit" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(Users, { className: "w-4 h-4 text-white shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { children: "Lifelong fellowship network & private Offsite salon access" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4 text-white shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { children: "Full placement advisory & retained executive introductions" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsx(
        "h3",
        {
          className: "font-editorial-serif text-2xl uppercase tracking-tight text-center mb-8",
          style: { fontFamily: "'Cinzel', serif" },
          children: "Frequently Considered"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "divide-y divide-black/10 border-t border-b border-black/10", children: faqs.map((faq, idx) => /* @__PURE__ */ jsxs("div", { className: "py-4", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setExpandedFaq(expandedFaq === idx ? null : idx),
            className: "w-full flex items-center justify-between text-left font-sans text-sm font-medium text-black py-1 cursor-pointer",
            children: [
              /* @__PURE__ */ jsx("span", { children: faq.q }),
              /* @__PURE__ */ jsx(
                ChevronDown,
                {
                  className: `w-4 h-4 transition-transform ${expandedFaq === idx ? "rotate-180" : ""}`
                }
              )
            ]
          }
        ),
        expandedFaq === idx && /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs text-neutral-600 font-sans leading-relaxed", children: faq.a })
      ] }, idx)) })
    ] })
  ] });
};
export {
  TrainingView
};
