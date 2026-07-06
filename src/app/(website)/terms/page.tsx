import type { Metadata } from "next";
import { COMPANY_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern Man With a Mop cleaning services across Northwest Houston — scheduling, payment, and Texas sales tax, in plain language.",
  alternates: { canonical: "/terms" },
};

const HEADING =
  "flex items-baseline gap-4 font-extrabold uppercase tracking-tight text-lg pt-8 border-t-2 border-[#1B1F24] mt-8 first:mt-0 first:pt-0 first:border-t-0";
const NUM = "font-site-utility text-xs font-normal text-[#E2501C]";

export default function TermsPage() {
  return (
    <>
      <section className="border-b-2 border-[#1B1F24]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-14">
          <p className="flex items-center gap-2.5 font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#1B1F24]/70">
            <span className="size-2 bg-[#E2501C]" />
            Legal — the fine print
          </p>
          <h1 className="mt-5 font-extrabold uppercase tracking-[-0.025em] leading-[0.95] text-[clamp(2.6rem,6vw,4.5rem)]">
            Terms of service.
          </h1>
          <p className="mt-4 font-site-utility text-[10px] uppercase tracking-[0.16em] text-[#1B1F24]/50">
            Last updated: 2026-05-31
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 lg:px-8 py-16 text-[15px] leading-relaxed text-[#1B1F24]/80">
        <h2 className={HEADING}>
          <span className={NUM}>01</span> Booking
        </h2>
        <p className="mt-4">
          A &quot;booking&quot; is confirmed only when {COMPANY_NAME} sends you
          a written confirmation (text or email) with the specific date and
          time. Submitting our contact form is a request, not a confirmation.
        </p>

        <h2 className={HEADING}>
          <span className={NUM}>02</span> Cancellation
        </h2>
        <p className="mt-4">
          Cancel or reschedule at least 24 hours before your appointment for
          free. Less than 24 hours: a 50% fee applies to cover routing and crew
          time.
        </p>

        <h2 className={HEADING}>
          <span className={NUM}>03</span> Pricing &amp; taxes
        </h2>
        <p className="mt-4">
          Prices on this site are estimates. Final price is set at the time of
          booking confirmation and includes Texas state sales tax (8.25%) per
          TX Tax Code §151.0048 where applicable.
        </p>

        <h2 className={HEADING}>
          <span className={NUM}>04</span> Satisfaction guarantee
        </h2>
        <p className="mt-4">
          If something isn&apos;t right, contact us within 24 hours of the
          clean and we&apos;ll come back to address it at no charge. If we
          can&apos;t make it right, we&apos;ll refund the amount paid for that
          specific clean.
        </p>

        <h2 className={HEADING}>
          <span className={NUM}>05</span> Liability
        </h2>
        <p className="mt-4">
          We carry general liability and bonding for our team. In the unlikely
          event of damage caused by our cleaners, contact us within 48 hours
          and we&apos;ll work with our insurer to resolve. {COMPANY_NAME} is
          not liable for pre-existing damage or items not properly secured.
        </p>

        <h2 className={HEADING}>
          <span className={NUM}>06</span> Governing law
        </h2>
        <p className="mt-4">
          These terms are governed by the laws of the State of Texas.
        </p>
      </article>
    </>
  );
}
