// Service-area (city) page content. Each entry is intentionally unique —
// local copy, FAQs, and testimonials are city-specific so these pages read
// as real local pages, not doorway templates (Google scaled-content policy).

export interface AreaFaq {
  q: string;
  a: string;
}

export interface AreaTestimonial {
  name: string;
  neighborhood: string;
  service: string;
  body: string;
}

export interface ServiceArea {
  slug: string;
  city: string;
  county: string;
  zips: string[];
  routeNo: string;
  /** Mono stat tokens shown in the hero spec strip */
  stats: [string, string][];
  /** Direct-answer first paragraph — written to be quotable by AI search */
  intro: string;
  /** "The local read" — two genuinely local paragraphs */
  localRead: [string, string];
  neighborhoods: string[];
  landmarks: string[];
  faqs: AreaFaq[];
  testimonial: AreaTestimonial;
  metaTitle: string;
  metaDescription: string;
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "cypress-tx",
    city: "Cypress",
    county: "Harris County",
    zips: ["77429", "77433"],
    routeNo: "01",
    stats: [
      ["County", "Harris"],
      ["ZIPs", "77429 · 77433"],
      ["Corridor", "US-290 / Grand Pkwy"],
      ["Character", "Master-planned"],
    ],
    intro:
      "Man With a Mop provides house cleaning in Cypress, TX — standard cleans, deep cleans, move-in/out turnovers, and carpet cleaning across Bridgeland, Towne Lake, Fairfield, and the rest of Cy-Fair. One vetted, insured man, booked by text or online, usually scheduled within 48 hours.",
    localRead: [
      "Cypress is the busiest stop on our route, and for good reason: ZIP 77433 was the single most-moved-into ZIP code in America in 2025. All those moving trucks mean two things we see every week — move-in cleans on brand-new builds in Bridgeland, Marvida, and Dunham Pointe, and that fine layer of construction dust that new-home neighborhoods never quite escape while the builders are still pouring slabs down the street.",
      "From the Boardwalk at Towne Lake to the older trees in Coles Crossing, Cypress homes run from brand-new to broken-in. The man cleans both: builder-dust deep cleans for new keys, and recurring standard cleans for families who'd rather spend Saturday on the trails in Bridgeland than scrubbing baseboards.",
    ],
    neighborhoods: [
      "Bridgeland",
      "Towne Lake",
      "Fairfield",
      "Coles Crossing",
      "Cypress Creek Lakes",
      "Marvida",
      "Dunham Pointe",
      "Blackhorse Ranch",
    ],
    landmarks: [
      "Boardwalk at Towne Lake",
      "Bridgeland lakes & trails",
      "Cypress Creek greenbelts",
    ],
    faqs: [
      {
        q: "How much does house cleaning cost in Cypress, TX?",
        a: "Standard cleans start at $120, deep cleans at $185, move-in/out cleans at $210, and carpet cleaning at $85 — plus 8.25% Texas sales tax, which we show on every invoice. Final quotes depend on square footage and condition.",
      },
      {
        q: "Do you clean new-construction homes in Bridgeland and Marvida?",
        a: "Constantly. New builds in active construction phases collect fine drywall and silica dust for months. Our deep clean covers window tracks, cabinet interiors on request, baseboards, and vents — the spots builder cleans skip.",
      },
      {
        q: "Do you serve all of Cy-Fair or just Cypress proper?",
        a: "We cover both Cypress ZIPs (77429 and 77433) and the surrounding Cy-Fair area. If you're near the US-290 / Grand Parkway corridor, you're on the route — when in doubt, text us your address.",
      },
      {
        q: "Can I get the same cleaner every visit in Cypress?",
        a: "Yes — that's the whole point of Man With a Mop. Recurring clients get the same man each visit. He learns your home, your pets, and how you like the kitchen done.",
      },
    ],
    testimonial: {
      name: "Renee T.",
      neighborhood: "Towne Lake",
      service: "Move-In Deep Clean",
      body: "We closed on a new build and the builder's 'final clean' was a joke — dust in every cabinet. He spent four hours on it and the house finally felt finished. Booked him monthly before he left the driveway.",
    },
    metaTitle: "House Cleaning in Cypress, TX",
    metaDescription:
      "Trusted house cleaning in Cypress, TX serving Bridgeland, Towne Lake, Fairfield & Cy-Fair. Insured, background-checked. Deep cleans from $185. Free quotes.",
  },
  {
    slug: "katy-tx",
    city: "Katy",
    county: "Harris / Fort Bend / Waller",
    zips: ["77449", "77450", "77493", "77494"],
    routeNo: "02",
    stats: [
      ["County", "Harris · Ft. Bend · Waller"],
      ["ZIPs", "77449 · 77450 · 77493 · 77494"],
      ["Corridor", "I-10 / Grand Pkwy"],
      ["Character", "Master-planned"],
    ],
    intro:
      "Man With a Mop provides house cleaning in Katy, TX — recurring standard cleans, deep cleans, move-in/out turnovers, and carpet cleaning across Cinco Ranch, Elyson, Cane Island, and greater Katy. One vetted, insured man, booked online or by text, with pricing posted up front.",
    localRead: [
      "Katy is really two markets wearing one rice-farmer's hat. South of I-10 you've got the established master-planned giants — Cinco Ranch, Grand Lakes, Firethorne — twenty-plus years of family homes where recurring cleans and the occasional deep reset keep things sane. North of I-10, ZIP 77493 has been one of the hottest new-home ZIPs in America, and Elyson, Cane Island, and Sunterra keep handing out new keys that deserve a proper move-in clean.",
      "Move-out season is serious business here: Katy's HOA communities and competitive resale market mean a turnover clean has to actually pass inspection, not just smell like lemon. Our move-in/out clean was built for landlord checklists — inside cabinets, inside appliances, every closet. It's as if a man cleaned it. A thorough one.",
    ],
    neighborhoods: [
      "Cinco Ranch",
      "Elyson",
      "Cane Island",
      "Sunterra",
      "Firethorne",
      "Grand Lakes",
      "Tamarron",
      "Old Katy",
    ],
    landmarks: [
      "Katy Mills",
      "Typhoon Texas",
      "Historic Katy Train Depot",
    ],
    faqs: [
      {
        q: "How much does house cleaning cost in Katy, TX?",
        a: "Standard cleans start at $120, deep cleans at $185, move-in/out cleans at $210, and carpet cleaning at $85, plus 8.25% TX sales tax — always itemized on the invoice. Larger Cinco Ranch floor plans may quote higher; we confirm before booking.",
      },
      {
        q: "Do you handle move-out cleans that satisfy Katy HOA and landlord standards?",
        a: "Yes — the move-in/out clean is our most thorough service: inside all cabinets and drawers, inside the oven, fridge, and dishwasher, all closets, and spot-cleaned walls. It's designed to pass a landlord checklist the first time.",
      },
      {
        q: "Which parts of Katy do you serve?",
        a: "All four main ZIPs — 77449, 77450, 77493, and 77494 — covering both sides of I-10, from Cinco Ranch up through Elyson and Cane Island. Katy sits at the west end of our route, about 30 minutes from our Cypress home base via the Grand Parkway.",
      },
      {
        q: "Do you bring your own supplies and equipment?",
        a: "Always — HEPA vacuum, microfiber, and eco-friendly products that won't aggravate allergies. If you prefer specific products for stone counters or hardwoods, leave them out and tell us.",
      },
    ],
    testimonial: {
      name: "Derek M.",
      neighborhood: "Cinco Ranch",
      service: "Move-Out Clean",
      body: "Property manager held our deposit hostage twice before with other cleaners. This time the walkthrough took ten minutes — she literally said 'this is the cleanest turnover I've seen this year.' Full deposit back.",
    },
    metaTitle: "House Cleaning in Katy, TX",
    metaDescription:
      "House cleaning in Katy, TX serving Cinco Ranch, Elyson, Cane Island & greater Katy. Move-out cleans that pass landlord checklists. Insured & vetted. Free quotes.",
  },
  {
    slug: "hockley-tx",
    city: "Hockley",
    county: "Harris / Waller",
    zips: ["77447"],
    routeNo: "03",
    stats: [
      ["County", "Harris · Waller"],
      ["ZIP", "77447"],
      ["Corridor", "US-290 / SH-6"],
      ["Character", "Country + new builds"],
    ],
    intro:
      "Man With a Mop provides house cleaning in Hockley, TX — standard cleans, deep cleans, move-in/out cleans, and carpet cleaning for the new communities like Dellrose and Jubilee as well as the acreage and farm properties that make Hockley, Hockley. Unincorporated? Outside city limits? Doesn't matter — if you're on 77447, you're on the route.",
    localRead: [
      "Hockley is where the route turns country — hay fields and horse property on one side of US-290, brand-new rooftops in Dellrose, Cypress Green, and Jubilee on the other. Home sales here jumped over 40% in 2024, which means a lot of first-time-in-this-house cleans: builder-dust deep cleans, move-in resets, and that first real scrub a new home needs after the boxes are gone.",
      "The acreage side of Hockley has its own cleaning rhythm. Country properties track in more of everything — dust off the gravel drive, mud from the barn, whatever the dogs found. We don't flinch at a mudroom that's earned its name, and we schedule around livestock feedings and farm mornings without drama.",
    ],
    neighborhoods: [
      "Dellrose",
      "Jubilee",
      "Cypress Green",
      "Sorella",
      "Bauer Landing",
      "Houston Oaks area",
    ],
    landmarks: [
      "Houston Oaks",
      "US-290 & SH-6 crossroads",
      "Waller County farmland",
    ],
    faqs: [
      {
        q: "Do you clean homes outside Hockley's city limits — acreage and farm properties?",
        a: "Yes. Hockley is unincorporated, so 'city limits' barely means anything here anyway. We clean acreage homes, horse properties, and farmhouses across ZIP 77447 on both the Harris and Waller County sides.",
      },
      {
        q: "How much does house cleaning cost in Hockley, TX?",
        a: "Same honest rate card as everywhere on our route: standard cleans from $120, deep cleans from $185, move-in/out from $210, carpet cleaning from $85 — plus 8.25% TX sales tax, itemized. Large acreage homes get a confirmed quote before we book.",
      },
      {
        q: "Is Hockley really on your regular route?",
        a: "It's fifteen minutes up US-290 from our Cypress base — one of the closest stops we have. New builds in Dellrose and Jubilee, established country homes off Bauer Road, all of it.",
      },
      {
        q: "Do you do a first deep clean before starting recurring service?",
        a: "We recommend it — especially for country properties and new construction. The first deep clean gets the house to baseline; recurring standard cleans keep it there.",
      },
    ],
    testimonial: {
      name: "Carla J.",
      neighborhood: "Dellrose",
      service: "Deep Clean",
      body: "We're between a construction site and a hay field, so you can imagine the dust. He got window tracks I'd given up on. The 'country quiet, city clean' joke he made wasn't even wrong.",
    },
    metaTitle: "House Cleaning in Hockley, TX",
    metaDescription:
      "House cleaning in Hockley, TX — Dellrose, Jubilee, Cypress Green & acreage properties across 77447. Insured, background-checked. Deep cleans from $185.",
  },
  {
    slug: "magnolia-tx",
    city: "Magnolia",
    county: "Montgomery County",
    zips: ["77354", "77355"],
    routeNo: "04",
    stats: [
      ["County", "Montgomery"],
      ["ZIPs", "77354 · 77355"],
      ["Corridor", "FM 1488 / SH-249"],
      ["Character", "Acreage + pines"],
    ],
    intro:
      "Man With a Mop provides house cleaning in Magnolia, TX — deep cleans, standard cleans, move-in/out turnovers, and carpet cleaning for acreage homes in the pines, custom builds in High Meadow Ranch, and the new communities filling in along FM 1488 and the Aggie Expressway. One insured, background-checked man who doesn't mind a long gravel driveway.",
    localRead: [
      "Magnolia living means trees, acreage, and a little distance between you and the neighbors — and a different kind of cleaning job. Wooded lots shed pine pollen on everything every spring, country roads send dust up the porch steps, and big custom homes in High Meadow Ranch or Mostyn Manor have more square footage than the average maid service wants to deal with. We quote it straight and clean it properly.",
      "Meanwhile, Magnolia is quietly one of the fastest-growing small cities in Texas, and the new rooftops in Audubon and along the 1488 corridor bring the other half of our work here: move-in cleans on new construction and recurring service for families who moved out past The Woodlands for the trees — not for more chores. Take the Stroll downtown; leave the baseboards to the man.",
    ],
    neighborhoods: [
      "High Meadow Ranch",
      "Audubon",
      "Mostyn Manor",
      "Westwood",
      "Magnolia Ridge",
      "Escondido",
    ],
    landmarks: [
      "The Magnolia Stroll",
      "Historic 1902 Depot",
      "Texas Renaissance Festival (nearby)",
    ],
    faqs: [
      {
        q: "Do you clean large homes on acreage in Magnolia?",
        a: "Yes — acreage and custom homes are half our Magnolia work. Bigger square footage gets a confirmed quote up front instead of a surprise on the invoice, and gravel-road dust doesn't scare us.",
      },
      {
        q: "How much does house cleaning cost in Magnolia, TX?",
        a: "Standard cleans from $120, deep cleans from $185, move-in/out cleans from $210, carpet cleaning from $85 — plus 8.25% TX sales tax, always itemized. Large custom homes quote by size and condition.",
      },
      {
        q: "How do you handle spring pine pollen season?",
        a: "A deep clean in late spring is the Magnolia move — we hit window sills and tracks, ceiling fans, baseboards, and all the horizontal surfaces that yellow up. Many acreage clients pair a spring deep clean with monthly standard service.",
      },
      {
        q: "Do you cover both Magnolia ZIP codes?",
        a: "Yes — 77354 and 77355, from the FM 1488 corridor out to the acreage communities. We're about 20 minutes up from Tomball on our regular route.",
      },
    ],
    testimonial: {
      name: "Beth Anne W.",
      neighborhood: "High Meadow Ranch",
      service: "Spring Deep Clean",
      body: "Four thousand square feet in the pines and every surface was yellow with pollen. Two other companies wouldn't drive out this far. He showed up early, stayed late, and the ceiling fans finally match the ceilings again.",
    },
    metaTitle: "House Cleaning in Magnolia, TX",
    metaDescription:
      "House cleaning in Magnolia, TX — acreage homes, High Meadow Ranch, Audubon & the FM 1488 corridor. Pine-pollen deep cleans a specialty. Insured & vetted.",
  },
  {
    slug: "tomball-tx",
    city: "Tomball",
    county: "Harris County",
    zips: ["77375", "77377"],
    routeNo: "05",
    stats: [
      ["County", "Harris"],
      ["ZIPs", "77375 · 77377"],
      ["Corridor", "SH-249 Tollway"],
      ["Character", "Old town + new growth"],
    ],
    intro:
      "Man With a Mop provides house cleaning in Tomball, TX — recurring standard cleans, deep cleans, move-in/out turnovers, and carpet cleaning from the established wooded streets of Lakewood Forest to the new builds along the 249 Tollway. One vetted, insured man with a mop and an actual respect for a town that throws two German festivals a year.",
    localRead: [
      "Tomball is the old soul of the route — a real downtown with a railroad depot, antique shops, and a German Christmas Market — surrounded by some of the fastest suburban growth in Harris County since the Tomball Tollway opened. That mix shows up in the work: established homes in Lakewood Forest with decades of character (and decades of dust settling into it), next to Northpointe builds that need their first proper deep clean.",
      "Older wooded neighborhoods come with their own list — mature-tree pollen on the porch, well-lived carpets, kitchens that have hosted thirty Thanksgivings. Our carpet extraction earns its keep here, and a seasonal deep clean keeps a broken-in house feeling looked-after instead of just old.",
    ],
    neighborhoods: [
      "Lakewood Forest",
      "Northpointe",
      "Villages of Northpointe",
      "Wildwood at Northpointe",
      "Old Town Tomball",
    ],
    landmarks: [
      "Old Town Tomball",
      "Tomball Railroad Depot",
      "Germanfest",
    ],
    faqs: [
      {
        q: "How much does house cleaning cost in Tomball, TX?",
        a: "Standard cleans from $120, deep cleans from $185, move-in/out cleans from $210, and carpet cleaning from $85 — plus 8.25% TX sales tax on every itemized invoice.",
      },
      {
        q: "Do you clean older homes in established neighborhoods like Lakewood Forest?",
        a: "Happily. Established homes are honest work — more built-up dust, more character, more carpet that deserves real hot-water extraction instead of a rental machine. We treat a 1985 kitchen with the same respect as a 2025 one.",
      },
      {
        q: "Is carpet cleaning available as a standalone service in Tomball?",
        a: "Yes — carpet-only service starts at $85: hot-water extraction, pre-treatment on heavy spots, pet-odor neutralizer if you need it, and typical dry time of 4–6 hours.",
      },
      {
        q: "Which Tomball areas do you cover?",
        a: "Both ZIPs — 77375 and 77377 — including Old Town, Lakewood Forest, and the Northpointe communities along the 249 corridor. Tomball is about 20 minutes from our Cypress base.",
      },
    ],
    testimonial: {
      name: "Gene & Patty H.",
      neighborhood: "Lakewood Forest",
      service: "Deep Clean + Carpets",
      body: "Thirty-one years in this house and I can say nobody — including us — ever got it this clean. The carpets in the den look like they did when Reagan was president. Worth every penny.",
    },
    metaTitle: "House Cleaning in Tomball, TX",
    metaDescription:
      "House cleaning in Tomball, TX — Lakewood Forest, Northpointe & Old Town. Deep cleans and carpet extraction for established and new homes. Insured & vetted.",
  },
  {
    slug: "conroe-tx",
    city: "Conroe",
    county: "Montgomery County",
    zips: ["77301", "77302", "77304", "77384"],
    routeNo: "06",
    stats: [
      ["County", "Montgomery (seat)"],
      ["ZIPs", "77301–77304 +"],
      ["Corridor", "I-45 / Lake Conroe"],
      ["Character", "Lake life + boomtown"],
    ],
    intro:
      "Man With a Mop provides house cleaning in Conroe, TX — standard cleans, deep cleans, move-in/out turnovers, and carpet cleaning from downtown to the shores of Lake Conroe, including Grand Central Park, April Sound, and Graystone Hills. One insured, background-checked man serving one of the fastest-growing cities in America.",
    localRead: [
      "Conroe has been one of the fastest-growing cities in the country for a decade — the county seat more than doubled since 2010 — and all that growth means keys changing hands: move-in cleans in Grand Central Park and Harper's Preserve, move-out turnovers near downtown, and first deep cleans on houses that just got their first family.",
      "Then there's the lake. Lake Conroe homes work harder than regular houses — weekend guests, wet towels, boat-day sand, and short-term rentals that need a fast, thorough turnover between bookings. We clean lakefront properties in April Sound and around the shoreline with the speed a Friday check-in demands and the thoroughness a five-star review requires.",
    ],
    neighborhoods: [
      "Grand Central Park",
      "April Sound",
      "Graystone Hills",
      "Harper's Preserve",
      "Downtown Conroe",
      "Lake Conroe shoreline",
    ],
    landmarks: [
      "Lake Conroe",
      "Crighton Theatre",
      "Margaritaville Lake Resort",
    ],
    faqs: [
      {
        q: "Do you clean lake houses and short-term rentals on Lake Conroe?",
        a: "Yes — lake-home turnovers are a Conroe specialty. We handle guest-ready cleans for waterfront homes and rental properties: full reset, linens areas, and the sand that always finds its way in from the dock.",
      },
      {
        q: "How much does house cleaning cost in Conroe, TX?",
        a: "Standard cleans from $120, deep cleans from $185, move-in/out cleans from $210, carpet cleaning from $85 — plus 8.25% TX sales tax, itemized on every invoice. Lakefront and larger properties get a confirmed quote first.",
      },
      {
        q: "Conroe is the far end of your route — do you really cover it?",
        a: "We do. Conroe anchors the northeast end of our corridor, about 35–40 minutes from our base via SH-249 and FM 1488. We batch Conroe jobs so the drive never affects your scheduled window.",
      },
      {
        q: "Can you do recurring cleans for a weekend lake house?",
        a: "That's a common request — monthly or before-the-season deep cleans for weekend places, plus on-call turnovers when you've had guests. Tell us the gate code situation and we'll work out the rest.",
      },
    ],
    testimonial: {
      name: "Mike D.",
      neighborhood: "April Sound",
      service: "Rental Turnover",
      body: "We rent the lake house out most summer weekends. He turns it around between guests better than the 'professional' service we used to pay double for. My five-star streak is honestly half his.",
    },
    metaTitle: "House Cleaning in Conroe, TX",
    metaDescription:
      "House cleaning in Conroe, TX — Lake Conroe homes, Grand Central Park, April Sound & downtown. Rental turnovers and deep cleans. Insured & background-checked.",
  },
];

export function getServiceArea(slug: string): ServiceArea | undefined {
  return SERVICE_AREAS.find((a) => a.slug === slug);
}

export function getAreaByCity(city: string): ServiceArea | undefined {
  return SERVICE_AREAS.find((a) => a.city.toLowerCase() === city.toLowerCase());
}
