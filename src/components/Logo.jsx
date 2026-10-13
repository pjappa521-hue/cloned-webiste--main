import { jsx, jsxs } from "react/jsx-runtime";
function Logo({ compact = false }) {
  return /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2.5", "data-testid": "brand-logo", children: [
    /* @__PURE__ */ jsxs("svg", { width: "30", height: "30", viewBox: "0 0 64 64", fill: "none", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx(
        "rect",
        {
          width: "64",
          height: "64",
          rx: "14",
          fill: "#14161C",
          stroke: "rgba(255,255,255,0.1)"
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "32",
          cy: "32",
          r: "17",
          fill: "none",
          stroke: "#FF4D00",
          strokeWidth: "5"
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: "32", cy: "32", r: "6", fill: "#FF4D00" })
    ] }),
    !compact && /* @__PURE__ */ jsxs("span", { className: "font-display font-semibold tracking-tight text-[15px] leading-none text-white", children: [
      "THE INTERNET ",
      /* @__PURE__ */ jsx("span", { className: "text-brand-accent", children: "ADS" })
    ] })
  ] });
}
export {
  Logo as default
};
