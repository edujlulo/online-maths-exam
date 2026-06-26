import Link from "next/link";
import { notFound } from "next/navigation";
import {
  blogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/data/blogPosts";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

const baseUrl = "https://onlinemathsexam.co.uk";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog article not found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${baseUrl}/blog/${post.slug}`,
      siteName: "Online Maths Exam",
      type: "article",
      locale: "en_GB",
    },
  };
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function ArticleCta({ cta }) {
  if (!cta) return null;

  return (
    <div className="my-10 rounded-[2rem] border border-emerald-100 bg-emerald-50/70 p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
        Recommended next step
      </p>

      <h2 className="mt-3 text-2xl font-bold text-slate-950">{cta.title}</h2>

      <p className="mt-4 leading-7 text-slate-600">{cta.description}</p>

      <Link
        href={cta.link}
        className="mt-6 inline-flex rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-700/20 transition hover:-translate-y-0.5 hover:bg-emerald-800"
      >
        {cta.label}
      </Link>
    </div>
  );
}

function JsonLd({ post }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: {
      "@type": "Organization",
      name: "Online Maths Exam",
    },
    publisher: {
      "@type": "Organization",
      name: "Online Maths Exam",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${baseUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${baseUrl}/blog/${post.slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post);

  return (
    <>
      <JsonLd post={post} />

      <article>
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-slate-50 py-16 md:py-20">
          <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute bottom-[-140px] right-[-120px] h-80 w-80 rounded-full bg-emerald-300/30 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-6">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-sm text-slate-500"
            >
              <Link href="/" className="transition hover:text-emerald-700">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="transition hover:text-emerald-700">
                Blog
              </Link>
              <span>/</span>
              <span className="text-slate-700">{post.category}</span>
            </nav>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-emerald-800">
                  {post.category}
                </p>

                <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                  {post.title}
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                  {post.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
                  <span>Updated {formatDate(post.updatedAt || post.date)}</span>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="min-h-[320px] rounded-[2rem] border border-emerald-100 bg-cover bg-center p-6 shadow-2xl shadow-slate-200"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, rgba(6, 78, 59, 0.25), rgba(15, 23, 42, 0.35)), url(${post.image})`,
                }}
                role="img"
                aria-label={post.imageAlt}
              >
                <div className="flex h-full min-h-[268px] flex-col justify-between rounded-[1.5rem] border border-white/10 bg-white/10 p-6 text-white backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200">
                    Online Maths Exam Guide
                  </p>

                  <div>
                    <p className="text-3xl font-bold">{post.category}</p>
                    <p className="mt-3 text-sm leading-6 text-emerald-50">
                      Functional Skills Maths information for learners preparing
                      for their next step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[260px_minmax(0,1fr)]">
            <aside className="hidden lg:block">
              <div className="sticky top-32 rounded-3xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  On this page
                </p>

                <nav className="mt-5 space-y-3">
                  {post.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-sm leading-6 text-slate-600 transition hover:text-emerald-800"
                    >
                      {section.heading}
                    </a>
                  ))}

                  <a
                    href="#questions-about-this-topic"
                    className="block text-sm leading-6 text-slate-600 transition hover:text-emerald-800"
                  >
                    Questions about this topic
                  </a>
                </nav>
              </div>
            </aside>

            <div className="min-w-0">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-10">
                <div className="space-y-10">
                  {post.sections.map((section, index) => (
                    <section key={section.id} id={section.id}>
                      <h2 className="scroll-mt-32 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                        {section.heading}
                      </h2>

                      <p className="mt-4 text-lg leading-8 text-slate-600">
                        {section.content}
                      </p>

                      {index === 1 && <ArticleCta cta={post.cta} />}
                    </section>
                  ))}
                </div>
              </div>

              {relatedPosts.length > 0 && (
                <section className="mt-12">
                  <div className="mb-6">
                    <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                      Related guides
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                      Keep reading
                    </h2>
                  </div>

                  <div className="grid gap-6 md:grid-cols-3">
                    {relatedPosts.map((relatedPost) => (
                      <article
                        key={relatedPost.slug}
                        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
                      >
                        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                          {relatedPost.category}
                        </p>

                        <h3 className="mt-3 text-lg font-bold leading-7 text-slate-950">
                          {relatedPost.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {relatedPost.excerpt}
                        </p>

                        <Link
                          href={`/blog/${relatedPost.slug}`}
                          className="mt-5 inline-flex text-sm font-semibold text-emerald-800 transition hover:text-emerald-900"
                        >
                          Read guide →
                        </Link>
                      </article>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </section>
      </article>

      <div id="questions-about-this-topic">
        <FAQSection title="Questions about this topic" faqs={post.faqs} />
      </div>

      <CTASection
        title={post.cta?.title || "Looking for online maths exam information?"}
        description={
          post.cta?.description ||
          "Explore Functional Skills Maths exam levels, preparation options and booking guidance."
        }
        link={post.cta?.link || "/online-functional-skills-maths-exam"}
        label={post.cta?.label || "View Online Maths Exam"}
      />
    </>
  );
}
