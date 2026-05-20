/** @format */

import {
  DoorOpen,
  Warehouse,
  Hammer,
  Home,
  Wrench,
  Cpu,
  Shield,
  Brush,
  Zap,
  Leaf,
  Phone,
  Fence,
  Clock,
  Star,
  Users,
  ThumbsUp,
} from "lucide-react";

export const SITE = {
  name: "Summit Home Services",
  tagline: "Expert Care for Every Part of Your Home",
  phone: "(512) 555-0123",
  phoneRaw: "+15125550123",
  whatsapp: "15125550123",
  email: "hello@summithomeservices.com",
  address: "1200 South Lamar Blvd, Austin, TX 78704",
  hours: "Mon–Sat 7am–8pm · 24/7 Emergency",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    google: "https://google.com",
  },
};

export type ServiceCategory = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: typeof DoorOpen;
  image: string;
  bullets: string[];
  /** Unique stats shown on the service detail page */
  stats: [string, string][];
  /** Unique "why us" body copy for this service */
  whyUs: string;
  /** Unique process steps for this service */
  process: [string, string, string][];
};

import garage from "@/assets/service-garage.jpg";
import gates from "@/assets/service-gates.jpg";
import doors from "@/assets/service-doors.jpg";
import handyman from "@/assets/service-handyman.jpg";
import roofing from "@/assets/service-roofing.jpg";
import smart from "@/assets/service-smart.jpg";

export const SERVICES: ServiceCategory[] = [
  {
    slug: "garage-doors",
    title: "Garage Doors",
    short: "Repair, install & smart openers",
    description:
      "Springs, panels, openers, and full custom installations — backed by a 10-year workmanship warranty.",
    icon: Warehouse,
    image: garage,
    bullets: [
      "Spring & cable replacement",
      "Belt, chain & smart openers",
      "Carriage & modern panel designs",
      "Same-day emergency repair",
      "Weatherstripping & insulation",
      "Annual safety tune-up",
    ],
    stats: [
      ["2 hrs", "Avg. repair time"],
      ["5,000+", "Doors serviced"],
      ["Same-day", "Emergency dispatch"],
      ["10-year", "Workmanship warranty"],
    ],
    whyUs:
      "Garage doors are our roots. We've been repairing and installing them since 2008 — longer than any other service we offer. Our techs carry over 200 common parts on every truck, which means most repairs are done in a single visit without a parts-order delay. We stock LiftMaster, Genie, Clopay, and Amarr, and we're certified installers for all four brands. Whether it's a broken torsion spring at 7am or a full carriage-door replacement, we treat every job with the same care.",
    process: [
      [
        "Diagnose",
        "We test springs, cables, tracks, and opener — full system check, not just the obvious symptom.",
      ],
      [
        "Quote",
        "Flat-rate price in writing before we touch a single bolt. No surprises.",
      ],
      [
        "Repair or Install",
        "Most jobs done same visit. Custom orders typically 3–5 business days.",
      ],
      [
        "Safety Test",
        "Full reversal, force, and balance test before we leave. Paperwork emailed.",
      ],
    ],
  },
  {
    slug: "gates",
    title: "Gates & Access Control",
    short: "Automatic & manual gates",
    description:
      "Wrought iron, wood, and aluminum driveway gates with keypad, intercom, and smartphone access.",
    icon: Fence,
    image: gates,
    bullets: [
      "Custom driveway & pedestrian gates",
      "Operator & motor service",
      "Keypads, intercoms & video entry",
      "Loop sensors & safety edges",
      "Solar-powered gate operators",
      "HOA-compliant designs",
    ],
    stats: [
      ["800+", "Gates installed"],
      ["48 hrs", "Typical install time"],
      ["Solar", "Eco-smart options"],
      ["10-year", "Workmanship warranty"],
    ],
    whyUs:
      "A gate is the first impression of your property — and the last line of security. Our gate crews are specialists, not generalists. We design, fabricate, and install wrought iron, wood, and aluminum gates, and we service every major operator brand including LiftMaster, FAAC, and Elite. We handle the full project: permit drawings, HOA submissions, concrete footings, electrical, and final programming. One call, one crew, zero subcontractors.",
    process: [
      [
        "Site Survey",
        "We measure, assess soil, check HOA rules, and confirm utility clearances.",
      ],
      [
        "Design & Quote",
        "CAD drawing and flat-rate quote within 48 hours of site visit.",
      ],
      [
        "Fabrication & Install",
        "Custom gates built in our Austin shop, installed by the same team.",
      ],
      [
        "Program & Train",
        "We program every access device and walk you through operation before we leave.",
      ],
    ],
  },
  {
    slug: "doors-windows",
    title: "Doors & Windows",
    short: "Repair & replacement",
    description:
      "Energy-efficient windows, sturdy entry doors, sliding patio doors, and weatherproof installation.",
    icon: DoorOpen,
    image: doors,
    bullets: [
      "Entry & interior door replacement",
      "Energy-efficient window upgrades",
      "Patio & sliding door installation",
      "Glass & screen repair",
      "Weatherstripping & draft sealing",
      "Impact-rated storm windows",
    ],
    stats: [
      ["30%", "Avg. energy savings"],
      ["2,400+", "Windows installed"],
      ["48 hrs", "Most installs complete"],
      ["10-year", "Workmanship warranty"],
    ],
    whyUs:
      "Texas summers are brutal on windows and doors. We install Pella, Therma-Tru, and Andersen products — all ENERGY STAR certified — and our installers are factory-trained. Every window gets a blower-door test after install to confirm the seal. Every door gets a plumb-and-square check and a deadbolt alignment test. We also handle the disposal of your old units responsibly, including glass recycling where available.",
    process: [
      [
        "Measure & Select",
        "Precise measurements and product selection — we bring samples to your home.",
      ],
      [
        "Order & Schedule",
        "Most in-stock products ship within 5 business days.",
      ],
      [
        "Install",
        "Full removal, prep, install, and interior/exterior trim work in one visit.",
      ],
      [
        "Seal & Test",
        "Blower-door test, caulk inspection, and hardware adjustment before sign-off.",
      ],
    ],
  },
  {
    slug: "home-repairs",
    title: "Home Repairs & Handyman",
    short: "Drywall, paint, plumbing, electric",
    description:
      "From a single fix to a punch list — drywall, painting, minor plumbing and electrical, and more.",
    icon: Hammer,
    image: handyman,
    bullets: [
      "Drywall patching & texture matching",
      "Interior & exterior painting",
      "Minor plumbing repairs & fixtures",
      "Light electrical & ceiling fans",
      "Furniture assembly & TV mounting",
      "Seasonal home punch lists",
    ],
    stats: [
      ["$89", "Minimum service call"],
      ["4 hrs", "Avg. punch-list visit"],
      ["No job", "Too small"],
      ["10-year", "Workmanship warranty"],
    ],
    whyUs:
      "Most handyman companies send whoever is available. We send the right person for the job — a drywall specialist for texture matching, a licensed plumber for fixture work, a licensed electrician for panel or outlet work. Our crews are W-2 employees, not gig workers, which means consistent quality and accountability. We also offer full-day handyman packages at a flat rate — perfect for clearing a punch list before a sale or after a renovation.",
    process: [
      [
        "List It",
        "Tell us everything — we'll group tasks by trade and schedule the right crew.",
      ],
      ["Quote", "Flat-rate pricing per task, delivered before we start."],
      ["Work", "Efficient, clean, and respectful of your home and schedule."],
      [
        "Walk-Through",
        "You inspect every item before we pack up. We don't leave until you're satisfied.",
      ],
    ],
  },
  {
    slug: "roofing-exterior",
    title: "Roofing & Exterior",
    short: "Roof, fence, siding & more",
    description:
      "Storm-ready roof repairs, fence builds, gutter cleanouts and siding work — all built for Texas weather.",
    icon: Home,
    image: roofing,
    bullets: [
      "Roof inspections & storm damage repair",
      "Full roof replacement (GAF & Owens Corning)",
      "Cedar, vinyl & composite fence install",
      "Gutter cleaning, repair & guards",
      "Hardie board & vinyl siding",
      "Insurance claim assistance",
    ],
    stats: [
      ["1,200+", "Roofs repaired"],
      ["GAF", "Certified installer"],
      ["Insurance", "Claim support"],
      ["10-year", "Workmanship warranty"],
    ],
    whyUs:
      "Texas weather is relentless — hail in spring, hurricanes on the coast, ice storms in winter. Our roofing crews are GAF Master Elite certified, which puts us in the top 3% of roofing contractors nationwide and allows us to offer GAF's 50-year System Plus warranty. We also have a dedicated insurance liaison who works directly with your adjuster — we've helped homeowners recover an average of $4,200 more per claim than they were initially offered.",
    process: [
      [
        "Inspection",
        "Full roof, gutter, and flashing inspection with photo documentation.",
      ],
      [
        "Insurance Liaison",
        "We work with your adjuster directly if it's a storm claim.",
      ],
      [
        "Material Selection",
        "Choose shingle style, color, and warranty tier — we bring samples.",
      ],
      [
        "Install & Inspect",
        "GAF-certified install with final inspection and warranty registration.",
      ],
    ],
  },
  {
    slug: "smart-home",
    title: "Smart Home Solutions",
    short: "Locks, cameras & lighting",
    description:
      "Design and install smart locks, cameras, lighting, and full home automation that just works.",
    icon: Cpu,
    image: smart,
    bullets: [
      "Smart locks & video doorbells",
      "Indoor & outdoor camera systems",
      "Smart lighting & scene control",
      "Thermostat & climate automation",
      "Whole-home Wi-Fi & networking",
      "Voice assistant integration",
    ],
    stats: [
      ["Ring & Yale", "Certified installer"],
      ["1 day", "Typical full install"],
      ["App setup", "Included always"],
      ["10-year", "Workmanship warranty"],
    ],
    whyUs:
      "Smart home tech is only as good as the installation. We're certified installers for Ring, Yale, Schlage, Lutron, Ecobee, and Nest — and we integrate everything into a single app so you're not juggling five platforms. Our techs don't just mount devices; they configure automations, set up geofencing, and train every member of your household before they leave. We also offer a 90-day support window after install — call or text us if anything stops working.",
    process: [
      [
        "Needs Assessment",
        "We map your home and identify the right devices for your lifestyle and budget.",
      ],
      [
        "Design",
        "Full system design with device list and wiring plan — no surprises on install day.",
      ],
      [
        "Install & Configure",
        "Devices mounted, wired, and fully configured — not just paired.",
      ],
      [
        "Training & Support",
        "We walk every household member through the app and automations.",
      ],
    ],
  },
];

export const NAV: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Plans", href: "/maintenance-plans" },
  { label: "Locations", href: "/locations" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: 18, suffix: "+", label: "Years in Texas" },
  { value: 12450, suffix: "", label: "Homes serviced" },
  { value: 4.9, suffix: "/5", label: "Avg. rating", decimals: 1 },
  { value: 24, suffix: "/7", label: "Emergency response" },
];

export const TESTIMONIALS = [
  {
    name: "Marisol Vega",
    city: "Austin, TX",
    quote:
      "Replaced my garage door springs the same day I called. Professional, friendly, and the price was exactly what they quoted.",
    rating: 5,
  },
  {
    name: "James O'Connor",
    city: "Round Rock, TX",
    quote:
      "Hired Summit for a full handyman day — drywall, paint, and a new smart lock. Everything was flawless. Already booked them for the roof.",
    rating: 5,
  },
  {
    name: "Priya Shah",
    city: "Cedar Park, TX",
    quote:
      "Their maintenance plan is the best money we spend on the house. Two visits a year and zero surprises. Highly recommend.",
    rating: 5,
  },
  {
    name: "Daniel Reyes",
    city: "San Marcos, TX",
    quote:
      "After the storm I had three estimates. Summit was the most thorough and the only ones who showed up exactly on time.",
    rating: 5,
  },
  {
    name: "Allison Kim",
    city: "Plano, TX",
    quote:
      "From quote to install our new entry door took 48 hours. The crew was respectful, clean, and incredibly skilled.",
    rating: 5,
  },
  {
    name: "Marcus Bell",
    city: "Houston, TX",
    quote:
      "Our automatic gate hadn't worked in months. Summit diagnosed it in 20 minutes and had us rolling the same afternoon.",
    rating: 5,
  },
  {
    name: "Rebecca Nguyen",
    city: "San Antonio, TX",
    quote:
      "Beautiful workmanship on our cedar fence. Neighbors keep stopping to ask who built it. Worth every dollar.",
    rating: 5,
  },
  {
    name: "Tyler Brooks",
    city: "Fort Worth, TX",
    quote:
      "Smart home install was seamless — cameras, locks, lights, all on one app. Tech walked me through every feature.",
    rating: 5,
  },
  {
    name: "Sofia Hernandez",
    city: "Dallas, TX",
    quote:
      "Storm took half my shingles. Summit handled the insurance paperwork AND the roof. Couldn't ask for more.",
    rating: 5,
  },
];

export const BENEFITS = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    text: "Fully bonded Texas team with a 10-year workmanship warranty.",
  },
  {
    icon: Zap,
    title: "Same-Day Service",
    text: "Most repairs handled within 24 hours, including weekends.",
  },
  {
    icon: Brush,
    title: "Premium Craftsmanship",
    text: "Detail-obsessed installers who treat your home like their own.",
  },
  {
    icon: Phone,
    title: "Transparent Pricing",
    text: "Flat-rate quotes upfront — never any surprise charges.",
  },
  {
    icon: Wrench,
    title: "One Team, Every Trade",
    text: "From garage doors to roofs — one trusted call for it all.",
  },
  {
    icon: Leaf,
    title: "Eco-Smart Options",
    text: "Energy-efficient products and responsible disposal as standard.",
  },
];

export const WHY_CHOOSE_US = [
  {
    icon: Clock,
    stat: "< 2 hrs",
    title: "Response Time",
    text: "We answer the phone — not a bot. Most emergency calls are dispatched within 90 minutes inside our core metros.",
  },
  {
    icon: Star,
    stat: "4.9 / 5",
    title: "Verified Reviews",
    text: "Over 1,800 verified reviews across Google, Yelp, and Houzz. We earn every star the hard way — by showing up.",
  },
  {
    icon: Users,
    stat: "W-2 Only",
    title: "Our Own Crew",
    text: "Every technician is a Summit employee — background-checked, drug-tested, and continuously trained. Never a subcontractor.",
  },
  {
    icon: Shield,
    stat: "$2M",
    title: "Fully Insured",
    text: "$2M general liability, full workers' comp, and a 10-year workmanship warranty on every install.",
  },
  {
    icon: ThumbsUp,
    stat: "98%",
    title: "First-Visit Fix Rate",
    text: "Our trucks carry 200+ common parts. 98% of repair calls are resolved in a single visit — no waiting on parts.",
  },
  {
    icon: Zap,
    stat: "Flat Rate",
    title: "No Surprise Bills",
    text: "You get a written flat-rate quote before we start. The price you approve is the price you pay. Period.",
  },
];

export const PLANS = [
  {
    name: "Essential",
    price: 19,
    cadence: "mo",
    tag: "For everyday peace of mind",
    features: [
      "1 annual home check-up",
      "Garage door safety inspection",
      "10% off all repairs",
      "Priority scheduling",
    ],
  },
  {
    name: "Summit",
    price: 39,
    cadence: "mo",
    tag: "Most popular",
    featured: true,
    features: [
      "2 seasonal visits per year",
      "Roof & gutter inspection",
      "Smart device health-check",
      "20% off all repairs",
      "Free emergency dispatch",
    ],
  },
  {
    name: "Estate",
    price: 79,
    cadence: "mo",
    tag: "For larger properties",
    features: [
      "4 visits per year",
      "Full exterior + gate service",
      "Dedicated account manager",
      "30% off all repairs",
      "24/7 white-glove support",
    ],
  },
];

export const LOCATIONS = [
  "Austin",
  "Dallas",
  "Fort Worth",
  "Houston",
  "San Antonio",
  "Round Rock",
  "Cedar Park",
  "Pflugerville",
  "Leander",
  "Georgetown",
  "Plano",
  "Frisco",
  "Arlington",
  "Irving",
  "McKinney",
  "Sugar Land",
  "The Woodlands",
  "Katy",
  "Pearland",
  "New Braunfels",
  "San Marcos",
  "Kyle",
  "Buda",
  "Lakeway",
  "Bee Cave",
  "Dripping Springs",
];

export const CITIES = [
  {
    slug: "austin",
    name: "Austin",
    region: "Central Texas",
    blurb:
      "From Mueller bungalows to Westlake estates — Summit has serviced 4,200+ Austin homes since 2008. Same-day dispatch inside Loop 1.",
    neighborhoods: [
      "Mueller",
      "Westlake",
      "South Congress",
      "Hyde Park",
      "Tarrytown",
      "East Austin",
    ],
    response: "Same-day",
  },
  {
    slug: "dallas",
    name: "Dallas",
    region: "DFW Metroplex",
    blurb:
      "Serving Highland Park, Lakewood, and the broader Dallas County. Specialists in storm-season roof and gate repair.",
    neighborhoods: [
      "Highland Park",
      "Lakewood",
      "Oak Cliff",
      "Uptown",
      "Preston Hollow",
      "Lake Highlands",
    ],
    response: "Within 24h",
  },
  {
    slug: "fort-worth",
    name: "Fort Worth",
    region: "DFW Metroplex",
    blurb:
      "Cowtown craftsmanship — historic-home repairs, modern smart-home retrofits, and everything in between.",
    neighborhoods: [
      "TCU",
      "Westover Hills",
      "Fairmount",
      "Sundance Square",
      "Arlington Heights",
    ],
    response: "Within 24h",
  },
  {
    slug: "houston",
    name: "Houston",
    region: "Gulf Coast",
    blurb:
      "Hurricane-rated installs across The Heights, Memorial, and Sugar Land. Backed by our 10-year warranty.",
    neighborhoods: [
      "The Heights",
      "Memorial",
      "Bellaire",
      "Montrose",
      "River Oaks",
      "Sugar Land",
    ],
    response: "Within 24h",
  },
  {
    slug: "san-antonio",
    name: "San Antonio",
    region: "South Texas",
    blurb:
      "From Alamo Heights to Stone Oak — gates, garage doors, and exterior repairs built for Hill Country weather.",
    neighborhoods: [
      "Alamo Heights",
      "Stone Oak",
      "Olmos Park",
      "Terrell Hills",
      "The Dominion",
    ],
    response: "Same-day",
  },
];

export const POSTS = [
  {
    slug: "garage-door-spring-signs",
    title: "5 Signs Your Garage Door Spring Is About to Snap",
    excerpt:
      "Springs are the silent workhorses of your garage. Here's how to spot trouble before it strands you.",
    date: "Apr 12, 2026",
    category: "Garage Doors",
    readTime: "4 min",
    image: "blog-garage-spring",
  },
  {
    slug: "texas-storm-roof-checklist",
    title: "The Texas Homeowner's Storm-Season Roof Checklist",
    excerpt:
      "A quick walk-around can save you thousands. Use this 9-point list every spring and fall.",
    date: "Mar 28, 2026",
    category: "Roofing",
    readTime: "6 min",
    image: "blog-roof-storm",
  },
  {
    slug: "smart-lock-buyer-guide",
    title: "Smart Lock Buyer's Guide for 2026",
    excerpt:
      "Battery life, finishes, and the one feature most homeowners overlook until it's too late.",
    date: "Mar 14, 2026",
    category: "Smart Home",
    readTime: "8 min",
    image: "blog-smart-lock",
  },
  {
    slug: "fence-vs-gate-roi",
    title: "Fence vs. Gate: Which Adds More Value to a Texas Home?",
    excerpt:
      "We crunched two years of resale data across Central Texas. The answer surprised us.",
    date: "Feb 22, 2026",
    category: "Exterior",
    readTime: "5 min",
    image: "blog-fence-gate",
  },
  {
    slug: "handyman-vs-contractor",
    title: "Handyman vs. General Contractor: Which Do You Actually Need?",
    excerpt:
      "Most homeowners overpay by hiring the wrong type of pro. Here's the honest breakdown.",
    date: "Feb 8, 2026",
    category: "Handyman",
    readTime: "5 min",
    image: "blog-handyman",
  },
  {
    slug: "window-replacement-guide",
    title: "When to Repair vs. Replace Your Windows (Texas Edition)",
    excerpt:
      "New windows can cut your energy bill by 30%. But not every window needs replacing. Here's how to tell.",
    date: "Jan 25, 2026",
    category: "Doors & Windows",
    readTime: "6 min",
    image: "blog-windows",
  },
  {
    slug: "home-value-improvements",
    title: "7 Home Improvements That Actually Increase Resale Value in Texas",
    excerpt:
      "Not all upgrades pay off at closing. These seven do — consistently, across every Texas market.",
    date: "Jan 10, 2026",
    category: "Home Tips",
    readTime: "7 min",
    image: "blog-home-value",
  },
  {
    slug: "hvac-maintenance-tips",
    title: "HVAC Maintenance Every Texas Homeowner Should Do Twice a Year",
    excerpt:
      "Your AC works harder than almost any system in the house. Keep it running with this simple seasonal checklist.",
    date: "Dec 18, 2025",
    category: "Home Tips",
    readTime: "5 min",
    image: "blog-hvac",
  },
];

export type Post = (typeof POSTS)[number];
