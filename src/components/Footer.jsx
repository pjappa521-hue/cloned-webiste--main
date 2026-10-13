import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import Logo from "./Logo";
import { CONTACT } from "../data/content";
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "border-t border-white/[0.08] bg-[#0B0C0F]", "data-testid": "site-footer", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsx(Logo, {}),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm text-gray-400 leading-relaxed max-w-sm", children: "Market analysis, ad films, internet ads and branding for small business owners \u2014 built to make the budget you have work harder, not need a bigger one." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 font-mono2 text-xs uppercase tracking-[0.2em] text-brand-accent", children: "Precision over spend" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-mono2 text-xs uppercase tracking-[0.2em] text-gray-500 mb-5", children: "Explore" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/work",
              "data-testid": "footer-work-link",
              className: "text-gray-300 hover:text-brand-accent transition-colors",
              children: "Work & case studies"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/reviews",
              "data-testid": "footer-reviews-link",
              className: "text-gray-300 hover:text-brand-accent transition-colors",
              children: "Reviews"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/training",
              "data-testid": "footer-training-link",
              className: "text-gray-300 hover:text-brand-accent transition-colors",
              children: "Training academy"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-mono2 text-xs uppercase tracking-[0.2em] text-gray-500 mb-5", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm text-gray-300", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsx(Mail, { size: 15, className: "text-brand-accent shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: CONTACT.email })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsx(Phone, { size: 15, className: "text-brand-accent shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: CONTACT.phone })
          ] }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: CONTACT.whatsapp,
              target: "_blank",
              rel: "noopener noreferrer",
              "data-testid": "footer-whatsapp-link",
              className: "flex items-center gap-2.5 hover:text-brand-accent transition-colors",
              children: [
                /* @__PURE__ */ jsx(MessageCircle, { size: 15, className: "text-brand-accent shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "Chat on WhatsApp" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 15, className: "text-brand-accent shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: CONTACT.address })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsx(Clock, { size: 15, className: "text-brand-accent shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: CONTACT.hours })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-white/[0.06] py-6 flex items-center justify-center max-w-7xl mx-auto px-5 sm:px-8", children: /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 font-mono2 tracking-widest uppercase text-center", children: "\xA9 2026 THE INTERNET ADS \xB7 BIG RESULTS NEED THE RIGHT TARGET" }) })
  ] });
}
export {
  Footer as default
};
