import Link from "next/link";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Online Functional Skills Maths Exams | GCSE Equivalent Maths",
  description:
    "Learn about online Functional Skills Maths Level 1 and Level 2 exams, GCSE equivalent maths qualifications, remote exam booking and online maths course preparation.",
};

const homeFaqs = [
  {
    question: "What is Functional Skills Maths?",
    answer:
      "Functional Skills Maths is a practical maths qualification focused on real-life numeracy skills used in work, study and everyday situations. It covers topics such as number, percentages, ratios, measures, shape, space, data handling and problem solving.",
  },
  {
    question: "Can I take Functional Skills Maths Level 2 online?",
    answer:
      "Yes. Intech Centre offers an online Functional Skills Maths Level 2 exam route where learners can take the exam remotely from their own location, provided their computer, internet connection and room meet the online exam requirements.",
  },
  {
    question: "Is Functional Skills Maths Level 2 equivalent to GCSE Maths?",
    answer:
      "Functional Skills Maths Level 2 is widely used as a GCSE Maths equivalent route. It is commonly accepted by many universities, colleges, employers and apprenticeship providers as equivalent to GCSE Maths Grade 4/C.",
  },
  {
    question: "Who usually needs Functional Skills Maths Level 2?",
    answer:
      "Many learners need Functional Skills Maths Level 2 for university entry, nursing, teaching, social work, apprenticeships, construction, policing, career progression or job applications where a recognised maths qualification is required.",
  },
  {
    question: "What is the difference between Level 1 and Level 2?",
    answer:
      "Level 1 is below Level 2 and can be a useful stepping stone for learners who need to build confidence first. Level 2 is usually the level requested when a GCSE Maths equivalent qualification is needed.",
  },
  {
    question: "Do I need to complete a course before booking the exam?",
    answer:
      "Not always. Some candidates book the exam directly if they already feel prepared. Others prefer to complete an online Functional Skills Maths course first to revise the topics, practise exam-style questions and build confidence.",
  },
  {
    question:
      "How long does the online Functional Skills Maths Level 2 exam take?",
    answer:
      "The online Functional Skills Maths Level 2 exam lasts 1 hour 45 minutes. It includes a non-calculator section and a calculator section.",
  },
  {
    question: "Where can I book the online maths exam?",
    answer:
      "This website explains the exam route and preparation options. To book, learners should follow the current booking information from Intech Centre for the online Functional Skills Maths Level 2 exam.",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="GCSE equivalent maths qualification"
        title="Online Functional Skills Maths Exams"
        description="Understand Functional Skills Maths Level 1 and Level 2, learn how the online exam works, and choose the right preparation route before booking your City & Guilds maths exam."
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
              Choose your Functional Skills Maths route
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Whether you need a GCSE equivalent maths qualification or want to
              build confidence before the exam, compare the online exam, Level
              1, Level 2 and course preparation options.
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
                The most common route for learners who need a recognised GCSE
                equivalent maths qualification for university, apprenticeships,
                employment or career progression.
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
                A practical starting point for learners who want to strengthen
                their maths skills before progressing to the Level 2 exam.
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
                Study online with Functional Skills Maths preparation covering
                Entry Level, Level 1 and Level 2 topics before sitting your
                exam.
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

      <FAQSection title="Frequently asked questions" faqs={homeFaqs} />

      <CTASection
        title="Need a GCSE equivalent maths qualification?"
        description="Learn how the online Functional Skills Maths exam works, compare Level 1 and Level 2, and choose whether to book the exam directly or prepare with an online course first."
        link="/online-functional-skills-maths-exam"
        label="Explore Online Maths Exam"
      />
    </>
  );
}
