import { jsx, jsxs } from "react/jsx-runtime";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { FOUNDER_LETTER } from "../data/offsiteData";
const LetterModal = ({ isOpen, onClose }) => {
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto",
      children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-2xl bg-[#FAF9F6] text-[#121212] border border-black/10 rounded-2xl p-6 sm:p-10 md:p-12 shadow-2xl my-8", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: onClose,
            className: "absolute top-6 right-6 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors text-black cursor-pointer",
            "aria-label": "Close letter",
            children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-500 block", children: FOUNDER_LETTER.kicker }),
          /* @__PURE__ */ jsx(
            "h2",
            {
              className: "font-editorial-serif text-2xl sm:text-3xl leading-snug tracking-tight text-[#121212] border-b border-black/10 pb-6 uppercase",
              style: { fontFamily: "'Cinzel', serif" },
              children: "A Letter on Craft, Agency, & Community"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-4 font-editorial-body text-base sm:text-lg text-neutral-800 leading-relaxed", children: FOUNDER_LETTER.fullLetter.map((paragraph, idx) => /* @__PURE__ */ jsx("p", { children: paragraph }, idx)) }),
          /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-black/10 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm text-black", children: FOUNDER_LETTER.author }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500", children: FOUNDER_LETTER.authorTitle })
            ] }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "font-script text-3xl text-neutral-800",
                style: { fontFamily: "'Pinyon Script', cursive" },
                children: "Garrett Fowler"
              }
            )
          ] })
        ] })
      ] })
    },
    "letter-modal"
  ) });
};
export {
  LetterModal
};
