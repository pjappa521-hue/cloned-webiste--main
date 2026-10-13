import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Send, CheckCircle2 } from "lucide-react";
const INTERESTS = [
  "Training: AI Engineer",
  "Training: Forward Deployed Engineer",
  "Training: Data Analytics",
  "Training: Performance Marketing",
  "Training: Digital Marketing",
  "Training programme (General)",
  "Ad films",
  "Marketing campaign",
  "Branding & identity",
  "Market analysis",
  "Salon marketing",
  "A full package",
  "Something else"
];
const BUDGETS = [
  "Under \u20B910,000",
  "\u20B910,000\u2013\u20B930,000",
  "\u20B930,000\u2013\u20B975,000",
  "\u20B975,000+",
  "Not sure yet"
];
function ContactForm({
  presetInterest = "",
  idPrefix = "enquiry",
  selectedTrack = ""
}) {
  const [form, setForm] = useState({
    name: "",
    business_name: "",
    phone: "",
    email: "",
    interest: selectedTrack || presetInterest || "Training programme (General)",
    budget: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    if (selectedTrack) {
      setForm((prev) => ({ ...prev, interest: selectedTrack }));
    } else if (presetInterest) {
      setForm((prev) => ({ ...prev, interest: presetInterest }));
    }
  }, [selectedTrack, presetInterest]);
  const set = (k) => (e) => {
    setForm({
      ...form,
      [k]: e.target.value
    });
    if (errorMsg) setErrorMsg("");
  };
  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setErrorMsg("Please add your name and phone number.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({
        name: "",
        business_name: "",
        phone: "",
        email: "",
        interest: presetInterest || "Training programme",
        budget: "",
        message: ""
      });
    }, 600);
  };
  const fieldCls = "w-full bg-[#14161C] border border-white/10 text-gray-100 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-accent h-12 rounded-xl px-4 text-sm transition-all";
  const selectCls = "w-full h-12 rounded-xl bg-[#14161C] border border-white/10 px-3 text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all";
  return /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-4", "data-testid": `${idPrefix}-form`, children: [
    submitted && /* @__PURE__ */ jsxs("div", { className: "p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center gap-3 text-emerald-400 text-sm", children: [
      /* @__PURE__ */ jsx(CheckCircle2, { size: 18, className: "shrink-0" }),
      /* @__PURE__ */ jsx("span", { children: "Enquiry received. We reply within 24 hours with a clear next step." })
    ] }),
    errorMsg && /* @__PURE__ */ jsx("div", { className: "p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs", children: errorMsg }),
    /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          required: true,
          placeholder: "Your name *",
          value: form.name,
          onChange: set("name"),
          className: fieldCls,
          "data-testid": `${idPrefix}-name-input`
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          placeholder: "Business name",
          value: form.business_name,
          onChange: set("business_name"),
          className: fieldCls,
          "data-testid": `${idPrefix}-business-input`
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          required: true,
          placeholder: "Phone / WhatsApp *",
          value: form.phone,
          onChange: set("phone"),
          className: fieldCls,
          "data-testid": `${idPrefix}-phone-input`
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          placeholder: "Email",
          value: form.email,
          onChange: set("email"),
          className: fieldCls,
          "data-testid": `${idPrefix}-email-input`
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs(
        "select",
        {
          value: form.interest,
          onChange: set("interest"),
          className: selectCls,
          "data-testid": `${idPrefix}-interest-select`,
          children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Select interest..." }),
            INTERESTS.map((item) => /* @__PURE__ */ jsx("option", { value: item, className: "bg-[#14161C] text-gray-100", children: item }, item))
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "select",
        {
          value: form.budget,
          onChange: set("budget"),
          className: selectCls,
          "data-testid": `${idPrefix}-budget-select`,
          children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Monthly budget range" }),
            BUDGETS.map((b) => /* @__PURE__ */ jsx("option", { value: b, className: "bg-[#14161C] text-gray-100", children: b }, b))
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "textarea",
      {
        rows: 4,
        placeholder: "Tell us where you stand \u2014 what are you selling, and what's not working?",
        value: form.message,
        onChange: set("message"),
        className: "w-full bg-[#14161C] border border-white/10 text-gray-100 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-xl p-4 text-sm resize-none transition-all",
        "data-testid": `${idPrefix}-message-input`
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "submit",
          disabled: loading,
          "data-testid": `${idPrefix}-submit-button`,
          className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-brand-accent text-white font-medium text-sm transition-all duration-300 hover:brightness-110 active:scale-[0.99] disabled:opacity-50 cursor-pointer group",
          children: [
            /* @__PURE__ */ jsx(
              Send,
              {
                size: 16,
                className: "transition-transform duration-300 group-hover:translate-x-0.5"
              }
            ),
            /* @__PURE__ */ jsx("span", { children: loading ? "Sending\u2026" : "Send enquiry" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "No spam. We only use your details to contact you about this enquiry." })
    ] })
  ] });
}
export {
  ContactForm as default
};
