import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const STANDARDS = [
  {
    n: "01",
    title: "Vetted before the doorbell",
    body: "Background check and reference checks before the man ever steps into a home. Bonded and insured on every job.",
  },
  {
    n: "02",
    title: "Pro equipment, not a bucket from the garage",
    body: "HEPA vacuums, microfiber, and eco-friendly products that won't aggravate allergies — or your dog.",
  },
  {
    n: "03",
    title: "Same man, every visit",
    body: "Repeat clients get the same man each time. He learns your home, so you skip the walkthrough every visit.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b-2 border-[#1B1F24] overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-14 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-center">
          <div>
            <p className="flex items-center gap-2.5 font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#1B1F24]/70">
              <span className="size-2 bg-[#E2501C]" />
              About — the outfit
            </p>
            <h1 className="mt-5 font-extrabold uppercase tracking-[-0.025em] leading-[0.95] text-[clamp(2.8rem,7vw,5.2rem)]">
              Man with a mop,
              <br />
              <span className="text-transparent [-webkit-text-stroke:2px_#1B1F24]">
                but make it serious.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-[#1B1F24]/75">
              Ryan started Man With a Mop after one too many no-call no-shows
              from the cleaning companies he hired for his rental properties.
              Today, the man cleans homes across northwest Houston — Cypress to
              Conroe — with the kind of reliability you wish was the default.
            </p>
          </div>
          {/* The tool of the trade — spec sheet */}
          <div className="relative justify-self-center lg:justify-self-end w-full max-w-sm">
            <Image
              src="/logo.png"
              alt="Man With a Mop — equipment spec drawing"
              width={2048}
              height={2048}
              priority
              unoptimized
              className="w-full h-auto object-contain"
            />
            <p className="text-center font-site-utility text-[9px] uppercase tracking-[0.22em] text-[#1B1F24]/45 -mt-2">
              Fig. 1 — Standard issue. One man, one mop.
            </p>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-32 self-start">
            <p className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#E2501C]">
              The standard
            </p>
            <h2 className="mt-3 font-extrabold uppercase tracking-[-0.02em] leading-[0.95] text-[clamp(2rem,4.5vw,3.4rem)]">
              How the man
              <br />
              operates.
            </h2>
          </div>
          <div>
            {STANDARDS.map((s) => (
              <div
                key={s.n}
                className="grid grid-cols-[56px_1fr] gap-5 border-t-2 border-[#1B1F24] py-8 first:border-t-0 first:pt-0 lg:first:pt-2"
              >
                <span className="font-site-utility text-sm text-[#E2501C] pt-1">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-extrabold uppercase tracking-tight text-lg sm:text-xl">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-[#1B1F24]/70">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's promise — signed ticket */}
      <section className="border-y-2 border-[#1B1F24] bg-[#EDE6D6] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <div className="relative bg-white border-2 border-[#1B1F24] shadow-[8px_8px_0_0_#1B1F24] p-8 sm:p-10 rotate-[-0.5deg]">
            <p className="font-site-utility text-[10px] uppercase tracking-[0.22em] text-[#1B1F24]/45">
              The founder&apos;s promise
            </p>
            <blockquote className="mt-5 font-extrabold uppercase tracking-[-0.015em] leading-[1.12] text-[clamp(1.4rem,3.2vw,2.1rem)]">
              “If you&apos;re ever not happy with a clean, call me directly.
              I&apos;ll be there to make it right or your money back. That&apos;s
              the standard.”
            </blockquote>
            <div className="mt-7 flex items-center justify-between border-t-2 border-dashed border-[#1B1F24]/25 pt-5">
              <p className="font-site-utility text-[11px] uppercase tracking-[0.18em] text-[#1B1F24]/60">
                — Ryan · Founder &amp; the man
              </p>
              <span className="inline-block border-2 border-[#E2501C] text-[#E2501C] rounded-full px-4 py-1.5 font-site-utility text-[9px] font-semibold uppercase tracking-[0.18em] rotate-[-6deg]">
                Signed
              </span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-[#1B1F24] hover:bg-[#E2501C] text-[#F6F1E7] font-site-utility text-xs uppercase tracking-[0.18em] px-8 py-4 transition-colors"
            >
              Get a quote
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
