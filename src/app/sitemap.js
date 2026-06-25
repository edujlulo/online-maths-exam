import { blogPosts } from "@/data/blogPosts";

export default function sitemap() {
  const baseUrl = "https://onlinemathsexam.co.uk";

  const pages = [
    "",
    "/online-functional-skills-maths-exam",
    "/functional-skills-maths-level-2",
    "/functional-skills-maths-level-1",
    "/online-maths-course",
    "/blog",
  ];

  const staticPages = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page === "" ? 1 : 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
