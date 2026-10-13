import { jsx } from "react/jsx-runtime";
import { motion } from "motion/react";
const TextReveal = ({
  children,
  className = "",
  delay = 0,
  as: Component = "div",
  splitBy = "words",
  style
}) => {
  if (splitBy === "lines") {
    const lines = children.split("\n");
    return /* @__PURE__ */ jsx(Component, { className, style, children: lines.map((line, idx) => /* @__PURE__ */ jsx("span", { className: "block overflow-hidden", children: /* @__PURE__ */ jsx(
      motion.span,
      {
        initial: { y: "110%", opacity: 0 },
        whileInView: { y: "0%", opacity: 1 },
        viewport: { once: true, margin: "-10%" },
        transition: {
          duration: 0.9,
          delay: delay + idx * 0.12,
          ease: [0.16, 1, 0.3, 1]
        },
        className: "block",
        children: line
      }
    ) }, idx)) });
  }
  const words = children.split(" ");
  return /* @__PURE__ */ jsx(Component, { className, style, children: words.map((word, idx) => /* @__PURE__ */ jsx("span", { className: "inline-block overflow-hidden mr-[0.28em] align-top", children: /* @__PURE__ */ jsx(
    motion.span,
    {
      initial: { y: "110%", opacity: 0 },
      whileInView: { y: "0%", opacity: 1 },
      viewport: { once: true, margin: "-10%" },
      transition: {
        duration: 0.85,
        delay: delay + idx * 0.04,
        ease: [0.16, 1, 0.3, 1]
      },
      className: "inline-block",
      children: word
    }
  ) }, idx)) });
};
export {
  TextReveal
};
