import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";

export const metadata = {
  title: "Functional Skills Maths Level 1 | Online Exam & Course",
  description:
    "Learn about Functional Skills Maths Level 1, online exam options, course preparation and how Level 1 can help learners progress towards the GCSE equivalent Level 2 route.",
};

const progressionSteps = [
  {
    level: "Entry Level",
    title: "Start with the basics",
    description:
      "Build basic number confidence and prepare for more structured Functional Skills Maths topics.",
  },
  {
    level: "Level 1",
    title: "Strengthen practical maths",
    description:
      "Develop everyday maths skills and prepare for progression towards Level 2.",
  },
  {
    level: "Level 2",
    title: "GCSE equivalent route",
    description:
      "The level most commonly requested for university, apprenticeships, work and further study.",
  },
];

const levelComparison = [
  {
    title: "Functional Skills Maths Level 1",
    badge: "Build confidence",
    points: [
      "Best for learners who are not ready for Level 2 yet",
      "Helps strengthen practical maths foundations",
      "Useful stepping stone before the GCSE equivalent route",
      "Can be supported by online course preparation",
    ],
  },
  {
    title: "Functional Skills Maths Level 2",
    badge: "GCSE equivalent route",
    points: [
      "Widely used as equivalent to GCSE Maths Grade 4/C",
      "Commonly requested by employers, universities and apprenticeships",
      "Often needed for nursing, teacher training and career progression",
      "Can be taken online through the correct exam route",
    ],
  },
];

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
  {
    question:
      "Can Functional Skills Maths Level 1 help me prepare for Level 2?",
    answer:
      "Yes. Functional Skills Maths Level 1 can help learners build confidence with practical maths before progressing to Level 2, which is the common GCSE equivalent route for work, university and apprenticeship requirements.",
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

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              Practical maths foundations
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              Stepping stone to Level 2
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              Online course preparation
            </span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-lg font-bold text-emerald-800">
                1
              </div>

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
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-700 text-lg font-bold text-white">
                ↑
              </div>

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
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-lg font-bold text-white">
                ✓
              </div>

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

          <div className="mt-12 rounded-3xl border border-emerald-100 bg-emerald-50/60 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Progression path
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              From Entry Level to Level 2
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-slate-600">
              Intech Centre's online Functional Skills Maths course includes
              Entry Level, Level 1 and Level 2. This helps learners start from
              their current ability and build towards the level they need.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {progressionSteps.map((step) => (
                <div
                  key={step.level}
                  className="relative rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-sm font-bold text-emerald-800">
                    {step.level === "Entry Level"
                      ? "E"
                      : step.level === "Level 1"
                        ? "1"
                        : "2"}
                  </div>

                  <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                    {step.level}
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Compare levels
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Level 1 vs Level 2
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                The right level depends on your current confidence and what you
                need the qualification for. Level 1 is usually a preparation
                route, while Level 2 is the common GCSE equivalent route.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {levelComparison.map((level) => (
                <div
                  key={level.title}
                  className={`rounded-[2rem] border p-8 shadow-sm ${
                    level.title.includes("Level 2")
                      ? "border-emerald-100 bg-emerald-50/60"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
                    {level.badge}
                  </p>

                  <h3 className="mt-5 text-2xl font-bold text-slate-950">
                    {level.title}
                  </h3>

                  <ul className="mt-6 space-y-4">
                    {level.points.map((point) => (
                      <li key={point} className="flex gap-3 leading-7">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-800">
                          ✓
                        </span>
                        <span className="text-slate-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
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

              <a
                href="https://www.intechcentre.com/courses/online-functional-skills-maths-level-2-exam-2/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-700/20 transition hover:-translate-y-0.5 hover:bg-emerald-800"
              >
                View Intech Centre Level 1 Booking Route
              </a>
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
              <div className="mt-8 text-center">
                <Link
                  href="/functional-skills-maths-level-2"
                  className="inline-flex text-sm font-semibold text-emerald-800 transition hover:text-emerald-900"
                >
                  Learn more about Functional Skills Maths Level 2 →
                </Link>
              </div>
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
