import { jsx, jsxs } from "react/jsx-runtime";
import { motion, AnimatePresence } from "motion/react";
import { Play } from "lucide-react";
const MenuOverlay = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenVideo,
  onOpenContact
}) => {
  const menuItems = [
    { num: "01", label: "SERVICES", target: "services" },
    { num: "02", label: "ABOUT", target: "about" },
    { num: "03", label: "ROLES", target: "roles" },
    { num: "04", label: "ACADEMY", target: "training" }
  ];
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
      className: "fixed inset-0 z-30 flex flex-col justify-between bg-[#FAF9F6] text-[#121212] px-6 sm:px-12 md:px-20 pt-28 pb-8 sm:pb-12",
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex-1 flex flex-col justify-center max-w-5xl", children: /* @__PURE__ */ jsx("nav", { className: "space-y-4 sm:space-y-6", children: menuItems.map((item, idx) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 40 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 20 },
            transition: {
              duration: 0.6,
              delay: 0.1 + idx * 0.08,
              ease: [0.16, 1, 0.3, 1]
            },
            className: "overflow-hidden",
            children: /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => {
                  onNavigate(item.target);
                  onClose();
                },
                className: "group flex items-baseline gap-4 sm:gap-8 text-left cursor-pointer focus:outline-none",
                children: [
                  /* @__PURE__ */ jsxs("span", { className: "font-mono text-xs sm:text-sm text-neutral-400 group-hover:text-black transition-colors", children: [
                    "/",
                    item.num
                  ] }),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "font-editorial-serif text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#121212] group-hover:translate-x-3 transition-transform duration-300 font-normal uppercase",
                      style: { fontFamily: "'Cinzel', 'Italiana', serif" },
                      children: item.label
                    }
                  )
                ]
              }
            )
          },
          item.target
        )) }) }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.4 },
            className: "flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pt-6 border-t border-black/10",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "text-[11px] sm:text-xs text-neutral-500 font-normal tracking-wide max-w-sm", children: [
                /* @__PURE__ */ jsx("span", { className: "font-mono mr-2 text-neutral-400", children: "01" }),
                "This is the room. These are the people. We are Offsite."
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-8 text-[11px] sm:text-xs tracking-[0.15em] uppercase font-mono text-neutral-600", children: [
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
                    onClick: () => {
                      onClose();
                      onOpenContact();
                    },
                    className: "hover:text-black transition-colors cursor-pointer",
                    children: "Contact"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  onClick: () => {
                    onClose();
                    onOpenVideo();
                  },
                  className: "group relative cursor-pointer flex items-center gap-3 bg-neutral-900 text-white rounded-lg p-2.5 pr-4 overflow-hidden shadow-sm hover:shadow-md transition-all",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "relative w-12 h-10 bg-neutral-800 rounded overflow-hidden flex items-center justify-center", children: [
                      /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: "/src/assets/images/abstract_sculptural_ribbons_1791474293615.jpg",
                          alt: "Offsite Journey Thumbnail",
                          className: "w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform"
                        }
                      ),
                      /* @__PURE__ */ jsx(Play, { className: "w-3.5 h-3.5 text-white absolute fill-white" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-[11px] font-medium tracking-wide", children: "Watch the Offsite journey" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[9px] text-neutral-400 font-mono", children: "01:42 \xB7 Film" })
                    ] })
                  ]
                }
              )
            ]
          }
        )
      ]
    },
    "menu-overlay"
  ) });
};
export {
  MenuOverlay
};
