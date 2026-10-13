import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
const ScrollProgress = ({ currentTheme }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const currentScroll = window.scrollY;
      setProgress(Math.min(1, Math.max(0, currentScroll / totalScroll)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-2 pointer-events-none select-none", children: [
    /* @__PURE__ */ jsxs(
      "span",
      {
        className: `text-[9px] font-mono transition-colors duration-300 ${currentTheme === "dark" ? "text-neutral-500" : "text-neutral-400"}`,
        children: [
          Math.round(progress * 100).toString().padStart(2, "0"),
          "%"
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `relative w-[1.5px] h-28 sm:h-36 rounded-full overflow-hidden transition-colors duration-300 ${currentTheme === "dark" ? "bg-white/10" : "bg-black/10"}`,
        children: /* @__PURE__ */ jsx(
          motion.div,
          {
            style: { height: `${Math.max(4, progress * 100)}%` },
            className: `w-full transition-colors duration-300 rounded-full ${currentTheme === "dark" ? "bg-white" : "bg-[#121212]"}`
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "span",
      {
        className: `text-[8px] tracking-[0.2em] uppercase font-mono [writing-mode:vertical-rl] transition-colors duration-300 ${currentTheme === "dark" ? "text-neutral-500" : "text-neutral-400"}`,
        children: "Scroll"
      }
    )
  ] });
};
export {
  ScrollProgress
};
