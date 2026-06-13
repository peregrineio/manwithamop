import type { MetadataRoute } from "next";
import { SERVICE_AREAS } from "@/data/service-areas";
import { SERVICES } from "@/data/services";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://manwithamop.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...SERVICES.map((s) => ({
      url: `${SITE_URL}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    { url: `${SITE_URL}/service-areas`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...SERVICE_AREAS.map((a) => ({
      url: `${SITE_URL}/service-areas/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/reviews`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
