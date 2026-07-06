import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import readingTime from "reading-time";

const posts = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      title: s.string(),
      description: s.string(),
      date: s.isodate(),
      category: s.enum([
        "pricing",
        "service-guide",
        "comparison",
        "faq",
        "how-to",
        "local-guide",
        "commercial",
      ]),
      author: s.string(),
      tags: s.array(s.string()).default([]),
      featured: s.boolean().default(false),
      image: s.string().optional(),
      draft: s.boolean().default(false),
      faqs: s
        .array(s.object({ q: s.string(), a: s.string() }))
        .default([]),
      segment: s.enum(["residential", "commercial"]).default("residential"),
      city: s.string().optional(),
      service: s.string().optional(),
      slug: s.path(),
      body: s.mdx(),
    })
    .transform((data) => {
      const stats = readingTime(data.body);
      return {
        ...data,
        slug: data.slug.replace(/^blog\//, ""),
        readingTime: stats.text,
        wordCount: stats.words,
      };
    }),
});

const authors = defineCollection({
  name: "Author",
  pattern: "authors/**/*.json",
  schema: s.object({
    name: s.string(),
    slug: s.string(),
    role: s.string(),
    bio: s.string(),
    avatar: s.string().optional(),
  }),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts, authors },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
      [rehypePrettyCode, { theme: "github-dark" }],
    ],
  },
});
