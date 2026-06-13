"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import { SERVICE_TYPES, SERVICE_AREA } from "@/lib/constants";

type Status = "idle" | "submitting" | "success" | "error";

const FIELD_LABEL =
  "block font-site-utility text-[10px] uppercase tracking-[0.18em] text-[#1B1F24]/60";
const FIELD_INPUT =
  "mt-2 w-full bg-white border-2 border-[#1B1F24]/30 px-3.5 py-2.5 text-sm text-[#1B1F24] placeholder:text-[#1B1F24]/35 focus:outline-none focus:border-[#E2501C] transition-colors disabled:opacity-50";

export function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("submitting");
    const form = new FormData(e.currentTarget);

    // Honeypot
    if (form.get("website")) {
      setStatus("success");
      return;
    }

    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch("/api/booking-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(json.error ?? "Something went wrong. Please call us instead.");
        setStatus("error");
        return;
      }
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setError("Network error. Please try again or call us.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white border-2 border-[#1B1F24] shadow-[8px_8px_0_0_#1B1F24] p-10 text-center">
        <CheckCircle2 className="size-12 text-[#E2501C] mx-auto" />
        <h3 className="mt-5 font-extrabold uppercase tracking-tight text-2xl">
          Work order received.
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#1B1F24]/70">
          We&apos;ll text or email you within one business day to schedule.
        </p>
        <span className="mt-6 inline-block border-2 border-[#E2501C] text-[#E2501C] rounded-full px-4 py-1.5 font-site-utility text-[9px] font-semibold uppercase tracking-[0.18em] rotate-[-4deg]">
          Status: In the queue
        </span>
        <div>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 font-site-utility text-[11px] uppercase tracking-[0.16em] text-[#1B1F24]/60 hover:text-[#E2501C] underline underline-offset-4 transition-colors"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="relative bg-white border-2 border-[#1B1F24] shadow-[8px_8px_0_0_#1B1F24] p-7 sm:p-8 space-y-5"
    >
      <div className="flex items-baseline justify-between border-b-2 border-[#1B1F24] pb-4">
        <p className="font-extrabold uppercase tracking-tight text-xl">
          Work order request
        </p>
        <p className="font-site-utility text-xs text-[#1B1F24]/50">Nº —</p>
      </div>

      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
        className="absolute opacity-0 pointer-events-none -left-[10000px]"
        aria-hidden
      />

      {error && (
        <div
          role="alert"
          className="flex items-start gap-2.5 border-2 border-[#E2501C] bg-[#E2501C]/10 text-[#1B1F24] px-4 py-3 text-sm"
        >
          <AlertCircle className="size-4 mt-0.5 shrink-0 text-[#E2501C]" />
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={FIELD_LABEL}>
            Full name *
          </label>
          <input
            id="name"
            name="name"
            required
            disabled={submitting}
            className={FIELD_INPUT}
          />
        </div>
        <div>
          <label htmlFor="phone" className={FIELD_LABEL}>
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            disabled={submitting}
            className={FIELD_INPUT}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={FIELD_LABEL}>
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={submitting}
          className={FIELD_INPUT}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="service_type" className={FIELD_LABEL}>
            Service *
          </label>
          <select
            id="service_type"
            name="service_type"
            required
            disabled={submitting}
            defaultValue=""
            className={FIELD_INPUT}
          >
            <option value="" disabled>
              Pick a service…
            </option>
            {(
              Object.entries(SERVICE_TYPES) as [
                keyof typeof SERVICE_TYPES,
                (typeof SERVICE_TYPES)[keyof typeof SERVICE_TYPES],
              ][]
            ).map(([key, val]) => (
              <option key={key} value={key}>
                {val.label} — ${val.price}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="city" className={FIELD_LABEL}>
            City *
          </label>
          <select
            id="city"
            name="city"
            required
            disabled={submitting}
            defaultValue=""
            className={FIELD_INPUT}
          >
            <option value="" disabled>
              Pick your city…
            </option>
            {SERVICE_AREA.map((city) => (
              <option key={city} value={city}>
                {city}, TX
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="address" className={FIELD_LABEL}>
          Address (optional)
        </label>
        <input
          id="address"
          name="address"
          disabled={submitting}
          className={FIELD_INPUT}
        />
      </div>

      <div>
        <label htmlFor="notes" className={FIELD_LABEL}>
          Anything else we should know?
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          disabled={submitting}
          placeholder="Square footage, pets, preferred date/time…"
          className={`${FIELD_INPUT} resize-y`}
        />
      </div>

      <div className="flex items-start gap-3 border-t-2 border-dashed border-[#1B1F24]/25 pt-5">
        <input
          id="tcpa_consent"
          name="tcpa_consent"
          type="checkbox"
          required
          disabled={submitting}
          className="mt-0.5 size-4 accent-[#E2501C]"
        />
        <label
          htmlFor="tcpa_consent"
          className="font-site-utility text-[10px] uppercase tracking-[0.08em] leading-relaxed text-[#1B1F24]/60"
        >
          I agree to receive SMS and email messages about my booking. Message
          and data rates may apply. Reply STOP at any time. Not a marketing
          opt-in.
        </label>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="group w-full inline-flex items-center justify-center gap-2.5 bg-[#1B1F24] hover:bg-[#E2501C] text-[#F6F1E7] font-site-utility text-xs uppercase tracking-[0.18em] px-6 py-4 transition-colors disabled:opacity-60"
      >
        {submitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Request a quote
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
      <p className="font-site-utility text-[9px] uppercase tracking-[0.14em] text-[#1B1F24]/45 text-center">
        Submitting this form does not create a booking. We&apos;ll reach out to
        confirm.
      </p>
    </form>
  );
}
