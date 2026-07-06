import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, Check } from "lucide-react";
import { SERVICE_TYPES, COMPANY_PHONE } from "@/lib/constants";
import { SERVICE_AREAS } from "@/data/service-areas";

export const metadata: Metadata = {
  title: "House Cleaning in Northwest Houston, TX",
  description:
    "House cleaning across Cypress, Katy, Hockley, Magnolia, Tomball, and Conroe, TX. One insured, background-checked man. Honest pricing. Booking under two minutes.",
  alternates: { canonical: "/" },
};

const PHONE_HREF = `tel:${COMPANY_PHONE.replace(/\D/g, "")}`;

const SERVICES = [
  {
    key: "standard_clean",
    blurb: "Kitchens, baths, floors, surfaces. The weekly reset.",
  },
  {
    key: "deep_clean",
    blurb: "Baseboards, blinds, behind things. The full once-over.",
  },
  {
    key: "move_in_out",
    blurb: "Empty-house turnover, deposit-back standard.",
  },
] as const;

const REASONS = [
  {
    n: "01",
    title: "Vetted, insured, background-checked",
    body: "Before a man steps into your home, we've checked him out top to bottom. Insured, every job.",
  },
  {
    n: "02",
    title: "On time. We text first.",
    body: "You get a text the day before and the morning of. He shows up in the window. No four-hour mystery windows.",
  },
  {
    n: "03",
    title: "Same man, every visit",
    body: "You get to know your guy — he gets to know your home, your dog, and exactly how you like the kitchen done.",
  },
];

const MARQUEE_ITEMS = [
  "Standard Clean",
  "Deep Clean",
  "Move-In / Out",
  "Homes & Businesses",
  "Cypress to Conroe",
  "Insured",
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b-2 border-[#1B1F24]">
        {/* Background video */}
        <video
          aria-hidden="true"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/herovid.mp4" type="video/mp4" />
        </video>
        {/* Cream wash — heavier on left under the headline, lighter on the right */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#F6F1E7]/90 via-[#F6F1E7]/70 to-[#F6F1E7]/45"
        />
        {/* Bottom fade into next section */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#F6F1E7]"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 pt-14 pb-16 lg:pt-20 lg:pb-24 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-10 items-center">
          {/* Left — headline */}
          <div>
            <p
              className="site-reveal flex items-center gap-2.5 font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#1B1F24]/70"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="size-2 bg-[#E2501C]" />
              Home &amp; business cleaning — Northwest Houston, TX
            </p>

            <h1 className="mt-6 font-extrabold uppercase leading-[0.92] tracking-[-0.025em] text-[clamp(3.2rem,9vw,6.8rem)]">
              <span className="site-reveal block" style={{ animationDelay: "0.15s" }}>
                A man.
              </span>
              <span
                className="site-reveal block text-transparent [-webkit-text-stroke:2px_#1B1F24]"
                style={{ animationDelay: "0.28s" }}
              >
                A mop.
              </span>
              <span
                className="site-reveal block text-[#E2501C]"
                style={{ animationDelay: "0.41s" }}
              >
                A spotless home.
              </span>
            </h1>

            <p
              className="site-reveal mt-7 max-w-md text-[17px] leading-relaxed text-[#1B1F24]/75"
              style={{ animationDelay: "0.55s" }}
            >
              Standard cleans, deep cleans, and move-out turnovers across
              Cypress, Katy, Tomball, and the northwest Houston corridor. A
              vetted, insured man shows up on time, mop in hand, and gets it
              done.
            </p>

            <div
              className="site-reveal mt-9 flex flex-col sm:flex-row gap-3"
              style={{ animationDelay: "0.65s" }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#1B1F24] hover:bg-[#E2501C] text-[#F6F1E7] font-site-utility text-xs uppercase tracking-[0.18em] px-7 py-4 transition-colors"
              >
                Book a clean — from $120
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center border-2 border-[#1B1F24] hover:bg-[#1B1F24] hover:text-[#F6F1E7] font-site-utility text-xs uppercase tracking-[0.18em] px-7 py-4 transition-colors"
              >
                Call {COMPANY_PHONE}
              </a>
            </div>

            <div
              className="site-reveal mt-8 flex items-center gap-2.5 font-site-utility text-[11px] uppercase tracking-[0.14em] text-[#1B1F24]/70"
              style={{ animationDelay: "0.75s" }}
            >
              <span className="flex items-center gap-0.5 text-[#E2501C]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </span>
              4.9 · 200+ Houston-area households · Insured
            </div>
          </div>

          {/* Right — the work order ticket */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div
              className="site-reveal relative rotate-[1.5deg] bg-white border-2 border-[#1B1F24] shadow-[8px_8px_0_0_#1B1F24] p-7"
              style={{ animationDelay: "0.45s" }}
            >
              <div className="flex items-baseline justify-between border-b-2 border-[#1B1F24] pb-4">
                <p className="font-extrabold uppercase tracking-tight text-xl">
                  Work Order
                </p>
                <p className="font-site-utility text-xs text-[#1B1F24]/60">
                  Nº 0042
                </p>
              </div>

              <dl className="mt-5 space-y-4 font-site-utility text-[12px] uppercase tracking-[0.1em]">
                {[
                  ["Client", "The Hendersons"],
                  ["Location", "Cypress, TX"],
                  ["Service", "Deep Clean — 4–6 HRS"],
                  ["Man", "Yes (1)"],
                  ["Mop", "Yes (1)"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between gap-4 border-b border-dashed border-[#1B1F24]/25 pb-3"
                  >
                    <dt className="text-[#1B1F24]/55">{k}</dt>
                    <dd className="font-semibold text-right">{v}</dd>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-4 pt-1">
                  <dt className="text-[#1B1F24]/55">Status</dt>
                  <dd className="flex items-center gap-1.5 font-semibold text-[#E2501C]">
                    <Check className="size-4" strokeWidth={3} />
                    Spotless
                  </dd>
                </div>
              </dl>

              {/* Ticket notches */}
              <span className="absolute -left-[11px] top-1/2 size-5 rounded-full bg-[#F6F1E7] border-r-2 border-[#1B1F24]" />
              <span className="absolute -right-[11px] top-1/2 size-5 rounded-full bg-[#F6F1E7] border-l-2 border-[#1B1F24]" />
            </div>

            {/* Rubber stamp */}
            <div className="site-stamp absolute -top-7 -left-3 sm:-left-8">
              <span className="inline-block border-[2.5px] border-[#E2501C] text-[#E2501C] rounded-full px-5 py-2.5 font-site-utility text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] bg-[#F6F1E7]/85">
                It&apos;s as if a man cleaned it&nbsp;™
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────────────── */}
      <section
        className="bg-[#1B1F24] text-[#F6F1E7] overflow-hidden border-b-2 border-[#1B1F24]"
        aria-hidden="true"
      >
        <div className="flex whitespace-nowrap py-3.5 site-marquee-track w-max">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex shrink-0">
              {MARQUEE_ITEMS.map((item) => (
                <span
                  key={`${dup}-${item}`}
                  className="flex items-center font-extrabold uppercase tracking-tight text-lg"
                >
                  <span className="px-6">{item}</span>
                  <span className="text-[#E2501C]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── RATE CARD ────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#E2501C]">
                The rate card
              </p>
              <h2 className="mt-3 font-extrabold uppercase tracking-[-0.02em] leading-none text-[clamp(2.2rem,5vw,3.8rem)]">
                Pick your clean.
              </h2>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 font-site-utility text-[11px] uppercase tracking-[0.18em] text-[#1B1F24]/70 hover:text-[#E2501C] transition-colors"
            >
              Full service details
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="border-t-2 border-[#1B1F24]">
            {SERVICES.map((s, i) => {
              const svc = SERVICE_TYPES[s.key];
              return (
                <Link
                  key={s.key}
                  href="/services"
                  className="group grid grid-cols-[auto_1fr_auto] sm:grid-cols-[64px_1.2fr_1fr_auto_24px] items-center gap-x-5 gap-y-1 border-b-2 border-[#1B1F24] py-6 sm:py-7 transition-colors hover:bg-white"
                >
                  <span className="font-site-utility text-xs text-[#1B1F24]/45 row-span-2 sm:row-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-extrabold uppercase tracking-tight text-xl sm:text-2xl group-hover:text-[#E2501C] transition-colors">
                    {svc.label}
                  </h3>
                  <p className="hidden sm:block font-site-utility text-[11px] uppercase tracking-[0.12em] text-[#1B1F24]/55">
                    {s.blurb} · {svc.durationLabel}
                  </p>
                  <p className="font-extrabold text-xl sm:text-2xl text-right">
                    ${svc.price}
                  </p>
                  <ArrowRight className="hidden sm:block size-4 text-[#1B1F24]/30 transition-all group-hover:text-[#E2501C] group-hover:translate-x-1" />
                  <p className="col-start-2 sm:hidden font-site-utility text-[10px] uppercase tracking-[0.12em] text-[#1B1F24]/55">
                    {s.blurb}
                  </p>
                </Link>
              );
            })}
          </div>

          <p className="mt-5 max-w-2xl font-site-utility text-[10px] uppercase tracking-[0.14em] text-[#1B1F24]/45">
            Prices shown are starting estimates — your final quote depends on
            square footage and how many rooms you have. Plus 8.25% Texas sales
            tax, itemized on every invoice.
          </p>
        </div>
      </section>

      {/* ── WHY A MAN WITH A MOP ─────────────────────────────────────── */}
      <section className="border-y-2 border-[#1B1F24] bg-[#EDE6D6] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-32 self-start">
            <p className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#E2501C]">
              The pitch
            </p>
            <h2 className="mt-3 font-extrabold uppercase tracking-[-0.02em] leading-[0.95] text-[clamp(2.2rem,5vw,3.8rem)]">
              Why a man
              <br />
              with a mop?
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-[#1B1F24]/70">
              No rotating crews, no agency runaround. One reliable man, properly
              vetted, who treats your home like a job worth doing right.
            </p>
          </div>

          <div>
            {REASONS.map((r) => (
              <div
                key={r.n}
                className="grid grid-cols-[56px_1fr] gap-5 border-t-2 border-[#1B1F24] py-8 first:border-t-0 first:pt-0 lg:first:pt-2"
              >
                <span className="font-site-utility text-sm text-[#E2501C] pt-1">
                  {r.n}
                </span>
                <div>
                  <h3 className="font-extrabold uppercase tracking-tight text-lg sm:text-xl">
                    {r.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-[#1B1F24]/70">
                    {r.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR BUSINESSES ───────────────────────────────────────────── */}
      <section className="border-b-2 border-[#1B1F24] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#E2501C]">
              For businesses
            </p>
            <h2 className="mt-3 font-extrabold uppercase tracking-[-0.02em] leading-[0.95] text-[clamp(2.2rem,5vw,3.8rem)]">
              Not just homes.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#1B1F24]/70">
              The man cleans small offices, salons, studios, retail spaces, and
              short-term rentals across Northwest Houston too. After-hours or
              before you open, on a recurring schedule that keeps your space
              sharp without getting in the way of business.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 bg-[#1B1F24] hover:bg-[#E2501C] text-[#F6F1E7] font-site-utility text-xs uppercase tracking-[0.18em] px-7 py-4 transition-colors"
              >
                Get a business quote
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-px bg-[#1B1F24] border-2 border-[#1B1F24]">
            {[
              "Offices & suites",
              "Salons & studios",
              "Retail & storefronts",
              "Short-term rentals",
              "Lobbies & waiting rooms",
              "Move-out turnovers",
            ].map((item) => (
              <li
                key={item}
                className="bg-[#F6F1E7] px-5 py-6 font-site-utility text-[12px] uppercase tracking-[0.1em] font-semibold flex items-start gap-2.5"
              >
                <Check
                  className="size-4 text-[#E2501C] mt-0.5 shrink-0"
                  strokeWidth={3}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PULL QUOTE ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-1 text-[#E2501C]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-current" />
            ))}
          </div>
          <blockquote className="mt-7 font-extrabold uppercase tracking-[-0.015em] leading-[1.1] text-[clamp(1.6rem,4vw,2.9rem)]">
            “I told my husband a man was coming to clean the house. He laughed.
            Then he saw the baseboards.”
          </blockquote>
          <p className="mt-6 font-site-utility text-[11px] uppercase tracking-[0.2em] text-[#1B1F24]/55">
            — Dana R., Magnolia TX · Deep Clean, March 2026
          </p>
        </div>
      </section>

      {/* ── SERVICE AREA ─────────────────────────────────────────────── */}
      <section className="bg-[#1B1F24] text-[#F6F1E7] border-y-2 border-[#1B1F24] py-20 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#E2501C]">
            Where the man goes
          </p>
          <div className="mt-8 flex flex-wrap items-baseline gap-x-7 gap-y-3">
            {SERVICE_AREAS.map((area, i) => (
              <span key={area.slug} className="flex items-baseline gap-7">
                <Link
                  href={`/service-areas/${area.slug}`}
                  className="font-extrabold uppercase tracking-tight leading-none text-[clamp(2rem,5.5vw,4.2rem)] text-[#F6F1E7]/90 hover:text-[#E2501C] transition-colors"
                >
                  {area.city}
                </Link>
                {i < SERVICE_AREAS.length - 1 && (
                  <span className="text-[#E2501C] text-2xl" aria-hidden="true">
                    ✦
                  </span>
                )}
              </span>
            ))}
          </div>
          <p className="mt-8 font-site-utility text-[11px] uppercase tracking-[0.16em] text-[#F6F1E7]/50">
            Six communities, one phone call. {COMPANY_PHONE} ·{" "}
            <Link
              href="/service-areas"
              className="text-[#F6F1E7]/70 hover:text-[#E2501C] underline underline-offset-4 transition-colors"
            >
              See the full route sheet
            </Link>
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-[#E2501C] text-[#1B1F24]">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 py-20 lg:py-28 text-center">
          <h2 className="font-extrabold uppercase tracking-[-0.02em] leading-[0.95] text-[clamp(2.6rem,7vw,5.2rem)]">
            Ready for a man
            <br />
            to clean it?
          </h2>
          <p className="mt-6 font-site-utility text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#1B1F24]/75">
            Book in under two minutes · Most homes scheduled within 48 hours
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-[#1B1F24] text-[#F6F1E7] hover:bg-[#F6F1E7] hover:text-[#1B1F24] font-site-utility text-xs uppercase tracking-[0.18em] px-8 py-4 transition-colors"
            >
              Book a clean
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center border-2 border-[#1B1F24] hover:bg-[#1B1F24] hover:text-[#F6F1E7] font-site-utility text-xs uppercase tracking-[0.18em] px-8 py-4 transition-colors"
            >
              {COMPANY_PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
