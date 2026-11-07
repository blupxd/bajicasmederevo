import type { MetadataRoute } from "next";
import { siteUrl } from "@/constants";
import { serviceHref, services } from "@/constants/services";

const sitemap = (): MetadataRoute.Sitemap => {
  const now = new Date();
  return [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/usluge`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((s) => ({
      url: `${siteUrl}${serviceHref(s)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: `${siteUrl}/galerija`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
};

export default sitemap;
