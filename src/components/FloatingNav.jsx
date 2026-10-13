import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { OffsiteLogo } from "./OffsiteLogo";
const FloatingNav = ({
  isMenuOpen,
  onToggleMenu,
  onNavigate,
  currentSectionTheme
}) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsx("header", { className: "fixed top-6 sm:top-8 left-0 right-0 z-40 flex justify-center items-center pointer-events-none px-4", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { y: -30, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
      className: `pointer-events-auto flex items-center justify-between gap-6 sm:gap-10 px-6 sm:px-8 py-2.5 rounded-full transition-all duration-500 backdrop-blur-md ${isMenuOpen ? "bg-transparent border-transparent shadow-none" : currentSectionTheme === "dark" ? "bg-white/95 text-[#121212] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.35)]" : scrolled ? "bg-white/90 text-[#121212] border border-black/5 shadow-[0_6px_24px_rgba(0,0,0,0.06)]" : "bg-white/80 text-[#121212] border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"}`,
      children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              if (isMenuOpen) onToggleMenu();
              onNavigate("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            },
            className: "focus:outline-none flex items-center group cursor-pointer",
            "aria-label": "Offsite Home",
            children: /* @__PURE__ */ jsx(OffsiteLogo, { className: "h-7 sm:h-8" })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "w-[1px] h-4 bg-black/15 transition-opacity" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: onToggleMenu,
            className: "focus:outline-none flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/5 transition-colors cursor-pointer group",
            "aria-label": isMenuOpen ? "Close Menu" : "Open Menu",
            children: /* @__PURE__ */ jsxs("div", { className: "relative w-4 h-3.5 flex flex-col justify-between items-center", children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: `block w-full h-[1.5px] bg-current transition-all duration-300 transform ${isMenuOpen ? "rotate-45 translate-y-[6px]" : ""}`
                }
              ),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: `block w-full h-[1.5px] bg-current transition-all duration-300 transform ${isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`
                }
              )
            ] })
          }
        )
      ]
    }
  ) });
};
export {
  FloatingNav
};
