import Link from "next/link";
import { getPublishedBlogPosts } from "@/data/blogPosts";

export const metadata = {
  title: "Functional Skills Maths Blog | Online Maths Exam Guides",
  description:
    "Read clear Functional Skills Maths guides about online exams, Level 1, Level 2, GCSE equivalence, exam preparation and online maths course support.",
};

export const revalidate = 3600;

function formatDate(date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default function BlogPage() {
const publishedPosts = getPublishedBlogPosts();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Functional Skills Maths Blog",
    description:
      "Guides about Functional Skills Maths exams, online maths exams, Level 1, Level 2, GCSE equivalence and exam preparation.",
    url: "https://onlinemathsexam.co.uk/blog",
    blogPost: publishedPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishDate || post.date,
      dateModified: post.updatedAt || post.date,
      url: `https://onlinemathsexam.co.uk/blog/${post.slug}`,
      image: post.image,
      articleSection: post.category,
      keywords: post.tags?.join(", "),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-slate-50 py-16 md:py-24">
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute bottom-[-140px] right-[-120px] h-80 w-80 rounded-full bg-emerald-300/30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <p className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-emerald-800">
            Functional Skills Maths Blog
          </p>

          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Online Maths Exam Guides and Functional Skills Maths Advice
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Simple, practical guides to help learners understand Functional
            Skills Maths, online exam booking, Level 1, Level 2, GCSE equivalent
            maths and exam preparation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-slate-600">
            <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-100">
              Online maths exam
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-100">
              Functional Skills Maths Level 2
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-100">
              GCSE equivalent maths
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Latest articles
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Functional Skills Maths guides
              </h2>
            </div>

            <p className="max-w-2xl leading-7 text-slate-600 md:text-right">
              Browse all our articles about online Functional Skills Maths
              exams, course preparation, Level 1, Level 2 and GCSE equivalent
              qualifications.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {publishedPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block"
                  aria-label={`Read article: ${post.title}`}
                >
                  <div
                    className="min-h-48 bg-cover bg-center p-5"
                    style={{
                      backgroundImage: `url(${post.image})`,
                    }}
                    role="img"
                    aria-label={post.imageAlt}
                  >
                    <span className="inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <time dateTime={post.updatedAt || post.publishDate || post.date}>
  Updated {formatDate(post.updatedAt || post.publishDate || post.date)}
</time>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold leading-7 text-slate-950">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition group-hover:text-emerald-800"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="mt-3 flex-1 leading-7 text-slate-600">
                    {post.excerpt}
                  </p>

                  {post.tags?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-emerald-800 transition group-hover:text-emerald-900"
                  >
                    Read article
                    <span className="ml-1 transition group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-sm md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                Ready to understand the exam route?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Learn how the online Functional Skills Maths exam works
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                Find out how online Functional Skills Maths exams work, what
                Level 1 and Level 2 mean, and how to prepare before booking.
              </p>
            </div>

            <Link
              href="/online-functional-skills-maths-exam"
              className="inline-flex justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              View Online Maths Exam
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}