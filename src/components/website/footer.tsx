import Link from "next/link";
import Image from "next/image";
import {
  COMPANY_NAME,
  COMPANY_PHONE,
  COMPANY_EMAIL,
} from "@/lib/constants";
import { SERVICE_AREAS } from "@/data/service-areas";
import { SERVICES } from "@/data/services";

export function WebsiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#1B1F24] text-[#F6F1E7]">
      {/* Giant wordmark */}
      <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-10 border-b border-[#F6F1E7]/15 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-10">
        <div>
          <p className="font-extrabold uppercase tracking-[-0.025em] leading-[0.9] text-[clamp(2.6rem,8.5vw,7rem)]">
            Man With
            <br />a Mop<span className="text-[#E2501C]">.</span>
          </p>
          <p className="mt-5 font-site-utility text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#F6F1E7]/50">
            It&apos;s as if a man cleaned it ™
          </p>
        </div>
        <Image
          src="/logo-cream.png"
          alt="Man With a Mop"
          width={2048}
          height={2048}
          unoptimized
          className="hidden sm:block size-40 lg:size-48 object-contain shrink-0 opacity-90"
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2 md:col-span-1">
          <p className="font-site-utility text-[10px] uppercase tracking-[0.22em] text-[#F6F1E7]/45 mb-4">
            The outfit
          </p>
          <p className="text-sm leading-relaxed text-[#F6F1E7]/70 max-w-xs">
            Residential cleaning across northwest Houston — Cypress to Conroe.
            One vetted, insured man. One mop. Reliable as a Texas summer.
          </p>
        </div>

        <div>
          <p className="font-site-utility text-[10px] uppercase tracking-[0.22em] text-[#F6F1E7]/45 mb-4">
            Explore
          </p>
          <ul className="space-y-2.5 font-site-utility text-[11px] uppercase tracking-[0.14em]">
            {[
              { href: "/services", label: "Services" },
              { href: "/about", label: "About" },
              { href: "/reviews", label: "Reviews" },
              { href: "/blog", label: "Field Notes" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[#F6F1E7]/75 hover:text-[#E2501C] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-site-utility text-[10px] uppercase tracking-[0.22em] text-[#F6F1E7]/45 mb-4">
            Services
          </p>
          <ul className="space-y-2.5 font-site-utility text-[11px] uppercase tracking-[0.14em]">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-[#F6F1E7]/75 hover:text-[#E2501C] transition-colors"
                >
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-site-utility text-[10px] uppercase tracking-[0.22em] text-[#F6F1E7]/45 mb-4">
            Service areas
          </p>
          <ul className="space-y-2.5 font-site-utility text-[11px] uppercase tracking-[0.14em]">
            {SERVICE_AREAS.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/service-areas/${a.slug}`}
                  className="text-[#F6F1E7]/75 hover:text-[#E2501C] transition-colors"
                >
                  {a.city}, TX
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-site-utility text-[10px] uppercase tracking-[0.22em] text-[#F6F1E7]/45 mb-4">
            Contact
          </p>
          <ul className="space-y-2.5 font-site-utility text-[11px] uppercase tracking-[0.14em]">
            <li>
              <a
                href={`tel:${COMPANY_PHONE.replace(/\D/g, "")}`}
                className="text-[#F6F1E7]/75 hover:text-[#E2501C] transition-colors"
              >
                {COMPANY_PHONE}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="text-[#F6F1E7]/75 hover:text-[#E2501C] transition-colors normal-case"
              >
                {COMPANY_EMAIL}
              </a>
            </li>
            <li className="text-[#F6F1E7]/75">Mon–Sat · 8am–6pm</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#F6F1E7]/15">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 font-site-utility text-[10px] uppercase tracking-[0.16em] text-[#F6F1E7]/40">
          <p>
            © {year} {COMPANY_NAME} · Northwest Houston, TX
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#F6F1E7]/80 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#F6F1E7]/80 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
