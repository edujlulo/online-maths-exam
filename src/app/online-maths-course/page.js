import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Online Maths Course",
  description:
    "Prepare for your Functional Skills Maths exam with online maths course information and study guidance.",
};

const faqs = [
  {
    question: "Do I need a course before taking the exam?",
    answer:
      "Some learners may be ready to book the exam directly, while others benefit from completing an online maths course first.",
  },
  {
    question: "Can I study Functional Skills Maths online?",
    answer:
      "Yes, online maths courses can help learners prepare flexibly from home and focus on the topics required for the exam.",
  },
  {
    question: "Is the course suitable for adults?",
    answer:
      "Online Functional Skills Maths courses are often suitable for adult learners who need a practical maths qualification for work or study.",
  },
];

export default function OnlineMathsCoursePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-emerald-50 via-white to-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-emerald-800">
            Exam preparation
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Online Maths Course
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            If you are not ready to take the exam yet, an online maths course
            can help you prepare for Functional Skills Maths Level 1 or Level 2.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Study online
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Prepare before you book
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              A structured online course can help learners revise key topics,
              practise exam-style questions and build confidence before sitting
              the Functional Skills Maths exam.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Explore online maths preparation"
        description="Visit Intech Centre to learn more about online maths course options."
        link="https://www.intechcentre.com/"
        label="Visit Intech Centre"
      />
    </>
  );
}
