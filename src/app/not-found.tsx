import Link from "next/link";
import { Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-site-display",
  display: "swap",
});

const utility = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-site-utility",
  display: "swap",
});

export default function NotFound() {
  return (
    <div
      className={`${display.variable} ${utility.variable} font-site-display min-h-screen bg-[#F6F1E7] text-[#1B1F24] flex items-center justify-center px-5`}
    >
      <div className="text-center max-w-lg">
        <span className="inline-block border-[2.5px] border-[#E2501C] text-[#E2501C] rounded-full px-5 py-2 font-site-utility text-[10px] font-semibold uppercase tracking-[0.2em] rotate-[-6deg]">
          Work order not found
        </span>
        <h1 className="mt-7 font-extrabold uppercase tracking-[-0.025em] leading-[0.95] text-[clamp(3.5rem,12vw,7rem)]">
          404<span className="text-[#E2501C]">.</span>
        </h1>
        <p className="mt-5 text-[16px] leading-relaxed text-[#1B1F24]/70">
          Couldn&apos;t find what you were looking for. Maybe it moved, or
          maybe we never had it. Either way — the man checked.
        </p>
        <Link
          href="/"
          className="mt-9 inline-flex items-center bg-[#1B1F24] hover:bg-[#E2501C] text-[#F6F1E7] font-site-utility text-xs uppercase tracking-[0.18em] px-8 py-4 transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
