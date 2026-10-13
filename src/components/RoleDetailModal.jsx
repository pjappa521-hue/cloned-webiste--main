import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
const RoleDetailModal = ({ role, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [notes, setNotes] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
    }, 2e3);
  };
  return /* @__PURE__ */ jsx(AnimatePresence, { children: role && /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto",
      children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-2xl bg-[#FAF9F6] text-[#121212] border border-black/10 rounded-2xl p-6 sm:p-10 shadow-2xl my-8", children: [
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
            /* @__PURE__ */ jsxs("span", { className: "text-[10px] font-mono tracking-widest uppercase text-neutral-400 block mb-1", children: [
              role.department,
              " \xB7 ",
              role.companyType
            ] }),
            /* @__PURE__ */ jsx(
              "h2",
              {
                className: "font-editorial-serif text-3xl sm:text-4xl uppercase tracking-tight text-black",
                style: { fontFamily: "'Cinzel', serif" },
                children: role.title
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-neutral-600 mt-2", children: [
              /* @__PURE__ */ jsx("span", { children: role.location }),
              /* @__PURE__ */ jsx("span", { children: "\xB7" }),
              /* @__PURE__ */ jsx("span", { children: role.type }),
              /* @__PURE__ */ jsx("span", { children: "\xB7" }),
              /* @__PURE__ */ jsx("span", { className: "text-black font-semibold", children: role.compensation })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-t border-b border-black/10 py-4 space-y-4 font-sans text-sm text-neutral-700 leading-relaxed", children: [
            /* @__PURE__ */ jsx("p", { children: role.description }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-xs font-mono uppercase tracking-wider text-black mb-2", children: "Key Indicators & Requirements" }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-1.5 list-disc list-inside text-xs text-neutral-600", children: role.requirements.map((req, i) => /* @__PURE__ */ jsx("li", { children: req }, i)) })
            ] })
          ] }),
          submitted ? /* @__PURE__ */ jsxs("div", { className: "p-6 bg-neutral-900 text-white rounded-lg flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-emerald-400 shrink-0" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-xs font-semibold tracking-wider uppercase font-mono", children: "Application Received" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-400 mt-0.5", children: "Our partners will review your profile and reach out within 48 hours." })
            ] })
          ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-xs font-mono uppercase tracking-wider text-black", children: "Express Confidential Interest" }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  required: true,
                  placeholder: "Your Email",
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  className: "w-full bg-white border border-black/15 rounded-md px-3 py-2 text-xs font-sans focus:outline-none focus:border-black"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "url",
                  placeholder: "Portfolio / Read.cv URL",
                  value: portfolio,
                  onChange: (e) => setPortfolio(e.target.value),
                  className: "w-full bg-white border border-black/15 rounded-md px-3 py-2 text-xs font-sans focus:outline-none focus:border-black"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                rows: 2,
                placeholder: "Short note or specific aspirations...",
                value: notes,
                onChange: (e) => setNotes(e.target.value),
                className: "w-full bg-white border border-black/15 rounded-md px-3 py-2 text-xs font-sans focus:outline-none focus:border-black resize-none"
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "submit",
                className: "w-full py-2.5 px-4 bg-black text-white hover:bg-neutral-800 text-xs font-mono tracking-wider uppercase rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsx("span", { children: "Submit Confidential Candidacy" }),
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                ]
              }
            )
          ] })
        ] })
      ] })
    },
    "role-detail-modal"
  ) });
};
export {
  RoleDetailModal
};
