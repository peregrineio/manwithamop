import { COMPANY_PHONE, COMPANY_EMAIL } from "@/lib/constants";
import { BookingForm } from "@/components/website/booking-form";

const DETAILS: [string, string, string | null][] = [
  ["Phone", COMPANY_PHONE, `tel:${COMPANY_PHONE.replace(/\D/g, "")}`],
  ["Email", COMPANY_EMAIL, `mailto:${COMPANY_EMAIL}`],
  ["Service area", "Cypress–Conroe corridor, NW Houston", null],
  ["Hours", "Mon — Sat · 8am — 6pm", null],
  ["Response time", "Within one business day", null],
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b-2 border-[#1B1F24]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-14">
          <p className="flex items-center gap-2.5 font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#1B1F24]/70">
            <span className="size-2 bg-[#E2501C]" />
            Contact — request a work order
          </p>
          <h1 className="mt-5 font-extrabold uppercase tracking-[-0.025em] leading-[0.95] text-[clamp(2.8rem,7vw,5.2rem)]">
            Get a<span className="text-[#E2501C]"> free quote.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-[#1B1F24]/75">
            Tell us about your home. We&apos;ll text or email you within one
            business day — and then a man with a mop takes it from there.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
          <BookingForm />

          {/* Details — spec list */}
          <div className="lg:sticky lg:top-32">
            <p className="font-site-utility text-[10px] uppercase tracking-[0.22em] text-[#1B1F24]/45 pb-4 border-b-2 border-[#1B1F24]">
              The details
            </p>
            <dl>
              {DETAILS.map(([k, v, href]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between gap-6 border-b border-dashed border-[#1B1F24]/25 py-4"
                >
                  <dt className="font-site-utility text-[11px] uppercase tracking-[0.14em] text-[#1B1F24]/55 shrink-0">
                    {k}
                  </dt>
                  <dd className="font-extrabold uppercase tracking-tight text-sm sm:text-base text-right">
                    {href ? (
                      <a
                        href={href}
                        className="hover:text-[#E2501C] transition-colors normal-case"
                      >
                        {v}
                      </a>
                    ) : (
                      v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 font-site-utility text-[10px] uppercase tracking-[0.14em] leading-relaxed text-[#1B1F24]/45">
              Prefer to talk to the man directly? Call. He picks up — and if
              he&apos;s mid-mop, he calls back.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
