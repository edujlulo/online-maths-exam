import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Functional Skills Maths Level 2 | GCSE Equivalent Maths",
  description:
    "Learn about Functional Skills Maths Level 2, GCSE equivalence, online exam structure, results, pass mark, preparation and booking routes through Intech Centre.",
};

const faqs = [
  {
    question: "What is Functional Skills Maths Level 2?",
    answer:
      "Functional Skills Maths Level 2 is a recognised maths qualification focused on practical numeracy for everyday life, work and further study. It assesses skills such as number, percentages, ratios, measures, shape, space, data handling and problem solving.",
  },
  {
    question: "Is Functional Skills Maths Level 2 equivalent to GCSE Maths?",
    answer:
      "Yes. Functional Skills Maths Level 2 is widely used as a GCSE Maths equivalent route and is commonly accepted as equivalent to GCSE Maths Grade 4/C by many employers, colleges, universities and apprenticeship providers.",
  },
  {
    question: "Who needs Functional Skills Maths Level 2?",
    answer:
      "Learners often need Maths Level 2 for university entry, nursing, midwifery, teacher training, apprenticeships, construction courses, policing, social work, career progression or job applications.",
  },
  {
    question: "Can I take Functional Skills Maths Level 2 online?",
    answer:
      "Yes. Intech Centre offers an online Functional Skills Maths Level 2 exam route. The exam is computer-based, remotely invigilated and can be taken from your own location if your setup meets the exam requirements.",
  },
  {
    question: "How long is the Functional Skills Maths Level 2 exam?",
    answer:
      "The Level 2 maths exam lasts 1 hour 45 minutes. It includes a 25-minute non-calculator section and a 1 hour 20 minute calculator section.",
  },
  {
    question: "What is the pass mark for Functional Skills Maths Level 2?",
    answer:
      "Intech Centre lists the City & Guilds indicative pass mark for Functional Skills Mathematics Level 2 as 31 out of 60, around 52%. This is indicative and can vary depending on the paper.",
  },
  {
    question: "How quickly will I get my result?",
    answer:
      "Results normally come within a week, but may take up to 20 working days. In exceptional circumstances, marking and processing can take longer.",
  },
  {
    question: "Can I book the exam without doing a course?",
    answer:
      "Yes. Candidates who feel ready can book the Functional Skills Maths Level 2 exam without enrolling on a course. Learners who need extra preparation can use an online maths course first.",
  },
  {
    question: "What happens if I am not ready for Level 2?",
    answer:
      "If you are not ready for Level 2, you can build confidence with Level 1 topics or use an online Functional Skills Maths course that covers Entry Level, Level 1 and Level 2.",
  },
];

export default function Level2Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-emerald-100 via-white to-emerald-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-emerald-800">
            Most popular level
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Functional Skills Maths Level 2
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Functional Skills Maths Level 2 is the main route for learners who
            need a recognised GCSE equivalent maths qualification for
            university, work, apprenticeships or career progression. The online
            exam route allows eligible candidates to complete the exam remotely
            with online invigilation.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              GCSE equivalent route
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Why choose Functional Skills Maths Level 2?
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-slate-600">
              Level 2 is usually the most important Functional Skills Maths
              level because it is widely used as an alternative to GCSE Maths
              Grade 4/C. Many learners need it to meet entry requirements for
              university, apprenticeships, teacher training, nursing,
              healthcare, construction, policing or better employment
              opportunities.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-emerald-50 p-5 ring-1 ring-emerald-100">
                <h3 className="font-bold text-slate-950">
                  Recognised qualification
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Awarded by City & Guilds and regulated by Ofqual, Functional
                  Skills Maths Level 2 is accepted by many organisations across
                  the UK.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                <h3 className="font-bold text-slate-950">
                  Practical maths skills
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The exam focuses on real-world maths, including numbers,
                  percentages, ratios, measures, graphs, data and problem
                  solving.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                <h3 className="font-bold text-slate-950">Online exam option</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Learners can choose an online exam route and sit the exam
                  remotely if they meet the technical and room requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Exam structure
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                Calculator and non-calculator sections
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                The Level 2 exam is 1 hour 45 minutes. The non-calculator
                section is 25 minutes and the calculator section is 1 hour 20
                minutes. The final result is based on the total marks across
                both sections.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Preparation
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                Prepare before you book
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                If you are not ready to sit the exam yet, you can revise with an
                online Functional Skills Maths course covering Entry Level,
                Level 1 and Level 2 topics before booking your exam.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Need Functional Skills Maths Level 2?"
        description="Check the online exam information, current price, available slots and booking route through Intech Centre."
        link="https://www.intechcentre.com/courses/online-functional-skills-maths-level-2-exam-2/"
        label="View Online Level 2 Exam"
      />
    </>
  );
}
