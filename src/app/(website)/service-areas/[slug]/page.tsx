import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MapPin, Star } from "lucide-react";
import { SERVICE_AREAS, getServiceArea } from "@/data/service-areas";
import {
  SERVICE_TYPES,
  COMPANY_NAME,
  COMPANY_PHONE,
  COMPANY_EMAIL,
} from "@/lib/constants";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://manwithamop.com";
const PHONE_HREF = `tel:${COMPANY_PHONE.replace(/\D/g, "")}`;

const PAGE_SERVICES = [
  { key: "standard_clean", slug: "standard-clean", note: "The recurring reset" },
  { key: "deep_clean", slug: "deep-clean", note: "Baseboards to ceiling fans" },
  { key: "move_in_out", slug: "move-in-out-clean", note: "Deposit-back standard" },
  { key: "carpet_only", slug: "carpet-cleaning", note: "Hot-water extraction" },
] as const;

export function generateStaticParams() {
  return SERVICE_AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: `/service-areas/${area.slug}` },
  };
}

function buildJsonLd(area: NonNullable<ReturnType<typeof getServiceArea>>) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "House Cleaning",
    name: `House Cleaning in ${area.city}, TX`,
    description: area.intro,
    url: `${SITE_URL}/service-areas/${area.slug}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: COMPANY_NAME,
      telephone: COMPANY_PHONE,
      email: COMPANY_EMAIL,
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cypress",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "City",
      name: `${area.city}, TX`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Cleaning Services in ${area.city}, TX`,
      itemListElement: PAGE_SERVICES.map((s) => ({
        "@type": "Offer",
        price: SERVICE_TYPES[s.key].price,
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: `${SERVICE_TYPES[s.key].label} — ${area.city}, TX`,
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return [serviceSchema, faqSchema];
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) notFound();

  const siblings = SERVICE_AREAS.filter((a) => a.slug !== area.slug);

  return (
    <>
      {buildJsonLd(area).map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="border-b-2 border-[#1B1F24]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-14 pb-14">
          <p className="flex items-center gap-2.5 font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#1B1F24]/70">
            <span className="size-2 bg-[#E2501C]" />
            Route Nº {area.routeNo} — {area.county}
          </p>
          <h1 className="mt-5 font-extrabold uppercase tracking-[-0.025em] leading-[0.92] text-[clamp(2.6rem,7.5vw,5.6rem)]">
            House cleaning in
            <br />
            <span className="text-[#E2501C]">{area.city}, TX.</span>
          </h1>

          {/* Direct-answer intro — written for AI citability */}
          <p className="mt-7 max-w-2xl text-[16px] leading-relaxed text-[#1B1F24]/80">
            {area.intro}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 bg-[#1B1F24] hover:bg-[#E2501C] text-[#F6F1E7] font-site-utility text-xs uppercase tracking-[0.18em] px-7 py-4 transition-colors"
            >
              Get a free quote in {area.city}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center border-2 border-[#1B1F24] hover:bg-[#1B1F24] hover:text-[#F6F1E7] font-site-utility text-xs uppercase tracking-[0.18em] px-7 py-4 transition-colors"
            >
              Call {COMPANY_PHONE}
            </a>
          </div>

          {/* Spec strip */}
          <dl className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1B1F24] border-2 border-[#1B1F24] max-w-3xl">
            {area.stats.map(([k, v]) => (
              <div key={k} className="bg-[#F6F1E7] px-4 py-3.5">
                <dt className="font-site-utility text-[9px] uppercase tracking-[0.2em] text-[#1B1F24]/45">
                  {k}
                </dt>
                <dd className="mt-1 font-site-utility text-[11px] uppercase tracking-[0.08em] font-semibold">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── LOCAL READ ───────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-32 self-start">
            <p className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#E2501C]">
              The local read
            </p>
            <h2 className="mt-3 font-extrabold uppercase tracking-[-0.02em] leading-[0.95] text-[clamp(2rem,4.5vw,3.2rem)]">
              How the man
              <br />
              cleans {area.city}.
            </h2>
            <ul className="mt-7 space-y-2.5">
              {area.landmarks.map((l) => (
                <li
                  key={l}
                  className="flex items-center gap-2.5 font-site-utility text-[11px] uppercase tracking-[0.14em] text-[#1B1F24]/60"
                >
                  <MapPin className="size-3.5 text-[#E2501C] shrink-0" />
                  {l}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6 text-[16px] leading-relaxed text-[#1B1F24]/80">
            <p>{area.localRead[0]}</p>
            <p>{area.localRead[1]}</p>
          </div>
        </div>
      </section>

      {/* ── NEIGHBORHOODS ────────────────────────────────────────────── */}
      <section className="border-y-2 border-[#1B1F24] bg-[#EDE6D6] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#E2501C]">
            Coverage — ZIP {area.zips.join(" · ")}
          </p>
          <h2 className="mt-3 font-extrabold uppercase tracking-[-0.02em] leading-none text-[clamp(1.9rem,4.5vw,3rem)]">
            Where we clean in {area.city}.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {area.neighborhoods.map((n) => (
              <span
                key={n}
                className="border-2 border-[#1B1F24] bg-white px-4 py-2.5 font-site-utility text-[11px] uppercase tracking-[0.14em] font-semibold"
              >
                {n}
              </span>
            ))}
          </div>
          <p className="mt-6 font-site-utility text-[10px] uppercase tracking-[0.14em] text-[#1B1F24]/50">
            Not listed? If you&apos;re in {area.zips.join(" or ")}, you&apos;re
            covered — text us your address.
          </p>
        </div>
      </section>

      {/* ── SERVICES IN CITY ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <h2 className="font-extrabold uppercase tracking-[-0.02em] leading-none text-[clamp(1.9rem,4.5vw,3rem)]">
              The {area.city} rate card.
            </h2>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 font-site-utility text-[11px] uppercase tracking-[0.18em] text-[#1B1F24]/70 hover:text-[#E2501C] transition-colors"
            >
              Full service details
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="border-t-2 border-[#1B1F24]">
            {PAGE_SERVICES.map((s) => {
              const svc = SERVICE_TYPES[s.key];
              return (
                <Link
                  key={s.key}
                  href={`/services/${s.slug}`}
                  className="group grid grid-cols-[1fr_auto] sm:grid-cols-[1.2fr_1fr_auto_24px] items-center gap-x-5 gap-y-1 border-b-2 border-[#1B1F24] py-5 sm:py-6 transition-colors hover:bg-white"
                >
                  <h3 className="font-extrabold uppercase tracking-tight text-lg sm:text-xl group-hover:text-[#E2501C] transition-colors">
                    {svc.label}
                  </h3>
                  <p className="hidden sm:block font-site-utility text-[11px] uppercase tracking-[0.12em] text-[#1B1F24]/55">
                    {s.note} · ~{svc.duration} hrs
                  </p>
                  <p className="font-extrabold text-lg sm:text-xl text-right">
                    ${svc.price}
                  </p>
                  <ArrowRight className="hidden sm:block size-4 text-[#1B1F24]/30 transition-all group-hover:text-[#E2501C] group-hover:translate-x-1" />
                </Link>
              );
            })}
          </div>
          <p className="mt-4 font-site-utility text-[10px] uppercase tracking-[0.14em] text-[#1B1F24]/45">
            Plus 8.25% Texas sales tax — itemized on every invoice.
          </p>
        </div>
      </section>

      {/* ── FIELD REPORT ─────────────────────────────────────────────── */}
      <section className="border-y-2 border-[#1B1F24] bg-[#EDE6D6] py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <p className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#E2501C] text-center">
            Field report — {area.city}
          </p>
          <div className="mt-8 bg-white border-2 border-[#1B1F24] shadow-[8px_8px_0_0_#1B1F24] p-7 sm:p-9 rotate-[-0.5deg]">
            <div className="flex items-center justify-between gap-4 border-b-2 border-dashed border-[#1B1F24]/25 pb-4">
              <div className="font-site-utility text-[10px] uppercase tracking-[0.14em] text-[#1B1F24]/55 space-y-1">
                <p>
                  Client:{" "}
                  <span className="text-[#1B1F24] font-semibold">
                    {area.testimonial.name}
                  </span>
                </p>
                <p>
                  Location:{" "}
                  <span className="text-[#1B1F24] font-semibold">
                    {area.testimonial.neighborhood}, {area.city} TX
                  </span>
                </p>
                <p>
                  Job:{" "}
                  <span className="text-[#1B1F24] font-semibold">
                    {area.testimonial.service}
                  </span>
                </p>
              </div>
              <span className="flex items-center gap-0.5 text-[#E2501C] shrink-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </span>
            </div>
            <p className="mt-5 text-[15px] leading-relaxed text-[#1B1F24]/80">
              “{area.testimonial.body}”
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <p className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#E2501C]">
            Straight answers
          </p>
          <h2 className="mt-3 font-extrabold uppercase tracking-[-0.02em] leading-none text-[clamp(1.9rem,4.5vw,3rem)]">
            {area.city} questions.
          </h2>
          <div className="mt-10 border-t-2 border-[#1B1F24]">
            {area.faqs.map((f) => (
              <details key={f.q} className="group border-b-2 border-[#1B1F24]">
                <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-extrabold uppercase tracking-tight text-base sm:text-lg">
                    {f.q}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="shrink-0 size-7 border-2 border-[#1B1F24] flex items-center justify-center font-site-utility text-sm transition-colors group-open:bg-[#E2501C] group-open:border-[#E2501C] group-open:text-[#F6F1E7]"
                  >
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="pb-6 pr-12 text-[15px] leading-relaxed text-[#1B1F24]/75">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALSO ON THE ROUTE ────────────────────────────────────────── */}
      <section className="border-t-2 border-[#1B1F24] bg-[#1B1F24] text-[#F6F1E7] py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#E2501C]">
            Also on the route
          </p>
          <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-3">
            {siblings.map((s) => (
              <Link
                key={s.slug}
                href={`/service-areas/${s.slug}`}
                className="font-extrabold uppercase tracking-tight text-2xl sm:text-3xl text-[#F6F1E7]/80 hover:text-[#E2501C] transition-colors"
              >
                {s.city}
              </Link>
            ))}
            <Link
              href="/service-areas"
              className="font-site-utility text-[11px] uppercase tracking-[0.18em] text-[#F6F1E7]/50 hover:text-[#E2501C] transition-colors"
            >
              Full route sheet →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-[#E2501C] text-[#1B1F24]">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 py-16 lg:py-20 text-center">
          <h2 className="font-extrabold uppercase tracking-[-0.02em] leading-[0.95] text-[clamp(2.2rem,5.5vw,4rem)]">
            {area.city}, meet
            <br />
            the man.
          </h2>
          <p className="mt-5 font-site-utility text-[11px] uppercase tracking-[0.18em] text-[#1B1F24]/75">
            Free quotes · Most homes scheduled within 48 hours
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-[#1B1F24] text-[#F6F1E7] hover:bg-[#F6F1E7] hover:text-[#1B1F24] font-site-utility text-xs uppercase tracking-[0.18em] px-8 py-4 transition-colors"
            >
              Book a clean in {area.city}
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
