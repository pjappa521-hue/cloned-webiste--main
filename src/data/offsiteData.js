const OFFSITE_THESIS = `AT OFFSITE, WE ARE INVESTING IN THE FUTURE OF DESIGN & CREATIVE TALENT BY PUTTING COMMUNITY FIRST. WE BELIEVE THAT HUMANS DO THEIR BEST WORK WHEN THEY ARE SURROUNDED BY A CAST OF OTHERS WHO CHAMPION CREATIVITY AND ENCOURAGE A CONSISTENT REDEFINITION OF GREATNESS. OUR FOCUS IS SHARP AND CENTERED AT THE MEETING POINT OF COMMUNITY, CAREER, & CREATIVE PRACTICE. THIS IS THE ROOM. THESE ARE THE PEOPLE. WE ARE OFFSITE.`;
const TEAM_MEMBERS = [
  {
    id: "garrett-fowler",
    name: "Garrett Fowler",
    role: "Founder & Creative Director",
    image: "/src/assets/images/avatar_garrett_fowler_1791474239764.jpg",
    location: "New York / Global",
    bio: "Garrett founded Offsite to build an intentional sanctuary for the world\u2019s most ambitious design leaders and creative practitioners. With over a decade of executive creative direction and advisory experience across hyper-growth venture-backed startups and iconic studios, he leads agency vision and executive placements.",
    specialty: ["Executive Search", "Creative Direction", "Organizational Design", "Studio Practice"]
  },
  {
    id: "liz-luce",
    name: "Liz Luce",
    role: "Talent Director, Brand/Creative",
    image: "/src/assets/images/avatar_liz_luce_1791474251680.jpg",
    location: "San Francisco / New York",
    bio: "Liz oversees Brand and Creative talent representation at Offsite. Her background spans contemporary art curation and brand identity strategy, connecting visionary art directors, brand designers, and narrative strategists with companies shaping cultural conversations.",
    specialty: ["Brand Identity", "Art Direction", "Creative Strategy", "Content & Campaign"]
  },
  {
    id: "monica-jin",
    name: "Monica Jin",
    role: "Talent Director, Product Design",
    image: "/src/assets/images/avatar_monica_jin_1791474265121.jpg",
    location: "London / Tokyo / Remote",
    bio: "Monica leads Product Design recruitment across Europe and Asia-Pacific. A former staff interaction designer, she deeply understands the subtleties of craft, complex systems design, design systems, and product intuition needed for breakthrough products.",
    specialty: ["Systems Design", "Interaction Architecture", "Mobile/Web UI", "Design Leadership"]
  },
  {
    id: "tyler-disalerio",
    name: "Tyler DiSalerio",
    role: "Talent Director, Product Design",
    image: "/src/assets/images/avatar_tyler_disalerio_1791474281504.jpg",
    location: "Los Angeles / Austin",
    bio: "Tyler partners with early-stage founder-led startups to build their inaugural design teams and help scaled tech companies recruit principal individual contributors. He brings empathy, rigor, and an unwavering commitment to designer advocacy.",
    specialty: ["Founding Designers", "Design Engineering", "Product Strategy", "Hiring Ops"]
  }
];
const SERVICE_PILLARS = [
  {
    number: "01",
    title: "RECRUITMENT",
    summary: "Building world-class design and creative teams is simply what we do. From full-time and freelance practitioner placements to executive search, we are a full-service talent agency with clients ranging from early-stage startups to established industry powerhouses.",
    details: [
      "Executive Creative Leadership & VP Design Placements",
      "Founding Product Designers & Staff/Principal ICs",
      "High-Impact Freelance & Interim Design Sprints",
      "Confidential Retained Search"
    ]
  },
  {
    number: "02",
    title: "ADVISORY AND CONSULTING SERVICES",
    summary: "Our practice is rooted deeply in the art of listening. We consult with companies and teams to help develop more intentional ways of working, including best practices around hiring, showcasing work, organizational design, culture, mentoring, and more.",
    details: [
      "Design Team Organizational & Compensation Benchmarking",
      "Portfolio & Candidate Evaluation Frameworks",
      "Design Culture Architecture & Retention Strategy",
      "Executive Mentorship & Creative Sparring"
    ]
  },
  {
    number: "03",
    title: "TALENT BRAND AND COMMUNITY",
    summary: "We help design and creative teams stand out in today's hypersaturated market. Through a diverse selection of talent brand services, event planning, content offerings, and sponsorship opportunities, we are a catalyst for companies unlocking exceptional outcomes.",
    details: [
      "Bespoke Creative Salons, Dinners & Offsites",
      "Engineering & Design Brand Storytelling",
      "Private Community Access & Curated Matchmaking",
      "Talent Sponsorship & Residency Programs"
    ]
  }
];
const CLIENT_LOGOS = [
  { name: "Perplexity", category: "AI & Search" },
  { name: "Engine", category: "Creative Tech" },
  { name: "Stripe", category: "Financial Infrastructure" },
  { name: "Harvey", category: "Legal AI" },
  { name: "Duolingo", category: "Education" },
  { name: "Phantom", category: "Crypto / Web3" },
  { name: "Clay", category: "Productivity" },
  { name: "Hex", category: "Data Science" },
  { name: "Whatnot", category: "Live Commerce" },
  { name: "AngelList", category: "Venture Capital" },
  { name: "Rippling", category: "Workforce Management" },
  { name: "Benchling", category: "Biotechnology" },
  { name: "Airtable", category: "Low-Code Databases" },
  { name: "Chime", category: "Fintech" },
  { name: "Faire", category: "Wholesale Marketplace" },
  { name: "OpenSea", category: "Digital Collectibles" },
  { name: "Grammarly", category: "AI Communication" },
  { name: "Lyft", category: "Mobility" },
  { name: "Ramp", category: "Corporate Finance" },
  { name: "Dopt", category: "User Onboarding" },
  { name: "Vanta", category: "Trust & Security" },
  { name: "Robinhood", category: "Consumer Finance" },
  { name: "Roblox", category: "Virtual Worlds" },
  { name: "Runway", category: "Creative Generative AI" }
];
const OPEN_ROLES = [
  {
    id: "role-1",
    title: "Head of Design",
    department: "Executive Leadership",
    companyType: "Series B Generative Creative Suite",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    compensation: "$280k \u2013 $350k + 0.75% Equity",
    description: "Looking for a seasoned design executive to define the next era of generative creative interfaces. You will lead a multidisciplinary team of product designers, brand architects, and design engineers.",
    requirements: [
      "10+ years of end-to-end design experience, with 4+ years leading high-craft teams",
      "Proven record shipping consumer or prosumer tools with international acclaim",
      "Deep appreciation for typography, micro-interactions, and spatial ergonomics"
    ]
  },
  {
    id: "role-2",
    title: "Staff Product Designer",
    department: "Product Design",
    companyType: "Next-Gen Financial Infrastructure",
    location: "New York, NY / Remote",
    type: "Full-time",
    compensation: "$210k \u2013 $260k + Meaningful Equity",
    description: "Lead complex zero-to-one product initiatives spanning real-time international ledger mechanics and institutional developer tooling.",
    requirements: [
      "Expertise in simplifying deeply technical systems into intuitive interfaces",
      "Mastery of Figma systems, prototyping tools, and front-end reality",
      "Strong written communication and product strategy intuition"
    ]
  },
  {
    id: "role-3",
    title: "Principal Design Technologist",
    department: "Design Engineering",
    companyType: "AI Research & Frontier Computing Lab",
    location: "San Francisco, CA or London, UK",
    type: "Full-time",
    compensation: "$240k \u2013 $310k + Equity",
    description: "Bridge the gulf between frontier model capabilities and human-scale interfaces. Build novel spatial, multimodal, and interactive proof-of-concepts.",
    requirements: [
      "Fluency in React, WebGL / Three.js, shaders, and modern front-end architectures",
      "Obsessive attention to 60fps interaction polish and kinetic physics",
      "Portfolio demonstrating interactive experiments and creative coding"
    ]
  },
  {
    id: "role-4",
    title: "Brand Creative Director",
    department: "Brand/Creative",
    companyType: "Autonomous Robotics & Spatial AI Studio",
    location: "New York, NY (In-studio)",
    type: "Full-time",
    compensation: "$230k \u2013 $290k + Equity",
    description: "Architect the visual voice, launch films, spatial installations, and global packaging for an unprecedented line of physical computing products.",
    requirements: [
      "Demonstrated art direction mastery across film, typography, print, and digital surfaces",
      "Experience directing 3D artists, sound designers, and copywriters",
      "A refined editorial sensibility that rejects corporate homogenization"
    ]
  },
  {
    id: "role-5",
    title: "Founding Product Designer",
    department: "Product Design",
    companyType: "Seed-Stage Spatial Canvas Platform",
    location: "Remote (US/EU Timezones)",
    type: "Full-time",
    compensation: "$170k \u2013 $220k + 1.5% Equity",
    description: "Partner directly with two second-time founders to build an infinite canvas designed for researchers and high-output synthesis.",
    requirements: [
      "Demonstrated ability to own end-to-end design from first principles",
      "High tolerance for ambiguity and rapid prototype loops",
      "Strong visual craft and micro-copy writing skills"
    ]
  }
];
const FOUNDER_LETTER = {
  kicker: "A WORD FROM OFFSITE",
  headline: "DESIGN HAS REACHED A CROSSROADS. IN A TIME OF IMMENSE CHANGE, I OFTEN WONDER HOW WE WILL REMAIN ADAPTABLE AND EMPOWERED, WHILE ALSO SUMMONING THE CREATIVE SPIRIT TO BRING FORTH MEANINGFUL, FULFILLING WORK. I THINK A LOT ABOUT...",
  author: "Garrett Fowler",
  authorTitle: "Founder & Creative Director, Offsite",
  fullLetter: [
    `Design has reached a crossroads. In a time of immense change, I often wonder how we will remain adaptable and empowered, while also summoning the creative spirit to bring forth meaningful, fulfilling work.`,
    `For the past decade, our industry has prioritized speed, standardized UI libraries, and metrics-driven sameness. In doing so, we traded away the room where true breakthroughs happen: the quiet space of genuine human connection, shared values, and uncompromising devotion to craft.`,
    `Offsite was born from a simple realization: the individuals who move the needle forward are rarely looking for "another job." They are seeking an ecosystem of peers who demand more from themselves, who respect the friction of creative labor, and who celebrate each other's elevation.`,
    `We believe talent representation should not be transactional brokering. It should be a long-term artistic and career partnership rooted in deep listening, mutual respect, and intentional matchmaking.`,
    `This is the room. These are the people. We are Offsite.`
  ]
};
export {
  CLIENT_LOGOS,
  FOUNDER_LETTER,
  OFFSITE_THESIS,
  OPEN_ROLES,
  SERVICE_PILLARS,
  TEAM_MEMBERS
};
