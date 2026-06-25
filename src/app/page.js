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

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">
                Functional Skills Maths Level 2
              </h2>
              <p className="mt-3 text-slate-600">
                A popular option for learners who need a GCSE equivalent maths
                qualification for work, university, apprenticeships or career
                progression.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">
                Functional Skills Maths Level 1
              </h2>
              <p className="mt-3 text-slate-600">
                A useful step for learners who want to build confidence before
                progressing to Level 2.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">
                Online Maths Course
              </h2>
              <p className="mt-3 text-slate-600">
                Prepare before your exam with online maths learning designed to
                support Functional Skills Maths topics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Common questions" faqs={homeFaqs} />

      <CTASection
        title="Ready to learn more about online maths exams?"
        description="Explore the exam information and choose the level that best matches your goals."
        link="/online-functional-skills-maths-exam"
        label="Explore the Exam"
      />
    </>
  );
}
