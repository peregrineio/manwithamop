import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Plus, Star } from "lucide-react";
import {
  SERVICES,
  getService,
  type ServiceDetail,
} from "@/data/services";
import { SERVICE_AREAS } from "@/data/service-areas";
import { COMPANY_NAME, COMPANY_PHONE, COMPANY_EMAIL } from "@/lib/constants";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://manwithamop.com";
const PHONE_HREF = `tel:${COMPANY_PHONE.replace(/\D/g, "")}`;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return {};
  return {
    title: svc.metaTitle,
    description: svc.metaDescription,
    alternates: { canonical: `/services/${svc.slug}` },
  };
}

function buildJsonLd(svc: ServiceDetail) {
  const offer =
    svc.price != null
      ? { "@type": "Offer", price: svc.price, priceCurrency: "USD" }
      : {
          "@type": "Offer",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: svc.tiers?.[0]?.price ?? 40,
            priceCurrency: "USD",
          },
        };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: svc.name,
    name: `${svc.name} — Northwest Houston, TX`,
    description: svc.intro,
    url: `${SITE_URL}/services/${svc.slug}`,
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
    areaServed: SERVICE_AREAS.map((a) => ({
      "@type": "City",
      name: `${a.city}, TX`,
    })),
    offers: offer,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: svc.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return [serviceSchema, faqSchema];
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) notFound();

  const siblings = SERVICES.filter((s) => s.slug !== svc.slug);

  return (
    <>
      {buildJsonLd(svc).map((schema, i) => (
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
            Service Nº {svc.routeNo} — {svc.badge}
          </p>
          <h1 className="mt-5 font-extrabold uppercase tracking-[-0.025em] leading-[0.92] text-[clamp(2.6rem,7.5vw,5.6rem)]">
            {svc.name}
            <span className="text-[#E2501C]">.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-[16px] leading-relaxed text-[#1B1F24]/80">
            {svc.intro}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 bg-[#1B1F24] hover:bg-[#E2501C] text-[#F6F1E7] font-site-utility text-xs uppercase tracking-[0.18em] px-7 py-4 transition-colors"
            >
              Book a {svc.shortName} Clean
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
            {(
              [
                ["Price", svc.priceLabel],
                ["Details", svc.priceNote],
                ["Best for", svc.bestFor],
                ["Tax", "8.25% itemized"],
              ] as [string, string][]
            ).map(([k, v]) => (
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

      {/* ── WHAT'S INCLUDED ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-32 self-start">
            <p className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#E2501C]">
              The work order
            </p>
            <h2 className="mt-3 font-extrabold uppercase tracking-[-0.02em] leading-[0.95] text-[clamp(2rem,4.5vw,3.2rem)]">
              What the
              <br />
              man does.
            </h2>
            <div className="mt-7 inline-flex flex-col gap-1 border-2 border-[#1B1F24] bg-white px-5 py-4">
              <span className="font-site-utility text-[10px] uppercase tracking-[0.18em] text-[#1B1F24]/45">
                Starts at
              </span>
              <span className="font-extrabold text-3xl text-[#E2501C] leading-none">
                {svc.priceLabel}
              </span>
              <span className="mt-1 font-site-utility text-[10px] uppercase tracking-[0.12em] text-[#1B1F24]/55">
                {svc.priceNote}
              </span>
            </div>
          </div>

          <div>
            <ul className="border-t-2 border-[#1B1F24]">
              {svc.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3.5 border-b-2 border-[#1B1F24] py-4 text-[16px] leading-snug text-[#1B1F24]/85"
                >
                  <Check
                    className="size-5 text-[#E2501C] mt-0.5 shrink-0"
                    strokeWidth={3}
                  />
                  {item}
                </li>
              ))}
            </ul>

            {/* Standard-clean upsell — what steps up to a Deep Clean */}
            {svc.excludes && svc.excludes.length > 0 && (
              <div className="mt-8 border-2 border-[#1B1F24] bg-[#EDE6D6] p-6 sm:p-7">
                <p className="font-site-utility text-[10px] uppercase tracking-[0.2em] text-[#1B1F24]/55">
                  Want these too? That&apos;s a Deep Clean
                </p>
                <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {svc.excludes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[14px] leading-snug text-[#1B1F24]/70"
                    >
                      <Plus className="size-4 text-[#1B1F24]/40 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services/deep-clean"
                  className="group mt-6 inline-flex items-center gap-2 font-site-utility text-[11px] uppercase tracking-[0.18em] text-[#1B1F24] hover:text-[#E2501C] transition-colors"
                >
                  See the Deep Clean
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            )}

            {/* Add-on — pairs well with */}
            {svc.pairsWith && svc.pairsWith.length > 0 && (
              <div className="mt-8 border-2 border-[#1B1F24] bg-[#EDE6D6] p-6 sm:p-7">
                <p className="font-site-utility text-[10px] uppercase tracking-[0.2em] text-[#1B1F24]/55">
                  Pairs well with
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {svc.pairsWith.map((label) => {
                    const target = SERVICES.find((s) => s.name === label);
                    const inner = (
                      <span className="flex items-center gap-2 border-2 border-[#1B1F24] bg-white px-4 py-2.5 font-site-utility text-[11px] uppercase tracking-[0.14em] font-semibold transition-colors group-hover:bg-[#1B1F24] group-hover:text-[#F6F1E7]">
                        {label}
                        <ArrowRight className="size-3.5" />
                      </span>
                    );
                    return target ? (
                      <Link
                        key={label}
                        href={`/services/${target.slug}`}
                        className="group"
                      >
                        {inner}
                      </Link>
                    ) : (
                      <span key={label} className="group">
                        {inner}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── RECURRING TIERS ──────────────────────────────────────────── */}
      {svc.tiers && svc.tiers.length > 0 && (
        <section className="border-y-2 border-[#1B1F24] bg-[#EDE6D6] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#E2501C]">
              Pick your cadence
            </p>
            <h2 className="mt-3 font-extrabold uppercase tracking-[-0.02em] leading-none text-[clamp(1.9rem,4.5vw,3rem)]">
              How often the
              <br />
              man comes back.
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {svc.tiers.map((t) => (
                <div
                  key={t.frequency}
                  className={
                    "relative bg-white border-2 border-[#1B1F24] p-7 flex flex-col " +
                    (t.popular
                      ? "shadow-[8px_8px_0_0_#E2501C]"
                      : "shadow-[6px_6px_0_0_#1B1F24]")
                  }
                >
                  {t.popular && (
                    <span className="absolute -top-3 left-6 bg-[#E2501C] text-[#F6F1E7] font-site-utility text-[9px] uppercase tracking-[0.18em] px-3 py-1">
                      Best value
                    </span>
                  )}
                  <h3 className="font-extrabold uppercase tracking-tight text-2xl">
                    {t.frequency}
                  </h3>
                  <p className="mt-3 font-extrabold text-4xl text-[#E2501C] leading-none">
                    ${t.price}
                    <span className="ml-1.5 align-middle font-site-utility text-[10px] uppercase tracking-[0.12em] text-[#1B1F24]/50">
                      / visit
                    </span>
                  </p>
                  <p className="mt-4 text-[14px] leading-snug text-[#1B1F24]/70 flex-1">
                    {t.note}
                  </p>
                  <Link
                    href="/contact"
                    className="group mt-6 inline-flex items-center justify-center gap-2 bg-[#1B1F24] hover:bg-[#E2501C] text-[#F6F1E7] font-site-utility text-[11px] uppercase tracking-[0.18em] px-5 py-3.5 transition-colors"
                  >
                    Start {t.frequency.toLowerCase()}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
            <p className="mt-6 font-site-utility text-[10px] uppercase tracking-[0.14em] text-[#1B1F24]/50">
              Per-visit pricing · + 8.25% Texas sales tax, itemized · no contract — pause anytime
            </p>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <p className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#E2501C]">
            Straight answers
          </p>
          <h2 className="mt-3 font-extrabold uppercase tracking-[-0.02em] leading-none text-[clamp(1.9rem,4.5vw,3rem)]">
            {svc.name} questions.
          </h2>
          <div className="mt-10 border-t-2 border-[#1B1F24]">
            {svc.faqs.map((f) => (
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

      {/* ── AVAILABLE ACROSS THE ROUTE ───────────────────────────────── */}
      <section className="border-y-2 border-[#1B1F24] bg-[#EDE6D6] py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#E2501C]">
            Available across Northwest Houston
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {SERVICE_AREAS.map((a) => (
              <Link
                key={a.slug}
                href={`/service-areas/${a.slug}`}
                className="border-2 border-[#1B1F24] bg-white px-4 py-2.5 font-site-utility text-[11px] uppercase tracking-[0.14em] font-semibold hover:bg-[#1B1F24] hover:text-[#F6F1E7] transition-colors"
              >
                {a.city}, TX
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER SERVICES ───────────────────────────────────────────── */}
      <section className="border-b-2 border-[#1B1F24] bg-[#1B1F24] text-[#F6F1E7] py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#E2501C]">
            The rest of the rate card
          </p>
          <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-3">
            {siblings.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="font-extrabold uppercase tracking-tight text-2xl sm:text-3xl text-[#F6F1E7]/80 hover:text-[#E2501C] transition-colors"
              >
                {s.shortName}
              </Link>
            ))}
            <Link
              href="/services"
              className="font-site-utility text-[11px] uppercase tracking-[0.18em] text-[#F6F1E7]/50 hover:text-[#E2501C] transition-colors"
            >
              Full rate card →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-[#E2501C] text-[#1B1F24]">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 py-16 lg:py-20 text-center">
          <h2 className="font-extrabold uppercase tracking-[-0.02em] leading-[0.95] text-[clamp(2.2rem,5.5vw,4rem)]">
            Book your
            <br />
            {svc.name}.
          </h2>
          <p className="mt-5 font-site-utility text-[11px] uppercase tracking-[0.18em] text-[#1B1F24]/75">
            Free quotes · Most homes scheduled within 48 hours
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-[#1B1F24] text-[#F6F1E7] hover:bg-[#F6F1E7] hover:text-[#1B1F24] font-site-utility text-xs uppercase tracking-[0.18em] px-8 py-4 transition-colors"
            >
              Get a free quote
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
