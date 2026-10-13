import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
function ScrollIndicator() {
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
  return /* @__PURE__ */ jsxs("div", { className: "fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2 pointer-events-none select-none", children: [
    /* @__PURE__ */ jsxs("span", { className: "text-[9px] font-mono2 text-gray-500 tabular-nums", children: [
      Math.round(progress * 100).toString().padStart(2, "0"),
      "%"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative w-[1.5px] h-24 sm:h-32 bg-white/10 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        style: { height: `${Math.max(4, progress * 100)}%` },
        className: "w-full bg-[#FF4D00] rounded-full transition-all duration-75"
      }
    ) }),
    /* @__PURE__ */ jsx("span", { className: "text-[8px] tracking-[0.25em] uppercase font-mono2 text-gray-600 [writing-mode:vertical-rl]", children: "Scroll" })
  ] });
}
export {
  ScrollIndicator as default
};
