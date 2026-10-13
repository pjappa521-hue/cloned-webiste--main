import { jsx, jsxs } from "react/jsx-runtime";
import { motion, AnimatePresence } from "motion/react";
import { X, MapPin } from "lucide-react";
const TeamMemberModal = ({
  member,
  onClose,
  onContact
}) => {
  return /* @__PURE__ */ jsx(AnimatePresence, { children: member && /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6",
      children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-xl bg-[#FAF9F6] text-[#121212] border border-black/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: onClose,
            className: "absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors text-black cursor-pointer",
            "aria-label": "Close",
            children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "w-full md:w-5/12 aspect-square md:aspect-auto bg-neutral-900 relative", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: member.image,
            alt: member.name,
            className: "w-full h-full object-cover grayscale contrast-110"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-[11px] text-neutral-500 font-mono mb-2", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "w-3 h-3" }),
              /* @__PURE__ */ jsx("span", { children: member.location })
            ] }),
            /* @__PURE__ */ jsx(
              "h3",
              {
                className: "font-editorial-serif text-2xl uppercase tracking-tight text-black",
                style: { fontFamily: "'Cinzel', serif" },
                children: member.name
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-neutral-600 font-medium mt-1", children: member.role }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans", children: member.bio })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t border-black/10", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-2", children: "Specialties & Focus" }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-x-3 gap-y-1 text-xs text-neutral-800", children: member.specialty.map((s, idx) => /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center", children: [
              idx > 0 && /* @__PURE__ */ jsx("span", { className: "text-neutral-300 mr-3", children: "\xB7" }),
              s
            ] }, s)) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => {
                onClose();
                onContact();
              },
              className: "w-full py-2.5 px-4 bg-black text-white hover:bg-neutral-800 text-xs font-mono tracking-wider uppercase rounded-md transition-colors cursor-pointer",
              children: [
                "Connect with ",
                member.name.split(" ")[0],
                " \u2192"
              ]
            }
          ) })
        ] })
      ] })
    },
    "team-modal"
  ) });
};
export {
  TeamMemberModal
};
