import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export const metadata = {
  title: "Functional Skills Maths Blog",
  description:
    "Read guides about Functional Skills Maths exams, Level 1, Level 2, GCSE equivalence and online maths preparation.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Blog
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Functional Skills Maths Blog
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Helpful articles about online maths exams, Functional Skills levels,
            GCSE equivalence and exam preparation.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm text-slate-500">{post.date}</p>
              <h2 className="mt-3 text-xl font-semibold text-slate-950">
                {post.title}
              </h2>
              <p className="mt-3 leading-7 text-slate-600">{post.excerpt}</p>

              <Link
                href={`/blog/${post.slug}`}
                // href="/blog"
                className="mt-5 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
