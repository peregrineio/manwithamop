import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import {
  RESIDENTIAL_SERVICES,
  ADDON_SERVICES,
  type ServiceDetail,
} from "@/data/services";

export const metadata: Metadata = {
  title: "Cleaning Services & Rate Card — Northwest Houston",
  description:
    "Honest, posted pricing for house and business cleaning across Northwest Houston — standard, deep, move-in/out, recurring, plus a window add-on. Free quotes.",
  alternates: { canonical: "/services" },
};

function ServiceCard({ s, index }: { s: ServiceDetail; index: number }) {
  return (
    <Link
      href={`/services/${s.slug}`}
      className="group relative bg-white border-2 border-[#1B1F24] shadow-[6px_6px_0_0_#1B1F24] hover:shadow-[8px_8px_0_0_#E2501C] transition-shadow p-7 sm:p-8 flex flex-col"
    >
      <div className="flex items-start justify-between gap-4 border-b-2 border-[#1B1F24] pb-5">
        <div>
          <p className="font-site-utility text-xs text-[#1B1F24]/45">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-1.5 font-extrabold uppercase tracking-tight text-2xl group-hover:text-[#E2501C] transition-colors">
            {s.name}
          </h3>
          <p className="mt-1 font-site-utility text-[10px] uppercase tracking-[0.14em] text-[#1B1F24]/45">
            {s.tagline}
          </p>
        </div>
        <div className="text-right shrink-0">
          <p className="font-extrabold text-3xl text-[#E2501C] leading-none">
            {s.priceLabel}
          </p>
          <p className="mt-1.5 font-site-utility text-[10px] uppercase tracking-[0.12em] text-[#1B1F24]/50">
            {s.priceNote}
          </p>
        </div>
      </div>

      <p className="mt-5 font-site-utility text-[10px] uppercase tracking-[0.2em] text-[#1B1F24]/45">
        What the man does
      </p>
      <ul className="mt-3.5 space-y-3 flex-1">
        {s.includes.slice(0, 5).map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-[14px] leading-snug text-[#1B1F24]/80"
          >
            <Check
              className="size-4 text-[#E2501C] mt-0.5 shrink-0"
              strokeWidth={3}
            />
            {item}
          </li>
        ))}
      </ul>

      <span className="mt-8 inline-flex items-center justify-center gap-2.5 bg-[#1B1F24] group-hover:bg-[#E2501C] text-[#F6F1E7] font-site-utility text-[11px] uppercase tracking-[0.18em] px-6 py-3.5 transition-colors">
        See {s.shortName} details
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b-2 border-[#1B1F24]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-14">
          <p className="flex items-center gap-2.5 font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#1B1F24]/70">
            <span className="size-2 bg-[#E2501C]" />
            Services — the full rate card
          </p>
          <h1 className="mt-5 font-extrabold uppercase tracking-[-0.025em] leading-[0.95] text-[clamp(2.8rem,7vw,5.2rem)]">
            Honest pricing.
            <br />
            <span className="text-[#E2501C]">Real cleans.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-[#1B1F24]/75">
            Every clean includes our 24-hour satisfaction guarantee. Not happy?
            The man comes back at no charge. Tap any service for the full
            checklist and answers.
          </p>
        </div>
      </section>

      {/* Residential */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 className="font-extrabold uppercase tracking-[-0.02em] leading-none text-[clamp(1.7rem,4vw,2.6rem)]">
              Residential cleaning
            </h2>
            <p className="hidden sm:block font-site-utility text-[10px] uppercase tracking-[0.16em] text-[#1B1F24]/45">
              {RESIDENTIAL_SERVICES.length} services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {RESIDENTIAL_SERVICES.map((s, i) => (
              <ServiceCard key={s.slug} s={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 className="font-extrabold uppercase tracking-[-0.02em] leading-none text-[clamp(1.7rem,4vw,2.6rem)]">
              Add-ons & upsells
            </h2>
            <p className="hidden sm:block font-site-utility text-[10px] uppercase tracking-[0.16em] text-[#1B1F24]/45">
              Best paired with a clean
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {ADDON_SERVICES.map((s, i) => (
              <ServiceCard
                key={s.slug}
                s={s}
                index={RESIDENTIAL_SERVICES.length + i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t-2 border-[#1B1F24] bg-[#EDE6D6] py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
          <h2 className="font-extrabold uppercase tracking-[-0.02em] leading-none text-[clamp(1.9rem,4.5vw,3rem)]">
            Not sure which clean you need?
          </h2>
          <p className="mt-4 font-site-utility text-[11px] uppercase tracking-[0.18em] text-[#1B1F24]/60">
            Tell us about your home — we&apos;ll recommend the right fit
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2.5 bg-[#1B1F24] hover:bg-[#E2501C] text-[#F6F1E7] font-site-utility text-xs uppercase tracking-[0.18em] px-8 py-4 transition-colors"
          >
            Get a quote
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
