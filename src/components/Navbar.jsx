import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "./Logo";
const NAV_LINKS = [
  { label: "Work", to: "/work", testid: "nav-work-link" },
  { label: "Reviews", to: "/reviews", testid: "nav-reviews-link" }
];
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  const goContact = () => {
    setOpen(false);
    const applyElem = document.getElementById("training-apply");
    const contactElem = document.getElementById("contact");
    if (location.pathname === "/training" && applyElem) {
      applyElem.scrollIntoView({ behavior: "smooth" });
    } else if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
      setTimeout(() => {
        const elem = document.getElementById("contact");
        if (elem) elem.scrollIntoView({ behavior: "smooth" });
      }, 250);
    }
  };
  return /* @__PURE__ */ jsxs(
    "header",
    {
      "data-testid": "site-navbar",
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-md bg-[#0D0E11]/80 border-b border-white/[0.08]" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxs("nav", { className: "max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/",
              "data-testid": "nav-home-link",
              "aria-label": "The Internet Ads home",
              className: "focus:outline-none",
              children: /* @__PURE__ */ jsx(Logo, {})
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-8", children: [
            NAV_LINKS.map((l) => {
              const isActive = location.pathname === l.to;
              return /* @__PURE__ */ jsx(
                Link,
                {
                  to: l.to,
                  "data-testid": l.testid,
                  className: `text-sm font-medium tracking-wide transition-colors duration-300 hover:text-brand-accent ${isActive ? "text-brand-accent" : "text-gray-300"}`,
                  children: l.label
                },
                l.to
              );
            }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: goContact,
                "data-testid": "nav-contact-button",
                className: "group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-accent text-white text-sm font-medium transition-all duration-300 hover:brightness-110 active:scale-95 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsx("span", { children: "Start a project" }),
                  /* @__PURE__ */ jsx(
                    ArrowUpRight,
                    {
                      size: 16,
                      className: "transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setOpen(!open),
              "data-testid": "mobile-menu-button",
              "aria-label": "Toggle navigation menu",
              className: "md:hidden p-2 text-gray-300 hover:text-white transition-colors cursor-pointer",
              children: open ? /* @__PURE__ */ jsx(X, { size: 22 }) : /* @__PURE__ */ jsx(Menu, { size: 22 })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "md:hidden border-b border-white/10 bg-[#0D0E11]/95 backdrop-blur-md px-6 py-6 space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
          NAV_LINKS.map((l) => {
            const isActive = location.pathname === l.to;
            return /* @__PURE__ */ jsx(
              Link,
              {
                to: l.to,
                "data-testid": `mobile-${l.testid}`,
                onClick: () => setOpen(false),
                className: `text-base font-medium py-1 transition-colors ${isActive ? "text-brand-accent" : "text-gray-200"}`,
                children: l.label
              },
              l.to
            );
          }),
          /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: goContact,
              "data-testid": "mobile-nav-contact-button",
              className: "w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-brand-accent text-white text-sm font-medium transition-all cursor-pointer",
              children: [
                /* @__PURE__ */ jsx("span", { children: "Start a project" }),
                /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })
              ]
            }
          ) })
        ] }) })
      ]
    }
  );
}
export {
  Navbar as default
};
