import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { motion } from "motion/react";
import { TextReveal } from "./TextReveal";
import { SERVICE_PILLARS, CLIENT_LOGOS } from "../data/offsiteData";
import { OffsiteLogo } from "./OffsiteLogo";
const ServicesView = ({
  onOpenContact,
  setSectionTheme
}) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 250) {
        setSectionTheme("dark");
      } else {
        setSectionTheme("light");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setSectionTheme]);
  return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxs(
      "section",
      {
        "data-theme": "light",
        className: "pt-28 sm:pt-36 pb-20 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto min-h-[55vh] flex flex-col justify-center text-center",
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-500 mb-6 block", children: "WE'RE HERE TO HELP." }),
          /* @__PURE__ */ jsx(
            TextReveal,
            {
              as: "h1",
              splitBy: "words",
              className: "font-editorial-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight text-[#121212] font-normal leading-none",
              style: { fontFamily: "'Cinzel', 'Italiana', serif" },
              children: "OUR SERVICES"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "section",
      {
        "data-theme": "dark",
        className: "bg-[#080808] text-white py-24 sm:py-32 px-6 sm:px-12 md:px-20 transition-colors duration-700",
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-24", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-start justify-between gap-8 pb-16 border-b border-white/10", children: [
            /* @__PURE__ */ jsx("div", { className: "md:w-1/4", children: /* @__PURE__ */ jsx("span", { className: "text-[11px] font-mono tracking-widest uppercase text-neutral-400", children: "Our Services" }) }),
            /* @__PURE__ */ jsxs("div", { className: "md:w-3/4 space-y-6 max-w-xl", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base text-neutral-300 font-sans leading-relaxed", children: "Offsite provides an array of recruitment, advisory, and community services to help you build the future." }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: onOpenContact,
                  className: "py-2 px-6 border border-white/30 hover:border-white text-xs font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all cursor-pointer",
                  children: "Contact Us"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-20", children: SERVICE_PILLARS.map((pillar) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-10%" },
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              className: "pt-10 border-t border-white/15 grid grid-cols-1 md:grid-cols-12 gap-8",
              children: [
                /* @__PURE__ */ jsx("div", { className: "md:col-span-3", children: /* @__PURE__ */ jsxs("span", { className: "font-mono text-xs text-neutral-500", children: [
                  "/",
                  pillar.number
                ] }) }),
                /* @__PURE__ */ jsxs("div", { className: "md:col-span-9 space-y-6", children: [
                  /* @__PURE__ */ jsx(
                    "h2",
                    {
                      className: "font-editorial-serif text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-tight",
                      style: { fontFamily: "'Cinzel', serif" },
                      children: pillar.title
                    }
                  ),
                  /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base text-neutral-400 font-sans leading-relaxed max-w-2xl", children: pillar.summary }),
                  /* @__PURE__ */ jsx("div", { className: "pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-neutral-400", children: pillar.details.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-neutral-600 rounded-full shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: item })
                  ] }, item)) })
                ] })
              ]
            },
            pillar.title
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "pt-24 sm:pt-32 border-t border-white/15 space-y-12", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center space-y-6", children: [
              /* @__PURE__ */ jsx(
                TextReveal,
                {
                  as: "h2",
                  splitBy: "words",
                  className: "font-editorial-serif text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-white font-normal",
                  style: { fontFamily: "'Cinzel', 'Italiana', serif" },
                  children: "SELECT CLIENTS"
                }
              ),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: onOpenContact,
                  className: "py-1.5 px-5 border border-white/25 hover:border-white text-[10px] font-mono uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all cursor-pointer",
                  children: "Become The Next"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "pt-8 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-6 gap-y-10 items-center justify-items-center opacity-70", children: CLIENT_LOGOS.map((client) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "group flex flex-col items-center justify-center text-center p-2 hover:opacity-100 transition-opacity",
                children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "font-sans text-sm sm:text-base tracking-wider font-semibold text-neutral-200 group-hover:text-white transition-colors",
                      children: client.name
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "text-[9px] font-mono text-neutral-600 mt-0.5 tracking-tight group-hover:text-neutral-400 transition-colors", children: client.category })
                ]
              },
              client.name
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pt-16 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-[11px] text-neutral-500 font-sans", children: [
              /* @__PURE__ */ jsx("span", { className: "font-mono text-neutral-400 mr-2", children: "01" }),
              "This is the room. These are the people. We are Offsite."
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-8 text-[11px] tracking-[0.2em] font-mono uppercase text-neutral-400", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://instagram.com",
                  target: "_blank",
                  rel: "noreferrer noopener",
                  className: "hover:text-white transition-colors",
                  children: "Instagram"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: onOpenContact,
                  className: "hover:text-white transition-colors cursor-pointer",
                  children: "Contact"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 text-neutral-400 flex items-center justify-center", children: /* @__PURE__ */ jsx(OffsiteLogo, { isMonogram: true, className: "w-6 h-6", color: "white" }) })
          ] })
        ] })
      }
    )
  ] });
};
export {
  ServicesView
};
