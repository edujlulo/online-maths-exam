import Link from "next/link";
import { blogPosts, getFeaturedBlogPost } from "@/data/blogPosts";

export const metadata = {
  title: "Functional Skills Maths Blog & Guides",
  description:
    "Read guides about Functional Skills Maths exams, Level 1, Level 2, GCSE equivalence, online maths exam setup and course preparation.",
};

const topics = [
  "Online exam",
  "Level 2",
  "Level 1",
  "GCSE equivalent",
  "Course preparation",
  "Exam day checklist",
];

function formatDate(date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default function BlogPage() {
  const featuredPost = getFeaturedBlogPost();
  const latestPosts = blogPosts.filter(
    (post) => post.slug !== featuredPost.slug,
  );

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-slate-50 py-16 md:py-20">
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute bottom-[-140px] right-[-120px] h-80 w-80 rounded-full bg-emerald-300/30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <p className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-emerald-800">
            Functional Skills Maths resources
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Functional Skills Maths Blog & Guides
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Helpful guides about online Functional Skills Maths exams, Level 1,
            Level 2, GCSE equivalent maths, online exam setup and course
            preparation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              Online maths exam
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              Level 1 and Level 2
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              GCSE equivalent route
            </span>
          </div>
        </div>
      </section>

      <section className="border-y border-emerald-100 bg-white py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Blog focus
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-950">
                Online maths exams
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Understand the online Functional Skills Maths exam route before
                booking.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/70 p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Most searched
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-950">
                GCSE equivalent maths
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Learn how Level 2 compares with GCSE Maths Grade 4/C
                requirements.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Preparation
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-950">
                Course and revision
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Explore when to prepare with an online maths course before the
                exam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {featuredPost && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Featured guide
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Start with the main online exam guide
              </h2>
            </div>

            <article className="grid overflow-hidden rounded-[2rem] border border-emerald-100 bg-emerald-50/60 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="rounded-full bg-white px-4 py-2 font-semibold text-emerald-800 shadow-sm">
                    {featuredPost.category}
                  </span>
                  <span className="text-slate-500">
                    Updated{" "}
                    {formatDate(featuredPost.updatedAt || featuredPost.date)}
                  </span>
                  <span className="text-slate-500">
                    {featuredPost.readingTime}
                  </span>
                </div>

                <h3 className="mt-6 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                  {featuredPost.title}
                </h3>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="mt-8 inline-flex rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-700/20 transition hover:-translate-y-0.5 hover:bg-emerald-800"
                >
                  Read featured guide
                </Link>
              </div>

              <div
                className="min-h-[280px] bg-cover bg-center p-8"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, rgba(6, 78, 59, 0.25), rgba(15, 23, 42, 0.35)), url(${featuredPost.image})`,
                }}
                role="img"
                aria-label={featuredPost.imageAlt}
              >
                <div className="flex h-full min-h-[220px] flex-col justify-between rounded-[1.5rem] border border-white/10 bg-white/10 p-6 text-white backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200">
                    Online Maths Exam
                  </p>

                  <div>
                    <p className="text-4xl font-bold">Level 2</p>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-emerald-50">
                      GCSE equivalent Functional Skills Maths route for many
                      learners.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Browse by topic
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Find the right Functional Skills Maths guide
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Use these topic areas to plan future blog categories and make
                the section feel easier to browse as more weekly articles are
                added.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-emerald-100 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Latest guides
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              More Functional Skills Maths articles
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Read practical guides about the online maths exam, GCSE
              equivalence, Level 1, Level 2 and preparation options.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
              >
                <div
                  className="min-h-44 bg-cover bg-center p-5"
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

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                    <span>
                      Updated {formatDate(post.updatedAt || post.date)}
                    </span>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold leading-7 text-slate-950">
                    {post.title}
                  </h3>

                  <p className="mt-3 flex-1 leading-7 text-slate-600">
                    {post.excerpt}
                  </p>

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

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 inline-flex text-sm font-semibold text-emerald-800 transition group-hover:text-emerald-900"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-sm md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                Need a GCSE equivalent maths qualification?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Learn how the online Functional Skills Maths exam route works
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                Compare Level 1, Level 2 and online preparation before choosing
                whether to book the exam directly or prepare with a course
                first.
              </p>
            </div>

            <Link
              href="/online-functional-skills-maths-exam"
              className="inline-flex rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              View Online Maths Exam
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
