import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllPosts,
  getPostBySlug,
  getAuthor,
  getRelatedPosts,
  extractHeadings,
} from "@/lib/blog";
import { BlogPostHeader } from "@/components/blog/blog-post-header";
import { BlogPostFooter } from "@/components/blog/blog-post-footer";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { MdxContent } from "@/components/mdx/mdx-content";
import { ArticleSchema } from "@/components/seo/article-schema";
import { FaqPageSchema } from "@/components/seo/faq-page-schema";
import { BreadcrumbListSchema } from "@/components/seo/breadcrumb-list-schema";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const author = getAuthor(post.author);

  return {
    title: { absolute: `${post.title} | Field Notes` },
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: author ? [author.name] : undefined,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const author = getAuthor(post.author);
  const relatedPosts = getRelatedPosts(post);
  const headings = extractHeadings(post.body);
  const showToc = post.wordCount > 1200 && headings.length > 1;

  const article = (
    <article className="max-w-3xl w-full min-w-0">
      <MdxContent code={post.body} />
    </article>
  );

  return (
    <>
      <BlogPostHeader post={post} />

      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-12">
        {showToc ? (
          <div className="lg:flex lg:justify-center lg:gap-12">
            <TableOfContents headings={headings} />
            {article}
            <div className="hidden xl:block w-[220px] shrink-0" />
          </div>
        ) : (
          <div className="mx-auto max-w-3xl">{article}</div>
        )}
      </div>

      <BlogPostFooter author={author} relatedPosts={relatedPosts} />

      <ArticleSchema post={post} />
      <BreadcrumbListSchema postTitle={post.title} postSlug={post.slug} />
      {post.faqs.length > 0 ? <FaqPageSchema faqs={post.faqs} /> : null}
    </>
  );
}
