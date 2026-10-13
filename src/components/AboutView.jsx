import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { motion } from "motion/react";
import { TextReveal } from "./TextReveal";
import { TEAM_MEMBERS, FOUNDER_LETTER, CLIENT_LOGOS } from "../data/offsiteData";
import { OffsiteLogo } from "./OffsiteLogo";
const AboutView = ({
  onOpenLetter,
  onOpenContact,
  onSelectMember,
  setSectionTheme
}) => {
  useEffect(() => {
    const handleScroll = () => {
      const teamSection = document.getElementById("team-section");
      if (teamSection) {
        const rect = teamSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.2) {
          setSectionTheme("dark");
          return;
        }
      }
      setSectionTheme("light");
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
        className: "pt-28 sm:pt-36 pb-20 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto min-h-screen flex flex-col justify-between",
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-center mb-6", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-500", children: "WHO WE ARE" }) }),
          /* @__PURE__ */ jsxs("div", { className: "relative py-12 my-auto flex flex-col items-center justify-center", children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
                className: "hidden lg:block absolute left-0 -top-8 w-60 h-80 rounded-sm overflow-hidden bg-neutral-900 shadow-xl z-0",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "/src/assets/images/abstract_sculptural_ribbons_1791474293615.jpg",
                    alt: "Offsite Form 01",
                    className: "w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-700"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
                className: "hidden lg:block absolute right-12 -top-12 w-44 h-44 rounded-sm overflow-hidden bg-neutral-900 shadow-lg z-0",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "/src/assets/images/abstract_sculptural_ribbons_1791474293615.jpg",
                    alt: "Offsite Form 02",
                    className: "w-full h-full object-cover object-right-top grayscale contrast-125 hover:scale-105 transition-transform duration-700"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
                className: "hidden lg:block absolute right-24 -bottom-16 w-52 h-64 rounded-sm overflow-hidden bg-neutral-900 shadow-xl z-0",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "/src/assets/images/abstract_sculptural_ribbons_1791474293615.jpg",
                    alt: "Offsite Form 03",
                    className: "w-full h-full object-cover object-bottom grayscale contrast-125 hover:scale-105 transition-transform duration-700"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "relative z-10 text-center max-w-4xl mx-auto px-4", children: /* @__PURE__ */ jsx(
              TextReveal,
              {
                as: "h1",
                splitBy: "words",
                className: "font-editorial-serif text-6xl sm:text-8xl md:text-9xl uppercase tracking-tight text-[#121212] font-normal leading-none",
                style: { fontFamily: "'Cinzel', 'Italiana', serif" },
                children: "ABOUT US"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-md pt-12 space-y-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed", children: "Offsite is a new kind of talent agency focused on community, career, and creative practice." }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: onOpenContact,
                className: "py-2 px-6 bg-black text-white hover:bg-neutral-800 text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer",
                children: "Contact"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "section",
      {
        "data-theme": "light",
        className: "py-28 sm:py-36 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto border-t border-black/10",
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-start justify-between gap-12 sm:gap-20", children: [
          /* @__PURE__ */ jsx("div", { className: "md:w-1/4", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-500 block", children: FOUNDER_LETTER.kicker }) }),
          /* @__PURE__ */ jsxs("div", { className: "md:w-3/4 space-y-12", children: [
            /* @__PURE__ */ jsx(
              "h2",
              {
                className: "font-editorial-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-[#121212] leading-[1.12]",
                style: { fontFamily: "'Cinzel', serif" },
                children: FOUNDER_LETTER.headline
              }
            ),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
              "button",
              {
                onClick: onOpenLetter,
                className: "py-2.5 px-6 bg-black text-white hover:bg-neutral-800 text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer",
                children: "Read The Letter"
              }
            ) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      "section",
      {
        id: "team-section",
        "data-theme": "dark",
        className: "bg-[#080808] text-white py-28 sm:py-36 px-6 sm:px-12 md:px-20 transition-colors duration-700",
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-20", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400 block", children: "MORE ABOUT US" }),
            /* @__PURE__ */ jsx(
              TextReveal,
              {
                as: "h2",
                splitBy: "words",
                className: "font-editorial-serif text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-tight",
                style: { fontFamily: "'Cinzel', serif" },
                children: "MEET THE OFFSITE TEAM"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto", children: TEAM_MEMBERS.map((member) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-10%" },
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              onClick: () => onSelectMember(member),
              className: "group cursor-pointer space-y-3",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "aspect-square w-full bg-neutral-900 overflow-hidden relative", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: member.image,
                      alt: member.name,
                      className: "w-full h-full object-cover grayscale contrast-110 group-hover:scale-103 group-hover:contrast-125 transition-all duration-700"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "pt-1", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-sans text-sm font-semibold tracking-wide text-white group-hover:text-neutral-300 transition-colors", children: member.name }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-400 font-sans mt-0.5", children: member.role })
                ] })
              ]
            },
            member.id
          )) }),
          /* @__PURE__ */ jsx("div", { className: "text-center pt-8 max-w-lg mx-auto", children: /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed", children: "Our team is setting a new standard for design recruitment and creative community building. Get to know the humans behind Offsite." }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      "section",
      {
        "data-theme": "light",
        className: "bg-[#FAF9F6] text-[#121212] py-28 sm:py-36 px-6 sm:px-12 md:px-20 transition-colors duration-700",
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center space-y-6", children: [
            /* @__PURE__ */ jsx(
              TextReveal,
              {
                as: "h2",
                splitBy: "words",
                className: "font-editorial-serif text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-[#121212] font-normal",
                style: { fontFamily: "'Cinzel', 'Italiana', serif" },
                children: "SELECT CLIENTS"
              }
            ),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
              "button",
              {
                onClick: onOpenContact,
                className: "py-1.5 px-5 bg-black text-white hover:bg-neutral-800 text-[10px] font-mono uppercase tracking-[0.2em] transition-all cursor-pointer",
                children: "Become The Next"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "pt-8 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-6 gap-y-10 items-center justify-items-center opacity-80", children: CLIENT_LOGOS.map((client) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "group flex flex-col items-center justify-center text-center p-2 hover:opacity-100 transition-opacity",
              children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "font-sans text-sm sm:text-base tracking-wider font-semibold text-neutral-800 group-hover:text-black transition-colors",
                    children: client.name
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-[9px] font-mono text-neutral-500 mt-0.5 tracking-tight", children: client.category })
              ]
            },
            client.name
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "pt-16 border-t border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-[11px] text-neutral-500 font-sans", children: [
              /* @__PURE__ */ jsx("span", { className: "font-mono text-neutral-400 mr-2", children: "01" }),
              "This is the room. These are the people. We are Offsite."
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-8 text-[11px] tracking-[0.2em] font-mono uppercase text-neutral-600", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://instagram.com",
                  target: "_blank",
                  rel: "noreferrer noopener",
                  className: "hover:text-black transition-colors",
                  children: "Instagram"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: onOpenContact,
                  className: "hover:text-black transition-colors cursor-pointer",
                  children: "Contact"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 text-neutral-800 flex items-center justify-center", children: /* @__PURE__ */ jsx(OffsiteLogo, { isMonogram: true, className: "w-6 h-6", color: "black" }) })
          ] })
        ] })
      }
    )
  ] });
};
export {
  AboutView
};
