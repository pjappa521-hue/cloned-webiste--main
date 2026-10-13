import { jsx } from "react/jsx-runtime";
import { motion } from "motion/react";
const EASE = [0.16, 1, 0.3, 1];
const FadeUp = ({
  children,
  delay = 0,
  className = "",
  y = 36
}) => /* @__PURE__ */ jsx(
  motion.div,
  {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.85, delay, ease: EASE },
    className,
    children
  }
);
const MaskLine = ({
  children,
  delay = 0,
  className = ""
}) => /* @__PURE__ */ jsx("span", { className: `block overflow-hidden ${className}`, children: /* @__PURE__ */ jsx(
  motion.span,
  {
    className: "block",
    initial: { y: "112%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.95, delay, ease: EASE },
    children
  }
) });
const Eyebrow = ({ children }) => /* @__PURE__ */ jsx(
  motion.p,
  {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: EASE },
    className: "font-mono2 text-xs uppercase tracking-[0.25em] text-brand-accent mb-4",
    children
  }
);
const StaggerContainer = ({
  children,
  stagger = 0.08,
  className = ""
}) => /* @__PURE__ */ jsx(
  motion.div,
  {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-60px" },
    variants: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: stagger
        }
      }
    },
    className,
    children
  }
);
export {
  EASE,
  Eyebrow,
  FadeUp,
  MaskLine,
  StaggerContainer
};
