import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "motion/react";
import { Play, Lock, ArrowRight, CheckCircle2 } from "lucide-react";
import { TextReveal } from "./TextReveal";
import { OFFSITE_THESIS } from "../data/offsiteData";
import { OffsiteLogo } from "./OffsiteLogo";
const HomeView = ({
  onNavigate,
  onOpenVideo,
  onOpenContact,
  setSectionTheme
}) => {
  const [email, setEmail] = useState("");
  const [waitlistDone, setWaitlistDone] = useState(false);
  const thesisRef = useRef(null);
  const { scrollYProgress: thesisScroll } = useScroll({
    target: thesisRef,
    offset: ["start 85%", "end 25%"]
  });
  const thesisWords = OFFSITE_THESIS.split(" ");
  useEffect(() => {
    const handleScrollTheme = () => {
      const darkSections = document.querySelectorAll('[data-theme="dark"]');
      const scrollY = window.scrollY + window.innerHeight * 0.35;
      let isDark = false;
      darkSections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;
        if (scrollY >= top && scrollY <= bottom) {
          isDark = true;
        }
      });
      setSectionTheme(isDark ? "dark" : "light");
    };
    window.addEventListener("scroll", handleScrollTheme, { passive: true });
    handleScrollTheme();
    return () => window.removeEventListener("scroll", handleScrollTheme);
  }, [setSectionTheme]);
  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setWaitlistDone(true);
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxs(
      "section",
      {
        "data-theme": "light",
        className: "min-h-screen relative flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto",
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-full text-center mb-8 sm:mb-12", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] sm:text-[11px] tracking-[0.3em] font-mono uppercase text-neutral-500", children: "HELLO, FRIENDS. MEET OFFSITE." }) }),
          /* @__PURE__ */ jsx("div", { className: "flex-1 flex items-center justify-center text-center my-6 sm:my-10", children: /* @__PURE__ */ jsx(
            TextReveal,
            {
              as: "h1",
              splitBy: "lines",
              className: "font-editorial-serif text-[11vw] sm:text-[9vw] md:text-[7.5vw] lg:text-[6.8vw] leading-[0.92] tracking-[-0.03em] uppercase text-[#121212] select-none font-normal",
              style: { fontFamily: "'Cinzel', 'Italiana', serif" },
              children: `GATHERING THE
FEW WHO MOVE
THE MANY`
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pt-8 border-t border-black/10", children: [
            /* @__PURE__ */ jsx("div", { className: "max-w-md", children: /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed", children: "Welcome to the future of creative talent recruitment, community, advisory, and executive practice. Explore how Offsite can help you turn your vision into reality." }) }),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                whileHover: { scale: 1.02 },
                onClick: onOpenVideo,
                className: "group relative cursor-pointer flex items-center gap-3 bg-neutral-900 text-white rounded-lg p-3 pr-5 overflow-hidden shadow-lg hover:shadow-xl transition-all",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "relative w-16 h-12 bg-neutral-800 rounded overflow-hidden flex items-center justify-center", children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: "/src/assets/images/abstract_sculptural_ribbons_1791474293615.jpg",
                        alt: "Watch the Offsite journey",
                        className: "w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform"
                      }
                    ),
                    /* @__PURE__ */ jsx(Play, { className: "w-4 h-4 text-white absolute fill-white" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-xs font-medium tracking-wide", children: "Watch the Offsite journey" }),
                    /* @__PURE__ */ jsx("span", { className: "text-[10px] text-neutral-400 font-mono", children: "01:42 \xB7 Film" })
                  ] })
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "section",
      {
        "data-theme": "dark",
        ref: thesisRef,
        className: "relative bg-[#080808] text-white py-28 sm:py-36 md:py-48 px-6 sm:px-12 md:px-20 transition-colors duration-700",
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12 sm:gap-20", children: [
          /* @__PURE__ */ jsxs("div", { className: "md:w-1/4 sticky top-36", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-[1px] bg-white/30 mb-3" }),
            /* @__PURE__ */ jsx("span", { className: "text-[11px] font-mono tracking-widest uppercase text-neutral-400 block", children: "Our Thesis" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "md:w-3/4 space-y-16", children: [
            /* @__PURE__ */ jsx(
              "h2",
              {
                className: "font-editorial-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.12] tracking-tight uppercase",
                style: { fontFamily: "'Cinzel', 'Italiana', serif" },
                children: thesisWords.map((word, idx) => {
                  const threshold = idx / thesisWords.length;
                  return /* @__PURE__ */ jsx(
                    ThesisWord,
                    {
                      word,
                      threshold,
                      progress: thesisScroll
                    },
                    idx
                  );
                })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "pt-8 border-t border-white/15 max-w-md space-y-6", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed", children: "Offsite provides an array of recruitment, advisory, and community services to help you build your version of the future." }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => onNavigate("services"),
                  className: "py-2.5 px-6 border border-white/30 hover:border-white text-xs font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all cursor-pointer",
                  children: "Our Services"
                }
              )
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      "section",
      {
        "data-theme": "dark",
        className: "bg-[#080808] text-white py-24 sm:py-32 px-6 sm:px-12 md:px-20 border-t border-white/10",
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center space-y-8", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400 block", children: "WHO WE ARE" }),
          /* @__PURE__ */ jsx(
            TextReveal,
            {
              as: "h2",
              splitBy: "lines",
              className: "font-editorial-serif text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-tight",
              style: { fontFamily: "'Cinzel', serif" },
              children: `ABOUT OUR STUDIO AND THE
PEOPLE BEHIND THE WORK`
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => onNavigate("about"),
              className: "py-2.5 px-6 border border-white/30 hover:border-white text-xs font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all cursor-pointer",
              children: "Read More"
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      "section",
      {
        "data-theme": "light",
        className: "bg-[#FAF9F6] text-[#121212] py-28 sm:py-36 px-6 sm:px-12 md:px-20 transition-colors duration-700",
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center space-y-8", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-500 block", children: "THIS IS THE ROOM. THESE ARE THE PEOPLE. WE ARE OFFSITE." }),
          /* @__PURE__ */ jsx(
            TextReveal,
            {
              as: "h2",
              splitBy: "lines",
              className: "font-editorial-serif text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#121212] leading-tight",
              style: { fontFamily: "'Cinzel', serif" },
              children: `JOIN THE OFFSITE
COMMUNITY`
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-neutral-600 font-sans max-w-md mx-auto", children: "Join our waitlist for exclusive community events, content, and more." }),
          /* @__PURE__ */ jsx("div", { className: "pt-4 max-w-md mx-auto", children: waitlistDone ? /* @__PURE__ */ jsxs("div", { className: "p-4 bg-black text-white rounded-lg flex items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-emerald-400" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-mono uppercase tracking-wider", children: "You are registered on the waitlist." })
          ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleWaitlistSubmit, className: "relative flex items-center", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                required: true,
                placeholder: "ENTER YOUR EMAIL",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                className: "w-full bg-transparent border-b border-black/30 focus:border-black text-xs sm:text-sm tracking-[0.2em] font-mono py-3 pr-12 focus:outline-none placeholder:text-neutral-400 uppercase"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded bg-black text-white hover:bg-neutral-800 flex items-center justify-center transition-colors cursor-pointer",
                "aria-label": "Submit Waitlist",
                children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
              }
            )
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs(
      "section",
      {
        "data-theme": "dark",
        className: "bg-[#080808] text-white py-28 sm:py-36 px-6 sm:px-12 md:px-20 transition-colors duration-700",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12 sm:gap-20", children: [
            /* @__PURE__ */ jsx("div", { className: "md:w-1/4", children: /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-400 font-sans block", children: "Glimpse your future with Offsite." }) }),
            /* @__PURE__ */ jsxs("div", { className: "md:w-3/4 space-y-8", children: [
              /* @__PURE__ */ jsx(
                TextReveal,
                {
                  as: "h2",
                  splitBy: "lines",
                  className: "font-editorial-serif text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-white leading-none",
                  style: { fontFamily: "'Cinzel', serif" },
                  children: `OPEN
ROLES`
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed max-w-lg", children: "Offsite represents best-in-class opportunities across Product Design, Brand/Creative, Design Engineering, Executive Leadership, & more." }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pt-4", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => onNavigate("roles"),
                    className: "py-2.5 px-6 border border-white/30 hover:border-white text-xs font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all cursor-pointer",
                    children: "Explore Open Roles"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => onNavigate("roles"),
                    className: "p-2.5 border border-white/30 hover:border-white text-white hover:bg-white hover:text-black transition-all rounded-none cursor-pointer",
                    "aria-label": "Private Roles Lock",
                    children: /* @__PURE__ */ jsx(Lock, { className: "w-4 h-4" })
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto mt-28 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6", children: [
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
        ]
      }
    )
  ] });
};
const ThesisWord = ({ word, threshold, progress }) => {
  const [lit, setLit] = useState(false);
  useEffect(() => {
    return progress.on("change", (latest) => {
      setLit(latest >= threshold * 0.95);
    });
  }, [progress, threshold]);
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: `inline-block mr-[0.26em] transition-colors duration-300 ${lit ? "text-white" : "text-neutral-700"}`,
      children: word
    }
  );
};
export {
  HomeView
};
