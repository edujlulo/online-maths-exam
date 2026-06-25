import Link from "next/link";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Online Functional Skills Maths Exams",
  description:
    "Learn about online Functional Skills Maths exams, Level 1, Level 2, GCSE equivalence and online maths course preparation.",
};

const homeFaqs = [
  {
    question: "What is Functional Skills Maths?",
    answer:
      "Functional Skills Maths is a practical maths qualification designed to help learners use maths in everyday life, work and further study.",
  },
  {
    question: "Can I take the Functional Skills Maths exam online?",
    answer:
      "Yes, learners can take Functional Skills Maths exams online through approved providers. This website helps explain the process and links to exam booking information.",
  },
  {
    question: "Is Functional Skills Maths Level 2 equivalent to GCSE?",
    answer:
      "Functional Skills Maths Level 2 is commonly accepted as a GCSE equivalent qualification for many jobs, courses and training programmes.",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Online Maths Exam"
        title="Online Functional Skills Maths Exams"
        description="Learn about Functional Skills Maths Level 1 and Level 2, understand how online exams work, and find preparation options before booking your exam."
        primaryLink="/online-functional-skills-maths-exam"
        primaryLabel="View Online Maths Exam"
        secondaryLink="/online-maths-course"
        secondaryLabel="Prepare with Online Maths Course"
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Choose the right route
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Online maths exam and preparation options
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Find clear information about Functional Skills Maths Level 1,
              Level 2 and online preparation before choosing your next step.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="group rounded-3xl border border-emerald-100 bg-emerald-50/60 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-700 text-lg font-bold text-white">
                2
              </div>

              <h2 className="text-xl font-bold text-slate-950">
                Functional Skills Maths Level 2
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                A popular option for learners who need a GCSE equivalent maths
                qualification for work, university, apprenticeships or career
                progression.
              </p>

              <Link
                href="/functional-skills-maths-level-2"
                className="mt-6 inline-flex text-sm font-semibold text-emerald-800 transition group-hover:text-emerald-900"
              >
                Learn about Level 2 →
              </Link>
            </div>

            <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-lg font-bold text-white">
                1
              </div>

              <h2 className="text-xl font-bold text-slate-950">
                Functional Skills Maths Level 1
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                A useful step for learners who want to build confidence before
                progressing to Level 2.
              </p>

              <Link
                href="/functional-skills-maths-level-1"
                className="mt-6 inline-flex text-sm font-semibold text-emerald-800 transition group-hover:text-emerald-900"
              >
                Learn about Level 1 →
              </Link>
            </div>

            <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-lg font-bold text-emerald-800">
                ✓
              </div>

              <h2 className="text-xl font-bold text-slate-950">
                Online Maths Course
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Prepare before your exam with online maths learning designed to
                support Functional Skills Maths topics.
              </p>

              <Link
                href="/online-maths-course"
                className="mt-6 inline-flex text-sm font-semibold text-emerald-800 transition group-hover:text-emerald-900"
              >
                View course options →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Common questions" faqs={homeFaqs} />

      <CTASection
        title="Ready to book or prepare for your online maths exam?"
        description="Explore the Functional Skills Maths exam information, compare the levels and choose the best route for your goals."
        link="/online-functional-skills-maths-exam"
        label="Explore Online Maths Exams"
      />
    </>
  );
}
