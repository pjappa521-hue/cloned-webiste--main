import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { PasswordGateModal } from "./PasswordGateModal";
import { OPEN_ROLES } from "../data/offsiteData";
import { ArrowUpRight, Lock, Filter } from "lucide-react";
import { OffsiteLogo } from "./OffsiteLogo";
const RolesView = ({ onSelectRole, onOpenContact }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredRoles = activeFilter === "all" ? OPEN_ROLES : OPEN_ROLES.filter((r) => r.department === activeFilter);
  const departments = [
    { id: "all", label: "All Disciplines" },
    { id: "Product Design", label: "Product Design" },
    { id: "Brand/Creative", label: "Brand & Creative" },
    { id: "Design Engineering", label: "Design Engineering" },
    { id: "Executive Leadership", label: "Executive Leadership" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "w-full bg-[#FAF9F6] text-[#121212] pt-28 sm:pt-36 pb-24 px-6 sm:px-12 md:px-20 min-h-screen flex flex-col justify-between", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto w-full", children: !isUnlocked ? /* @__PURE__ */ jsx(
      PasswordGateModal,
      {
        isUnlocked,
        onUnlock: () => setIsUnlocked(true),
        onLock: () => setIsUnlocked(false)
      }
    ) : /* @__PURE__ */ jsxs("div", { className: "space-y-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-500", children: "OFFSITE PRIVATE DIRECTORY \xB7 ACTIVE SEARCHES" }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setIsUnlocked(false),
              className: "flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-black transition-colors cursor-pointer",
              children: [
                /* @__PURE__ */ jsx(Lock, { className: "w-3.5 h-3.5" }),
                "Lock Directory"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "h1",
          {
            className: "font-editorial-serif text-5xl sm:text-7xl uppercase tracking-tight text-[#121212]",
            style: { fontFamily: "'Cinzel', serif" },
            children: "OPEN ROLES"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-neutral-600 font-sans max-w-xl leading-relaxed", children: "Offsite represents best-in-class opportunities across Product Design, Brand/Creative, Design Engineering, Executive Leadership, & more." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 pt-2 border-b border-black/10 pb-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs font-mono text-neutral-400 mr-2", children: [
          /* @__PURE__ */ jsx(Filter, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ jsx("span", { children: "Filter:" })
        ] }),
        departments.map((dept) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setActiveFilter(dept.id),
            className: `px-3 py-1.5 text-xs font-mono tracking-wider uppercase rounded transition-colors cursor-pointer ${activeFilter === dept.id ? "bg-black text-white font-medium" : "bg-white text-neutral-600 hover:text-black border border-black/10"}`,
            children: dept.label
          },
          dept.id
        ))
      ] }),
      /* @__PURE__ */ jsx("div", { className: "divide-y divide-black/10 border-b border-black/10", children: filteredRoles.map((role) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          onClick: () => onSelectRole(role),
          className: "group py-6 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-black/[0.02] px-3 -mx-3 rounded transition-colors",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 md:w-1/2", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-[10px] font-mono uppercase tracking-widest text-neutral-400 block", children: [
                role.department,
                " \xB7 ",
                role.companyType
              ] }),
              /* @__PURE__ */ jsx(
                "h3",
                {
                  className: "font-editorial-serif text-2xl sm:text-3xl uppercase tracking-tight text-black group-hover:translate-x-1 transition-transform",
                  style: { fontFamily: "'Cinzel', serif" },
                  children: role.title
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between md:justify-end gap-6 md:w-1/2", children: [
              /* @__PURE__ */ jsxs("div", { className: "text-left md:text-right text-xs font-mono text-neutral-600", children: [
                /* @__PURE__ */ jsx("div", { children: role.location }),
                /* @__PURE__ */ jsx("div", { className: "text-black font-semibold mt-0.5", children: role.compensation })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full bg-black/5 group-hover:bg-black group-hover:text-white flex items-center justify-center transition-all shrink-0", children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4" }) })
            ] })
          ]
        },
        role.id
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "p-6 bg-white border border-black/10 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-xs font-mono uppercase tracking-wider text-black", children: "Seeking an unlisted mandate or discreet representation?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 font-sans mt-0.5", children: "Over 60% of our executive creative searches are completely confidential." })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: onOpenContact,
            className: "py-2 px-5 bg-black text-white hover:bg-neutral-800 text-xs font-mono uppercase tracking-widest rounded transition-colors cursor-pointer shrink-0",
            children: "Confidential Inquiry"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto w-full pt-16 border-t border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-16", children: [
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
  ] });
};
export {
  RolesView
};
