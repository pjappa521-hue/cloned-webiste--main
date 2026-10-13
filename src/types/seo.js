const INITIAL_SEO_PAGES = {
  "/": {
    path: "/",
    pageName: "Homepage",
    title: "The Internet Ads | Market Analysis, Ad Films & Branding",
    description: "The Internet Ads \u2014 market analysis, ad films, internet ads and branding for small businesses. Big results don't need a bigger budget. They need the right target.",
    canonical: "https://theinternetads.com/",
    ogTitle: "The Internet Ads | Market Analysis, Ad Films & Branding",
    ogDescription: "The Internet Ads \u2014 market analysis, ad films, internet ads and branding for small businesses. Big results don't need a bigger budget. They need the right target.",
    ogImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80",
    ogType: "website",
    twitterCard: "summary_large_image",
    robotsDirective: "index, follow",
    changefreq: "weekly",
    priority: "1.0",
    inSitemap: true,
    structuredDataJson: JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "The Internet Ads",
        url: "https://theinternetads.com",
        description: "Market analysis, ad films, internet ads and branding for small businesses.",
        email: "hello@theinternetads.com"
      },
      null,
      2
    )
  },
  "/training": {
    path: "/training",
    pageName: "Training Academy",
    title: "Training Academy | The Internet Ads \u2014 100% Placement Commitment",
    description: "Learn high-demand career tracks at The Internet Ads Academy: AI Engineer, Data Analytics, Forward Deployed Engineer & Performance Marketing with 100% placement commitment.",
    canonical: "https://theinternetads.com/training",
    ogTitle: "Training Academy | The Internet Ads \u2014 100% Placement Commitment",
    ogDescription: "Learn high-demand career tracks at The Internet Ads Academy: AI Engineer, Data Analytics, Forward Deployed Engineer & Performance Marketing with 100% placement commitment.",
    ogImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&h=630&q=80",
    ogType: "website",
    twitterCard: "summary_large_image",
    robotsDirective: "index, follow",
    changefreq: "daily",
    priority: "0.9",
    inSitemap: true,
    structuredDataJson: JSON.stringify(
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "EducationalOccupationalProgram",
            name: "The Internet Ads Career Training Academy",
            description: "Live instructor-led training on real client briefs across AI Engineering, Forward Deployed Engineering, Data Analytics, and Performance Marketing with 100% placement commitment.",
            provider: {
              "@type": "Organization",
              name: "The Internet Ads",
              url: "https://theinternetads.com"
            },
            educationalCredentialAwarded: "Industry Certification & Placement Guarantee",
            occupationalCategory: "Technology & Performance Marketing",
            timeToComplete: "P3M",
            url: "https://theinternetads.com/training"
          },
          {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do I need prior experience?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No for most tracks. AI Engineer and Forward Deployed Engineer expect basic programming familiarity, confirmed on your call."
                }
              },
              {
                "@type": "Question",
                name: "How does the placement commitment work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our placement team works your interviews until you're placed or your 90-day window closes. Full terms and eligibility are explained during counselling before you enrol."
                }
              },
              {
                "@type": "Question",
                name: "Can I study while working full-time?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Evening and weekend batches are available for most tracks."
                }
              },
              {
                "@type": "Question",
                name: "What if I am not placed by day 90?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If you attended sessions, completed projects and engaged with every interview, and still aren\u2019t placed, we refund your programme fee in full."
                }
              }
            ]
          }
        ]
      },
      null,
      2
    )
  },
  "/work": {
    path: "/work",
    pageName: "Work & Case Studies",
    title: "Work & Case Studies | The Internet Ads",
    description: "Explore verified client case studies, commercial ad films, salon growth campaigns, and performance marketing by The Internet Ads.",
    canonical: "https://theinternetads.com/work",
    ogTitle: "Work & Case Studies | The Internet Ads",
    ogDescription: "Explore verified client case studies, commercial ad films, salon growth campaigns, and performance marketing by The Internet Ads.",
    ogImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80",
    ogType: "website",
    twitterCard: "summary_large_image",
    robotsDirective: "index, follow",
    changefreq: "weekly",
    priority: "0.8",
    inSitemap: true,
    structuredDataJson: JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "The Internet Ads Case Studies & Portfolio",
        url: "https://theinternetads.com/work"
      },
      null,
      2
    )
  },
  "/reviews": {
    path: "/reviews",
    pageName: "Client Reviews & Testimonials",
    title: "Client Reviews & Testimonials | The Internet Ads",
    description: "Verified reviews and measurable ROI metrics from business owners, directors, and partners working with The Internet Ads.",
    canonical: "https://theinternetads.com/reviews",
    ogTitle: "Client Reviews & Testimonials | The Internet Ads",
    ogDescription: "Verified reviews and measurable ROI metrics from business owners, directors, and partners working with The Internet Ads.",
    ogImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&h=630&q=80",
    ogType: "website",
    twitterCard: "summary_large_image",
    robotsDirective: "index, follow",
    changefreq: "weekly",
    priority: "0.8",
    inSitemap: true,
    structuredDataJson: JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "The Internet Ads Client Reviews",
        url: "https://theinternetads.com/reviews"
      },
      null,
      2
    )
  },
  "/404": {
    path: "/404",
    pageName: "Not Found",
    title: "Page Not Found | The Internet Ads",
    description: "The requested page could not be found.",
    canonical: "https://theinternetads.com/404",
    ogTitle: "Page Not Found | The Internet Ads",
    ogDescription: "The requested page could not be found.",
    ogType: "website",
    twitterCard: "summary",
    robotsDirective: "noindex, follow",
    inSitemap: false
  }
};
const INITIAL_GLOBAL_SEO = {
  siteName: "The Internet Ads",
  defaultOgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80",
  siteUrl: "https://theinternetads.com",
  googleSearchConsoleVerification: "",
  robotsTxtCustom: `User-agent: *
Allow: /

Sitemap: https://theinternetads.com/sitemap.xml`
};
const INITIAL_HISTORY = [
  {
    id: "init-1",
    timestamp: "2026-10-12 10:00:00 UTC",
    action: "Baseline SEO Configuration Initialized",
    details: "Configured /training, /work, /reviews, and Homepage with canonical URLs, OpenGraph tags, and Schema.org JSON-LD.",
    user: "System Setup"
  }
];
export {
  INITIAL_GLOBAL_SEO,
  INITIAL_HISTORY,
  INITIAL_SEO_PAGES
};
