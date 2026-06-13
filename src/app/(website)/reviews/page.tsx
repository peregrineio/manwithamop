import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Sarah C.",
    city: "Cypress, TX",
    service: "Biweekly Standard",
    body: "Switched to Man With a Mop after years of cycling through cleaners. Reliable, friendly, and he actually remembers my dog's name. Biweekly client since March.",
    rating: 5,
  },
  {
    name: "Marcus R.",
    city: "Tomball, TX",
    service: "Deep Clean",
    body: "Booked them for a quarterly deep clean before guests came in. Spotless. The text reminder the night before was a nice touch — no one ever does that.",
    rating: 5,
  },
  {
    name: "Priya P.",
    city: "Katy, TX",
    service: "Move-Out × 4",
    body: "Property manager here. I've used them on 4 move-out turnovers and every one came back without a single complaint from the landlord. Worth every penny.",
    rating: 5,
  },
  {
    name: "James W.",
    city: "Conroe, TX",
    service: "Carpet Extraction",
    body: "Got the carpets done after our dog had a rough week. He moved the furniture, treated the spots, and the carpets dried by dinner. Money well spent.",
    rating: 5,
  },
  {
    name: "Linda B.",
    city: "Magnolia, TX",
    service: "Standard Clean",
    body: "Standard clean was thorough — he got the baseboards, which my last cleaner never touched. Booking online took 2 minutes.",
    rating: 5,
  },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b-2 border-[#1B1F24]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-14">
          <p className="flex items-center gap-2.5 font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#1B1F24]/70">
            <span className="size-2 bg-[#E2501C]" />
            Reviews — field reports
          </p>
          <h1 className="mt-5 font-extrabold uppercase tracking-[-0.025em] leading-[0.95] text-[clamp(2.8rem,7vw,5.2rem)]">
            The man&apos;s
            <br />
            <span className="text-[#E2501C]">track record.</span>
          </h1>
          <div className="mt-7 flex items-center gap-3">
            <span className="flex items-center gap-0.5 text-[#E2501C]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-current" />
              ))}
            </span>
            <span className="font-site-utility text-[11px] uppercase tracking-[0.16em] text-[#1B1F24]/70">
              4.9 average · 200+ cleans across northwest Houston
            </span>
          </div>
        </div>
      </section>

      {/* Report cards */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((r, i) => (
            <div
              key={r.name}
              className={`bg-white border-2 border-[#1B1F24] shadow-[6px_6px_0_0_#1B1F24] p-7 ${
                i % 2 === 0 ? "rotate-[0.4deg]" : "rotate-[-0.4deg]"
              }`}
            >
              <div className="flex items-center justify-between gap-4 border-b-2 border-dashed border-[#1B1F24]/25 pb-4">
                <div className="font-site-utility text-[10px] uppercase tracking-[0.14em] text-[#1B1F24]/55 space-y-1">
                  <p>
                    Client: <span className="text-[#1B1F24] font-semibold">{r.name}</span>
                  </p>
                  <p>
                    Location: <span className="text-[#1B1F24] font-semibold">{r.city}</span>
                  </p>
                  <p>
                    Job: <span className="text-[#1B1F24] font-semibold">{r.service}</span>
                  </p>
                </div>
                <span className="flex items-center gap-0.5 text-[#E2501C] shrink-0">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="size-3.5 fill-current" />
                  ))}
                </span>
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-[#1B1F24]/80">
                “{r.body}”
              </p>
            </div>
          ))}

          {/* Filler card — your review here */}
          <div className="border-2 border-dashed border-[#1B1F24]/35 p-7 flex flex-col items-center justify-center text-center min-h-[200px]">
            <p className="font-site-utility text-[10px] uppercase tracking-[0.2em] text-[#1B1F24]/45">
              Reserved
            </p>
            <p className="mt-3 font-extrabold uppercase tracking-tight text-xl text-[#1B1F24]/70">
              Your review goes here.
            </p>
            <Link
              href="/contact"
              className="group mt-5 inline-flex items-center gap-2 font-site-utility text-[11px] uppercase tracking-[0.18em] text-[#E2501C]"
            >
              Book your first clean
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t-2 border-[#1B1F24] bg-[#EDE6D6] py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
          <h2 className="font-extrabold uppercase tracking-[-0.02em] leading-none text-[clamp(1.9rem,4.5vw,3rem)]">
            Want to leave one yourself?
          </h2>
          <p className="mt-4 font-site-utility text-[11px] uppercase tracking-[0.18em] text-[#1B1F24]/60">
            We&apos;d love to earn a 5-star review from you
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
