import Link from "next/link";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Online Functional Skills Maths Course | Level 1 & Level 2",
  description:
    "Prepare for Functional Skills Maths Level 1 and Level 2 with an online self-learning course covering Entry Level to Level 2, diagnostic assessment, skill checks and revision scenarios.",
};

const courseFacts = [
  {
    label: "Access",
    value: "2 months online",
    detail: "Unlimited access during the course period",
    icon: "⏱",
  },
  {
    label: "Levels",
    value: "Entry Level to Level 2",
    detail: "Start from your current maths level",
    icon: "↑",
  },
  {
    label: "Price",
    value: "£75 with exam",
    detail: "Or £150 as a standalone course",
    icon: "£",
  },
  {
    label: "Purpose",
    value: "Exam preparation",
    detail: "Prepare before sitting the official exam",
    icon: "✓",
  },
];

const courseSteps = [
  {
    step: "01",
    title: "Initial assessment",
    description:
      "Checks your current maths level from Pre-Entry up to Level 2 so you can start from the right place.",
  },
  {
    step: "02",
    title: "Diagnostic assessment",
    description:
      "Identifies skill gaps and creates a personalised learning plan linked to the relevant topic modules.",
  },
  {
    step: "03",
    title: "Self-learning course",
    description:
      "Provides explanations, examples, demonstration videos and practice activities that you can pause, replay and revisit.",
  },
  {
    step: "04",
    title: "Skill checks",
    description:
      "Helps confirm understanding of each topic, with modules marked as achieved when the required score is reached.",
  },
  {
    step: "05",
    title: "Revision scenarios",
    description:
      "Includes interactive scenarios and assessment-style tasks to help you apply maths to real-life problems.",
  },
];

const practiceTopics = [
  "Fractions, decimals and percentages",
  "Ratios and proportion",
  "Graphs, charts and data",
  "Measurements and unit conversions",
  "Probability and statistics",
  "Real-life problem solving",
];

const learnerTypes = [
  "Adults returning to maths",
  "University applicants",
  "Apprentices",
  "Healthcare and nursing applicants",
  "Busy parents and workers",
  "Learners preparing for Level 1 or Level 2",
];

const faqs = [
  {
    question: "What is the Functional Skills Maths online course?",
    answer:
      "The Functional Skills Maths online course is a self-learning course designed to help learners prepare for Functional Skills Maths exams. It includes structured lessons, practice activities, assessments and revision tasks covering Entry Level, Level 1 and Level 2.",
  },
  {
    question: "Does the online maths course include Level 1 and Level 2?",
    answer:
      "Yes. Intech Centre's online Functional Skills Maths course includes all levels, including Entry Level, Level 1 and Level 2. This helps learners start from their current level and build up towards the exam.",
  },
  {
    question: "How long do I get access to the course?",
    answer:
      "Intech Centre lists the online Functional Skills Maths course as including 2 months of unlimited access to online interactive learning.",
  },
  {
    question: "How much does the online Functional Skills Maths course cost?",
    answer:
      "Intech Centre lists the course at £150 as a standalone course, or £75 when bought with an exam. Candidates should always check the current Intech Centre course page before purchasing.",
  },
  {
    question: "Do I need the course before taking the exam?",
    answer:
      "Not always. Some learners are ready to book the exam directly. Others use the online course first to revise key topics, practise questions and build confidence before sitting the Functional Skills Maths exam.",
  },
  {
    question: "Does completing the course give me the qualification?",
    answer:
      "No. The course is preparation only. To obtain a Functional Skills Maths qualification, you must take and pass the official Functional Skills Maths exam.",
  },
  {
    question: "What topics are covered in the online maths course?",
    answer:
      "The course supports Functional Skills Maths topics such as fractions, decimals, percentages, ratios, graphs, data, measurements, unit conversions, probability, statistics and problem solving in real-life situations.",
  },
  {
    question: "Is the online maths course suitable for adults?",
    answer:
      "Yes. The course is suitable for adults returning to maths, learners who did not achieve GCSE maths at school, university applicants, apprentices, professionals and people preparing for nursing, teaching or healthcare courses.",
  },
  {
    question: "Can I study the course from home?",
    answer:
      "Yes. The course is online and self-paced, so learners can study from home, revisit lessons, practise questions and focus on the areas where they need the most improvement.",
  },
];

export default function OnlineMathsCoursePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-emerald-50 via-white to-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-emerald-800">
            Online exam preparation
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Online Functional Skills Maths Course
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Prepare for Functional Skills Maths Level 1 or Level 2 with an
            online self-learning course designed around the exam curriculum. The
            course covers Entry Level to Level 2, helping learners build
            confidence before booking the official exam.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              Entry Level to Level 2
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              2 months online access
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              Self-learning course
            </span>
          </div>
        </div>
      </section>

      <section className="border-y border-emerald-100 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {courseFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-3xl border border-slate-200 bg-slate-50/70 p-5 shadow-sm transition hover:border-emerald-200 hover:bg-emerald-50/50"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-sm font-bold text-emerald-800">
                  {fact.icon}
                </div>

                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  {fact.label}
                </p>

                <h2 className="mt-2 text-base font-bold text-slate-950">
                  {fact.value}
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {fact.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Study online
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Prepare before you book your Functional Skills Maths exam
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-slate-600">
              The online Functional Skills Maths course is designed for learners
              who want flexible preparation before sitting the exam. It supports
              practical maths skills for everyday life, employment and further
              education, including percentages, ratios, graphs, measurements and
              problem solving.
            </p>

            <p className="mt-4 max-w-4xl leading-7 text-slate-600">
              This is especially useful if you have been away from maths for a
              long time, did not achieve GCSE maths at school, need a GCSE
              equivalent qualification, or want to feel more confident before
              booking your Functional Skills Maths Level 1 or Level 2 exam.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-emerald-100 bg-emerald-50/60 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Important
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Course first, exam after
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-slate-600">
              The online course helps you prepare, but it does not automatically
              give you the qualification. To receive a Functional Skills Maths
              qualification, you must take and pass the official Functional
              Skills Maths exam.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-emerald-100">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-sm font-bold text-emerald-800">
                  ✓
                </div>

                <h3 className="text-xl font-bold text-slate-950">
                  Course = preparation
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Use the course to revise topics, practise questions and build
                  confidence before the exam.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-emerald-100">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-700 text-sm font-bold text-white">
                  ★
                </div>

                <h3 className="text-xl font-bold text-slate-950">
                  Exam = qualification
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Passing the official Functional Skills Maths exam is what
                  gives you the recognised qualification.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Course structure
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                What is included in the online course?
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                The course is structured to help learners understand their
                current level, identify weak areas and practise the topics
                needed for the Functional Skills Maths exam.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courseSteps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-sm font-bold text-emerald-800">
                    {step.step}
                  </div>

                  <h3 className="text-lg font-bold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Maths topics
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              What will you practise?
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-slate-600">
              Functional Skills Maths focuses on practical maths that can be
              applied to real-life, work and study situations. The course helps
              learners practise key topic areas often needed for Level 1 and
              Level 2 preparation.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {practiceTopics.map((topic) => (
                <div
                  key={topic}
                  className="flex gap-3 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 transition hover:bg-emerald-50 hover:ring-emerald-200"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-800">
                    ✓
                  </span>

                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    {topic}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Who it helps
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Who is this online maths course for?
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                The course is designed for learners who want flexible maths
                preparation before sitting a Functional Skills Maths exam.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                It can be especially useful for learners balancing study around
                work, family, apprenticeships, university applications or career
                goals.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {learnerTypes.map((type) => (
                <div
                  key={type}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-sm font-bold text-emerald-800">
                    ✓
                  </div>

                  <h3 className="font-bold text-slate-950">{type}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50/60 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Need preparation first?
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                Start with the online maths course
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Choose this route if you want to build confidence first. The
                online course gives access to Entry Level, Level 1 and Level 2
                content, helping you work towards the level you need.
              </p>

              <a
                href="https://www.intechcentre.com/courses/private-functional-skills-in-maths/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-700/20 transition hover:-translate-y-0.5 hover:bg-emerald-800"
              >
                View Intech Centre course
              </a>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Ready for the exam?
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                Book the online maths exam
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Choose this route if you already feel ready to sit the exam.
                Passing the official Functional Skills Maths exam is what gives
                you the recognised qualification.
              </p>

              <Link
                href="/online-functional-skills-maths-exam"
                className="mt-6 inline-flex rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-800 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-700 hover:bg-emerald-50"
              >
                View online exam route
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Online Maths Course FAQs" faqs={faqs} />

      <CTASection
        title="Want to prepare before your online maths exam?"
        description="Visit Intech Centre to check the latest Functional Skills Maths online course information, price and enrolment guidance."
        link="https://www.intechcentre.com/courses/private-functional-skills-in-maths/"
        label="View Online Maths Course"
      />
    </>
  );
}
