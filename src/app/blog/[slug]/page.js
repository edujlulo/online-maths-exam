import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/data/blogPosts";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Blog article not found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default function BlogPostPage({ params }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article>
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-4xl px-6">
            <Link
              href="/blog"
              className="text-sm font-semibold text-blue-700 hover:text-blue-800"
            >
              ← Back to blog
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-blue-700">
              Functional Skills Maths Blog
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              {post.title}
            </h1>

            <p className="mt-4 text-sm text-slate-500">{post.date}</p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {post.description}
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="space-y-10">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-bold text-slate-950">
                    {section.heading}
                  </h2>
                  <p className="mt-4 leading-8 text-slate-600">
                    {section.content}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </section>
      </article>

      <FAQSection title="Questions about this topic" faqs={post.faqs} />

      <CTASection
        title="Looking for online maths exam information?"
        description="Explore Functional Skills Maths exam levels, preparation options and booking guidance."
        link="/online-functional-skills-maths-exam"
        label="View Online Maths Exam"
      />
    </>
  );
}
