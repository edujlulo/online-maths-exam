import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Online Functional Skills Maths Exam",
  description:
    "Learn how online Functional Skills Maths exams work, including Level 1, Level 2, preparation options and booking routes.",
};

const faqs = [
  {
    question: "What is an online Functional Skills Maths exam?",
    answer:
      "It is a maths exam that can be taken remotely through an approved exam provider, depending on the provider's booking process and exam requirements.",
  },
  {
    question: "Who is the online maths exam for?",
    answer:
      "It is suitable for adults, learners, apprentices and candidates who need a practical maths qualification for work, study or career progression.",
  },
  {
    question: "Can I prepare before booking the exam?",
    answer:
      "Yes, many learners complete an online maths course before booking the exam, especially if they need to improve confidence with key maths topics.",
  },
];

export default function OnlineFunctionalSkillsMathsExamPage() {
  return (
    <>
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Online Exam
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Online Functional Skills Maths Exam
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Functional Skills Maths exams help learners demonstrate practical
            maths ability for real-life, work and study situations. Online exam
            routes can make the process more flexible for candidates who want to
            complete their qualification remotely.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-950">
              What does the exam cover?
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Functional Skills Maths focuses on practical numeracy. Learners
              may be assessed on topics such as number, measures, shape, space,
              data handling and problem solving.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-950">
              Level 1 and Level 2
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Level 2 is commonly used as a GCSE equivalent route, while Level 1
              can be a useful step for learners who want to build confidence
              before progressing further.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Check exam booking information"
        description="Visit Intech Centre for current online Functional Skills Maths exam booking guidance."
        link="https://www.intechcentre.com/courses/functional-skills-maths-level-2-exam/"
        label="View Intech Centre Exam Page"
      />
    </>
  );
}
