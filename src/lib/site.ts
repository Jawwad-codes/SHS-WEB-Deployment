import { DoorOpen, Warehouse, Hammer, Home, Wrench, Cpu, Shield, Brush, Zap, Leaf, Phone, Fence } from "lucide-react";

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
      "Carriage & modern designs",
      "Same-day emergency repair",
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
    bullets: ["Custom driveway gates", "Operator & motor service", "Keypads & intercoms", "Loop sensors & safety"],
  },
  {
    slug: "doors-windows",
    title: "Doors & Windows",
    short: "Repair & replacement",
    description:
      "Energy-efficient windows, sturdy entry doors, sliding patio doors, and weatherproof installation.",
    icon: DoorOpen,
    image: doors,
    bullets: ["Entry & interior doors", "Energy-efficient windows", "Patio & sliding doors", "Glass & screen repair"],
  },
  {
    slug: "home-repairs",
    title: "Home Repairs & Handyman",
    short: "Drywall, paint, plumbing, electric",
    description:
      "From a single fix to a punch list — drywall, painting, minor plumbing and electrical, and more.",
    icon: Hammer,
    image: handyman,
    bullets: ["Drywall & painting", "Minor plumbing & electrical", "Furniture & TV mounting", "Seasonal punch lists"],
  },
  {
    slug: "roofing-exterior",
    title: "Roofing & Exterior",
    short: "Roof, fence, siding & more",
    description:
      "Storm-ready roof repairs, fence builds, gutter cleanouts and siding work — all built for Texas weather.",
    icon: Home,
    image: roofing,
    bullets: ["Roof inspections & repair", "Fence repair & install", "Gutter & siding service", "Storm damage response"],
  },
  {
    slug: "smart-home",
    title: "Smart Home Solutions",
    short: "Locks, cameras & lighting",
    description:
      "Design and install smart locks, cameras, lighting, and full home automation that just works.",
    icon: Cpu,
    image: smart,
    bullets: ["Smart locks & video doorbells", "Camera systems", "Lighting & climate", "Whole-home automation"],
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
  { name: "Marisol Vega", city: "Austin, TX", quote: "Replaced my garage door springs the same day I called. Professional, friendly, and the price was exactly what they quoted.", rating: 5 },
  { name: "James O'Connor", city: "Round Rock, TX", quote: "Hired Summit for a full handyman day — drywall, paint, and a new smart lock. Everything was flawless. Already booked them for the roof.", rating: 5 },
  { name: "Priya Shah", city: "Cedar Park, TX", quote: "Their maintenance plan is the best money we spend on the house. Two visits a year and zero surprises. Highly recommend.", rating: 5 },
  { name: "Daniel Reyes", city: "San Marcos, TX", quote: "After the storm I had three estimates. Summit was the most thorough and the only ones who showed up exactly on time.", rating: 5 },
  { name: "Allison Kim", city: "Plano, TX", quote: "From quote to install our new entry door took 48 hours. The crew was respectful, clean, and incredibly skilled.", rating: 5 },
  { name: "Marcus Bell", city: "Houston, TX", quote: "Our automatic gate hadn't worked in months. Summit diagnosed it in 20 minutes and had us rolling the same afternoon.", rating: 5 },
  { name: "Rebecca Nguyen", city: "San Antonio, TX", quote: "Beautiful workmanship on our cedar fence. Neighbors keep stopping to ask who built it. Worth every dollar.", rating: 5 },
  { name: "Tyler Brooks", city: "Fort Worth, TX", quote: "Smart home install was seamless — cameras, locks, lights, all on one app. Tech walked me through every feature.", rating: 5 },
  { name: "Sofia Hernandez", city: "Dallas, TX", quote: "Storm took half my shingles. Summit handled the insurance paperwork AND the roof. Couldn't ask for more.", rating: 5 },
];

export const BENEFITS = [
  { icon: Shield, title: "Licensed & Insured", text: "Fully bonded Texas team with a 10-year workmanship warranty." },
  { icon: Zap, title: "Same-Day Service", text: "Most repairs handled within 24 hours, including weekends." },
  { icon: Brush, title: "Premium Craftsmanship", text: "Detail-obsessed installers who treat your home like their own." },
  { icon: Phone, title: "Transparent Pricing", text: "Flat-rate quotes upfront — never any surprise charges." },
  { icon: Wrench, title: "One Team, Every Trade", text: "From garage doors to roofs — one trusted call for it all." },
  { icon: Leaf, title: "Eco-Smart Options", text: "Energy-efficient products and responsible disposal as standard." },
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
  "Austin", "Dallas", "Fort Worth", "Houston", "San Antonio",
  "Round Rock", "Cedar Park", "Pflugerville", "Leander", "Georgetown",
  "Plano", "Frisco", "Arlington", "Irving", "McKinney",
  "Sugar Land", "The Woodlands", "Katy", "Pearland",
  "New Braunfels", "San Marcos", "Kyle", "Buda",
  "Lakeway", "Bee Cave", "Dripping Springs",
];

export const CITIES = [
  {
    slug: "austin",
    name: "Austin",
    region: "Central Texas",
    blurb: "From Mueller bungalows to Westlake estates — Summit has serviced 4,200+ Austin homes since 2008. Same-day dispatch inside Loop 1.",
    neighborhoods: ["Mueller", "Westlake", "South Congress", "Hyde Park", "Tarrytown", "East Austin"],
    response: "Same-day",
  },
  {
    slug: "dallas",
    name: "Dallas",
    region: "DFW Metroplex",
    blurb: "Serving Highland Park, Lakewood, and the broader Dallas County. Specialists in storm-season roof and gate repair.",
    neighborhoods: ["Highland Park", "Lakewood", "Oak Cliff", "Uptown", "Preston Hollow", "Lake Highlands"],
    response: "Within 24h",
  },
  {
    slug: "fort-worth",
    name: "Fort Worth",
    region: "DFW Metroplex",
    blurb: "Cowtown craftsmanship — historic-home repairs, modern smart-home retrofits, and everything in between.",
    neighborhoods: ["TCU", "Westover Hills", "Fairmount", "Sundance Square", "Arlington Heights"],
    response: "Within 24h",
  },
  {
    slug: "houston",
    name: "Houston",
    region: "Gulf Coast",
    blurb: "Hurricane-rated installs across The Heights, Memorial, and Sugar Land. Backed by our 10-year warranty.",
    neighborhoods: ["The Heights", "Memorial", "Bellaire", "Montrose", "River Oaks", "Sugar Land"],
    response: "Within 24h",
  },
  {
    slug: "san-antonio",
    name: "San Antonio",
    region: "South Texas",
    blurb: "From Alamo Heights to Stone Oak — gates, garage doors, and exterior repairs built for Hill Country weather.",
    neighborhoods: ["Alamo Heights", "Stone Oak", "Olmos Park", "Terrell Hills", "The Dominion"],
    response: "Same-day",
  },
];

export const POSTS = [
  {
    slug: "garage-door-spring-signs",
    title: "5 Signs Your Garage Door Spring Is About to Snap",
    excerpt: "Springs are the silent workhorses of your garage. Here's how to spot trouble before it strands you.",
    date: "Apr 12, 2026",
    category: "Garage Doors",
    readTime: "4 min",
  },
  {
    slug: "texas-storm-roof-checklist",
    title: "The Texas Homeowner's Storm-Season Roof Checklist",
    excerpt: "A quick walk-around can save you thousands. Use this 9-point list every spring and fall.",
    date: "Mar 28, 2026",
    category: "Roofing",
    readTime: "6 min",
  },
  {
    slug: "smart-lock-buyer-guide",
    title: "Smart Lock Buyer's Guide for 2026",
    excerpt: "Battery life, finishes, and the one feature most homeowners overlook until it's too late.",
    date: "Mar 14, 2026",
    category: "Smart Home",
    readTime: "8 min",
  },
  {
    slug: "fence-vs-gate-roi",
    title: "Fence vs. Gate: Which Adds More Value to a Texas Home?",
    excerpt: "We crunched two years of resale data across Central Texas. The answer surprised us.",
    date: "Feb 22, 2026",
    category: "Exterior",
    readTime: "5 min",
  },
];
