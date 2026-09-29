import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const pages = ["", "kraamzorg-almere", "over-mij", "recensies", "contact", "privacyverklaring"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: p ? `${site.url}/${p}` : `${site.url}/`,
    lastModified: new Date("2026-09-29"),
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : p === "privacyverklaring" ? 0.3 : 0.8,
  }));
}
