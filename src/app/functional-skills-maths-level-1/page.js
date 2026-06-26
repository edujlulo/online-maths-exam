import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Functional Skills Maths Level 1 | Online Exam & Course",
  description:
    "Learn about Functional Skills Maths Level 1, who it is for, how it helps learners progress towards Level 2 and how to prepare with an online maths course.",
};

const faqs = [
  {
    question: "What is Functional Skills Maths Level 1?",
    answer:
      "Functional Skills Maths Level 1 is a practical maths qualification for learners who want to improve everyday numeracy skills before progressing to Level 2. It focuses on real-life maths used in work, study and daily situations.",
  },
  {
    question: "Who is Functional Skills Maths Level 1 suitable for?",
    answer:
      "Level 1 can be suitable for adults, teenagers, apprentices and learners who are not yet ready for Level 2. It is often used as a stepping stone for people who want to build confidence before attempting a GCSE equivalent Level 2 qualification.",
  },
  {
    question: "Is Functional Skills Maths Level 1 equivalent to GCSE?",
    answer:
      "Functional Skills Maths Level 1 is below Level 2. Level 2 is the level most commonly used as a GCSE Maths Grade 4/C equivalent. Level 1 can help learners prepare before moving towards that Level 2 route.",
  },
  {
    question: "Can I take Functional Skills Maths Level 1 online?",
    answer:
      "Intech Centre provides online Functional Skills Maths exam routes. Their booking guidance says that if you want to book a City & Guilds Functional Skills Maths Level 1 exam, you should book through the Level 2 exam route and then reply to the booking email clearly stating that you want the Level 1 exam.",
  },
  {
    question:
      "How much does the online Functional Skills Maths Level 1 exam cost?",
    answer:
      "Intech Centre lists the Functional Skills Maths Level 1 or Level 2 online exam at £180 for each attempt. Candidates should always check the current Intech Centre booking page before paying, as prices and booking details can change.",
  },
  {
    question: "Can I prepare for Level 1 online?",
    answer:
      "Yes. Intech Centre's online Functional Skills Maths course includes Entry Level, Level 1 and Level 2, so learners can start from their current level and build up towards the exam.",
  },
  {
    question: "Should I choose Level 1 or Level 2?",
    answer:
      "If you need a GCSE equivalent qualification for university, employment or an apprenticeship, Level 2 is usually the level requested. If you are not ready for Level 2 yet, Level 1 can be a good starting point to build confidence and strengthen your maths skills.",
  },
  {
    question: "Does completing the course give me the qualification?",
    answer:
      "No. The online course is for preparation only. To gain a Functional Skills Maths qualification, you must take and pass the official Functional Skills Maths exam.",
  },
];

export default function Level1Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-emerald-50 via-white to-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-emerald-800">
            Build confidence before Level 2
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Functional Skills Maths Level 1
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Functional Skills Maths Level 1 is a practical route for learners
            who want to improve their maths confidence before progressing to
            Level 2. It can help you strengthen everyday numeracy skills and
            prepare for the online Functional Skills Maths exam route.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Best for
              </p>

              <h2 className="mt-3 text-xl font-bold text-slate-950">
                Learners building confidence
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Level 1 is useful if you have been away from maths for a long
                time, struggled with GCSE maths, or want a stronger foundation
                before attempting Level 2.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Progression
              </p>

              <h2 className="mt-3 text-xl font-bold text-slate-950">
                Step towards Level 2
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Many learners use Level 1 as a stepping stone before moving to
                Functional Skills Maths Level 2, which is the common GCSE
                equivalent route.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Preparation
              </p>

              <h2 className="mt-3 text-xl font-bold text-slate-950">
                Study online first
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Intech Centre's online maths course includes Entry Level, Level
                1 and Level 2, helping learners start from the level that suits
                them.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Level 1 explained
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              A practical starting point before the GCSE equivalent route
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-slate-600">
              Functional Skills Maths Level 1 focuses on practical maths used in
              everyday life, work and study. It can help learners improve their
              confidence with numbers, measures, data, problem solving and
              real-world maths questions before moving towards Level 2.
            </p>

            <p className="mt-4 max-w-4xl leading-7 text-slate-600">
              If your final goal is university, an apprenticeship, teacher
              training, nursing, healthcare, construction, policing or career
              progression, you may eventually need Functional Skills Maths Level
              2. However, Level 1 can be the right first step if you are not yet
              ready for the Level 2 exam.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Online exam route
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                How to book Level 1 through Intech Centre
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Intech Centre's guidance says that learners who want City &
                Guilds Functional Skills Maths Level 1 should book through the
                online Level 2 exam route and then reply to the booking email,
                clearly stating that they want the Level 1 exam.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Course support
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                Prepare with Entry Level, Level 1 and Level 2 content
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                The online Functional Skills Maths course gives access to all
                levels rather than charging separately for each level. This
                means learners can start with easier topics and progress towards
                Level 1 or Level 2 when ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Functional Skills Maths Level 1 FAQs" faqs={faqs} />

      <CTASection
        title="Ready to check the Level 1 online exam route?"
        description="Visit Intech Centre's online Functional Skills Maths exam page and follow their booking guidance if you want to request the Level 1 exam."
        link="https://www.intechcentre.com/courses/online-functional-skills-maths-level-2-exam-2/"
        label="View Online Exam Booking Route"
      />
    </>
  );
}
