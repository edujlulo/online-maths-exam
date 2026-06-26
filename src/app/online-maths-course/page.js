import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Online Functional Skills Maths Course | Level 1 & Level 2",
  description:
    "Prepare for Functional Skills Maths Level 1 and Level 2 with an online self-learning course covering Entry Level to Level 2, diagnostic assessment, skill checks and revision scenarios.",
};

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

const courseSteps = [
  {
    title: "Initial assessment",
    description:
      "Checks your current maths level from Pre-Entry up to Level 2 so you can start from the right place.",
  },
  {
    title: "Diagnostic assessment",
    description:
      "Identifies skill gaps and creates a personalised learning plan linked to the relevant topic modules.",
  },
  {
    title: "Self-learning course",
    description:
      "Provides explanations, examples, demonstration videos and practice activities that you can pause, replay and revisit.",
  },
  {
    title: "Skill checks",
    description:
      "Helps confirm understanding of each topic, with modules marked as achieved when the required score is reached.",
  },
  {
    title: "Revision scenarios",
    description:
      "Includes interactive scenarios and assessment-style tasks to help you apply maths to real-life problems.",
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
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Access
              </p>

              <h2 className="mt-3 text-xl font-bold text-slate-950">
                2 months online
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Study online with unlimited access during the course access
                period listed by Intech Centre.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Levels
              </p>

              <h2 className="mt-3 text-xl font-bold text-slate-950">
                Entry Level to Level 2
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                The course includes all levels, so learners can start lower and
                build towards Level 1 or Level 2.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Price
              </p>

              <h2 className="mt-3 text-xl font-bold text-slate-950">
                £75 with exam
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Intech Centre lists the course at £75 when bought with the exam
                or £150 as a standalone course.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Purpose
              </p>

              <h2 className="mt-3 text-xl font-bold text-slate-950">
                Exam preparation
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                The course helps you prepare, but the qualification is only
                awarded after passing the official exam.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
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
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
                >
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

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Who it helps
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                Built for busy learners
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                The online course can suit adults, apprentices, university
                applicants, home learners and professionals who need flexible
                maths preparation around work, family or study commitments.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Important
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                Course first, exam after
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Completing the online course does not automatically give you the
                qualification. Once you feel ready, you still need to book and
                pass the official Functional Skills Maths exam to receive the
                qualification.
              </p>
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
