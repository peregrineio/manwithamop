const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://manwithamop.com";

export function BreadcrumbListSchema({
  postTitle,
  postSlug,
}: {
  postTitle: string;
  postSlug: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Field Notes",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: postTitle,
        item: `${SITE_URL}/blog/${postSlug}`,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
