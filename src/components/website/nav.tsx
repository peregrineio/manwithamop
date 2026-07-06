"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { COMPANY_PHONE, REGION_LABEL } from "@/lib/constants";
import { SERVICE_AREAS } from "@/data/service-areas";
import { SERVICES } from "@/data/services";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Field Notes" },
  { href: "/contact", label: "Contact" },
];

const PHONE_HREF = `tel:${COMPANY_PHONE.replace(/\D/g, "")}`;

export function WebsiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onAreas = pathname.startsWith("/service-areas");
  const onServices =
    pathname === "/services" || pathname.startsWith("/services/");

  return (
    <header className="sticky top-0 z-40">
      {/* Utility strip */}
      <div className="bg-[#1B1F24] text-[#F6F1E7]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 h-8 flex items-center justify-between font-site-utility text-[10px] sm:text-[11px] uppercase tracking-[0.14em]">
          <p className="truncate">{REGION_LABEL}, TX — Residential Cleaning</p>
          <a
            href={PHONE_HREF}
            className="shrink-0 hover:text-[#E2501C] transition-colors"
          >
            Mon–Sat · {COMPANY_PHONE}
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-[#F6F1E7]/95 backdrop-blur border-b-2 border-[#1B1F24]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 h-[68px] flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <Image
              src="/logo.png"
              alt="Man With a Mop"
              width={2048}
              height={2048}
              priority
              unoptimized
              className="size-12 object-contain shrink-0 -my-2 rotate-3 group-hover:rotate-0 transition-transform"
            />
            <span className="flex flex-col leading-none">
              <span className="text-[17px] font-extrabold uppercase tracking-tight">
                Man With a Mop
              </span>
              <span className="mt-1 font-site-utility text-[9px] uppercase tracking-[0.22em] text-[#1B1F24]/60">
                Est. 2026 · It&apos;s as if a man cleaned it
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {/* Services — hover dropdown. Links stay in the DOM
                (CSS-hidden, not conditionally rendered) so crawlers see them. */}
            <div className="relative group">
              <Link
                href="/services"
                className={cn(
                  "flex items-center gap-1.5 font-site-utility text-[11px] uppercase tracking-[0.18em] py-2 border-b-2 transition-colors",
                  onServices
                    ? "border-[#E2501C] text-[#1B1F24]"
                    : "border-transparent text-[#1B1F24]/70 hover:text-[#1B1F24] hover:border-[#1B1F24]/30",
                )}
              >
                Services
                <ChevronDown className="size-3 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-150 absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                <div className="w-64 bg-[#F6F1E7] border-2 border-[#1B1F24] shadow-[6px_6px_0_0_#1B1F24]">
                  <p className="px-5 pt-4 pb-2 font-site-utility text-[9px] uppercase tracking-[0.22em] text-[#1B1F24]/45 border-b border-dashed border-[#1B1F24]/25">
                    The rate card
                  </p>
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className={cn(
                        "flex items-baseline justify-between gap-3 px-5 py-3 border-b border-dashed border-[#1B1F24]/15 last:border-b-0 transition-colors hover:bg-white group/item",
                        pathname === `/services/${s.slug}` && "bg-white",
                      )}
                    >
                      <span className="font-extrabold uppercase tracking-tight text-sm group-hover/item:text-[#E2501C] transition-colors">
                        {s.name}
                      </span>
                      <span className="font-site-utility text-[9px] uppercase tracking-[0.16em] text-[#1B1F24]/40 shrink-0">
                        {s.priceLabel}
                      </span>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="block px-5 py-3.5 bg-[#1B1F24] text-[#F6F1E7] font-site-utility text-[10px] uppercase tracking-[0.18em] hover:bg-[#E2501C] transition-colors"
                  >
                    Full rate card →
                  </Link>
                </div>
              </div>
            </div>

            {/* Service Areas — hover dropdown. Links stay in the DOM
                (CSS-hidden, not conditionally rendered) so crawlers see them. */}
            <div className="relative group">
              <Link
                href="/service-areas"
                className={cn(
                  "flex items-center gap-1.5 font-site-utility text-[11px] uppercase tracking-[0.18em] py-2 border-b-2 transition-colors",
                  onAreas
                    ? "border-[#E2501C] text-[#1B1F24]"
                    : "border-transparent text-[#1B1F24]/70 hover:text-[#1B1F24] hover:border-[#1B1F24]/30",
                )}
              >
                Service Areas
                <ChevronDown className="size-3 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-150 absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                <div className="w-60 bg-[#F6F1E7] border-2 border-[#1B1F24] shadow-[6px_6px_0_0_#1B1F24]">
                  <p className="px-5 pt-4 pb-2 font-site-utility text-[9px] uppercase tracking-[0.22em] text-[#1B1F24]/45 border-b border-dashed border-[#1B1F24]/25">
                    The route sheet
                  </p>
                  {SERVICE_AREAS.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/service-areas/${a.slug}`}
                      className={cn(
                        "flex items-baseline justify-between gap-3 px-5 py-3 border-b border-dashed border-[#1B1F24]/15 last:border-b-0 transition-colors hover:bg-white group/item",
                        pathname === `/service-areas/${a.slug}` &&
                          "bg-white",
                      )}
                    >
                      <span className="font-extrabold uppercase tracking-tight text-sm group-hover/item:text-[#E2501C] transition-colors">
                        {a.city}, TX
                      </span>
                      <span className="font-site-utility text-[9px] uppercase tracking-[0.16em] text-[#1B1F24]/40">
                        Nº {a.routeNo}
                      </span>
                    </Link>
                  ))}
                  <Link
                    href="/service-areas"
                    className="block px-5 py-3.5 bg-[#1B1F24] text-[#F6F1E7] font-site-utility text-[10px] uppercase tracking-[0.18em] hover:bg-[#E2501C] transition-colors"
                  >
                    View all areas →
                  </Link>
                </div>
              </div>
            </div>

            {LINKS.filter((l) => l.href !== "/services").map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "font-site-utility text-[11px] uppercase tracking-[0.18em] py-2 border-b-2 transition-colors",
                  pathname === l.href
                    ? "border-[#E2501C] text-[#1B1F24]"
                    : "border-transparent text-[#1B1F24]/70 hover:text-[#1B1F24] hover:border-[#1B1F24]/30",
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center bg-[#1B1F24] hover:bg-[#E2501C] text-[#F6F1E7] font-site-utility text-[11px] uppercase tracking-[0.18em] px-5 py-3 transition-colors"
            >
              Book a Clean
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-b-2 border-[#1B1F24] bg-[#F6F1E7] max-h-[calc(100dvh-100px)] overflow-y-auto">
          <nav className="px-5 py-4 flex flex-col">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={cn(
                "py-3.5 font-site-utility text-xs uppercase tracking-[0.18em] border-b border-[#1B1F24]/10",
                pathname === "/" ? "text-[#E2501C]" : "text-[#1B1F24]/80",
              )}
            >
              Home
            </Link>

            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className={cn(
                "py-3.5 font-site-utility text-xs uppercase tracking-[0.18em] border-b border-[#1B1F24]/10",
                onServices ? "text-[#E2501C]" : "text-[#1B1F24]/80",
              )}
            >
              Services
            </Link>
            <div className="grid grid-cols-2 border-b border-[#1B1F24]/10">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "py-2.5 pl-4 font-site-utility text-[11px] uppercase tracking-[0.14em]",
                    pathname === `/services/${s.slug}`
                      ? "text-[#E2501C]"
                      : "text-[#1B1F24]/60",
                  )}
                >
                  — {s.shortName}
                </Link>
              ))}
            </div>

            <Link
              href="/service-areas"
              onClick={() => setOpen(false)}
              className={cn(
                "py-3.5 font-site-utility text-xs uppercase tracking-[0.18em] border-b border-[#1B1F24]/10",
                onAreas ? "text-[#E2501C]" : "text-[#1B1F24]/80",
              )}
            >
              Service Areas
            </Link>
            <div className="grid grid-cols-2 border-b border-[#1B1F24]/10">
              {SERVICE_AREAS.map((a) => (
                <Link
                  key={a.slug}
                  href={`/service-areas/${a.slug}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "py-2.5 pl-4 font-site-utility text-[11px] uppercase tracking-[0.14em]",
                    pathname === `/service-areas/${a.slug}`
                      ? "text-[#E2501C]"
                      : "text-[#1B1F24]/60",
                  )}
                >
                  — {a.city}
                </Link>
              ))}
            </div>

            {LINKS.filter((l) => l.href !== "/services").map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "py-3.5 font-site-utility text-xs uppercase tracking-[0.18em] border-b border-[#1B1F24]/10",
                  pathname === l.href ? "text-[#E2501C]" : "text-[#1B1F24]/80",
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 bg-[#1B1F24] text-[#F6F1E7] font-site-utility text-xs uppercase tracking-[0.18em] px-5 py-3.5 text-center"
            >
              Book a Clean
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
