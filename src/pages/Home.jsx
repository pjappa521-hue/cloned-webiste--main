import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  GraduationCap
} from "lucide-react";
import Marquee from "../components/Marquee";
import ContactForm from "../components/ContactForm";
import { Eyebrow, FadeUp, MaskLine } from "../components/Reveal";
import { BELIEFS, SERVICES, TEAM } from "../data/content";
function Home() {
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(
      "section",
      {
        id: "hero",
        className: "relative min-h-[92vh] flex items-center pt-32 pb-20 px-5 sm:px-8 max-w-7xl mx-auto",
        children: /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
          /* @__PURE__ */ jsx(Eyebrow, { children: "MARKET ANALYSIS \xB7 AD FILMS \xB7 INTERNET ADS \xB7 BRANDING" }),
          /* @__PURE__ */ jsxs("h1", { className: "font-editorial uppercase tracking-tight text-left max-w-6xl mt-3 select-none", children: [
            /* @__PURE__ */ jsx(MaskLine, { delay: 0.1, className: "leading-[0.88] sm:leading-[0.9]", children: /* @__PURE__ */ jsx("span", { className: "text-white text-[clamp(2.75rem,8vw,8.5rem)] font-bold block", children: "BIG RESULTS" }) }),
            /* @__PURE__ */ jsx(MaskLine, { delay: 0.22, className: "leading-[0.92] sm:leading-[0.94] mt-1 sm:mt-2", children: /* @__PURE__ */ jsx("span", { className: "text-slate-200 text-[clamp(1.35rem,4.2vw,4.5rem)] font-bold block tracking-normal sm:tracking-wide", children: "DON\u2019T NEED A BIGGER BUDGET." }) }),
            /* @__PURE__ */ jsx(MaskLine, { delay: 0.34, className: "leading-[0.88] sm:leading-[0.9] mt-1 sm:mt-2", children: /* @__PURE__ */ jsx("span", { className: "text-brand-accent text-[clamp(2.75rem,8vw,8.5rem)] font-bold block", children: "THEY NEED" }) }),
            /* @__PURE__ */ jsx(MaskLine, { delay: 0.46, className: "leading-[0.88] sm:leading-[0.9] mt-1 sm:mt-2", children: /* @__PURE__ */ jsx("span", { className: "text-slate-500 text-[clamp(2.75rem,8vw,8.5rem)] font-bold block", children: "THE RIGHT TARGET." }) })
          ] }),
          /* @__PURE__ */ jsxs(FadeUp, { delay: 0.55, children: [
            /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed", children: "We help ambitious small business owners punch far above their weight with precision positioning, high-craft ad films, and accountable performance marketing." }),
            /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-4", children: [
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/training",
                  className: "group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-brand-accent text-white font-medium text-sm transition-all duration-300 hover:brightness-110 active:scale-95",
                  children: [
                    /* @__PURE__ */ jsx("span", { children: "Explore Training Academy" }),
                    /* @__PURE__ */ jsx(
                      ArrowRight,
                      {
                        size: 16,
                        className: "transition-transform group-hover:translate-x-1"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/work",
                  className: "inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/10 hover:border-white/30 text-white font-medium text-sm transition-all bg-[#14161C]/50",
                  children: [
                    /* @__PURE__ */ jsx("span", { children: "See Case Studies" }),
                    /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })
                  ]
                }
              )
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(Marquee, {}),
    /* @__PURE__ */ jsxs("section", { className: "py-24 px-5 sm:px-8 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "What we build" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display font-bold text-4xl sm:text-5xl tracking-tight max-w-2xl", children: [
        "Everything your brand needs to",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-brand-accent", children: "win market share." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-6", children: SERVICES.map((s, i) => /* @__PURE__ */ jsxs(
        FadeUp,
        {
          delay: i * 0.08,
          className: `${s.span} rounded-3xl overflow-hidden border border-white/[0.08] bg-[#14161C] p-8 flex flex-col justify-between group hover:border-brand-accent/40 transition-colors`,
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono2 uppercase tracking-widest text-brand-accent block mb-3", children: s.tag }),
              /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-2xl mb-3 group-hover:text-brand-accent transition-colors", children: s.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 leading-relaxed mb-6", children: s.text }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-2 mb-6", children: s.points.map((pt) => /* @__PURE__ */ jsxs(
                "li",
                {
                  className: "text-xs text-gray-300 flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { size: 14, className: "text-brand-accent shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: pt })
                  ]
                },
                pt
              )) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "relative h-44 rounded-2xl overflow-hidden mt-4 bg-[#0D0E11]", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: s.image,
                alt: s.title,
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
            ) })
          ]
        },
        s.id
      )) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-5 sm:px-8 max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-brand-accent/30 bg-gradient-to-r from-brand-accent/[0.12] via-[#14161C] to-[#14161C] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 max-w-2xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-xs font-mono2 uppercase tracking-wider", children: [
          /* @__PURE__ */ jsx(GraduationCap, { size: 15 }),
          " Training Academy"
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-3xl sm:text-4xl text-white", children: "Learn the role companies are actually hiring for." }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-300 leading-relaxed", children: "100% placement commitment across 5 high-demand career tracks. Train on real client projects and get placed within 90 days or receive a full refund." }),
        /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/training",
            className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-accent hover:brightness-110 text-white font-medium text-sm transition-all whitespace-nowrap active:scale-95 shadow-lg shadow-brand-accent/20",
            children: [
              /* @__PURE__ */ jsx("span", { children: "Explore Academy & Curriculum" }),
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative w-full lg:w-96 h-56 rounded-2xl overflow-hidden border border-white/10 shrink-0 bg-[#0D0E11] shadow-2xl group", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/src/assets/images/training_academy_lab_1791823748458.jpg",
            alt: "Training Academy Lab & Mentorship",
            loading: "lazy",
            referrerPolicy: "no-referrer",
            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-3 left-3 bg-[#0D0E11]/85 backdrop-blur px-3 py-1 rounded-full text-[11px] font-mono2 text-brand-accent uppercase tracking-wider border border-white/10", children: "Live Client Projects" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 px-5 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]", children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "How we think" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display font-bold text-4xl sm:text-5xl tracking-tight mb-14", children: [
        "Five principles. ",
        /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Zero compromises." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-5 gap-6", children: BELIEFS.map((b) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "p-6 rounded-2xl border border-white/[0.08] bg-[#14161C] space-y-3",
          children: [
            /* @__PURE__ */ jsx("span", { className: "font-mono2 text-xs text-brand-accent", children: b.n }),
            /* @__PURE__ */ jsx("h4", { className: "font-display font-bold text-lg text-white", children: b.title }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400 leading-relaxed", children: b.text })
          ]
        },
        b.n
      )) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 px-5 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]", children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "Leadership & Specialists" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display font-bold text-4xl sm:text-5xl tracking-tight mb-14", children: [
        "People who have spent their careers",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-brand-accent", children: "in the trenches." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: TEAM.map((member, i) => /* @__PURE__ */ jsx(FadeUp, { delay: i * 0.08, children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-white/[0.08] bg-[#14161C] overflow-hidden group hover:border-brand-accent/40 transition-colors duration-500 h-full flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative h-72 overflow-hidden bg-[#0D0E11]", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: member.image,
              alt: member.name,
              loading: "lazy",
              referrerPolicy: "no-referrer",
              onError: (e) => {
                const target = e.currentTarget;
                if (!target.src.includes("avatar_garrett_fowler")) {
                  target.src = "/src/assets/images/avatar_garrett_fowler_1791474239764.jpg";
                }
              },
              className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#14161C] via-transparent to-transparent opacity-80 pointer-events-none" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-display font-bold text-xl text-white group-hover:text-brand-accent transition-colors", children: member.name }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400 font-mono2 uppercase tracking-wider mt-1.5", children: member.role })
        ] })
      ] }) }, member.name)) })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "contact", className: "py-24 px-5 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "Start a project" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display font-bold text-4xl sm:text-5xl tracking-tight", children: [
          "Tell us what you need.",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-brand-accent", children: "We'll tell you how." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm sm:text-base leading-relaxed max-w-md", children: "Send us your brief or challenge. Within 24 hours you'll get an unfiltered assessment of the best approach, timeline and budget needed." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "rounded-3xl border border-white/10 bg-[#14161C] p-8 sm:p-10", children: /* @__PURE__ */ jsx(ContactForm, { presetInterest: "A full package", idPrefix: "home" }) })
    ] }) })
  ] });
}
export {
  Home as default
};
