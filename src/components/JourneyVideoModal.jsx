import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Play, Pause, Volume2, VolumeX } from "lucide-react";
const JourneyVideoModal = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(25);
  const [activeChapter, setActiveChapter] = useState(1);
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 0.5;
      });
    }, 200);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);
  useEffect(() => {
    if (progress < 25) setActiveChapter(1);
    else if (progress < 50) setActiveChapter(2);
    else if (progress < 75) setActiveChapter(3);
    else setActiveChapter(4);
  }, [progress]);
  const chapters = [
    { id: 1, title: "Introduction", time: "00:00" },
    { id: 2, title: "The Room & The People", time: "00:35" },
    { id: 3, title: "Redefining Greatness", time: "01:05" },
    { id: 4, title: "Building the Future", time: "01:30" }
  ];
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-8",
      children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-5xl bg-[#0C0C0C] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-white/10 text-white", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono tracking-widest uppercase text-neutral-400", children: "OFFSITE CINEMATIC REEL" }),
            /* @__PURE__ */ jsx("span", { className: "text-neutral-600", children: "\xB7" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-300 font-medium", children: "Gathering The Few Who Move The Many" })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: onClose,
              className: "w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white cursor-pointer",
              "aria-label": "Close video",
              children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative aspect-video w-full bg-neutral-950 flex items-center justify-center overflow-hidden group", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/src/assets/images/abstract_sculptural_ribbons_1791474293615.jpg",
              alt: "Offsite Journey Film",
              className: `w-full h-full object-cover transition-transform duration-1000 ${isPlaying ? "scale-105 filter contrast-125" : "scale-100"}`
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-16 left-8 right-8 text-center pointer-events-none", children: /* @__PURE__ */ jsxs(
            motion.p,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              className: "text-lg sm:text-2xl font-editorial-serif text-white/95 max-w-2xl mx-auto italic drop-shadow-md",
              style: { fontFamily: "'Cormorant Garamond', serif" },
              children: [
                activeChapter === 1 && "\u201CCreativity doesn\u2019t happen in isolation. It thrives when brave minds collide.\u201D",
                activeChapter === 2 && "\u201CWe built Offsite to curate the room where the most ambitious talent belongs.\u201D",
                activeChapter === 3 && "\u201CNot just placing roles, but redefining what exceptional design leadership means.\u201D",
                activeChapter === 4 && "\u201CThis is the room. These are the people. We are Offsite.\u201D"
              ]
            },
            activeChapter
          ) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsPlaying(!isPlaying),
              className: "absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer",
              children: /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 hover:scale-105 transition-transform", children: isPlaying ? /* @__PURE__ */ jsx(Pause, { className: "w-6 h-6" }) : /* @__PURE__ */ jsx(Play, { className: "w-6 h-6 ml-1 fill-white" }) })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 sm:p-6 bg-[#0E0E0E] text-white flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-[11px] font-mono text-neutral-400", children: [
              Math.floor(progress * 1.62 / 60),
              ":",
              String(Math.floor(progress * 1.62 % 60)).padStart(2, "0")
            ] }),
            /* @__PURE__ */ jsx(
              "div",
              {
                onClick: (e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  setProgress(clickX / rect.width * 100);
                },
                className: "flex-1 h-1.5 bg-neutral-800 rounded-full cursor-pointer relative overflow-hidden group",
                children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    style: { width: `${progress}%` },
                    className: "h-full bg-white transition-all rounded-full"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-[11px] font-mono text-neutral-500", children: "01:42" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setIsPlaying(!isPlaying),
                  className: "p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer text-white",
                  children: isPlaying ? /* @__PURE__ */ jsx(Pause, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(Play, { className: "w-4 h-4 fill-white" })
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setIsMuted(!isMuted),
                  className: "p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer text-white",
                  children: isMuted ? /* @__PURE__ */ jsx(VolumeX, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(Volume2, { className: "w-4 h-4" })
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 overflow-x-auto", children: chapters.map((ch) => /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => {
                  setActiveChapter(ch.id);
                  setProgress((ch.id - 1) * 26 + 2);
                },
                className: `text-[11px] px-3 py-1 rounded-md transition-all cursor-pointer whitespace-nowrap ${activeChapter === ch.id ? "bg-white text-black font-medium" : "text-neutral-400 hover:text-white hover:bg-white/5"}`,
                children: [
                  ch.id,
                  ". ",
                  ch.title
                ]
              },
              ch.id
            )) })
          ] })
        ] })
      ] })
    },
    "journey-modal"
  ) });
};
export {
  JourneyVideoModal
};
