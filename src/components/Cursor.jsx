import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";
function Cursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest("button") || target.closest("a") || target.closest("input") || target.closest("select") || target.closest("textarea") || target.closest('[role="button"]') || target.closest(".group")) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, visible]);
  if (isTouch || !visible) return null;
  return /* @__PURE__ */ jsxs("div", { className: "pointer-events-none fixed inset-0 z-50 overflow-hidden select-none", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: {
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%"
        },
        animate: {
          scale: hovered ? 1.8 : 1,
          opacity: hovered ? 0.8 : 0.4
        },
        transition: { duration: 0.2 },
        className: "w-8 h-8 rounded-full border border-[#FF4D00] transition-colors"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: {
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%"
        },
        animate: {
          scale: hovered ? 0.6 : 1
        },
        transition: { duration: 0.15 },
        className: "w-1.5 h-1.5 rounded-full bg-[#FF4D00]"
      }
    )
  ] });
}
export {
  Cursor as default
};
