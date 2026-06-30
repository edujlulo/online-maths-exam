import { getPublishedBlogPosts } from "@/data/blogPosts";

export const revalidate = 3600;

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

  const publishedPosts = getPublishedBlogPosts();

  const blogPages = publishedPosts.map((post) => ({
  url: `${baseUrl}/blog/${post.slug}`,
  lastModified: new Date(post.updatedAt || post.publishDate || post.date),
  changeFrequency: "monthly",
  priority: 0.6,
}));

  return [...staticPages, ...blogPages];
}
