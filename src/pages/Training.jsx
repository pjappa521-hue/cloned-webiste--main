import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import {
  CheckCircle2,
  Briefcase,
  CalendarDays,
  FileCheck,
  GraduationCap,
  ShieldCheck,
  Users,
  ChevronDown,
  ArrowRight
} from "lucide-react";
import ContactForm from "../components/ContactForm";
import { Eyebrow, FadeUp, MaskLine, EASE } from "../components/Reveal";
import { TRACKS, PLACEMENT_TIMELINE } from "../data/content";
const INCLUDED = [
  "Live, instructor-led sessions \u2014 not pre-recorded videos",
  "At least one real client project per module, added to your portfolio",
  "1:1 mentor check-ins through the programme",
  "Resume, LinkedIn and mock interview coaching",
  "Placement team support until placed or day 90"
];
const FAQS = [
  {
    q: "Do I need prior experience?",
    a: "No for most tracks. AI Engineer and Forward Deployed Engineer expect basic programming familiarity, confirmed on your call."
  },
  {
    q: "How does the placement commitment work?",
    a: "Our placement team works your interviews until you're placed or your 90-day window closes. Full terms and eligibility are explained during counselling before you enrol."
  },
  {
    q: "Can I study while working full-time?",
    a: "Yes. Evening and weekend batches are available for most tracks."
  },
  {
    q: "What if I'm not placed by day 90?",
    a: "If you attended sessions, completed projects and engaged with every interview, and still aren't placed, we refund your programme fee in full."
  }
];
function Training() {
  const [selectedTrack, setSelectedTrack] = useState("");
  const [openFaqs, setOpenFaqs] = useState({ 0: true, 1: true });
  const scrollToApply = (trackTitle) => {
    if (trackTitle) {
      setSelectedTrack(`Training: ${trackTitle}`);
    }
    const el = document.getElementById("training-apply");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const toggleFaq = (idx) => {
    setOpenFaqs((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };
  return /* @__PURE__ */ jsx("main", { className: "pt-36 pb-24 min-h-screen relative", "data-testid": "training-page", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative", children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "Training academy" }),
      /* @__PURE__ */ jsxs(
        "h1",
        {
          className: "font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-4xl",
          "data-testid": "training-heading",
          children: [
            /* @__PURE__ */ jsx(MaskLine, { delay: 0.08, children: "Learn the role companies" }),
            /* @__PURE__ */ jsxs(MaskLine, { delay: 0.2, children: [
              "are ",
              /* @__PURE__ */ jsx("span", { className: "text-brand-accent", children: "actually hiring for." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(FadeUp, { delay: 0.32, children: [
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-gray-400 max-w-2xl leading-relaxed text-base sm:text-lg", children: "Five tracks, one standard: train on live client briefs \u2014 not simulations \u2014 and work with our placement team until you're hired or your 90-day window closes. Terms explained in full on your free call." }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "mt-8 flex flex-wrap gap-x-12 gap-y-6 pt-2",
            "data-testid": "training-stats",
            children: [
              ["100%", "placement commitment*"],
              ["5", "career tracks"],
              ["90", "day placement window"],
              ["Live", "client briefs, not mocks"]
            ].map(([v, l], i) => /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.4 + i * 0.08, ease: EASE },
                className: "group select-none",
                children: [
                  /* @__PURE__ */ jsx("p", { className: "font-display font-bold text-3xl sm:text-4xl text-white group-hover:text-brand-accent transition-colors duration-300", children: v }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 font-mono2 uppercase tracking-widest mt-1", children: l })
                ]
              },
              l
            ))
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 relative rounded-3xl overflow-hidden border border-white/10 aspect-[21/9] max-h-96 w-full bg-[#0D0E11] shadow-2xl group", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/src/assets/images/training_academy_lab_1791823748458.jpg",
              alt: "Training Academy Studio & Practicum Lab",
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
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0D0E11]/90 via-[#0D0E11]/20 to-transparent pointer-events-none" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 left-6 sm:bottom-8 sm:left-8 right-6 flex flex-wrap items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "bg-brand-accent/20 border border-brand-accent/40 text-brand-accent px-3 py-1 rounded-full text-xs font-mono2 uppercase tracking-wider", children: "Studio Practicum" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-gray-200 font-medium", children: "Cohorts train directly with senior directors on live production briefs" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-2 text-xs font-mono2 text-gray-400", children: [
              /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-brand-emerald animate-pulse" }),
              /* @__PURE__ */ jsx("span", { children: "Enrolling next cohort" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-28", "data-testid": "tracks-section", children: [
      /* @__PURE__ */ jsxs(FadeUp, { children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "Which track is yours?" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display font-bold tracking-tight text-3xl sm:text-4xl leading-tight", children: [
          "Five tracks. ",
          /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "One standard." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: [
        TRACKS.map((t, i) => /* @__PURE__ */ jsx(
          FadeUp,
          {
            delay: i * 0.06,
            className: i === 0 ? "lg:row-span-1" : "",
            children: /* @__PURE__ */ jsxs(
              motion.div,
              {
                whileHover: { y: -4, transition: { duration: 0.25, ease: EASE } },
                onClick: () => scrollToApply(t.title),
                className: `group h-full rounded-3xl border p-7 transition-all duration-500 flex flex-col justify-between shadow-sm cursor-pointer ${selectedTrack === `Training: ${t.title}` ? "border-brand-accent bg-[#14161C] shadow-[0_16px_32px_rgba(255,77,0,0.15)] ring-1 ring-brand-accent" : "border-white/[0.08] bg-[#14161C] hover:border-brand-accent/40 hover:shadow-[0_16px_32px_rgba(255,77,0,0.06)]"}`,
                "data-testid": `track-card-${t.id}`,
                children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxs("p", { className: "font-mono2 text-xs text-brand-accent font-semibold tracking-wider", children: [
                        "0",
                        /* @__PURE__ */ jsx("span", { children: i + 1 })
                      ] }),
                      selectedTrack === `Training: ${t.title}` && /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono2 uppercase tracking-wider text-brand-accent bg-brand-accent/15 px-2.5 py-0.5 rounded-full border border-brand-accent/30", children: "Selected" })
                    ] }),
                    /* @__PURE__ */ jsx(
                      "h3",
                      {
                        className: `font-display font-semibold text-xl mt-3 transition-colors duration-300 ${t.id === "fde" || selectedTrack === `Training: ${t.title}` ? "text-brand-accent" : "text-white group-hover:text-brand-accent"}`,
                        children: t.title
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: "mt-2.5 text-sm text-gray-400 leading-relaxed", children: t.text })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono2 text-gray-500 group-hover:text-brand-accent transition-colors", children: [
                    /* @__PURE__ */ jsx("span", { children: "Apply for this track" }),
                    /* @__PURE__ */ jsx(ArrowRight, { size: 14, className: "group-hover:translate-x-1 transition-transform" })
                  ] })
                ]
              }
            )
          },
          t.id
        )),
        /* @__PURE__ */ jsx(FadeUp, { delay: 0.35, children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            whileHover: { y: -4, transition: { duration: 0.25, ease: EASE } },
            onClick: () => scrollToApply(),
            className: "h-full rounded-3xl border border-brand-accent/30 bg-brand-accent/[0.07] p-7 flex flex-col justify-center cursor-pointer transition-all duration-500 hover:border-brand-accent hover:bg-brand-accent/[0.1] shadow-sm hover:shadow-[0_16px_32px_rgba(255,77,0,0.1)] group",
            children: [
              /* @__PURE__ */ jsx(
                GraduationCap,
                {
                  size: 28,
                  className: "text-brand-accent group-hover:scale-110 transition-transform duration-300"
                }
              ),
              /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold text-xl mt-4 text-white group-hover:text-brand-accent transition-colors", children: "Not sure yet?" }),
              /* @__PURE__ */ jsx("p", { className: "mt-2.5 text-sm text-gray-400 leading-relaxed", children: "Book the free counselling call \u2014 15 minutes to pick the right track for your background." }),
              /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-4 border-t border-brand-accent/20 flex items-center justify-between text-xs font-mono2 text-brand-accent", children: [
                /* @__PURE__ */ jsx("span", { children: "Speak with mentor" }),
                /* @__PURE__ */ jsx(ArrowRight, { size: 14, className: "group-hover:translate-x-1 transition-transform" })
              ] })
            ]
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-28 grid lg:grid-cols-2 gap-10", "data-testid": "included-section", children: [
      /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsxs("div", { className: "h-full rounded-3xl border border-white/[0.08] bg-[#14161C] p-8 sm:p-10 flex flex-col justify-between hover:border-white/20 transition-colors duration-500", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Eyebrow, { children: "Every track includes" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-4 mt-4", children: INCLUDED.map((item) => /* @__PURE__ */ jsxs(
            "li",
            {
              className: "flex items-start gap-3 text-sm text-gray-300",
              children: [
                /* @__PURE__ */ jsx(
                  CheckCircle2,
                  {
                    size: 18,
                    className: "text-brand-emerald shrink-0 mt-0.5"
                  }
                ),
                " ",
                /* @__PURE__ */ jsx("span", { children: item })
              ]
            },
            item
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center gap-3 text-xs text-gray-500 border-t border-white/[0.07] pt-6", children: [
          /* @__PURE__ */ jsx(CalendarDays, { size: 16, className: "text-brand-accent shrink-0" }),
          /* @__PURE__ */ jsx("span", { children: "New batches start monthly. Evening and weekend options for working professionals." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(FadeUp, { delay: 0.15, children: /* @__PURE__ */ jsxs("div", { className: "h-full rounded-3xl border border-brand-accent/25 bg-brand-accent/[0.05] p-8 sm:p-10 flex flex-col justify-between hover:border-brand-accent/40 transition-colors duration-500", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Eyebrow, { children: "The commitment" }),
          /* @__PURE__ */ jsxs("h2", { className: "font-display font-bold text-2xl sm:text-3xl tracking-tight flex items-center gap-3 text-white", children: [
            /* @__PURE__ */ jsx(ShieldCheck, { size: 28, className: "text-brand-accent shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "100% placement in 90 days" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-gray-400 leading-relaxed", children: "From the day you finish training, our placement team works with you until you have an offer \u2014 or your placement window closes at day 90. If you've held up your end and still aren't placed, we refund your programme fee in full. Terms confirmed in writing before you enrol." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-4 border-t border-white/[0.07] pt-6", children: PLACEMENT_TIMELINE.map((t) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-start group", children: [
          /* @__PURE__ */ jsx("span", { className: "font-mono2 text-xs text-brand-accent whitespace-nowrap pt-0.5 w-24 shrink-0 font-medium", children: t.days }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-300 leading-relaxed", children: t.text })
        ] }, t.days)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-28", "data-testid": "training-faq-section", children: [
      /* @__PURE__ */ jsxs(FadeUp, { children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "Common questions" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display font-bold tracking-tight text-3xl sm:text-4xl leading-tight", children: [
          "Asked on every",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "counselling call." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid md:grid-cols-2 gap-5", children: FAQS.map((f, i) => {
        const isOpen = openFaqs[i] ?? false;
        return /* @__PURE__ */ jsx(FadeUp, { delay: i * 0.06, children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            onClick: () => toggleFaq(i),
            whileHover: { y: -2, transition: { duration: 0.25, ease: EASE } },
            className: "rounded-2xl border border-white/[0.08] bg-[#14161C] p-6 h-full hover:border-brand-accent/30 transition-all duration-300 group cursor-pointer",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                /* @__PURE__ */ jsxs("h3", { className: "font-display font-semibold text-base flex items-start gap-2.5 text-white group-hover:text-brand-accent transition-colors", children: [
                  /* @__PURE__ */ jsx(
                    FileCheck,
                    {
                      size: 18,
                      className: "text-brand-accent shrink-0 mt-0.5"
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { children: f.q })
                ] }),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    animate: { rotate: isOpen ? 180 : 0 },
                    transition: { duration: 0.25 },
                    className: "text-gray-400 group-hover:text-brand-accent shrink-0 mt-0.5",
                    children: /* @__PURE__ */ jsx(ChevronDown, { size: 18 })
                  }
                )
              ] }),
              isOpen && /* @__PURE__ */ jsx(
                motion.p,
                {
                  initial: { opacity: 0, height: 0 },
                  animate: { opacity: 1, height: "auto" },
                  transition: { duration: 0.3 },
                  className: "mt-3 text-sm text-gray-400 leading-relaxed pl-7",
                  children: f.a
                }
              )
            ]
          }
        ) }, f.q);
      }) })
    ] }),
    /* @__PURE__ */ jsxs(
      "section",
      {
        id: "training-apply",
        className: "mt-28 grid lg:grid-cols-2 gap-12 items-start",
        "data-testid": "training-apply-section",
        children: [
          /* @__PURE__ */ jsxs(FadeUp, { children: [
            /* @__PURE__ */ jsx(Eyebrow, { children: "Free counselling call" }),
            /* @__PURE__ */ jsxs("h2", { className: "font-display font-bold tracking-tight text-3xl sm:text-4xl leading-tight", children: [
              "Your next job starts",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-brand-accent", children: "with one call." })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-5 text-gray-400 leading-relaxed max-w-md text-sm sm:text-base", children: "15 minutes, free, no obligation. We'll help you pick the right track and walk you through the programme, the fee and exactly how the placement commitment works." }),
            selectedTrack && /* @__PURE__ */ jsxs("div", { className: "mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/15 border border-brand-accent/30 text-xs font-mono2 text-brand-accent", children: [
              /* @__PURE__ */ jsx("span", { children: "Selected Track:" }),
              /* @__PURE__ */ jsx("span", { className: "font-bold text-white", children: selectedTrack })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-3.5", children: [
              [
                Users,
                "Each batch has limited seats to keep mentor attention high"
              ],
              [
                Briefcase,
                "Placement terms apply and are explained in full on your call"
              ]
            ].map(([Icon, t], idx) => {
              const IconComponent = Icon;
              return /* @__PURE__ */ jsxs("p", { className: "flex items-start gap-3 text-sm text-gray-400", children: [
                /* @__PURE__ */ jsx(
                  IconComponent,
                  {
                    size: 17,
                    className: "text-brand-accent shrink-0 mt-0.5"
                  }
                ),
                " ",
                /* @__PURE__ */ jsx("span", { children: t })
              ] }, idx);
            }) })
          ] }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 0.15, children: /* @__PURE__ */ jsx("div", { className: "rounded-3xl border border-white/10 bg-[#14161C]/80 backdrop-blur p-7 sm:p-9 shadow-xl shadow-black/40", children: /* @__PURE__ */ jsx(
            ContactForm,
            {
              presetInterest: "Training: AI Engineer",
              selectedTrack,
              idPrefix: "training"
            }
          ) }) })
        ]
      }
    )
  ] }) });
}
export {
  Training as default
};
