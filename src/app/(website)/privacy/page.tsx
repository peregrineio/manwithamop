import { COMPANY_NAME, COMPANY_EMAIL } from "@/lib/constants";

const HEADING =
  "flex items-baseline gap-4 font-extrabold uppercase tracking-tight text-lg pt-8 border-t-2 border-[#1B1F24] mt-8 first:mt-0 first:pt-0 first:border-t-0";
const NUM = "font-site-utility text-xs font-normal text-[#E2501C]";

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b-2 border-[#1B1F24]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-14">
          <p className="flex items-center gap-2.5 font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#1B1F24]/70">
            <span className="size-2 bg-[#E2501C]" />
            Legal — the fine print
          </p>
          <h1 className="mt-5 font-extrabold uppercase tracking-[-0.025em] leading-[0.95] text-[clamp(2.6rem,6vw,4.5rem)]">
            Privacy policy.
          </h1>
          <p className="mt-4 font-site-utility text-[10px] uppercase tracking-[0.16em] text-[#1B1F24]/50">
            Last updated: 2026-05-31
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 lg:px-8 py-16 text-[15px] leading-relaxed text-[#1B1F24]/80">
        <h2 className={HEADING}>
          <span className={NUM}>01</span> What we collect
        </h2>
        <p className="mt-4">
          When you book a clean or contact us, we collect your name, phone,
          email, service address, and any details you share about your home.
          Payment is processed by Stripe — we never see or store full card
          numbers.
        </p>

        <h2 className={HEADING}>
          <span className={NUM}>02</span> How we use it
        </h2>
        <ul className="mt-4 space-y-2 list-none">
          {[
            "Schedule, deliver, and follow up on your cleaning service.",
            "Send SMS appointment reminders and quotes (with TCPA consent).",
            "Email invoices and receipts.",
            "Improve our service quality.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2.5 size-1.5 bg-[#E2501C] shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className={HEADING}>
          <span className={NUM}>03</span> SMS messaging (TCPA)
        </h2>
        <p className="mt-4">
          When you check the consent box on our contact form, you&apos;re
          agreeing to receive SMS messages from us about your booking. Reply
          STOP to any message to opt out at any time. We do not sell, rent, or
          share your phone number with anyone.
        </p>

        <h2 className={HEADING}>
          <span className={NUM}>04</span> Who we share with
        </h2>
        <p className="mt-4">
          We share only what&apos;s required to operate: Stripe (payments),
          Twilio (SMS), Resend (email), and Supabase (database). Each is bound
          by their own data-protection contracts. We don&apos;t sell your data.
        </p>

        <h2 className={HEADING}>
          <span className={NUM}>05</span> Your rights
        </h2>
        <p className="mt-4">
          Texas residents can request access to, correction of, or deletion of
          their personal data. Email us at{" "}
          <a
            href={`mailto:${COMPANY_EMAIL}`}
            className="text-[#E2501C] underline underline-offset-4"
          >
            {COMPANY_EMAIL}
          </a>{" "}
          and we&apos;ll respond within 30 days.
        </p>

        <h2 className={HEADING}>
          <span className={NUM}>06</span> Contact
        </h2>
        <p className="mt-4 font-site-utility text-[12px] uppercase tracking-[0.1em]">
          {COMPANY_NAME} · {COMPANY_EMAIL}
        </p>
      </article>
    </>
  );
}
