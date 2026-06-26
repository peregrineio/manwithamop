// Per-service page content. Each entry is intentionally unique — its own
// scope, copy, and FAQs — so every service page reads as a real, standalone
// page (not a thin doorway template). This is the single source of truth for
// the /services index and the /services/[slug] detail pages.
//
// COMPLIANCE (GREEN classification — hard rules):
//   • NEVER use "mold", "mold removal/remediation", "disinfect", "sanitize",
//     "antimicrobial", or medical-grade claims anywhere in this copy.
//   • TX sales tax 8.25% is itemized on every invoice — say so, don't bury it.

import type { ServiceType } from "@/lib/constants";

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface RecurringTier {
  frequency: string;
  price: number;
  /** Per-visit framing line */
  note: string;
  popular?: boolean;
}

export interface ServiceDetail {
  slug: string;
  category: "residential" | "addon";
  /** Links to a flat SERVICE_TYPES rate when one exists */
  serviceKey?: ServiceType;
  routeNo: string;
  /** Full display name, e.g. "Standard Clean" */
  name: string;
  /** Short label for nav + cards, e.g. "Standard" */
  shortName: string;
  /** Spec-strip category badge */
  badge: string;
  tagline: string;
  /** Numeric base price for schema (null when it's a range) */
  price: number | null;
  /** Display price string, e.g. "$120" or "From $99 / visit" */
  priceLabel: string;
  /** e.g. "~2 hrs · + 8.25% TX tax" */
  priceNote: string;
  /** Spec-strip "best for" token */
  bestFor: string;
  /** Direct-answer first paragraph — written to be quotable by AI search */
  intro: string;
  /** "What the man does" checklist */
  includes: string[];
  /** Standard-clean only: what's NOT in this clean (steps up to Deep) */
  excludes?: string[];
  /** Add-ons: what this pairs well with */
  pairsWith?: string[];
  /** Recurring only: frequency / price tiers */
  tiers?: RecurringTier[];
  faqs: ServiceFaq[];
  metaTitle: string;
  metaDescription: string;
  /** TODO(Sam): pricing not yet finalized — confirm before launch */
  pricePending?: boolean;
}

export const SERVICES: ServiceDetail[] = [
  // ── RESIDENTIAL ────────────────────────────────────────────────────────
  {
    slug: "standard-clean",
    category: "residential",
    serviceKey: "standard_clean",
    routeNo: "01",
    name: "Standard Clean",
    shortName: "Standard",
    badge: "Residential · Recurring-ready",
    tagline: "The weekly reset",
    price: 120,
    priceLabel: "$120",
    priceNote: "~2–4 hrs · + 8.25% TX tax",
    bestFor: "Maintained homes",
    intro:
      "A Standard Clean from Man With a Mop is routine upkeep for an already-maintained home — kitchen and bathrooms scrubbed, every floor vacuumed and mopped, surfaces dusted, trash out. It runs about two to four hours and starts at $120 plus 8.25% Texas sales tax. It's the clean most Northwest Houston families put on a recurring schedule.",
    includes: [
      "Kitchen surfaces + appliance exteriors wiped down",
      "All bathrooms — toilets, sinks, tubs, mirrors scrubbed",
      "Vacuum and mop all floors",
      "Dust all accessible surfaces",
      "Tidy and straighten common areas",
      "Take out trash + recycle",
    ],
    excludes: [
      "Inside the oven, fridge, and microwave",
      "Baseboards and door frames",
      "Window sills + tracks",
      "Cabinet exteriors detailed",
      "Light fixtures + ceiling fans",
    ],
    faqs: [
      {
        q: "What's the difference between a Standard Clean and a Deep Clean?",
        a: "A Standard Clean keeps an already-clean home looking sharp — surfaces, floors, kitchen, and bathrooms. A Deep Clean adds the built-up stuff you don't get to often: inside the oven and fridge, baseboards, window tracks, cabinet fronts, and ceiling fans. Most homes need one Deep Clean first, then a Standard Clean keeps it there.",
      },
      {
        q: "How long does a Standard Clean take?",
        a: "About two to four hours for a typical Northwest Houston home, depending on size and condition. Larger floor plans get a confirmed quote before we book, so the price on the invoice is the price we agreed on.",
      },
      {
        q: "How often should I schedule a Standard Clean?",
        a: "Most clients land on weekly, bi-weekly, or monthly recurring service — same man every visit, at a standing discount off the one-time rate. See Recurring Cleaning for the schedule that fits.",
      },
      {
        q: "Do I need to be home, and do you bring supplies?",
        a: "You don't need to be home — many clients leave a door code. The man brings his own HEPA vacuum, microfiber, and products. Prefer specific products for stone or hardwood? Leave them out and tell us.",
      },
    ],
    metaTitle: "Standard House Cleaning — Northwest Houston | Man With a Mop",
    metaDescription:
      "Standard house cleaning from $120 across Cypress, Katy, Tomball & Northwest Houston. Kitchen, baths, floors, dusting. Insured, vetted, same man every visit.",
  },
  {
    slug: "deep-clean",
    category: "residential",
    serviceKey: "deep_clean",
    routeNo: "02",
    name: "Deep Clean",
    shortName: "Deep",
    badge: "Residential · Top-to-bottom",
    tagline: "Baseboards to ceiling fans",
    price: 185,
    priceLabel: "$185",
    priceNote: "~4–6 hrs · + 8.25% TX tax",
    bestFor: "First cleans + resets",
    intro:
      "A Deep Clean is the full reset — everything in a Standard Clean plus the parts of the house that get skipped between cleanings: inside the oven, fridge, and microwave, baseboards, window sills and tracks, cabinet fronts, and ceiling fans. It runs about four to six hours and starts at $185 plus 8.25% Texas sales tax. It's where new clients start before going on a recurring schedule.",
    includes: [
      "Everything in a Standard Clean",
      "Inside the oven, fridge, and microwave",
      "Baseboards and door frames hand-wiped",
      "Window sills + tracks",
      "Cabinet exteriors detailed",
      "Light fixtures + ceiling fans",
      "Switch plates, vents, and door tops",
    ],
    faqs: [
      {
        q: "When do I need a Deep Clean instead of a Standard Clean?",
        a: "Book a Deep Clean when it's been a while, when you're starting recurring service, after construction or pollen season, or anytime the house needs to get back to baseline. After that, a Standard Clean keeps it there.",
      },
      {
        q: "Do I have to get a Deep Clean before recurring service?",
        a: "We recommend it. A Standard Clean maintains a home that's already at baseline — the first Deep Clean gets it there. New-construction and country homes especially benefit from starting deep.",
      },
      {
        q: "How much longer does a Deep Clean take?",
        a: "Plan on about four to six hours, versus two to four for a Standard Clean — the extra time goes into the oven, fridge, baseboards, tracks, and fans. Larger homes are quoted by size and condition up front.",
      },
      {
        q: "Will you get builder dust and pollen off the tracks and sills?",
        a: "Yes — window tracks, sills, baseboards, vents, and fan blades are exactly what the Deep Clean is built for. New builds in Bridgeland, Elyson, and Dellrose and acreage homes in Magnolia get this one a lot.",
      },
    ],
    metaTitle: "Deep House Cleaning — Northwest Houston | Man With a Mop",
    metaDescription:
      "Deep cleaning from $185 across Cypress, Katy, Magnolia & Northwest Houston. Inside oven & fridge, baseboards, window tracks, ceiling fans. Insured & vetted.",
  },
  {
    slug: "move-in-out-clean",
    category: "residential",
    serviceKey: "move_in_out",
    routeNo: "03",
    name: "Move-In / Move-Out Clean",
    shortName: "Move-In/Out",
    badge: "Residential · Turnover",
    tagline: "Built for the deposit",
    price: 210,
    priceLabel: "$210",
    priceNote: "~4 hrs · + 8.25% TX tax",
    bestFor: "Empty homes",
    intro:
      "A Move-In / Move-Out Clean is a top-to-bottom turnover for an empty home, built to satisfy a landlord checklist the first time: inside every cabinet and drawer, inside the oven, fridge, and dishwasher, all closets, and spot-cleaned walls. It runs about four hours and starts at $210 plus 8.25% Texas sales tax. It's our most thorough residential service.",
    includes: [
      "Top-to-bottom clean of an empty home",
      "Inside all cabinets + drawers",
      "Inside the oven, fridge, and dishwasher",
      "All closets, shelves, and storage",
      "Baseboards, door frames, and window tracks",
      "Walls spot-cleaned",
      "Designed to satisfy landlord & turnover checklists",
    ],
    faqs: [
      {
        q: "Will this clean get my full deposit back?",
        a: "That's what it's built for. The Move-Out Clean follows the same checklist property managers walk: inside cabinets and appliances, every closet, baseboards, tracks, and spot-cleaned walls. Katy and Cinco Ranch clients regularly pass the walkthrough on the first try.",
      },
      {
        q: "Should the home be empty first?",
        a: "Ideally, yes — an empty home lets the man get inside every cabinet, closet, and appliance. We can work around a few remaining items, but the cleanest result (and the easiest walkthrough) comes from an empty space.",
      },
      {
        q: "Do you clean new-construction move-ins and builder dust?",
        a: "Constantly. New builds in Bridgeland, Elyson, Dellrose, and Audubon collect fine construction dust for months. The Move-In Clean covers window tracks, cabinet interiors, baseboards, and vents — the spots a builder's 'final clean' skips.",
      },
      {
        q: "How far ahead should I book before my walkthrough?",
        a: "As early as you can — give us a day or two of lead time so we can schedule the clean before your inspection, not the morning of. Most homes are scheduled within 48 hours.",
      },
    ],
    metaTitle: "Move-In / Move-Out Cleaning — Northwest Houston | Man With a Mop",
    metaDescription:
      "Move-out cleaning from $210 across Cypress, Katy & Northwest Houston. Inside cabinets & appliances, closets, walls — built to pass landlord checklists.",
  },
  {
    slug: "recurring-cleaning",
    category: "residential",
    routeNo: "04",
    name: "Recurring Cleaning",
    shortName: "Recurring",
    badge: "Residential · Weekly · Bi-Weekly · Monthly",
    tagline: "Same man. Standing discount.",
    price: null,
    priceLabel: "From $99 / visit",
    priceNote: "per visit · + 8.25% TX tax",
    bestFor: "Hands-off upkeep",
    pricePending: true,
    intro:
      "Recurring Cleaning puts a Standard Clean on a schedule — weekly, bi-weekly, or monthly — with the same vetted man every visit and a standing discount off the one-time rate. We recommend starting with one Deep Clean to get the home to baseline, then recurring service keeps it there. No long-term contract; pause or adjust anytime.",
    includes: [
      "Full Standard Clean scope every visit",
      "The same vetted, insured man each time",
      "Priority scheduling in your time window",
      "A standing discount off the one-time rate",
      "First-visit Deep Clean recommended to set baseline",
      "Pause, skip, or adjust frequency anytime — no contract",
    ],
    tiers: [
      {
        frequency: "Weekly",
        price: 99,
        note: "Best value — hands-off, always guest-ready",
        popular: true,
      },
      {
        frequency: "Bi-Weekly",
        price: 105,
        note: "The most popular cadence for busy households",
      },
      {
        frequency: "Monthly",
        price: 110,
        note: "A reliable monthly reset to stay ahead of it",
      },
    ],
    faqs: [
      {
        q: "Do I have to sign a contract for recurring service?",
        a: "No. Recurring Cleaning is month-to-month — you can pause, skip a visit, or change your frequency anytime. The discount is for staying on a schedule, not for locking you in.",
      },
      {
        q: "Do I get the same cleaner every visit?",
        a: "Yes — that's the whole point of Man With a Mop. Your recurring visits are the same man each time. He learns your home, your pets, and how you like the kitchen done.",
      },
      {
        q: "Why do you recommend a Deep Clean first?",
        a: "A Standard Clean maintains a home that's already at baseline. The first Deep Clean gets it there — oven, fridge, baseboards, tracks, and fans — so every recurring visit after that stays efficient and consistent.",
      },
      {
        q: "How does billing work for recurring visits?",
        a: "Each visit is invoiced at your recurring rate with 8.25% Texas sales tax itemized — same honest pricing, just at the standing discount. Payment is after service.",
      },
    ],
    metaTitle: "Recurring House Cleaning — Weekly, Bi-Weekly & Monthly | Man With a Mop",
    metaDescription:
      "Recurring house cleaning across Northwest Houston — weekly, bi-weekly, or monthly. Same man every visit, standing discount, no contract. Free quotes.",
  },

  // ── ADD-ONS ────────────────────────────────────────────────────────────
  {
    slug: "window-cleaning",
    category: "addon",
    routeNo: "05",
    name: "Window Cleaning",
    shortName: "Window",
    badge: "Add-On · Interior + reachable exterior",
    tagline: "Streak-free, sills and all",
    price: null,
    priceLabel: "From $40 add-on",
    priceNote: "add-on · + 8.25% TX tax",
    bestFor: "Add to any clean",
    pricePending: true,
    intro:
      "Window Cleaning gets the glass streak-free inside and out on reachable windows, with sills and tracks wiped down so the whole frame looks finished — not just the pane. It starts at $40 as an add-on to a Standard or Deep Clean, plus 8.25% Texas sales tax. The best way to book it is alongside a house clean.",
    includes: [
      "Interior glass cleaned streak-free",
      "Reachable exterior windows (ground level)",
      "Sills and tracks wiped down",
      "Frames and edges detailed",
      "Best added to a Standard or Deep Clean",
    ],
    pairsWith: ["Standard Clean", "Deep Clean"],
    faqs: [
      {
        q: "Do you clean second-story exterior windows?",
        a: "We clean reachable, ground-level exterior glass and all interior windows. Tall second-story exteriors that need extension ladders are outside what the man does solo — we'll tell you up front what's reachable at your home.",
      },
      {
        q: "Is window cleaning a standalone service or an add-on?",
        a: "It's built as an add-on to a Standard or Deep Clean — that's where it's most affordable and makes the most sense. Ask and we'll work out a standalone visit if that's what you need.",
      },
      {
        q: "Do you clean the sills and tracks too, or just the glass?",
        a: "Sills and tracks are part of it — that's the difference between a window that looks clean and one that looks finished. Tracks are also covered in our Deep Clean.",
      },
      {
        q: "How much does adding windows cost?",
        a: "It starts at $40 added onto a clean and scales with the number of windows. We confirm the add-on price when we quote your clean, with 8.25% Texas sales tax itemized.",
      },
    ],
    metaTitle: "Window Cleaning Add-On — Interior & Exterior Glass | Man With a Mop",
    metaDescription:
      "Window cleaning add-on across Northwest Houston — streak-free interior & reachable exterior glass, sills and tracks. Add to any house clean. Free quotes.",
  },
];

export function getService(slug: string): ServiceDetail | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const RESIDENTIAL_SERVICES = SERVICES.filter(
  (s) => s.category === "residential",
);

export const ADDON_SERVICES = SERVICES.filter((s) => s.category === "addon");
