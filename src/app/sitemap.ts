import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    // "/service-pompa/depok", // Temporarily disabled.
  ].map((path) => ({
    url: absoluteUrl(path),
  }));
}
