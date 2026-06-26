import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  MonitorCheck,
  Clock,
  BadgePoundSterling,
  FileCheck,
  BadgeCheck,
  Percent,
  GraduationCap,
  Calculator,
  CircleSlash,
  University,
  HeartPulse,
  School,
  BriefcaseBusiness,
  HardHat,
  TrendingUp,
  ClipboardCheck,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Functional Skills Maths Level 2 | GCSE Equivalent Maths",
  description:
    "Learn about Functional Skills Maths Level 2, GCSE equivalence, online exam structure, results, pass mark, preparation and booking routes through Intech Centre.",
};

const examFacts = [
  {
    label: "Awarding body",
    value: "City & Guilds",
    detail: "Functional Skills Maths Level 2",
    icon: Award,
  },
  {
    label: "Qualification",
    value: "Ofqual regulated",
    detail: "Recognised UK qualification",
    icon: ShieldCheck,
  },
  {
    label: "Exam style",
    value: "Online exam",
    detail: "Computer-based and remotely invigilated",
    icon: MonitorCheck,
  },
  {
    label: "Duration",
    value: "1h 45m",
    detail: "Level 2 online exam time",
    icon: Clock,
  },
  {
    label: "Cost",
    value: "£180",
    detail: "Per exam attempt",
    icon: BadgePoundSterling,
  },
  {
    label: "Results",
    value: "Usually within a week",
    detail: "May take up to 20 working days",
    icon: FileCheck,
  },
];

const learnerReasons = [
  {
    title: "University applications",
    icon: University,
  },
  {
    title: "Nursing & healthcare courses",
    icon: HeartPulse,
  },
  {
    title: "Teacher training",
    icon: School,
  },
  {
    title: "Apprenticeships",
    icon: GraduationCap,
  },
  {
    title: "Construction courses",
    icon: HardHat,
  },
  {
    title: "Career progression",
    icon: TrendingUp,
  },
  {
    title: "Job applications",
    icon: BriefcaseBusiness,
  },
  {
    title: "Adults returning to education",
    icon: Users,
  },
];

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
  {
    question: "Can I take Functional Skills Maths Level 2 online from home?",
    answer:
      "Yes. Learners can take the Functional Skills Maths Level 2 exam online from home or another suitable private location, as long as their computer, internet connection, ID and room setup meet the online exam requirements.",
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

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              GCSE Grade 4/C equivalent route
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              Online computer-based exam
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              City & Guilds
            </span>
          </div>
        </div>
      </section>

      <section className="border-y border-emerald-100 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {examFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-3xl border border-slate-200 bg-slate-50/70 p-5 shadow-sm transition hover:border-emerald-200 hover:bg-emerald-50/50"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                  <fact.icon className="h-5 w-5" aria-hidden="true" />
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
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-700 text-white">
                  <BadgeCheck className="h-5 w-5" aria-hidden="true" />
                </div>

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
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                  <Percent className="h-5 w-5" aria-hidden="true" />
                </div>

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
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                  <MonitorCheck className="h-5 w-5" aria-hidden="true" />
                </div>

                <h3 className="font-bold text-slate-950">Online exam option</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Learners can choose an online exam route and sit the exam
                  remotely if they meet the technical and room requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-emerald-100 bg-emerald-50/60 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Exam structure
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Calculator and non-calculator sections
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-slate-600">
              The online Functional Skills Maths Level 2 exam is made up of two
              sections. The final result is based on the total marks achieved
              across both sections.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <CircleSlash className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="text-xl font-bold text-slate-950">
                  Non-calculator section
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  This section lasts 25 minutes and counts for 25% of the total
                  marks. Candidates are not allowed to use a calculator in this
                  part.
                </p>
              </div>

              <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-700 text-white">
                  <Calculator className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="text-xl font-bold text-slate-950">
                  Calculator section
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  This section lasts 1 hour 20 minutes and counts for 75% of the
                  total marks. Calculators are only allowed in this section.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Who it helps
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Who needs Functional Skills Maths Level 2?
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Many learners choose Level 2 because they need a recognised
                maths qualification for a specific next step in education, work
                or training.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                It is especially useful for adults and learners who need a GCSE
                equivalent maths route for applications, career progression or
                further study.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {learnerReasons.map((reason) => (
                <div
                  key={reason.title}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                    <reason.icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="font-bold text-slate-950">{reason.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Ready for the exam?
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                Book the online Level 2 exam
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Choose this route if you already feel confident with Functional
                Skills Maths topics and want to take the official online exam.
                Passing the exam is what gives you the qualification.
              </p>

              <a
                href="https://www.intechcentre.com/courses/online-functional-skills-maths-level-2-exam-2/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-700/20 transition hover:-translate-y-0.5 hover:bg-emerald-800"
              >
                View Intech Centre Level 2 Exam
              </a>
            </div>

            <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50/60 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Need preparation first?
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                Use the online maths course first
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                If you are not ready to sit the exam yet, you can revise with an
                online Functional Skills Maths course covering Entry Level,
                Level 1 and Level 2 topics before booking your exam.
              </p>
              <Link
                href="/online-maths-course"
                className="mt-6 inline-flex rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-800 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-700 hover:bg-emerald-50"
              >
                View Online Maths Course
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Functional Skills Maths Level 2 FAQs" faqs={faqs} />

      <CTASection
        title="Need Functional Skills Maths Level 2?"
        description="Check the online exam information, current price, available slots and booking route through Intech Centre."
        link="https://www.intechcentre.com/courses/online-functional-skills-maths-level-2-exam-2/"
        label="View Online Level 2 Exam"
      />
    </>
  );
}
