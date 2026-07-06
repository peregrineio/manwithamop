import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Author, Post } from "@/lib/blog";
import { InlineCTA } from "@/components/mdx/mdx-components";
import { BlogCard, type PostCardData } from "./blog-card";

export function BlogPostFooter({
  author,
  relatedPosts,
}: {
  author: Author | undefined;
  relatedPosts: Post[];
}) {
  const related: PostCardData[] = relatedPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    date: p.date,
    category: p.category,
    readingTime: p.readingTime,
    segment: p.segment,
  }));

  return (
    <div className="mx-auto max-w-3xl px-5 lg:px-8 pb-20">
      <InlineCTA />

      {author ? (
        <div className="border-2 border-[#1B1F24] bg-[#EDE6D6] p-6 flex gap-4">
          <div
            aria-hidden="true"
            className="hidden sm:flex size-12 shrink-0 items-center justify-center border-2 border-[#1B1F24] bg-[#E2501C] font-extrabold text-xl text-[#F6F1E7]"
          >
            {author.name.charAt(0)}
          </div>
          <div>
            <p className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#1B1F24]/60">
              {author.role}
            </p>
            <p className="mt-1 font-extrabold uppercase tracking-tight text-lg">
              {author.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#1B1F24]/75">
              {author.bio}
            </p>
          </div>
        </div>
      ) : null}

      {related.length > 0 ? (
        <div className="mt-12">
          <p className="font-site-utility text-[11px] uppercase tracking-[0.22em] text-[#E2501C] mb-6">
            More from the route
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-12">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 font-site-utility text-[12px] uppercase tracking-[0.18em] text-[#1B1F24] hover:text-[#E2501C] transition-colors"
        >
          <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
          Back to Field Notes
        </Link>
      </div>
    </div>
  );
}
