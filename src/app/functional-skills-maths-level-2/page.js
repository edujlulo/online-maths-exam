import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Functional Skills Maths Level 2",
  description:
    "Learn about Functional Skills Maths Level 2, GCSE equivalence, who needs it and how to prepare for the online exam.",
};

const faqs = [
  {
    question: "Is Functional Skills Maths Level 2 equivalent to GCSE?",
    answer:
      "Functional Skills Maths Level 2 is commonly accepted as a GCSE equivalent qualification by many employers, colleges and training providers.",
  },
  {
    question: "Who needs Functional Skills Maths Level 2?",
    answer:
      "It is often needed by learners applying for jobs, apprenticeships, university courses or professional training where a maths qualification is required.",
  },
  {
    question: "Can I take Functional Skills Maths Level 2 online?",
    answer:
      "Online exam options may be available through approved providers. Candidates should always check the provider's current booking instructions.",
  },
];

export default function Level2Page() {
  return (
    <>
      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Most popular level
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Functional Skills Maths Level 2
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Functional Skills Maths Level 2 is a popular route for learners who
            need a practical maths qualification that is commonly used as a GCSE
            equivalent.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-950">
            Why choose Level 2?
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Level 2 is often chosen by adults and learners who need maths for
            employment, further education, apprenticeships, teacher training,
            nursing or career development.
          </p>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Need Functional Skills Maths Level 2?"
        description="Check the exam information and booking route through Intech Centre."
        link="https://www.intechcentre.com/courses/functional-skills-maths-level-2-exam/"
        label="View Level 2 Exam Information"
      />
    </>
  );
}
