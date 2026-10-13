import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
const IntroAnimation = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 500);
    const t2 = setTimeout(() => setPhase(2), 1600);
    const t3 = setTimeout(() => setPhase(3), 3200);
    const t4 = setTimeout(() => onComplete(), 3900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: phase < 3 && /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
      className: "fixed inset-0 z-50 flex items-center justify-center bg-[#FAF9F6] pointer-events-auto",
      children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center justify-center w-full max-w-lg px-6", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { scale: 0.8, opacity: 0 },
            animate: {
              scale: phase >= 2 ? 1 : 0.95,
              opacity: 1,
              y: phase >= 2 ? [0, -4, 0] : 0
            },
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
            className: "relative flex flex-col items-center justify-center",
            children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center", children: [
              /* @__PURE__ */ jsxs(
                "svg",
                {
                  viewBox: "0 0 240 140",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "w-48 sm:w-64 h-auto",
                  children: [
                    /* @__PURE__ */ jsx(
                      motion.path,
                      {
                        d: "M 120 30 C 85 30, 60 52, 60 75 C 60 98, 80 115, 115 115 C 145 115, 168 95, 168 70 C 168 45, 140 25, 105 25 C 70 25, 45 48, 45 75 C 45 105, 75 125, 125 125 C 160 125, 190 105, 200 80",
                        stroke: "#121212",
                        strokeWidth: "1.8",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        initial: { pathLength: 0, opacity: 0 },
                        animate: {
                          pathLength: phase >= 1 ? 1 : 0.4,
                          opacity: phase >= 1 ? 1 : 0.7
                        },
                        transition: {
                          duration: 1.8,
                          ease: [0.65, 0, 0.35, 1]
                        }
                      }
                    ),
                    phase >= 2 && /* @__PURE__ */ jsx(
                      motion.path,
                      {
                        d: "M 120 125 C 120 145, 128 155, 120 170 C 112 185, 125 195, 120 210",
                        stroke: "#121212",
                        strokeWidth: "1.2",
                        strokeLinecap: "round",
                        initial: { pathLength: 0, opacity: 0 },
                        animate: { pathLength: 1, opacity: 0.8 },
                        transition: { duration: 1.2, ease: "easeInOut" }
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 10, scale: 0.95 },
                  animate: {
                    opacity: phase >= 2 ? 1 : 0,
                    y: phase >= 2 ? 0 : 10,
                    scale: phase >= 2 ? 1 : 0.95
                  },
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                  className: "mt-2 text-center",
                  children: /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "font-script text-5xl sm:text-6xl text-[#121212] tracking-wider italic",
                      style: { fontFamily: "'Pinyon Script', cursive" },
                      children: "Offsite"
                    }
                  )
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.button,
          {
            initial: { opacity: 0 },
            animate: { opacity: 0.6 },
            whileHover: { opacity: 1 },
            onClick: onComplete,
            className: "absolute -bottom-24 text-[11px] uppercase tracking-[0.2em] font-mono text-neutral-500 hover:text-black py-2 px-3 transition-colors cursor-pointer",
            children: "Skip Intro \u2192"
          }
        )
      ] })
    },
    "intro-curtain"
  ) });
};
export {
  IntroAnimation
};
