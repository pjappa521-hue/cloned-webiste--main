import { jsx, jsxs } from "react/jsx-runtime";
import { MARQUEE_ITEMS } from "../data/content";
function Marquee() {
  const repeated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return /* @__PURE__ */ jsx("div", { className: "py-6 border-y border-white/[0.08] bg-[#0B0C0F] overflow-hidden select-none", children: /* @__PURE__ */ jsx("div", { className: "flex gap-8 whitespace-nowrap animate-[marquee_25s_linear_infinite]", children: repeated.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-8", children: [
    /* @__PURE__ */ jsx("span", { className: "font-mono2 text-xs uppercase tracking-[0.25em] text-gray-400 hover:text-white transition-colors", children: item }),
    /* @__PURE__ */ jsx("span", { className: "text-brand-accent", children: "\u2726" })
  ] }, idx)) }) });
}
export {
  Marquee as default
};
