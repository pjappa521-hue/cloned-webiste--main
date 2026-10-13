import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import ScrollIndicator from "./components/ScrollIndicator";
import SeoMeta from "./components/SeoMeta";
import Training from "./pages/Training";
import Work from "./pages/Work";
import Reviews from "./pages/Reviews";
import Home from "./pages/Home";
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}
function MainLayout() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#0D0E11] text-white flex flex-col justify-between selection:bg-[#FF4D00] selection:text-white relative", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("div", { className: "flex-grow", children: /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Home, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/training", element: /* @__PURE__ */ jsx(Training, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/work", element: /* @__PURE__ */ jsx(Work, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/reviews", element: /* @__PURE__ */ jsx(Reviews, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/home", element: /* @__PURE__ */ jsx(Home, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(Home, {}) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function App() {
  return /* @__PURE__ */ jsxs(BrowserRouter, { children: [
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsx(SeoMeta, {}),
    /* @__PURE__ */ jsx(Cursor, {}),
    /* @__PURE__ */ jsx(ScrollIndicator, {}),
    /* @__PURE__ */ jsx(MainLayout, {})
  ] });
}
export {
  App as default
};
