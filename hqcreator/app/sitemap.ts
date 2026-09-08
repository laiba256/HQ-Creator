import { MetadataRoute } from "next";
import { getAllPostsMeta } from "@/lib/posts";

const SITE_URL = "https://hqcreator.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPostsMeta();

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.updated || post.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...postEntries,
  ];
}
