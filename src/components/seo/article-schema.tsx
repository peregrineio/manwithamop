import type { Post } from "@/lib/blog";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://manwithamop.com";

export function ArticleSchema({ post }: { post: Post }) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Ryan",
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Man With a Mop LLC",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };
  if (post.image) {
    schema.image = post.image.startsWith("http")
      ? post.image
      : `${SITE_URL}${post.image}`;
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
