import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Lock } from "lucide-react";
const PasswordGateModal = ({
  onUnlock,
  isUnlocked,
  onLock
}) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      if (password.trim().length > 0) {
        onUnlock();
        setError(false);
      } else {
        setError(true);
      }
    }, 400);
  };
  const handleInstantDemo = () => {
    setPassword("offsite");
    onUnlock();
  };
  if (isUnlocked) {
    return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between py-4 px-6 bg-neutral-900 border border-neutral-800 rounded-lg text-white mb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { className: "w-5 h-5 text-emerald-400" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-mono tracking-wider", children: "OFFSITE PRIVATE ACCESS GRANTED (UNLOCKED)" })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: onLock,
          className: "text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer",
          children: [
            /* @__PURE__ */ jsx(Lock, { className: "w-3.5 h-3.5" }),
            "Lock Access"
          ]
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsx("div", { className: "min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
      className: "w-full max-w-xl mx-auto flex flex-col items-center",
      children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 mb-6 block", children: "RESTRICTED DIRECTORY" }),
        /* @__PURE__ */ jsx(
          "h1",
          {
            className: "font-editorial-serif text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#121212] mb-4 uppercase",
            style: { fontFamily: "'Cinzel', 'Italiana', serif" },
            children: "Password"
          }
        ),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "w-full max-w-md mt-6 space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "password",
                value: password,
                onChange: (e) => {
                  setPassword(e.target.value);
                  if (error) setError(false);
                },
                placeholder: "ENTER PASSWORD",
                autoFocus: true,
                className: "w-full bg-transparent border-b border-black/25 focus:border-black text-center text-sm tracking-[0.25em] font-mono py-3 px-4 focus:outline-none placeholder:text-neutral-300 transition-colors uppercase"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                disabled: submitting,
                className: "absolute right-0 top-1/2 -translate-y-1/2 p-2 text-neutral-600 hover:text-black transition-colors cursor-pointer disabled:opacity-40",
                "aria-label": "Submit Password",
                children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-neutral-500 font-sans tracking-normal", children: "A password is required to access Offsite's Open Roles." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex items-center justify-center gap-4 text-xs font-mono text-neutral-400", children: [
            /* @__PURE__ */ jsxs("span", { children: [
              "Passkey hint: ",
              /* @__PURE__ */ jsx("code", { className: "text-black bg-neutral-200/70 px-1.5 py-0.5 rounded", children: "offsite" })
            ] }),
            /* @__PURE__ */ jsx("span", { children: "\xB7" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: handleInstantDemo,
                className: "underline hover:text-black transition-colors cursor-pointer",
                children: "Unlock Now"
              }
            )
          ] })
        ] })
      ]
    }
  ) });
};
export {
  PasswordGateModal
};
