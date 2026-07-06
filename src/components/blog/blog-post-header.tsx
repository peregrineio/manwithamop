import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Post } from "@/lib/blog";
import { CategoryPill, formatPostDate } from "./blog-card";

export function BlogPostHeader({ post }: { post: Post }) {
  return (
    <section className="border-b-2 border-[#1B1F24]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-10 pb-12">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 font-site-utility text-[11px] uppercase tracking-[0.18em] text-[#1B1F24]/60 hover:text-[#E2501C] transition-colors"
        >
          <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
          Back to Field Notes
        </Link>

        {/* Work-order ticket strip */}
        <div className="mt-8 border-2 border-[#1B1F24] bg-[#1B1F24] px-5 py-2.5 flex flex-wrap items-center justify-between gap-3">
          <span className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#F6F1E7]">
            Field note · {post.segment === "commercial" ? "Business" : "Residential"}
          </span>
          <span className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#E2501C]">
            {formatPostDate(post.date)} · {post.readingTime}
          </span>
        </div>

        <div className="border-x-2 border-b-2 border-[#1B1F24] bg-[#F6F1E7] p-6 sm:p-10">
          <CategoryPill category={post.category} />
          <h1 className="mt-5 max-w-4xl font-extrabold uppercase tracking-[-0.02em] leading-[1.05] text-[clamp(1.9rem,4.5vw,3.4rem)]">
            {post.title}
          </h1>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#1B1F24]/75">
            {post.description}
          </p>
          <p className="mt-6 font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#1B1F24]/60">
            Filed by <span className="text-[#1B1F24]">Ryan · Founder</span>
          </p>
        </div>
      </div>
    </section>
  );
}
