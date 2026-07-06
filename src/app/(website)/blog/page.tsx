import type { Metadata } from "next";
import { getAllPosts, getFeaturedPost, getAllCategories } from "@/lib/blog";
import { BlogIndex } from "@/components/blog/blog-index";
import type { PostCardData } from "@/components/blog/blog-card";

export const metadata: Metadata = {
  title: { absolute: "Field Notes | Man With a Mop" },
  description:
    "Notes from the route — straight answers on house cleaning pricing, services, and keeping a Northwest Houston home in order. Written by the man himself.",
  alternates: { canonical: "/blog" },
};

function toCardData(post: ReturnType<typeof getAllPosts>[number]): PostCardData {
  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: post.date,
    category: post.category,
    readingTime: post.readingTime,
    segment: post.segment,
  };
}

export default function BlogPage() {
  const posts = getAllPosts().map(toCardData);
  const featured = getFeaturedPost();

  return (
    <BlogIndex
      posts={posts}
      featuredPost={featured ? toCardData(featured) : undefined}
      categories={getAllCategories()}
    />
  );
}
