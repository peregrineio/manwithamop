import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICE_AREAS } from "@/data/service-areas";
import { COMPANY_PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas — House Cleaning Across Northwest Houston",
  description:
    "Man With a Mop cleans homes in Cypress, Katy, Hockley, Magnolia, Tomball, and Conroe, TX. One insured, background-checked man covering the US-290, SH-249 & I-45 corridor.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b-2 border-[#1B1F24]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-14">
          <p className="flex items-center gap-2.5 font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#1B1F24]/70">
            <span className="size-2 bg-[#E2501C]" />
            Service areas — the route sheet
          </p>
          <h1 className="mt-5 font-extrabold uppercase tracking-[-0.025em] leading-[0.95] text-[clamp(2.8rem,7vw,5.2rem)]">
            Where the man
            <br />
            <span className="text-[#E2501C]">goes.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-[#1B1F24]/75">
            Man With a Mop cleans homes across northwest Houston — six
            communities along the US-290, SH-249, and I-45 corridor, from the
            master-planned streets of Cypress and Katy to the acreage and pines
            of Hockley and Magnolia, up to the shores of Lake Conroe. Pick your
            stop on the route.
          </p>
        </div>
      </section>

      {/* Route stops */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="border-t-2 border-[#1B1F24]">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group grid grid-cols-[auto_1fr_24px] sm:grid-cols-[90px_1.1fr_1.3fr_auto_24px] items-center gap-x-5 gap-y-1.5 border-b-2 border-[#1B1F24] py-7 transition-colors hover:bg-white"
              >
                <span className="font-site-utility text-xs text-[#1B1F24]/45">
                  Route {area.routeNo}
                </span>
                <h2 className="font-extrabold uppercase tracking-tight text-2xl sm:text-3xl group-hover:text-[#E2501C] transition-colors">
                  {area.city}
                  <span className="text-[#1B1F24]/35 text-lg sm:text-xl">
                    {" "}
                    TX
                  </span>
                </h2>
                <p className="hidden sm:block font-site-utility text-[11px] uppercase tracking-[0.12em] text-[#1B1F24]/55">
                  {area.neighborhoods.slice(0, 3).join(" · ")}
                </p>
                <p className="hidden sm:block font-site-utility text-[11px] uppercase tracking-[0.12em] text-[#1B1F24]/45 text-right">
                  {area.county}
                </p>
                <ArrowRight className="size-4 text-[#1B1F24]/30 transition-all group-hover:text-[#E2501C] group-hover:translate-x-1" />
                <p className="col-start-2 sm:hidden font-site-utility text-[10px] uppercase tracking-[0.12em] text-[#1B1F24]/55">
                  {area.county} · {area.zips.join(" · ")}
                </p>
              </Link>
            ))}
          </div>

          <p className="mt-6 font-site-utility text-[10px] uppercase tracking-[0.14em] text-[#1B1F24]/45 max-w-2xl leading-relaxed">
            On the edge of the map? If you&apos;re near the corridor —
            Waller, Pinehurst, Montgomery, Willis — text us your address.
            The route flexes.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t-2 border-[#1B1F24] bg-[#EDE6D6] py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
          <h2 className="font-extrabold uppercase tracking-[-0.02em] leading-none text-[clamp(1.9rem,4.5vw,3rem)]">
            On the route? Get a quote.
          </h2>
          <p className="mt-4 font-site-utility text-[11px] uppercase tracking-[0.18em] text-[#1B1F24]/60">
            Most homes scheduled within 48 hours · {COMPANY_PHONE}
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2.5 bg-[#1B1F24] hover:bg-[#E2501C] text-[#F6F1E7] font-site-utility text-xs uppercase tracking-[0.18em] px-8 py-4 transition-colors"
          >
            Book a clean
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
