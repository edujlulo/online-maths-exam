import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Functional Skills Maths Level 1",
  description:
    "Learn about Functional Skills Maths Level 1, who it is for and how it can help learners progress towards Level 2.",
};

const faqs = [
  {
    question: "Who is Functional Skills Maths Level 1 for?",
    answer:
      "Level 1 can be suitable for learners who want to improve practical maths skills before progressing to Level 2.",
  },
  {
    question: "Is Level 1 the same as Level 2?",
    answer:
      "No. Level 1 is below Level 2. Many learners use Level 1 as a stepping stone before attempting Level 2.",
  },
  {
    question: "How do I book Level 1?",
    answer:
      "Candidates should check the current booking guidance from the exam provider, as Level 1 may follow a specific booking process.",
  },
];

export default function Level1Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-emerald-50 via-white to-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-emerald-800">
            Build confidence
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Functional Skills Maths Level 1
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Functional Skills Maths Level 1 is useful for learners who want to
            develop practical maths confidence before moving towards Level 2.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Build strong foundations
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              A stepping stone towards Level 2
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Level 1 can help learners strengthen core maths skills and prepare
              for future progression. It may be suitable for candidates who are
              not yet ready for Level 2.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Check Level 1 booking guidance"
        description="Visit Intech Centre and follow their current instructions for Functional Skills Maths exam bookings."
        link="https://www.intechcentre.com/courses/functional-skills-maths-level-2-exam/"
        label="View Intech Centre Exam Page"
      />
    </>
  );
}
