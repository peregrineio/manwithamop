"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
}

export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      }
    };

    observerRef.current = new IntersectionObserver(handleObserver, {
      rootMargin: "-80px 0px -60% 0px",
      threshold: 0,
    });

    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter(Boolean);
    for (const el of elements) {
      observerRef.current.observe(el!);
    }

    return () => observerRef.current?.disconnect();
  }, [headings]);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  }

  const tocContent = (
    <nav>
      <p className="font-site-utility text-[10px] uppercase tracking-[0.22em] text-[#1B1F24]/55 mb-3">
        On this page
      </p>
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => scrollTo(heading.id)}
              className={cn(
                "text-sm text-left w-full py-1 transition-colors duration-200 border-l-2 cursor-pointer",
                heading.level === 3 ? "pl-6" : "pl-3",
                activeId === heading.id
                  ? "border-[#E2501C] text-[#E2501C] font-semibold"
                  : "border-[#1B1F24]/20 text-[#1B1F24]/60 hover:text-[#1B1F24]"
              )}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <div className="hidden lg:block self-start sticky top-24 w-[220px] shrink-0">
        {tocContent}
      </div>

      {/* Mobile: collapsible accordion */}
      <div className="lg:hidden mb-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full border-2 border-[#1B1F24] bg-[#EDE6D6] px-4 py-3 cursor-pointer"
        >
          <span className="font-site-utility text-[10px] uppercase tracking-[0.22em] text-[#1B1F24]/70">
            On this page
          </span>
          <ChevronDown
            className={cn(
              "size-4 text-[#1B1F24]/60 transition-transform",
              isOpen && "rotate-180"
            )}
          />
        </button>
        {isOpen && (
          <div className="border-x-2 border-b-2 border-[#1B1F24] bg-[#EDE6D6] px-4 pb-4 pt-3">
            {tocContent}
          </div>
        )}
      </div>
    </>
  );
}
