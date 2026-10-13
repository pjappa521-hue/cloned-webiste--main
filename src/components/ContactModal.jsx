import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
const ContactModal = ({ isOpen, onClose }) => {
  const [topic, setTopic] = useState("hire");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };
  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setMessage("");
    onClose();
  };
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto",
      children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-xl bg-[#FAF9F6] text-[#121212] border border-black/10 rounded-2xl p-6 sm:p-10 shadow-2xl my-8", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: onClose,
            className: "absolute top-6 right-6 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors text-black cursor-pointer",
            "aria-label": "Close",
            children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono tracking-widest uppercase text-neutral-400 block mb-1", children: "OFFSITE INQUIRIES" }),
            /* @__PURE__ */ jsx(
              "h2",
              {
                className: "font-editorial-serif text-3xl sm:text-4xl uppercase tracking-tight text-black",
                style: { fontFamily: "'Cinzel', serif" },
                children: "Get in Touch"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 font-sans mt-1", children: "We are intentional with every partnership. Tell us what you are building." })
          ] }),
          submitted ? /* @__PURE__ */ jsxs("div", { className: "py-8 text-center space-y-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6 text-emerald-400" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-editorial-serif text-2xl uppercase text-black", children: "Message Received" }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-neutral-600 max-w-sm mx-auto font-sans leading-relaxed", children: [
              "Thank you, ",
              name || "friend",
              ". A member of our executive team will review your note and respond promptly."
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleReset,
                className: "py-2 px-6 bg-black text-white text-xs font-mono tracking-wider uppercase rounded-md hover:bg-neutral-800 transition-colors cursor-pointer",
                children: "Done"
              }
            )
          ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx("label", { className: "text-[11px] font-mono uppercase tracking-wider text-neutral-500 block", children: "Area of Collaboration" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs font-mono", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setTopic("hire"),
                    className: `p-2.5 rounded border text-left transition-colors cursor-pointer ${topic === "hire" ? "bg-black text-white border-black font-semibold" : "bg-white text-neutral-700 border-black/10 hover:border-black/30"}`,
                    children: "Company Hiring"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setTopic("talent"),
                    className: `p-2.5 rounded border text-left transition-colors cursor-pointer ${topic === "talent" ? "bg-black text-white border-black font-semibold" : "bg-white text-neutral-700 border-black/10 hover:border-black/30"}`,
                    children: "Talent Network"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setTopic("advisory"),
                    className: `p-2.5 rounded border text-left transition-colors cursor-pointer ${topic === "advisory" ? "bg-black text-white border-black font-semibold" : "bg-white text-neutral-700 border-black/10 hover:border-black/30"}`,
                    children: "Advisory & Practice"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setTopic("community"),
                    className: `p-2.5 rounded border text-left transition-colors cursor-pointer ${topic === "community" ? "bg-black text-white border-black font-semibold" : "bg-white text-neutral-700 border-black/10 hover:border-black/30"}`,
                    children: "Salons & Community"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  required: true,
                  placeholder: "Your Name",
                  value: name,
                  onChange: (e) => setName(e.target.value),
                  className: "w-full bg-white border border-black/15 rounded-md px-3 py-2 text-xs font-sans focus:outline-none focus:border-black"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  required: true,
                  placeholder: "Email Address",
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  className: "w-full bg-white border border-black/15 rounded-md px-3 py-2 text-xs font-sans focus:outline-none focus:border-black"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                rows: 3,
                required: true,
                placeholder: "Details about your timeline, team, or inquiry...",
                value: message,
                onChange: (e) => setMessage(e.target.value),
                className: "w-full bg-white border border-black/15 rounded-md px-3 py-2 text-xs font-sans focus:outline-none focus:border-black resize-none"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs(
              "button",
              {
                type: "submit",
                className: "w-full py-2.5 px-4 bg-black text-white hover:bg-neutral-800 text-xs font-mono tracking-wider uppercase rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsx("span", { children: "Send Direct Transmission" }),
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                ]
              }
            ) })
          ] })
        ] })
      ] })
    },
    "contact-modal"
  ) });
};
export {
  ContactModal
};
