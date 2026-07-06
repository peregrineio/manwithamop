import { posts, authors } from "#site/content";

export type Post = (typeof posts)[number];
export type Author = (typeof authors)[number];

export function getAllPosts() {
  return posts
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug && !post.draft);
}

export function getFeaturedPost() {
  const published = getAllPosts();
  return published.find((post) => post.featured) || published[0];
}

export function getPostsByCategory(category: string) {
  return getAllPosts().filter((post) => post.category === category);
}

export function getAuthor(slug: string) {
  return authors.find((author) => author.slug === slug);
}

export function getAllCategories() {
  return [
    { slug: "pricing", label: "Pricing" },
    { slug: "service-guide", label: "Service Guides" },
    { slug: "comparison", label: "Comparisons" },
    { slug: "faq", label: "FAQ" },
    { slug: "how-to", label: "How-To" },
    { slug: "local-guide", label: "Local Guides" },
    { slug: "commercial", label: "For Businesses" },
  ];
}

export function getRelatedPosts(post: Post, n = 3) {
  return getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .filter(
      (p) =>
        (post.city && p.city === post.city) ||
        (post.service && p.service === post.service) ||
        p.tags.some((t) => post.tags.includes(t))
    )
    .slice(0, n);
}

// Parses the Velite-compiled MDX function body for h2/h3 nodes (same
// approach as the Aeopic reference, but with the minified runtime variable
// names left as wildcards — they differ per build, e.g. `o.h2` vs `r.h2`).
export function extractHeadings(body: string) {
  const headings: { id: string; text: string; level: 2 | 3 }[] = [];
  const regex =
    /\w+\.h([23]),\{id:"([^"]+)",children:(?:\w+\(\w+\.a,\{href:"[^"]*",children:"([^"]+)"\}\)|"([^"]+)")/g;
  let match;
  while ((match = regex.exec(body)) !== null) {
    headings.push({
      level: parseInt(match[1]) as 2 | 3,
      id: match[2],
      text: match[3] || match[4],
    });
  }
  return headings;
}
