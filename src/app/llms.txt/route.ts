import { SERVICES } from "@/data/services";
import { SERVICE_AREAS } from "@/data/service-areas";
import { getAllPosts } from "@/lib/blog";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://manwithamop.com";

export const dynamic = "force-static";

export function GET() {
  const posts = getAllPosts();

  const body = `# Man With a Mop LLC

Man With a Mop is a house and small-business cleaning service covering the
Northwest Houston corridor — Cypress, Katy, Hockley, Magnolia, Tomball, and
Conroe, TX. One insured, background-checked man does every job himself.
Posted rates (plus 8.25% Texas sales tax); the final quote depends on square
footage and number of rooms. Booking takes under two minutes at
${SITE_URL}/contact.

## Services
${SERVICES.map((s) => `- ${s.name} (${s.priceLabel}): ${SITE_URL}/services/${s.slug}`).join("\n")}

## Service Areas
${SERVICE_AREAS.map((a) => `- ${a.city}, TX: ${SITE_URL}/service-areas/${a.slug}`).join("\n")}

## Field Notes (Blog)
- Index: ${SITE_URL}/blog
${posts.map((p) => `- ${p.title}: ${SITE_URL}/blog/${p.slug}`).join("\n")}

## Key Pages
- Home: ${SITE_URL}/
- About: ${SITE_URL}/about
- Reviews: ${SITE_URL}/reviews
- Contact / Booking: ${SITE_URL}/contact
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
