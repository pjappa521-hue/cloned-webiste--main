import { jsx, jsxs } from "react/jsx-runtime";
const OffsiteLogo = ({
  className = "h-8",
  isMonogram = false,
  color = "currentColor"
}) => {
  if (isMonogram) {
    return /* @__PURE__ */ jsxs(
      "svg",
      {
        viewBox: "0 0 100 80",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className,
        "aria-label": "Offsite Monogram",
        children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M 50 15 C 32 15, 18 28, 18 42 C 18 56, 30 68, 48 68 C 66 68, 78 54, 78 40 C 78 24, 62 12, 44 12 C 26 12, 12 24, 12 40 C 12 58, 28 72, 54 72 C 72 72, 88 60, 92 48",
              stroke: color,
              strokeWidth: "3.2",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsx("circle", { cx: "50", cy: "40", r: "1.8", fill: color })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsx("div", { className: `inline-flex items-center select-none ${className}`, children: /* @__PURE__ */ jsx(
    "span",
    {
      className: "font-script text-3xl sm:text-4xl tracking-wide font-normal italic leading-none transition-colors duration-300",
      style: {
        fontFamily: "'Pinyon Script', cursive",
        transform: "scaleY(1.05)",
        display: "inline-block"
      },
      children: "Offsite"
    }
  ) });
};
export {
  OffsiteLogo
};
