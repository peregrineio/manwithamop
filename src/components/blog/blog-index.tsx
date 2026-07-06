"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  BlogCard,
  CategoryPill,
  formatPostDate,
  type PostCardData,
} from "./blog-card";
import { cn } from "@/lib/utils";

interface Category {
  slug: string;
  label: string;
}

interface BlogIndexProps {
  posts: PostCardData[];
  featuredPost: PostCardData | undefined;
  categories: Category[];
}

export function BlogIndex({ posts, featuredPost, categories }: BlogIndexProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  const hero = activeCategory === "all" ? featuredPost : undefined;
  const gridPosts = hero
    ? filteredPosts.filter((p) => p.slug !== hero.slug)
    : filteredPosts;

  // Only show chips for categories that actually have posts.
  const liveCategories = categories.filter((c) =>
    posts.some((p) => p.category === c.slug)
  );

  return (
    <>
      {/* ── Header ─────────────────────────────────────────────────── */}
      <section className="border-b-2 border-[#1B1F24]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-12">
          <p className="flex items-center gap-2.5 font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#1B1F24]/70">
            <span className="size-2 bg-[#E2501C]" aria-hidden="true" />
            Notes from the route · NW Houston
          </p>
          <h1 className="mt-4 font-extrabold uppercase tracking-[-0.02em] leading-none text-[clamp(2.6rem,7vw,5rem)]">
            Field notes.
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#1B1F24]/75">
            What the man learns on the job, written down. Straight answers on
            pricing, cleaning, and keeping a Northwest Houston home in order —
            no hype, no jargon.
          </p>
        </div>
      </section>

      {/* ── Category filter chips ──────────────────────────────────── */}
      <section className="border-b-2 border-[#1B1F24] bg-[#EDE6D6]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-4 flex flex-wrap gap-2">
          {[{ slug: "all", label: "All Notes" }, ...liveCategories].map((c) => (
            <button
              key={c.slug}
              onClick={() => setActiveCategory(c.slug)}
              className={cn(
                "px-3 py-1.5 border-2 border-[#1B1F24] font-site-utility text-[11px] uppercase tracking-[0.18em] transition-colors cursor-pointer",
                activeCategory === c.slug
                  ? "bg-[#1B1F24] text-[#F6F1E7]"
                  : "bg-transparent text-[#1B1F24] hover:bg-[#1B1F24]/10"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── Featured note ──────────────────────────────────────────── */}
      {hero ? (
        <section className="border-b-2 border-[#1B1F24]">
          <div className="mx-auto max-w-7xl px-5 lg:px-8 py-12">
            <p className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#E2501C] mb-6">
              Pinned to the board
            </p>
            <Link
              href={`/blog/${hero.slug}`}
              className="group block border-2 border-[#1B1F24] bg-[#F6F1E7] shadow-[8px_8px_0_#1B1F24] transition-transform duration-150 hover:-translate-x-1 hover:-translate-y-1"
            >
              <div className="border-b-2 border-[#1B1F24] bg-[#1B1F24] px-5 py-2.5 flex flex-wrap items-center justify-between gap-3">
                <span className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#F6F1E7]">
                  Note Nº 01 — Featured
                </span>
                <span className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#E2501C]">
                  {formatPostDate(hero.date)} · {hero.readingTime}
                </span>
              </div>
              <div className="p-6 sm:p-10">
                <CategoryPill category={hero.category} />
                <h2 className="mt-5 font-extrabold uppercase tracking-[-0.02em] leading-[1.05] text-[clamp(1.7rem,4vw,3rem)] group-hover:text-[#E2501C] transition-colors">
                  {hero.title}
                </h2>
                <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#1B1F24]/75">
                  {hero.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-site-utility text-[12px] uppercase tracking-[0.18em] text-[#1B1F24] group-hover:text-[#E2501C] transition-colors">
                  Read the note
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      ) : null}

      {/* ── Grid ───────────────────────────────────────────────────── */}
      <section className="py-12 pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#1B1F24]/55 mb-8">
            {activeCategory === "all"
              ? `All notes (${gridPosts.length + (hero ? 1 : 0)})`
              : `${
                  categories.find((c) => c.slug === activeCategory)?.label ??
                  activeCategory
                } (${gridPosts.length})`}
          </p>
          {gridPosts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {gridPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : hero ? null : (
            <p className="border-2 border-dashed border-[#1B1F24]/40 px-6 py-16 text-center font-site-utility text-[12px] uppercase tracking-[0.18em] text-[#1B1F24]/50">
              No notes filed under this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
