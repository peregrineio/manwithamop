import Link from "next/link";

// Light shape passed from server pages into the client index — never the
// full Velite Post (the compiled MDX body would bloat the RSC payload).
export interface PostCardData {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
  segment: string;
}

// Muted workwear accents so each category reads distinct on the card pill
// without leaving the Work Order palette family.
export const CATEGORY_ACCENTS: Record<string, string> = {
  pricing: "#E2501C",
  "service-guide": "#3D5A6C",
  comparison: "#8C3B2E",
  faq: "#6B7245",
  "how-to": "#B9821C",
  "local-guide": "#4A6B4F",
  commercial: "#1B1F24",
};

export const CATEGORY_LABELS: Record<string, string> = {
  pricing: "Pricing",
  "service-guide": "Service Guides",
  comparison: "Comparisons",
  faq: "FAQ",
  "how-to": "How-To",
  "local-guide": "Local Guides",
  commercial: "For Businesses",
};

export function formatPostDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function CategoryPill({ category }: { category: string }) {
  const accent = CATEGORY_ACCENTS[category] ?? "#E2501C";
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 font-site-utility text-[10px] uppercase tracking-[0.18em] text-[#F6F1E7]"
      style={{ backgroundColor: accent }}
    >
      {CATEGORY_LABELS[category] ?? category}
    </span>
  );
}

export function BlogCard({ post }: { post: PostCardData }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col border-2 border-[#1B1F24] bg-[#F6F1E7] p-6 transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_#1B1F24]"
    >
      <div className="flex items-center justify-between gap-3">
        <CategoryPill category={post.category} />
        {post.segment === "commercial" ? (
          <span className="font-site-utility text-[10px] uppercase tracking-[0.18em] text-[#1B1F24]/50">
            Business
          </span>
        ) : null}
      </div>
      <h3 className="mt-4 font-extrabold uppercase tracking-tight text-lg leading-snug group-hover:text-[#E2501C] transition-colors">
        {post.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-[#1B1F24]/70 line-clamp-3">
        {post.description}
      </p>
      <p className="mt-auto pt-5 font-site-utility text-[11px] uppercase tracking-[0.18em] text-[#1B1F24]/55">
        {formatPostDate(post.date)} · {post.readingTime}
      </p>
    </Link>
  );
}
