"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { ArrowRight, Lightbulb, StickyNote, AlertTriangle } from "lucide-react";

function MdxImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  if (!props.src) return null;
  return (
    <span className="block my-8 border-2 border-[#1B1F24] shadow-[6px_6px_0_#1B1F24] overflow-hidden">
      <Image
        src={props.src as string}
        alt={props.alt || ""}
        width={720}
        height={400}
        className="w-full h-auto"
      />
    </span>
  );
}

const calloutStyles = {
  tip: {
    icon: <Lightbulb className="size-5 shrink-0 mt-0.5 text-[#E2501C]" />,
    label: "Tip from the man",
  },
  note: {
    icon: <StickyNote className="size-5 shrink-0 mt-0.5 text-[#E2501C]" />,
    label: "Field note",
  },
  warning: {
    icon: <AlertTriangle className="size-5 shrink-0 mt-0.5 text-[#E2501C]" />,
    label: "Heads up",
  },
};

export function Callout({
  type = "note",
  children,
}: {
  type?: "tip" | "note" | "warning";
  children: React.ReactNode;
}) {
  const s = calloutStyles[type];
  return (
    <div className="border-2 border-[#1B1F24] border-l-[6px] border-l-[#E2501C] bg-[#EDE6D6] p-5 my-8 flex gap-3">
      {s.icon}
      <div>
        <p className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#1B1F24]/70 mb-1.5">
          {s.label}
        </p>
        <div className="text-[15px] leading-relaxed text-[#1B1F24]/85 [&>p]:mb-0">
          {children}
        </div>
      </div>
    </div>
  );
}

export function RateTable({
  rows,
}: {
  rows: { service: string; price: string; note?: string }[];
}) {
  return (
    <div className="my-8 border-2 border-[#1B1F24] bg-[#F6F1E7]">
      <div className="border-b-2 border-[#1B1F24] bg-[#1B1F24] px-4 py-2.5 flex items-center justify-between">
        <span className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#F6F1E7]">
          Rate card
        </span>
        <span className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#E2501C]">
          + 8.25% TX sales tax
        </span>
      </div>
      {rows.map((r, i) => (
        <div
          key={r.service}
          className={`px-4 py-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 ${
            i > 0 ? "border-t-2 border-[#1B1F24]/15" : ""
          }`}
        >
          <div className="min-w-0">
            <p className="font-extrabold uppercase tracking-tight text-base">
              {r.service}
            </p>
            {r.note ? (
              <p className="font-site-utility text-xs text-[#1B1F24]/60 mt-0.5">
                {r.note}
              </p>
            ) : null}
          </div>
          <p className="font-site-utility font-semibold text-lg text-[#E2501C] whitespace-nowrap">
            {r.price}
          </p>
        </div>
      ))}
      <p className="border-t-2 border-[#1B1F24]/15 px-4 py-3 font-site-utility text-xs text-[#1B1F24]/60">
        Final quote depends on square footage &amp; number of rooms.
      </p>
    </div>
  );
}

export function InlineCTA({
  heading,
  body,
  href,
  label,
}: {
  heading?: string;
  body?: string;
  href?: string;
  label?: string;
}) {
  return (
    <div className="my-12 border-2 border-[#1B1F24] bg-[#1B1F24] text-[#F6F1E7] p-6 shadow-[6px_6px_0_rgba(27,31,36,0.25)]">
      <p className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#E2501C]">
        Work order
      </p>
      <p className="mt-2 font-extrabold uppercase tracking-tight text-xl">
        {heading || "Want this handled for you?"}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-[#F6F1E7]/75">
        {body ||
          "One insured man, one mop, a posted rate card, and a booking that takes under two minutes."}
      </p>
      <Link
        href={href || "/contact"}
        className="group mt-4 inline-flex items-center gap-2 font-site-utility text-[12px] uppercase tracking-[0.18em] text-[#F6F1E7] hover:text-[#E2501C] transition-colors"
      >
        {label || "Request a work order"}
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  if (!items?.length) return null;
  return (
    <div className="my-8 border-t-2 border-[#1B1F24]">
      {items.map((f) => (
        <details key={f.q} className="group border-b-2 border-[#1B1F24]">
          <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <span className="font-extrabold uppercase tracking-tight text-base">
              {f.q}
            </span>
            <span
              aria-hidden="true"
              className="shrink-0 size-7 border-2 border-[#1B1F24] flex items-center justify-center font-site-utility text-sm transition-colors group-open:bg-[#E2501C] group-open:border-[#E2501C] group-open:text-[#F6F1E7]"
            >
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </span>
          </summary>
          <p className="pb-6 pr-12 text-[15px] leading-relaxed text-[#1B1F24]/75">
            {f.a}
          </p>
        </details>
      ))}
    </div>
  );
}

export function useMDXComponents(): MDXComponents {
  return {
    h2: ({ children, id, ...props }) => (
      <h2
        id={id}
        className="font-extrabold uppercase tracking-[-0.02em] text-2xl mt-12 mb-4 scroll-mt-24 [&>a]:no-underline [&>a]:text-inherit"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, id, ...props }) => (
      <h3
        id={id}
        className="font-extrabold uppercase tracking-tight text-xl mt-8 mb-3 scroll-mt-24 [&>a]:no-underline [&>a]:text-inherit"
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p className="text-[15px] leading-relaxed text-[#1B1F24]/80 mb-6" {...props}>
        {children}
      </p>
    ),
    a: ({ children, ...props }) => (
      <a
        className="font-semibold text-[#1B1F24] underline decoration-2 decoration-[#E2501C]/60 underline-offset-2 hover:text-[#E2501C] transition-colors"
        {...props}
      >
        {children}
      </a>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-[6px] border-[#E2501C] bg-[#EDE6D6] px-6 py-4 my-8 text-[#1B1F24]/80 [&>p]:mb-0"
        {...props}
      >
        {children}
      </blockquote>
    ),
    ul: ({ children, ...props }) => (
      <ul
        className="list-disc pl-6 text-[15px] text-[#1B1F24]/80 mb-6 space-y-2 marker:text-[#E2501C]"
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol
        className="list-decimal pl-6 text-[15px] text-[#1B1F24]/80 mb-6 space-y-2 marker:font-site-utility marker:text-[#E2501C]"
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="leading-relaxed" {...props}>
        {children}
      </li>
    ),
    code: ({ children, className, ...props }) => {
      if (className) {
        return (
          <code className={className} {...props}>
            {children}
          </code>
        );
      }
      return (
        <code
          className="font-site-utility bg-[#EDE6D6] border border-[#1B1F24]/20 px-1.5 py-0.5 text-[13px]"
          {...props}
        >
          {children}
        </code>
      );
    },
    pre: ({ children, ...props }) => (
      <pre
        className="overflow-x-auto my-8 border-2 border-[#1B1F24] p-4 text-sm [&_code]:bg-transparent"
        {...props}
      >
        {children}
      </pre>
    ),
    img: MdxImage as MDXComponents["img"],
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto my-8 border-2 border-[#1B1F24]">
        <table className="w-full border-collapse" {...props}>
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }) => (
      <th
        className="border-b-2 border-r last:border-r-0 border-[#1B1F24] bg-[#EDE6D6] px-4 py-2.5 text-left font-site-utility text-[11px] uppercase tracking-[0.18em] text-[#1B1F24]/80"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td
        className="border-b border-r last:border-r-0 border-[#1B1F24]/20 px-4 py-2.5 text-sm text-[#1B1F24]/80"
        {...props}
      >
        {children}
      </td>
    ),
    hr: (props) => <hr className="border-t-2 border-[#1B1F24] my-12" {...props} />,
    Callout,
    RateTable,
    InlineCTA,
    FaqList,
  };
}
